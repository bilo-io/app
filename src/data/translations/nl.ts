import { ITranslation } from '.';

export const nl: ITranslation = {
  account: {
    billing: 'Facturering',
    chooseTheme: 'Kies een thema',
    dark: 'Donker',
    email: 'E-mail',
    features: 'Functies',
    light: 'Licht',
    name: 'Naam',
    profile: 'Profiel',
    settingExplorerAutoExpand: 'Mappen in de Explorer automatisch uitbreiden voor elke functie',
    settingExplorerEditOnSelect: 'Automatisch de Editor openen bij het selecteren van een item in de Explorer',
    settingNavbarExpanded: 'Navigatiebalk uitbreiden',
    settingPickLanguage: 'Taal kiezen',
    settingPickTheme: 'Thema kiezen',
    settingPlayMusicOnStartup: 'Muziek afspelen bij projectstart',
    settingShowClock: 'Klok weergeven',
    signOut: 'Afmelden',
    subscription: 'Abonnement',
    title: 'Account',
  },

  ai: {
    featurePage: {
      description: 'AI-genererde inhoud versnel uw creatieve werkstroom en helpt u efficiënt hoogwaardige mediabronnen te produceren.',
      details: [
        {
          content: 'Maak gebruik van geavanceerde AI-modellen om snel hoogwaardige tekstinhoud te genereren, je schrijfproces te verbeteren en creativiteit te stimuleren.',
          title: 'AI-Aangedreven Tekstgeneratie'
        },
        {
          content: 'Transformeer tekst prompts in verbluffende afbeeldingen met AI, bespaar tijd en verhoog je creatieve output.',
          title: 'Innovatieve AI-Beeldcreatie'
        },
        {
          content: 'Genereer audio-inhoud, inclusief stemacteren en geluidseffecten, met AI, wat je audioproductieworkflow stroomlijnt.',
          title: 'AI-Aangedreven Audio Productie'
        },
        {
          content: 'Produceer complexe visuele verhalen met AI-genererde video\'s, waardoor videoproductie efficiënter en toegankelijker wordt.',
          title: 'AI-Videoproductie'
        },
        {
          content: 'Maak gedetailleerde 3D-modellen van tekstbeschrijvingen met AI, waardoor je personages en omgevingen moeiteloos tot leven komen.',
          title: 'AI-Gegenereerde 3D-Modellen'
        }
      ],
      key: 'ai'
    }

  },

  auth: {
    acceptTerms: 'Algemene voorwaarden accepteren',
    alreadyHaveAccount: 'Heb je al een account?',
    dontHaveAccount: 'Heb je geen account?',
    logIn: 'Inloggen',
    logOut: 'Uitloggen',
    signInWith: (provider) => `Aanmelden met ${provider}`,
    signOut: 'Afmelden',
    signUp: 'Registreren',
    singleSignOn: 'Single Sign-On',
    welcomeHeading: 'Welkom',
    welcomeSentence: 'Welkom op ons platform.',
  },

  blueprints: {
    description: 'Een set document-sjablonen om het maken van een document te versnellen',
    title: 'Blauwdrukken',
  },

  characters: {
    description: 'Genereer en bewerk personages voor gebruik in "Dialogen", enz.',
    docs: `
# Vision Studio | Karakters

De ** Karakters ** -functie in Vision Studio stelt gebruikers in staat om gedetailleerde karakterprofielen voor verschillende mediaprojecten te maken en beheren.Of u nu karakters ontwikkelt voor spellen, films of romans, deze functie biedt uitgebreide tools om persoonlijkheden, achtergronden, eigenschappen en meer te definiëren.

## Functieoverzicht

De Karakters - functie is gestructureerd om de organisatie en productiviteit gedurende het gehele karaktercreatieproces te verbeteren.

### Explorer

De Explorer - weergave toont alle karakterprofielen binnen het project, gecategoriseerd in mappen zoals "Hoofdkarakters," "Bijrollen," en "NPC's."

### Lege Weergave

Bij het betreden van de Karakters - functie zien gebruikers een gestroomlijnde interface met de essentiële tools:

- ** Aan de slag - tabblad **: Biedt introductiegidsen en tutorials voor nieuwe gebruikers.
- ** FAQ - tabblad **: Beantwoordt veelgestelde vragen over het maken en beheren van karakters.
- ** Video's-tabblad**: Bevat videotutorials die technieken voor karaktercreatie demonstreren.
  - ** Documenten - tabblad **: Biedt documentatie en sjablonen voor karakterprofielen en - attributen.
- ** Export - tabblad **: Hiermee kunnen karakterprofielen worden geëxporteerd in de formaten JSON, CSV en PDF.

### Inhoudsweergave

Het selecteren van een karakterprofiel uit de Explorer vult de Inhoudsweergave.Hier kunnen gebruikers gedetailleerde karakterinformatie bekijken en bewerken:

- ** Actiebalk **: Biedt opties om karakterprofielen te bewerken, dupliceren, opslaan en verwijderen.
- ** Toolspaneel **: Biedt tabbladen zoals "Bewerken," "AI," en "Import" voor het configureren en verbeteren van karakterdetails.
- ** Voorvertoning **: Hiermee kunnen gebruikers karakterprofielen en wijzigingen bekijken voordat ze definitief worden opgeslagen.

### Functietools

Het Functietools - paneel biedt geavanceerde functies voor het maken en beheren van karakterprofielen:

- ** Aanmaken / Bewerken - tabblad **: Hiermee kunnen gebruikers karakterattributen definiëren met behulp van het \`ICharacter\`-schema, inclusief demografie, eigenschappen, achtergrond en meer.
- **AI-tabblad**: Maakt gebruik van AI-tools om karakterprofielen te genereren op basis van gespecificeerde criteria en thema's.
- **Import-tabblad**: Faciliteert het importeren van karakterprofielen uit externe bronnen in JSON-formaat.

## Importen & Exporten

De Karakters-functie ondersteunt naadloze import- en exportmogelijkheden voor efficiënte samenwerking en projectbeheer:

### Importen

Gebruikers kunnen karakterprofielen en -attributen importeren in JSON-formaat, wat compatibiliteit en gegevensintegriteit waarborgt.

### Exporten

Karakterprofielen kunnen in verschillende formaten worden geëxporteerd:
- JSON
- CSV
- PDF

Het Export-tabblad in de Lege Weergave maakt het exporteren van volledige collecties of subsets van karakterprofielen mogelijk voor deel- en archiveringsdoeleinden.

## Maken en Beheren van Karakterprofielen

### Nieuwe Karakters Maken

Om een nieuw karakterprofiel te maken, navigeert u naar het "Aan de slag"-tabblad en klikt u op de grote blauwe ronde knop met een +. Deze actie opent het "Karakters-tools"-paneel, waarmee gebruikers demografie, eigenschappen en achtergronden kunnen definiëren.

### Karakterdetails Bewerken

Het bewerken van karakterprofielen stelt gebruikers in staat om demografie, eigenschappen, achtergronden en andere attributen te wijzigen met behulp van het "Bewerken"-tabblad in het Functietools-paneel.

### AI-ondersteunde Karaktergeneratie

Het "AI"-tabblad in het "Karakters-tools"-paneel maakt gebruik van machine learning-algoritmen om karakterprofielen voor te stellen op basis van door gebruikers gedefinieerde parameters en thema's.

### Importeren en Exporteren van Karakterprofielen

Gebruik het "Import"-tabblad om karakterprofielen in JSON-formaat uit externe bronnen te importeren. Het "Export"-tabblad biedt opties om karakterprofielen in de formaten JSON, CSV of PDF te exporteren voor deel- en samenwerkingsdoeleinden.

## FAQs

Hier zijn enkele veelgestelde vragen over de **Karakters**-functie:

1. **Hoe maak ik een nieuw karakterprofiel?**
   - Navigeer naar het "Aan de slag"-tabblad en klik op de grote blauwe ronde knop met een + om het "Karakters-tools"-paneel te openen. Definieer de noodzakelijke demografie, eigenschappen en achtergronden.

2. **Kan ik karakterprofielen uit andere projecten importeren?**
   - Ja, gebruik het "Import"-tabblad om karakterprofielen in JSON-formaat uit externe bronnen te importeren.

3. **Welke exportformaten worden ondersteund voor karakterprofielen?**
   - Karakterprofielen kunnen worden geëxporteerd in de formaten JSON, CSV en PDF om compatibiliteit en samenwerking te waarborgen.

4. **Hoe ondersteunt het AI-tabblad bij het genereren van karakterprofielen?**
   - Het AI-tabblad maakt gebruik van machine learning om karakterprofielen voor te stellen op basis van door gebruikers gedefinieerde thema's en attributen.

5. **Is er een limiet aan het aantal karakterprofielen dat ik kan maken?**
   - Het aantal karakterprofielen kan variëren afhankelijk van uw abonnement.

6. **Kan ik karakterprofielen bekijken voordat ik wijzigingen definitief maak?**
   - Ja, gebruik de "Voorvertoning"-optie in de Actiebalk om karakterprofielen en wijzigingen te bekijken.

7. **Welke soorten mediaprojecten kunnen profiteren van de Karakters-functie?**
   - Vision Studio ondersteunt de karaktercreatie voor spellen, films, romans en andere mediaprojecten die gedetailleerde karakterprofielen vereisen.

8. **Kan ik met teamleden samenwerken aan karakterprofielen?**
   - Ja, nodig teamleden uit in uw werkruimte om gezamenlijk karakterprofielen te maken en te beheren.

9. **Zijn er vooraf gedefinieerde sjablonen voor veelvoorkomende karakterprofielen?**
   - Ja, verken het "Documenten"-tabblad in de Lege Weergave voor sjablonen en richtlijnen voor het maken van karakterprofielen.

10. **Hoe kan ik een karakterprofiel uit mijn project verwijderen?**
    - Selecteer het karakterprofiel in de Explorer-weergave en gebruik de "Verwijderen"-optie in de Actiebalk. Bevestig het verwijderen in het modaal dat verschijnt.

## Bijlage
  `,
    faqs: [
      {
        answer: 'Het Characters-paneel biedt door AI aangedreven karaktergeneratie, inclusief attributen, concept art, achtergrondverhaal, demografie, affiliatie en meer, speciaal voor game-ontwerp.',
        question: 'Welke functies biedt het Characters-paneel voor game-ontwerp?',
      },
      {
        answer: 'De AI helpt door attributen voor te stellen, concept art te genereren op basis van beschrijvingen, boeiende achtergrondverhalen te creëren en demografie en affiliaties te bepalen, waardoor het karakterontwerpproces wordt gestroomlijnd.',
        question: 'Hoe helpt de AI bij het genereren van karakters?',
      },
      {
        answer: 'Absoluut. Terwijl de AI een basis biedt, heeft u de flexibiliteit om elk aspect van de karakters aan te passen, zodat ze perfect aansluiten bij de visie van uw game.',
        question: 'Kan ik de gegenereerde karakters aanpassen?',
      },
      {
        answer: 'Ja, het Characters-paneel integreert naadloos met het Dialogen-paneel, waarbij karakterinformatie wordt gebruikt om het dialoogcreatieproces te stroomlijnen en te verbeteren.',
        question: 'Is er integratie met andere panelen, zoals Dialogen?',
      },
      {
        answer: 'Ja, u kunt karakterprofielen in verschillende formaten exporteren, waardoor het gemakkelijk is om ze te integreren in andere aspecten van uw game-ontwikkelingsworkflow.',
        question: 'Kan ik karakterprofielen exporteren voor extern gebruik?',
      },
      {
        answer: 'U kunt demografie, achtergrondverhalen, vaardigheden, bekwaamheden en persoonlijkheidskenmerken specificeren voor elk karakter.',
        question: '--- Welke details kan ik specificeren voor een karakter?',
      },
      {
        answer: 'Ja, u kunt concept art uploaden en getextureerde 3D-modellen genereren voor uw karakters.',
        question: 'Kan ik concept art uploaden voor karakters?',
      },
      {
        answer: 'Karakters kunnen worden georganiseerd met behulp van de doorzoekbare lijst in de Verkenner met aangepaste mappen.',
        question: 'Hoe kan ik mijn karakters organiseren?',
      },
      {
        answer: 'Ja, u kunt AI-tools gebruiken om karakterprofielen en achtergrondverhalen te genereren.',
        question: 'Kan ik karakterprofielen genereren met AI?',
      },
      {
        answer: 'Karakters kunnen worden geëxporteerd in PDF-, Docx- en 3DModel-formaten met texturen.',
        question: 'Welke exportformaten zijn beschikbaar voor karakters?',
      },
      {
        answer: 'Ja, u kunt medewerkers met specifieke permissies uitnodigen om samen te werken aan het maken van karakters.',
        question: 'Kan ik samenwerken met anderen aan het maken van karakters?',
      },
      {
        answer: 'Ja, er zijn sjablonen en richtlijnen beschikbaar om u te helpen gedetailleerde karakterprofielen te maken.',
        question: 'Zijn er sjablonen beschikbaar voor het maken van karakters?',
      },
      {
        answer: 'Selecteer het karakter uit de Verkenner en gebruik de \'Character Tools\' om de details te bewerken.',
        question: 'Hoe bewerk ik een bestaand karakter?',
      },
      {
        answer: 'Ja, u kunt een karakterprofiel dupliceren met de \'Dupliceren\' optie in de Actiebalk.',
        question: 'Kan ik een karakterprofiel dupliceren?',
      },
      {
        answer: 'Selecteer het karakter en gebruik de \'Verwijderen\' optie in de Actiebalk. Een bevestigingsvenster verschijnt voordat het wordt verwijderd.',
        question: 'Hoe verwijder ik een karakter?',
      }
    ],
    featurePage: {
      description: 'Personages zijn het hart en de ziel van uw verhalen, elk met unieke achtergronden, persoonlijkheden en verhaallijnen.',
      details: [
        {
          content: 'Maak gedetailleerde karakterprofielen, inclusief namen, achtergrondverhalen, persoonlijkheden en visuele weergaven. Laat je personages tot leven komen met diepte en authenticiteit.',
          title: 'Diepgaande Karaktercreatie',
        },
        {
          content: 'Genereer conceptkunst van hoge kwaliteit op basis van je karakterbeschrijvingen. Visualiseer je personages met precisie en verbeter de wereldbouwervaring.',
          title: 'Adembenemende Concept Art',
        },
        {
          content: 'Experimenteer met het genereren van 3D-modellen van je personages. Dit voegt een nieuwe dimensie toe aan je verhalen, waardoor je personages nog boeiender worden.',
          title: 'Immersieve 3D-modellen',
        }
      ],
      key: 'characters'
    },
    form: {
      abilities: 'Vaardigheden',
      alias: 'Alias',
      background: 'Achtergrond',
      demongraphics: 'Demografie',
      education: 'Educatie',
      ethnicity: 'Etniciteit',
      firstName: 'Voornaam',
      gender: 'Geslacht',
      identity: 'Identiteit',
      images: 'Afbeeldingen',
      language: 'Taal',
      lastName: 'Achternaam',
      name: 'Naam',
      nationality: 'Nationaliteit',
      occupation: 'Beroep',
      personality: 'Persoonlijkheid',
      sexuality: 'Seksualiteit',
      skills: 'Vaardigheden',
    },
    title: 'Personages'
  },

  common: {
    behaviour: 'Gedrag',
    description: 'Beschrijving',
    diet: 'Dieet',
    folder: 'Map',
    folders: 'Mappen',
    fuelType: 'Brandstoftype',
    galleryIds: 'Mappen',
    habitat: 'Leefgebied',
    lore: 'Overlevering',
    material: 'Materiaal',
    plot: 'Verhaal',
    speed: 'Snelheid',

    abilities: 'Vermogens',
    abort: 'Afbreken',
    add: 'Toevoegen',
    addItem: (value) => `Voeg ${value} toe`,
    admin: 'Beheerder',
    alias: 'Alias',
    art: 'Kunst',
    artConcept: 'Conceptkunst',
    back: 'Terug',
    background: 'Achtergrond',
    cancel: 'Afbreken',
    close: 'Sluiten',
    confirm: 'Bevestigen',
    continue: 'Doorgaan',
    create: 'Creëren',
    createItem: (value) => `Creëer ${value}`,
    daily: 'Dagelijks',
    day: 'Dag',
    days: 'Dagen',
    delete: 'Verwijderen',
    deleteItem: (value) => `Verwijder ${value}`,
    demographics: 'Demografie',
    docs: 'Documenten',
    download: 'Download',
    duplicate: 'Dupliceren',
    edit: 'Bewerken',
    editItem: (value) => `Bewerk ${value}`,
    education: 'Opleiding',
    ethnicity: 'Etniciteit',
    explorer: 'Verkenner',
    export: 'Exporteren',
    exports: 'Exporten',
    faqs: 'Veelgestelde vragen',
    features: 'Functies',
    firstName: 'Voornaam',
    gender: 'Geslacht',
    getStarted: 'Aan de slag',
    hi: 'Hoi',
    hour: 'Uur',
    hourly: 'Uurlijks',
    hours: 'Uren',
    identity: 'Identiteit',
    images: 'Afbeeldingen',
    import: 'Importeren',
    imports: 'Importen',
    itemExplorer: (value) => `Verkenner ${value}`,
    itemPreview: (value) => `Voorbeeld ${value}`,
    itemTools: (value) => `Gereedschap ${value}`,
    language: 'Taal',
    lastName: 'Achternaam',
    legal: 'Juridisch',
    minute: 'Minuut',
    minutely: 'Minuurlijk',
    minutes: 'Minuten',
    month: 'Maand',
    monthly: 'Maandelijks',
    months: 'Maanden',
    name: 'Naam',
    nationality: 'Nationaliteit',
    needHelp: 'Hulp Nodig',
    next: 'Volgende',
    occupation: 'Beroep',
    overview: 'Overzicht',
    personality: 'Persoonlijkheid',
    preview: 'Voorbeeld',
    pricing: 'Prijzen',
    recentItems: (items: string) => `Recente ${items}`,
    save: 'Opslaan',
    search: 'Zoeken',
    searchResource: (resource) => `Zoek ${resource}`,
    settings: 'Instellingen',
    sexuality: 'Seksualiteit',
    skills: 'Vaardigheden',
    tools: 'Gereedschap',
    webApp: 'App',
    webSite: 'Site',
    week: 'Week',
    weekly: 'Wekelijks',
    weeks: 'Weken',
    year: 'Jaar',
    yearly: 'Jaarlijks',
    years: 'Jaren',

  },

  components: {
    confirmActionHeading: (action: string, resource: string) => `${resource} ${action}`,
    confirmActionOnItem: (action: string, resource: string) => `Weet u zeker dat u deze ${resource} wilt ${action}?`,
    confirmActionOnItemDescription: (primary: string, secondary: string) => `Druk op "${primary}" om door te gaan, of op "${secondary}" om te annuleren.`,
    featureGuideWelcomeP1: (featureName: string) => `Welkom bij de *${featureName}* functie.`,
    featureGuideWelcomeP2: (featureName: string) => `Hier kunt u een nieuwe *${featureName}* maken of een bestaande bewerken.`,
    featureGuideWelcomeP3: (featureName: string) => `Elke opgeslagen *${featureName}* is zichtbaar in de "Verkenner" aan de linkerkant.`,
    sidebarClose: 'Zijbalk sluiten',

  },

  controls: {
    featurePage: {
      description: 'Controls bieden de tools om de interactieve elementen binnen uw projecten te beheren, zodat u een soepele en boeiende gebruikerservaring kunt garanderen.',
      details: [
        {
          content: 'Implementeer bedieningsschema\'s die zijn afgestemd op belangrijke platforms zoals PlayStation, Xbox en Nintendo Switch, zodat een consistente gebruikerservaring wordt gegarandeerd.',
          title: 'Platformspecifieke Bedieningselementen',
        },
        {
          content: 'Toegang tot een verzameling vooraf geconfigureerde bedieningsschema\'s om je project een vliegende start te geven en ze naar wens aan te passen voor fijn afstellen.',
          title: 'Uitgebreide Voorinstellingsbibliotheek',
        },
        {
          content: 'Maak en beheer aangepaste bedieningsschema\'s, organiseer ze in mappen voor gemakkelijke toegang en contextspecifiek gebruik, zoals \'gevecht\' vs. \'verkenning\'.',
          title: 'Georganiseerde Bedieningsschema\'s',
        },
      ],
      key: 'controls',
    }
  },

  creatures: {
    featurePage: {
      description: 'Wezens zijn dieren of niet-humanoïde personages die je verhalen bewonen, waardoor je wereld tot leven komt en diversiteit toevoegt.',
      details: [
        {
          content: 'Maak gedetailleerde en fantasierijke ontwerpen voor je wezens, zodat ze naadloos in je wereld passen.',
          title: 'Unieke Wezendesigns'
        },
        {
          content: 'Definieer het gedrag, de leefgebieden en ecologische rollen van je wezens om je wereld meeslepender en realistischer te maken.',
          title: 'Gedrag en Ecologie'
        },
        {
          content: 'Neem magische en mythische wezens op in je verhalen, elk met hun eigen lore en mystieke krachten.',
          title: 'Magische en Mythische Wezens'
        }
      ],
      key: 'creatures'
    }

  },

  dashboard: {
    addItem: 'Document toevoegen',
    addProject: 'Project toevoegen',
    contentRating: 'Inhoudsbeoordeling',
    description: 'Documenten maken, bewerken en doorbladeren.',
    devTechnology: 'Ontwikkelingstechnologie',
    projectArt: 'Conceptkunst',
    projectArtDescription: 'De verschillende kunstwerken uit de verschillende collecties van uw projecten in de verschillende beschikbare functies van Vision.',
    projectFeatures: 'Projectkenmerken',
    projectFeaturesDescription: 'Kenmerken kunnen naar believen aan projecten worden toegevoegd of verwijderd zonder de onderliggende bronnen te beïnvloeden.',
    projectInfo: 'Projectinfo',
    projectInfoDescription: 'Openbare projectinformatie wijzigen',
    projects: '',
    releaseDate: 'Publicatiedatum',
    tableHeaders: {
      lastUpdated: 'Laatst bijgewerkt',
      projectName: 'Projectnaam',
      sections: 'Secties',
    },
    targetPlatform: 'Doelplatform',
    technology: 'Technologie',
    title: 'Dashboard',
    usersWithAccess: 'Gebruikers met toegang',
    viewMore: 'Meer weergeven',
  },

  dialogues: {
    featurePage: {
      description: 'Dialogen brengen uw personages tot leven en maken rijke en boeiende interacties tussen hen mogelijk.',
      details: [
        {
          content: 'Maak en beheer dialogen tussen personages met een gebruiksvriendelijke editor, zodat soepele en boeiende interacties worden gegarandeerd.',
          title: 'Intuïtieve Dialoogcreatie',
        },
        {
          content: 'Maak vertakkende dialoogbomen om verschillende gespreksroutes en uitkomsten te verkennen, waardoor diepte wordt toegevoegd aan de interacties tussen personages.',
          title: 'Dynamische Dialoogbomen',
        },
        {
          content: 'Integreer stemacteer scripts of audiobestanden om de onderdompeling en realisme van je dialogen te verbeteren.',
          title: 'Naadloze Spraakintegratie',
        },
      ],
      key: 'dialogues',
    }
  },

  documents: {
    description: '',
    featurePage: {
      description: 'Documenten zijn uw primaire tools voor het schrijven en organiseren van uw inhoud, met ondersteuning voor verschillende formaten.',
      details: [
        {
          content: 'Maak gebruik van een krachtige teksteditor met rijke opmaakopties om gedetailleerde en visueel aantrekkelijke documenten te maken.',
          title: 'Geavanceerde Tekstbewerking'
        },
        {
          content: 'Houd je documenten netjes georganiseerd in mappen en submappen, waardoor ze gemakkelijk toegankelijk en beheersbaar zijn.',
          title: 'Efficiënte Documentorganisatie'
        },
        {
          content: 'Importeer en exporteer documenten in meerdere formaten, waaronder PDF, Markdown en Docx, wat compatibiliteit en gemakkelijke deling garandeert.',
          title: 'Veelzijdige Import & Export'
        }
      ],
      key: 'documents'
    },
    title: ''

  },

  features: {
    '3D': '3D',
    account: 'Account',
    ai: 'AI',
    ai3D: 'AI 3D',
    aiAudio: 'AI-audio',
    aiExamples: 'AI-voorbeelden',
    aiImages: 'AI-afbeeldingen',
    aiText: 'AI-tekst',
    aiVideo: 'AI-video',
    asset: 'Ressource',
    assets: 'Ressources',
    audio: 'Audio',
    character: 'Personage',
    characters: 'Personages',
    control: 'Besturing',
    controls: 'Besturingen',
    creature: 'Wezen',
    creatures: 'Wezens',
    dashboard: 'Dashboard',
    dialogue: 'Dialoog',
    dialogues: 'Dialogen',
    document: 'Document',
    documents: 'Documenten',
    examples: 'Voorbeelden',
    graph: 'Grafiek',
    graphs: 'Grafieken',
    home: 'Home',
    homePage: 'Homepagina',
    illustration: 'Illustratie',
    illustrations: 'Illustraties',
    images: 'Afbeeldingen',
    location: 'Locatie',
    locations: 'Locaties',
    media: 'Media',
    multimedia: 'Multimedia',
    object: 'Object',
    objects: 'Objecten',
    project: 'Project',
    projects: 'Projecten',
    quest: 'Quest',
    quests: 'Quests',
    setting: 'Instelling',
    settings: 'Instellingen',
    subscription: 'Abonnement',
    subscriptions: 'Abonnementen',
    text: 'Tekst',
    transport: 'Transport',
    transports: 'Transporten',
    user: 'Gebruiker',
    users: 'Gebruikers',
    vehicle: 'Voertuig',
    vehicles: 'Voertuigen',
    video: 'Video',
    workspace: 'Werkruimte',
    workspaces: 'Werkruimtes',
  },

  galleries: {
    character: {
      description: 'Genereer en bewerk personages om te gebruiken in \'Dialogen\', enz.',
      title: 'Personagegalerij'
    },
    description: 'Een plek om visuele concepten te brainstormen en in galerijcollecties te plaatsen.',
    image: {
      description: 'Genereer aangepaste, door AI aangedreven afbeeldingen',
      enterPrompt: 'Voer een prompt in',
      pickStyle: 'Kies een kunststijl',
      title: 'Afbeeldingengalerij',
    },
    sound: {
      description: 'Maak door AI gegenereerde geluidsfragmenten',
      title: 'Geluidsgalerij'
    },
    title: 'Galerijen',
    video: {
      description: 'Maak video\'s van tekst met AI',
      title: 'Videogalerij'
    }

  },

  generators: {
    description: 'De reeks onderliggende AI-generatoren die deze ervaring mogelijk maken',
    title: 'Generators',
  },

  graphs: {
    featurePage: {
      description: 'Grafieken stellen u in staat om gegevens en relaties binnen uw projecten visueel weer te geven, wat helderheid en inzicht biedt.',
      details: [
        {
          content: 'Bouw en pas grafieken aan om complexe gegevens en relaties visueel weer te geven, waardoor begrip en inzicht worden verbeterd.',
          title: 'Uitgebreide Grafiekcreatie',
        },
        {
          content: 'Gebruik grafieken om karakterrelaties, plotpunten en andere verhaalelementen te illustreren, waardoor complexe informatie toegankelijker wordt.',
          title: 'Effectieve Gegevensvisualisatie',
        },
        {
          content: 'Maak interactieve grafieken waarmee gebruikers de gegevens kunnen verkennen en ermee in contact kunnen komen, waardoor een dieper begrip van je project ontstaat.',
          title: 'Interactieve Grafieken',
        },
      ],
      key: 'graphs',
    }

  },

  landing: {
    allFeatures: 'Alle functies',
    getAccess: 'Toegang krijgen',
    sections: [],

    watchVideo: 'Video bekijken',
  },

  locations: {
    featurePage: {
      description: 'Locaties bieden de instellingen voor uw verhalen en brengen uw werelden tot leven met rijke details en visuals.',
      details: [
        {
          content: 'Definieer en beschrijf locaties met rijke tekst en afbeeldingen om meeslepende omgevingen te creëren die je verhaal verbeteren.',
          title: 'Gedetailleerde Locatiecreatie'
        },
        {
          content: 'Visualiseer je locaties en hun verbindingen met interactieve kaarten, zodat je verhaalwereld gemakkelijker te begrijpen en te navigeren is.',
          title: 'Interactieve Kaartintegratie'
        },
        {
          content: 'Voeg historische en op overlevering gebaseerde informatie toe aan je locaties, waardoor je verhaal wordt verrijkt met diepte en context.',
          title: 'Rijke Locatiegeschiedenis'
        }
      ],
      key: 'locations'
    }

  },

  objects: {
    featurePage: {
      description: 'Objecten zijn levenloze items die in je verhalen kunnen worden gebruikt, verzameld of verhandeld, zoals wapens, uitrusting, buit en valuta.',
      details: [
        {
          content: 'Maak grondige beschrijvingen voor elk object, inclusief het gebruik, de oorsprong en de betekenis in je verhaal.',
          title: 'Gedetailleerde Objectbeschrijvingen'
        },
        {
          content: 'Organiseer en beheer de objecten in je verhaal eenvoudig, volg hun beschikbaarheid en gebruik.',
          title: 'Voorraadbeheer'
        },
        {
          content: 'Ontwikkel een robuust handelssysteem voor je objecten, waardoor het economische aspect van je verhaal wordt verbeterd.',
          title: 'Handel en Economie'
        }
      ],
      key: 'objects'
    }
  },

  pricing: {

  },

  projects: {
    addProject: 'Project toevoegen',
    createProject: 'Project aanmaken',
    editor: {
      linkCopiedToClipboard: 'Link Gekopieerd naar Klembord'
    },
    generating: {

    },
    importProject: 'Project importeren',
    newProject: 'Nieuw project',
    setup: {
      generate: 'Genereren',
      next: 'Volgende',
      projectName: 'Wat is de naam van je project?',
      projectPrompt: 'Waar gaat je project over?'
    }
  },

  transports: {
    featurePage: {
      description: 'Transporten zijn elke vorm van reizen door ruimte en tijd, inclusief voertuigen, wormgaten, portaalgeweren, spoorwegen en tijdmachines.',
      details: [
        {
          content: 'Verken een verscheidenheid aan vervoerswijzen, van traditionele voertuigen tot futuristische wormgaten en tijdmachines.',
          title: 'Innovatieve Vervoerswijzen'
        },
        {
          content: 'Ontdek de nieuwste ontwikkelingen in transporttechnologie, van hyperloopsystemen tot teleportatieapparaten.',
          title: 'Geavanceerde Technologie'
        },
        {
          content: 'Creëer adembenemende beelden van transportmethoden om je publiek onder te dompelen in de ervaring van reizen door de ruimte-tijd.',
          title: 'Immersieve Beelden'
        }
      ],
      key: 'transports'
    }
  },

  version: {
    currentVersion: 'Uw huidige versie is:',
    getVersion: 'Haal het nu!',
    header: 'Visie Update',
    newVersion: 'Nieuwe versie',
    updateNow: 'Nu updaten',
  },

  workspaces: {
    addWorkspace: 'Werkruimte toevoegen',
    addWorkspaceImage: 'Werkruimteafbeelding toevoegen',
    addWorkspaceName: 'Werkruimtenaam toevoegen',
    addWorkspaceUsers: 'Werkruimtegebruikers toevoegen',
    addWorkspaceUsersInfo: 'Voeg gebruikers toe aan uw werkruimte, wijs rechten toe aan elk en deel alle projecten in deze werkruimte met deze.',
    chooseAWorkspace: 'Kies een werkruimte',
    createWorkspace: 'Werkruimte maken',
    featurePage: {
      description: 'Workspaces stellen u in staat om projecten te organiseren en naadloos samen te werken met teamleden binnen een gefocuste omgeving.',
      details: [
        {
          content: 'Maak aparte werkruimtes voor verschillende soorten projecten, zoals games, schrijven en meer. Elke werkruimte houdt je projecten georganiseerd en contextspecifiek.',
          title: 'Op maat gemaakte werkruimtes voor elk project'
        },
        {
          content: 'Nodig teamleden uit om samen te werken binnen specifieke werkruimtes. Wijs rollen en rechten toe om de toegang te beheren en ervoor te zorgen dat alle leden de informatie hebben die ze nodig hebben.',
          title: 'Samenwerkingsondersteuning'
        },
        {
          content: 'Personaliseer je werkruimte met donkere of lichte thema\'s. Wissel eenvoudig tussen hen met de themaschakelknop, wat je productiviteit en comfort verbetert.',
          title: 'Aanpasbare thema\'s'
        }
      ],
      key: 'workspaces'
    },
    permissions: 'Rechten',
    toCreateProjectsIn: 'om projecten in te maken'
  },
};
