import { Therapy, Testimonial } from "./types";

export const THERAPIES: Therapy[] = [
  {
    id: "akupunktur-makuladegeneration",
    title: "Akupunktur bei Makuladegeneration (AMD)",
    category: "eyes",
    shortDesc: "Spezielle Augenakupunktur zur Unterstützung der Sehkraft bei feuchter oder trockener AMD, Glaukom und Sehbeschwerden.",
    longDesc: "Die Makuladegeneration (AMD) betrifft den Punkt des schärfsten Sehens. In unserer Praxis begleiten wir Augenerkrankungen mit einem bewährten, ganzheitlichen Akupunkturkonzept (u.a. nach dem Boel-Verfahren). Dabei werden feine Nadeln an speziellen Reflexpunkten an Händen, Füßen und Stirn gesetzt – niemals direkt im Auge selbst! Ziel ist es, die Durchblutung des Augenhintergrunds anzuregen, den Stoffwechsel der Netzhaut zu reaktivieren und den Sehnerv zu unterstützen.",
    benefits: [
      "Unterstützung der Netzhautregeneration & Zellstoffwechsel",
      "Anwendbar bei trockener und feuchter Makuladegeneration",
      "Aktivierung der Durchblutung & Mikrozirkulation im Auge",
      "Ganzheitliche Begleitung inklusive Ernährungs- und Vitalstoffberatung",
      "Sanfte, einfühlsame Methode ohne Risiko direkt am Auge"
    ],
    symptoms: [
      "Verschwommenes oder verzerrtes Sehen im Zentrum",
      "Schattenhafte Flecken oder dunkle Bereiche im Lesebereich",
      "Nachlassende Farb- und Kontrastwahrnehmung",
      "Glaukom (Grüner Star) und Sehnervenschädigung",
      "Trockene, müde oder brennende Augen"
    ],
    methods: [
      "Spezial-Augenakupunktur (Boel)",
      "Schädelakupunktur (Nogier / Yamamoto)",
      "Individuelle Vitalstoff- & Sauerstofftherapie",
      "Ernährungsumstellung zur Netzhautunterstützung"
    ],
    faqs: [
      {
        question: "Werden Nadeln in das Auge gestochen?",
        answer: "Nein, auf keinen Fall! Bei der Augenakupunktur werden die Nadeln ausschließlich an Reflexpunkten am Körper gesetzt (vor allem an Händen, Füßen, Gelenken und im Stirnbereich). Das Auge selbst bleibt vollkommen unberührt."
      },
      {
        question: "Wie läuft eine Therapie-Intensivphase ab?",
        answer: "Zu Beginn hat sich eine zweiwöchige Intensivphase bewährt: an fünf aufeinanderfolgenden Tagen pro Woche behandeln wir zweimal am Tag für ca. 30 Minuten, getrennt durch eine einstündige Erholungspause. Danach bewerten wir den Verlauf und dehnen die Intervalle kundenindividuell aus."
      },
      {
        question: "Hilft Augenakupunktur auch bei fortgeschrittener AMD?",
        answer: "Ja. Auch bei fortgeschrittenen Stadien ist das vorrangige Ziel, verbleibendes Sehgewebe bestmöglich zu durchbluten, die Degeneration zu verlangsamen und oft auch eine spürbare Kontrastverbesserung oder Stabilisierung zu erzielen."
      }
    ],
    imagePrompt: "Calm modern acupuncture clinic setting, delicate reflex points, professional serene treatment, olive warm tones"
  },
  {
    id: "hypnosetherapie",
    title: "Hypnosetherapie",
    category: "psyche",
    shortDesc: "Tiefenentspannung zur Lösung von mentalen Blockaden, Stressabbau, Angstbewältigung sowie Gewichtsreduktion.",
    longDesc: "Die therapeutische Hypnose ist ein wissenschaftlich anerkanntes und hochwirksames Werkzeug, um direkt mit dem Unterbewusstsein in Kontakt zu treten. Entgegen gängiger Mythen behältst du in der Trance stets die volle Kontrolle. Im Zustand tiefer und angenehmer Entspannung lassen sich alte Verhaltensmuster, seelische Blockaden, belastender Stress und Ängste sanft aufdecken und konstruktiv ins Positive verändern.",
    benefits: [
      "Effektiver Abbau von Dauerstress, Burnout & Erschöpfung",
      "Sanfte Auflösung tief sitzender Ängste und Blockaden",
      "Unterstützung bei Gewichtsreduktion & nachhaltiger Raucherentwöhnung",
      "Stärkung des Selbstwertgefühls & Reaktivierung innerer Potenziale",
      "Ganzheitliches Vorgehen, das Körper und Seele gleichermaßen einbezieht"
    ],
    symptoms: [
      "Innere Unruhe, Ängste und Panikgefühle",
      "Chronischer Stress, Überforderungsgefühle oder Burnout-Symptome",
      "Schlafstörungen und kreisende Gedanken",
      "Blockaden im Berufs- oder Privatleben",
      "Gewichtsprobleme und ungesunde Essgewohnheiten"
    ],
    methods: [
      "Klinisch-therapeutische Hypnose & Systemische Trance",
      "Ressourcenorientierte Psychotherapie nach Erickson",
      "Achtsamkeits- und Entspannungsverfahren",
      "Blockadenlösende Gesprächsführung"
    ],
    faqs: [
      {
        question: "Bin ich während der Hypnose willenlos?",
        answer: "Nein, absolut nicht. Die therapeutische Trance ist ein Zustand fokussierter Aufmerksamkeit – vergleichbar mit dem tiefen Versinken in ein gutes Buch. Dein Bewusstsein schläft nicht, du hörst jedes Wort und kannst jederzeit selbst entscheiden, ob du mitgehen möchtest."
      },
      {
        question: "Wie viele Sitzungen werden meist benötigt?",
        answer: "Hypnosetherapie ist eine lösungsorientierte Kurzzeittherapie. Oft reichen schon 3 bis 5 Sitzungen aus, um deutliche Fortschritte und Erleichterungen zu spüren und nachhaltige Veränderungen im Unterbewusstsein zu verankern."
      }
    ],
    imagePrompt: "Peaceful therapeutic room, sunlight streaming through clean windows, comfortable sage-green chair, serene atmosphere"
  },
  {
    id: "wirbelsaeulentherapie",
    title: "Wirbelsäulen- & Gelenktherapie",
    category: "body",
    shortDesc: "Sanfte manuelle Behandlungsmethoden nach Dorn-Breuss zur Korrektur von Gelenkfehlstellungen und Tiefenverspannungen.",
    longDesc: "Rückenschmerzen, Blockaden oder Beinlängen-Verschiebungen schränken dein Leben massiv ein. In unserer Naturheilpraxis setzen wir auf das sanfte manuelle Konzept nach Dorn und Breuss. Dabei überprüfen wir das Fundament deines gesamten Skeletts, korrigieren Beinlängendifferenzen und richten Wirbelgelenke auf sanfte, dynamische Weise aus – ganz ohne plötzliches Einrenken mit ruckartigen Impulsen.",
    benefits: [
      "Sichere, schmerzfreie Ausrichtung von Wirbeln in Bewegung",
      "Keine Überdehnung von Sehnen und wichtigen Gelenkbändern",
      "Breuss-Massage mit Johanniskrautöl zur Regeneration der Bandscheiben",
      "Sofort erleichternde Entspannung der Rückenstrecker-Muskulatur",
      "Selbsthilfeübungen für ein beschwerdefreies Leben zuhause"
    ],
    symptoms: [
      "Chronische Rückenschmerzen im LWS-, BWS- oder HWS-Bereich",
      "Nackenverspannungen, Schultersteife und Spannungskopfschmerzen",
      "Fehlhaltungen, Beckenschiefstand und funktionelle Beinlängendifferenz",
      "Ischiasschmerzen und dumpfe Gelenkbeschwerden",
      "Bandscheiben-Ermüdung oder akute Hexenschüsse"
    ],
    methods: [
      "Manuelle Wirbelsäulentherapie nach Dorn",
      "Regenerativ-energetische Breuss-Massage",
      "Triggerpunktbehandlung & manuelle Faszientherapie",
      "Sensomotorische Fußgelenk-Ausrichtung"
    ],
    faqs: [
      {
        question: "Wie unterscheidet sich die Dorn-Methode von Chiropraktik?",
        answer: "Die Chiropraktik mobilisiert oft mit einem plötzlichen Ruck (Impulsschlag), was Bänder dehnen kann. Die Dorn-Therapie erfolgt stets in der sanften Eigenbewegung des Patienten (z.B. Beinschwingen). Dadurch rutscht das Wirbelgelenk vollkommen schmerzfrei und physiologisch richtig in die optimale Position zurück."
      }
    ],
    imagePrompt: "Cozy minimalist therapy table, high-end warm linen, natural wooden design, soft lighting, focus on spinal models"
  },
  {
    id: "shiatsu",
    title: "Shiatsu Körpertherapie",
    category: "body",
    shortDesc: "Ganzheitliche japanische Meridian-Behandlung mit sanftem Druck zur Tiefenentspannung und Aktivierung des Energieflusses.",
    longDesc: "Shiatsu bedeutet übersetzt 'Fingerdruck' und ist eine feinfühlige Körpertherapie auf Basis der Traditionellen Chinesischen Medizin. Auf einem traditionellen Baumwoll-Futon liegend, wird mit Händen, Daumen und Ellenbogen ein gleichmäßiger, tiefer Druck entlang der Meridiane aufgebaut. Durch sanfte Gelenk-Rotationen und dynamische Dehnübungen wird blockierte Energie wieder ins Fließen gebracht, Muskeln entspannen und das Nervensystem kommt im tiefen, heilsamen Regenerationsmodus an.",
    benefits: [
      "Ganzheitliche Balance für Körper, Geist und Nervensystem",
      "Tiefenwirksamer Stressabbau und spürbare Erdung",
      "Linderung von innerer Kälte, Schlafproblemen und Verspannungen",
      "Verbesserung der Atembewegung und Fasziengeschmeidigkeit",
      "Achtsamer Freiraum, um ganz bei sich selbst anzukommen"
    ],
    symptoms: [
      "Vegetative Erschöpfungszustände und Burnout-Vorstufen",
      "Chronische Nacken-, Schulter- und Muskelschmerzen",
      "Kopfschmerzen, Migräne oder Kiefergelenks-Spannungen (CMD)",
      "Verdauungsprobleme und Zyklusunregelmäßigkeiten",
      "Gefühl von innerer Leere, Rastlosigkeit oder Unruhe"
    ],
    methods: [
      "Traditionelles Zen-Shiatsu auf dem Futon",
      "Meridiandynamik & viszerale Bauchmassage (Hara-Arbeit)",
      "Dehnungskorrekuren nach Masunaga",
      "Atem- & Achtsamkeitsintegration"
    ],
    faqs: [
      {
        question: "Wird Shiatsu direkt auf nackter Haut praktiziert?",
        answer: "Nein. Shiatsu wird traditionell am bekleideten Körper angewendet. Bitte bringe bequeme, weiche Kleidung (z.B. eine Baumwoll-Sporthose und ein gemütliches Langarmshirt) sowie frische Socken zur Behandlung mit."
      }
    ],
    imagePrompt: "Calming Zen room, high quality Tatami mats, organic pillows, green plants, warm sunray on a minimal setup"
  },
  {
    id: "frequenztherapie",
    title: "Frequenz- & Regulationstherapie",
    category: "diagnostics",
    shortDesc: "Schonende mikroelektrische Schwingungsregulation zur Unterstützung der Entgiftung und Immunabwehr.",
    longDesc: "Jedes Gewebe, jede Zelle und auch Mikroorganismen verfügen über eine eigene, charakteristische elektromagnetische Frequenz. Überlagert sich dieses biologische Abwehr- und Regulationsfeld durch Entzündungen oder Toxine, gerät der Körper ins Ungleichgewicht. Die Frequenztherapie führt dem Organismus über präzise definierte Signale schwache Mikrostromeinstellungen zu. Ziel ist, das Immunmilieu positiv zu regulieren, Gifte auszuleiten und den zellulären Stoffwechsel intensiv aufzubauen.",
    benefits: [
      "Sanfte, absolut schmerzfreie Impulsregulation",
      "Anregung der lymphatischen Organe zur Entgiftung",
      "Unterstützung bei chronischen Belastungen & therapieresistenten Beschwerden",
      "Verbesserung der mitochondrialen ATP-Produktion (Zellenergie)"
    ],
    symptoms: [
      "Anhaltende Müdigkeit und Post-Infekt-Müdigkeit (Fatigue)",
      "Chronische Entzündungsherde und Belastungsindikatoren",
      "Schwermetallbelastung und träge Ausleitungsorgane",
      "Unerklärliche Gelenk- oder Muskelschmerzen",
      "Zusatzunterstützung bei Infekt-Nachwirkungen"
    ],
    methods: [
      "Frequenzprogrammierung nach Clark & Rife",
      "Zapper-Mikrostromanwendung",
      "Milieu- und Entgiftungsregulation"
    ],
    imagePrompt: "Serene laboratory clinic, minimalist wooden counter, warm lights, modern bio-resonance silver test plates"
  },
  {
    id: "dunkelfeld-diagnostik",
    title: "Dunkelfeld-Blutuntersuchung",
    category: "diagnostics",
    shortDesc: "Früherkennung und ganzheitliche Vitalblut-Analyse am Dunkelfeld-Mikroskop zur Erkennung von Belastungen im Gewebe.",
    longDesc: "Die Dunkelfeld-Blutdiagnostik nach Prof. Dr. Enderlein ist eine faszinierende Methode der ganzheitlichen Diagnostik. Aus einem einzigen Blutstropfen aus deiner Fingerbeere analysieren wir gemeinsam am Bildschirm dein lebendes Blut direkt nach der Entnahme. Hierbei beurteilen wir die Aktivität deiner Abwehrzellen (Leukozyten), die Fließeigenschaften der roten Blutkörperchen und erhalten wertvolle Hinweise auf Übersäuerung, chronische Entzündungstendenzen oder Vitalstoffmangel.",
    benefits: [
      "Direkte Live-Mitbeobachtung deiner Blutzellen am HD-Monitor",
      "Ganzheitlicher Blick auf das biologische Milieu und die Organbelastung",
      "Erkennung von Regulationsstörungen weit vor klinischen Befunden",
      "Optimale Verlaufskontrolle während deiner Entgiftungs- oder Aufbaukur"
    ],
    symptoms: [
      "Symptome wie chronische Abgeschlagenheit oder Energielosigkeit",
      "Häufig wiederkehrende Infekte (geschwächtes Immunsystem)",
      "Übersäuerung oder chronische Magen-Darm-Störungen",
      "Hautleiden (Ekzeme, Allergien, Neurodermitis)",
      "Vorbereitung für eine gezielte, biologische Darmsanierung"
    ],
    methods: [
      "Dunkelfeld-Mikroskopie (Nativblutanalyse)",
      "Iso- & Milieutherapie nach Sanum-Kehlbeck",
      "Säure-Basen-Regulation n. Sander",
      "Gezielte Zufuhr fehlender Vitalstoffe"
    ],
    faqs: [
      {
        question: "Wie unterscheidet sich die Dunkelfeld-Diagnostik vom Labor-Blutbild?",
        answer: "Ein normales Labor-Blutbild zählt rote und weiße Zellen im abgetöteten, fixierten Zustand quantitativ aus. Die Dunkelfeld-Diagnostik hingegen untersucht das Blut lebendig über mehrere Stunden. Wir bewerten nicht nur Zahlen, sondern die Qualität, Beweglichkeit, Formstabilität der Zellen und das unmittelbare Plasma-Umfeld."
      }
    ],
    imagePrompt: "Modern medical microscope lab, high-quality display showing beautiful glowing golden circles on dark blue screen, organic studio"
  }
];

export const PRACTITIONERS = [
  {
    name: "Michael Brenscheidt",
    role: "Heilpraktiker & Praxisinhaber",
    specialties: ["Augenakupunktur (AMD)", "Dunkelfeld-Blutdiagnostik", "Frequenztherapie", "Ausleitungstherapien"],
    bio: "Seit über 25 Jahren widme ich mich mit Leidenschaft der naturheilkundlichen Ganzheitsdiagnostik und biologischen Augenbehandlung. Nach intensiver Ausbildung bei führenden Akupunkteuren habe ich mich auf die sanfte, ganzheitliche Begleitung bei Netzhaut- und Makuladefekten spezialisiert. Mein Ziel ist es, verbleibende Sehkraft nachhaltig zu stabilisieren und den Menschen als Ganzes im Blick zu behalten.",
    image: "/Heike_Klaus.jpg"
  },
  {
    name: "Sabine Brenscheidt",
    role: "Heilpraktikerin & Therapeutin",
    specialties: ["Klinische Hypnosetherapie", "Wirbelsäulentherapie nach Dorn-Breuss", "Zen-Shiatsu", "Achtsamkeit & Stressmanagement"],
    bio: "Mein Anliegen ist die Verbindung von tiefgehender körperlicher Entspannung und mentaler Befreiung. In meiner Arbeit als Heilpraktikerin bringe ich Körper und Geist über feinfühlige Shiatsu-Berührungen, sanfte Wirbelkorrekturen nach Dorn und ursachenorientierte, heilsame Hypnosetherapie in Einklang. Ich begleite dich achtsam durch stressbedingte Lebensphasen hin zu neuer Lebensfreude.",
    image: "/Heike_Klaus.jpg"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Helga S. (72, Leichlingen)",
    condition: "Feuchte Makuladegeneration (AMD)",
    text: "Nachdem mir in der Augenklinik gesagt wurde, man könne bei meiner feuchten AMD nur noch Spritzen setzen und abwarten, bin ich auf Michael Brenscheidt gestoßen. Durch seine Augenakupunktur und Nahrungsergänzung wurde mein Lesesehen stabiler, und das verschwommene Graue im Zentrum ist merklich zurückgegangen. Ich bin unendlich dankbar!",
    rating: 5
  },
  {
    id: "2",
    name: "Thomas M. (48, Solingen)",
    condition: "Burnout & Schlafstörungen",
    text: "Ich kam völlig erschöpft durch beruflichen Dauerstress in die Praxis. Sabine Brenscheidt hat mich mit einer Mischung aus sanften Shiatsu-Behandlungen und Hypnosetherapie begleitet. Nach nur vier Sitzungen schlafe ich wieder durch, spüre meine Grenzen besser und habe endlich wieder freie, entspannte Energie.",
    rating: 5
  },
  {
    id: "3",
    name: "Gisela K. (65, Witzhelden)",
    condition: "Chronische Rückenschmerzen & HWS",
    text: "Ich litt jahrelang an blockierter Brustwirbelsäule und Dauerschmerz. Die Dorn-Breuss-Therapie bei Frau Brenscheidt fühlt sich an wie ein Befreiungsschlag. Kein brutales Chiropraktik-Rucken, sondern einfühlsames Schwingen der Gelenke und die wunderbare, nährende Breuss-Massage mit Johanniskrautöl. Ein Segen!",
    rating: 5
  }
];
