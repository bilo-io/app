
import { ITranslation } from '.';

export const de: ITranslation = {
  account: {
    billing: 'Abrechnung',
    chooseTheme: 'Farbthema auswählen',
    dark: 'Dunkel',
    email: 'E-Mail',
    features: 'Funktionen',
    light: 'Hell',
    name: 'Name',
    profile: 'Profil',
    settingExplorerAutoExpand: 'Ordner im Explorer automatisch für jede Funktion erweitern',
    settingExplorerEditOnSelect: 'Editor automatisch öffnen beim Auswählen eines Elements im Explorer',
    settingNavbarExpanded: 'Navigationsleiste erweitern',
    settingPickLanguage: 'Sprache wählen',
    settingPickTheme: 'Thema wählen',
    settingPlayMusicOnStartup: 'Musik beim Projektstart abspielen',
    settingShowClock: 'Uhr anzeigen',
    signOut: 'Abmelden',
    subscription: 'Abonnement',
    title: 'Konto',
  },

  ai: {
    featurePage: {
      description: 'KI-generierter Inhalt beschleunigt Ihren kreativen Arbeitsablauf und hilft Ihnen, hochwertige Medienressourcen effizient zu produzieren.',
      details: [
        {
          content: 'Nutzen Sie fortschrittliche KI-Modelle, um schnell hochwertige Textinhalte zu erstellen, Ihren Schreibprozess zu verbessern und Kreativität zu fördern.',
          title: 'KI-gestützte Texterstellung'
        },
        {
          content: 'Verwandeln Sie Textanweisungen mit KI in beeindruckende Bilder, sparen Sie Zeit und steigern Sie Ihre kreative Leistung.',
          title: 'Innovative KI-Bilderstellung'
        },
        {
          content: 'Erstellen Sie Audioinhalte, einschließlich Sprachaufnahmen und Soundeffekten, mit KI und optimieren Sie so Ihren Audioproduktions-Workflow.',
          title: 'KI-gesteuerte Audioproduktion'
        },
        {
          content: 'Erstellen Sie komplexe visuelle Erzählungen mit KI-generierten Videos und machen Sie die Videoproduktion effizienter und zugänglicher.',
          title: 'KI-Videoerstellung'
        },
        {
          content: 'Erstellen Sie detaillierte 3D-Modelle aus Textbeschreibungen mithilfe von KI und erwecken Sie Ihre Charaktere und Umgebungen mühelos zum Leben.',
          title: 'KI-generierte 3D-Modelle'
        }
      ],
      key: 'ai'
    }

  },

  auth: {
    acceptTerms: 'Nutzungsbedingungen akzeptieren',
    alreadyHaveAccount: 'Haben Sie bereits ein Konto?',
    changeUser: 'Benutzer ändern',
    dontHaveAccount: 'Haben Sie kein Konto?',
    logIn: 'Anmelden',
    logOut: 'Abmelden',
    signInWith: (provider) => `Anmelden mit ${provider}`,
    signOut: 'Abmelden',
    signUp: 'Registrieren',
    singleSignOn: 'Single Sign-On',
    welcomeHeading: 'Willkommen',
    welcomeSentence: 'Willkommen auf unserer Plattform.'
  },

  blueprints: {
    description: 'Ein Satz von Dokumentenvorlagen, um die Erstellung eines Dokuments zu beschleunigen',
    title: 'Vorlagen',
  },

  characters: {
    description: 'Erstellen und bearbeiten Sie Charaktere für die Verwendung in "Dialogen" usw.',
    docs: `
# Vision Studio | Charaktere

Die **Charaktere**-Funktion in Vision Studio ermöglicht es Benutzern, detaillierte Charakterprofile für verschiedene Medienprojekte zu erstellen und zu verwalten. Egal, ob Sie Charaktere für Spiele, Filme oder Romane entwickeln, diese Funktion bietet umfassende Werkzeuge zur Definition von Persönlichkeiten, Hintergründen, Merkmalen und mehr.

## Funktionsübersicht

Die Charaktere-Funktion ist strukturiert, um die Organisation und Produktivität während des gesamten Charaktererstellungsprozesses zu verbessern.

### Explorer

Die Explorer-Ansicht listet alle Charakterprofile innerhalb des Projekts auf, kategorisiert in Ordner wie "Hauptcharaktere", "Nebencharaktere" und "NPCs".

### Leere Ansicht

Beim Betreten der Charaktere-Funktion sehen die Benutzer eine übersichtliche Benutzeroberfläche mit den wesentlichen Werkzeugen:

- **Start-Tab**: Bietet Einführungshandbücher und Tutorials für neue Benutzer.
- **FAQs-Tab**: Beantwortet häufig gestellte Fragen zur Erstellung und Verwaltung von Charakteren.
- **Videos-Tab**: Enthält Videotutorials zur Demonstration von Charaktererstellungstechniken.
- **Dokumente-Tab**: Bietet Dokumentationen und Vorlagen für Charakterprofile und -attribute.
- **Export-Tab**: Ermöglicht den Export von Charakterprofilen in den Formaten JSON, CSV und PDF.

### Inhaltsansicht

Das Auswählen eines Charakterprofils aus dem Explorer füllt die Inhaltsansicht. Hier können Benutzer detaillierte Charakterinformationen anzeigen und bearbeiten:

- **Aktionsleiste**: Bietet Optionen zum Bearbeiten, Duplizieren, Speichern und Löschen von Charakterprofilen.
- **Werkzeugleiste**: Bietet Tabs wie "Bearbeiten", "KI" und "Import", um Charakterdetails zu konfigurieren und zu verbessern.
- **Vorschau**: Ermöglicht Benutzern, Charakterprofile und Änderungen vor der endgültigen Speicherung anzuzeigen.

### Funktionswerkzeuge

Das Funktionswerkzeuge-Panel bietet erweiterte Funktionen zur Erstellung und Verwaltung von Charakterprofilen:

- **Erstellen/Bearbeiten-Tab**: Ermöglicht es Benutzern, Charakterattribute mit dem \`ICharacter\`-Schema zu definieren und Demografie, Merkmale, Hintergründe und mehr anzugeben.
- **KI-Tab**: Nutzt KI-Werkzeuge zur Generierung von Charakterprofilen basierend auf festgelegten Kriterien und Themen.
- **Import-Tab**: Erleichtert den Import von Charakterprofilen aus externen Quellen im JSON-Format.

## Importe & Exporte

Die Charaktere-Funktion unterstützt nahtlose Import- und Exportmöglichkeiten für effiziente Zusammenarbeit und Projektmanagement:

### Importe

Benutzer können Charakterprofile und -attribute im JSON-Format importieren, um Kompatibilität und Datenintegrität zu gewährleisten.

### Exporte

Charakterprofile können in verschiedenen Formaten exportiert werden:
- JSON
- CSV
- PDF

Der Export-Tab in der Leeren Ansicht ermöglicht das Exportieren ganzer Sammlungen oder Untergruppen von Charakterprofilen für Freigabe- und Archivierungszwecke.

## Erstellen und Verwalten von Charakterprofilen

### Neue Charaktere erstellen

Um ein neues Charakterprofil zu erstellen, navigieren Sie zum "Start"-Tab und klicken auf den großen blauen runden Knopf mit einem +. Diese Aktion öffnet das "Charakterwerkzeuge"-Panel, in dem Benutzer Demografie, Merkmale und Hintergründe definieren können.

### Charakterdetails bearbeiten

Das Bearbeiten von Charakterprofilen ermöglicht es Benutzern, Demografie, Merkmale, Hintergründe und andere Attribute mithilfe des "Bearbeiten"-Tabs im Funktionswerkzeuge-Panel zu ändern.

### KI-gestützte Charaktergenerierung

Der "KI"-Tab im "Charakterwerkzeuge"-Panel nutzt maschinelle Lernalgorithmen, um Charakterprofile basierend auf benutzerdefinierten Parametern und Themen vorzuschlagen.

### Charakterprofile importieren und exportieren

Verwenden Sie den "Import"-Tab, um Charakterprofile im JSON-Format aus externen Quellen zu importieren. Der "Export"-Tab bietet Optionen zum Exportieren von Charakterprofilen in den Formaten JSON, CSV oder PDF für Freigabe- und Zusammenarbeitszwecke.

## FAQs

Hier sind einige häufig gestellte Fragen zur **Charaktere**-Funktion:

1. **Wie erstelle ich ein neues Charakterprofil?**
   - Navigieren Sie zum "Start"-Tab und klicken Sie auf den großen blauen runden Knopf mit einem +, um das "Charakterwerkzeuge"-Panel zu öffnen. Definieren Sie die notwendigen Demografie, Merkmale und Hintergründe.

2. **Kann ich Charakterprofile aus anderen Projekten importieren?**
   - Ja, verwenden Sie den "Import"-Tab, um Charakterprofile im JSON-Format aus externen Quellen zu importieren.

3. **Welche Exportformate werden für Charakterprofile unterstützt?**
   - Charakterprofile können in den Formaten JSON, CSV und PDF exportiert werden, um Kompatibilität und Zusammenarbeit zu gewährleisten.

4. **Wie unterstützt der KI-Tab bei der Generierung von Charakterprofilen?**
   - Der KI-Tab nutzt maschinelles Lernen, um Charakterprofile basierend auf benutzerdefinierten Themen und Attributen vorzuschlagen.

5. **Gibt es eine Begrenzung für die Anzahl der Charakterprofile, die ich erstellen kann?**
   - Die Anzahl der Charakterprofile kann je nach Ihrem Abonnementplan variieren.

6. **Kann ich Charakterprofile vor der endgültigen Speicherung anzeigen?**
   - Ja, verwenden Sie die "Vorschau"-Option in der Aktionsleiste, um Charakterprofile und Änderungen anzuzeigen.

7. **Welche Arten von Medienprojekten können von der Charaktere-Funktion profitieren?**
   - Vision Studio unterstützt die Charaktererstellung für Spiele, Filme, Romane und andere Medienprojekte, die detaillierte Charakterprofile erfordern.

8. **Kann ich mit Teammitgliedern an Charakterprofilen zusammenarbeiten?**
   - Ja, laden Sie Teammitglieder in Ihren Arbeitsbereich ein, um gemeinsam Charakterprofile zu erstellen und zu verwalten.

9. **Gibt es vordefinierte Vorlagen für häufige Charakterprofile?**
   - Ja, erkunden Sie den "Dokumente"-Tab in der Leeren Ansicht für Vorlagen und Richtlinien zur Erstellung von Charakterprofilen.

10. **Wie kann ich ein Charakterprofil aus meinem Projekt löschen?**
    - Wählen Sie das Charakterprofil in der Explorer-Ansicht aus und verwenden Sie die "Löschen"-Option in der Aktionsleiste. Bestätigen Sie das Löschen im erscheinenden Modalfenster.

## Anhang
  `,
    faqs: [
      {
        answer: 'Das Charakter-Panel bietet KI-gestützte Charaktergenerierung, einschließlich Attribute, Konzeptkunst, Hintergrundgeschichte, Demografie, Zugehörigkeit und mehr, speziell für das Spieldesign.',
        question: 'Welche Funktionen bietet das Charakter-Panel für das Spieldesign?',
      },
      {
        answer: 'Die KI hilft, indem sie Attribute vorschlägt, Konzeptkunst basierend auf Beschreibungen generiert, überzeugende Hintergrundgeschichten erstellt und Demografie und Zugehörigkeiten festlegt, was den Charakterdesignprozess rationalisiert.',
        question: 'Wie unterstützt die KI bei der Charaktergenerierung?',
      },
      {
        answer: 'Absolut. Während die KI eine Grundlage bietet, haben Sie die Flexibilität, jeden Aspekt der Charaktere anzupassen, um sicherzustellen, dass sie perfekt zu Ihrer Spielvision passen.',
        question: 'Kann ich die generierten Charaktere anpassen?',
      },
      {
        answer: 'Ja, das Charakter-Panel integriert sich nahtlos mit dem Dialog-Panel und nutzt Charakterinformationen, um den Dialogerstellungsprozess zu optimieren und zu verbessern.',
        question: 'Gibt es eine Integration mit anderen Panels, wie Dialoge?',
      },
      {
        answer: 'Ja, Sie können Charakterprofile in verschiedenen Formaten exportieren, was es einfach macht, sie in andere Aspekte Ihres Spielentwicklungs-Workflows zu integrieren.',
        question: 'Kann ich Charakterprofile für die externe Nutzung exportieren?',
      },
      {
        answer: 'Sie können Demografie, Hintergrundgeschichten, Fähigkeiten, Fertigkeiten und Persönlichkeitsmerkmale für jeden Charakter angeben.',
        question: '--- Welche Details kann ich für einen Charakter angeben?',
      },
      {
        answer: 'Ja, Sie können Konzeptkunst hochladen und texturierte 3D-Modelle für Ihre Charaktere erstellen.',
        question: 'Kann ich Konzeptkunst für Charaktere hochladen?',
      },
      {
        answer: 'Charaktere können mithilfe der durchsuchbaren Liste im Explorer mit benutzerdefinierten Ordnern organisiert werden.',
        question: 'Wie kann ich meine Charaktere organisieren?',
      },
      {
        answer: 'Ja, Sie können KI-Tools verwenden, um Charakterprofile und Hintergrundgeschichten zu generieren.',
        question: 'Kann ich Charakterprofile mit KI generieren?',
      },
      {
        answer: 'Charaktere können im PDF-, Docx- und 3DModel-Format mit Texturen exportiert werden.',
        question: 'Welche Exportformate sind für Charaktere verfügbar?',
      },
      {
        answer: 'Ja, Sie können Mitarbeiter mit spezifischen Berechtigungen einladen, an der Charaktererstellung zu arbeiten.',
        question: 'Kann ich mit anderen an der Charaktererstellung zusammenarbeiten?',
      },
      {
        answer: 'Ja, es gibt Vorlagen und Richtlinien, die Ihnen helfen, detaillierte Charakterprofile zu erstellen.',
        question: 'Gibt es Vorlagen für die Erstellung von Charakteren?',
      },
      {
        answer: 'Wählen Sie den Charakter aus dem Explorer und verwenden Sie die "Charakter-Tools", um die Details zu bearbeiten.',
        question: 'Wie bearbeite ich einen bestehenden Charakter?',
      },
      {
        answer: 'Ja, Sie können ein Charakterprofil mithilfe der Option "Duplizieren" in der Aktionsleiste duplizieren.',
        question: 'Kann ich ein Charakterprofil duplizieren?',
      },
      {
        answer: 'Wählen Sie den Charakter aus und verwenden Sie die Option "Löschen" in der Aktionsleiste. Ein Bestätigungsfenster erscheint vor dem Löschen.',
        question: 'Wie lösche ich einen Charakter?',
      }
    ],
    featurePage: {
      description: 'Charaktere sind das Herz und die Seele Ihrer Geschichten, jeder mit einzigartigen Hintergründen, Persönlichkeiten und Handlungssträngen.',
      details: [
        {
          content: 'Erstellen Sie detaillierte Charakterprofile, einschließlich Namen, Hintergrundgeschichten, Persönlichkeiten und visuellen Darstellungen. Lassen Sie Ihre Charaktere mit Tiefe und Authentizität lebendig werden.',
          title: 'Tiefgehende Charaktererstellung',
        },
        {
          content: 'Erstellen Sie hochwertige Konzeptkunst basierend auf Ihren Charakterbeschreibungen. Visualisieren Sie Ihre Charaktere mit Präzision und verbessern Sie das Weltenbau-Erlebnis.',
          title: 'Atemberaubende Konzeptkunst',
        },
        {
          content: 'Experimentieren Sie mit der Erstellung von 3D-Modellen Ihrer Charaktere. Dies fügt Ihrem Storytelling eine neue Dimension hinzu und macht Ihre Charaktere noch fesselnder.',
          title: 'Immersive 3D-Modelle',
        }
      ],
      key: 'characters'
    },
    form: {
      abilities: 'Fähigkeiten',
      alias: 'Alias',
      background: 'Hintergrund',
      demongraphics: 'Demographie',
      education: 'Bildung',
      ethnicity: 'Ethnizität',
      firstName: 'Vorname',
      gender: 'Geschlecht',
      identity: 'Identität',
      images: 'Bilder',
      language: 'Sprache',
      lastName: 'Nachname',
      name: 'Name',
      nationality: 'Nationalität',
      occupation: 'Beruf',
      personality: 'Persönlichkeit',
      sexuality: 'Sexualität',
      skills: 'Fähigkeiten',
    },
    title: 'Charaktere',
  },

  common: {
    behaviour: 'Verhalten',
    description: 'Beschreibung',
    diet: 'Ernährung',
    folder: 'Ordner',
    folders: 'Ordner',
    fuelType: 'Kraftstoffart',
    galleryIds: 'Ordner',
    habitat: 'Lebensraum',
    lore: 'Überlieferung',
    material: 'Material',
    plot: 'Handlung',
    speed: 'Geschwindigkeit',

    abilities: 'Kompetenzen',
    abort: 'Abbrechen',
    add: 'Hinzufügen',
    addItem: (value) => `${value} hinzufügen`,
    admin: 'Admin',
    alias: 'Alias',
    art: 'Kunst',
    artConcept: 'Konzeptkunst',
    back: 'Zurück',
    background: 'Hintergrund',
    cancel: 'Abbrechen',
    close: 'Schließen',
    confirm: 'Bestätigen',
    continue: 'Weiter',
    create: 'Erstellen',
    createItem: (value) => `${value} erstellen`,
    daily: 'Täglich',
    day: 'Tag',
    days: 'Tage',
    delete: 'Löschen',
    deleteItem: (value) => `${value} löschen`,
    demographics: 'Demografie',
    docs: 'Dokumente',
    download: 'Download',
    duplicate: 'Duplizieren',
    edit: 'Bearbeiten',
    editItem: (value) => `${value} bearbeiten`,
    education: 'Bildung',
    ethnicity: 'Ethnizität',
    explorer: 'Explorer',
    export: 'Export',
    exports: 'Exporte',
    faqs: 'FAQs',
    features: 'Funktionen',
    firstName: 'Vorname',
    gender: 'Geschlecht',
    getStarted: 'Loslegen',
    hi: 'Hi',
    hour: 'Stunde',
    hourly: 'Stündlich',
    hours: 'Stunden',
    identity: 'Identität',
    images: 'Bilder',
    import: 'Import',
    imports: 'Importe',
    itemExplorer: (value) => `Explorer ${value}`,
    itemPreview: (value) => `Vorschau ${value}`,
    itemTools: (value) => `Werkzeuge ${value}`,
    language: 'Sprache',
    lastName: 'Nachname',
    legal: 'Rechtliches',
    minute: 'Minute',
    minutely: 'Minütlich',
    minutes: 'Minuten',
    month: 'Monat',
    monthly: 'Monatlich',
    months: 'Monate',
    name: 'Name',
    nationality: 'Nationalität',
    needHelp: 'Brauchen Sie Hilfe',
    next: 'Weiter',
    occupation: 'Beruf',
    overview: 'Übersicht',
    personality: 'Persönlichkeit',
    preview: 'Vorschau',
    pricing: 'Preise',
    recentItems: (items: string) => `Kürzliche ${items}`,
    save: 'Speichern',
    search: 'Suchen',
    searchResource: (resource) => `${resource} suchen`,
    settings: 'Einstellungen',
    sexuality: 'Sexualität',
    skills: 'Fähigkeiten',
    tools: 'Werkzeuge',
    webApp: 'App',
    webSite: 'Webseite',
    week: 'Woche',
    weekly: 'Wöchentlich',
    weeks: 'Wochen',
    year: 'Jahr',
    yearly: 'Jährlich',
    years: 'Jahre',

  },

  components: {
    confirmActionHeading: (action: string, resource: string) => `${resource} ${action}`,
    confirmActionOnItem: (action: string, resource: string) => `Sind Sie sicher, dass Sie diese ${resource} ${action} möchten?`,
    confirmActionOnItemDescription: (primary: string, secondary: string) => `Drücken Sie "${primary}", um fortzufahren, oder "${secondary}", um abzubrechen.`,
    featureGuideWelcomeP1: (featureName: string) => `Willkommen bei der Funktion *${featureName}*.`,
    featureGuideWelcomeP2: (featureName: string) => `Hier können Sie entweder eine neue *${featureName}* erstellen oder eine vorhandene bearbeiten.`,
    featureGuideWelcomeP3: (featureName: string) => `Jede gespeicherte *${featureName}* ist im "Explorer" links sichtbar.`,
    sidebarClose: 'Seitenleiste schließen',
  },

  controls: {
    featurePage: {
      description: 'Die Steuerungen bieten die Werkzeuge zur Verwaltung der interaktiven Elemente innerhalb Ihrer Projekte und gewährleisten ein reibungsloses und ansprechendes Benutzererlebnis.',
      details: [
        {
          content: 'Implementieren Sie Steuerungsschemata, die auf große Plattformen wie PlayStation, Xbox und Nintendo Switch zugeschnitten sind, um ein konsistentes Benutzererlebnis zu gewährleisten.',
          title: 'Plattformspezifische Steuerungen',
        },
        {
          content: 'Greifen Sie auf eine Sammlung vorgefertigter Steuerungsschemata zu, um Ihr Projekt zu starten, und passen Sie sie nach Bedarf an, um Feinabstimmungen vorzunehmen.',
          title: 'Umfangreiche Voreinstellungsbibliothek',
        },
        {
          content: 'Erstellen und verwalten Sie benutzerdefinierte Steuerungsschemata, indem Sie sie in Ordnern organisieren, um einfachen Zugriff und kontextspezifische Verwendung, wie \'Kampf\' vs. \'Erkundung\', zu ermöglichen.',
          title: 'Organisierte Steuerungsschemata',
        },
      ],
      key: 'controls',
    }
  },

  creatures: {
    featurePage: {
      description: 'Kreaturen sind alle Tiere oder nicht-humanoiden Charaktere, die Ihre Geschichten bewohnen und Ihrem Universum Leben und Vielfalt verleihen.',
      details: [
        {
          content: 'Erstellen Sie detaillierte und fantasievolle Designs für Ihre Kreaturen, die sich nahtlos in Ihre Welt einfügen.',
          title: 'Einzigartige Kreaturendesigns',
        },
        {
          content: 'Definieren Sie das Verhalten, die Lebensräume und die ökologischen Rollen Ihrer Kreaturen, um Ihre Welt immersiver und realistischer zu gestalten.',
          title: 'Verhalten und Ökologie',
        },
        {
          content: 'Integrieren Sie magische und mythische Kreaturen in Ihre Geschichten, jede mit ihrer eigenen Überlieferung und mystischen Fähigkeiten.',
          title: 'Magische und Mythische Kreaturen',
        }
      ],
      key: 'creatures',
    }

  },

  dashboard: {
    addItem: 'Dokument hinzufügen',
    addProject: 'Projekt hinzufügen',
    contentRating: 'Inhaltsbewertung',
    description: 'Dokumente erstellen, bearbeiten und durchsuchen.',
    devTechnology: 'Entwicklungstechnologie',
    projectArt: 'Projektkunst',
    projectArtDescription: 'Konzeptkunst für das Projekt, die eine Vorschau darauf bietet, worum es in diesem Projekt geht',
    projectFeatures: 'Projektmerkmale',
    projectFeaturesDescription: 'Verwalten Sie die Funktionen Ihres Projekts und aktivieren Sie nach Belieben die verschiedenen Funktionen, die Vision bietet, je nachdem, was zu Ihrem Projekt passt. Sie können Funktionen auch deaktivieren, ohne die zugrunde liegenden Ressourcen zu beeinträchtigen, sodass Sie niemals versehentlich etwas löschen.',
    projectInfo: 'Projektinfo',
    projectInfoDescription: 'Bearbeiten Sie die Metainformationen Ihres Projekts, einschließlich der Inhaltsbewertung und des Veröffentlichungsdatums sowie der Entwicklungstechnologie und der Zielplattformen für Ihr Projekt.',
    projects: '',
    releaseDate: 'Veröffentlichungsdatum',
    tableHeaders: {
      lastUpdated: 'Aktualisiert',
      projectName: 'Projektname',
      sections: 'Abschnitte',
    },
    targetPlatform: 'Zielplattform',
    technology: 'Technologie',
    title: 'Dashboard',
    usersWithAccess: 'Benutzer mit Zugriff',
    viewMore: 'Mehr anzeigen'
  },

  dialogues: {
    featurePage: {
      description: 'Dialoge bringen Ihre Charaktere zum Leben und ermöglichen reiche und ansprechende Interaktionen zwischen ihnen.',
      details: [
        {
          content: 'Erstellen und verwalten Sie Dialoge zwischen Charakteren mit einem benutzerfreundlichen Editor, um reibungslose und ansprechende Interaktionen zu gewährleisten.',
          title: 'Intuitive Dialogerstellung',
        },
        {
          content: 'Erstellen Sie verzweigte Dialogbäume, um verschiedene Gesprächswege und -ergebnisse zu erkunden, und verleihen Sie den Charakterinteraktionen Tiefe.',
          title: 'Dynamische Dialogbäume',
        },
        {
          content: 'Integrieren Sie Sprachaufnahmeskripte oder Audiodateien, um die Immersion und den Realismus Ihrer Dialoge zu verbessern.',
          title: 'Nahtlose Sprachintegration',
        },
      ],
      key: 'dialogues',
    }

  },

  documents: {
    description: '',
    featurePage: {
      description: 'Dokumente sind Ihre Hauptwerkzeuge zum Schreiben und Organisieren Ihres Inhalts, mit Unterstützung für verschiedene Formate.',
      details: [
        {
          content: 'Verwenden Sie einen leistungsstarken Texteditor mit umfangreichen Formatierungsoptionen, um detaillierte und optisch ansprechende Dokumente zu erstellen.',
          title: 'Erweiterte Textbearbeitung'
        },
        {
          content: 'Halten Sie Ihre Dokumente ordentlich in Ordnern und Unterordnern organisiert, sodass sie leicht zugänglich und verwaltbar sind.',
          title: 'Effiziente Dokumentenorganisation'
        },
        {
          content: 'Importieren und exportieren Sie Dokumente in verschiedenen Formaten, einschließlich PDF, Markdown und Docx, um Kompatibilität und einfache Weitergabe zu gewährleisten.',
          title: 'Vielseitiger Import & Export'
        }
      ],
      key: 'documents',
    },
    title: 'Dokumente',
  },

  features: {
    '3D': '3D',
    account: 'Konto',
    admin: 'Admin',
    ai: 'KI',
    ai3D: 'KI 3D',
    aiAudio: 'KI-Audio',
    aiExamples: 'KI-Beispiele',
    aiImages: 'KI-Bilder',
    aiText: 'KI-Text',
    aiVideo: 'KI-Video',
    asset: 'Ressource',
    assets: 'Ressourcen',
    audio: 'Audio',
    character: 'Charakter',
    characters: 'Charaktere',
    control: 'Steuerung',
    controls: 'Steuerungen',
    creature: 'Kreatur',
    creatures: 'Kreaturen',
    dashboard: 'Dashboard',
    dialogue: 'Dialog',
    dialogues: 'Dialoge',
    document: 'Dokument',
    documents: 'Dokumente',
    examples: 'Beispiele',
    graph: 'Grafik',
    graphs: 'Grafiken',
    home: 'Startseite',
    homePage: 'Startseite',
    illustration: 'Illustration',
    illustrations: 'Illustrationen',
    images: 'Bilder',
    location: 'Ort',
    locations: 'Orte',
    media: 'Medien',
    multimedia: 'Multimedia',
    object: 'Objekt',
    objects: 'Objekte',
    part: 'Teil',
    parts: 'Teile',
    project: 'Projekt',
    projects: 'Projekte',
    quest: 'Aufgabe',
    quests: 'Aufgaben',
    segment: 'Segment',
    segments: 'Segmente',
    setting: 'Einstellung',
    settings: 'Einstellungen',
    storie: 'Geschichte',
    stories: 'Geschichten',
    subscription: 'Abonnement',
    subscriptions: 'Abonnements',
    text: 'Text',
    transport: 'Transport',
    transports: 'Transporte',
    user: 'Benutzer',
    users: 'Benutzer',
    vehicle: 'Fahrzeug',
    vehicles: 'Fahrzeuge',
    video: 'Video',
    workspace: 'Arbeitsbereich',
    workspaces: 'Arbeitsbereiche',
  },

  galleries: {
    character: {
      description: 'Generieren und bearbeiten Sie Charaktere für die Verwendung in \'Dialogen\', usw.',
      title: 'Charaktergalerie'
    },
    description: 'Ein Ort, um visuelle Konzepte zu brainstormen und in Galeriesammlungen zu platzieren.',
    image: {
      description: 'Generieren Sie individuelle, KI-unterstützte Bilder',
      enterPrompt: 'Geben Sie eine Anweisung ein',
      pickStyle: 'Wählen Sie einen Kunststil',
      title: 'Bildergalerie',
    },
    sound: {
      description: 'Erstellen Sie KI-generierte Soundclips',
      title: 'Soundgalerie'
    },
    title: 'Galerien',
    video: {
      description: 'Erzeugen Sie Videos aus Text mit KI',
      title: 'Videogalerie'
    }

  },

  generators: {
    description: 'Die Suite von zugrunde liegenden KI-Generatoren, die diese Erfahrung ermöglichen',
    title: 'Generatoren',
  },

  graphs: {
    featurePage: {
      description: 'Graphen ermöglichen es Ihnen, Daten und Beziehungen innerhalb Ihrer Projekte visuell darzustellen und bieten Klarheit und Einsicht.',
      details: [
        {
          content: 'Erstellen und passen Sie Diagramme an, um komplexe Daten und Beziehungen visuell darzustellen, und verbessern Sie so das Verständnis und die Einsicht.',
          title: 'Umfassende Diagrammerstellung',
        },
        {
          content: 'Verwenden Sie Diagramme, um Charakterbeziehungen, Handlungspunkte und andere Story-Elemente zu veranschaulichen und komplexe Informationen zugänglicher zu machen.',
          title: 'Effektive Datenvisualisierung',
        },
        {
          content: 'Erstellen Sie interaktive Diagramme, die es den Benutzern ermöglichen, die Daten zu erkunden und sich damit auseinanderzusetzen, und so ein tieferes Verständnis Ihres Projekts zu vermitteln.',
          title: 'Interaktive Diagramme',
        },
      ],
      key: 'graphs',
    }

  },

  landing: {
    allFeatures: 'Alle Funktionen',
    getAccess: 'Zugriff erhalten',
    sections: [],

    watchVideo: 'Video ansehen',
    // sections: [
    //   {
    //     heading: 'Vision',
    //     subHeading: 'Willkommen bei Vision - der KI-unterstützten SaaS-Plattform für mühelose Dokumentenerstellung!',
    //     cta: 'Zur Dashboard gehen',
    //   },
    //   {
    //     heading: 'Von KI unterstützte Texterstellung',
    //     subHeading: 'Erleben Sie die nächste Stufe der Dokumentenerstellung mit Vision Unsere fortschrittliche KI-Technologie ermöglicht Ihnen die Erstellung einer Vielzahl von Dokumenten, darunter Spieldesign-Dokumente, Lebensläufe, Essays, Mietverträge, Vorschläge und mehr. Verabschieden Sie sich von manueller Formatierung und mühsamem Schreiben - Vision übernimmt das für Sie.',
    //   },
    //   {
    //     heading: 'Minimalistischer Editor',
    //     subHeading: 'Mit unserem generativen KI-unterstützten Dokumenteneditor können Sie professionell aussehende Dokumente in Minuten erstellen. Geben Sie einfach Ihren Inhalt ein, und lassen Sie unsere intelligenten Algorithmen den Rest erledigen. Konzentrieren Sie sich auf Ihre Ideen, während Vision Layout, Design und Formatierung übernimmt, um sicherzustellen, dass Ihre Dokumente herausstechen.',
    //   },
    //   {
    //     heading: 'Exporte',
    //     subHeading: 'Vision bietet nahtlose Exportoptionen für Ihre Bequemlichkeit. Exportieren Sie Ihre Dokumente in verschiedene Formate, einschließlich PDF, DOCX, PPTX und sogar direkt in Google Docs. Teilen und arbeiten Sie mühelos mit Kollegen und Kunden zusammen - jederzeit und überall.',
    //   },
    //   {
    //     heading: 'Nutzung von KI',
    //     subHeading: 'Bei Vision lernt und verbessert unsere bahnbrechende künstliche Intelligenz ständig dazu. Je mehr Sie die Plattform nutzen, desto intelligenter wird sie, passt sich Ihrem einzigartigen Schreibstil und Ihren Vorlieben an. Bleiben Sie mit unserer modernen KI-Technologie auf dem neuesten Stand.',
    //   },
    //   {
    //     heading: 'Kontakt aufnehmen?',
    //     subHeading: 'Bereit, die Zukunft der Dokumentenerstellung zu erleben? Melden Sie sich jetzt für den Frühzugriff an und gehören Sie zu den ersten, die das Potenzial von Vision freischalten und die Art und Weise, wie Sie mit Dokumenten arbeiten, revolutionieren.',
    //     cta: 'Los geht\'s',
    //   },
    // ],
  },

  locations: {
    featurePage: {
      description: 'Orte bieten die Einstellungen für Ihre Geschichten und lassen Ihre Welten mit reichen Details und visuellen Elementen lebendig werden.',
      details: [
        {
          content: 'Definieren und beschreiben Sie Standorte mit reichhaltigem Text und Bildern, um immersive Umgebungen zu schaffen, die Ihre Geschichte bereichern.',
          title: 'Detaillierte Standorterstellung'
        },
        {
          content: 'Visualisieren Sie Ihre Standorte und deren Verbindungen mit interaktiven Karten, um Ihr Geschichtsuniversum leichter zu verstehen und zu navigieren.',
          title: 'Interaktive Kartenintegration'
        },
        {
          content: 'Fügen Sie historische und lorebasierte Informationen zu Ihren Standorten hinzu, um Tiefe und Kontext zu schaffen, die Ihre Erzählung bereichern.',
          title: 'Reiche Standortgeschichte'
        }
      ],
      key: 'locations'
    }

  },

  objects: {
    featurePage: {
      description: 'Objekte sind unbelebte Gegenstände, die in Ihren Geschichten verwendet, gesammelt oder gehandelt werden können, wie Waffen, Ausrüstung, Beute und Währungen.',
      details: [
        {
          content: 'Erstellen Sie ausführliche Beschreibungen für jedes Objekt, einschließlich ihrer Verwendungen, Ursprünge und Bedeutung in Ihrer Geschichte.',
          title: 'Detaillierte Objektbeschreibungen'
        },
        {
          content: 'Organisieren und verwalten Sie die Objekte in Ihrer Geschichte mühelos und verfolgen Sie deren Verfügbarkeit und Verwendung.',
          title: 'Inventarverwaltung'
        },
        {
          content: 'Entwickeln Sie ein robustes Handelssystem für Ihre Objekte und verbessern Sie den wirtschaftlichen Aspekt Ihrer Geschichte.',
          title: 'Handel und Wirtschaft'
        }
      ],
      key: 'objects'
    }

  },

  pricing: {

  },

  projects: {
    addProject: 'Projekt hinzufügen',
    createProject: 'Projekt erstellen',
    editor: {
      linkCopiedToClipboard: 'Link in die Zwischenablage kopiert'
    },
    featurePage: {
      description: 'Projekte dienen als Grundlage für Ihre kreative Vision, indem sie alle verwandten Inhalte und Ideen an einem Ort zusammenführen.',
      details: [
        {
          content: 'Erstellen und verwalten Sie mehrere Projekte, von denen jedes einer bestimmten kreativen Idee gewidmet ist, wie ein Spiel, eine Fernsehserie oder ein Graphic Novel. Halten Sie Ihre Ideen organisiert und fokussiert.',
          title: 'Vielfältiges Projektmanagement'
        },
        {
          content: 'Passen Sie jedes Projekt mit einzigartigen Funktionen an, die seinen Anforderungen entsprechen. Fügen Sie Funktionen jederzeit hinzu oder entfernen Sie sie, ohne Daten zu verlieren, um Flexibilität und Anpassungsfähigkeit zu gewährleisten.',
          title: 'Anpassbare Funktionen'
        },
        {
          content: 'Übertragen Sie Projekte problemlos zwischen Arbeitsbereichen oder Konten mithilfe der Import-/Export-Funktionalität. Bewahren Sie die Integrität Ihrer Daten während der Übergänge.',
          title: 'Mühelose Importe & Exporte'
        }
      ],
      key: 'projects'
    },
    generating: {

    },
    importProject: 'Projekt importieren',
    newProject: 'Neues Projekt',
    setup: {
      generate: 'Generieren',
      next: 'Weiter',
      projectName: 'Wie lautet der Name Ihres Projekts?',
      projectPrompt: 'Worum geht es in Ihrem Projekt?'
    }
  },

  transports: {
    featurePage: {
      description: 'Transportmittel sind jede Art von Reise durch Raum und Zeit, einschließlich Fahrzeuge, Wurmlöcher, Portalgewehre, Eisenbahnen und Zeitmaschinen.',
      details: [
        {
          content: 'Erkunden Sie eine Vielzahl von Transportmitteln, von traditionellen Fahrzeugen bis hin zu futuristischen Wurmlöchern und Zeitmaschinen.',
          title: 'Innovative Transportmittel'
        },
        {
          content: 'Entdecken Sie die neuesten Fortschritte in der Transporttechnologie, von Hyperloop-Systemen bis hin zu Teleportationsgeräten.',
          title: 'Fortschrittliche Technologie'
        },
        {
          content: 'Erstellen Sie atemberaubende visuelle Darstellungen von Transportmethoden, um Ihr Publikum in das Erlebnis der Raum-Zeit-Reise zu versetzen.',
          title: 'Immersive Visuals'
        }
      ],
      key: 'transports'
    }

  },

  version: {
    currentVersion: 'Ihre aktuelle Version ist:',
    getVersion: 'Jetzt holen!',
    header: 'Vision Update',
    newVersion: 'Neue Version',
    updateNow: 'Jetzt aktualisieren',
  },

  workspaces: {
    addWorkspace: 'Arbeitsbereich hinzufügen',
    addWorkspaceImage: 'Arbeitsbereichsbild hinzufügen',
    addWorkspaceName: 'Arbeitsbereichsnamen hinzufügen',
    addWorkspaceUsers: 'Arbeitsbereichsbenutzer hinzufügen',
    addWorkspaceUsersInfo: 'Fügen Sie Benutzer zu Ihrem Arbeitsbereich hinzu, weisen Sie jedem Berechtigungen zu und teilen Sie alle Projekte in diesem Arbeitsbereich mit diesen.',
    chooseAWorkspace: 'Wähle einen Arbeitsbereich',
    createWorkspace: 'Arbeitsbereich erstellen',
    featurePage: {
      description: 'Arbeitsbereiche ermöglichen es Ihnen, Projekte zu organisieren und nahtlos mit Teammitgliedern in einer konzentrierten Umgebung zusammenzuarbeiten.',
      details: [
        {
          content: 'Erstellen Sie separate Arbeitsbereiche für verschiedene Arten von Projekten, wie Spiele, Schreiben und mehr. Jeder Arbeitsbereich hält Ihre Projekte organisiert und kontextspezifisch.',
          title: 'Maßgeschneiderte Arbeitsbereiche für jedes Projekt'
        },
        {
          content: 'Laden Sie Teammitglieder ein, innerhalb bestimmter Arbeitsbereiche zusammenzuarbeiten. Weisen Sie Rollen und Berechtigungen zu, um den Zugriff zu steuern und sicherzustellen, dass alle Mitglieder die benötigten Informationen haben.',
          title: 'Zusammenarbeitsunterstützung'
        },
        {
          content: 'Personalisieren Sie Ihren Arbeitsbereich mit dunklen oder hellen Themen. Wechseln Sie einfach zwischen ihnen mit der Themenumschalttaste, um Ihre Produktivität und Ihren Komfort zu verbessern.',
          title: 'Anpassbare Themen'

        }
      ],
      key: 'workspaces'
    },
    permissions: 'Berechtigungen',
    toCreateProjectsIn: 'um Projekte zu erstellen'

  },
};
