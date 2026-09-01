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
    navBook: 'Chiedi Disponibilità',
    heroBadge: 'Esperienza di Charme & Panorama',
    heroLocation: 'Gragnano • Costiera Amalfitana • Pompei',
    heroTitle: 'Le Nostre Camere',
    heroSubtitle: "L'eleganza dell'ospitalità italiana con vista mozzafiato sui Monti Lattari",
    heroBtnBook: 'Chiedi Disponibilità',
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
    dayUseDesc: 'Opzione flessibile diurna per qualche ora di totale riservatezza e relax in camera privata con bagno en-suite, balcone panoramico e climatizzazione autonoma.',
    dayUseCta: 'Richiedi Day Use',
    setupBadge: 'Momenti Romantici & Ricorrenze',
    setupTitle: 'Allestimenti Personalizzati',
    setupDesc: 'Rendi unico il tuo momento: richiedi allestimenti con petali di rosa, candele, Prosecco, dolcezze e composizioni speciali per compleanni e anniversari.',
    setupCta: 'Personalizza Soggiorno',
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
    optPompei: 'Pompei Room (Standard) - Contatta per il prezzo',
    optStabia: 'Stabia Sunset (Vista Montagna) - Contatta per il prezzo',
    optVesu: 'VesuView (Balcone Panoramico • 2 Ospiti + Culla) - Contatta per il prezzo',
    labelDayUse: 'Formula Day Use (3 ore di relax)',
    labelAllestimento: 'Allestimento Personalizzato Stanza',
    optAllestimentoStandard: 'Standard (Nessun allestimento extra)',
    optAllestimentoRomantico: 'Petali & Candele Romantiche',
    optAllestimentoCompleanno: 'Compleanno o Ricorrenza Speciale',
    optAllestimentoProsecco: 'Prosecco & Dolcezze di Benvenuto',
    optAllestimentoLuxury: 'Allestimento Luxury Completo',
    stayDuration: 'Durata soggiorno',
    estimatedTotal: 'Preventivo soggiorno',
    btnBookSubmit: 'Richiedi Disponibilità & Preventivo',
    bookDisclaimer: 'Risposta immediata su WhatsApp ed Email. Nessun pagamento anticipato.',
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
    btnFormSubmit: 'Invia Richiesta su WhatsApp',
    footerCheckinHours: 'Check-in: 17:00 - 21:00',
    footerCheckoutHours: 'Check-out: 08:00 - 10:30',
    footerCopyright: '© 2026 • Tutti i diritti riservati',
    footerDevBy: 'Sito realizzato da'
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
    navBook: 'Check Availability',
    heroBadge: 'Charming & Scenic Experience',
    heroLocation: 'Gragnano • Amalfi Coast • Pompeii',
    heroTitle: 'Our Rooms',
    heroSubtitle: 'The elegance of Italian hospitality with breathtaking views of the Lattari Mountains',
    heroBtnBook: 'Check Availability',
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
    dayUseDesc: 'Flexible daytime break for maximum privacy and comfort in a private room with en-suite bathroom, panoramic balcony, and air conditioning.',
    dayUseCta: 'Request Day Use',
    setupBadge: 'Romantic Moments & Celebrations',
    setupTitle: 'Custom Room Setups',
    setupDesc: 'Make your stay unforgettable: request themed setups with rose petals, scented candles, Prosecco, sweets, and birthday or anniversary arrangements.',
    setupCta: 'Customize Stay',
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
    bookBadge: 'Direct Custom Quote at Best Rate',
    bookTitle: 'Check Availability',
    bookSubtitle: 'Select your dates to check availability and get your personalized offer',
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
    optPompei: 'Pompei Room (Standard) - Contact for price',
    optStabia: 'Stabia Sunset (Mountain View) - Contact for price',
    optVesu: 'VesuView (Panoramic Balcony • 2 Guests + Crib) - Contact for price',
    labelDayUse: 'Day Use Formula (3-hour stay)',
    labelAllestimento: 'Custom Room Setup & Occasion',
    optAllestimentoStandard: 'Standard (No extra setup)',
    optAllestimentoRomantico: 'Romantic Petals & Candles',
    optAllestimentoCompleanno: 'Birthday or Special Anniversary',
    optAllestimentoProsecco: 'Prosecco & Welcome Sweets',
    optAllestimentoLuxury: 'Full Luxury Experience Setup',
    stayDuration: 'Stay duration',
    estimatedTotal: 'Custom Quote',
    btnBookSubmit: 'Request Availability & Quote',
    bookDisclaimer: 'Immediate response on WhatsApp & Email. No upfront payment.',
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
    btnFormSubmit: 'Send Request on WhatsApp',
    footerCheckinHours: 'Check-in: 17:00 - 21:00',
    footerCheckoutHours: 'Check-out: 08:00 - 10:30',
    footerCopyright: '© 2026 • All rights reserved',
    footerDevBy: 'Website developed by'
  },
  es: {
    topRating: 'Puntuación Booking.com <strong class="text-white font-bold">9.5 / 10</strong> • Excepcional',
    topAddress: 'Via Raffaele Viviani, 36 (5ª Planta), Gragnano (NA), Italia',
    topWhatsApp: 'WhatsApp Directo',
    navHome: 'Inicio',
    navRooms: 'Habitaciones',
    navServices: 'Servicios',
    navReviews: 'Opiniones',
    navContacts: 'Contacto',
    navBook: 'Consultar Disponibilidad',
    heroBadge: 'Experiencia con Encanto y Vistas',
    heroLocation: 'Gragnano • Costa Amalfitana • Pompeya',
    heroTitle: 'Nuestras Habitaciones',
    heroSubtitle: 'La elegancia de la hospitalidad italiana con vistas panorámicas a los Montes Lattari',
    heroBtnBook: 'Consultar Disponibilidad',
    heroBtnExplore: 'Explorar Habitaciones',
    sectionWelcome: 'Bienvenidos a CaMa',
    sectionRoomsTitle: 'Nuestras Habitaciones',
    sectionRoomsQuote: '«Un oasis de tranquilidad y elegancia en la 5ª planta con terraza panorámica, donde cada detalle está pensado para regalarte una estancia inolvidable entre Pompeya, Sorrento y la Costa Amalfitana.»',
    sectionRoomsDesc: 'Situado en el corazón de Gragnano, el B&B CaMa combina el refinamiento de sus habitaciones con baño privado, aire acondicionado autónomo y Smart TV, con una ubicación estratégica ideal para descubrir las maravillas arqueológicas y paisajísticas de Campania.',
    // Pompei Room
    pompeiType: 'Habitación Doble',
    pompeiDesc: 'Amplia habitación con cómoda cama de matrimonio, baño privado completo con ducha, climatización autónoma, Smart TV y Wi-Fi de alta velocidad.',
    pompeiTag1: 'Baño Privado',
    pompeiTag2: 'Cama de Matrimonio',
    pompeiTag3: 'Clima & TV',
    // Stabia Sunset
    stabiaType: 'Superior con Balcón',
    stabiaDesc: 'El alojamiento más sugerente: acceso al balcón privado con vistas panorámicas a la cordillera de los Montes Lattari, baño privado y set de bienvenida.',
    stabiaTag1: 'Balcón Panorámico',
    stabiaTag2: 'Baño Privado',
    stabiaTag3: 'Vistas a la Montaña',
    // VesuView
    vesuviewType: 'Doble con Balcón',
    vesuviewDesc: 'Espléndida habitación doble con <strong>balcón panorámico</strong> y vistas impresionantes. Reservada para <strong>2 personas</strong> (3er huésped permitido solo para <strong>bebé con cuna</strong> bajo petición). Baño privado y aire acondicionado.',
    vesuviewTag1: 'Balcón Panorámico',
    vesuviewTag2: '2 Huéspedes (+ Cuna Bebé)',
    vesuviewTag3: 'Baño Privado',
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
    dayUseDesc: 'Opción flexible diurna para unas horas de total privacidad y relax en habitación privada con baño en-suite, balcón panorámico y climatización.',
    dayUseCta: 'Solicitar Day Use',
    setupBadge: 'Momentos Románticos y Celebraciones',
    setupTitle: 'Preparación Personalizada',
    setupDesc: 'Haz único tu momento: solicita detalles con pétalos de rosa, velas, Prosecco, bombones y decoración especial para cumpleaños y aniversarios.',
    setupCta: 'Personalizar Estancia',
    // External
    commonAreasBadge: 'Terraza y Zonas Comunes (5 Fotos)',
    commonAreasTitle: 'Espacios Comunes y Vistas',
    commonAreasDesc: 'La terraza solárium panorámica en la 5ª planta y la cocina común a disposición de los huéspedes.',
    terrazzaSolarium: 'Terraza Solárium',
    vistaDallAlto: 'Vistas desde Arriba',
    montiLattari: 'Montes Lattari',
    areaRelax: 'Área de Relax en Terraza',
    cucinaFrigo: 'Cocina y Frigorífico',
    // Services
    servicesBadge: 'Excelencia y Hospitalidad',
    servicesTitle: 'Servicios Premium',
    srv1Title: 'Check-in Exclusivo',
    srv1Desc: 'Atención personalizada en la 5ª planta con ascensor, horarios flexibles bajo petición y máxima discreción.',
    srv2Title: 'Asistencia Dedicada',
    srv2Desc: 'Recomendaciones exclusivas de restaurantes, fábricas históricas de pasta de Gragnano y traslados a Pompeya, Sorrento y la Costa.',
    srv3Title: 'Mejor Tarifa Directa',
    srv3Desc: 'Reserva directamente sin comisiones intermediarias para obtener el mejor precio garantizado y atención inmediata.',
    srv4Title: 'Confort de 5 Estrellas',
    srv4Desc: 'Desayuno italiano, café espresso, climatización autónoma, Wi-Fi fibra y limpieza impecable (puntuación 10/10).',
    amenityWifi: 'Wi-Fi Fibra Gratuito',
    amenityAC: 'Climatización Autónoma',
    amenityTV: 'Smart TV de Pantalla Plana',
    amenityKit: 'Set de Cortesía y Toallas',
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
    optPompei: 'Pompei Room (Estándar) - Contactar para precio',
    optStabia: 'Stabia Sunset (Vistas Montaña) - Contactar para precio',
    optVesu: 'VesuView (Balcón Panorámico • 2 Huéspedes + Cuna) - Contactar para precio',
    labelDayUse: 'Fórmula Day Use (3 horas de relax)',
    labelAllestimento: 'Preparación Personalizada de la Habitación',
    optAllestimentoStandard: 'Estándar (Sin preparación extra)',
    optAllestimentoRomantico: 'Pétalos y Velas Románticas',
    optAllestimentoCompleanno: 'Cumpleaños o Aniversario Especial',
    optAllestimentoProsecco: 'Prosecco y Dulces de Bienvenida',
    optAllestimentoLuxury: 'Preparación Luxury Completa',
    stayDuration: 'Duración de la estancia',
    estimatedTotal: 'Presupuesto estancia',
    btnBookSubmit: 'Consultar Disponibilidad y Presupuesto',
    bookDisclaimer: 'Respuesta inmediata por WhatsApp y Email. Sin pagos por adelantado.',
    // Reception & Contacts
    contactsSectionTitle: 'Recepción y Contacto',
    contactsHelpTitle: 'Atención Personalizada',
    contactsHelpDesc: 'Nuestro equipo está a tu entera disposición para información sobre las habitaciones, consejos de viaje, horarios de llegada personalizados y necesidades especiales.',
    contactPhoneLabel: 'Móvil e Info',
    contactLandlineLabel: 'Teléfono Fijo',
    contactWhatsAppLabel: 'WhatsApp Directo 24/7',
    contactWhatsAppSub: 'Escríbenos en tiempo real',
    contactEmailLabel: 'Email Oficial',
    contactAddressLabel: 'Ubicación y Dirección',
    contactAddressValue: 'Via Raffaele Viviani, 36 (5ª Planta con ascensor)<br>80054 Gragnano (NA), Italia',
    formTitle: 'Solicitud Directa de Estancia',
    inputNamePh: 'Nombre y Apellidos *',
    inputEmailPh: 'Correo Electrónico *',
    inputPhonePh: 'Teléfono / WhatsApp',
    optAllRooms: 'Habitación de interés (cualquiera)',
    inputNotesPh: 'Fechas tentativas o peticiones especiales',
    btnFormSubmit: 'Enviar Solicitud por WhatsApp',
    footerCheckinHours: 'Check-in: 17:00 - 21:00',
    footerCheckoutHours: 'Check-out: 08:00 - 10:30',
    footerCopyright: '© 2026 • Todos los derechos reservados',
    footerDevBy: 'Sitio web realizado por'
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

// Room names mapping
const ROOM_NAMES = {
  standard: 'Pompei Room (Standard)',
  superior: 'Stabia Sunset (Vista Montagna)',
  suite: 'VesuView (Balcone Panoramico)'
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
    const nightLabel = currentLang === 'en' ? (nights === 1 ? 'night' : 'nights') : (nights === 1 ? 'notte' : 'notti');
    summaryNights.textContent = `${nights} ${nightLabel}`;
    summaryTotal.textContent = currentLang === 'en' ? 'Best Rate on Request' : 'Contattare per il prezzo';
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
  const roomName = ROOM_NAMES[roomKey] || 'Camera B&B CaMa';

  bookingData = { checkin, checkout, ospiti, roomKey, roomName, nights };

  const nightsWord = currentLang === 'en' ? (nights === 1 ? 'night' : 'nights') : (nights === 1 ? 'notte' : 'notti');
  const guestsWord = currentLang === 'en' ? (ospiti === '1' ? 'Guest' : 'Guests') : (ospiti === '1' ? 'Ospite' : 'Ospiti');

  document.getElementById('modalDates').textContent = `${checkin} → ${checkout} (${nights} ${nightsWord})`;
  document.getElementById('modalGuests').textContent = `${ospiti} ${guestsWord}`;
  document.getElementById('modalRoom').textContent = roomName;
  document.getElementById('modalTotal').textContent = currentLang === 'en' ? 'Best Rate on Request' : 'Contattaci per il miglior prezzo';

  document.getElementById('bookingModal').classList.remove('hidden');
  document.getElementById('bookingModal').classList.add('flex');
}

function closeModal() {
  const modal = document.getElementById('bookingModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

// Send via WhatsApp directly with complete pre-set message
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

  const allestimento = document.getElementById('allestimentoSelect')?.value || document.getElementById('allestimentoInput')?.value || (isEs ? "Estándar" : (isEn ? "Standard" : "Standard"));

  let message = `Salve B&B CaMa, vorrei prenotare la camera ${room} ${isDayUse} per ${guests} ospiti nelle date ${dates}. Allestimento richiesto: ${allestimento}. Nome: ${name}, telefono: ${phone}, email: ${email}.`;
  if (isEs) {
    message = `Hola B&B CaMa, me gustaría reservar la habitación ${room} ${isDayUse} para ${guests} huéspedes en las fechas ${dates}. Preparación solicitada: ${allestimento}. Mi nombre es ${name}, teléfono: ${phone}, email: ${email}.`;
  } else if (isEn) {
    message = `Hello B&B CaMa, I would like to book room ${room} ${isDayUse} for ${guests} guests on dates ${dates}. Setup requested: ${allestimento}. My name is ${name}, phone: ${phone}, email: ${email}.`;
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
  const subject = encodeURIComponent(isEn ? `Booking Inquiry B&B CaMa - ${name}` : `Richiesta Preventivo B&B CaMa - ${name}`);
  const body = encodeURIComponent(
    `Richiesta di soggiorno / Booking Inquiry B&B CaMa:\n\n` +
    `Nome / Name: ${name}\n` +
    `Telefono / Phone: ${phone}\n` +
    `Email: ${email}\n` +
    `Camera / Room: ${bookingData.roomName}\n` +
    `Periodo / Dates: Dal ${bookingData.checkin} al ${bookingData.checkout} (${bookingData.nights} notti / nights)\n` +
    `Ospiti / Guests: ${bookingData.ospiti}\n\n` +
    `Desidero ricevere la migliore tariffa e la conferma della disponibilità.\n`
  );

  window.location.href = `mailto:bebcama1963@gmail.com?subject=${subject}&body=${body}`;
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
