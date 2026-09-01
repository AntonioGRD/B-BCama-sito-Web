// ==========================================================================
// LUSSO CAMA - INTERACTIVITY, BOOKING ENGINE & MULTILINGUAL (IT / EN)
// ==========================================================================

const TRANSLATIONS = {
  it: {
    topRating: 'Punteggio Booking.com <strong class="text-white font-bold">9.5 / 10</strong> • Eccezionale',
    topAddress: 'Via Raffaele Viviani, 36 (Piano 5), Gragnano (NA)',
    topWhatsApp: 'WhatsApp Diretto',
    navHome: 'Home',
    navRooms: 'Camere',
    navServices: 'Servizi',
    navReviews: 'Recensioni',
    navContacts: 'Contatti',
    navBook: 'Prenota',
    heroBadge: 'Esperienza di Charme & Panorama',
    heroLocation: 'Gragnano • Costiera Amalfitana • Pompei',
    heroTitle: 'Le Nostre Camere',
    heroSubtitle: "L'eleganza dell'ospitalità italiana con vista mozzafiato sui Monti Lattari",
    heroBtnBook: 'Prenota Soggiorno',
    heroBtnExplore: 'Esplora le Camere',
    sectionWelcome: 'Benvenuti a CaMa',
    sectionRoomsTitle: 'Le Nostre Camere',
    sectionRoomsQuote: "«Un'oasi di tranquillità ed eleganza al 5° piano con terrazza panoramica, dove ogni dettaglio è pensato per regalarti un soggiorno memorabile tra Pompei, Sorrento e la Costiera.»",
    sectionRoomsDesc: "Situato nel cuore di Gragnano, il B&B CaMa unisce la raffinatezza delle nostre camere dotate di bagno privato, aria condizionata autonoma e Smart TV, alla posizione strategica ideale per scoprire le meraviglie archeologiche e paesaggistiche della Campania.",
    // Pompei Room
    pompeiType: 'Camera Matrimoniale',
    pompeiDesc: 'Ampia camera con letto matrimoniale confortevole, bagno privato completo con doccia, climatizzazione autonoma, Smart TV e Wi-Fi veloce.',
    pompeiTag1: 'Bagno Privato',
    pompeiTag2: 'Letto Matrimoniale',
    pompeiTag3: 'Clima & TV',
    // Stabia Sunset
    stabiaType: 'Superior con Balcone',
    stabiaDesc: 'La sistemazione più suggestiva: accesso al balcone privato con vista panoramica sulla catena montuosa dei Monti Lattari, bagno privato e kit di benvenuto.',
    stabiaTag1: 'Balcone Panoramico',
    stabiaTag2: 'Bagno Privato',
    stabiaTag3: 'Vista Montagna',
    // VesuView
    vesuviewType: 'Matrimoniale con Balcone',
    vesuviewDesc: 'Splendida camera matrimoniale dotata di <strong>balcone panoramico</strong> con vista suggestiva. Riservata per <strong>2 persone</strong> (3° ospite consentito solo per <strong>neonato con culla</strong> su richiesta). Bagno privato e climatizzazione autonoma.',
    vesuviewTag1: 'Balcone Panoramico',
    vesuviewTag2: '2 Ospiti (+ Culla Neonato)',
    vesuviewTag3: 'Bagno Privato',
    
    roomRateFrom: 'Tariffa da',
    perNight: '/ notte',
    btnSelect: 'Seleziona',
    viewGallery: 'Apri Galleria +',
    allRoomPhotos: 'Tutte le foto della camera:',
    panoramicBalconyBadge: 'Balcone Panoramico',
    panoramicViewBadge: 'Vista Panoramica',
    // External
    commonAreasBadge: 'Terrazza & Servizi Comuni (5 Foto)',
    commonAreasTitle: 'Spazi Comuni & Panorama',
    commonAreasDesc: 'La terrazza panoramica al 5° piano con solarium e la cucina comune a disposizione degli ospiti.',
    terrazzaSolarium: 'Terrazza Solarium',
    vistaDallAlto: "Vista dall'Alto",
    montiLattari: 'Monti Lattari',
    areaRelax: 'Area Relax Terrazza',
    cucinaFrigo: 'Cucina & Frigorifero',
    // Services
    servicesBadge: 'Eccellenza & Accoglienza',
    servicesTitle: 'Servizi Premium',
    srv1Title: 'Check-in Esclusivo',
    srv1Desc: "Accoglienza personalizzata al 5° piano con ascensore, orari flessibili su richiesta e massima riservatezza.",
    srv2Title: 'Assistenza Dedicata',
    srv2Desc: "Consigli d'autore per ristoranti, pastifici storici di Gragnano, transfer per Pompei, Sorrento e la Costiera.",
    srv3Title: 'Miglior Tariffa Diretta',
    srv3Desc: "Prenota direttamente senza intermediari per ottenere il miglior prezzo garantito e assistenza immediata.",
    srv4Title: 'Comfort a 5 Stelle',
    srv4Desc: "Colazione all'italiana, caffè espresso, climatizzazione autonoma, Wi-Fi fibra e pulizia impeccabile (voto 10/10).",
    amenityWifi: 'Wi-Fi Fibra Gratuito',
    amenityAC: 'Climatizzazione Autonoma',
    amenityTV: 'Smart TV a Schermo Piatto',
    amenityKit: 'Set Cortesia & Asciugamani',
    // Reviews
    scoreTitle: 'Punteggio Eccezionale',
    scoreSubtitle: 'Riconoscimento ufficiale basato su recensioni verificate di ospiti internazionali.',
    scoreStaff: 'Accoglienza',
    scoreClean: 'Pulizia',
    scoreLoc: 'Posizione',
    review1Text: "«L'accoglienza è stata fantastica! La camera era impeccabile, pulitissima e dotata di ogni comfort. Bellissima la vista panoramica dal quinto piano.»",
    review1Author: 'Ospite Booking.com',
    review2Text: "«Posizione strategica per visitare Pompei, Sorrento e la Costiera senza lo stress del caos cittadino. Proprietario gentilissimo e sempre disponibile.»",
    review2Author: 'Coppia in Viaggio',
    review3Text: "«Struttura nuova, curata nei minimi dettagli, silenziosa e con un letto comodissimo. Ottima anche la colazione e la presenza dell'ascensore.»",
    review3Author: 'Ospite Italiano',
    // Booking
    bookBadge: 'Prenotazione Diretta al Miglior Prezzo',
    bookTitle: 'Verifica Disponibilità',
    bookSubtitle: 'Seleziona le date per calcolare la tariffa e inviare la richiesta',
    labelCheckin: 'Data Check-in (dalle 17:00)',
    labelCheckout: 'Data Check-out (entro 10:30)',
    labelGuests: 'Numero Ospiti',
    labelRoom: 'Tipologia Camera',
    guestCount1: '1 Ospite',
    guestCount2: '2 Ospiti',
    guestCount3: '3 Ospiti',
    guestCount4: '4 Ospiti',
    optPompei: 'Pompei Room (Standard) - €70/notte',
    optStabia: 'Stabia Sunset (Vista Montagna) - €90/notte',
    optVesu: 'VesuView (Balcone Panoramico • 2 Ospiti + Culla) - €90/notte',
    stayDuration: 'Durata soggiorno',
    estimatedTotal: 'Totale stimato',
    btnBookSubmit: 'Richiedi Prenotazione & Verifica',
    bookDisclaimer: 'Risposta immediata. Nessun pagamento anticipato richiesto in questa fase.',
    // Reception & Contacts
    contactsSectionTitle: 'Reception & Contatti',
    contactsHelpTitle: 'Assistenza Personalizzata',
    contactsHelpDesc: 'Il nostro team è a tua completa disposizione per informazioni sulle camere, consigli di viaggio, orari di check-in personalizzati ed esigenze speciali.',
    contactPhoneLabel: 'Mobile & Info',
    contactLandlineLabel: 'Telefono Fisso',
    contactWhatsAppLabel: 'WhatsApp Diretto 24/7',
    contactWhatsAppSub: 'Scrivici in tempo reale',
    contactEmailLabel: 'Email Ufficiale',
    contactAddressLabel: 'Posizione & Indirizzo',
    contactAddressValue: 'Via Raffaele Viviani, 36 (Piano 5 con ascensore)<br>80054 Gragnano (NA), Italia',
    formTitle: 'Richiesta Diretta di Soggiorno',
    inputNamePh: 'Nome e Cognome *',
    inputEmailPh: 'Email *',
    inputPhonePh: 'Telefono / WhatsApp',
    optAllRooms: "Camera d'interesse (qualsiasi)",
    inputNotesPh: 'Date indicative o note speciali',
    btnFormSubmit: 'Invia Richiesta di Soggiorno',
    footerCheckinHours: 'Check-in: 17:00 - 21:00',
    footerCheckoutHours: 'Check-out: 08:00 - 10:30',
    footerCopyright: '© 2026 • Tutti i diritti riservati'
  },
  en: {
    topRating: 'Booking.com Rating <strong class="text-white font-bold">9.5 / 10</strong> • Exceptional',
    topAddress: 'Via Raffaele Viviani, 36 (5th Floor), Gragnano (NA), Italy',
    topWhatsApp: 'Direct WhatsApp',
    navHome: 'Home',
    navRooms: 'Rooms',
    navServices: 'Services',
    navReviews: 'Reviews',
    navContacts: 'Contacts',
    navBook: 'Book Now',
    heroBadge: 'Charming & Scenic Experience',
    heroLocation: 'Gragnano • Amalfi Coast • Pompeii',
    heroTitle: 'Our Rooms',
    heroSubtitle: 'The elegance of Italian hospitality with breathtaking views of the Lattari Mountains',
    heroBtnBook: 'Book Your Stay',
    heroBtnExplore: 'Explore Rooms',
    sectionWelcome: 'Welcome to CaMa',
    sectionRoomsTitle: 'Our Rooms',
    sectionRoomsQuote: '«A peaceful and elegant haven on the 5th floor with a panoramic terrace, where every detail is designed for a memorable stay between Pompeii, Sorrento, and the Amalfi Coast.»',
    sectionRoomsDesc: 'Located in the heart of Gragnano, B&B CaMa combines refined rooms featuring private bathrooms, climate control, and Smart TVs with a strategic location ideal for exploring the historical and natural wonders of Campania.',
    // Pompei Room
    pompeiType: 'Double Room',
    pompeiDesc: 'Spacious room with a comfortable double bed, full private bathroom with shower, autonomous air conditioning, Smart TV, and high-speed Wi-Fi.',
    pompeiTag1: 'Private Bathroom',
    pompeiTag2: 'Double Bed',
    pompeiTag3: 'A/C & TV',
    // Stabia Sunset
    stabiaType: 'Superior with Balcony',
    stabiaDesc: 'The most scenic accommodation: access to a private balcony with panoramic views of the Lattari Mountains, private bathroom, and welcome amenities.',
    stabiaTag1: 'Panoramic Balcony',
    stabiaTag2: 'Private Bathroom',
    stabiaTag3: 'Mountain View',
    // VesuView
    vesuviewType: 'Double with Balcony',
    vesuviewDesc: 'Charming double room with a <strong>panoramic balcony</strong> and scenic views. Designed for <strong>2 guests</strong> (3rd guest allowed only for <strong>infant with crib</strong> upon request). Private bathroom and climate control.',
    vesuviewTag1: 'Panoramic Balcony',
    vesuviewTag2: '2 Guests (+ Infant Crib)',
    vesuviewTag3: 'Private Bathroom',
    
    roomRateFrom: 'From',
    perNight: '/ night',
    btnSelect: 'Select',
    viewGallery: 'Open Gallery +',
    allRoomPhotos: 'All room photos:',
    panoramicBalconyBadge: 'Panoramic Balcony',
    panoramicViewBadge: 'Panoramic View',
    // External
    commonAreasBadge: 'Terrace & Shared Areas (5 Photos)',
    commonAreasTitle: 'Shared Spaces & Scenic Views',
    commonAreasDesc: 'The 5th-floor panoramic solarium terrace and shared kitchen available for all guests.',
    terrazzaSolarium: 'Solarium Terrace',
    vistaDallAlto: 'Aerial View',
    montiLattari: 'Lattari Mountains',
    areaRelax: 'Terrace Relax Area',
    cucinaFrigo: 'Kitchen & Refrigerator',
    // Services
    servicesBadge: 'Excellence & Hospitality',
    servicesTitle: 'Premium Services',
    srv1Title: 'Exclusive Check-in',
    srv1Desc: 'Personalized greeting on the 5th floor with elevator access, flexible arrival times on request, and total privacy.',
    srv2Title: 'Dedicated Assistance',
    srv2Desc: 'Curated recommendations for local restaurants, historic pasta factories of Gragnano, and transfers to Pompeii & the Coast.',
    srv3Title: 'Best Direct Rate',
    srv3Desc: 'Book directly with no intermediary fees to enjoy the best guaranteed rates and immediate assistance.',
    srv4Title: '5-Star Comfort',
    srv4Desc: 'Italian breakfast, espresso coffee, climate control, fiber Wi-Fi, and immaculate cleanliness (10/10 rating).',
    amenityWifi: 'Free Fiber Wi-Fi',
    amenityAC: 'Autonomous Climate Control',
    amenityTV: 'Flat-Screen Smart TV',
    amenityKit: 'Courtesy Kit & Fresh Towels',
    // Reviews
    scoreTitle: 'Exceptional Rating',
    scoreSubtitle: 'Official recognition based on verified reviews from international travelers.',
    scoreStaff: 'Staff & Welcome',
    scoreClean: 'Cleanliness',
    scoreLoc: 'Location',
    review1Text: '«The hospitality was outstanding! The room was spotless, peaceful, and equipped with every comfort. The panoramic view from the 5th floor was simply breathtaking.»',
    review1Author: 'Booking.com Guest',
    review2Text: '«Strategic location for visiting Pompeii, Sorrento, and the Amalfi Coast away from city chaos. The host is extremely kind and helpful.»',
    review2Author: 'Traveling Couple',
    review3Text: '«Brand new property, cared for in every detail, very quiet with a super comfortable bed. Delicious breakfast and convenient elevator access.»',
    review3Author: 'Italian Guest',
    // Booking
    bookBadge: 'Direct Booking at Best Guaranteed Rate',
    bookTitle: 'Check Availability',
    bookSubtitle: 'Select your dates to calculate estimated price and send your request',
    labelCheckin: 'Check-in Date (from 17:00)',
    labelCheckout: 'Check-out Date (by 10:30)',
    labelGuests: 'Number of Guests',
    labelRoom: 'Room Type',
    guestCount1: '1 Guest',
    guestCount2: '2 Guests',
    guestCount3: '3 Guests',
    guestCount4: '4 Guests',
    optPompei: 'Pompei Room (Standard) - €70/night',
    optStabia: 'Stabia Sunset (Mountain View) - €90/night',
    optVesu: 'VesuView (Panoramic Balcony • 2 Guests + Crib) - €90/night',
    stayDuration: 'Stay duration',
    estimatedTotal: 'Estimated total',
    btnBookSubmit: 'Request Booking & Check Availability',
    bookDisclaimer: 'Immediate response. No upfront payment required at this stage.',
    // Reception & Contacts
    contactsSectionTitle: 'Reception & Contacts',
    contactsHelpTitle: 'Personalized Support',
    contactsHelpDesc: 'Our team is at your complete disposal for room inquiries, local travel advice, tailored check-in arrangements, and special requests.',
    contactPhoneLabel: 'Mobile & Inquiries',
    contactLandlineLabel: 'Landline Phone',
    contactWhatsAppLabel: 'Direct WhatsApp 24/7',
    contactWhatsAppSub: 'Chat with us in real time',
    contactEmailLabel: 'Official Email',
    contactAddressLabel: 'Location & Address',
    contactAddressValue: 'Via Raffaele Viviani, 36 (5th Floor with elevator)<br>80054 Gragnano (NA), Italy',
    formTitle: 'Direct Stay Inquiry',
    inputNamePh: 'Full Name *',
    inputEmailPh: 'Email Address *',
    inputPhonePh: 'Phone / WhatsApp',
    optAllRooms: 'Room of Interest (Any)',
    inputNotesPh: 'Tentative dates or special requests',
    btnFormSubmit: 'Send Stay Request',
    footerCheckinHours: 'Check-in: 17:00 - 21:00',
    footerCheckoutHours: 'Check-out: 08:00 - 10:30',
    footerCopyright: '© 2026 • All rights reserved'
  }
};

let currentLang = localStorage.getItem('cama_lang') || 'it';

function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  localStorage.setItem('cama_lang', lang);
  document.documentElement.lang = lang;

  // Update text contents
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TRANSLATIONS[lang][key]) {
      el.innerHTML = TRANSLATIONS[lang][key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (TRANSLATIONS[lang][key]) {
      el.placeholder = TRANSLATIONS[lang][key];
    }
  });

  // Update active status on buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.dataset.lang === lang) {
      btn.classList.add('bg-gold-500', 'text-black', 'font-bold');
      btn.classList.remove('text-zinc-400', 'hover:text-white');
    } else {
      btn.classList.remove('bg-gold-500', 'text-black', 'font-bold');
      btn.classList.add('text-zinc-400', 'hover:text-white');
    }
  });

  updatePriceCalculator();
}

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Set default dates
  const checkinInput = document.getElementById('checkin');
  const checkoutInput = document.getElementById('checkout');

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfter = new Date(today);
  dayAfter.setDate(dayAfter.getDate() + 3);

  const formatDate = (date) => date.toISOString().split('T')[0];

  if (checkinInput && checkoutInput) {
    checkinInput.min = formatDate(tomorrow);
    checkinInput.value = formatDate(tomorrow);
    checkoutInput.min = formatDate(dayAfter);
    checkoutInput.value = formatDate(dayAfter);

    checkinInput.addEventListener('change', updatePriceCalculator);
    checkoutInput.addEventListener('change', updatePriceCalculator);
    document.getElementById('camere')?.addEventListener('change', updatePriceCalculator);
    document.getElementById('ospiti')?.addEventListener('change', updatePriceCalculator);
  }

  // Mobile menu toggle
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Close mobile menu on link click
  document.querySelectorAll('#mobileMenu a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu?.classList.add('hidden');
    });
  });

  // Apply initial language
  setLanguage(currentLang);
});

// Room Prices configuration
const ROOM_DATA = {
  standard: { name: 'Pompei Room (Standard)', price: 70 },
  superior: { name: 'Stabia Sunset (Vista Montagna)', price: 90 },
  suite: { name: 'VesuView (Balcone Panoramico - 2 Ospiti + Culla)', price: 90 }
};

// Calculate booking price dynamically
function updatePriceCalculator() {
  const checkin = document.getElementById('checkin')?.value;
  const checkout = document.getElementById('checkout')?.value;
  const roomType = document.getElementById('camere')?.value || 'superior';
  const priceSummary = document.getElementById('priceSummary');
  const summaryNights = document.getElementById('summaryNights');
  const summaryTotal = document.getElementById('summaryTotal');

  if (!checkin || !checkout) return;

  const date1 = new Date(checkin);
  const date2 = new Date(checkout);
  const diffTime = date2.getTime() - date1.getTime();
  const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (nights > 0 && priceSummary && summaryNights && summaryTotal) {
    priceSummary.classList.remove('hidden');
    const nightLabel = currentLang === 'en' ? (nights === 1 ? 'night' : 'nights') : (nights === 1 ? 'notte' : 'notti');
    summaryNights.textContent = `${nights} ${nightLabel}`;
    const rate = ROOM_DATA[roomType]?.price || 85;
    const total = nights * rate;
    summaryTotal.textContent = `€${total}`;
  } else if (priceSummary) {
    priceSummary.classList.add('hidden');
  }
}

// Select room from cards
function selezionaCamera(roomKey) {
  const select = document.getElementById('camere');
  if (select) {
    select.value = roomKey;
    updatePriceCalculator();
  }
  const prenotaSec = document.getElementById('prenota') || document.getElementById('contatti');
  prenotaSec?.scrollIntoView({ behavior: 'smooth' });
}

// Open booking modal
let bookingData = {};

function handleBookingSubmit(e) {
  e.preventDefault();
  const checkin = document.getElementById('checkin').value;
  const checkout = document.getElementById('checkout').value;
  const ospiti = document.getElementById('ospiti').value;
  const roomKey = document.getElementById('camere').value;

  const date1 = new Date(checkin);
  const date2 = new Date(checkout);
  const diffTime = date2.getTime() - date1.getTime();
  const nights = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
  const roomName = ROOM_DATA[roomKey]?.name || 'Camera B&B CaMa';
  const total = nights * (ROOM_DATA[roomKey]?.price || 85);

  bookingData = { checkin, checkout, ospiti, roomKey, roomName, nights, total };

  const nightsWord = currentLang === 'en' ? (nights === 1 ? 'night' : 'nights') : (nights === 1 ? 'notti' : 'notti');
  const guestsWord = currentLang === 'en' ? 'Guests' : 'Ospiti';

  document.getElementById('modalDates').textContent = `${checkin} → ${checkout} (${nights} ${nightsWord})`;
  document.getElementById('modalGuests').textContent = `${ospiti} ${guestsWord}`;
  document.getElementById('modalRoom').textContent = roomName;
  document.getElementById('modalTotal').textContent = `€${total}`;

  document.getElementById('bookingModal').classList.remove('hidden');
  document.getElementById('bookingModal').classList.add('flex');
}

function closeModal() {
  const modal = document.getElementById('bookingModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

// Send via WhatsApp directly
function sendViaWhatsApp() {
  const name = document.getElementById('guestName')?.value || 'Ospite';
  const phone = document.getElementById('guestPhone')?.value || '';
  const email = document.getElementById('guestEmail')?.value || '';

  const isEn = currentLang === 'en';
  const intro = isEn ? 'Hello B&B CaMa, I would like to request a booking:' : 'Salve B&B CaMa, desidero richiedere una prenotazione:';
  const nameLbl = isEn ? 'Name' : 'Nome';
  const phoneLbl = isEn ? 'Phone' : 'Telefono';
  const roomLbl = isEn ? 'Room' : 'Camera';
  const nightsLbl = isEn ? 'nights' : 'notti';
  const guestsLbl = isEn ? 'Guests' : 'Ospiti';
  const totalLbl = isEn ? 'Estimated Total' : 'Totale Stimato';

  const msg = `${intro}%0A` +
    `👤 *${nameLbl}:* ${encodeURIComponent(name)}%0A` +
    `📞 *${phoneLbl}:* ${encodeURIComponent(phone)}%0A` +
    `✉️ *Email:* ${encodeURIComponent(email)}%0A` +
    `🛏️ *${roomLbl}:* ${encodeURIComponent(bookingData.roomName || 'Camera')}%0A` +
    `📅 *Check-in:* ${bookingData.checkin}%0A` +
    `📅 *Check-out:* ${bookingData.checkout} (${bookingData.nights} ${nightsLbl})%0A` +
    `👥 *${guestsLbl}:* ${bookingData.ospiti}%0A` +
    `💰 *${totalLbl}:* €${bookingData.total}`;

  window.open(`https://wa.me/393447186581?text=${msg}`, '_blank');
}

function sendFinalBooking(e) {
  e.preventDefault();
  const name = document.getElementById('guestName').value;
  const phone = document.getElementById('guestPhone').value;
  const email = document.getElementById('guestEmail').value;

  const isEn = currentLang === 'en';
  const subject = encodeURIComponent(isEn ? `Booking Request B&B CaMa - ${name}` : `Richiesta Prenotazione B&B CaMa - ${name}`);
  const body = encodeURIComponent(
    `Richiesta di soggiorno / Booking Request B&B CaMa:\n\n` +
    `Nome / Name: ${name}\n` +
    `Telefono / Phone: ${phone}\n` +
    `Email: ${email}\n` +
    `Camera / Room: ${bookingData.roomName}\n` +
    `Date / Period: Dal ${bookingData.checkin} al ${bookingData.checkout} (${bookingData.nights} notti / nights)\n` +
    `Ospiti / Guests: ${bookingData.ospiti}\n` +
    `Totale indicativo / Total: €${bookingData.total}\n`
  );

  window.location.href = `mailto:bebcama1963@gmail.com?subject=${subject}&body=${body}`;
}

// Reception direct inquiry submission
function handleContactSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('contactName').value;
  const email = document.getElementById('contactEmail').value;
  const phone = document.getElementById('contactPhone').value;
  const room = document.getElementById('contactRoom').value;
  const notes = document.getElementById('contactNotes').value;

  const isEn = currentLang === 'en';
  const intro = isEn ? 'Hello Reception B&B CaMa, I would like to request info:' : 'Salve Reception B&B CaMa, vorrei richiedere informazioni per un soggiorno:';
  const nameLbl = isEn ? 'Name' : 'Nome';
  const phoneLbl = isEn ? 'Phone' : 'Telefono';
  const roomLbl = isEn ? 'Room of interest' : "Camera d'interesse";
  const notesLbl = isEn ? 'Request/Notes' : 'Richiesta/Note';

  const msg = `${intro}%0A` +
    `👤 *${nameLbl}:* ${encodeURIComponent(name)}%0A` +
    `✉️ *Email:* ${encodeURIComponent(email)}%0A` +
    `📞 *${phoneLbl}:* ${encodeURIComponent(phone)}%0A` +
    `🛏️ *${roomLbl}:* ${encodeURIComponent(room)}%0A` +
    `💬 *${notesLbl}:* ${encodeURIComponent(notes)}`;

  window.open(`https://wa.me/393447186581?text=${msg}`, '_blank');
}

// Room Galleries Data
const ROOM_GALLERIES = {
  pompei: [
    { src: 'immagini/Pompei Room1.jpeg', caption: 'Pompei Room - Letto matrimoniale e atmosfera accogliente (1/5)' },
    { src: 'immagini/Pompei Room2.jpeg', caption: 'Pompei Room - Bagno privato con doccia e set cortesia (2/5)' },
    { src: 'immagini/Pompei Room3.jpeg', caption: 'Pompei Room - Dettagli arredo e illuminazione (3/5)' },
    { src: 'immagini/Pompei Room4.jpeg', caption: 'Pompei Room - Panoramica camera e climatizzazione (4/5)' },
    { src: 'immagini/Pompei Room5.jpeg', caption: 'Pompei Room - Guardaroba e finiture (5/5)' }
  ],
  stabia: [
    { src: 'immagini/Stabia Sunset1.jpeg', caption: 'Stabia Sunset - Camera con balcone e vista panoramica (1/4)' },
    { src: 'immagini/Stabia Sunset2.jpeg', caption: 'Stabia Sunset - Bagno privato con doccia (2/4)' },
    { src: 'immagini/Stabia Sunset3.jpeg', caption: 'Stabia Sunset - Vista sui Monti Lattari dal balcone (3/4)' },
    { src: 'immagini/Stabia Sunset4.jpeg', caption: 'Stabia Sunset - Dettaglio camera al tramonto (4/4)' }
  ],
  vesuview: [
    { src: 'immagini/VesuView1.jpeg', caption: 'VesuView - Camera matrimoniale con balcone panoramico (1/3)' },
    { src: 'immagini/VesuView2.jpeg', caption: 'VesuView - Luminosa zona notte con affaccio panoramico (2/3)' },
    { src: 'immagini/VesuView3.jpeg', caption: 'VesuView - Bagno privato moderno con doccia (3/3)' }
  ],
  esterni: [
    { src: 'immagini/Esterno1.jpeg', caption: 'Terrazza Panoramica Solarium al 5° piano (1/5)' },
    { src: 'immagini/Esterno2.jpeg', caption: 'Panorama su Gragnano e le colline campane (2/5)' },
    { src: 'immagini/Esterno3.jpeg', caption: 'Vista sulla catena dei Monti Lattari (3/5)' },
    { src: 'immagini/Esterno4.jpeg', caption: 'Area relax e sedute in terrazza (4/5)' },
    { src: 'immagini/cucina in comune con frigo.jpeg', caption: 'Area Colazione & Cucina in comune con Frigorifero (5/5)' }
  ]
};

let currentGalleryKey = 'pompei';
let currentPhotoIndex = 0;

function changeCardImage(mainImgId, newSrc, categoryKey, photoIndex) {
  const mainImg = document.getElementById(mainImgId);
  if (mainImg) {
    mainImg.src = newSrc;
  }
}

function openGallery(categoryKey, startIndex = 0) {
  currentGalleryKey = categoryKey;
  currentPhotoIndex = startIndex;
  renderGalleryPhoto();
  const modal = document.getElementById('lightboxModal');
  if (modal) {
    modal.classList.add('active');
  }
}

function renderGalleryPhoto() {
  const gallery = ROOM_GALLERIES[currentGalleryKey] || [];
  if (gallery.length === 0) return;

  const item = gallery[currentPhotoIndex];
  const img = document.getElementById('lightboxImg');
  const caption = document.getElementById('lightboxCaption');
  const counter = document.getElementById('lightboxCounter');

  if (img) img.src = item.src;
  if (caption) caption.textContent = item.caption;
  if (counter) counter.textContent = `${currentPhotoIndex + 1} / ${gallery.length}`;
}

function nextGalleryPhoto(e) {
  if (e) e.stopPropagation();
  const gallery = ROOM_GALLERIES[currentGalleryKey] || [];
  if (gallery.length > 0) {
    currentPhotoIndex = (currentPhotoIndex + 1) % gallery.length;
    renderGalleryPhoto();
  }
}

function prevGalleryPhoto(e) {
  if (e) e.stopPropagation();
  const gallery = ROOM_GALLERIES[currentGalleryKey] || [];
  if (gallery.length > 0) {
    currentPhotoIndex = (currentPhotoIndex - 1 + gallery.length) % gallery.length;
    renderGalleryPhoto();
  }
}

function openLightbox(imgSrc, captionText) {
  for (const [key, list] of Object.entries(ROOM_GALLERIES)) {
    const idx = list.findIndex(item => item.src === imgSrc);
    if (idx !== -1) {
      openGallery(key, idx);
      return;
    }
  }
  
  const modal = document.getElementById('lightboxModal');
  const img = document.getElementById('lightboxImg');
  const caption = document.getElementById('lightboxCaption');
  if (modal && img) {
    img.src = imgSrc;
    if (caption) caption.textContent = captionText || '';
    modal.classList.add('active');
  }
}

function closeLightbox() {
  const modal = document.getElementById('lightboxModal');
  if (modal) {
    modal.classList.remove('active');
  }
}

document.addEventListener('keydown', (e) => {
  const modal = document.getElementById('lightboxModal');
  if (modal && modal.classList.contains('active')) {
    if (e.key === 'ArrowRight') nextGalleryPhoto();
    if (e.key === 'ArrowLeft') prevGalleryPhoto();
    if (e.key === 'Escape') closeLightbox();
  }
});
