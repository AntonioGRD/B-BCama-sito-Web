// ==========================================================================
// LUSSO CAMA - INTERACTIVITY, BOOKING ENGINE & MULTILINGUAL (IT / EN)
// ==========================================================================

const TRANSLATIONS = {
  it: {
    topRating: 'Booking.com <strong class="text-white font-bold">9.5 / 10</strong> • Eccezionale',
    topAddress: 'Via Raffaele Viviani, 36 (Piano 5), Gragnano (NA)',
    topWhatsApp: 'WhatsApp',
    navHome: 'Home',
    navAbout: 'Chi Siamo',
    navRooms: 'Camere',
    navServices: 'Servizi',
    navReviews: 'Recensioni',
    navContacts: 'Contatti',
    navBook: 'Disponibilità',
    mobileBarBook: 'Disponibilità',
    heroBadge: 'Esperienza di Charme & Panorama',
    heroLocation: 'Gragnano • Costiera Amalfitana • Pompei',
    heroTitle: 'Le Nostre Camere',
    heroSubtitle: "L'eleganza dell'ospitalità italiana con vista mozzafiato sul Vesuvio",
    heroBtnBook: 'Verifica Disponibilità',
    heroBtnExplore: 'Scopri Camere',
    heroBtnPernottamento: 'Pernottamento',
    heroBtnDayUse: 'Formula Day Use (3 Ore)',
    homeStayTitle: 'Pernottamento',
    homeStayDesc: 'Soggiorno in eleganti camere matrimoniali al 5° piano con ascensore, bagno privato, Smart TV e terrazza panoramica.',
    homeDayUseTitle: 'Day Use (3 Ore)',
    homeDayUseDesc: 'Camera privata diurna per 3 ore di totale riservatezza con bagno en-suite, balcone panoramico e climatizzazione.',
    // Chi Siamo
    aboutBadge: 'Una Storia di Famiglia & Cuore',
    aboutTitle: 'Dove nasce il nome CaMa',
    aboutQuote: '«CaMa Bed & Breakfast nasce dal cuore, dalla volontà di onorare una figura per noi speciale: nostro padre, <strong>Cascone Marco</strong>, le cui iniziali danno il nome alla nostra struttura.»',
    aboutText1: 'Un nome che racchiude un doppio significato: <strong>"Cama"</strong>, che in spagnolo significa <em>"letto"</em>, simbolo di accoglienza, riposo e calore familiare. CaMa B&B è molto più di un semplice alloggio: è una storia di famiglia, un luogo dove sentirsi a casa.',
    aboutFeature1: 'Con Ascensore',
    aboutFeature2Title: 'Accoglienza',
    aboutFeature2Sub: 'Calore Familiare',
    sectionWelcome: 'Benvenuti a CaMa',
    sectionRoomsTitle: 'Le Nostre Camere',
    sectionRoomsQuote: "Un'oasi di tranquillità ed eleganza al 5° piano con terrazza panoramica, dove ogni dettaglio è pensato per regalarti un soggiorno memorabile tra Pompei, Sorrento e la Costiera.",
    sectionRoomsDesc: "Nel cuore di Gragnano, raffinate camere matrimoniali al 5° piano con ascensore e vista panoramica sui Monti Lattari, dotate di tutti i comfort:",
    featBreakfastTitle: 'Colazione Inclusa',
    featBreakfastSub: 'Monodose & Espresso',
    featBedTitle: 'Letto Matrimoniale',
    featBedSub: 'In tutte le camere',
    featBathTitle: 'Bagno En-Suite',
    featBathSub: 'Privato con doccia',
    featTowelsTitle: 'Kit Asciugamani',
    featTowelsSub: '3 pezzi a persona',
    featAmenitiesTitle: 'Saponi & Fon',
    featAmenitiesSub: 'Asciugacapelli incluso',
    featTechTitle: 'Clima, TV & Wi-Fi',
    featTechSub: 'Fibra ad alta velocità',
    // Pompei Room
    pompeiType: 'Camera Matrimoniale',
    pompeiDesc: 'Elegante camera dotata di confortevole letto matrimoniale, balcone privato, bagno privato en-suite con doccia, macchina del caffè espresso, climatizzazione autonoma, Smart TV e Wi-Fi veloce.',
    pompeiTag1: 'Letto Matrimoniale',
    pompeiTag2: 'Balcone',
    pompeiTag3: 'Macchina del Caffè',
    pompeiTag4: 'Clima & Smart TV',
    // Stabia Sunset
    stabiaType: 'Matrimoniale con Balcone',
    stabiaDesc: 'La sistemazione più suggestiva e panoramica: dotata di confortevole letto matrimoniale e balcone privato con vista sul Golfo di Napoli e sul Vesuvio, macchina del caffè espresso, bagno en-suite e climatizzazione autonoma.',
    stabiaTag1: 'Letto Matrimoniale',
    stabiaTag2: 'Balcone Panoramico con Vista sul Golfo di Napoli e sul Vesuvio',
    stabiaTag3: 'Bagno Privato En-Suite',
    stabiaTag4: 'Macchina del Caffè',
    // VesuView
    vesuviewType: 'Matrimoniale con Balcone Panoramico',
    vesuviewDesc: 'Splendida camera dotata di confortevole letto matrimoniale per 2 ospiti e balcone panoramico con vista sul Vesuvio. Completa di bagno privato en-suite con doccia, macchina del caffè espresso, Smart TV e climatizzazione autonoma.',
    vesuviewTag1: 'Letto Matrimoniale',
    vesuviewTag2: 'Balcone Panoramico con Vista sul Vesuvio',
    vesuviewTag3: 'Bagno Privato En-Suite',
    vesuviewTag4: 'Macchina del Caffè',

    roomRateFrom: 'Tariffa',
    contactForPrice: 'Contattare per il prezzo',
    rateTypeLabel: 'Offerta & Preventivo',
    bestRateOnRequest: 'Miglior Tariffa su Richiesta',
    btnSelect: 'Richiedi Info',
    viewGallery: 'Apri Galleria +',
    allRoomPhotos: 'Tutte le foto della camera:',
    panoramicBalconyBadge: 'Balcone Panoramico',
    panoramicViewBadge: 'Vista Panoramica',
    // Highlights 3 Cards
    stayBadge: 'Soggiorno & Pernottamento',
    stayTitle: 'Camere di Charme',
    stayDesc: 'Pernottamento classico in eleganti camere matrimoniali al 5° piano con ascensore, bagno privato, Smart TV, Wi-Fi fibra e terrazza panoramica sui Monti Lattari.',
    stayCta: 'Scopri le Camere',
    dayUseBadge: 'Relax & Privacy Diurna',
    dayUseTitle: 'Formula Day Use (3 Ore)',
    dayUseDesc: 'La comodità e la totale riservatezza di una camera privata al 5° piano per qualche ora di pausa e relax: bagno en-suite con doccia, balcone panoramico sui Monti Lattari, Smart TV, Wi-Fi fibra e climatizzazione autonoma.',
    dayUseCta: 'Richiedi Formula Day Use',
    // External
    commonAreasBadge: 'Terrazza & Servizi Comuni (5 Foto)',
    commonAreasTitle: 'Spazi Comuni & Panorama',
    commonAreasDesc: 'La terrazza panoramica al 5° piano con solarium e la cucina comune a disposizione degli ospiti per gustare la colazione inclusa.',
    terrazzaSolarium: 'Terrazza Solarium',
    vistaDallAlto: "Vista dall'Alto",
    montiLattari: 'Vista sul Vesuvio',
    areaRelax: 'Area Relax Terrazza',
    cucinaFrigo: 'Cucina & Colazione Inclusa',
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
    srv4Desc: "Ambienti curati nei minimi dettagli al 5° piano con ascensore, climatizzazione autonoma, Wi-Fi fibra e pulizia impeccabile (valutazione 10/10).",
    amenityWifi: 'Wi-Fi Fibra Gratuito',
    amenityAC: 'Climatizzazione Autonoma',
    amenityTV: 'Smart TV a Schermo Piatto',
    amenityKit: 'Kit Asciugamani (3 pz/persona), Saponi & Asciugacapelli',
    amenityBreakfast: 'Colazione Inclusa (Prodotti Confezionati)',
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
    bookBadge: 'Preventivo Diretto al Miglior Prezzo',
    bookTitle: 'Verifica Disponibilità',
    bookSubtitle: 'Seleziona le date per richiedere la disponibilità e la migliore tariffa',
    labelCheckin: 'Data Check-in (dalle 17:00)',
    labelCheckout: 'Data Check-out (entro 10:30)',
    labelGuests: 'Numero Ospiti',
    labelRoom: 'Tipologia Camera',
    guestCount1: '1 Ospite',
    guestCount2: '2 Ospiti',
    guestCount3: '3 Ospiti',
    guestCount4: '4 Ospiti',
    guestCount5: '5 Ospiti',
    guestCount6: '6 Ospiti (Intera struttura)',
    optPompei: 'Pompei Room (Letto Matrimoniale) - Contatta per il prezzo',
    optStabia: 'Stabia Sunset (Letto Matrimoniale + Balcone) - Contatta per il prezzo',
    optVesu: 'VesuView (Letto Matrimoniale + Balcone Panoramico) - Contatta per il prezzo',
    labelDayUse: 'Formula Day Use (3 ore di relax)',
    labelCulla: 'Richiesta Culla Neonato (0-2 anni)',
    stayDuration: 'Durata soggiorno',
    estimatedTotal: 'Preventivo soggiorno',
    btnBookSubmit: 'Richiedi Disponibilità & Preventivo',
    bookDisclaimer: 'Colazione all\'italiana inclusa nel soggiorno. Risposta immediata su WhatsApp ed Email. Nessun pagamento anticipato.',
    // Reception & Contacts
    contactsSectionBadge: '✦ Concierge & Hospitality ✦',
    contactsSectionTitle: 'Reception & Contatti',
    contactsSectionSubtitle: 'Siamo a tua completa disposizione per informazioni sulle camere, richieste personalizzate e prenotazioni dirette.',
    contactPhoneLabel: 'Assistenza Host 24/7',
    contactLandlineLabel: 'Telefono Fisso',
    contactWhatsAppLabel: 'WhatsApp Diretto 24/7',
    contactWhatsAppSub: 'Risposta immediata in tempo reale',
    contactEmailLabel: 'Email Ufficiale',
    contactAddressLabel: 'Sede & Posizione',
    contactAddressValue: 'Via Raffaele Viviani, 36 (Piano 5 con ascensore), 80054 Gragnano (NA), Italia',
    contactWhatsAppAction: 'Chat WhatsApp Diretta',
    contactMobileAction: 'Chiama Cellulare',
    contactLandlineAction: 'Chiama Fisso',
    contactEmailAction: 'Invia Email',
    // Strategic Location Section
    locSectionBadge: 'Nel Cuore della Campania',
    locSectionTitle: 'Posizione Strategica & Dintorni',
    locSectionSubtitle: 'Vivi la Campania da Gragnano — Pompei, Sorrento, la Costiera Amalfitana e Napoli a portata di mano.',
    locDescTitle: 'La Base Ideale per il Tuo Viaggio',
    locDescText: 'Situato a Gragnano, la storica Città della Pasta ai piedi dei Monti Lattari, il B&B CaMa gode di una posizione privilegiata che unisce la quiete e il relax della vista panoramica alla vicinanza immediata alle mete più affascinanti della Campania.',
    locAdvantage1: "A pochi minuti dall'autostrada A3 e dalla Statale Sorrentina",
    locAdvantage2: 'Nessun caos cittadino, massima tranquillità e facilità di sosta',
    locAdvantage3: 'Imbarchi per Capri e Ischia a soli 8 minuti (Castellammare)',
    distPompei: 'Scavi Archeologici di Pompei',
    distCastellammare: 'Castellammare & Imbarchi Traghetti',
    distSorrento: 'Sorrento & Costiera Amalfitana',
    distNapoli: 'Napoli Aeroporto (Capodichino)',
    btnGoogleMaps: 'Apri Posizione su Google Maps',
    footerCheckinHours: 'Check-in: 17:00 - 21:00',
    footerCheckoutHours: 'Check-out: 08:00 - 10:30',
    footerCopyright: '© 2026 B&B CaMa • Tutti i diritti riservati',
    footerDevBy: 'Sito realizzato da',
    footerPrivacy: 'Privacy & Cookie Policy',
    footerLegalNote: 'Attività ricettiva gestita in forma non imprenditoriale ai sensi delle vigenti leggi regionali.',
    privacyModalTitle: 'Informativa Privacy & Cookie Policy',
    privacyOwnerTitle: '<i data-lucide="building-2" class="w-4 h-4 text-gold-400 inline-block mr-1"></i> 1. Titolare del Trattamento',
    privacyOwnerText: 'Il Titolare del trattamento dei dati personali è <strong>B&B CaMa</strong>, con sede in Via Raffaele Viviani, 36 (Piano 5 con ascensore), 80054 Gragnano (NA), Italia.<br>Email: <a href="mailto:bebcama1963@gmail.com" class="text-gold-300 hover:underline">bebcama1963@gmail.com</a> | Telefono: <a href="tel:+393447186581" class="text-gold-300 hover:underline">+39 344 718 6581</a>.',
    privacyDataTitle: '<i data-lucide="database" class="w-4 h-4 text-gold-400 inline-block mr-1"></i> 2. Tipologia di Dati Raccolti e Finalità',
    privacyDataText1: 'Attraverso il nostro sito web raccogliamo i seguenti dati esclusivamente per le finalità descritte:',
    privacyDataLi1: '<strong>Dati di contatto e prenotazione:</strong> Nome, Cognome, Telefono, Email e preferenze fornite volontariamente per rispondere a richieste di preventivo o disponibilità camere.',
    privacyDataLi2: '<strong>Dati di navigazione e preferenze:</strong> Lingua preferita memorizzata localmente (<code class="bg-black/40 text-gold-300 px-1 py-0.5 rounded">cama_lang</code>) e preferenze sui cookie (<code class="bg-black/40 text-gold-300 px-1 py-0.5 rounded">cama_cookie_consent</code>).',
    privacyCookieTitle: '<i data-lucide="cookie" class="w-4 h-4 text-gold-400 inline-block mr-1"></i> 3. Che cosa sono i Cookie e quali utilizziamo',
    privacyCookieText1: 'I cookie sono brevi frammenti di testo che consentono al server web di memorizzare sul dispositivo dell\'utente informazioni da riutilizzare nel corso della medesima visita o in seguito.',
    cookieTechTitle: 'Cookie Tecnici & Funzionali (Sempre Attivi)',
    cookieTechDesc: 'Indispensabili per il corretto funzionamento del sito, la navigazione fluida, la selezione della lingua e la memorizzazione delle scelte di consenso. Non richiedono consenso preventivo.',
    cookieThirdTitle: 'Servizi di Terze Parti & Widget',
    cookieThirdDesc: 'Il sito include risorse essenziali per migliorare l\'esperienza: caratteri Google Fonts, icone vettoriali Lucide, e link diretti a WhatsApp, Google Maps, Instagram e TikTok.',
    privacyRightsTitle: '<i data-lucide="scale" class="w-4 h-4 text-gold-400 inline-block mr-1"></i> 4. Diritti dell\'Interessato (GDPR)',
    privacyRightsText: 'In conformità agli articoli 15-22 del Regolamento UE 2016/679 (GDPR), l\'utente ha diritto di richiedere l\'accesso ai propri dati personali, la rettifica, la cancellazione, la limitazione del trattamento o di opporsi al loro trattamento inviando una comunicazione a <a href="mailto:bebcama1963@gmail.com" class="text-gold-300 hover:underline">bebcama1963@gmail.com</a>.',
    cookieBtnOnlyEssential: 'Solo Necessari',
    cookieBtnSave: 'Salva Preferenze',
    cookieBannerTitle: 'Informativa sui Cookie',
    cookieBannerText: 'Utilizziamo cookie tecnici per garantire il funzionamento ottimale del sito e offrirti la migliore esperienza di soggiorno. Cliccando su "Accetta Tutti" acconsenti all\'uso dei cookie.',
    cookieBannerLearnMore: 'Personalizza / Privacy Policy',
    cookieBtnReject: 'Rifiuta',
    cookieBtnAccept: 'Accetta Tutti'
  },
  en: {
    topRating: 'Booking.com <strong class="text-white font-bold">9.5 / 10</strong> • Exceptional',
    topAddress: 'Via Raffaele Viviani, 36 (5th Floor), Gragnano (NA)',
    topWhatsApp: 'WhatsApp',
    navHome: 'Home',
    navAbout: 'About Us',
    navRooms: 'Rooms',
    navServices: 'Services',
    navReviews: 'Reviews',
    navContacts: 'Contacts',
    navBook: 'Availability',
    mobileBarBook: 'Availability',
    mobileActionCall: 'Call',
    mobileLangLabel: 'Language:',
    heroBadge: 'Charming & Scenic Experience',
    heroLocation: 'Gragnano • Amalfi Coast • Pompeii',
    heroTitle: 'Our Rooms',
    heroSubtitle: 'The elegance of Italian hospitality with breathtaking views of Mount Vesuvius',
    heroBtnBook: 'Check Availability',
    heroBtnExplore: 'Explore Rooms',
    heroBtnPernottamento: 'Overnight Stay',
    heroBtnDayUse: 'Day Use (3 Hours)',
    heroFeatFloor: '5th Floor with Elevator',
    heroFeatBath: 'Private En-Suite Bathroom',
    heroFeatBalcony: 'Panoramic Balcony',
    heroFeatBreakfast: 'Breakfast Included',
    homeStayTitle: 'Overnight Stay',
    homeStayDesc: 'Classic stay in elegant bedrooms on the 5th floor with elevator, private bathroom, Smart TV, and panoramic terrace.',
    homeDayUseTitle: 'Day Use (3 Hours)',
    homeDayUseDesc: 'Private daytime guest room for 3 hours of complete privacy with en-suite bathroom, scenic balcony, and A/C.',
    // About Us
    aboutBadge: 'A Story of Heart & Family',
    aboutTitle: 'Where the Name CaMa Originates',
    aboutQuote: '«CaMa Bed & Breakfast was born from the heart, out of the desire to honor someone truly special to us: our father, <strong>Cascone Marco</strong>, whose initials give name to our B&B.»',
    aboutText1: 'A name carrying a double meaning: <strong>"Cama"</strong>, which in Spanish means <em>"bed"</em>, a universal symbol of welcome, rest, and warm family hospitality. CaMa B&B is much more than simple accommodation: it is a family story, a place where you truly feel at home.',
    aboutFeature1Title: '5th Floor',
    aboutFeature1: 'With Elevator',
    aboutFeature2Title: 'Hospitality',
    aboutFeature2Sub: 'Family Warmth',
    sectionWelcome: 'Welcome to CaMa',
    sectionRoomsTitle: 'Our Rooms',
    sectionRoomsQuote: 'A peaceful and elegant haven on the 5th floor with a panoramic terrace, where every detail is designed for a memorable stay between Pompeii, Sorrento, and the Amalfi Coast.',
    sectionRoomsDesc: 'In the heart of Gragnano, refined double bedrooms on the 5th floor with elevator and panoramic mountain views, featuring all premium amenities:',
    featBreakfastTitle: 'Breakfast Included',
    featBreakfastSub: 'Single-serve & Espresso',
    featBedTitle: 'Double Bed',
    featBedSub: 'In every room',
    featBathTitle: 'En-Suite Bathroom',
    featBathSub: 'Private with shower',
    featTowelsTitle: 'Towel Set',
    featTowelsSub: '3 pcs per guest',
    featAmenitiesTitle: 'Soaps & Hairdryer',
    featAmenitiesSub: 'Toiletries included',
    featTechTitle: 'A/C & Wi-Fi',
    featTechSub: 'High-speed fiber',
    // Pompei Room
    pompeiType: 'Double Bedroom',
    pompeiDesc: 'Elegant bedroom featuring a comfortable double bed, private balcony, en-suite bathroom with shower, in-room espresso coffee machine, autonomous air conditioning, Smart TV, and fast Wi-Fi.',
    pompeiTag1: 'Double Bed',
    pompeiTag2: 'Balcony',
    pompeiTag3: 'Espresso Machine',
    pompeiTag4: 'A/C & Smart TV',
    // Stabia Sunset
    stabiaType: 'Double with Scenic Balcony',
    stabiaDesc: 'Our most scenic accommodation: featuring a comfortable double bed and private balcony overlooking the Gulf of Naples and Mount Vesuvius, in-room espresso coffee machine, and en-suite bathroom.',
    stabiaTag1: 'Double Bed',
    stabiaTag2: 'Scenic Balcony with Gulf of Naples & Vesuvius View',
    stabiaTag3: 'En-Suite Bathroom',
    stabiaTag4: 'Espresso Machine',
    // VesuView
    vesuviewType: 'Double with Panoramic Balcony',
    vesuviewDesc: 'Charming double bedroom for 2 guests with panoramic balcony overlooking Mount Vesuvius. Features private en-suite bathroom with shower, espresso coffee machine, Smart TV, and autonomous climate control.',
    vesuviewTag1: 'Double Bed',
    vesuviewTag2: 'Scenic Balcony with Vesuvius View',
    vesuviewTag3: 'En-Suite Bathroom',
    vesuviewTag4: 'Espresso Machine',

    roomRateFrom: 'Rate',
    contactForPrice: 'Contact for best price',
    rateTypeLabel: 'Offer & Quote',
    bestRateOnRequest: 'Best Rate on Request',
    btnSelect: 'Inquire',
    viewGallery: 'Open Gallery +',
    allRoomPhotos: 'All room photos:',
    panoramicBalconyBadge: 'Panoramic Balcony',
    panoramicViewBadge: 'Panoramic View',
    // Highlights 3 Cards
    stayBadge: 'Overnight Stay & Boutique Rooms',
    stayTitle: 'Charming Guest Rooms',
    stayDesc: 'Classic overnight stays in elegant double bedrooms on the 5th floor with elevator, private bathroom, Smart TV, fiber Wi-Fi, and panoramic terrace overlooking the Lattari Mountains.',
    stayCta: 'Discover Rooms',
    dayUseBadge: 'Daytime Relax & Privacy',
    dayUseTitle: 'Day Use Formula (3 Hours)',
    dayUseDesc: 'The comfort and total privacy of a private guest room on the 5th floor for daytime rest: en-suite bathroom with shower, panoramic balcony overlooking the Lattari Mountains, Smart TV, fiber Wi-Fi, and autonomous A/C.',
    dayUseFeat1: '3 Hours of Total Privacy',
    dayUseFeat2: 'Private En-Suite Bathroom',
    dayUseFeat3: 'Panoramic View & Elevator',
    dayUseImmediate: 'Immediate availability on request',
    dayUseCta: 'Request Day Use',
    // External
    commonAreasBadge: 'Terrace & Shared Areas (5 Photos)',
    commonAreasTitle: 'Shared Spaces & Scenic Views',
    commonAreasDesc: 'The 5th-floor panoramic solarium terrace and shared kitchen available for guests to enjoy complimentary breakfast.',
    terrazzaSolarium: 'Solarium Terrace',
    vistaDallAlto: 'Aerial View',
    montiLattari: 'View of Mount Vesuvius',
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
    srv4Desc: 'Immaculately maintained 5th-floor guest rooms with elevator access, autonomous climate control, fiber Wi-Fi, and 10/10 cleanliness rating.',
    amenityWifi: 'Free Fiber Wi-Fi',
    amenityAC: 'Autonomous Climate Control',
    amenityTV: 'Flat-Screen Smart TV',
    amenityKit: 'Towel Set (3 pcs/guest), Bath Amenities & Hairdryer',
    amenityBreakfast: 'Breakfast Included (Packaged Items)',
    // Reviews
    scoreTitle: 'Exceptional Rating',
    scoreSubtitle: 'Official recognition based on verified reviews from international travelers.',
    scoreOutOfTen: 'out of 10',
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
    bookBadge: 'Direct Custom Quote at Best Rate',
    bookTitle: 'Check Availability',
    bookSubtitle: 'Select your dates to calculate the rate and submit your request',
    labelCheckin: 'Check-in Date (from 17:00)',
    labelCheckout: 'Check-out Date (by 10:30)',
    labelGuests: 'Number of Guests',
    labelRoom: 'Room Type',
    guestCount1: '1 Guest',
    guestCount2: '2 Guests',
    guestCount3: '3 Guests',
    guestCount4: '4 Guests',
    guestCount5: '5 Guests',
    guestCount6: '6 Guests (Full Property)',
    optPompei: 'Pompei Room (Double Bed) - Contact for price',
    optStabia: 'Stabia Sunset (Double Bed + Balcony) - Contact for price',
    optVesu: 'VesuView (Double Bed + Panoramic Balcony) - Contact for price',
    labelDayUse: 'Day Use Formula (3-hour stay)',
    labelCulla: 'Baby Cot / Crib Request (0-2 years)',
    stayDuration: 'Stay duration',
    estimatedTotal: 'Custom Quote',
    btnBookSubmit: 'Request Availability & Quote',
    bookDisclaimer: 'Complimentary Italian breakfast included. Immediate response on WhatsApp & Email. No upfront payment.',
    // Reception & Contacts
    contactsSectionBadge: '✦ Concierge & Hospitality ✦',
    contactsSectionTitle: 'Reception & Contacts',
    contactsSectionSubtitle: 'We are at your complete disposal for room inquiries, tailored requests, and direct reservations.',
    contactPhoneLabel: 'Host Concierge & Reception 24/7',
    directContactTitle: 'Direct Contact',
    directContactDesc: 'We reply in real time on WhatsApp and by phone to provide updated availability, dedicated rates, and exclusive recommendations for your trip.',
    contactMobileLabel: 'Mobile / WhatsApp:',
    contactLandlineLabel: 'Landline:',
    contactEmailLabel: 'Official Email:',
    contactWhatsAppLabel: 'Direct WhatsApp 24/7',
    contactWhatsAppSub: 'Real-time chat response',
    contactLocationTitle: 'Location & Property',
    contactAddressLabel: 'Location & Address',
    contactAddressValue: 'Via Raffaele Viviani, 36 (5th Floor with elevator), 80054 Gragnano (NA), Italy',
    contactFloor: '5th Floor with Elevator',
    contactHoursTitle: 'Reception Hours',
    contactChannelsTitle: 'Official Channels',
    contactWhatsAppAction: 'Direct WhatsApp Chat',
    contactCallAction: 'Call Now',
    contactMobileAction: 'Call Mobile',
    contactLandlineAction: 'Call Landline',
    contactEmailAction: 'Send Email',
    // Strategic Location Section
    locSectionBadge: 'In the Heart of Campania',
    locSectionTitle: 'Strategic Location & Surroundings',
    locSectionSubtitle: 'Experience Campania from Gragnano — Pompeii, Sorrento, the Amalfi Coast, and Naples within easy reach.',
    locDescTitle: 'The Ideal Base for Your Journey',
    locDescText: 'Located in Gragnano, the historic City of Pasta at the foot of the Lattari Mountains, B&B CaMa enjoys a prime location combining peaceful panoramic relaxation with immediate access to Campania’s most iconic attractions.',
    locAdvantage1: 'Minutes from the A3 Highway and the scenic Sorrento coastal road',
    locAdvantage2: 'Peaceful atmosphere away from city traffic with convenient parking',
    locAdvantage3: 'Ferry departures to Capri & Ischia only 8 minutes away (Castellammare)',
    locDistancesTitle: 'Key Distances',
    distPompei: 'Pompeii Ruins',
    distCastellammare: 'Castellammare (Ferries)',
    distSorrento: 'Sorrento & Amalfi Coast',
    distNapoli: 'Naples Airport',
    btnGoogleMaps: 'Open Location on Google Maps',
    footerContactsHours: 'Contacts & Hours',
    footerLegalTitle: 'Legal Information',
    footerCheckinHours: 'Check-in: 17:00 - 21:00',
    footerCheckoutHours: 'Check-out: 08:00 - 10:30',
    footerCopyright: '© 2026 B&B CaMa • All rights reserved',
    footerDevBy: 'Website developed by',
    footerPrivacy: 'Privacy & Cookie Policy',
    footerLegalNote: 'Non-business tourist accommodation managed in compliance with regional regulations.',
    modalSubtitle: 'Send the inquiry directly to the host of B&B CaMa',
    modalDatesLabel: 'Dates:',
    inputNamePh: 'Full Name *',
    inputPhonePh: 'Phone Number *',
    inputEmailPh: 'Email Address *',
    badgeNecessary: 'Required',
    photoCountLabel: 'Photos',
    privacyModalTitle: 'Privacy & Cookie Policy',
    privacyOwnerTitle: '<i data-lucide="building-2" class="w-4 h-4 text-gold-400 inline-block mr-1"></i> 1. Data Controller',
    privacyOwnerText: 'The Data Controller is <strong>B&B CaMa</strong>, located at Via Raffaele Viviani, 36 (5th Floor with elevator), 80054 Gragnano (NA), Italy.<br>Email: <a href="mailto:bebcama1963@gmail.com" class="text-gold-300 hover:underline">bebcama1963@gmail.com</a> | Phone: <a href="tel:+393447186581" class="text-gold-300 hover:underline">+39 344 718 6581</a>.',
    privacyDataTitle: '<i data-lucide="database" class="w-4 h-4 text-gold-400 inline-block mr-1"></i> 2. Types of Data Collected & Purpose',
    privacyDataText1: 'Through our website we collect the following data solely for the purposes described:',
    privacyDataLi1: '<strong>Contact & booking inquiries:</strong> Name, Phone, Email, and stay preferences voluntarily submitted to respond to quote or availability requests.',
    privacyDataLi2: '<strong>Browsing data & preferences:</strong> Preferred language stored locally (<code class="bg-black/40 text-gold-300 px-1 py-0.5 rounded">cama_lang</code>) and cookie consent preferences (<code class="bg-black/40 text-gold-300 px-1 py-0.5 rounded">cama_cookie_consent</code>).',
    privacyCookieTitle: '<i data-lucide="cookie" class="w-4 h-4 text-gold-400 inline-block mr-1"></i> 3. What Are Cookies & Which We Use',
    privacyCookieText1: 'Cookies are small text files stored on your device to ensure smooth website navigation and retain preferences.',
    cookieTechTitle: 'Technical & Functional Cookies (Always Active)',
    cookieTechDesc: 'Essential for proper website functionality, fluid navigation, language selection, and storing consent preferences. These do not require prior consent.',
    cookieThirdTitle: 'Third-Party Services & Widgets',
    cookieThirdDesc: 'The website includes essential third-party resources: Google Fonts typography, Lucide icons, and direct integration links to WhatsApp, Google Maps, Instagram, and TikTok.',
    privacyRightsTitle: '<i data-lucide="scale" class="w-4 h-4 text-gold-400 inline-block mr-1"></i> 4. User Rights (GDPR)',
    privacyRightsText: 'In compliance with Articles 15-22 of EU Regulation 2016/679 (GDPR), you have the right to request access, rectification, deletion, restriction, or objection to processing by emailing <a href="mailto:bebcama1963@gmail.com" class="text-gold-300 hover:underline">bebcama1963@gmail.com</a>.',
    cookieBtnOnlyEssential: 'Essential Only',
    cookieBtnSave: 'Save Preferences',
    cookieBannerTitle: 'Cookie Notice',
    cookieBannerText: 'We use essential technical cookies to ensure our website functions properly and provide you with the best hospitality experience. By clicking "Accept All", you consent to our cookie usage.',
    cookieBannerLearnMore: 'Customize / Privacy Policy',
    cookieBtnReject: 'Decline',
    cookieBtnAccept: 'Accept All'
  },
  es: {
    topRating: 'Booking.com <strong class="text-white font-bold">9.5 / 10</strong> • Excepcional',
    topAddress: 'Via Raffaele Viviani, 36 (5ª Planta), Gragnano (NA)',
    topWhatsApp: 'WhatsApp',
    navHome: 'Inicio',
    navAbout: 'Quiénes Somos',
    navRooms: 'Habitaciones',
    navServices: 'Servicios',
    navReviews: 'Opiniones',
    navContacts: 'Contacto',
    navBook: 'Disponibilidad',
    mobileBarBook: 'Disponibilidad',
    mobileActionCall: 'Llamar',
    mobileLangLabel: 'Idioma:',
    heroBadge: 'Experiencia con Encanto y Vistas',
    heroLocation: 'Gragnano • Costa Amalfitana • Pompeya',
    heroTitle: 'Nuestras Habitaciones',
    heroSubtitle: 'La elegancia de la hospitalidad italiana con vistas panorámicas al Vesubio',
    heroBtnBook: 'Consultar Disponibilidad',
    heroBtnExplore: 'Explorar Habitaciones',
    heroLocation: 'Gragnano • Costa Amalfitana • Pompeya',
    heroTitle: 'Nuestras Habitaciones',
    heroSubtitle: 'La elegancia de la hospitalidad italiana con vistas panorámicas al Vesubio',
    heroBtnBook: 'Consultar Disponibilidad',
    heroBtnExplore: 'Explorar Habitaciones',
    heroBtnPernottamento: 'Alojamiento & Noche',
    heroBtnDayUse: 'Day Use (3 Horas)',
    homeStayTitle: 'Alojamiento & Noche',
    homeStayDesc: 'Estancia clásica en elegantes habitaciones con ascensor, baño privado, Smart TV y terraza panorámica.',
    homeDayUseTitle: 'Day Use (3 Horas)',
    homeDayUseDesc: 'Habitación privada diurna durante 3 horas de total privacidad con baño privado, balcón y climatización.',
    // Quiénes Somos
    aboutBadge: 'Una Historia de Corazón y Familia',
    aboutTitle: 'El Origen del Nombre CaMa',
    aboutQuote: '«CaMa Bed & Breakfast nace del corazón, del deseo de honrar a una persona muy especial para nosotros: nuestro padre, <strong>Cascone Marco</strong>, cuyas iniciales dan nombre a nuestra estructura.»',
    aboutText1: 'Un nombre que encierra un doble significado: <strong>"Cama"</strong>, que en español significa <em>"cama"</em>, símbolo de descanso, confort y calidez familiar. CaMa B&B es mucho más que un simple alojamiento: es una historia de familia, un lugar donde sentirse como en casa.',
    aboutFeature1: 'Con Ascensor',
    aboutFeature2Title: 'Hospitalidad',
    aboutFeature2Sub: 'Calidez Familiar',
    sectionWelcome: 'Bienvenidos a CaMa',
    sectionRoomsTitle: 'Nuestras Habitaciones',
    sectionRoomsQuote: 'Un oasis de tranquilidad y elegancia en la 5ª planta con terraza panorámica, donde cada detalle está pensado para regalarte una estancia inolvidable entre Pompeya, Sorrento y la Costa Amalfitana.',
    sectionRoomsDesc: 'En el corazón de Gragnano, elegantes habitaciones matrimoniales en la 5ª planta con ascensor y vistas panorámicas, equipadas con todas las comodidades:',
    featBreakfastTitle: 'Desayuno Incluido',
    featBreakfastSub: 'Monodosis y Espresso',
    featBedTitle: 'Cama de Matrimonio',
    featBedSub: 'En cada habitación',
    featBathTitle: 'Baño En-Suite',
    featBathSub: 'Privado con ducha',
    featTowelsTitle: 'Kit de Toallas',
    featTowelsSub: '3 piezas por persona',
    featAmenitiesTitle: 'Jabones y Secador',
    featAmenitiesSub: 'Secador incluido',
    featTechTitle: 'Clima, TV & Wi-Fi',
    featTechSub: 'Fibra de alta velocidad',
    // Pompei Room
    pompeiType: 'Habitación Matrimonial',
    pompeiDesc: 'Elegante habitación con cómoda cama de matrimonio, balcón privado, baño privado en-suite con ducha, cafetera espresso en la habitación, climatización autónoma, Smart TV y Wi-Fi de alta velocidad.',
    pompeiTag1: 'Cama de Matrimonio',
    pompeiTag2: 'Balcón',
    pompeiTag3: 'Cafetera Espresso',
    pompeiTag4: 'Clima & Smart TV',
    // Stabia Sunset
    stabiaType: 'Matrimonial con Balcón Panorámico',
    stabiaDesc: 'El alojamiento más sugerente y panorámico: con cómoda cama de matrimonio y balcón privado con vistas al Golfo de Nápoles y al Vesubio, cafetera espresso en la habitación, baño privado en-suite y climatización autónoma.',
    stabiaTag1: 'Cama de Matrimonio',
    stabiaTag2: 'Balcón Panorámico con Vistas al Golfo de Nápoles y al Vesubio',
    stabiaTag3: 'Baño Privado En-Suite',
    stabiaTag4: 'Cafetera Espresso',
    // VesuView
    vesuviewType: 'Matrimonial con Balcón Panorámico',
    vesuviewDesc: 'Espléndida habitación matrimonial para 2 personas con balcón panorámico y vistas al Vesubio. Equipada con baño privado en-suite con ducha, cafetera espresso, Smart TV y Wi-Fi fibra.',
    vesuviewTag1: 'Cama de Matrimonio',
    vesuviewTag2: 'Balcón Panorámico con Vistas al Vesubio',
    vesuviewTag3: 'Baño Privado En-Suite',
    vesuviewTag4: 'Cafetera Espresso',
    roomRateFrom: 'Tarifa',
    contactForPrice: 'Contactar para el precio',
    rateTypeLabel: 'Oferta y Presupuesto',
    bestRateOnRequest: 'Mejor Tarifa a Petición',
    btnSelect: 'Solicitar Info',
    viewGallery: 'Abrir Galería +',
    allRoomPhotos: 'Todas las fotos de la habitación:',
    panoramicBalconyBadge: 'Balcón Panorámico',
    panoramicViewBadge: 'Vistas Panorámicas',
    // Highlights 3 Cards
    stayBadge: 'Estancia y Alojamiento',
    stayTitle: 'Habitaciones con Encanto',
    stayDesc: 'Estancia clásica en elegantes habitaciones dobles en la 5ª planta con ascensor, baño privado, Smart TV, Wi-Fi fibra y terraza panorámica sobre los Montes Lattari.',
    stayCta: 'Descubrir Habitaciones',
    dayUseBadge: 'Relax y Privacidad Diurna',
    dayUseTitle: 'Fórmula Day Use (3 Horas)',
    dayUseDesc: 'La comodidad y total privacidad de una habitación privada en la 5ª planta para unas horas de relax: baño en-suite con ducha, balcón panorámico con vistas a los Montes Lattari, Smart TV, Wi-Fi fibra y climatización autónoma.',
    dayUseCta: 'Solicitar Fórmula Day Use',
    // External
    commonAreasBadge: 'Terraza y Zonas Comunes (5 Fotos)',
    commonAreasTitle: 'Espacios Comunes y Vistas',
    commonAreasDesc: 'La terraza panorámica en la 5ª planta con solárium y la cocina común a disposición de los huéspedes para disfrutar del desayuno incluido.',
    terrazzaSolarium: 'Terraza Solárium',
    vistaDallAlto: 'Vistas Panorámicas',
    montiLattari: 'Vistas al Vesubio',
    areaRelax: 'Zona Relax Terraza',
    cucinaFrigo: 'Cocina & Desayuno Incluido',
    // Services
    servicesBadge: 'Excelencia y Hospitalidad',
    servicesTitle: 'Servicios Premium',
    srv1Title: 'Check-in Exclusivo',
    srv1Desc: 'Bienvenida personalizada en la 5ª planta con ascensor, horarios flexibles bajo petición y total privacidad.',
    srv2Title: 'Asistencia Dedicada',
    srv2Desc: 'Recomendaciones selectas de restaurantes, fábricas históricas de pasta de Gragnano y traslados a Pompeya y la Costa.',
    srv3Title: 'Mejor Tarifa Directa',
    srv3Desc: 'Reserva directa sin intermediarios con la mejor tarifa garantizada y asistencia inmediata.',
    srv4Title: 'Confort de 5 Estrellas',
    srv4Desc: 'Ambientes cuidados al detalle en la 5ª planta con ascensor, climatización autónoma, Wi-Fi fibra y limpieza impecable (puntuación 10/10).',
    amenityWifi: 'Wi-Fi Fibra Gratuito',
    amenityAC: 'Climatización Autónoma',
    amenityTV: 'Smart TV de Pantalla Plana',
    amenityKit: 'Kit de Toallas (3 pzs/persona), Jabones y Secador',
    amenityBreakfast: 'Desayuno Incluido (Productos Envasados)',
    // Reviews
    scoreTitle: 'Puntuación Excepcional',
    scoreSubtitle: 'Reconocimiento oficial basado en opiniones verificadas de huéspedes internacionales.',
    scoreStaff: 'Atención',
    scoreClean: 'Limpieza',
    scoreLoc: 'Ubicación',
    review1Text: '«¡La atención fue fantástica! La habitación estaba impecable, muy limpia y con todas las comodidades. Preciosas vistas panorámicas desde la quinta planta.»',
    review1Author: 'Huésped Booking.com',
    review2Text: '«Ubicación estratégica para visitar Pompeya, Sorrento y la Costa sin el estrés del caos de la ciudad. El anfitrión es amabilísimo y siempre disponible.»',
    review2Author: 'Pareja de Viaje',
    review3Text: '«Alojamiento nuevo, cuidado hasta el último detalle, muy tranquilo y con una cama comodísima. Excelente desayuno y comodidad del ascensor.»',
    review3Author: 'Huésped Español',
    // Booking
    bookBadge: 'Presupuesto Directo al Mejor Precio',
    bookTitle: 'Consultar Disponibilidad',
    bookSubtitle: 'Selecciona las fechas para solicitar disponibilidad y la mejor tarifa',
    labelCheckin: 'Fecha Check-in (desde 17:00)',
    labelCheckout: 'Fecha Check-out (hasta 10:30)',
    labelGuests: 'Número de Huéspedes',
    labelRoom: 'Tipo de Habitación',
    guestCount1: '1 Huésped',
    guestCount2: '2 Huéspedes',
    guestCount3: '3 Huéspedes',
    guestCount4: '4 Huéspedes',
    guestCount5: '5 Huéspedes',
    guestCount6: '6 Huéspedes (Estructura Completa)',
    optPompei: 'Pompei Room (Cama Matrimonial) - Contactar para el precio',
    optStabia: 'Stabia Sunset (Cama Matrimonial + Balcón) - Contactar para el precio',
    optVesu: 'VesuView (Cama Matrimonial + Balcón Panorámico) - Contactar para el precio',
    labelDayUse: 'Fórmula Day Use (3 horas de relax)',
    labelCulla: 'Solicitud de Cuna para Bebé (0-2 años)',
    stayDuration: 'Duración de la estancia',
    estimatedTotal: 'Presupuesto personalizado',
    btnBookSubmit: 'Consultar Disponibilidad y Presupuesto',
    bookDisclaimer: 'Desayuno italiano incluido en la estancia. Respuesta inmediata por WhatsApp y Email sin pago por adelantado.',
    // Reception & Contacts
    contactsSectionBadge: '✦ Concierge & Hospitality ✦',
    contactsSectionTitle: 'Recepción y Contacto',
    contactsSectionSubtitle: 'Estamos a tu entera disposición para consultas sobre habitaciones, peticiones especiales y reservas directas.',
    contactPhoneLabel: 'Atención Host 24/7',
    contactLandlineLabel: 'Teléfono Fijo',
    contactWhatsAppLabel: 'WhatsApp Directo 24/7',
    contactWhatsAppSub: 'Respuesta inmediata en tiempo real',
    contactEmailLabel: 'Email Oficial',
    contactAddressLabel: 'Sede y Ubicación',
    contactAddressValue: 'Via Raffaele Viviani, 36 (5ª Planta con ascensor), 80054 Gragnano (NA), Italia',
    contactWhatsAppAction: 'Chat WhatsApp Directo',
    contactMobileAction: 'Llamar al Móvil',
    contactLandlineAction: 'Llamar al Fijo',
    contactEmailAction: 'Enviar Correo',
    // Strategic Location Section
    locSectionBadge: 'En el Corazón de Campania',
    locSectionTitle: 'Ubicación Estratégica y Alrededores',
    locSectionSubtitle: 'Descubre Campania desde Gragnano — Pompeya, Sorrento, la Costa Amalfitana y Nápoles al alcance de la mano.',
    locDescTitle: 'El Punto de Partida Ideal',
    locDescText: 'Ubicado en Gragnano, la histórica Ciudad de la Pasta al pie de los Montes Lattari, B&B CaMa goza de una ubicación privilegiada que combina la tranquilidad de las vistas panorámicas con la cercanía inmediata a los destinos más emblemáticos de Campania.',
    locAdvantage1: 'A pocos minutos de la autopista A3 y la carretera costera hacia Sorrento',
    locAdvantage2: 'Ambiente tranquilo sin el estrés del tráfico urbano y fácil aparcamiento',
    locAdvantage3: 'Salidas en ferry hacia Capri e Isquia a solo 8 minutos (Castellammare)',
    distPompei: 'Ruinas Arqueológicas de Pompeya',
    distCastellammare: 'Castellammare y Puerto de Ferries',
    distSorrento: 'Sorrento y Costa Amalfitana',
    distNapoli: 'Aeropuerto de Nápoles (Capodichino)',
    btnGoogleMaps: 'Abrir Ubicación en Google Maps',
    footerCheckinHours: 'Check-in: 17:00 - 21:00',
    footerCheckoutHours: 'Check-out: 08:00 - 10:30',
    footerCopyright: '© 2026 B&B CaMa • Todos los derechos reservados',
    footerDevBy: 'Sitio web realizado por',
    footerPrivacy: 'Política de Privacidad y Cookies',
    footerLegalNote: 'Alojamiento turístico gestionado de forma no empresarial de conformidad con la normativa regional vigente.',
    privacyModalTitle: 'Política de Privacidad y Cookies',
    privacyOwnerTitle: '<i data-lucide="building-2" class="w-4 h-4 text-gold-400 inline-block mr-1"></i> 1. Responsable del Tratamiento',
    privacyOwnerText: 'El Responsable del tratamiento de datos personales es <strong>B&B CaMa</strong>, ubicado en Via Raffaele Viviani, 36 (5ª Planta con ascensor), 80054 Gragnano (NA), Italia.<br>Email: <a href="mailto:bebcama1963@gmail.com" class="text-gold-300 hover:underline">bebcama1963@gmail.com</a> | Teléfono: <a href="tel:+393447186581" class="text-gold-300 hover:underline">+39 344 718 6581</a>.',
    privacyDataTitle: '<i data-lucide="database" class="w-4 h-4 text-gold-400 inline-block mr-1"></i> 2. Tipos de Datos Recopilados y Finalidad',
    privacyDataText1: 'A través de nuestra página web recopilamos los siguientes datos únicamente para las finalidades descritas:',
    privacyDataLi1: '<strong>Datos de contacto y reservas:</strong> Nombre, Teléfono, Email y preferencias de estancia facilitadas voluntariamente para atender consultas de disponibilidad y presupuesto.',
    privacyDataLi2: '<strong>Datos de navegación y preferencias:</strong> Idioma preferido almacenado localmente (<code class="bg-black/40 text-gold-300 px-1 py-0.5 rounded">cama_lang</code>) y preferencias de cookies (<code class="bg-black/40 text-gold-300 px-1 py-0.5 rounded">cama_cookie_consent</code>).',
    privacyCookieTitle: '<i data-lucide="cookie" class="w-4 h-4 text-gold-400 inline-block mr-1"></i> 3. Qué son las Cookies y cuáles utilizamos',
    privacyCookieText1: 'Las cookies son pequeños archivos de texto que permiten guardar en su dispositivo información para mejorar la navegación en visitas sucesivas.',
    cookieTechTitle: 'Cookies Técnicas y Funcionales (Siempre Activas)',
    cookieTechDesc: 'Indispensables para el correcto funcionamiento de la web, navegación fluida, selección de idioma y almacenamiento de preferencias de consentimiento.',
    cookieThirdTitle: 'Servicios de Terceros y Widgets',
    cookieThirdDesc: 'La web incluye elementos de terceros para enriquecer la experiencia: tipografías Google Fonts, iconos Lucide y enlaces directos a WhatsApp, Google Maps, Instagram y TikTok.',
    privacyRightsTitle: '<i data-lucide="scale" class="w-4 h-4 text-gold-400 inline-block mr-1"></i> 4. Derechos del Usuario (RGPD)',
    privacyRightsText: 'Conforme a los artículos 15-22 del Reglamento UE 2016/679 (RGPD), tiene derecho a acceder, rectificar, suprimir o limitar el tratamiento de sus datos escribiendo a <a href="mailto:bebcama1963@gmail.com" class="text-gold-300 hover:underline">bebcama1963@gmail.com</a>.',
    cookieBtnOnlyEssential: 'Solo Necesarias',
    cookieBtnSave: 'Guardar Preferencias',
    cookieBannerTitle: 'Aviso sobre Cookies',
    cookieBannerText: 'Utilizamos cookies técnicas para asegurar el funcionamiento óptimo de la web y ofrecerle la mejor experiencia. Al hacer clic en "Aceptar Todo", consiente el uso de cookies.',
    cookieBannerLearnMore: 'Personalizar / Privacidad',
    cookieBtnReject: 'Rechazar',
    cookieBtnAccept: 'Aceptar Todo'
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

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  initDatePickers();
  updatePriceCalculator();
}

let checkinPicker = null;
let checkoutPicker = null;

function initDatePickers() {
  const checkinInput = document.getElementById('checkin');
  const checkoutInput = document.getElementById('checkout');
  if (!checkinInput || !checkoutInput) return;

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfter = new Date(today);
  dayAfter.setDate(dayAfter.getDate() + 3);

  const formatDate = (date) => date.toISOString().split('T')[0];
  const currentCheckinVal = checkinInput.value || formatDate(tomorrow);
  const currentCheckoutVal = checkoutInput.value || formatDate(dayAfter);

  if (typeof flatpickr !== 'undefined') {
    let flatpickrLocale = 'default';
    if (currentLang === 'it' && typeof flatpickr.l10ns !== 'undefined' && flatpickr.l10ns.it) {
      flatpickrLocale = flatpickr.l10ns.it;
    } else if (currentLang === 'es' && typeof flatpickr.l10ns !== 'undefined' && flatpickr.l10ns.es) {
      flatpickrLocale = flatpickr.l10ns.es;
    }

    if (checkinPicker) checkinPicker.destroy();
    if (checkoutPicker) checkoutPicker.destroy();

    checkinPicker = flatpickr(checkinInput, {
      locale: flatpickrLocale,
      minDate: 'today',
      defaultDate: currentCheckinVal,
      dateFormat: 'Y-m-d',
      altInput: true,
      altFormat: 'd/m/Y',
      altInputClass: 'concierge-input',
      disableMobile: true,
      onChange: function (selectedDates) {
        if (selectedDates[0]) {
          const nextDay = new Date(selectedDates[0]);
          nextDay.setDate(nextDay.getDate() + 1);
          if (checkoutPicker) {
            checkoutPicker.set('minDate', nextDay);
            if (checkoutPicker.selectedDates[0] && checkoutPicker.selectedDates[0] <= selectedDates[0]) {
              checkoutPicker.setDate(nextDay, true);
            }
          }
        }
        updatePriceCalculator();
      }
    });

    checkoutPicker = flatpickr(checkoutInput, {
      locale: flatpickrLocale,
      minDate: currentCheckinVal ? new Date(new Date(currentCheckinVal).getTime() + 86400000) : tomorrow,
      defaultDate: currentCheckoutVal,
      dateFormat: 'Y-m-d',
      altInput: true,
      altFormat: 'd/m/Y',
      altInputClass: 'concierge-input',
      disableMobile: true,
      onChange: function () {
        updatePriceCalculator();
      }
    });
  } else {
    checkinInput.min = formatDate(tomorrow);
    checkinInput.value = currentCheckinVal;
    checkoutInput.min = formatDate(dayAfter);
    checkoutInput.value = currentCheckoutVal;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Set default dates & initialize luxury pickers
  initDatePickers();

  document.getElementById('checkin')?.addEventListener('change', updatePriceCalculator);
  document.getElementById('checkout')?.addEventListener('change', updatePriceCalculator);
  document.getElementById('camere')?.addEventListener('change', updatePriceCalculator);
  document.getElementById('ospiti')?.addEventListener('change', updatePriceCalculator);

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

  // Scroll to top button visibility handler (Optimized with requestAnimationFrame)
  const scrollTopBtn = document.getElementById('scrollToTopBtn');
  if (scrollTopBtn) {
    let ticking = false;
    const checkScroll = () => {
      if (window.scrollY > 250) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(checkScroll);
        ticking = true;
      }
    }, { passive: true });
    checkScroll();
  }

  // Initialize Mobile Touch Gestures for Room Cards
  initRoomCardTouchSwipes();

  // Apply initial language
  setLanguage(currentLang);

  // Initialize Cookie Consent
  initCookieConsent();
});

// Room names mapping
const ROOM_NAMES = {
  standard: 'Pompei Room (Letto Matrimoniale)',
  superior: 'Stabia Sunset (Letto Matrimoniale con Balcone)',
  suite: 'VesuView (Letto Matrimoniale con Balcone Panoramico)'
};

// Calculate booking nights dynamically
function updatePriceCalculator() {
  const checkin = document.getElementById('checkin')?.value;
  const checkout = document.getElementById('checkout')?.value;
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
    const nightLabel = currentLang === 'en' ? (nights === 1 ? 'night' : 'nights') : (currentLang === 'es' ? (nights === 1 ? 'noche' : 'noches') : (nights === 1 ? 'notte' : 'notti'));
    summaryNights.textContent = `${nights} ${nightLabel}`;
    summaryTotal.textContent = currentLang === 'en' ? 'Best Rate on Request' : (currentLang === 'es' ? 'Mejor Tarifa a Petición' : 'Contattare per il prezzo');
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

// Select Day Use from highlight lounge
function selezionaDayUse() {
  const checkbox = document.getElementById('dayUseCheckbox');
  if (checkbox) checkbox.checked = true;
  updatePriceCalculator();
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
  const hasCulla = document.getElementById('cullaCheckbox')?.checked || false;

  const date1 = new Date(checkin);
  const date2 = new Date(checkout);
  const diffTime = date2.getTime() - date1.getTime();
  const nights = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
  const roomName = ROOM_NAMES[roomKey] || 'Camera B&B CaMa';

  bookingData = { checkin, checkout, ospiti, roomKey, roomName, nights, hasCulla };

  const nightsWord = currentLang === 'en' ? (nights === 1 ? 'night' : 'nights') : (currentLang === 'es' ? (nights === 1 ? 'noche' : 'noches') : (nights === 1 ? 'notte' : 'notti'));
  const guestsWord = currentLang === 'en' ? (ospiti === '1' ? 'Guest' : 'Guests') : (currentLang === 'es' ? (ospiti === '1' ? 'Huésped' : 'Huéspedes') : (ospiti === '1' ? 'Ospite' : 'Ospiti'));

  const cullaNote = hasCulla ? (currentLang === 'en' ? ' + Baby Crib' : (currentLang === 'es' ? ' + Cuna Bebé' : ' + Culla Neonato')) : '';

  document.getElementById('modalDates').textContent = `${checkin} → ${checkout} (${nights} ${nightsWord})`;
  document.getElementById('modalGuests').textContent = `${ospiti} ${guestsWord}${cullaNote}`;
  document.getElementById('modalTotal').textContent = currentLang === 'en' ? 'Best Rate on Request' : (currentLang === 'es' ? 'Mejor Tarifa a Petición' : 'Contattaci per il miglior prezzo');

  document.getElementById('bookingModal').classList.remove('hidden');
  document.getElementById('bookingModal').classList.add('flex');
}

function closeModal() {
  const modal = document.getElementById('bookingModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function sendViaWhatsApp() {
  const isEs = currentLang === 'es';
  const isEn = currentLang === 'en';

  const defaultName = isEs ? 'Huésped' : (isEn ? 'Guest' : 'Ospite');
  const name = document.getElementById('guestName')?.value || defaultName;
  const phone = document.getElementById('guestPhone')?.value || '';
  const email = document.getElementById('guestEmail')?.value || '';
  const room = bookingData.roomName || 'Camera B&B CaMa';
  const guests = bookingData.ospiti ? bookingData.ospiti : '2';

  const nightsCount = bookingData.nights || 1;
  let dates = `dal ${bookingData.checkin} al ${bookingData.checkout} (${nightsCount} notti)`;
  if (isEs) {
    const nightsWord = nightsCount === 1 ? 'noche' : 'noches';
    dates = `del ${bookingData.checkin} al ${bookingData.checkout} (${nightsCount} ${nightsWord})`;
  } else if (isEn) {
    const nightsWord = nightsCount === 1 ? 'night' : 'nights';
    dates = `from ${bookingData.checkin} to ${bookingData.checkout} (${nightsCount} ${nightsWord})`;
  }

  const isDayUseChecked = (document.getElementById('dayUseCheckbox')?.checked || document.getElementById('dayUseToggle')?.checked);
  let isDayUse = isDayUseChecked ? "in formula Day Use (3 ore)" : "per pernottamento";
  if (isEs) {
    isDayUse = isDayUseChecked ? "en fórmula Day Use (3 horas)" : "para estancia completa";
  } else if (isEn) {
    isDayUse = isDayUseChecked ? "in Day Use formula (3 hours)" : "for overnight stay";
  }

  const cullaStr = bookingData.hasCulla ? (isEs ? " • Con cuna para bebé" : (isEn ? " • With baby cot/crib" : " • Con culla neonato")) : "";

  let message = `Salve B&B CaMa, vorrei verificare la disponibilità per la camera ${room} ${isDayUse} per ${guests} ospiti${cullaStr} nelle date ${dates}. Nome: ${name}, telefono: ${phone}, email: ${email}.`;
  if (isEs) {
    message = `Hola B&B CaMa, me gustaría consultar la disponibilidad para la habitación ${room} ${isDayUse} para ${guests} huéspedes${cullaStr} en las fechas ${dates}. Mi nombre es ${name}, telefono: ${phone}, email: ${email}.`;
  } else if (isEn) {
    message = `Hello B&B CaMa, I would like to check availability for room ${room} ${isDayUse} for ${guests} guests${cullaStr} on dates ${dates}. My name is ${name}, phone: ${phone}, email: ${email}.`;
  }

  const whatsappUrl = `https://wa.me/393447186581?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
}

function sendFinalBooking(e) {
  e.preventDefault();
  const name = document.getElementById('guestName').value;
  const phone = document.getElementById('guestPhone').value;
  const email = document.getElementById('guestEmail').value;

  const isEn = currentLang === 'en';
  const isEs = currentLang === 'es';
  let subject = `Richiesta Preventivo B&B CaMa - ${name}`;
  if (isEn) subject = `Booking Inquiry B&B CaMa - ${name}`;
  if (isEs) subject = `Solicitud de Reserva B&B CaMa - ${name}`;

  const cullaEmailStr = bookingData.hasCulla ? ' (Culla Neonato Richiesta)' : '';

  const body = encodeURIComponent(
    `Richiesta di soggiorno / Booking Inquiry B&B CaMa:\n\n` +
    `Nome / Name: ${name}\n` +
    `Telefono / Phone: ${phone}\n` +
    `Email: ${email}\n` +
    `Camera / Room: ${bookingData.roomName}\n` +
    `Periodo / Dates: Dal ${bookingData.checkin} al ${bookingData.checkout} (${bookingData.nights} notti / nights)\n` +
    `Ospiti / Guests: ${bookingData.ospiti}${cullaEmailStr}\n\n` +
    `Desidero ricevere la migliore tariffa e la conferma della disponibilità.\n`
  );

  window.location.href = `mailto:bebcama1963@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
}

// Reception direct inquiry submission via pre-set WhatsApp message
function handleContactSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('contactName')?.value || 'Ospite';
  const email = document.getElementById('contactEmail')?.value || '';
  const phone = document.getElementById('contactPhone')?.value || '';
  const room = document.getElementById('contactRoom')?.value || 'Camera';
  const notes = document.getElementById('contactNotes')?.value || 'Informazioni generali';

  const message = `Salve B&B CaMa, vorrei richiedere informazioni per ${room}. Dettagli: ${notes}. Nome: ${name}, telefono: ${phone}, email: ${email}.`;
  const whatsappUrl = `https://wa.me/393447186581?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
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
    { src: 'immagini/Stabia Sunset1.jpeg', caption: 'Stabia Sunset - Camera con balcone e vista panoramica (1/6)' },
    { src: 'immagini/WhatsApp Image 2026-09-01 at 20.09.03.jpeg', caption: 'Stabia Sunset - Terrazza con suggestivo tramonto (2/6)' },
    { src: 'immagini/sadwdasdaw.jpeg', caption: 'Stabia Sunset - Ampia terrazza panoramica con vista sul Vesuvio (3/6)' },
    { src: 'immagini/Stabia Sunset2.jpeg', caption: 'Stabia Sunset - Bagno privato con doccia (4/6)' },
    { src: 'immagini/Stabia Sunset3.jpeg', caption: 'Stabia Sunset - Vista sui Monti Lattari dal balcone (5/6)' },
    { src: 'immagini/Stabia Sunset4.jpeg', caption: 'Stabia Sunset - Dettaglio camera al tramonto (6/6)' }
  ],
  vesuview: [
    { src: 'immagini/VesuView1.jpeg', caption: 'VesuView - Camera matrimoniale con balcone panoramico (1/4)' },
    { src: 'immagini/sadwadsdadfgge.jpeg', caption: 'VesuView - Ampia terrazza panoramica e suggestivo affaccio sul Vesuvio (2/4)' },
    { src: 'immagini/VesuView2.jpeg', caption: 'VesuView - Luminosa zona notte con affaccio panoramico (3/4)' },
    { src: 'immagini/VesuView3.jpeg', caption: 'VesuView - Bagno privato moderno con doccia (4/4)' }
  ],
  esterni: [
    { src: 'immagini/Esterno1.jpeg', caption: 'Terrazza Panoramica Solarium al 5° piano (1/5)' },
    { src: 'immagini/Esterno2.jpeg', caption: 'Panorama su Gragnano e le colline campane (2/5)' },
    { src: 'immagini/WhatsApp Image 2026-09-01 at 20.09.02.jpeg', caption: 'Suggestiva vista panoramica sul Vesuvio al tramonto dalla terrazza (3/5)' },
    { src: 'immagini/Esterno4.jpeg', caption: 'Area relax e sedute in terrazza (4/5)' },
    { src: 'immagini/cucina in comune con frigo.jpeg', caption: 'Area Colazione & Cucina in comune con Frigorifero (5/5)' }
  ]
};

// Room card slider controller
const roomCardSliders = {
  pompei: { index: 0, count: 5, imgId: 'pompeiCardImg', counterId: 'pompeiPhotoBadge', dotsId: 'pompeiDots' },
  stabia: { index: 0, count: 6, imgId: 'stabiaCardImg', counterId: 'stabiaPhotoBadge', dotsId: 'stabiaDots' },
  vesuview: { index: 0, count: 4, imgId: 'vesuviewCardImg', counterId: 'vesuviewPhotoBadge', dotsId: 'vesuviewDots' }
};

function slideRoomCard(roomKey, direction, e) {
  if (e) e.stopPropagation();
  const slider = roomCardSliders[roomKey];
  const gallery = ROOM_GALLERIES[roomKey];
  if (!slider || !gallery) return;

  if (direction === 'next') {
    slider.index = (slider.index + 1) % gallery.length;
  } else if (direction === 'prev') {
    slider.index = (slider.index - 1 + gallery.length) % gallery.length;
  }

  updateRoomCardSliderUI(roomKey);
}

function setRoomCardSlide(roomKey, index, e) {
  if (e) e.stopPropagation();
  const slider = roomCardSliders[roomKey];
  const gallery = ROOM_GALLERIES[roomKey];
  if (!slider || !gallery || index < 0 || index >= gallery.length) return;

  slider.index = index;
  updateRoomCardSliderUI(roomKey);
}

function updateRoomCardSliderUI(roomKey) {
  const slider = roomCardSliders[roomKey];
  const gallery = ROOM_GALLERIES[roomKey];
  if (!slider || !gallery) return;

  const currentItem = gallery[slider.index];
  const imgEl = document.getElementById(slider.imgId);
  const badgeEl = document.getElementById(slider.counterId);
  const dotsContainer = document.getElementById(slider.dotsId);

  if (imgEl) {
    imgEl.src = currentItem.src;
  }
  if (badgeEl) {
    badgeEl.textContent = `${slider.index + 1}/${gallery.length} Foto`;
  }
  if (dotsContainer) {
    const dots = dotsContainer.querySelectorAll('.slider-dot');
    dots.forEach((dot, idx) => {
      if (idx === slider.index) {
        dot.classList.add('bg-white', 'w-4');
        dot.classList.remove('bg-white/50', 'w-1.5');
      } else {
        dot.classList.remove('bg-white', 'w-4');
        dot.classList.add('bg-white/50', 'w-1.5');
      }
    });
  }
}

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
  const lightboxModal = document.getElementById('lightboxModal');
  if (lightboxModal && lightboxModal.classList.contains('active')) {
    if (e.key === 'ArrowRight') nextGalleryPhoto();
    if (e.key === 'ArrowLeft') prevGalleryPhoto();
    if (e.key === 'Escape') closeLightbox();
  }

  const privacyModal = document.getElementById('privacyModal');
  if (privacyModal && !privacyModal.classList.contains('hidden')) {
    if (e.key === 'Escape') closePrivacyModal();
  }

  const bookingModal = document.getElementById('bookingModal');
  if (bookingModal && !bookingModal.classList.contains('hidden')) {
    if (e.key === 'Escape') closeModal();
  }
});

// Mobile Touch Swipe Support for Lightbox Modal
let touchStartX = 0;
let touchEndX = 0;

const lightboxModal = document.getElementById('lightboxModal');
if (lightboxModal) {
  lightboxModal.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  lightboxModal.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipeGesture();
  }, { passive: true });
}

function handleSwipeGesture() {
  const swipeDistance = touchEndX - touchStartX;
  if (Math.abs(swipeDistance) > 45) {
    if (swipeDistance < 0) {
      nextGalleryPhoto(); // swipe left -> next photo
    } else {
      prevGalleryPhoto(); // swipe right -> prev photo
    }
  }
}

// Mobile Touch Swipe for Room Card Sliders
function initRoomCardTouchSwipes() {
  const roomKeys = ['pompei', 'stabia', 'vesuview'];
  roomKeys.forEach(key => {
    const imgEl = document.getElementById(roomCardSliders[key]?.imgId);
    const container = imgEl ? imgEl.closest('.relative') : null;
    if (!container) return;

    let startX = 0;
    let endX = 0;
    let startY = 0;
    let endY = 0;

    container.addEventListener('touchstart', (e) => {
      startX = e.changedTouches[0].screenX;
      startY = e.changedTouches[0].screenY;
    }, { passive: true });

    container.addEventListener('touchend', (e) => {
      endX = e.changedTouches[0].screenX;
      endY = e.changedTouches[0].screenY;
      const diffX = endX - startX;
      const diffY = endY - startY;

      // Ensure horizontal swipe is dominant and above 35px threshold
      if (Math.abs(diffX) > 35 && Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX < 0) {
          slideRoomCard(key, 'next');
        } else {
          slideRoomCard(key, 'prev');
        }
      }
    }, { passive: true });
  });
}

// ==========================================================================
// PRIVACY & COOKIE CONSENT MANAGEMENT (GDPR)
// ==========================================================================

function initCookieConsent() {
  const consent = localStorage.getItem('cama_cookie_consent');
  const optionalToggle = document.getElementById('cookieOptionalToggle');
  if (optionalToggle) {
    optionalToggle.checked = consent !== 'essential';
  }

  if (!consent) {
    setTimeout(() => {
      const banner = document.getElementById('cookieBanner');
      if (banner) {
        banner.classList.remove('hidden');
        if (typeof lucide !== 'undefined') lucide.createIcons();
      }
    }, 600);
  }
}

function acceptAllCookies() {
  localStorage.setItem('cama_cookie_consent', 'all');
  const banner = document.getElementById('cookieBanner');
  if (banner) banner.classList.add('hidden');
  const optionalToggle = document.getElementById('cookieOptionalToggle');
  if (optionalToggle) optionalToggle.checked = true;
  closePrivacyModal();
}

function rejectOptionalCookies() {
  localStorage.setItem('cama_cookie_consent', 'essential');
  const banner = document.getElementById('cookieBanner');
  if (banner) banner.classList.add('hidden');
  const optionalToggle = document.getElementById('cookieOptionalToggle');
  if (optionalToggle) optionalToggle.checked = false;
  closePrivacyModal();
}

function saveCustomCookiePreferences() {
  const optionalToggle = document.getElementById('cookieOptionalToggle');
  const isOptionalAllowed = optionalToggle ? optionalToggle.checked : true;
  localStorage.setItem('cama_cookie_consent', isOptionalAllowed ? 'all' : 'essential');

  const banner = document.getElementById('cookieBanner');
  if (banner) banner.classList.add('hidden');
  closePrivacyModal();
}

function openPrivacyModal() {
  const modal = document.getElementById('privacyModal');
  if (modal) {
    const consent = localStorage.getItem('cama_cookie_consent');
    const optionalToggle = document.getElementById('cookieOptionalToggle');
    if (optionalToggle) {
      optionalToggle.checked = consent !== 'essential';
    }
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }
}

function closePrivacyModal() {
  const modal = document.getElementById('privacyModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}
