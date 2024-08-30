import { ITranslation } from '.';

export const hr: ITranslation = {
  account: {
    billing: 'Račun',
    chooseTheme: 'Odaberi temu',
    dark: 'Tamno',
    email: 'Email',
    features: 'Značajke',
    light: 'Svijetlo',
    name: 'Ime',
    profile: 'Profil',
    settingExplorerAutoExpand: 'Automatsko proširivanje mapa u Istraživaču za svaku značajku',
    settingExplorerEditOnSelect: 'Automatski otvori uređivač prilikom odabira stavke u Istraživaču',
    settingNavbarExpanded: 'Proširi navigaciju',
    settingPickLanguage: 'Odaberi jezik',
    settingPickTheme: 'Odaberi temu',
    settingPlayMusicOnStartup: 'Pusti glazbu pri pokretanju projekta',
    settingShowClock: 'Prikaži sat',
    signOut: 'Odjava',
    subscription: 'Pretplata',
    title: 'Račun',
  },

  ai: {
    featurePage: {
      description: 'AI-generirani sadržaj ubrzava vaš kreativni radni proces, pomažući vam učinkovito proizvoditi visokokvalitetne medijske resurse.',
      details: [
        {
          content: 'Iskoristite napredne modele umjetne inteligencije za brzu generaciju visokokvalitetnog tekstualnog sadržaja, poboljšavajući vaš proces pisanja i potičući kreativnost.',
          title: 'Generacija teksta potaknuta AI-jem'
        },
        {
          content: 'Transformirajte tekstualne upute u impresivne slike koristeći AI, štedeći vrijeme i povećavajući vašu kreativnu produktivnost.',
          title: 'Inovativno stvaranje slika pomoću AI-a'
        },
        {
          content: 'Generirajte audio sadržaj, uključujući glumačke izvedbe i zvučne efekte, uz pomoć AI-a, optimizirajući vaš radni proces produkcije zvuka.',
          title: 'Produkcija zvuka vođena AI-jem'
        },
        {
          content: 'Proizvodite kompleksne vizualne narative pomoću AI-generiranih videozapisa, čime činite stvaranje videozapisa učinkovitijim i dostupnijim.',
          title: 'Generacija videozapisa pomoću AI-a'
        },
        {
          content: 'Stvarajte detaljne 3D modele na temelju tekstualnih opisa uz pomoć AI-a, lako oživljavajući vaše likove i okruženja.',
          title: 'AI-generirani 3D modeli'
        }
      ],
      key: 'ai'
    }
  },

  auth: {
    acceptTerms: 'Prihvati uvjete',
    alreadyHaveAccount: 'Već imate račun?',
    changeUser: 'Promijeni korisnika',
    dontHaveAccount: 'Nemate račun?',
    logIn: 'Prijavi se',
    logOut: 'Odjavi se',
    signInWith: (provider) => `Prijavi se putem ${provider}`,
    signOut: 'Odjava',
    signUp: 'Registracija',

    singleSignOn: 'Jednostruka prijava',
    welcomeHeading: 'Dobrodošli',
    welcomeSentence: 'Dobrodošli na našu platformu.'
  },

  blueprints: {
    description: 'Skup predložaka dokumenata za brže stvaranje dokumenta',
    title: 'Nacrtni planovi',
  },

  characters: {
    description: 'Generirajte i uređujte likove za upotrebu u "Dijalozima", itd.',
    docs: `
# Vision Studio | Likovi

Značajka **Likovi** u Vision Studiju omogućuje korisnicima stvaranje i upravljanje detaljnim profilima likova za različite medijske projekte. Bez obzira radite li na likovima za igre, filmove ili romane, ova značajka pruža sveobuhvatne alate za definiranje osobnosti, pozadina, osobina i više.

## Struktura značajke

Značajka Likovi strukturirana je kako bi unaprijedila organizaciju i produktivnost tijekom procesa stvaranja likova.

### Preglednik

Preglednik prikazuje sve profile likova u projektu, razvrstane u mape poput "Glavni likovi", "Sporedni likovi" i "NPC-ovi".

### Prazan pogled

Pri ulasku u značajku Likovi, korisnici se susreću s pojednostavljenim sučeljem s osnovnim alatima:

- **Započnite tablica**: nudi uvodne vodiče i tutorijale za nove korisnike.
- **FAQ tablica**: pruža odgovore na uobičajena pitanja o stvaranju i upravljanju likovima.
- **Video tablica**: sadrži video tutorijale koji demonstriraju tehnike stvaranja likova.
- **Dokumentacija tablica**: nudi dokumentaciju i predloške za profile likova i njihove atribute.
- **Izvozi tablica**: omogućuje izvoz profila likova u JSON, CSV i PDF formatima.

### Prikaz sadržaja

Odabirom profila lika iz preglednika, popunjava se prikaz sadržaja. Ovdje korisnici mogu pregledavati i uređivati detaljne informacije o liku:

- **Akcioni traka**: pruža opcije za uređivanje, dupliciranje, spremanje i brisanje profila likova.
- **Ploča alata**: nudi kartice poput "Uredi", "AI" i "Uvoz" za konfiguriranje i unapređivanje detalja likova.
- **Pregled**: omogućuje korisnicima pregled profila likova i modifikacija prije konačnog potvrđivanja promjena.

### Alati značajke

Ploča alata značajke pruža napredne funkcionalnosti za stvaranje i upravljanje profilima likova:

- **Tablica Stvori/Uredi**: omogućuje korisnicima definiranje atributa likova pomoću šeme \`ICharacter\`, specificirajući demografiju, osobine, pozadinu i više.
- **AI tablica**: koristi AI alate za generiranje profila likova na temelju određenih kriterija i tema.
- **Tablica Uvoza**: olakšava uvoz profila likova iz vanjskih izvora koristeći JSON format.

## Uvozi i izvozi

Značajka Likovi podržava jednostavne mogućnosti uvoza i izvoza za učinkovitu suradnju i upravljanje projektima:

### Uvozi

Korisnici mogu uvoziti profile likova i atribute koristeći JSON format, osiguravajući kompatibilnost i integritet podataka.

### Izvozi

Profili likova mogu se izvoziti u različitim formatima:
- JSON
- CSV
- PDF

Tablica Izvozi unutar Praznog pogleda omogućuje izvoz cijelih kolekcija ili podskupova profila likova za dijeljenje i arhiviranje.

## Stvaranje i upravljanje profilima likova

### Stvaranje novih likova

Za stvaranje novog profila lika, navigirajte do tablice "Započnite" i kliknite veliki plavi okrugli gumb s +. Ova radnja otvara "Alatke likova" ploču, omogućujući korisnicima definiranje demografije, osobina i pozadina.

### Uređivanje detalja likova

Uređivanje profila likova omogućuje korisnicima modificiranje demografije, osobina, pozadina i drugih atributa koristeći karticu "Uredi" u ploči alata značajke.

### AI podržano generiranje likova

Tablica "AI" u "Alatkama likova" koristi algoritme strojnog učenja za predlaganje profila likova na temelju korisnički definiranih parametara i tema.

### Uvoz i izvoz profila likova

Koristite tablicu "Uvoz" za uvoz profila likova u JSON formatu iz vanjskih izvora. Tablica "Izvoz" pruža opcije za izvoz profila likova u JSON, CSV ili PDF formate za dijeljenje i suradnju.

## Često postavljana pitanja

Evo nekoliko često postavljanih pitanja o značajci **Likovi**:

1. **Kako kreiram novi profil lika?**
   - Navigirajte do tablice "Započnite" i kliknite veliki plavi okrugli gumb s + da biste otvorili "Alatke likova" ploču. Definirajte potrebnu demografiju, osobine i pozadine.

2. **Mogu li uvoziti profile likova iz drugih projekata?**
   - Da, koristite tablicu "Uvoz" za uvoz profila likova u JSON formatu iz vanjskih izvora.

3. **Koji su formati izvoza podržani za profile likova?**
   - Profili likova mogu se izvoziti u JSON, CSV i PDF formatima za kompatibilnost i suradnju.

4. **Kako tablica AI pomaže u generiranju profila likova?**
   - Tablica AI koristi strojno učenje za predlaganje profila likova na temelju korisnički definiranih tema i atributa.

5. **Postoji li ograničenje broja profila likova koje mogu kreirati?**
   - Broj profila likova može varirati ovisno o vašem planu pretplate.

6. **Mogu li pregledati profile likova prije konačnog potvrđivanja promjena?**
   - Da, koristite opciju "Pregled" u Akcionoj traci za vizualizaciju profila likova i modifikacija.

7. **Za koje medijske projekte mogu biti korisnički profilirani likovi?**
   - Vision Studio podržava stvaranje likova za igre, filmove, romane i druge medijske projekte koji zahtijevaju detaljne profile likova.

8. **Mogu li surađivati s članovima tima na profiliranju likova?**
   - Da, pozovite članove tima u svoj radni prostor kako biste surađivali na stvaranju i upravljanju profilima likova.

9. **Postoje li unaprijed definirani predlošci za uobičajene profile likova?**
   - Da, istražite tablicu "Dokumentacija" u Praznom pogledu za predloške i smjernice o stvaranju profilova likova.

10. **Kako mogu izbrisati profil lika iz svog projekta?**
    - Odaberite profil lika u pregledniku i koristite opciju "Izbriši" u Akcionoj traci. Potvrdite brisanje u modalnom prozoru koji se prikazuje.

## Dodatak
`,
    faqs: [
      {
        answer: 'Panel Likovi pruža generiranje likova s podrškom umjetne inteligencije, obuhvaćajući osobine, konceptualnu umjetnost, prošlost, demografiju, pripadnost i više, prilagođeno za dizajn igara.',
        question: 'Koje funkcionalnosti nudi panel Likovi za dizajn igara?'
      },
      {
        answer: 'Umjetna inteligencija doprinosi sugestijama atributa, generiranju konceptualne umjetnosti na temelju opisa, stvaranju privlačnih prošlosti te određivanju demografije i pripadnosti, što olakšava proces dizajniranja likova.',
        question: 'Kako umjetna inteligencija pomaže u generiranju likova?'
      },
      {
        answer: 'Apsolutno. Iako umjetna inteligencija pruža temelje, imate fleksibilnost prilagoditi svaki aspekt likova, osiguravajući savršeno usklađivanje s vizijom vaše igre.',
        question: 'Mogu li prilagoditi generirane likove?'
      },
      {
        answer: 'Da, panel Likovi se integrira besprijekorno s panelom Dijalozi, koristeći informacije o likovima za optimizaciju i poboljšanje procesa stvaranja dijaloga.',
        question: 'Postoji li integracija s drugim panelima, poput Dijaloga?'
      },
      {
        answer: 'Da, možete izvoziti profile likova u raznim formatima, što olakšava integraciju s drugim aspektima vašeg razvojnog procesa igre.',
        question: 'Mogu li izvoziti profile likova za vanjsku upotrebu?'
      },
      {
        answer: 'Možete specificirati demografiju, prošlost, vještine, sposobnosti i osobine ličnosti za svaki lik.',
        question: 'Koje detalje mogu specificirati za lika?'
      },
      {
        answer: 'Da, možete učitati konceptualnu umjetnost i generirati teksturirane 3D modele za svoje likove.',
        question: 'Mogu li učitati konceptualnu umjetnost za likove?'
      },
      {
        answer: 'Likove možete organizirati koristeći pretraživu listu u Pregledniku s prilagođenim mapama.',
        question: 'Kako mogu organizirati svoje likove?'
      },
      {
        answer: 'Da, možete koristiti alate umjetne inteligencije za generiranje profila likova i prošlosti.',
        question: 'Mogu li generirati profile likova koristeći umjetnu inteligenciju?'
      },
      {
        answer: 'Likovi se mogu izvoziti u formatima PDF, Docx i 3DModel s teksturama.',
        question: 'Koji su formati izvoza dostupni za likove?'
      },
      {
        answer: 'Da, možete pozvati suradnike s određenim ovlastima da rade na stvaranju likova.',
        question: 'Mogu li surađivati s drugima na stvaranju likova?'
      },
      {
        answer: 'Da, dostupni su predlošci i smjernice za pomoć pri izradi detaljnih profila likova.',
        question: 'Postoje li predlošci dostupni za izradu likova?'
      },
      {
        answer: 'Odaberite lika iz Preglednika i koristite "Alatke likova" za uređivanje njegovih detalja.',
        question: 'Kako uređujem postojećeg lika?'
      },
      {
        answer: 'Da, možete duplicirati profil lika koristeći opciju "Dupliciraj" u Akcionoj traci.',
        question: 'Mogu li duplicirati profil lika?'
      },
      {
        answer: 'Odaberite lika i koristite opciju "Izbriši" u Akcionoj traci. Prije brisanja pojavit će se potvrdni modal.',
        question: 'Kako brišem lika?'
      }
    ],
    featurePage: {
      description: 'Likovi su srce i duša vaših priča, svaki s jedinstvenim pozadinama, osobnostima i razvojnim lukovima.',
      details: [{
        content: 'Stvarajte detaljne profile likova, uključujući imena, povijesti, osobnosti i vizualne prikaze. Oživite svoje likove s dubinom i autentičnošću.',
        title: 'Dubinsko stvaranje likova',
      },
      {
        content: 'Generirajte visokokvalitetnu konceptnu umjetnost na temelju opisa vaših likova. Vizualizirajte svoje likove precizno, poboljšavajući iskustvo izgradnje svijeta.',
        title: 'Zapanjujuća konceptualna umjetnost',
      },
      {
        content: 'Izrađujte eksperimentalne 3D modele vaših likova. To dodaje novu dimenziju vašem pripovijedanju, čineći vaše likove još privlačnijima.',
        title: 'Imerzivni 3D modeli',
      }
      ],
      key: 'characters'
    },
    form: {
      abilities: 'Sposobnosti',
      alias: 'Pseudonim',
      background: 'Pozadina',
      demongraphics: 'Demografski podaci',
      education: 'Obrazovanje',
      ethnicity: 'Etnička pripadnost',
      firstName: 'Ime',
      gender: 'Spol',
      identity: 'Identitet',
      images: 'Slike',
      language: 'Jezik',
      lastName: 'Prezime',
      name: 'Ime',
      nationality: 'Nacionalnost',
      occupation: 'Zanimanje',
      personality: 'Osobnost',
      sexuality: 'Seksualnost',
      skills: 'Vještine',
    },
    title: 'Likovi',

  },

  common: {
    behaviour: 'Ponašanje',
    description: 'Opis',
    diet: 'Prehrana',
    folder: 'Mapa',
    folders: 'Mape',
    galleryIds: 'Mape',
    fuelType: 'Vrsta goriva',
    habitat: 'Stanište',
    lore: 'Predaja',
    material: 'Materijal',
    plot: 'Radnja',
    speed: 'Brzina',

    abilities: 'Sposobnosti',
    abort: 'Prekini',
    add: 'Dodaj',
    addItem: (value: string) => `Dodaj ${value}`,
    admin: 'Admin',
    alias: 'Alias',
    art: 'Umjetnost',
    artConcept: 'Konceptna umjetnost',
    back: 'Natrag',
    background: 'Pozadina',
    cancel: 'Odustani',
    close: 'Zatvori',
    confirm: 'Potvrdi',
    contactSupport: 'Kontaktirajte podršku',
    continue: 'Nastavi',
    create: 'Stvori',
    createItem: (value: string) => `Stvori ${value}`,
    daily: 'Svakodnevno',
    day: 'Dan',
    days: 'Dani',
    delete: 'Obriši',
    deleteItem: (value: string) => `Obriši ${value}`,
    demographics: 'Demografija',
    docs: 'Dokumenti',
    download: 'Preuzimanje',
    duplicate: 'Dupliciraj',
    edit: 'Uredi',
    editItem: (value: string) => `Uredi ${value}`,
    education: 'Obrazovanje',
    ethnicity: 'Etnička pripadnost',
    explorer: 'Istraživač',
    export: 'Izvoz',
    exports: 'Izvozi',
    faqs: 'FAQs',
    features: 'Značajke',
    firstName: 'Ime',
    gender: 'Spol',
    getStarted: 'Počni',
    hi: 'Pozdrav',
    hour: 'Sat',
    hourly: 'Svakih sat vremena',
    hours: 'Sati',
    identity: 'Identitet',
    images: 'Slike',
    import: 'Uvoz',
    imports: 'Uvozi',
    itemExplorer: (value: string) => `Istraži ${value}`,
    itemPreview: (value: string) => `Pregledaj ${value}`,
    itemTools: (value: string) => `Alati ${value}`,
    language: 'Jezik',
    lastName: 'Prezime',
    legal: 'Pravno',
    minute: 'Minuta',
    minutely: 'Minutno',
    minutes: 'Minute',
    month: 'Mjesec',
    monthly: 'Mjesečno',
    months: 'Mjeseci',
    name: 'Ime',
    nationality: 'Nacionalnost',
    needHelp: 'Treba vam pomoć',
    next: 'Sljedeće',
    occupation: 'Zanimanje',
    overview: 'Pregled',
    personality: 'Osobnost',
    preview: 'Pregled',
    pricing: 'Cjenik',
    recentItems: (items: string) => `Nedavni ${items}`,
    save: 'Spremi',
    search: 'Pretraži',
    searchResource: (resource) => `Pretraži ${resource}`,
    settings: 'Postavke',
    sexuality: 'Seksualnost',
    skills: 'Vještine',
    tools: 'Alati',
    webApp: 'Aplikacija',
    webSite: 'Stranica',
    week: 'Tjedan',
    weekly: 'Tjedno',
    weeks: 'Tjedni',
    year: 'Godina',
    yearly: 'Godišnje',
    years: 'Godine',
  },

  components: {
    confirmActionHeading: (action: string, resource: string) => `${action} ${resource}`,
    confirmActionOnItem: (action: string, resource: string) => `Jeste li sigurni da želite ${action} ovaj ${resource}?.`,
    confirmActionOnItemDescription: (primary: string, secondary: string) => `Pritisnite "${primary}" za nastavak ili "${secondary}" za otkazivanje.`,
    featureGuideWelcomeP1: (featureName: string) => `Dobrodošli u "${featureName}" značajku.`,
    featureGuideWelcomeP2: (featureName: string) => `Ovdje možete stvoriti novi "${featureName}" ili urediti postojeći.`,
    featureGuideWelcomeP3: (featureName: string) => `Svaki spremljeni "${featureName}" vidljiv je u "Istraživaču" s lijeve strane.`,
    sidebarClose: 'Zatvori bočnu traku',
  },

  controls: {
    featurePage: {
      description: 'Kontrole pružaju alate za upravljanje interaktivnim elementima unutar vaših projekata, osiguravajući glatka i angažirajuća korisnička iskustva.',
      details: [{
        content: 'Implementirajte kontrolne sheme prilagođene za glavne platforme poput PlayStationa, Xboxa i Nintendo Switcha, osiguravajući dosljedno korisničko iskustvo.',
        title: 'Platformski specifične kontrole',
      },
      {
        content: 'Pristupite kolekciji prekonfiguriranih kontrolnih shema za brzi početak vašeg projekta i prilagodite ih prema potrebi za fino podešavanje.',
        title: 'Obimna biblioteka predefiniranih kontrolnih shema',
      },
      {
        content: 'Stvarajte i upravljajte prilagođenim kontrolnim shemama, organizirajući ih u mape za jednostavan pristup i upotrebu specifičnu za kontekst, kao što su "borba" naspram "istraživanja".',
        title: 'Organizirane kontrolne sheme',
      },
      ],
      key: 'controls',
    }
  },

  creatures: {
    featurePage: {
      description: 'Stvorenja su životinje ili ne-humanoidni likovi koji nastanjuju vaše priče, dodajući život i raznolikost vašem svijetu.',
      details: [
        {
          content: 'Kreirajte detaljne i maštovite dizajne za svoja stvorenja, osiguravajući da se besprijekorno uklope u vaš svijet.',
          title: 'Jedinstveni dizajni stvorenja'
        },
        {
          content: 'Definirajte ponašanje, staništa i ekološke uloge svojih stvorenja kako biste svoj svijet učinili uronjenijim i realističnijim.',
          title: 'Ponašanje i ekologija'
        },
        {
          content: 'U svoje priče uključite magijska i mitska stvorenja, svako sa vlastitom tradicijom i mističnim sposobnostima.',
          title: 'Magijska i mitska stvorenja'
        }
      ],
      key: 'creatures'
    }

  },

  dashboard: {
    addItem: 'Dodaj stavku',
    addProject: 'Dodaj projekt',
    contentRating: 'Ocjena sadržaja',
    description: 'Stvarajte, uređujte i pregledavajte dokumente.',
    devTechnology: 'Razvojna tehnologija',
    projectArt: 'Konceptna umjetnost',
    projectArtDescription: 'Različita umjetnička djela iz različitih zbirki vaših projekata u različitim dostupnim značajkama Visiona.',
    projectFeatures: 'Značajke projekta',
    projectFeaturesDescription: 'Značajke se mogu dodavati i uklanjati iz projekata proizvoljno, bez utjecaja na temeljne resurse.',
    projectInfo: 'Informacije o projektu',
    projectInfoDescription: 'Izmijenite javne informacije o projektu',
    projects: '',
    releaseDate: 'Datum izlaska',
    tableHeaders: {
      lastUpdated: 'Ažurirano',
      projectName: 'Naziv projekta',
      sections: 'Sekcije',
    },
    targetPlatform: 'Ciljana platforma',
    technology: 'Tehnologija',
    title: 'Nadzorna ploča',
    usersWithAccess: 'Korisnici s pristupom',
    viewMore: 'Pogledaj više',

  },

  dialogues: {
    featurePage: {
      description: 'Dijalozi oživljavaju vaše likove, omogućujući bogate i angažirajuće interakcije između njih.',
      details: [{
        content: 'Stvarajte i upravljajte dijalozima između likova s jednostavnim urednikom, osiguravajući glatke i angažirajuće interakcije.',
        title: 'Intuitivno stvaranje dijaloga',
      },
      {
        content: 'Stvarajte granajuća stabla dijaloga za istraživanje različitih putova razgovora i ishoda, dodajući dubinu interakcijama likova.',
        title: 'Dinamična stabla dijaloga',
      },
      {
        content: 'Integrirajte skripte glasovnog glume ili audio datoteke kako biste poboljšali uronjenost i realnost vaših dijaloga.',
        title: 'Besprijekorna integracija glasa',
      },
      ],
      key: 'dialogues',
    }
  },

  documents: {
    description: '',
    featurePage: {
      description: 'Dokumenti su ključni tekstualni elementi vaših projekata, pružajući strukturu, informacije i kontekst.',
      details: [{
        content: 'Stvarajte i uređujte tekstualne dokumente kao što su skripte, opisi svijeta, povijesni zapisi i više, kako biste obogatili vašu priču.',
        title: 'Stvaranje tekstualnih dokumenata'
      },
      {
        content: 'Organizirajte dokumente u mape i kategorije radi lakšeg pristupa i upravljanja, čineći vaše projektne materijale preglednijima.',
        title: 'Organizacija i upravljanje'
      },
      {
        content: 'Uvezite i izvezite dokumente u različitim formatima kako biste omogućili suradnju i dijeljenje s ostalim članovima tima ili vanjskim suradnicima.',
        title: 'Suradnja i dijeljenje'
      },
      ],
      key: 'documents',
    },
    title: '',
  },

  features: {
    '3D': '3D',
    account: 'Račun',
    ai: 'Umjetna inteligencija',
    ai3D: 'AI 3D',
    aiAudio: 'AI Audio',
    aiExamples: 'AI Primjeri',
    aiImages: 'AI Slike',
    aiText: 'AI Tekst',
    aiVideo: 'AI Video',
    asset: 'Sredstvo',
    assets: 'Sredstva',
    audio: 'Audio',
    character: 'Lik',
    characters: 'Likovi',
    control: 'Kontrola',
    controls: 'Kontrole',
    creature: 'Stvorenje',
    creatures: 'Stvorenja',
    dashboard: 'Nadzorna ploča',
    dialogue: 'Dijalog',
    dialogues: 'Dijalozi',
    document: 'Dokument',
    documents: 'Dokumenti',
    examples: 'Primjeri',
    graph: 'Graf',
    graphs: 'Grafovi',
    home: 'Početna',
    homePage: 'Početna stranica',
    illustration: 'Ilustracija',
    illustrations: 'Ilustracije',
    images: 'Slike',
    location: 'Lokacija',
    locations: 'Lokacije',
    media: 'Mediji',
    multimedia: 'Multimedija',
    object: 'Objekt',
    objects: 'Objekti',
    project: 'Projekt',
    projects: 'Projekti',
    quest: 'Zadatak',
    quests: 'Zadaci',
    setting: 'Postavka',
    settings: 'Postavke',
    subscription: 'Pretplata',
    subscriptions: 'Pretplate',
    text: 'Tekst',
    transport: 'Prijevoz',
    transports: 'Prijevozi',
    user: 'Korisnik',
    users: 'Korisnici',
    vehicle: 'Vozilo',
    vehicles: 'Vozila',
    video: 'Video',
    workspace: 'Radni prostor',
    workspaces: 'Radni prostori',

  },

  galleries: {
    character: {
      description: 'Generirajte i uređujte likove za upotrebu u "Dijalozima", itd.',
      title: 'Likovi'
    },
    description: 'Mjesto za brainstorming vizualnih koncepata i njihovo smještanje u galerijske kolekcije.',
    image: {
      description: 'Generirajte prilagođene slike s naprednom AI tehnologijom',
      enterPrompt: 'Unesite upit',
      pickStyle: 'Odaberite stil umjetnosti',
      title: 'Slike',
    },
    sound: {
      description: 'Stvarajte zvučne zapise generirane pomoću AI tehnologije',
      title: 'Zvukovi'
    },
    title: 'Galerije',
    video: {
      description: 'Kreirajte videozapise iz teksta uz pomoć AI-a',
      title: 'Videozapisi'
    }
  },

  generators: {
    description: 'Skup temeljnih AI generatora koji omogućuju ovaj doživljaj',
    title: 'Generatori',
  },

  graphs: {
    featurePage: {
      description: 'Grafikoni vam omogućuju vizualno prikazivanje podataka i veza unutar vaših projekata, pružajući jasnoću i uvid.',
      details: [{
        content: 'Izgradite i prilagodite grafikone za vizualno prikazivanje složenih podataka i veza, poboljšavajući razumijevanje i uvid.',
        title: 'Sveobuhvatno stvaranje grafikona',
      },
      {
        content: 'Upotrijebite grafikone kako biste ilustrirali odnose likova, ključne točke zapleta i druge elemente priče, čineći složene informacije dostupnijima.',
        title: 'Učinkovito vizualiziranje podataka',
      },
      {
        content: 'Stvarajte interaktivne grafikone koji korisnicima omogućuju istraživanje i angažman s podacima, pružajući dublje razumijevanje vašeg projekta.',
        title: 'Interaktivni grafikoni',
      },
      ],
      key: 'graphs',
    }
  },

  landing: {
    allFeatures: 'Sve značajke',
    getAccess: 'Pristupite',
    sections: [],
    watchVideo: 'Pogledajte video',
  },

  locations: {
    featurePage: {
      description: 'Lokacije pružaju postavke za vaše priče, oživljavajući vaše svjetove s bogatim detaljima i vizualima.',
      details: [{
        content: 'Definirajte i opišite lokacije s bogatim tekstom i slikama kako biste stvorili uronjena okruženja koja obogaćuju vašu priču.',
        title: 'Detaljno stvaranje lokacija'
      },
      {
        content: 'Vizualizirajte vaše lokacije i njihove poveznice s interaktivnim kartama, olakšavajući razumijevanje i navigaciju svijetom vaše priče.',
        title: 'Integracija interaktivnih karata'
      },
      {
        content: 'Dodajte povijesne i lore-based informacije svojim lokacijama, pružajući dubinu i kontekst koji obogaćuju vaše pripovijedanje.',
        title: 'Bogata lokacijska legenda'
      }
      ],
      key: 'locations'
    }
  },

  objects: {
    featurePage: {
      description: 'Objekti su neživi predmeti koji se mogu koristiti, sakupljati ili trgovati u vašim pričama, poput oružja, opreme, plijena i valuta.',
      details: [{
        content: 'Stvarajte temeljite opise za svaki objekt, uključujući njihove svrhe, podrijetlo i značaj u vašoj priči.',
        title: 'Detaljni opisi objekata'
      },
      {
        content: 'Organizirajte i upravljajte objektima u svojoj priči s lakoćom, prateći njihovu dostupnost i upotrebu.',
        title: 'Upravljanje inventarom'
      },
      {
        content: 'Razvijte robusni sustav trgovanja za vaše objekte, unapređujući ekonomski aspekt vaše priče.',
        title: 'Trgovina i ekonomija'
      }
      ],
      key: 'objects'
    }
  },

  pricing: {

  },

  projects: {
    addProject: 'Dodaj projekt',
    createProject: 'Stvori projekt',
    editor: {
      linkCopiedToClipboard: 'Poveznica kopirana u međuspremnik'
    },
    featurePage: {
      description: 'Projekti služe kao temelj za vašu kreativnu viziju, čuvajući sve povezane sadržaje i ideje na jednom mjestu.',
      details: [
        {
          content: 'Stvarajte i upravljajte s više projekata, svaki posvećen određenoj kreativnoj ideji, kao što su igre, TV serije ili grafički romani. Održavajte svoje ideje organizirane i usmjerene.',
          title: 'Raznovrsno upravljanje projektima'
        },
        {
          content: 'Prilagodite svaki projekt jedinstvenim značajkama koje odgovaraju njegovim potrebama. Dodajte ili uklonite značajke u bilo kojem trenutku bez gubitka podataka, osiguravajući fleksibilnost i prilagodljivost.',
          title: 'Prilagodljive značajke'
        },
        {
          content: 'Lako prenosite projekte između radnih prostora ili računa pomoću funkcionalnosti uvoza/izvoza. Održavajte integritet svojih podataka tijekom prijelaza.',
          title: 'Jednostavan uvoz i izvoz'
        }
      ],
      key: 'projects'
    },
    generating: {

    },
    importProject: 'Uvezi projekt',
    newProject: 'Novi projekt',
    setup: {
      generate: 'Stvori',
      next: 'Sljedeće',
      projectName: 'Nazovite svoj projekt',
      projectPrompt: 'O čemu je vaš projekt?'
    }

  },

  transports: {
    featurePage: {
      description: 'Transporti su svaki način putovanja kroz prostor-vrijeme, uključujući vozila, crvotočine, portalne pištolje, željeznice i vremenske strojeve.',
      details: [
        {
          content: 'Istražite razne načine transporta, od tradicionalnih vozila do futurističkih crvotočina i vremenskih strojeva.',
          title: 'Inovativni Načini Transporta'
        },
        {
          content: 'Otkrijte najnovija dostignuća u transportnoj tehnologiji, od hyperloop sustava do uređaja za teleportaciju.',
          title: 'Napredna Tehnologija'
        },
        {
          content: 'Stvorite zadivljujuće vizuale metoda prijevoza kako biste uronili svoju publiku u iskustvo putovanja kroz prostor-vrijeme.',
          title: 'Upečatljive Vizualizacije'
        }
      ],
      key: 'transports'
    }

  },

  version: {
    currentVersion: 'Vaša trenutna verzija je:',
    getVersion: 'Nabavite je sada!',
    header: 'Ažuriranje Vizije',
    newVersion: 'Nova verzija',
    updateNow: 'Ažuriraj sada',
  },

  workspaces: {
    addWorkspace: 'Dodaj radni prostor',
    addWorkspaceImage: 'Dodaj sliku radnog prostora',
    addWorkspaceName: 'Dodaj ime radnog prostora',
    addWorkspaceUsers: 'Dodaj korisnike radnog prostora',
    addWorkspaceUsersInfo: 'Dodajte korisnike svom radnom prostoru, dodijelite dozvole za svaki i podijelite sve projekte u ovom radnom prostoru s njima.',
    chooseAWorkspace: 'Odaberite radni prostor',
    createWorkspace: 'Stvori radni prostor',
    featurePage: {
      description: 'Radni prostori omogućuju vam organiziranje projekata i besprijekornu suradnju s članovima tima unutar fokusiranog okruženja.',
      details: [
        {
          content: 'Kreirajte različite radne prostore za različite vrste projekata, kao što su igre, pisanje i slično. Svaki radni prostor održava vaše projekte organiziranim i specifičnim za kontekst.',
          title: 'Prilagođeni radni prostori za svaki projekt'
        },
        {
          content: 'Pozovite članove tima na suradnju unutar specifičnih radnih prostora. Dodijelite uloge i dozvole za kontrolu pristupa, osiguravajući da svi članovi imaju potrebne informacije.',
          title: 'Podrška za suradnju'
        },
        {
          content: 'Personalizirajte svoj radni prostor s tamnim ili svijetlim temama. Jednostavno se prebacujte između njih pomoću gumba za prebacivanje tema, poboljšavajući vašu produktivnost i udobnost.',
          title: 'Prilagodljive teme'
        }
      ],
      key: 'workspaces'
    },
    permissions: 'Dozvole',
    toCreateProjectsIn: 'za stvaranje projekata u'
  }

};
