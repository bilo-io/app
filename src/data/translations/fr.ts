import { ITranslation } from '.';

export const fr: ITranslation = {
  account: {
    billing: 'Facturation',
    chooseTheme: 'Choisir un thème',
    dark: 'Sombre',
    email: 'E-mail',
    features: 'Fonctionnalités',
    light: 'Clair',
    name: 'Nom',
    profile: 'Profil',
    settingExplorerAutoExpand: 'Développer automatiquement les dossiers dans l\'Explorateur pour chaque fonctionnalité',
    settingExplorerEditOnSelect: 'Ouvrir automatiquement l\'éditeur lors de la sélection d\'un élément dans l\'Explorateur',
    settingNavbarExpanded: 'Étendre la barre de navigation',
    settingPickLanguage: 'Choisir la langue',
    settingPickTheme: 'Choisir le thème',
    settingPlayMusicOnStartup: 'Lire de la musique au démarrage du projet',
    settingShowClock: 'Afficher l\'horloge',
    signOut: 'Se déconnecter',
    subscription: 'Abonnement',
    title: 'Compte',
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
    acceptTerms: 'J\'accepte les Conditions générales',
    alreadyHaveAccount: 'Vous avez déjà un compte ?',
    dontHaveAccount: 'Vous n\'avez pas de compte ?',
    logIn: 'Connexion',
    logOut: 'Déconnexion',
    signInWith: (provider: string) => `Se connecter avec ${provider}`,
    signOut: 'Se déconnecter',
    signUp: 'S\'inscrire',
    singleSignOn: 'Connexion unique',
    welcomeHeading: 'Bienvenue dans Vision',
    welcomeSentence: 'Où vous pouvez concrétiser vos idées de rêve, boostées par la puissance de l\'IA !',
  },

  blueprints: {
    description: 'Un ensemble de modèles de documents pour accélérer la création d\'un document',
    title: 'Modèles',
  },

  characters: {
    description: 'Générer et éditer des personnages à utiliser dans les "Dialogues", etc.',
    docs: `
# Vision Studio | Personnages

La fonctionnalité ** Personnages ** de Vision Studio permet aux utilisateurs de créer et de gérer des profils de personnages détaillés pour divers projets médiatiques.Que vous développiez des personnages pour des jeux, des films ou des romans, cette fonctionnalité offre des outils complets pour définir des personnalités, des arrière - plans, des traits et plus encore.

## Présentation des Fonctionnalités

La fonctionnalité Personnages est structurée pour améliorer l'organisation et la productivité tout au long du processus de création de personnages.

### Explorateur

La vue Explorateur répertorie tous les profils de personnages dans le projet, catégorisés par dossiers tels que "Personnages Principaux," "Personnages Secondaires," et "PNJ."

### Vue Vide

En entrant dans la fonctionnalité Personnages, les utilisateurs rencontrent une interface simplifiée avec les outils essentiels:

- ** Onglet Commencer **: Offre des guides d'introduction et des tutoriels pour les nouveaux utilisateurs.
  - ** Onglet FAQs **: Fournit des réponses aux questions fréquentes sur la création et la gestion des personnages.
- ** Onglet Vidéos **: Contient des tutoriels vidéo démontrant des techniques de création de personnages.
- ** Onglet Documents **: Offre de la documentation et des modèles pour les profils et attributs de personnages.
- ** Onglet Exportations **: Permet d'exporter des profils de personnages aux formats JSON, CSV et PDF.

### Vue Contenu

La sélection d'un profil de personnage dans l'Explorateur remplit la Vue Contenu.Ici, les utilisateurs peuvent afficher et éditer des informations détaillées sur les personnages:

- ** Barre d'Actions**: Offre des options pour éditer, dupliquer, sauvegarder et supprimer des profils de personnages.
  - ** Panneau d'Outils**: Offre des onglets tels que "Éditer," "IA," et "Importer" pour configurer et améliorer les détails des personnages.
    - ** Aperçu **: Permet aux utilisateurs de prévisualiser les profils et modifications de personnages avant de finaliser les changements.

### Outils de Fonctionnalité

Le panneau Outils de Fonctionnalité offre des fonctionnalités avancées pour créer et gérer des profils de personnages:

- ** Onglet Créer / Éditer **: Permet aux utilisateurs de définir les attributs des personnages en utilisant le schéma \`ICharacter\`, spécifiant la démographie, les traits, l'arrière-plan et plus encore.
- **Onglet IA**: Utilise des outils d'IA pour générer des profils de personnages basés sur des critères et des thèmes spécifiés.
- **Onglet Importer**: Facilite l'importation de profils de personnages à partir de sources externes au format JSON.

## Importations & Exportations

La fonctionnalité Personnages prend en charge des capacités d'importation et d'exportation transparentes pour une collaboration et une gestion de projet efficaces :

### Importations

Les utilisateurs peuvent importer des profils et attributs de personnages au format JSON, garantissant la compatibilité et l'intégrité des données.

### Exportations

Les profils de personnages peuvent être exportés dans divers formats :
- JSON
- CSV
- PDF

L'onglet Exportations dans la Vue Vide permet d'exporter des collections entières ou des sous-ensembles de profils de personnages à des fins de partage et d'archivage.

## Création et Gestion de Profils de Personnages

### Créer de Nouveaux Personnages

Pour créer un nouveau profil de personnage, naviguez vers l'onglet "Commencer" et cliquez sur le grand bouton bleu rond avec un +. Cette action ouvre le panneau "Outils de Personnage," permettant aux utilisateurs de définir la démographie, les traits et les arrière-plans.

### Éditer les Détails des Personnages

Éditer des profils de personnages permet aux utilisateurs de modifier la démographie, les traits, les arrière-plans et autres attributs en utilisant l'onglet "Éditer" dans le panneau Outils de Fonctionnalité.

### Génération de Personnages Assistée par IA

L'onglet "IA" dans le panneau "Outils de Personnage" utilise des algorithmes d'apprentissage automatique pour suggérer des profils de personnages bas
  `,
    featurePage: {
      description: 'Les personnages sont le cœur et l\'âme de vos histoires, chacun avec des antécédents, des personnalités et des arcs uniques.',
      details: [
        {
          content: 'Créez des profils de personnages détaillés, y compris les noms, les histoires de fond, les personnalités et les représentations visuelles. Donnez vie à vos personnages avec profondeur et authenticité.',
          title: 'Création de personnages approfondie',
        },
        {
          content: 'Générez des concept arts de haute qualité basés sur vos descriptions de personnages. Visualisez vos personnages avec précision, améliorant l\'expérience de construction du monde.',
          title: 'Art conceptuel époustouflant',
        },
        {
          content: 'Expérimentez avec la génération de modèles 3D de vos personnages. Cela ajoute une nouvelle dimension à votre narration, rendant vos personnages encore plus captivants.',
          title: 'Modèles 3D immersifs',
        }
      ],
      key: 'characters'
    },
    form: {
      abilities: 'Capacités',
      alias: 'Alias',
      background: 'Contexte',
      demongraphics: 'Démographie',
      education: 'Éducation',
      ethnicity: 'Ethnicité',
      firstName: 'Prénom',
      gender: 'Genre',
      identity: 'Identité',
      images: 'Images',
      language: 'Langue',
      lastName: 'Nom de famille',
      name: 'Nom',
      nationality: 'Nationalité',
      occupation: 'Profession',
      personality: 'Personnalité',
      sexuality: 'Sexualité',
      skills: 'Compétences',
    },
    title: 'Personnages'
  },

  common: {
    behaviour: 'Comportement',
    description: 'Description',
    diet: 'Régime alimentaire',
    folder: 'Dossier',
    folders: 'Dossiers',
    fuelType: 'Type de carburant',
    galleryIds: 'Dossiers',
    habitat: 'Habitat',
    lore: 'Tradition',
    material: 'Matériau',
    plot: 'Intrigue',
    speed: 'Vitesse',

    abilities: 'Aptitudes',
    abort: 'Abandonner',
    add: 'Ajouter',
    addItem: (value) => `Ajouter ${value}`,
    admin: 'Administrateur',
    alias: 'Alias',
    art: 'Art',
    artConcept: 'Art Conceptuel',
    back: 'Retour',
    background: 'Contexte',
    cancel: 'Abandonner',
    close: 'Fermer',
    confirm: 'Confirmer',
    continue: 'Continuer',
    create: 'Créer',
    createItem: (value) => `Créer ${value}`,
    daily: 'Quotidiennement',
    day: 'Jour',
    days: 'Jours',
    delete: 'Supprimer',
    deleteItem: (value) => `Supprimer ${value}`,
    demographics: 'Démographie',
    docs: 'Documents',
    download: 'Télécharger',
    duplicate: 'Dupliquer',
    edit: 'Modifier',
    editItem: (value) => `Modifier ${value}`,
    education: 'Éducation',
    ethnicity: 'Ethnicité',
    explorer: 'Explorateur',
    export: 'Exporter',
    exports: 'Exportations',
    faqs: 'FAQ',
    features: 'Fonctionnalités',
    firstName: 'Prénom',
    gender: 'Genre',
    getStarted: 'Commencer',
    hi: 'Salut',
    hour: 'Heure',
    hourly: 'Toutes les heures',
    hours: 'Heures',
    identity: 'Identité',
    images: 'Images',
    import: 'Importer',
    imports: 'Importations',
    itemExplorer: (value) => `Explorateur ${value}`,
    itemPreview: (value) => `Aperçu ${value}`,
    itemTools: (value) => `Outils ${value}`,
    language: 'Langue',
    lastName: 'Nom de famille',
    legal: 'Légal',
    minute: 'Minute',
    minutely: 'À la minute',
    minutes: 'Minutes',
    month: 'Mois',
    monthly: 'Mensuellement',
    months: 'Mois',
    name: 'Nom',
    nationality: 'Nationalité',
    needHelp: 'Besoin d\'aide',
    next: 'Suivant',
    occupation: 'Profession',
    overview: 'Aperçu',
    personality: 'Personnalité',
    preview: 'Aperçu',
    pricing: 'Tarification',
    recentItems: (items: string) => `Récents ${items}`,
    save: 'Enregistrer',
    search: 'Rechercher',
    searchResource: (resource) => `Rechercher ${resource}`,
    settings: 'Paramètres',
    sexuality: 'Sexualité',
    skills: 'Compétences',
    tools: 'Outils',
    webApp: 'Application',
    webSite: 'Site',
    week: 'Semaine',
    weekly: 'Hebdomadairement',
    weeks: 'Semaines',
    year: 'An',
    yearly: 'Annuellement',
    years: 'Années',
  },

  components: {
    confirmActionHeading: (action: string, resource: string) => `${action} ${resource}`,
    confirmActionOnItem: (action: string, resource: string) => `Êtes-vous sûr de vouloir ${action} ce ${resource}?`,
    confirmActionOnItemDescription: (primary: string, secondary: string) => `Appuyez sur "${primary}" pour continuer, ou sur "${secondary}" pour annuler.`,
    featureGuideWelcomeP1: (featureName: string) => `Bienvenue dans la fonctionnalité *${featureName}*.`,
    featureGuideWelcomeP2: (featureName: string) => `Ici, vous pouvez soit créer une nouvelle *${featureName}*, soit choisir d'en modifier une existante.`,
    featureGuideWelcomeP3: (featureName: string) => `Chaque *${featureName}* sauvegardée est visible dans l'"Explorateur" à gauche.`,
    sidebarClose: 'Fermer la barre latérale',

  },

  controls: {
    featurePage: {
      description: 'Les contrôles fournissent les outils pour gérer les éléments interactifs au sein de vos projets, assurant des expériences utilisateur fluides et engageantes.',
      details: [
        {
          content: 'Implémentez des schémas de contrôle adaptés aux principales plateformes telles que PlayStation, Xbox et Nintendo Switch, garantissant une expérience utilisateur cohérente.',
          title: 'Contrôles Spécifiques à la Plateforme',
        },
        {
          content: 'Accédez à une collection de schémas de contrôle préconfigurés pour démarrer votre projet et personnalisez-les si nécessaire pour un réglage fin.',
          title: 'Bibliothèque de Préréglages Étendue',
        },
        {
          content: 'Créez et gérez des schémas de contrôle personnalisés, en les organisant dans des dossiers pour un accès facile et une utilisation contextuelle spécifique, comme \'combat\' contre \'exploration\'.',
          title: 'Schémas de Contrôle Organisés',
        },
      ],
      key: 'controls',
    }

  },

  creatures: {

  },

  dashboard: {
    addItem: 'Ajouter un document',
    addProject: 'Ajouter un projet',
    contentRating: 'Évaluation du contenu',
    description: 'Créer, éditer et parcourir des documents.',
    devTechnology: 'Technologie de développement',
    projectArt: 'Art conceptuel',
    projectArtDescription: 'Les différentes œuvres d\'art de vos projets des différentes collections dans les différentes fonctionnalités disponibles de Vision.',
    projectFeatures: 'Fonctionnalités du projet',
    projectFeaturesDescription: 'Les fonctionnalités peuvent être ajoutées et supprimées des projets arbitrairement, sans affecter les ressources sous-jacentes.',
    projectInfo: 'Info projet',
    projectInfoDescription: 'Modifier les informations publiques du projet',
    projects: '',
    releaseDate: 'Date de sortie',
    tableHeaders: {
      lastUpdated: 'Dernière mise à jour',
      projectName: 'Nom du projet',
      sections: 'Sections',
    },
    targetPlatform: 'Plateforme cible',
    technology: 'Technologie',
    title: 'Tableau de bord',
    usersWithAccess: 'Utilisateurs avec accès',
    viewMore: 'Voir plus',

  },

  dialogues: {
    featurePage: {
      description: 'Les dialogues donnent vie à vos personnages, permettant des interactions riches et engageantes entre eux.',
      details: [
        {
          content: 'Créez et gérez des dialogues entre les personnages avec un éditeur facile à utiliser, garantissant des interactions fluides et engageantes.',
          title: 'Création de Dialogues Intuitive',
        },
        {
          content: 'Créez des arbres de dialogue ramifiés pour explorer divers chemins de conversation et résultats, ajoutant de la profondeur aux interactions entre les personnages.',
          title: 'Arbres de Dialogue Dynamiques',
        },
        {
          content: 'Intégrez des scripts de doublage ou des fichiers audio pour améliorer l\'immersion et le réalisme de vos dialogues.',
          title: 'Intégration Vocale Transparente',
        },
      ],
      key: 'dialogues',
    }
  },

  documents: {
    description: '',
    featurePage: {
      description: 'Les documents sont vos outils principaux pour écrire et organiser votre contenu, avec prise en charge de divers formats.',
      details: [
        {
          content: 'Utilisez un éditeur de texte puissant avec des options de formatage riches pour créer des documents détaillés et visuellement attrayants.',
          title: 'Édition de texte avancée'
        },
        {
          content: 'Gardez vos documents bien organisés dans des dossiers et sous-dossiers, ce qui les rend faciles à accéder et à gérer.',
          title: 'Organisation efficace des documents'
        },
        {
          content: 'Importez et exportez des documents dans plusieurs formats, y compris PDF, Markdown et Docx, garantissant compatibilité et facilité de partage.',
          title: 'Importation & Exportation polyvalentes'
        }
      ],
      key: 'documents'
    },
    title: ''

  },

  features: {
    '3D': '3D',
    account: 'Compte',
    ai: 'IA',
    ai3D: 'IA 3D',
    aiAudio: 'Audio IA',
    aiExamples: 'Exemples IA',
    aiImages: 'Images IA',
    aiText: 'Texte IA',
    aiVideo: 'Vidéo IA',
    asset: 'Actif',
    assets: 'Actifs',
    audio: 'Audio',
    character: 'Personnage',
    characters: 'Personnages',
    control: 'Contrôle',
    controls: 'Contrôles',
    creature: 'Créature',
    creatures: 'Créatures',
    dashboard: 'Tableau de bord',
    dialogue: 'Dialogue',
    dialogues: 'Dialogues',
    document: 'Document',
    documents: 'Documents',
    examples: 'Exemples',
    graph: 'Graphique',
    graphs: 'Graphiques',
    home: 'Accueil',
    homePage: 'Page d\'accueil',
    illustration: 'Illustration',
    illustrations: 'Illustrations',
    images: 'Images',
    location: 'Emplacement',
    locations: 'Emplacements',
    media: 'Médias',
    multimedia: 'Multimédia',
    object: 'Objet',
    objects: 'Objets',
    project: 'Projet',
    projects: 'Projets',
    quest: 'Quête',
    quests: 'Quêtes',
    setting: 'Paramètre',
    settings: 'Paramètres',
    subscription: 'Abonnement',
    subscriptions: 'Abonnements',
    text: 'Texte',
    transport: 'Transport',
    transports: 'Transports',
    user: 'Utilisateur',
    users: 'Utilisateurs',
    vehicle: 'Véhicule',
    vehicles: 'Véhicules',
    video: 'Vidéo',
    workspace: 'Espace de travail',
    workspaces: 'Espaces de travail',
  },

  galleries: {
    character: {
      'description': 'Générez et modifiez des personnages à utiliser dans les \'Dialogues\', etc.',
      'title': 'Galerie de personnages'
    },
    description: 'Un endroit pour brainstormer des concepts visuels et les regrouper dans des collections de galeries.',
    image: {
      description: 'Générez des images personnalisées alimentées par l\'IA',
      enterPrompt: 'Entrez une instruction',
      pickStyle: 'Choisissez un style artistique',
      title: 'Galerie d\'images',
    },
    sound: {
      description: 'Créez des clips audio générés par l\'IA',
      title: 'Galerie sonore'
    },
    title: 'Galeries',
    video: {
      description: 'Créez des vidéos à partir de texte avec l\'IA',
      title: 'Galerie vidéo'
    }
  },

  generators: {
    description: 'La suite de générateurs d\'IA sous-jacents qui permettent cette expérience',
    title: 'Générateurs',
  },

  graphs: {
    featurePage: {
      description: 'Les graphiques vous permettent de représenter visuellement les données et les relations au sein de vos projets, offrant clarté et compréhension.',
      details: [
        {
          content: 'Créez et personnalisez des graphiques pour représenter visuellement des données et des relations complexes, améliorant ainsi la compréhension et l\'aperçu.',
          title: 'Création de Graphiques Complète',
        },
        {
          content: 'Utilisez des graphiques pour illustrer les relations entre les personnages, les points de l\'intrigue et d\'autres éléments de l\'histoire, rendant les informations complexes plus accessibles.',
          title: 'Visualisation de Données Efficace',
        },
        {
          content: 'Créez des graphiques interactifs permettant aux utilisateurs d\'explorer et de s\'engager avec les données, fournissant ainsi une compréhension plus approfondie de votre projet.',
          title: 'Graphiques Interactifs',
        },
      ],
      key: 'graphs',
    }

  },

  landing: {
    allFeatures: 'Toutes les fonctionnalités',
    getAccess: 'Accéder',
    sections: [

    ],

    watchVideo: 'Regarder la vidéo',
  },

  locations: {
    featurePage: {
      description: 'Les lieux fournissent les paramètres de vos histoires, faisant vivre vos mondes avec des détails riches et visuels.',
      details: [
        {
          content: 'Définissez et décrivez des lieux avec des textes riches et des images pour créer des environnements immersifs qui enrichissent votre histoire.',
          title: 'Création de Lieux Détaillés'
        },
        {
          content: 'Visualisez vos lieux et leurs connexions avec des cartes interactives, facilitant la compréhension et la navigation dans votre univers narratif.',
          title: 'Intégration de Cartes Interactives'
        },
        {
          content: 'Ajoutez des informations historiques et basées sur des lore à vos lieux, offrant profondeur et contexte qui enrichissent votre narration.',
          title: 'Lore Riche en Lieux'
        }
      ],
      key: 'locations'
    }

  },

  objects: {
    featurePage: {
      description: 'Les objets sont des éléments inanimés qui peuvent être utilisés, collectés ou échangés dans vos histoires, tels que des armes, des équipements, du butin et des devises.',
      details: [
        {
          content: 'Créez des descriptions détaillées pour chaque objet, y compris leurs utilisations, origines et importance dans votre histoire.',
          title: 'Descriptions détaillées des objets'
        },
        {
          content: 'Organisez et gérez les objets de votre histoire facilement, en suivant leur disponibilité et leur utilisation.',
          title: 'Gestion de l\'inventaire'
        },
        {
          content: 'Développez un système commercial robuste pour vos objets, améliorant l\'aspect économique de votre histoire.',
          title: 'Commerce et Économie'
        }
      ],
      key: 'objects'
    }

  },

  pricing: {

  },

  projects: {
    addProject: 'Ajouter un projet',
    createProject: 'Créer un projet',
    editor: {
      linkCopiedToClipboard: 'Lien copié dans le presse-papiers'
    },
    featurePage: {
      description: 'Les projets servent de fondation à votre vision créative, regroupant tous les contenus et idées connexes en un seul endroit.',
      details: [
        {
          content: 'Créez et gérez plusieurs projets, chacun dédié à une idée créative spécifique, comme un jeu, une série télévisée ou un roman graphique. Gardez vos idées organisées et ciblées.',
          title: 'Gestion de projets diversifiée'
        },
        {
          content: 'Personnalisez chaque projet avec des fonctionnalités uniques adaptées à ses besoins. Ajoutez ou supprimez des fonctionnalités à tout moment sans perdre de données, garantissant flexibilité et adaptabilité.',
          title: 'Fonctionnalités personnalisables'
        },
        {
          content: 'Transférez facilement des projets entre espaces de travail ou comptes en utilisant la fonctionnalité d\'importation/exportation. Maintenez l\'intégrité de vos données lors des transitions.',
          title: 'Importations et exportations sans effort'
        }
      ],
      key: 'projects'
    },
    generating: {

    },
    importProject: 'Importer un projet',
    newProject: 'Nouveau projet',
    setup: {
      generate: 'Générer',
      next: 'Suivant',
      projectName: 'Quel est le nom de votre projet ?',
      projectPrompt: 'De quoi parle votre projet ?'
    }

  },

  transports: {
    featurePage: {
      description: 'Les transports sont tous les moyens de voyager dans l\'espace-temps, y compris les véhicules, les trous de ver, les pistolets à portail, les chemins de fer et les machines à voyager dans le temps.',
      details: [
        {
          content: 'Explorez une variété de modes de transport, des véhicules traditionnels aux trous de ver et aux machines à voyager dans le temps futuristes.',
          title: 'Modes de Transport Innovants'
        },
        {
          content: 'Découvrez les dernières avancées en matière de technologie de transport, des systèmes Hyperloop aux dispositifs de téléportation.',
          title: 'Technologie Avancée'
        },
        {
          content: 'Créez des visuels époustouflants des méthodes de transport pour immerger votre public dans l\'expérience du voyage à travers l\'espace-temps.',
          title: 'Visuels Immersifs'
        }
      ],
      key: 'transports'
    }
  },

  version: {
    currentVersion: 'Votre version actuelle est :',
    getVersion: 'Obtenez-le maintenant!',
    header: 'Mise à jour de Vision',
    newVersion: 'Nouvelle version',
    updateNow: 'Mettre à jour maintenant',
  },

  workspaces: {
    addWorkspace: 'Ajouter un espace de travail',
    addWorkspaceImage: 'Ajouter une image de l\'espace de travail',
    addWorkspaceName: 'Ajouter le nom de l\'espace de travail',
    addWorkspaceUsers: 'Ajouter des utilisateurs à l\'espace de travail',
    addWorkspaceUsersInfo: 'Ajoutez des utilisateurs à votre espace de travail, attribuez des autorisations à chacun et partagez tous les projets dans cet espace de travail avec eux.',
    chooseAWorkspace: 'Choisissez un espace de travail',
    createWorkspace: 'Créer un espace de travail',
    featurePage: {
      description: 'Les espaces de travail vous permettent d\'organiser des projets et de collaborer en toute transparence avec les membres de l\'équipe au sein d\'un environnement concentré.',
      details: [
        {
          content: 'Créez des espaces de travail distincts pour différents types de projets, tels que les jeux, l\'écriture et plus encore. Chaque espace de travail garde vos projets organisés et spécifiques au contexte.',
          title: 'Espaces de travail sur mesure pour chaque projet'
        },
        {
          content: 'Invitez les membres de l\'équipe à collaborer dans des espaces de travail spécifiques. Attribuez des rôles et des autorisations pour contrôler l\'accès, en veillant à ce que tous les membres disposent des informations dont ils ont besoin.',
          title: 'Support de collaboration'
        },
        {
          content: 'Personnalisez votre espace de travail avec des thèmes sombres ou clairs. Basculez facilement entre eux à l\'aide du bouton de basculement des thèmes, améliorant ainsi votre productivité et votre confort.',
          title: 'Thèmes personnalisables'
        }
      ],
      key: 'workspaces'
    },
    permissions: 'Autorisations',
    toCreateProjectsIn: 'pour créer des projets'
  },

};
