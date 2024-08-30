import { ITranslation } from '.';

export const it: ITranslation = {
  account: {
    billing: 'Fatturazione',
    chooseTheme: 'Scegli un tema',
    dark: 'Scuro',
    email: 'E-mail',
    features: 'Caratteristiche',
    light: 'Chiaro',
    name: 'Nome',
    profile: 'Profilo',
    settingExplorerAutoExpand: 'Espandi automaticamente le cartelle nell\'Esploratore per ogni funzionalità',
    settingExplorerEditOnSelect: 'Apri automaticamente l\'Editor quando selezioni un elemento nell\'Esploratore',
    settingNavbarExpanded: 'Espandi la barra di navigazione',
    settingPickLanguage: 'Scegli la lingua',
    settingPickTheme: 'Scegli il tema',
    settingPlayMusicOnStartup: 'Riproduci musica all\'avvio del progetto',
    settingShowClock: 'Mostra orologio',
    signOut: 'Esci',
    subscription: 'Abbonamento',
    title: 'Account',
  },

  ai: {
    featurePage: {
      description: 'Le contenu généré par l\'IA accélère votre flux de travail créatif, vous aidant à produire efficacement des ressources multimédias de haute qualité.',
      details: [
        {
          content: 'Exploitez des modèles IA avancés pour générer rapidement du contenu textuel de haute qualité, améliorant votre processus d\'écriture et stimulant la créativité.',
          title: 'Génération de Texte Alimentée par IA'
        },
        {
          content: 'Transformez des instructions textuelles en images époustouflantes grâce à l\'IA, gagnant du temps et augmentant votre production créative.',
          title: 'Création d\'Images Innovantes avec IA'
        },
        {
          content: 'Générez du contenu audio, y compris des doublages et des effets sonores, avec l\'IA, rationalisant ainsi votre flux de travail de production audio.',
          title: 'Production Audio Assistée par IA'
        },
        {
          content: 'Produisez des récits visuels complexes avec des vidéos générées par IA, rendant la création vidéo plus efficace et accessible.',
          title: 'Génération de Vidéo par IA'
        },
        {
          content: 'Créez des modèles 3D détaillés à partir de descriptions textuelles à l\'aide de l\'IA, donnant vie à vos personnages et environnements avec facilité.',
          title: 'Modèles 3D Générés par IA'
        }
      ],
      key: 'ai'
    }

  },

  auth: {
    acceptTerms: 'Accetto i [Termini e condizioni](/legal)',
    alreadyHaveAccount: 'Hai già un account?',
    dontHaveAccount: 'Non hai un account?',
    logIn: 'Accedi',
    logOut: 'Cerrar sesión',
    signInWith: (provider: string) => `Accedi con ${provider}`,
    signOut: 'Desconectar',
    signUp: 'Registrati',
    singleSignOn: 'Accesso unico',
    welcomeHeading: 'Benvenuti in Vision',
    welcomeSentence: 'Dove puoi materializzare le tue idee da sogno, potenziate dalla potenza dell\'IA!',
  },

  blueprints: {
    description: 'Un set di modelli di documento per accelerare la creazione di un documento',
    title: 'Progetti',
  },

  characters: {
    description: 'Genera e modifica personaggi da utilizzare in "Dialoghi", ecc.',
    docs: `
  # Vision Studio | Personaggi

La funzione **Personaggi** in Vision Studio consente agli utenti di creare e gestire profili dettagliati di personaggi per vari progetti mediatici. Che tu stia sviluppando personaggi per giochi, film o romanzi, questa funzione fornisce strumenti completi per definire personalità, background, tratti e altro ancora.

## Layout della Funzione

La funzione Personaggi è strutturata per migliorare l'organizzazione e la produttività durante tutto il processo di creazione dei personaggi.

### Esploratore

La vista Esploratore elenca tutti i profili dei personaggi all'interno del progetto, categorizzati in cartelle come "Personaggi Principali", "Personaggi Secondari" e "NPC".

### Vista Vuota

All'ingresso nella funzione Personaggi, gli utenti trovano un'interfaccia semplificata con strumenti essenziali:

- **Scheda Inizia**: Offre guide introduttive e tutorial per nuovi utenti.
- **Scheda FAQs**: Fornisce risposte a domande comuni sulla creazione e gestione dei personaggi.
- **Scheda Video**: Contiene tutorial video che dimostrano tecniche di creazione dei personaggi.
- **Scheda Documenti**: Offre documentazione e modelli per profili e attributi dei personaggi.
- **Scheda Esportazioni**: Consente di esportare i profili dei personaggi in formati JSON, CSV e PDF.

### Vista Contenuto

Selezionando un profilo di personaggio dall'Esploratore si popola la Vista Contenuto. Qui, gli utenti possono visualizzare e modificare informazioni dettagliate sui personaggi:

- **Barra delle Azioni**: Fornisce opzioni per modificare, duplicare, salvare ed eliminare i profili dei personaggi.
- **Pannello degli Strumenti**: Offre schede come "Modifica", "IA" e "Importa" per configurare e migliorare i dettagli dei personaggi.
- **Anteprima**: Consente agli utenti di visualizzare in anteprima i profili dei personaggi e le modifiche prima di finalizzare i cambiamenti.

### Strumenti della Funzione

Il pannello degli Strumenti della Funzione fornisce funzionalità avanzate per creare e gestire profili di personaggi:

- **Scheda Crea/Modifica**: Consente agli utenti di definire gli attributi dei personaggi utilizzando lo schema \`ICharacter\`, specificando demografia, tratti, background e altro ancora.
- **Scheda IA**: Utilizza strumenti di intelligenza artificiale per generare profili di personaggi basati su criteri e temi specificati.
- **Scheda Importa**: Facilita l'importazione di profili di personaggi da fonti esterne utilizzando il formato JSON.

## Importazioni ed Esportazioni

La funzione Personaggi supporta capacità di importazione ed esportazione senza soluzione di continuità per una collaborazione e una gestione del progetto efficienti:

## Importazioni ed Esportazioni

La funzione Personaggi supporta capacità di importazione ed esportazione senza soluzione di continuità per una collaborazione e una gestione del progetto efficienti:

### Importazioni

Gli utenti possono importare profili di personaggi e attributi utilizzando il formato JSON, garantendo compatibilità e integrità dei dati.

### Esportazioni

I profili dei personaggi possono essere esportati in vari formati:
- JSON
- CSV
- PDF

La scheda Esportazioni nella Vista Vuota consente di esportare intere collezioni o sottoinsiemi di profili di personaggi per scopi di condivisione e archiviazione.

## Creazione e Gestione dei Profili dei Personaggi

### Creazione di Nuovi Personaggi

Per creare un nuovo profilo di personaggio, naviga nella scheda "Inizia" e clicca sul grande pulsante rotondo blu con un +. Questa azione apre il pannello "Strumenti dei Personaggi", consentendo agli utenti di definire demografia, tratti e background necessari.

### Modifica dei Dettagli dei Personaggi

Modificare i profili dei personaggi consente agli utenti di modificare demografia, tratti, background e altri attributi utilizzando la scheda "Modifica" nel pannello degli Strumenti della Funzione.

### Generazione di Personaggi Assistita da IA

La scheda "IA" nel pannello "Strumenti dei Personaggi" utilizza algoritmi di apprendimento automatico per suggerire profili di personaggi basati su parametri e temi definiti dall'utente.

### Importazione ed Esportazione dei Profili dei Personaggi

Utilizza la scheda "Importa" per importare profili di personaggi in formato JSON da fonti esterne. La scheda "Esporta" offre opzioni per esportare profili di personaggi in formati JSON, CSV o PDF per condivisione e collaborazione.

## Domande Frequenti

Ecco alcune domande frequenti sulla funzione **Personaggi**:

1. **Come posso creare un nuovo profilo di personaggio?**
   - Naviga nella scheda "Inizia" e clicca sul grande pulsante rotondo blu con un + per aprire il pannello "Strumenti dei Personaggi". Definisci la demografia, i tratti e il background necessari.

2. **Posso importare profili di personaggi da altri progetti?**
   - Sì, utilizza la scheda "Importa" per importare profili di personaggi in formato JSON da fonti esterne.

3. **Quali formati di esportazione sono supportati per i profili dei personaggi?**
   - I profili dei personaggi possono essere esportati nei formati JSON, CSV e PDF per compatibilità e collaborazione.

4. **Come la scheda IA aiuta nella generazione di profili dei personaggi?**
   - La scheda IA utilizza l'apprendimento automatico per suggerire profili di personaggi basati su temi e attributi definiti dall'utente.

5. **C'è un limite al numero di profili di personaggi che posso creare?**
   - Il numero di profili dei personaggi può variare in base al tuo piano di abbonamento.

6. **Posso visualizzare l'anteprima dei profili dei personaggi prima di finalizzare le modifiche?**
   - Sì, utilizza l'opzione "Anteprima" nella Barra delle Azioni per visualizzare in anteprima i profili dei personaggi e le modifiche.

7. **Quali tipi di progetti mediatici possono beneficiare della funzione Personaggi?**
   - Vision Studio supporta la creazione di personaggi per giochi, film, romanzi e altri progetti mediatici che richiedono profili dettagliati dei personaggi.

8. **Posso collaborare con membri del team sui profili dei personaggi?**
   - Sì, invita i membri del team nel tuo spazio di lavoro per collaborare nella creazione e gestione dei profili dei personaggi.

9. **Ci sono modelli predefiniti per profili di personaggi comuni?**
   - Sì, esplora la scheda "Documenti" nella Vista Vuota per trovare modelli e linee guida sulla creazione di profili dei personaggi.

10. **Come posso eliminare un profilo di personaggio dal mio progetto?**
    - Seleziona il profilo del personaggio nella vista Esploratore e utilizza l'opzione "Elimina" nella Barra delle Azioni. Conferma l'eliminazione nel modale che appare.

## Appendice
  `,
    faqs: [
      {
        answer: 'Il pannello Personaggi fornisce generazione di personaggi potenziata dall\'IA, comprendente attributi, concept art, background, demografia, affiliazione e altro, progettata specificamente per il game design.',
        question: 'Quali funzionalità offre il pannello Personaggi per il game design?',
      },
      {
        answer: 'L\'IA contribuisce suggerendo attributi, generando concept art basata su descrizioni, creando storie di fondo avvincenti e determinando demografia e affiliazioni, semplificando così il processo di progettazione dei personaggi.',
        question: 'Come aiuta l\'IA nella generazione dei personaggi?',
      },
      {
        answer: 'Assolutamente. Mentre l\'IA fornisce una base, hai la flessibilità di personalizzare ogni aspetto dei personaggi per assicurarti che si allineino perfettamente alla visione del tuo gioco.',
        question: 'Posso personalizzare i personaggi generati?',
      },
      {
        answer: 'Sì, il pannello Personaggi si integra perfettamente con il pannello Dialoghi, utilizzando le informazioni sui personaggi per semplificare e migliorare il processo di creazione dei dialoghi.',
        question: 'C\'è integrazione con altri pannelli, come Dialoghi?',
      },
      {
        answer: 'Sì, puoi esportare i profili dei personaggi in vari formati, rendendo facile integrarli in altri aspetti del tuo flusso di lavoro di sviluppo del gioco.',
        question: 'Posso esportare i profili dei personaggi per uso esterno?',
      },
      {
        answer: 'Puoi specificare demografia, background, abilità, capacità e tratti della personalità per ciascun personaggio.',
        question: '--- Quali dettagli posso specificare per un personaggio?',
      },
      {
        answer: 'Sì, puoi caricare concept art e generare modelli 3D texturizzati per i tuoi personaggi.',
        question: 'Posso caricare concept art per i personaggi?',
      },
      {
        answer: 'I personaggi possono essere organizzati utilizzando l\'elenco ricercabile nell\'Esploratore con cartelle personalizzate.',
        question: 'Come posso organizzare i miei personaggi?',
      },
      {
        answer: 'Sì, puoi utilizzare strumenti di IA per generare profili dei personaggi e storie di fondo.',
        question: 'Posso generare profili dei personaggi usando l\'IA?',
      },
      {
        answer: 'I personaggi possono essere esportati nei formati PDF, Docx e 3DModel con texture.',
        question: 'Quali formati di esportazione sono disponibili per i personaggi?',
      },
      {
        answer: 'Sì, puoi invitare collaboratori con permessi specifici a lavorare sulla creazione dei personaggi.',
        question: 'Posso collaborare con altri nella creazione dei personaggi?',
      },
      {
        answer: 'Sì, sono disponibili modelli e linee guida per aiutarti a creare profili di personaggi dettagliati.',
        question: 'Sono disponibili modelli per la creazione dei personaggi?',
      },
      {
        answer: 'Seleziona il personaggio nell\'Esploratore e usa gli "Strumenti del Personaggio" per modificare i dettagli.',
        question: 'Come posso modificare un personaggio esistente?',
      },
      {
        answer: 'Sì, puoi duplicare un profilo del personaggio utilizzando l\'opzione "Duplica" nella barra delle azioni.',
        question: 'Posso duplicare un profilo del personaggio?',
      },
      {
        answer: 'Seleziona il personaggio e usa l\'opzione "Elimina" nella barra delle azioni. Apparirà una finestra di conferma prima della eliminazione.',
        question: 'Come posso eliminare un personaggio?',
      }
    ],
    featurePage: {
      description: 'I personaggi sono il cuore e l\'anima delle tue storie, ognuno con sfondi, personalità e archi unici.',
      details: [
        {
          content: 'Crea profili di personaggi dettagliati, inclusi nomi, retroscena, personalità e rappresentazioni visive. Dai vita ai tuoi personaggi con profondità e autenticità.',
          title: 'Creazione di personaggi approfondita',
        },
        {
          content: 'Genera concept art di alta qualità basati sulle tue descrizioni dei personaggi. Visualizza i tuoi personaggi con precisione, migliorando l\'esperienza di costruzione del mondo.',
          title: 'Arte concettuale sbalorditiva',
        },
        {
          content: 'Sperimenta con la generazione di modelli 3D dei tuoi personaggi. Questo aggiunge una nuova dimensione alla tua narrazione, rendendo i tuoi personaggi ancora più coinvolgenti.',
          title: 'Modelli 3D immersivi',
        }
      ],
      key: 'characters'
    },

    form: {
      abilities: 'Abilità',
      alias: 'Alias',
      background: 'Sfondo',
      demongraphics: 'Demografia',
      education: 'Educazione',
      ethnicity: 'Etnia',
      firstName: 'Nome',
      gender: 'Genere',
      identity: 'Identità',
      images: 'Immagini',
      language: 'Lingua',
      lastName: 'Cognome',
      name: 'Nome',
      nationality: 'Nazionalità',
      occupation: 'Occupazione',
      personality: 'Personalità',
      sexuality: 'Sessualità',
      skills: 'Competenze',
    },
    title: 'Personaggi',
  },

  common: {
    behaviour: 'Comportamento',
    description: 'Descrizione',
    diet: 'Dieta',
    folder: 'Cartella',
    folders: 'Cartelle',
    fuelType: 'Tipo di carburante',
    galleryIds: 'Cartelle',
    habitat: 'Habitat',
    lore: 'Tradizione',
    material: 'Materiale',
    plot: 'Trama',
    speed: 'Velocità',

    abilities: 'Abilità',
    abort: 'Annulla',
    add: 'Aggiungi',
    addItem: (value) => `Aggiungi ${value}`,
    admin: 'Amministratore',
    alias: 'Alias',
    art: 'Arte',
    artConcept: 'Arte Concettuale',
    back: 'Indietro',
    background: 'Sfondo',
    cancel: 'Annulla',
    close: 'Chiudi',
    confirm: 'Conferma',
    continue: 'Continua',
    create: 'Crea',
    createItem: (value) => `Crea ${value}`,
    daily: 'Quotidianamente',
    day: 'Giorno',
    days: 'Giorni',
    delete: 'Elimina',
    deleteItem: (value) => `Elimina ${value}`,
    demographics: 'Demografia',
    docs: 'Documenti',
    download: 'Scarica',
    duplicate: 'Duplica',
    edit: 'Modifica',
    editItem: (value) => `Modifica ${value}`,
    education: 'Istruzione',
    ethnicity: 'Etnia',
    explorer: 'Esplora',
    export: 'Esportare',
    exports: 'Esportazioni',
    faqs: 'Domande frequenti',
    features: 'Caratteristiche',
    firstName: 'Nome di battesimo',
    gender: 'Genere',
    getStarted: 'Inizia',
    hi: 'Ciao',
    hour: 'Ora',
    hourly: 'Ogni ora',
    hours: 'Ore',
    identity: 'Identità',
    images: 'Immagini',
    import: 'Importare',
    imports: 'Importazioni',
    itemExplorer: (value) => `Esplora ${value}`,
    itemPreview: (value) => `Anteprima ${value}`,
    itemTools: (value) => `Strumenti ${value}`,
    language: 'Lingua',
    lastName: 'Cognome',
    legal: 'Legale',
    minute: 'Minuto',
    minutely: 'Minutalmente',
    minutes: 'Minuti',
    month: 'Mese',
    monthly: 'Mensilmente',
    months: 'Mesi',
    name: 'Nome',
    nationality: 'Nazionalità',
    needHelp: 'Hai Bisogno di Aiuto',
    next: 'Avanti',
    occupation: 'Occupazione',
    overview: 'Panoramica',
    personality: 'Personalità',
    preview: 'Anteprima',
    pricing: 'Prezzi',
    recentItems: (items: string) => `Recenti ${items}`,
    save: 'Salva',
    search: 'Cerca',
    searchResource: (resource) => `Cerca ${resource}`,
    settings: 'Impostazioni',
    sexuality: 'Sessualità',
    skills: 'Competenze',
    tools: 'Strumenti',
    webApp: 'App',
    webSite: 'Sito',
    week: 'Settimana',
    weekly: 'Settimanalmente',
    weeks: 'Settimane',
    year: 'Anno',
    yearly: 'Annualmente',
    years: 'Anni',
  },

  components: {
    confirmActionHeading: (action: string, resource: string) => `${action} ${resource}`,
    confirmActionOnItem: (action: string, resource: string) => `Sei sicuro di voler ${action} questo ${resource}?`,
    confirmActionOnItemDescription: (primary: string, secondary: string) => `Premi "${primary}" per continuare, oppure "${secondary}" per annullare.`,
    featureGuideWelcomeP1: (featureName: string) => `Benvenuto nella funzione *${featureName}*.`,
    featureGuideWelcomeP2: (featureName: string) => `Qui puoi creare una nuova *${featureName}* o scegliere di modificare una esistente.`,
    featureGuideWelcomeP3: (featureName: string) => `Ogni *${featureName}* salvata è visibile nell'"Esplora" a sinistra.`,
    sidebarClose: 'Chiudi barra laterale',

  },

  controls: {
    featurePage: {
      description: 'I controlli forniscono gli strumenti per gestire gli elementi interattivi all\'interno dei tuoi progetti, garantendo esperienze utente fluide e coinvolgenti.',
      details: [
        {
          content: 'Implementa schemi di controllo personalizzati per le principali piattaforme come PlayStation, Xbox e Nintendo Switch, garantendo un\'esperienza utente coerente.',
          title: 'Controlli Specifici della Piattaforma',
        },
        {
          content: 'Accedi a una raccolta di schemi di controllo preconfigurati per avviare il tuo progetto e personalizzali secondo necessità per una messa a punto.',
          title: 'Libreria di Preimpostazioni Estesa',
        },
        {
          content: 'Crea e gestisci schemi di controllo personalizzati, organizzandoli in cartelle per un facile accesso e un uso specifico del contesto, come \'combattimento\' vs. \'esplorazione\'.',
          title: 'Schemi di Controllo Organizzati',
        },
      ],
      key: 'controls',
    }

  },

  creatures: {
    featurePage: {
      description: 'Le creature sono animali o personaggi non umanoidi che abitano le tue storie, aggiungendo vita e diversità al tuo mondo.',
      details: [
        {
          content: 'Crea design dettagliati e fantasiosi per le tue creature, assicurandoti che si integrino perfettamente nel tuo mondo.',
          title: 'Design unici delle creature'
        },
        {
          content: 'Definisci il comportamento, gli habitat e i ruoli ecologici delle tue creature per rendere il tuo mondo più coinvolgente e realistico.',
          title: 'Comportamento ed ecologia'
        },
        {
          content: 'Incorpora creature magiche e mitiche nelle tue storie, ognuna con la propria tradizione e abilità mistiche.',
          title: 'Creature magiche e mitiche'
        }
      ],
      key: 'creatures'
    }

  },

  dashboard: {
    addItem: 'Aggiungi Documento',
    addProject: 'Aggiungi Progetto',
    contentRating: 'Valutazione del contenuto',
    description: 'Crea, modifica e sfoglia documenti.',
    devTechnology: 'Tecnologia di sviluppo',
    projectArt: 'Arte concettuale',
    projectArtDescription: 'Le diverse opere d\'arte delle varie collezioni dei tuoi progetti nelle diverse funzionalità disponibili di Vision.',
    projectFeatures: 'Funzionalità del progetto',
    projectFeaturesDescription: 'Le funzionalità possono essere aggiunte e rimosse dai progetti in modo arbitrario, senza influire sulle risorse sottostanti.',
    projectInfo: 'Informazioni sul progetto',
    projectInfoDescription: 'Modifica le informazioni pubbliche del progetto',
    projects: '',
    releaseDate: 'Data di rilascio',
    tableHeaders: {
      lastUpdated: 'Ultimo aggiornamento',
      projectName: 'Nome del progetto',
      sections: 'Sezioni',
    },
    targetPlatform: 'Piattaforma di destinazione',
    technology: 'Tecnologia',
    title: 'Dashboard',
    usersWithAccess: 'Utenti con accesso',
    viewMore: 'Visualizza altro',

  },

  dialogues: {
    featurePage: {
      description: 'I dialoghi danno vita ai tuoi personaggi, consentendo interazioni ricche e coinvolgenti tra di loro.',
      details: [
        {
          content: 'Crea e gestisci dialoghi tra personaggi con un editor facile da usare, garantendo interazioni fluide e coinvolgenti.',
          title: 'Creazione di Dialoghi Intuitiva',
        },
        {
          content: 'Crea alberi di dialogo ramificati per esplorare vari percorsi e risultati di conversazione, aggiungendo profondità alle interazioni tra i personaggi.',
          title: 'Alberi di Dialogo Dinamici',
        },
        {
          content: 'Integra script di doppiaggio o file audio per migliorare l\'immersione e il realismo dei tuoi dialoghi.',
          title: 'Integrazione Vocale Fluida',
        },
      ],
      key: 'dialogues',
    }

  },

  documents: {
    description: '',
    featurePage: {
      description: 'I documenti sono i tuoi strumenti principali per scrivere e organizzare i tuoi contenuti, con supporto per vari formati.',
      details: [
        {
          content: 'Utilizza un potente editor di testo con opzioni di formattazione avanzate per creare documenti dettagliati e visivamente attraenti.',
          title: 'Modifica del testo avanzata'
        },
        {
          content: 'Tieni i tuoi documenti ben organizzati in cartelle e sottocartelle, rendendoli facili da accedere e gestire.',
          title: 'Organizzazione efficiente dei documenti'
        },
        {
          content: 'Importa ed esporta documenti in più formati, inclusi PDF, Markdown e Docx, garantendo compatibilità e facilità di condivisione.',
          title: 'Importazione ed Esportazione versatili'
        }
      ],
      key: 'documents'
    },
    title: ''

  },

  features: {
    '3D': '3D',
    account: 'Account',
    ai: 'IA',
    ai3D: 'IA 3D',
    aiAudio: 'Audio IA',
    aiExamples: 'Esempi IA',
    aiImages: 'Immagini IA',
    aiText: 'Testo IA',
    aiVideo: 'Video IA',
    asset: 'Asset',
    assets: 'Asset',
    audio: 'Audio',
    character: 'Personaggio',
    characters: 'Personaggi',
    control: 'Controllo',
    controls: 'Controlli',
    creature: 'Creatura',
    creatures: 'Creature',
    dashboard: 'Dashboard',
    dialogue: 'Dialogo',
    dialogues: 'Dialoghi',
    document: 'Documento',
    documents: 'Documenti',
    examples: 'Esempi',
    graph: 'Grafico',
    graphs: 'Grafici',
    home: 'Home',
    homePage: 'Pagina principale',
    illustration: 'Illustrazione',
    illustrations: 'Illustrazioni',
    images: 'Immagini',
    location: 'Posizione',
    locations: 'Posizioni',
    media: 'Media',
    multimedia: 'Multimedia',
    object: 'Oggetto',
    objects: 'Oggetti',
    project: 'Progetto',
    projects: 'Progetti',
    quest: 'Missione',
    quests: 'Missioni',
    setting: 'Impostazione',
    settings: 'Impostazioni',
    subscription: 'Abbonamento',
    subscriptions: 'Abbonamenti',
    text: 'Testo',
    transport: 'Trasporto',
    transports: 'Trasporti',
    user: 'Utente',
    users: 'Utenti',
    vehicle: 'Veicolo',
    vehicles: 'Veicoli',
    video: 'Video',
    workspace: 'Spazio di lavoro',
    workspaces: 'Spazi di lavoro',

  },

  galleries: {
    'character': {
      'description': 'Genera e modifica personaggi da utilizzare in \'Dialoghi\', ecc.',
      'title': 'Galleria dei Personaggi'
    },
    description: 'Un luogo per brainstormare concetti visivi e metterli in collezioni di gallerie.',
    image: {
      description: 'Genera immagini personalizzate alimentate dall\'IA',
      enterPrompt: 'Inserisci un prompt',
      pickStyle: 'Scegli uno stile artistico',
      title: 'Galleria di immagini',
    },
    sound: {
      description: 'Crea clip audio generate dall\'IA',
      title: 'Galleria audio'
    },
    title: 'Gallerie',
    video: {
      description: 'Crea video da testo con l\'IA',
      title: 'Galleria video'
    }

  },

  generators: {
    description: 'La serie di generatori AI sottostanti che rendono possibile questa esperienza',
    title: 'Generatori',
  },

  graphs: {
    featurePage: {
      description: 'I grafici ti permettono di rappresentare visualmente dati e relazioni all\'interno dei tuoi progetti, fornendo chiarezza e comprensione.',
      details: [
        {
          content: 'Costruisci e personalizza grafici per rappresentare visivamente dati e relazioni complesse, migliorando la comprensione e l\'intuizione.',
          title: 'Creazione di Grafici Completa',
        },
        {
          content: 'Usa i grafici per illustrare le relazioni tra i personaggi, i punti della trama e altri elementi della storia, rendendo le informazioni complesse più accessibili.',
          title: 'Visualizzazione dei Dati Efficace',
        },
        {
          content: 'Crea grafici interattivi che consentano agli utenti di esplorare e interagire con i dati, fornendo una comprensione più approfondita del tuo progetto.',
          title: 'Grafici Interattivi',
        },
      ],
      key: 'graphs',
    }

  },

  landing: {
    allFeatures: 'Tutte le funzionalità',
    getAccess: 'Ottieni accesso',
    sections: [

    ],

    watchVideo: 'Guarda il video',
  },

  locations: {
    featurePage: {
      description: 'I luoghi forniscono l\'ambientazione per le tue storie, dando vita ai tuoi mondi con dettagli e visivi ricchi.',
      details: [
        {
          content: 'Definisci e descrivi le location con testi e immagini ricchi per creare ambienti immersivi che migliorano la tua storia.',
          title: 'Creazione di Location Dettagliate'
        },
        {
          content: 'Visualizza le tue location e le loro connessioni con mappe interattive, rendendo più facile comprendere e navigare nel tuo mondo narrativo.',
          title: 'Integrazione di Mappe Interattive'
        },
        {
          content: 'Aggiungi informazioni storiche e basate sulla lore alle tue location, fornendo profondità e contesto che arricchiscono la tua narrazione.',
          title: 'Lore Ricca di Location'
        }
      ],
      key: 'locations'
    }

  },

  objects: {
    featurePage: {
      description: 'Gli oggetti sono elementi inanimati che possono essere usati, raccolti o scambiati nelle tue storie, come armi, equipaggiamenti, bottino e valute.',
      details: [
        {
          content: 'Crea descrizioni approfondite per ogni oggetto, incluse le loro usi, origini e significato nella tua storia.',
          title: 'Descrizioni dettagliate degli oggetti'
        },
        {
          content: 'Organizza e gestisci gli oggetti nella tua storia con facilità, monitorando la loro disponibilità e utilizzo.',
          title: 'Gestione dell\'inventario'
        },
        {
          content: 'Sviluppa un sistema commerciale robusto per i tuoi oggetti, migliorando l\'aspetto economico della tua storia.',
          title: 'Commercio ed Economia'
        }
      ],
      key: 'objects'
    }

  },

  pricing: {

  },

  projects: {
    addProject: 'Aggiungi progetto',
    createProject: 'Crea progetto',
    editor: {
      linkCopiedToClipboard: 'Link Copiato negli Appunti'
    },
    featurePage: {
      description: 'I progetti fungono da fondamento per la tua visione creativa, ospitando tutti i contenuti e le idee correlate in un unico luogo.',
      details: [
        {
          content: 'Crea e gestisci più progetti, ciascuno dedicato a un\'idea creativa specifica, come un gioco, una serie TV o un romanzo grafico. Mantieni le tue idee organizzate e concentrate.',
          title: 'Gestione diversificata dei progetti'
        },
        {
          content: 'Personalizza ogni progetto con funzionalità uniche che soddisfano le sue esigenze. Aggiungi o rimuovi funzionalità in qualsiasi momento senza perdere dati, garantendo flessibilità e adattabilità.',
          title: 'Funzionalità personalizzabili'
        },
        {
          content: 'Trasferisci facilmente progetti tra spazi di lavoro o account utilizzando la funzionalità di importazione/esportazione. Mantieni l\'integrità dei tuoi dati durante le transizioni.',
          title: 'Importazioni ed esportazioni senza sforzo'
        }
      ],
      key: 'projects'
    },
    generating: {

    },
    importProject: 'Importa progetto',
    newProject: 'Nuovo progetto',
    setup: {
      generate: 'Genera',
      next: 'Avanti',
      projectName: 'Qual è il nome del tuo progetto?',
      projectPrompt: 'Di cosa tratta il tuo progetto?'
    }

  },

  transports: {
    featurePage: {
      description: 'I trasporti sono qualsiasi modalità di viaggio attraverso lo spazio-tempo, inclusi veicoli, wormhole, pistole portale, ferrovie e macchine del tempo.',
      details: [
        {
          content: 'Esplora una varietà di modalità di trasporto, dai veicoli tradizionali ai wormhole futuristici e alle macchine del tempo.',
          title: 'Modalità di Trasporto Innovative'
        },
        {
          content: 'Scopri i più recenti progressi nella tecnologia dei trasporti, dai sistemi Hyperloop ai dispositivi di teletrasporto.',
          title: 'Tecnologia Avanzata'
        },
        {
          content: 'Crea splendide visualizzazioni dei metodi di trasporto per immergere il tuo pubblico nell\'esperienza di viaggiare attraverso lo spaziotempo.',
          title: 'Visuali Immersivi'
        }
      ],
      key: 'transports'
    }

  },

  version: {
    currentVersion: 'La tua versione attuale è:',
    getVersion: 'Ottienilo ora!',
    header: 'Aggiornamento Vision',
    newVersion: 'Nuova versione',
    updateNow: 'Aggiorna ora',
  },

  workspaces: {
    addWorkspace: 'Aggiungi spazio di lavoro',
    addWorkspaceImage: 'Aggiungi immagine dello spazio di lavoro',
    addWorkspaceName: 'Aggiungi nome dello spazio di lavoro',
    addWorkspaceUsers: 'Aggiungi utenti allo spazio di lavoro',
    addWorkspaceUsersInfo: 'Aggiungi utenti al tuo spazio di lavoro, assegna permessi a ciascuno e condividi tutti i progetti in questo spazio di lavoro con questi.',
    chooseAWorkspace: 'Scegli uno spazio di lavoro',
    createWorkspace: 'Crea spazio di lavoro',
    featurePage: {
      description: 'Gli spazi di lavoro ti consentono di organizzare progetti e collaborare senza soluzione di continuità con i membri del team all\'interno di un ambiente concentrato.',
      details: [
        {
          content: 'Crea spazi di lavoro distinti per diversi tipi di progetti, come giochi, scrittura e altro. Ogni spazio di lavoro mantiene i tuoi progetti organizzati e specifici al contesto.',
          title: 'Spazi di lavoro su misura per ogni progetto'
        },
        {
          content: 'Invita i membri del team a collaborare all\'interno di spazi di lavoro specifici. Assegna ruoli e permessi per controllare l\'accesso, assicurando che tutti i membri abbiano le informazioni di cui hanno bisogno.',
          title: 'Supporto alla collaborazione'
        },
        {
          content: 'Personalizza il tuo spazio di lavoro con temi scuri o chiari. Passa facilmente da uno all\'altro utilizzando il pulsante di commutazione del tema, migliorando la tua produttività e il tuo comfort.',
          title: 'Temi personalizzabili'
        }
      ],
      key: 'workspaces'
    },
    permissions: 'Permessi',
    toCreateProjectsIn: 'per creare progetti in'
  },
};
