# B&B CaMa | Sito Web Ufficiale (Luxury & Charme)

Sito web ufficiale del **B&B CaMa**, struttura ricettiva di charme ed eleganza situata al 5° piano con ascensore nel cuore di Gragnano (NA), in posizione strategica tra Pompei, Sorrento, Capri e la Costiera Amalfitana.

> **Punteggio Booking.com**: **9.5 / 10 • Eccezionale**  
> **Tema Design**: Dark Luxury, Oro Caldo & Marmo Champagne

---

## 🌟 Caratteristiche del Progetto

### 🏛️ 1. Design & UI/UX di Pregio
- **Palette Cromatica**: *Black Onyx (#0a0a0c)*, *Warm Gold (#c5a880)*, *Champagne Marble* e *Avorio*.
- **Tipografia di Lusso**: 
  - `Cinzel`: per titoli maestosi e badge.
  - `Cormorant Garamond`: per citazioni editoriali e note d'autore.
  - `Montserrat`: per testi descrittivi ad alta leggibilità.
- **Micro-Animazioni & Glassmorphism**: Transizioni fluide, gradienti satinati, effetti hover interattivi e accelerazione GPU a 60/120 fps.

### 🌐 2. Sistema Multilingua Completo (IT / EN / ES)
- Switcher istantaneo tra 🇮🇹 **Italiano**, 🇬🇧 **Inglese** ed 🇪🇸 **Spagnolo**.
- Traduzione automatica di contenuti, placeholder, datepicker e messaggi WhatsApp precompilati.
- Memorizzazione della lingua scelta nel `localStorage` (`cama_lang`).

### 🛏️ 3. Schede Camere & Slider Interattivi
- **Pompei Room** (5 Foto): Elegante camera matrimoniale con balcone privato, bagno en-suite con doccia, macchina del caffè espresso, climatizzazione e Wi-Fi veloce.
- **Stabia Sunset** (6 Foto): Matrimoniale panoramica con balcone affacciato sul Golfo di Napoli e sul Vesuvio.
- **VesuView** (4 Foto): Matrimoniale panoramica con balcone e vista suggestiva sul Vesuvio.
- **Spazi Comuni & Terrazza** (5 Foto): Terrazza solarium al 5° piano, vista sui Monti Lattari e cucina comune per la colazione inclusa.
- **Touch Swipe Mobile**: Supporto nativo per scorrere le foto con il tocco su smartphone sia nelle schede camera che nella Galleria Lightbox a schermo intero.

### 🛎️ 4. Servizi & Formula Day Use
- **Barra Servizi Responsiva**: Griglia dinamica a 6 icone (2 colonne su mobile, 3 su tablet, 6 su riga desktop) per Colazione, Letto Matrimoniale, Bagno En-Suite, Kit Asciugamani, Saponi/Fon e Clima/Wi-Fi.
- **Formula Day Use (3 Ore)**: Spazio dedicato per relax e privacy diurna con prenotazione rapida.

### 📅 5. Motore di Prenotazione & Concierge WhatsApp
- Selettore date integrato (**Flatpickr**) con validazione e calcolo automatico delle notti.
- Modale di riepilogo con invio istantaneo della richiesta via **WhatsApp Diretto** o **Email Ufficiale**.
- Opzioni personalizzate (richiesta culla neonato, formula Day Use).

### 🔒 6. Privacy, Cookie Policy & Conformità GDPR
- Banner cookie conforme con gestione del consenso (`cama_cookie_consent`).
- Modale informativa dettagliata per la Privacy Policy e il trattamento dati (Regolamento UE 2016/679).

### ⚡ 7. Ottimizzazioni Tecniche, SEO & Anti-CLS
- **Zero Cumulative Layout Shift (CLS = 0)**: Tutte le immagini presentano attributi `width` e `height` proporzionati, con `loading="lazy"` e `decoding="async"`.
- **Dati Strutturati Schema.org**: Blocco JSON-LD conforme per `BedAndBreakfast` con `AggregateRating` (9.5/10), geo-coordinate e orari di check-in/out.
- **OpenGraph & Twitter Card**: Anteprime curate per la condivisione social e chat.

---

## 📁 Struttura dei File

```text
├── index.html        # Struttura semantica HTML5, metadati SEO, Schema.org e layout
├── style.css         # Design system, variabili colore, tipografia e animazioni GPU
├── app.js            # Logica multilingua (IT/EN/ES), slider touch, booking engine e cookie GDPR
├── immagini/         # Archivio fotografico ad alta risoluzione di camere, terrazza e logo
│   ├── logo.png
│   ├── Pompei Room1.jpeg ... Pompei Room5.jpeg
│   ├── Stabia Sunset1.jpeg ... Stabia Sunset4.jpeg
│   ├── VesuView1.jpeg ... VesuView3.jpeg
│   ├── Esterno1.jpeg ... Esterno4.jpeg
│   └── cucina in comune con frigo.jpeg
└── README.md         # Documentazione ufficiale del progetto
```

---

## 🚀 Come Eseguire e Pubblicare il Progetto

Il progetto è sviluppato in tecnologia statica pura (HTML5, Vanilla CSS e Modern JavaScript) ed è pronto all'uso senza necessità di build o compilatori:

1. **In locale**: Apri semplicemente il file `index.html` in qualsiasi browser web moderno.
2. **Online su GitHub Pages**:
   - Crea una repository su GitHub e carica i file.
   - Vai su **Settings** > **Pages**.
   - Imposta la sorgente su **Deploy from a branch** (Branch: `main`, Cartella: `/root`).
   - Il sito sarà immediatamente online con certificato SSL HTTPS gratuito.

---

## 📍 Contatti Ufficiali Struttura

- **Struttura**: B&B CaMa
- **Indirizzo**: Via Raffaele Viviani, 36 (Piano 5 con ascensore), 80054 Gragnano (NA), Italia
- **Host / WhatsApp Diretto**: [+39 344 718 6581](https://wa.me/393447186581)
- **Linea Fissa**: [081 18974870](tel:08118974870)
- **Email**: [bebcama1963@gmail.com](mailto:bebcama1963@gmail.com)
- **Instagram**: [@cama.bed.and.breakfast](https://www.instagram.com/cama.bed.and.breakfast/)
- **TikTok**: [@cama.bed.and.brea](https://www.tiktok.com/@cama.bed.and.brea?lang=it-IT)
- **Sviluppo Web**: [Antonio Giordano](https://www.linkedin.com/in/antonio-giordano-285a5a39b/)
