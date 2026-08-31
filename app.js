// Inizializzazione icone Lucide e configurazione iniziale
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
  setupDateConstraints();
  setupEventListeners();
});

// Prezzi per notte per tipologia camera (B&B CaMa Gragnano)
const roomPrices = {
  standard: { name: "Camera Matrimoniale Standard", price: 70 },
  superior: { name: "Camera con Balcone e Vista Montagna", price: 90 },
  suite: { name: "Camera Familiare / Tripla", price: 110 }
};

// Configura date minime consentite (oggi e domani)
function setupDateConstraints() {
  const checkinInput = document.getElementById('checkin');
  const checkoutInput = document.getElementById('checkout');

  if (!checkinInput || !checkoutInput) return;

  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  const minDate = `${yyyy}-${mm}-${dd}`;

  checkinInput.min = minDate;

  // Imposta default domani per check-in e dopodomani per check-out
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split('T')[0];
  checkinInput.value = tomorrowStr;
  checkoutInput.min = tomorrowStr;

  const dayAfter = new Date(tomorrow);
  dayAfter.setDate(dayAfter.getDate() + 2);
  checkoutInput.value = dayAfter.toISOString().split('T')[0];

  updatePriceCalculation();
}

function setupEventListeners() {
  const checkinInput = document.getElementById('checkin');
  const checkoutInput = document.getElementById('checkout');
  const camereSelect = document.getElementById('camere');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  // Toggle menu mobile
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Aggiornamento dinamico data minima checkout
  if (checkinInput && checkoutInput) {
    checkinInput.addEventListener('change', () => {
      if (checkinInput.value) {
        const nextDay = new Date(checkinInput.value);
        nextDay.setDate(nextDay.getDate() + 1);
        const nextDayStr = nextDay.toISOString().split('T')[0];
        checkoutInput.min = nextDayStr;

        if (checkoutInput.value && checkoutInput.value <= checkinInput.value) {
          checkoutInput.value = nextDayStr;
        }
      }
      updatePriceCalculation();
    });

    checkoutInput.addEventListener('change', updatePriceCalculation);
  }

  if (camereSelect) {
    camereSelect.addEventListener('change', updatePriceCalculation);
  }
}

// Calcolo automatico notti e totale
function updatePriceCalculation() {
  const checkin = document.getElementById('checkin').value;
  const checkout = document.getElementById('checkout').value;
  const cameraType = document.getElementById('camere').value;
  const priceSummary = document.getElementById('priceSummary');
  const summaryNights = document.getElementById('summaryNights');
  const summaryTotal = document.getElementById('summaryTotal');

  if (checkin && checkout && cameraType) {
    const d1 = new Date(checkin);
    const d2 = new Date(checkout);
    const diffTime = d2.getTime() - d1.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays > 0) {
      const pricePerNight = roomPrices[cameraType]?.price || 70;
      const total = diffDays * pricePerNight;

      summaryNights.textContent = `${diffDays} ${diffDays === 1 ? 'notte' : 'notti'}`;
      summaryTotal.textContent = `€${total}`;
      priceSummary.classList.remove('hidden');
      return { diffDays, total, pricePerNight };
    }
  }
  priceSummary.classList.add('hidden');
  return null;
}

// Shortcut selezione rapida da card camere
function selezionaCamera(type) {
  const camereSelect = document.getElementById('camere');
  if (camereSelect) {
    camereSelect.value = type;
    updatePriceCalculation();
    const prenotaSection = document.getElementById('prenota');
    if (prenotaSection) {
      prenotaSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

// Gestione invio form disponibilità e apertura modale
let currentBookingData = {};

function handleBookingSubmit(event) {
  event.preventDefault();
  
  const checkin = document.getElementById('checkin').value;
  const checkout = document.getElementById('checkout').value;
  const ospiti = document.getElementById('ospiti').value;
  const cameraType = document.getElementById('camere').value;

  const calc = updatePriceCalculation();
  if (!calc || calc.diffDays <= 0) {
    alert("Per favore seleziona un intervallo di date valido.");
    return;
  }

  const roomInfo = roomPrices[cameraType] || { name: cameraType, price: 70 };

  currentBookingData = {
    checkin,
    checkout,
    nights: calc.diffDays,
    guests: ospiti,
    roomType: roomInfo.name,
    total: calc.total
  };

  // Popola la modale
  document.getElementById('modalDates').textContent = `${checkin} → ${checkout} (${calc.diffDays} notti)`;
  document.getElementById('modalGuests').textContent = `${ospiti} ${ospiti == 1 ? 'Ospite' : 'Ospiti'}`;
  document.getElementById('modalRoom').textContent = roomInfo.name;
  document.getElementById('modalTotal').textContent = `€${calc.total}`;

  // Mostra la modale
  const modal = document.getElementById('bookingModal');
  modal.classList.remove('hidden');
  if (window.lucide) window.lucide.createIcons();
}

function closeModal() {
  const modal = document.getElementById('bookingModal');
  modal.classList.add('hidden');
}

// Invio rapido via WhatsApp al numero reale di B&B CaMa (+39 344 718 6581)
function sendViaWhatsApp() {
  const name = document.getElementById('guestName').value || "Cliente";
  const phone = document.getElementById('guestPhone').value || "";

  if (!currentBookingData.checkin) {
    alert("Dati mancanti. Riprova.");
    return;
  }

  const msg = encodeURIComponent(
    `Salve B&B CaMa, vorrei verificare la disponibilità per un soggiorno:\n\n` +
    `👤 Ospite: ${name}\n` +
    `📞 Telefono: ${phone}\n` +
    `📅 Check-in (dalle 17:00): ${currentBookingData.checkin}\n` +
    `📅 Check-out (entro 10:30): ${currentBookingData.checkout}\n` +
    `🌙 Notti: ${currentBookingData.nights}\n` +
    `👥 Ospiti: ${currentBookingData.guests}\n` +
    `🛏️ Camera: ${currentBookingData.roomType}\n` +
    `💰 Totale indicativo: €${currentBookingData.total}\n\n` +
    `In attesa di vostra gentile conferma, cordiali saluti.`
  );

  // Numero reale B&B CaMa da Booking.com
  const waUrl = `https://wa.me/393447186581?text=${msg}`;
  window.open(waUrl, '_blank');
}

// Invio richiesta via Email
function sendFinalBooking(event) {
  event.preventDefault();

  const name = document.getElementById('guestName').value;
  const email = document.getElementById('guestEmail').value;
  const phone = document.getElementById('guestPhone').value;

  const subject = encodeURIComponent(`Richiesta Prenotazione B&B CaMa - ${name}`);
  const body = encodeURIComponent(
    `Richiesta inviata dal sito web per B&B CaMa:\n\n` +
    `Nome: ${name}\n` +
    `Email: ${email}\n` +
    `Telefono: ${phone}\n` +
    `Check-in (dalle 17:00): ${currentBookingData.checkin}\n` +
    `Check-out (entro 10:30): ${currentBookingData.checkout} (${currentBookingData.nights} notti)\n` +
    `Ospiti: ${currentBookingData.guests}\n` +
    `Camera: ${currentBookingData.roomType}\n` +
    `Totale stimato: €${currentBookingData.total}\n`
  );

  window.location.href = `mailto:info@bb-cama.it?subject=${subject}&body=${body}`;
  closeModal();
}
