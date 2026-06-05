import { Sector, MaterialSpec, ManufacturingProcess, FAQItem, DownloadDocument } from './types';

export const SECTORS_DATA: Sector[] = [
  {
    id: 'armaturen',
    title: 'Armaturen & Rohrleitungssysteme',
    titleDe: 'Armaturen',
    description: 'Hochwertige Gusskomponenten für die Ventil-, Pumpen- und Rohrleitungstechnik unter extremen Drücken und Temperaturen.',
    details: 'Die Armaturenindustrie stellt extreme Anforderungen an die Druckdichtigkeit, Korrosionsbeständigkeit und Werkstoffhomogenität. MBR liefert präzisionsbearbeitete Armaturengehäuse, Deckel, Keile und Kegel nach nationalen und internationalen Qualitätsstandards.',
    standards: ['DIN EN 10283', 'NACE MR0175', 'AD 2000-W0'],
    features: ['100% Röntgengeprüfte dichte Gehäuse', 'Niedrige Gasporosität durch Vakuumguss', 'Oberflächengüte gemäß MSS-SP-55'],
    iconName: 'Wrench',
    imageUrl: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'automotive',
    title: 'Automotive & Nutzfahrzeuge',
    titleDe: 'Automotive',
    description: 'Präzisions-Guss- und Schmiedeteile mit engen Toleranzen und zertifiziert nach ISO TS 16949.',
    details: 'Im Fahrzeugbau sind Gewichtsoptimierung bei maximaler mechanischer Festigkeit und Bauteilzuverlässigkeit der Standard. Unsere Partnerwerke fertigen sicherheitsrelevante Bauteile für Achsen, Aufhängungen, Getriebe und Motoren.',
    standards: ['ISO TS 16949', 'IATF 16949', 'VDA 6.3 Auditierung'],
    features: ['Eigenspannungsarm geglühte Sicherheitskomponenten', 'PPAP Level 3 Dokumentation', 'Vollautomatische Serienfertigung'],
    iconName: 'Cpu',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'schiffbau',
    title: 'Schiffbau & Offshore-Technik',
    titleDe: 'Schiffbau',
    description: 'Robuste Gusskomponenten mit Abnahmen durch anerkannte Klassifikationsgesellschaften wie DNV, LR, GL.',
    details: 'Extreme Umwelteinflüsse, Salzwassereinwirkung und zyklische Extrembelastungen erfordern Spezialwerkstoffe mit hoher Zähigkeit. Wir liefern Ankersysteme, Ruderanlagen, Zylinderlaufbuchsen und seewasserbeständige Pumpengehäuse.',
    standards: ['Det Norske Veritas (DNV)', "Lloyd's Register (LR)", 'Bureau Veritas (BV)', 'Germanischer Lloyd (GL)'],
    features: ['Seewasserbeständige Bronze- und Edelstahllegierungen', 'Klassifizierte Bauteilprüfungen vor Ort', 'Ultraschall- und Magnetpulverprüfberichte'],
    iconName: 'Anchor',
    imageUrl: 'https://images.unsplash.com/photo-1516216621161-0021b1b72e06?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'maschinenbau',
    title: 'Allgemeiner Maschinen- & Anlagenbau',
    titleDe: 'Anlagenbau',
    description: 'Kundenspezifische Gussteile und Schmiedestücke bis zu 12 Tonnen Stückgewicht für anspruchsvolle Beanspruchung.',
    details: 'Vom schweren Gussgehäuse für Getriebe bis zu komplexen Zahnrädern und Hebeln: MBR liefert Einzelstücke, Kleinserien und Großserien exakt nach Zeichnungsvorgabe des Kunden, roh oder komplett bezugsfertig mechanisch bearbeitet.',
    standards: ['DIN EN 1561', 'DIN EN 1563', 'ISO 9001'],
    features: ['Stückgewichte von 0,1 kg bis 12.000 kg', 'Wärmebehandlung nach Maß (Normalisieren, Vergüten)', 'Komplettbearbeitung auf hochmodernen CNC-Zentren'],
    iconName: 'Factory',
    imageUrl: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80'
  }
];

export const MATERIALS_DATA: MaterialSpec[] = [
  {
    dinCode: 'DIN EN 10283',
    nameDe: 'Korrosionsbeständiger Stahlguss',
    nameEn: 'Corrosion-Resistant Steel Castings',
    category: 'Stahlguss (Alloys & Stainless)',
    properties: ['Hervorragende Beständigkeit gegen Säuren und chloride Medien', 'Hohe Zähigkeitswerte bei extremen Minustemperaturen', 'Sehr gut schweißgeeignet'],
    applications: ['Ventilgehäuse der Petrochemie', 'Kreiselpumpen für Meerwasser', 'Zellstoff- und Papierindustrie']
  },
  {
    dinCode: 'DIN EN 10295',
    nameDe: 'Hitzebeständiger Stahlguss',
    nameEn: 'Heat-Resistant Steel Castings',
    category: 'Spezialstahlguss',
    properties: ['Hitzebeständig bis über 1100°C', 'Hohe Kriech- und Zeitstandfestigkeit', 'Zunderbeständig bei heißen Verbrennungsgasen'],
    applications: ['Wirbelschichtanlagen', 'Ofenbauteile & Härtekörbe', 'Müllverbrennungsroste']
  },
  {
    dinCode: 'DIN EN 1706',
    nameDe: 'Aluminiumguss und Legierungen',
    nameEn: 'Aluminium and Aluminium Alloys',
    category: 'Nichteisen-Leichtmetall',
    properties: ['Geringes spezifisches Gewicht', 'Hervorragende thermische Leitfähigkeit', 'Sehr gute Korrosionsresistenz'],
    applications: ['Gehäuseteile für Elektromotoren', 'Kühlkörper', 'Getriebegehäuse im Automobilbau']
  },
  {
    dinCode: 'DIN EN 1561',
    nameDe: 'Grauguss (Gusseisen mit Lamellengrafit)',
    nameEn: 'Grey Cast Iron',
    category: 'Gusseisen',
    properties: ['Herausragende Dämpfungseigenschaften gegen Vibrationen', 'Sehr gute spanabhebende Bearbeitbarkeit', 'Gutes Verschleißverhalten'],
    applications: ['Werkzeugmaschinenbetten', 'Kompressorenzylinder', 'Schwungräder & Motorblöcke']
  },
  {
    dinCode: 'DIN EN 1563',
    nameDe: 'Sphäroguss (Gusseisen mit Kugelgrafit)',
    nameEn: 'Spheroidal Graphite Cast Iron',
    category: 'Gusseisen (Ductile Iron)',
    properties: ['Stahlähnliche hohe Dehngrenze und Zugfestigkeit', 'Gute Duktilität und Kerbschlagzähigkeit', 'Gewichteinsparung gegenüber Grauguss möglich'],
    applications: ['Achsschenkel für Nutzfahrzeuge', 'Windkraftnaben', 'Schwere Druckplatten']
  }
];

export const PROCESSES_DATA: ManufacturingProcess[] = [
  {
    id: 'sandguss',
    title: 'Handformen & Halbautomatische Furanharzanlagen',
    description: 'Für mittlere und große Bauteile von 50 kg bis zu 12.000 kg Stückgewicht.',
    details: 'Die Verwendung von selbsthärtenden Furanharzsanden ermöglicht höchste Maßhaltigkeit bei großen Werkstückdimensionen. Ideal für Maschinengestelle, Schwermaschinenbau und Getriebegehäuse.',
    type: 'guss'
  },
  {
    id: 'disamatic',
    title: 'Disamatic & Horizontale Formanlagen',
    description: 'Automatische Formprozesse für hohe Stückzahlen bei optimalen Toleranzen (0,5 kg - 80 kg).',
    details: 'Dank extrem hoher Formgeschwindigkeit und konstanter Presshärte lassen sich präzise Großserien für Automobilzulieferer und den Rohrleitungsbau effizient realisieren.',
    type: 'guss'
  },
  {
    id: 'kokillenguss',
    title: 'Schwerkraft- und Niederdruck-Kokillenguss',
    description: 'Formgebungsverfahren mit metallischen Dauerformen für exzellente Maßüberwachung.',
    details: 'Hauptsächlich für Aluminium- und Kupferwerkstoffe. Erreicht feinkörnige, homogene Gefüge durch beschleunigte Erstarrung in der Stahlform.',
    type: 'guss'
  },
  {
    id: 'feinguss',
    title: 'Feinguss (Wachsausschmelzverfahren)',
    description: 'Präzisionsguss von filigranen Teilen bis ca. 50 kg mit minimaler Nachbearbeitung.',
    details: 'Hervorragung von Detailtreue und exzellente Oberflächenrauheiten. Nahezu freie Werkstoffwahl inklusive exotischer Edelstahllegierungen.',
    type: 'guss'
  },
  {
    id: 'gesenkschmiede',
    title: 'Gesenkshmiede & Freiformschmiedestücke',
    description: 'Warmumformung durch Schmiedepressen und Schmiedehämmer.',
    details: 'Erzeugt extrem belastbare, faserorientierte Bauteile frei von Lunkern und Blasen. Ideal für Pleuel, Kurbelwellen und Hebelkomponenten der Schwerindustrie.',
    type: 'schmied'
  },
  {
    id: 'pressteile',
    title: 'Stanz- und Biegeteile sowie Kaltguss',
    description: 'Großflächige Blech- und Pressteile für den Karosserie- und Anlagenbau.',
    details: 'Hergestellt mit Kraftpressen der neuesten Generation für eine gleichmäßige Wandstärke und geometrische Verlässlichkeit.',
    type: 'schmied'
  },
  {
    id: 'rohre',
    title: 'Nahtlos gewalzte/gezogene & längswanderungsschweißte Rohre',
    description: 'Industrierohre, Zylinderrohre und Spezialhohlprofile nach EN/ASTM.',
    details: 'Lieferbar in verschiedensten Werkstoffgüten, inklusive metallurgischer Wärmebehandlung und zerstörungsfreier Ultraschallprüfungen auf Fehlerfreiheit.',
    type: 'rohre'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: 'Welche Zertifizierungen können für die Bauteile bereitgestellt werden?',
    answer: 'Unsere angeschlossenen Gießereien und Schmiedewerke verfügen über Zulassungen renommierter Klassifikationsgesellschaften wie TÜV (AD 2000-W0), Lloyd\'s Register, Det Norske Veritas (DNV), Bureau Veritas sowie ISO 9001 und IATF 16949 für die Automobilbranche.',
    category: 'Zertifizierung'
  },
  {
    question: 'Welche Mindestbestellmengen (MOQ) gelten für Schmiede- und Gusserzeugnisse?',
    answer: 'Im Großguss (z.B. Sandguss über Handformanlagen ab 100 kg) fertigen wir kosteneffizient ab Stückzahl 1. Bei hochautomatisierten Anlagen (Disamatic) oder Feinguss vereinbaren wir kundenorientierte MOQ basierend auf dem Bauteilgewicht und den Rüstkosten.',
    category: 'Bestellabwicklung'
  },
  {
    question: 'Bietet MBR GmbH die komplette mechanische Bearbeitung an?',
    answer: 'Ja. Wir liefern auf Wunsch nicht nur rohe Gussteile, sondern übernehmen federführend die komplette spanabhebende CNC-Bearbeitung (Drehen, Fräsen, Bohren), Oberflächenbeschichtung sowie Baugruppenmontage. Sie erhalten montagefertige Komponenten.',
    category: 'Leistungsspektrum'
  },
  {
    question: 'Wie wird die Qualitätskontrolle sichergestellt?',
    answer: 'Jede Liefercharge wird von qualitätssichernden Vor-Ort-Kontrollen begleitet. Dazu gehören Spektralanalysen der Schmelze, Härteprüfungen, Metallografie, Maßkontrollen und zerstörungsfreie Prüfungen wie Zerstörungsfreier Ultraschall (UT), Magnetpulverprüfung (MT) und Durchstrahlungsprüfung (RT/Röntgen). Alles dokumentiert über Abnahmeprüfzeugnisse nach DIN EN 10204 3.1 oder 3.2.',
    category: 'Qualitätssicherung'
  }
];

export const CONTRACT_DOCUMENTS: DownloadDocument[] = [
  {
    id: 'einkauf',
    titleDe: 'Allgemeine Einkaufsbedingungen (AEB)',
    titleEn: 'General Purchasing Conditions',
    type: 'purchasing',
    fileSize: '340 KB'
  },
  {
    id: 'lieferung',
    titleDe: 'Allgemeine Liefer- und Zahlungsbedingungen (ALB)',
    titleEn: 'General Terms of Delivery and Payment',
    type: 'delivery',
    fileSize: '315 KB'
  },
  {
    id: 'general_contract',
    titleDe: 'Rahmenvertragsbedingungen (RVB) - Deutsch / Englisch',
    titleEn: 'General Purchasing and Contract Conditions',
    type: 'general',
    fileSize: '420 KB'
  }
];
