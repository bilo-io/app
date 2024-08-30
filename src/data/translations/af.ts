import { ITranslation } from '.';

export const af: ITranslation = {
  account: {
    billing: 'Fakturering',
    chooseTheme: 'Kies Thema',
    dark: 'Donker',
    email: 'E-pos',
    features: 'Kenmerke',
    light: 'Lig',
    name: 'Naam',
    profile: 'Profiel',
    settingExplorerAutoExpand: 'Vou dopgehou outomaties uit in die Verkenner vir elke kenmerk',
    settingExplorerEditOnSelect: 'Maak redakteur outomaties oop wanneer \'n item in die Verkenner gekies word',
    settingNavbarExpanded: 'Maak Navigasiebalk uit',
    settingPickLanguage: 'Kies Taal',
    settingPickTheme: 'Kies Tema',
    settingPlayMusicOnStartup: 'Speel Musiek by Projek Begin',
    settingShowClock: 'Wys Klok',
    signOut: 'Teken uit',
    subscription: 'Intekengeld',
    title: 'Rekening',
  },

  ai: {
    featurePage: {
      description: 'KI-gegenereerde inhoud versnel jou kreatiewe werkstroom en help jou om hoë-kwaliteit media hulpbronne doeltreffend te produseer.',
      details: [
        {
          content: 'Benut gevorderde KI-modelle om vinnig hoë kwaliteit teksinhoud te genereer, jou skryfproses te verbeter en kreatiwiteit aan te wakker.',
          title: 'KI-gestützte Texterstellung'
        },
        {
          content: 'Transformeer teksaanwysings in pragtige beelde met behulp van KI, bespaar tyd en verhoog jou kreatiewe uitset.',
          title: 'Innovative KI-Bilderstellung'
        },
        {
          content: 'Genereer oudio-inhoud, insluitend stemoptrede en klankeffekte, met KI, wat jou oudioproduksie workflow stroomlyn.',
          title: 'KI-gesteuerte Audioproduktion'
        },
        {
          content: 'Produseer komplekse visuele vertellings met KI-gegenereerde video\'s, wat videoproduksie meer doeltreffend en toeganklik maak.',
          title: 'KI-Videoerstellung'
        },
        {
          content: 'Skep gedetailleerde 3D-modelle van teksbeskrywings met behulp van KI, wat jou karakters en omgewings maklik tot lewe bring.',
          title: 'KI-generierte 3D-Modelle'
        }
      ],
      key: 'ai'
    }

  },

  auth: {
    acceptTerms: 'Aanvaar Voorwaardes',
    alreadyHaveAccount: 'Het jy reeds \'n rekening?',
    dontHaveAccount: 'Het jy nie \'n rekening nie?',
    logIn: 'Teken In',
    logOut: 'Teken Uit',
    signInWith: (provider) => `Teken aan met ${provider}`,
    signOut: 'Meld Af',
    signUp: 'Registreer',
    singleSignOn: 'Enkel-Aanmelding',
    welcomeHeading: 'Welkom',
    welcomeSentence: 'Welkom by ons platform.',
  },

  blueprints: {
    description: '\'n Stel dokument-sjablone om die skepping van \'n dokument te bespoedig',
    title: 'Bloudrukke',
  },

  characters: {
    description: 'Skep en wysig karakters vir gebruik in "Dialoë", ens.',
    docs: `
# Vision Studio | Karakters

Die **Karakters**-funksie in Vision Studio stel gebruikers in staat om gedetailleerde karakterprofiele vir verskeie mediaprojekte te skep en te bestuur. Of jy nou karakters vir speletjies, films of romans ontwikkel, hierdie funksie bied omvattende gereedskap om persoonlikhede, agtergronde, eienskappe en meer te definieer.

## Funksie-uitleg

Die Karakters-funksie is gestruktureer om organisasie en produktiwiteit regdeur die karakterskeppingsproses te verbeter.

### Verkenner

Die Verkenner-aansig lys alle karakterprofiele binne die projek, gekategoriseer in vouers soos "Hoofkarakters," "Ondersteunende Karakters," en "NPC's."

### Leë Aansig

By die betree van die Karakters-funksie sien gebruikers 'n gestroomlynde koppelvlak met die noodsaaklike gereedskap:

- **Aan die gang-Tab**: Bied inleidende gidse en tutorials vir nuwe gebruikers.
- **FAQs-Tab**: Beantwoord algemene vrae oor die skep en bestuur van karakters.
- **Video's-Tab**: Bevat videotutorials wat karakterskeppingstegnieke demonstreer.
- **Dokumente-Tab**: Bied dokumentasie en sjablone vir karakterprofiele en -kenmerke.
- **Uitvoer-Tab**: Laat toe om karakterprofiele in JSON-, CSV- en PDF-formate uit te voer.

### Inhoudsaansig

Die kies van 'n karakterprofiel uit die Verkenner vul die Inhoudsaansig. Hier kan gebruikers gedetailleerde karakterinligting sien en redigeer:

- **Aksiebalk**: Bied opsies om karakterprofiele te redigeer, dupliseer, stoor en verwyder.
- **Gereedskapspaneel**: Bied oortjies soos "Redigeer," "KI," en "Invoer" om karakterbesonderhede te konfigureer en te verbeter.
- **Voorskou**: Laat gebruikers toe om karakterprofiele en wysigings te sien voordat dit finaal gemaak word.

### Funksiegereedskap

Die Funksiegereedskap-paneel bied gevorderde funksies vir die skep en bestuur van karakterprofiele:

- **Skep/Redigeer-Tab**: Laat gebruikers toe om karakterkenmerke te definieer met behulp van die \`ICharacter\`-skema, wat demografie, eienskappe, agtergrond en meer spesifiseer.
- **KI-Tab**: Maak gebruik van KI-gereedskap om karakterprofiele te genereer gebaseer op gespesifiseerde kriteria en temas.
- **Invoer-Tab**: Maak dit maklik om karakterprofiele van eksterne bronne in JSON-formaat in te voer.

## Invoer & Uitvoer

Die Karakters-funksie ondersteun naatlose invoer- en uitvoerfunksionaliteite vir doeltreffende samewerking en projekbestuur:

### Invoer

Gebruikers kan karakterprofiele en -kenmerke in JSON-formaat invoer, wat versoenbaarheid en data-integriteit verseker.

### Uitvoer

Karakterprofiele kan in verskeie formate uitgevoer word:
- JSON
- CSV
- PDF

Die Uitvoer-tab in die Leë Aansig maak dit moontlik om hele versamelings of subsets van karakterprofiele vir deel- en argiveringsdoeleindes uit te voer.

## Skep en Bestuur van Karakterprofiele

### Skep Nuwe Karakters

Om 'n nuwe karakterprofiel te skep, navigeer na die "Aan die gang"-tab en klik op die groot blou ronde knoppie met 'n +. Hierdie aksie open die "Karakters-gereedskap"-paneel, waarmee gebruikers demografie, eienskappe en agtergronde kan definieer.

### Redigeer Karakterbesonderhede

Die redigering van karakterprofiele stel gebruikers in staat om demografie, eienskappe, agtergronde en ander kenmerke te wysig deur die "Redigeer"-tab in die Funksiegereedskap-paneel te gebruik.

### KI-ondersteunde Karaktergenerering

Die "KI"-tab in die "Karakters-gereedskap"-paneel maak gebruik van masjienleer-algoritmes om karakterprofiele voor te stel gebaseer op gebruikersgedefinieerde parameters en temas.

### Invoer en Uitvoer van Karakterprofiele

Gebruik die "Invoer"-tab om karakterprofiele in JSON-formaat van eksterne bronne in te voer. Die "Uitvoer"-tab bied opsies om karakterprofiele in JSON-, CSV- of PDF-formate uit te voer vir deel- en samewerkingsdoeleindes.

## FAQs

Hier is 'n paar gereelde vrae oor die **Karakters**-funksie:

1. **Hoe skep ek 'n nuwe karakterprofiel?**
   - Navigeer na die "Aan die gang"-tab en klik op die groot blou ronde knoppie met 'n + om die "Karakters-gereedskap"-paneel te open. Definieer die nodige demografie, eienskappe en agtergronde.

2. **Kan ek karakterprofiele uit ander projekte invoer?**
   - Ja, gebruik die "Invoer"-tab om karakterprofiele in JSON-formaat van eksterne bronne in te voer.

3. **Watter uitvoerformate word vir karakterprofiele ondersteun?**
   - Karakterprofiele kan in die formate JSON, CSV en PDF uitgevoer word om versoenbaarheid en samewerking te verseker.

4. **Hoe ondersteun die KI-tab die generering van karakterprofiele?**
   - Die KI-tab maak gebruik van masjienleer om karakterprofiele voor te stel gebaseer op gebruikersgedefinieerde temas en kenmerke.

5. **Is daar 'n beperking op die aantal karakterprofiele wat ek kan skep?**
   - Die aantal karakterprofiele kan wissel afhangende van jou intekeningplan.

6. **Kan ek karakterprofiele voorskou voordat ek wysigings finaliseer?**
   - Ja, gebruik die "Voorskou"-opsie in die Aksiebalk om karakterprofiele en wysigings te sien.

7. **Watter tipes mediaprojekte kan baat vind by die Karakters-funksie?**
   - Vision Studio ondersteun die karakterskepping vir speletjies, films, romans en ander mediaprojekte wat gedetailleerde karakterprofiele benodig.

8. **Kan ek saamwerk met spanlede aan karakterprofiele?**
   - Ja, nooi spanlede uit na jou werkruimte om gesamentlik karakterprofiele te skep en te bestuur.

9. **Is daar vooraf gedefinieerde sjablone vir algemene karakterprofiele?**
   - Ja, verken die "Dokumente"-tab in die Leë Aansig vir sjablone en riglyne vir die skep van karakterprofiele.

10. **Hoe kan ek 'n karakterprofiel uit my projek verwyder?**
    - Kies die karakterprofiel in die Verkenner-aansig en gebruik die "Verwyder"-opsie in die Aksiebalk. Bevestig die verwydering in die modaal wat verskyn.

## Bylae
`,
    faqs: [
      {
        answer: 'Die Karakters-paneel bied KI-gedrewe karaktergenerering, insluitend eienskappe, konsep-kuns, agtergrondverhaal, demografie, affiliasie en meer, spesifiek vir speletjie-ontwerp.',
        question: 'Watter funksionaliteite bied die Karakters-paneel vir speletjie-ontwerp?',
      },
      {
        answer: 'Die KI help deur eienskappe voor te stel, konsep-kuns te genereer op grond van beskrywings, boeiende agtergrondverhale te skep en demografie en affiliasies te bepaal, wat die karakterontwerpproses stroomlyn.',
        question: 'Hoe help die KI met karaktergenerering?',
      },
      {
        answer: 'Absoluut. Terwyl die KI \'n basis bied, het u die buigsaamheid om elke aspek van die karakters aan te pas, om seker te maak hulle pas perfek by u speletjie se visie.',
        question: 'Kan ek die gegenereerde karakters aanpas?',
      },
      {
        answer: 'Ja, die Karakters-paneel integreer naatloos met die Dialoë-paneel en gebruik karakterinligting om die dialoogskep-proses te stroomlyn en te verbeter.',
        question: 'Is daar integrasie met ander panele, soos Dialoë?',
      },
      {
        answer: 'Ja, u kan karakterprofiele in verskeie formate uitvoer, wat dit maklik maak om hulle te integreer in ander aspekte van u speletjie-ontwikkelingswerkvloei.',
        question: 'Kan ek karakterprofiele vir eksterne gebruik uitvoer?',
      },
      {
        answer: 'U kan demografie, agtergrondverhale, vaardighede, vermoëns en persoonlikheidseienskappe vir elke karakter spesifiseer.',
        question: '--- Watter besonderhede kan ek vir \'n karakter spesifiseer?',
      },
      {
        answer: 'Ja, u kan konsep-kuns oplaai en getekstureerde 3D-modelle vir u karakters genereer.',
        question: 'Kan ek konsep-kuns vir karakters oplaai?',
      },
      {
        answer: 'Karakters kan georganiseer word met behulp van die deursoekbare lys in die Verkenner met pasgemaakte vouers.',
        question: 'Hoe kan ek my karakters organiseer?',
      },
      {
        answer: 'Ja, u kan KI-instrumente gebruik om karakterprofiele en agtergrondverhale te genereer.',
        question: 'Kan ek karakterprofiele met KI genereer?',
      },
      {
        answer: 'Karakters kan uitgevoer word in PDF-, Docx- en 3DModel-formate met teksture.',
        question: 'Watter uitvoerformate is beskikbaar vir karakters?',
      },
      {
        answer: 'Ja, u kan medewerkers met spesifieke toestemmings nooi om aan die skepping van karakters te werk.',
        question: 'Kan ek met ander saamwerk aan die skepping van karakters?',
      },
      {
        answer: 'Ja, daar is sjablone en riglyne beskikbaar om u te help om gedetailleerde karakterprofiele te skep.',
        question: 'Is daar sjablone beskikbaar vir die skepping van karakters?',
      },
      {
        answer: 'Kies die karakter uit die Verkenner en gebruik die "Karakter-instrumente" om die besonderhede te wysig.',
        question: 'Hoe wysig ek \'n bestaande karakter?',
      },
      {
        answer: 'Ja, u kan \'n karakterprofiel dupliseer met die "Dupliseer" opsie in die Aksiebalk.',
        question: 'Kan ek \'n karakterprofiel dupliseer?',
      },
      {
        answer: 'Kies die karakter en gebruik die "Verwyder" opsie in die Aksiebalk. \'n Bevestigingsvenster sal verskyn voordat dit verwyder word.',
        question: 'Hoe verwyder ek \'n karakter?',
      }
    ],
    featurePage: {
      description: 'Karakters is die hart en siel van jou stories, elk met unieke agtergronde, persoonlikhede en verhale.',
      details: [
        {
          content: 'Skep gedetailleerde karakterprofiele, insluitend name, agterstories, persoonlikhede en visuele voorstellings. Laat jou karakters lewendig word met diepte en egtheid.',
          title: 'In-diepte Karakterskepping',
        },
        {
          content: 'Genereer hoë kwaliteit konsepkuns gebaseer op jou karakterbeskrywings. Visualiseer jou karakters met presisie en verbeter die wêreldbou-ervaring.',
          title: 'Verbluffende Konsepkuns',
        },
        {
          content: 'Eksperimenteer met die generering van 3D-modelle van jou karakters. Dit voeg \'n nuwe dimensie by tot jou storievertelling, wat jou karakters nog meer boeiend maak.',
          title: 'Innemende 3D-modelle',
        }
      ],
      key: 'characters'
    },
    form: {
      abilities: 'Vermogens',
      alias: 'Alias',
      background: 'Agtergrond',
      demongraphics: 'Demografie',
      education: 'Onderwys',
      ethnicity: 'Etnisiteit',
      firstName: 'Voornaam',
      gender: 'Geslag',
      identity: 'Identiteit',
      images: 'Beelde',
      language: 'Taal',
      lastName: 'Van',
      name: 'Naam',
      nationality: 'Nasionaliteit',
      occupation: 'Beroep',
      personality: 'Persoonlikheid',
      sexuality: 'Seksualiteit',
      skills: 'Vaardighede',
    },
    title: 'Karakters',
  },

  common: {
    behaviour: 'Gedrag',
    description: 'Beskrywing',
    diet: 'Dieet',
    folder: 'Lêer',
    folders: 'Lêers',
    fuelType: 'Brandstoftipe',
    galleryIds: 'Lêers',
    habitat: 'Habitat',
    lore: 'Oorgelewerde verhaal',
    material: 'Materiaal',
    plot: 'Verhaallyn',
    speed: 'Spoed',

    abilities: 'Vermoëns',
    abort: 'Staak',
    add: 'Voeg by',
    addItem: (value) => `Voeg ${value} by`,
    admin: 'Admin',
    alias: 'Alias',
    art: 'Kuns',
    artConcept: 'Konsep kuns',
    back: 'Terug',
    background: 'Agtergrond',
    cancel: 'Staak',
    close: 'Sluit',
    confirm: 'Bevestig',
    continue: 'Gaan voort',
    create: 'Skep',
    createItem: (value) => `Skep ${value}`,
    daily: 'Daagliks',
    day: 'Dag',

    days: 'Dae',
    delete: 'Verwyder',
    deleteItem: (value) => `Verwyder ${value}`,
    demographics: 'Demografie',
    docs: 'Dokumente',
    download: 'Aflaai',
    duplicate: 'Dupliseer',
    edit: 'Wysig',
    editItem: (value) => `Wysig ${value}`,
    education: 'Onderwys',
    ethnicity: 'Etnisiteit',
    explorer: 'Verkenner',
    export: 'Uitvoer',
    exports: 'Uitvoere',
    faqs: 'Vrae en Antwoorde',
    features: 'Funksies',
    firstName: 'Voornaam',
    gender: 'Geslag',
    getStarted: 'Kom aan die gang',
    hi: 'Hallo',
    hour: 'Uur',
    hourly: 'Uurliks',
    hours: 'Ure',
    identity: 'Identiteit',
    images: 'Beelde',
    import: 'Invoer',
    imports: 'Invoere',
    itemExplorer: (value) => `Verkenner ${value}`,
    itemPreview: (value) => `Voorskou ${value}`,
    itemTools: (value) => `Gereedskap ${value}`,
    language: 'Taal',
    lastName: 'Van',
    legal: 'Regs',
    minute: 'Minuut',
    minutely: 'Minuutliks',
    minutes: 'Minute',
    month: 'Maand',
    monthly: 'Maandeliks',
    months: 'Maande',
    name: 'Naam',
    nationality: 'Nasionaliteit',
    needHelp: 'Benodig Hulp',
    next: 'Volgende',
    occupation: 'Beroep',
    overview: 'Oorsig',
    personality: 'Persoonlikheid',
    preview: 'Voorskou',
    pricing: 'Pryse',
    recentItems: (items: string) => `Onlangse ${items}`,
    save: 'Stoor',
    search: 'Soek',
    searchResource: (resource) => `Soek na ${resource}`,
    settings: 'Instellings',
    sexuality: 'Seksualiteit',
    skills: 'Vaardighede',
    tools: 'Gereedskap',
    webApp: 'App',
    webSite: 'Webwerf',
    week: 'Week',
    weekly: 'Weekliks',
    weeks: 'Weke',
    year: 'Jaar',
    yearly: 'Jaarliks',
    years: 'Jare',
  },

  components: {
    confirmActionHeading: (action: string, resource: string) => `${resource} ${action}`,
    confirmActionOnItem: (action: string, resource: string) => `Is jy seker jy wil hierdie ${resource} ${action}?`,
    confirmActionOnItemDescription: (primary: string, secondary: string) => `Druk "${primary}" om voort te gaan, of "${secondary}" om te kanselleer.`,
    featureGuideWelcomeP1: (featureName: string) => `Welkom by die *${featureName}* funksie.`,
    featureGuideWelcomeP2: (featureName: string) => `Hier kan u óf 'n nuwe *${featureName}* skep óf kies om 'n bestaande een te wysig.`,
    featureGuideWelcomeP3: (featureName: string) => `Elke gestoorde *${featureName}* is sigbaar in die "Verkenner" aan die linkerkant.`,
    sidebarClose: 'Sluit sybalk'

  },

  controls: {
    docs: '',
    featurePage: {
      description: 'Beheer bied die gereedskap om die interaktiewe elemente binne jou projekte te bestuur, wat \'n gladde en boeiende gebruikerservaring verseker.',
      details: [
        {
          content: 'Implementeer beheerskemas wat aangepas is vir groot platforms soos PlayStation, Xbox en Nintendo Switch, wat \'n konsekwente gebruikerservaring verseker.',
          title: 'Platformspesifieke Kontroles',
        },
        {
          content: 'Toegang tot \'n versameling voorafgekonfigureerde beheerskemas om jou projek te begin, en pas dit aan soos nodig vir fyninstelling.',
          title: 'Uitgebreide Voorafgekonfigureerde Biblioteek',
        },
        {
          content: 'Skep en bestuur pasgemaakte beheerskemas, organiseer dit in dopgehou vir maklike toegang en konteks-spesifieke gebruik, soos \'geveg\' vs. \'verkenning\'.',
          title: 'Gereorganiseerde Beheerskemas',
        },
      ],
      key: 'controls',
    },
  },

  creatures: {
    featurePage: {
      description: 'Wesens is enige diere of nie-humanoïede karakters wat jou stories bewoon en lewe en diversiteit aan jou wêreld gee.',
      details: [
        {
          content: 'Skep gedetailleerde en verbeeldingryke ontwerpe vir jou wesens, sodat hulle naatloos in jou wêreld inpas.',
          title: 'Unieke Weseontwerpe'
        },
        {
          content: 'Definieer die gedrag, habitats en ekologiese rolle van jou wesens om jou wêreld meer meeslepend en realisties te maak.',
          title: 'Gedrag en Ekologie'
        },
        {
          content: 'Inkorporer magiese en mitiese wesens in jou stories, elk met hul eie lore en mistieke vermoëns.',
          title: 'Magiese en Mitiese Wesens'
        }
      ],
      key: 'creatures'
    }

  },

  dashboard: {
    addItem: 'Voeg Dokument by',
    addProject: 'Voeg Projek by',
    contentRating: 'Inhoudswaardering',
    description: 'Skep, wysig en deursoek dokumente.',
    devTechnology: 'Ontwikkelingstegnologie',
    projectArt: 'Projekkuns',
    projectArtDescription: 'Konsepte vir die projek wat \'n voorsmakie gee van waaroor hierdie projek gaan',
    projectFeatures: 'Projekkenmerke',
    projectFeaturesDescription: 'Bestuur die kenmerke van u projek en aktiveer arbitrêr die verskillende kenmerke wat Vision bied, wat ook al by u projek pas. U kan ook kenmerke deaktiveer sonder om die onderliggende hulpbronne te beïnvloed, sodat u nooit per ongeluk iets sal uitvee nie.',
    projectInfo: 'Projekinligting',
    projectInfoDescription: 'Wysig die metainligting van u projek, insluitend die inhoudswaardering en vrystellingsdatum, sowel as die ontwikkelingstegnologie en teikenplatforms vir u projek.',
    projects: '',
    releaseDate: 'Vrystellingsdatum',
    tableHeaders: {
      lastUpdated: 'Laaste opgedateer',
      projectName: 'Projeknaam',
      sections: 'Seksies',
    },
    targetPlatform: 'Teikenplatform',
    technology: 'Tegnologie',
    title: 'Dashboard',
    usersWithAccess: 'Gebruikers met toegang',
    viewMore: 'Kyk meer',
    // faqs: [

    // ],
    // featurePage: {

    // },
    // docs: {

    // }
  },

  dialogues: {
    featurePage: {
      description: 'Dialoge bring jou karakters tot lewe en maak ryk en boeiende interaksies tussen hulle moontlik.',
      details: [
        {
          content: 'Skep en bestuur dialoë tussen karakters met \'n maklik-om-te-gebruik redigeerder, wat gladde en boeiende interaksies verseker.',
          title: 'Intuïtiewe Dialoog Skepping',
        },
        {
          content: 'Skep vertakkende dialoogbome om verskillende gesprekspaaie en uitkomste te verken, wat diepte aan karakterinteraksies toevoeg.',
          title: 'Dinamiese Dialoog Bome',
        },
        {
          content: 'Integreer stemakteurskrifte of oudiolêers om die onderdompeling en realisme van jou dialoë te verbeter.',
          title: 'Naadlose Stem Integrasie',
        },
      ],
      key: 'dialogues',
    }

  },

  documents: {
    description: '',
    featurePage: {
      description: 'Dokumente is jou primêre gereedskap vir die skryf en organiseer van jou inhoud, met ondersteuning vir verskeie formate.',
      details: [
        {
          content: 'Gebruik \'n kragtige teksredigeerder met ryk formateringsopsies om gedetailleerde en visueel aantreklike dokumente te skep.',
          title: 'Gevorderde Teksredigering'
        },
        {
          content: 'Hou jou dokumente netjies georganiseer in vouers en subvouers, wat hulle maklik toeganklik en hanteerbaar maak.',
          title: 'Doeltreffende Dokumentorganisasie'
        },
        {
          content: 'Voer dokumente in en voer dit uit in verskeie formate, insluitend PDF, Markdown en Docx, wat versoenbaarheid en maklike deling verseker.',
          title: 'Veelsydige Invoer & Uitvoer'
        }
      ],
      key: 'documents'
    },
    title: ''

  },

  features: {
    '3D': '3D',
    account: 'Rekening',
    ai: 'KI',
    ai3D: 'KI 3D',
    aiAudio: 'KI-audio',
    aiExamples: 'KI-voorbeelde',
    aiImages: 'KI-beelde',
    aiText: 'KI-tekst',
    aiVideo: 'KI-video',
    asset: 'Bate',
    assets: 'Bates',
    audio: 'Audio',
    character: 'Karakter',
    characters: 'Karakters',
    control: 'Beheer',
    controls: 'Beheerders',
    creature: 'Skepsel',
    creatures: 'Skepsels',
    dashboard: 'Dashboard',
    dialogue: 'Dialoog',
    dialogues: 'Dialoë',
    document: 'Dokument',
    documents: 'Dokumente',
    examples: 'Voorbeelde',
    graph: 'Grafiek',
    graphs: 'Grafieke',
    home: 'Tuis',
    homePage: 'Tuisblad',
    illustration: 'Illustrasie',
    illustrations: 'Illustrasies',
    images: 'Beelde',
    location: 'Plek',
    locations: 'Plekke',
    media: 'Media',
    multimedia: 'Multimedia',
    object: 'Voorwerp',
    objects: 'Voorwerpe',
    project: 'Projek',
    projects: 'Projekte',
    quest: 'Soektog',
    quests: 'Soektogte',
    setting: 'Instelling',
    settings: 'Instellings',
    subscription: 'Intekening',
    subscriptions: 'Intekeninge',
    text: 'Tekst',
    transport: 'Vervoer',
    transports: 'Vervoermiddels',
    user: 'Gebruiker',
    users: 'Gebruikers',
    vehicle: 'Voertuig',
    vehicles: 'Voertuie',
    video: 'Video',
    workspace: 'Werksplek',
    workspaces: 'Werksplekke',
  },

  galleries: {
    'character': {
      'description': 'Skep en redigeer karakters vir gebruik in \'Dialoë\', ens.',
      'title': 'Karaktergalerij'
    },
    description: ' \'n Plek om visuele konsepte te beraam en in galerieversamelings te plaas.',
    image: {
      description: 'Skep aangepaste KI-aangedrewe beelde',
      enterPrompt: 'Voer \'n aanduiding in',
      pickStyle: 'Kies \'n kunsvorm',
      title: 'Beeldgelery',
    },
    sound: {
      description: 'Skep KI-gegenereerde klankfragmente',
      title: 'Klankgelery'
    },
    title: 'Gelerye',
    video: {
      description: 'Rig videos vanaf teks met KI',
      title: 'Videogelery'
    }

  },

  generators: {
    description: 'Die stel van onderliggende KI-opwekkers wat hierdie ervaring moontlik maak',
    title: 'Generators',
  },

  graphs: {
    featurePage: {
      description: 'Grafieke maak dit moontlik om data en verhoudings binne jou projekte visueel voor te stel, wat helderheid en insig bied.',
      details: [
        {
          content: 'Bou en pas grafieke aan om komplekse data en verhoudings visueel voor te stel, wat begrip en insig verbeter.',
          title: 'Omvattende Grafiek Skepping',
        },
        {
          content: 'Gebruik grafieke om karakterverhoudings, plotpunte en ander verhaalelemente te illustreer, wat komplekse inligting meer toeganklik maak.',
          title: 'Effektiewe Data Visualisering',
        },
        {
          content: 'Skep interaktiewe grafieke wat gebruikers in staat stel om die data te verken en daarmee te kommunikeer, wat \'n dieper begrip van jou projek bied.',
          title: 'Interaktiewe Grafieke',
        },
      ],
      key: 'graphs',
    }

  },

  landing: {
    allFeatures: 'Alle Funksies',
    getAccess: 'Kry Toegang',
    sections: [
    ],
    watchVideo: 'Video Kyk',
  },

  locations: {
    featurePage: {
      description: 'Lokasies bied die instellings vir jou stories en bring jou wêrelde tot lewe met ryk detail en visuele elemente.',
      details: [
        {
          content: 'Definieer en beskryf liggings met ryk teks en beelde om meesleurende omgewings te skep wat jou storie verbeter.',
          title: 'Gedetailleerde Ligging Skepping'
        },
        {
          content: 'Visualiseer jou liggings en hul verbindings met interaktiewe kaarte, wat dit makliker maak om jou storiewêreld te verstaan en te navigeer.',
          title: 'Interaktiewe Kaartintegrasie'
        },
        {
          content: 'Voeg historiese en lore-gebaseerde inligting by jou liggings, wat diepte en konteks bied wat jou storie verryk.',
          title: 'Ryk Ligging Lore'
        }
      ],
      key: 'locations'
    }
  },

  objects: {
    featurePage: {
      description: 'Voorwerpe is lewelose items wat in jou stories gebruik, versamel of verhandel kan word, soos wapens, toerusting, buit en geldeenhede.',
      details: [
        {
          content: 'Skep deeglike beskrywings vir elke voorwerp, insluitend die gebruike, oorsprong en betekenis in jou storie.',
          title: 'Gedetailleerde Voorwerpbeskrywings'
        },
        {
          content: 'Organiseer en bestuur die voorwerpe in jou storie maklik, hou hul beskikbaarheid en gebruik dop.',
          title: 'Voorraadbestuur'
        },
        {
          content: 'Ontwikkel \'n robuuste handelstelsel vir jou voorwerpe, wat die ekonomiese aspek van jou storie verbeter.',
          title: 'Handel en Ekonomie'
        }
      ],
      key: 'objects'
    }

  },

  pricing: {

  },

  projects: {
    addProject: 'Voeg projek by',
    createProject: 'Skep projek',
    editor: {
      linkCopiedToClipboard: 'Skakel Gekopieer na Knipbord'
    },
    generating: {

    },
    importProject: 'Voer projek in',
    newProject: 'Nuwe projek',
    setup: {
      generate: 'Genereer',
      next: 'Volgende',
      projectName: 'Wat is die naam van jou projek?',
      projectPrompt: 'Waaroor gaan jou projek?'
    }
  },

  transports: {
    featurePage: {
      description: 'Vervoer is enige vorm van reis deur ruimte en tyd, insluitend voertuie, wurmgate, portaalgewere, spoorweë en tydmasjiene.',
      details: [
        {
          content: 'Verken \'n verskeidenheid van vervoermiddels, van tradisionele voertuie tot futuristiese wurmgate en tydmasjiene.',
          title: 'Innoverende Vervoermiddels'
        },
        {
          content: 'Ontdek die nuutste vooruitgang in vervoer tegnologie, van hyperloop stelsels tot teleportasie toestelle.',
          title: 'Gevorderde Tegnologie'
        },
        {
          content: 'Skep asemrowende visuele voorstellings van vervoermetodes om jou gehoor in die ervaring van reis deur ruimte en tyd te dompel.',
          title: 'Innemende Visuele Voorstellings'
        }
      ],
      key: 'transports'
    }

  },

  version: {
    currentVersion: 'Jou huidige weergawe is:',
    getVersion: 'Kry dit nou!',
    header: 'Visie-opdatering',
    newVersion: 'Nuwe weergawe',
    updateNow: 'Dateer nou op',
  },

  workspaces: {
    addWorkspace: 'Voeg werkruimte by',
    addWorkspaceImage: 'Voeg werkruimtebeeld by',
    addWorkspaceName: 'Voeg werkruimtenaam by',
    addWorkspaceUsers: 'Voeg werkruimtegebruikers by',
    addWorkspaceUsersInfo: 'Voeg gebruikers by jou werkruimte, ken toestemmings aan elkeen toe en deel alle projekte in hierdie werkruimte met hulle.',
    chooseAWorkspace: 'Kies \'n werkruimte',
    createWorkspace: 'Skep werkruimte',
    featurePage: {
      description: 'Werkspasies bemagtig jou om projekte te organiseer en naadloos saam te werk met spanlede binne \'n gefokusde omgewing.',
      details: [
        {
          content: 'Skep afsonderlike werkruimtes vir verskillende soorte projekte, soos speletjies, skryfwerk en meer. Elke werkruimte hou jou projekte georganiseer en konteks-spesifiek.',
          title: 'Op maat gemaakte werkruimtes vir elke projek'
        },
        {
          content: 'Nooi spanlede uit om binne spesifieke werkruimtes saam te werk. Ken rolle en toestemmings toe om toegang te beheer, en verseker dat alle lede die inligting het wat hulle nodig het.',
          title: 'Samewerkingsondersteuning'
        },
        {
          content: 'Personaliseer jou werkruimte met Donker of Ligte temas. Skakel maklik tussen hulle met die temaskeppelknoppie, wat jou produktiwiteit en gemak verbeter.',
          title: 'Aanpasbare temas'
        }
      ],
      key: 'workspaces'
    },
    permissions: 'Toestemmings',
    toCreateProjectsIn: 'om projekte in te skep'

  },
};
