import { Testimonial, PainPoint, Obstacle, GoldRule } from './types';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'falk',
    name: 'Falk F.',
    role: 'Informatiker & Software-Entwickler',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200',
    rating: 5,
    highlightText: '13 kg abgenommen und meine Ernährungsgewohnheiten haben sich massiv verbessert.',
    fullText: 'Ich bin dem Coaching von Fabian vor 3 Monaten beigetreten und muss sagen: Ich bin absolut begeistert. In dieser kurzen Zeit habe ich bereits 13 kg abgenommen, an Muskelmasse gewonnen und meine Ernährungsgewohnheiten nachhaltig optimiert. Früher dachte ich immer, gesundes Essen sei fade und bedeute extremen Verzicht. Fabian hat mir gezeigt, dass gesunde Ernährung Spaß machen kann. Außerdem hat er mir geholfen, meine Trainingstechnik im Gym präzise zu korrigieren. Jedes Training fühlt sich jetzt hocheffizient an. Ich kann das Coaching jedem empfehlen, der endlich Struktur in seinen geschäftigen Alltag bringen möchte!',
    category: 'selbststaendig',
    stats: { weightLost: '-13 kg', duration: '3 Monate' }
  },
  {
    id: 'matthias',
    name: 'Matthias K.',
    role: 'Director Global Service',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200',
    rating: 5,
    highlightText: 'Nachhaltige Körperfettreduktion bei gleichzeitigem Muskelerhalt – und absolut alltagstauglich.',
    fullText: 'Mein Ziel war von Beginn an klar definiert: Nachhaltige Reduktion des Körperfetts bei gleichzeitigem Erhalt der Muskulatur – alles machbar neben meinem stressigen Reisealltag. Keine Crashdiäten, keine kurzfristigen Extremmaßnahmen. Die F.U.E.L. Methode ist perfekt auf meinen anspruchsvollen Alltag abgestimmt, strukturiert und dennoch absolut flexibel. Egal, ob ich im Hotel bin oder Geschäftstermine anstehen: Fabian findet immer eine pragmatische Lösung. Die ständige Erreichbarkeit und der wissenschaftliche Ansatz über Blutanalysen haben mir ein tiefes Verständnis für meinen eigenen Stoffwechsel gegeben. Es fühlt sich extrem leicht und natürlich an.',
    category: 'unternehmer',
    stats: { weightLost: '-16 kg', duration: '4 Monate' }
  },
  {
    id: 'robert',
    name: 'Robert R.',
    role: 'Selbstständiger Finanzberater',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200',
    rating: 5,
    highlightText: 'Präzise und hocheffiziente Tipps, die mir mit minimalem Aufwand maximale Erfolge bringen.',
    fullText: 'Ich bin unheimlich froh, mich für die F.U.E.L. Methode entschieden zu haben. Als Finanzberater bin ich von früh bis spät in Kundengesprächen und hatte einfach keine Kapazität für stundenlange Workouts oder komplizierte Ernährungsregeln. Fabians Tipps sind extrem präzise und hocheffizient – minimaler Zeiteinsatz, maximaler Hebel. Er nimmt sich extrem viel Zeit für Rückfragen und passt das Coaching fast täglich auf meinen Terminkalender an. Meine Energie und Konzentration im Büro sind auf einem völlig neuen Level. Kein Nachmittagstief mehr, sondern Fokus und Ausdauer wie seit Jahren nicht!',
    category: 'fuehrungskraft',
    stats: { weightLost: '-11 kg', duration: '2,5 Monate' }
  }
];

export const PAIN_POINTS: PainPoint[] = [
  {
    id: 'performance',
    title: 'Deine Performance leidet und dein Körper bremst dich aus',
    iconName: 'ZapOff',
    shortText: 'Müdigkeit im ersten Meeting, lähmendes Mittagstief und quälender Brain Fog rauben dir die Produktivität.',
    longText: 'Der Tag beginnt mit dem Blick auf das Smartphone, doch anstatt voller Tatendrang fühlst du dich bereits gerädert. Im ersten Meeting schwindet die Konzentration. Nach dem Mittagessen schlägt das berüchtigte Tief zu: Du brauchst den nächsten Espresso und am liebsten etwas Süßes, um überhaupt klar denken zu können. Du merkst, dass dein Fokus nachlässt – obwohl dein Pensum wächst.',
    realLifeExample: 'Du ertappst dich dabei, wie du um 14:30 Uhr krampfhaft nach Zucker suchst oder das dritte Mal zur Kaffeemaschine gehst.'
  },
  {
    id: 'belly',
    title: 'Dein Bauch ist dir ständig im Weg',
    iconName: 'TrendingUp',
    shortText: 'Fast keines deiner Lieblingshemden sitzt noch optimal. Der Anzug spannt und Kleidung soll nur noch kaschieren.',
    longText: 'Morgens vor dem Kleiderschrank merkst du, wie die Auswahl schrumpft. Das Lieblingshemd spannt an den Knöpfen, das Sakko sitzt unangenehm eng und die Gürtelschnalle muss ein Loch weiter gestellt werden. Beim Autofahren oder am Schreibtisch drückt es, und die Silhouette im Spiegel entspricht schon lange nicht mehr dem Bild des energetischen, selbstbewussten Mannes, der du eigentlich bist.',
    realLifeExample: 'Im wichtigen Meeting zupfst du unbemerkt am Hemd, damit die Bauchpartie nicht so stark ins Auge springt.'
  },
  {
    id: 'signals',
    title: 'Dein Körper sendet unüberhörbare Warnsignale',
    iconName: 'Activity',
    shortText: 'Schlechterer Schlaf, erhöhter Blutdruck, langsame Regeneration und chronische Abgeschlagenheit.',
    longText: 'Dein Blutdruck klettert nach oben, der Ruhepuls ist erhöht, und obwohl du 7-8 Stunden schläfst, wachst du erschöpft auf. Kleine Infekte ziehen sich über Wochen hinweg, Verspannungen im Nacken quälen dich und die körperliche Regeneration nach Aktivität dauert gefühlt dreimal so lange wie früher. Du schiebst Arzttermine oder Check-ups vor dir her, weil du das Ergebnis eigentlich schon ahnst.',
    realLifeExample: 'Du wachst am Samstag trotz langem Ausschlafen mit Kopfschmerzen und einem Gefühl der totalen Erschöpfung auf.'
  },
  {
    id: 'family',
    title: 'Dein Körper schränkt dein Familienleben spürbar ein',
    iconName: 'HeartHandshake',
    shortText: 'Feierabend bedeutet nur noch Couch. Für Kinder, Partner oder Hobbys fehlt schlichtweg jede Energie.',
    longText: 'Wenn du nach einem anstrengenden Arbeitstag nach Hause kommst, willst du nur noch deine Ruhe. Für ein aktives Spielen mit den Kindern oder ein tiefes Gespräch mit deiner Partnerin fehlt dir die mentale und körperliche Kraft. Du bist zwar körperlich anwesend, aber geistig abwesend auf dem Sofa versunken. Wochenenden dienen nur noch dem Überleben statt dem Erleben.',
    realLifeExample: 'Die Kinder fragen, ob ihr in den Park geht, aber du musst absagen, weil dir einfach die Puste fehlt.'
  }
];

export const OBSTACLES: Obstacle[] = [
  {
    id: 'ernaehrung',
    title: 'Gesunde Ernährung',
    subtitle: 'Der Irrglaube vom ewigen Salat-Teller',
    iconName: 'Apple',
    problemText: 'Du denkst, du müsstest dich von nun an nur noch von Salat, Hühnchen und Brokkoli ernähren. Doch in deinem Alltag mit Geschäftsessen, Terminen und spontanen Planänderungen ist diese Art von Vorkochen und Verzicht absolut unmöglich durchzuhalten.',
    solutionText: 'Bei der F.U.E.L. Methode gibt es kein strenges Vorkochen oder Einschränken. Wir nutzen smarte, praxiserprobte Restaurant-Baukästen, mit denen du bei jedem Italiener, Asiaten oder Geschäftsessen exakt die Nährstoffe wählst, die deine Fettverbrennung anfeuern.'
  },
  {
    id: 'training',
    title: 'Mehr Training',
    subtitle: 'Der Mythos des stundenlangen Ausdauersports',
    iconName: 'Dumbbell',
    problemText: 'Du glaubst, du musst ab jetzt 4-mal pro Woche 1,5 Stunden ins Fitnessstudio rennen oder stundenlang joggen gehen. Ein solches Pensum ist neben einer 50- bis 60-Stunden-Woche schlichtweg nicht unterzubringen, also fängst du gar nicht erst an.',
    solutionText: 'Erfolgreicher Fettabbau braucht extrem kurze, hochintensive Reize. Mit 2 bis maximal 3 kompakten Einheiten von ca. 35 Minuten pro Woche – die du sogar im Hotelzimmer machen kannst – stimulieren wir deine Muskeln und kurbeln den Stoffwechsel nachhaltig an.'
  },
  {
    id: 'verzicht',
    title: 'Harter Verzicht',
    subtitle: 'Kein Feierabendbier, keine Kohlenhydrate mehr?',
    iconName: 'Ban',
    problemText: 'Die Angst, auf alles verzichten zu müssen, blockiert dich. Kein Glas Wein beim Abendessen, kein Dessert, keine Kohlenhydrate. Du befürchtest, dass mit dem Abnehmen jegliche Lebensqualität und gesellschaftliche Teilhabe verloren geht.',
    solutionText: 'Wir setzen auf hormonelle Steuerung statt stumpfen Entzug. Durch präzise Blut- und DNA-Messungen wissen wir exakt, welche Kohlenhydrate dein Körper wann verbrennt. Du integrierst Wein, Brot oder Lieblingsspeisen strategisch so, dass sie deine Fettverbrennung nicht stoppen.'
  },
  {
    id: 'tracking',
    title: 'Mühsame Tracking-Apps',
    subtitle: 'Kalorienzählen als permanenter Stressfaktor',
    iconName: 'Calculator',
    problemText: 'Jedes Gramm Essen abzuwiegen, jede Zutat in eine App einzutippen und Barcodes zu scannen kostet wertvolle Zeit und nervt enorm. Im Restaurant oder auf Geschäftsreisen ist es zudem praktisch unmöglich umsetzbar.',
    solutionText: 'Wir verzichten auf starres, tägliches Tracking. Stattdessen etablieren wir intuitive Nahrungsmuster, die auf deinen Stoffwechseltyp abgestimmt sind. Dein Körper signalisiert dir auf natürliche Weise Sättigung, weil wir deine Botenstoffe ins Gleichgewicht bringen.'
  },
  {
    id: 'beratung',
    title: 'Ernährungsberatung & PT',
    subtitle: 'Unflexible, starre Termine im Kalender',
    iconName: 'Clock',
    problemText: 'Ein klassischer Personal Trainer verlangt feste Termine, die du oft wegen Meetings verschieben musst. Ernährungsberater übergeben dir dicke Ordner voller Rezepte, für deren Umsetzung dir die Zeit und Geduld fehlt.',
    solutionText: 'F.U.E.L. ist voll digital, flexibel und ortsunabhängig. Über unsere App hast du deinen Coach 24/7 in der Tasche. Wir passen Trainingsreize und Ernährungsfokus täglich dynamisch an deinen Kalender, deine Reisen und dein Energielevel an.'
  },
  {
    id: 'supplemente',
    title: 'Rätselhafte Supplemente',
    subtitle: 'Blindes Kapsel-Schlucken auf Verdacht',
    iconName: 'ShieldAlert',
    problemText: 'Du schluckst irgendwelche Vitamine oder Kapseln, die im Internet als Wundermittel angepriesen werden, spürst aber absolut keinen Unterschied und weißt gar nicht, ob das deinem Körper überhaupt hilft oder gar schadet.',
    solutionText: 'Kein Geld mehr für ungenaue Präparate verschwenden. Wir analysieren deine Blut- und DNA-Parameter klinisch. Du erhältst eine punktgenaue Mikronährstoff-Empfehlung, die Mängel im Detail ausgleicht und deine zelluläre Energieproduktion maximiert.'
  }
];

export const GOLD_RULES: GoldRule[] = [
  {
    id: 'discipline',
    title: 'Regel 1: Du brauchst NICHT mehr Disziplin oder Willenskraft.',
    subtitle: 'Schluss mit Selbstvorwürfen',
    description: 'Wenn Disziplin dein Problem wäre, hättest du kein erfolgreiches Unternehmen oder keine Führungsposition inne. Dass bisherige Abnehmversuche scheiterten, ist kein charakterliches Versagen, sondern ein Zeichen einer untauglichen Methode, die gegen deine Biologie gearbeitet hat. Wenn wir deinen Stoffwechsel wieder auf „Sportmodus" stellen, schwinden Heißhunger und Trägheit von selbst.',
    iconName: 'Sparkles'
  },
  {
    id: 'workouts',
    title: 'Regel 2: Du musst NICHT stundenlang im Studio schwitzen.',
    subtitle: 'Smarte Reize statt Erschöpfung',
    description: 'Stundenlanger Sport bei chronischem Alltagsstress schüttet massenhaft Cortisol aus, blockiert den Fettabbau und führt zu Muskelverlust. Wir setzen auf ultrakompakte Reize, die du überall durchführen kannst. Es geht nicht darum, Kalorien im Training zu verbrennen, sondern den Muskeltonus und die Mitochondrien-Aktivität hormonal so zu triggern, dass du im Schlaf Fett verbrennst.',
    iconName: 'Timer'
  },
  {
    id: 'diet',
    title: 'Regel 3: Du brauchst auf ABSOLUT GAR NICHTS verzichten.',
    subtitle: 'Alltagstauglichkeit ist König',
    description: 'Ein System, das dir verbietet, am Leben teilzunehmen – sei es das Gläschen Wein mit der Partnerin, das Business-Dinner oder das gemeinsame Sonntagsfrühstück –, ist von Vornherein zum Scheitern verurteilt. Die F.U.E.L.-Strategie baut auf Flexibilität auf. Wir nutzen deine Biochemie, um anscheinend „sündige" Mahlzeiten als Stoffwechsel-Turbos zu integrieren.',
    iconName: 'GlassWater'
  }
];

export const FAQS = [
  {
    question: 'Wie unterscheidet sich die F.U.E.L. Methode von anderen Diäten?',
    answer: 'Klassische Diäten basieren auf stumpfem Kalorienentzug und Verzicht, was deinen Stoffwechsel herunterfährt und zu Muskelverlust führt. Die F.U.E.L. Methode basiert auf exakter Diagnostik: Wir untersuchen deine Blutwerte, genetische Parameter (DNA) und deinen Hormonhaushalt. Anhand dieser Biomarker stellen wir deinen Körper hormonell so ein, dass er Fettzellen aktiv öffnet, statt sie im Überlebensmodus festzuhalten. Zudem ist die Methode zu 100% auf den Alltag vielbeschäftigter Menschen ausgelegt – ohne Vorkochen oder extremen Zeitaufwand.'
  },
  {
    question: 'Wann macht man diese Blut- und DNA-Tests?',
    answer: 'Gleich zu Beginn deines Coachings erhältst du ein unkompliziertes, medizinisches Test-Kit nach Hause oder zu deinem Arbeitsplatz geliefert. Mit einer winzigen Probe, die du schmerzfrei selbst durchführen kannst, analysiert unser deutsches Partnerlabor deine biologischen Marker. Auf Basis dieses Laborberichts entwerfen wir deine exakte F.U.E.L.-Formel.'
  },
  {
    question: 'Ich arbeite 60+ Stunden pro Woche und bin viel auf Reisen. Klappt das trotzdem?',
    answer: 'Ja, absolut! Die Methode wurde speziell für diesen Lebensstil entwickelt. Du musst keine Tupperware mitnehmen oder Stunden im Gym verbringen. Wir geben dir maßgeschneiderte Leitfäden an die Hand für Hotels, Flughäfen, Autobahnstationen und Restaurants. Das Training ist flexibel und erfordert maximal 2-3 kurze Einheiten pro Woche.'
  },
  {
    question: 'Muss ich ins Fitnessstudio gehen?',
    answer: 'Nein, das ist nicht zwingend notwendig. Die hocheffizienten Trainingsreize können entweder im Fitnessstudio deiner Wahl, im Hotel-Gym oder mit minimalem Equipment im eigenen Wohnzimmer/Hotelzimmer durchgeführt werden. Wir passen die Trainingspläne exakt an deine Gegebenheiten an.'
  },
  {
    question: 'Wie schnell sehe ich Resultate mit der F.U.E.L. Methode?',
    answer: 'Die meisten unserer Klienten spüren bereits innerhalb der ersten 7 bis 14 Tage einen massiven Energiesprung: Der Mittagsschlaf fällt weg, der Schlaf wird erholsamer und der Ruhepuls sinkt. Auf der Waage zeichnen sich meist schon nach der ersten Woche deutliche Gewichtsverluste ab. Ein realistischer Fortschritt liegt bei etwa 0,5 bis 1,2 kg reinem Fettverlust pro Woche.'
  }
];
