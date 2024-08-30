import { QNA } from 'models/misc';

import { af } from './af'; // Afrikaans
import { de } from './de'; // German
import { en } from './en'; // English
import { es } from './es'; // Spanish
import { fr } from './fr'; // French
import { hr } from './hr'; // Croatian
import { it } from './it'; // Italian
import { jp } from './jp'; // Japanese
import { nl } from './nl'; // Dutch
// import { pt } from './pt'; // Portugese

// TODO:
// - Russian
// - Swedish
// - Norwegian
// - Danish
// - Portuguese
// - Swahili

const translations = {
    af,
    de,
    en,
    es,
    fr,
    hr,
    it,
    jp,
    nl,
    //   pt
};

export type SupportedLanguages = 'en' | 'de' | 'hr' | 'fr' | 'af' | 'nl' | 'it' | 'es' | 'jp'

export type ITranslations = {
    // [key in SupportedLanguages]: {
    [key in SupportedLanguages]: ITranslation
}

export interface ITranslation {
    common: {
        abort: string,
        add: string,
        addItem: (value: string) => string,
        save: string,
        dateOfBirth?: string,
        duplicate: string,
        preview: string,
        explorer: string,
        tools: string,
        itemPreview: (value: string) => string,
        itemExplorer: (value: string) => string,
        itemTools: (value: string) => string,
        art?: string,
        artConcept?: string,
        admin: string,
        settings: string,
        import: string,
        imports: string,
        errorTitle?: string,
        errorSummary?: string,
        export: string,
        exports: string,
        pricing: string,
        docs: string,
        legal: string,
        faqs: string,
        features: string,
        back: string,
        cancel: string,
        close: string,
        confirm: string,
        continue: string,
        download?: string,
        create?: string;
        createItem?: (value: string) => string,
        delete: string;
        demographics?: string,
        deleteItem: (value: string) => string,
        edit: string,
        editItem: (value: string) => string,
        recentItems?: (items: string) => string,
        getStarted: string,
        hi?: string,
        overview: string,
        minute: string,
        minutes: string,
        minutely: string,
        hour: string,
        hours: string,
        hourly: string,
        day: string,
        days: string,
        daily: string,
        week: string,
        weeks: string,
        weekly: string,
        month: string,
        months: string,
        monthly: string,
        year: string,
        years: string,
        yearly: string,
        needHelp?: string,
        contactSupport?: string,
        next: string,
        search?: string;
        searchResource?: (resource: string) => string;
        warning?: string;
        warningRequireProject?: string;
        warningRequireWorkspace?: string;
        webApp?: string;
        webSite?: string;

        alias?: string,
        name?: string,
        firstName?: string,
        lastName?: string,
        background?: string,
        gender?: string,
        personality?: string,
        identity?: string,
        sexuality?: string,
        skills?: string,
        abilities?: string,
        nationality?: string,
        education?: string,
        ethnicity?: string,
        occupation?: string,
        language?: string,
        images?: string,
        demongraphics?: string,

        behaviour?: string,
        description?: string,
        diet?: string,
        galleryIds?: string,
        folder?: string,
        folders?: string,
        fuelType?: string,
        habitat?: string,
        lore?: string,
        material?: string,
        plot?: string,
        speed?: string,
    },

    version?: {
        header: string,
        newVersion: string,
        getVersion: string,
        currentVersion: string,
        updateNow: string,
    },

    components?: {
        featureGuideWelcomeP1: (featureName: string) => string,
        featureGuideWelcomeP2: (featureName: string) => string,
        featureGuideWelcomeP3: (featureName: string) => string,
        confirmActionHeading: (action: string, resource: string) => string,
        confirmActionOnItem?: (action: string, resource: string) => string,
        confirmActionOnItemDescription?: (primary: string, secondary: string) => string,
        sidebarClose: string,
    },

    auth: {
        acceptTerms: string;
        singleSignOn: string;
        signInWith: (provider: string) => string;
        welcomeHeading: string;
        welcomeSentence: string;
        logIn: string,
        logOut: string,
        signUp: string,
        signOut: string,
        dontHaveAccount: string,
        alreadyHaveAccount: string,
        changeUser?: string,
    },

    // #region ACCOUNT PAGES
    ai: {
        title?: string,
        description?: string,
        docs?: string,
        faqs?: QNA[],
        featurePage?: any,
    },

    account: {
        title: string;
        name: string;
        email: string;
        signOut: string;
        chooseTheme: string;
        // Sidebar
        profile?: string,
        subscription?: string,
        features?: string,
        billing?: string,
        finances?: string,
        authentication?: string,
        paymentMethods?: string,
        // Profile
        settingShowClock?: string,
        settingPlayMusicOnStartup?: string,
        settingExplorerEditOnSelect?: string,
        settingExplorerAutoExpand?: string,
        settingNavbarExpanded?: string,
        settingPickLanguage?: string,
        settingPickTheme?: string,
        dark?: string,
        light?: string,
    },

    features: {
        admin?: string,
        ai: string,
        aiText: string,
        text: string,
        aiImages: string,
        images: string,
        aiAudio: string,
        audio: string,
        aiVideo: string,
        video: string,
        ai3D: string,
        ['3D']: string,
        aiExamples: string,
        examples: string,
        account: string,
        asset: string,
        assets: string,
        character: string,
        characters: string,
        control: string,
        controls: string,
        creature: string,
        creatures: string,
        dashboard: string,
        dialogue: string,
        dialogues: string,
        document: string,
        documents: string,
        graph: string,
        graphs: string,
        home: string,
        homePage: string,
        location: string,
        locations: string,
        media?: string,
        multimedia?: string,
        quest?: string,
        quests?: string,
        object: string,
        objects: string,
        project: string,
        projects: string,
        part?: string,
        parts?: string,
        segment?: string,
        segments?: string,
        storie?: string,
        stories?: string,
        subscription: string,
        subscriptions: string,
        illustration: string,
        illustrations: string,
        transport: string,
        transports: string,
        setting: string,
        settings: string,
        vehicle: string,
        vehicles: string,
        workspace: string,
        workspaces: string,
        user: string,
        users: string,
    },

    workspaces: {
        chooseAWorkspace: string,
        toCreateProjectsIn: string,
        addWorkspace: string,
        createWorkspace: string,
        addWorkspaceName: string,
        addWorkspaceImage: string,
        addWorkspaceUsers: string,
        addWorkspaceUsersInfo: string,
        permissions: string,
        featurePage?: any,
    },

    projects: {
        addProject: string,
        createProject: string,
        importProject: string,
        newProject: string,
        setup: {
            projectName: string;
            projectPrompt: string;
            next: string;
            generate: string;
        },
        generating: {

        },
        editor: {
            linkCopiedToClipboard: string;
        },
        featurePage?: any,
    },

    dashboard: {
        title: string;
        description: string;
        tableHeaders: {
            projectName: string;
            lastUpdated: string;
            sections: string;
        },
        projects: string;
        addProject: string;
        addItem: string;
        targetPlatform: string,
        technology: string,
        devTechnology: string,
        releaseDate: string,
        contentRating: string,
        projectInfo: string,
        projectInfoDescription: string,
        projectFeatures: string,
        projectFeaturesDescription: string,
        projectArt: string,
        projectArtDescription: string,
        viewMore: string,
        usersWithAccess: string,
        // Documentation
        docs?: string,
        faqs?: QNA[],
        featurePage?: any,
    },

    // #endregion

    // #endregion

    // #region FEATURES
    characters: {
        title: string,
        description: string,
        docs?: string,
        faqs?: QNA[],
        featurePage?: any,
        // Form
        form: {
            alias: string,
            name: string,
            firstName: string,
            lastName: string,
            background: string,
            gender: string,
            personality: string,
            identity: string,
            sexuality: string,
            skills: string,
            abilities: string,
            nationality: string,
            education: string,
            ethnicity: string,
            occupation: string,
            language: string,
            images: string,
            demongraphics: string,
        },
    },

    creatures: {
        title?: string,
        description?: string,
        docs?: string,
        faqs?: QNA[],
        featurePage?: any,
    },

    controls: {
        title?: string,
        description?: string,
        docs?: string,
        faqs?: QNA[],
        featurePage?: any,
    },

    dialogues: {
        title?: string,
        description?: string,
        docs?: string,
        faqs?: QNA[],
        featurePage?: any,
    },

    documents: {
        title: string,
        description: string,
        faqs?: QNA[],
        docs?: string,
        featurePage?: any,
    },

    graphs: {
        title?: string,
        description?: string,
        docs?: string,
        faqs?: QNA[],
        featurePage?: any,
    },

    locations: {
        title?: string,
        description?: string,
        docs?: string,
        faqs?: QNA[],
        featurePage?: any,
    },

    objects: {
        title?: string,
        description?: string,
        docs?: string,
        faqs?: QNA[],
        featurePage?: any,
    },

    transports: {
        title?: string,
        description?: string,
        docs?: string,
        faqs?: QNA[],
        featurePage?: any,
    },
    // #endregion

    // #region DEPRECATED
    galleries: {
        title: string;
        description: string;
        image: {
            title: string;
            description: string;
            enterPrompt: string;
            pickStyle: string;
        },
        sound: {
            title: string;
            description: string;
        },
        video: {
            title: string;
            description: string;
        },
        character: {
            title: string;
            description: string;
        }
    },

    generators: {
        title: string;
        description: string;
        generate?: string;
        prompt?: string;
        video?: {
            promptDescription: string;
        },
        image?: {
            promptDescription: string;
        },
        sound?: {
            promptDescription: string;
        },
        character?: {
            promptDescription: string;
        }
    },

    blueprints: {
        title: string;
        description: string;
    },
    // #endregion

    // public pages
    landing: {
        allFeatures: string,
        getAccess: string,
        watchVideo: string,
        sections: {
            heading?: string;
            subHeading?: string;
            cta?: string;
        }[]
    },

    pricing: {
        // free: string,
        // pro: string,
        // personal: string,
        // enterprise: string,
        // payAsYouGo: string,
        // payAsYouGoEnterpriseTier: string,
    }
}

export default translations;
