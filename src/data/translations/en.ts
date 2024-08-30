/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ITranslation } from '.';

export const en: ITranslation = {
  account: {
    authentication: 'Authentication',
    billing: 'Billing',
    chooseTheme: 'Choose Theme',
    dark: 'Dark',
    email: 'Email',
    features: 'Features',
    finances: 'Finances',
    light: 'Light',
    name: 'Name',
    paymentMethods: 'Payment Methods',
    profile: 'Profile',
    settingExplorerAutoExpand: 'Automatically expand folders in the Explorer for each feature',
    settingExplorerEditOnSelect: 'Automatically open Editor when selecting an item in the Explorer',
    settingNavbarExpanded: 'Expand Navbar',
    settingPickLanguage: 'Choose Language',
    settingPickTheme: 'Choose Theme',
    settingPlayMusicOnStartup: 'Play Music on Project Startup',
    settingShowClock: 'Show Clock',
    signOut: 'Sign out',
    subscription: 'Subscription',
    title: 'Account'
  },

  ai: {
    featurePage: {
      description: 'AI-generated content accelerates your creative workflow, helping you produce high-quality media resources efficiently.',
      details: [
        {
          content: 'Leverage advanced AI models to generate high-quality text content quickly, enhancing your writing process and sparking creativity.',
          title: 'AI-Powered Text Generation'
        },
        {
          content: 'Transform text prompts into stunning images using AI, saving time and boosting your creative output.',
          title: 'Innovative AI Image Creation'
        },
        {
          content: 'Generate audio content, including voice acting and sound effects, with AI, streamlining your audio production workflow.',
          title: 'AI-Driven Audio Production'
        },
        {
          content: 'Produce complex visual narratives with AI-generated videos, making video creation more efficient and accessible.',
          title: 'AI Video Generation'
        },
        {
          content: 'Create detailed 3D models from text descriptions using AI, bringing your characters and environments to life with ease.',
          title: 'AI-Generated 3D Models'
        }
      ],
      key: 'ai'
    }

  },

  auth: {
    acceptTerms: 'Accept Terms',
    alreadyHaveAccount: 'Already have an account?',
    changeUser: 'Change user',
    dontHaveAccount: 'Don\'t have an account?',
    logIn: 'Log In',
    logOut: 'Log Out',
    signInWith: (provider) => `Sign in with ${provider}`,
    signOut: 'Sign Out',
    signUp: 'Sign Up',
    singleSignOn: 'Single Sign-On',
    welcomeHeading: 'Welcome',
    welcomeSentence: 'Welcome to our platform.'
  },

  blueprints: {
    description: 'A set of document templates to fast track creating a document',
    title: 'Blueprints'
  },

  characters: {

    description: 'Generate and edit characters to use in "Dialogues", etc.',
    docs: `
# Vision Studio | Characters

The **Characters** feature in Vision Studio allows users to create and manage detailed character profiles for various media projects. Whether you are developing characters for games, films, or novels, this feature provides comprehensive tools to define personalities, backgrounds, traits, and more.

## Feature Layout

The Characters feature is structured to enhance organization and productivity throughout the character creation process.

### Explorer

The Explorer view lists all character profiles within the project, categorized by folders such as "Main Characters," "Supporting Characters," and "NPCs."

### Empty View

Upon entering the Characters feature, users encounter a streamlined interface with essential tools:

- **Get Started Tab**: Offers introductory guides and tutorials for new users.
- **FAQs Tab**: Provides answers to common questions about creating and managing characters.
- **Videos Tab**: Contains video tutorials demonstrating character creation techniques.
- **Docs Tab**: Offers documentation and templates for character profiles and attributes.
- **Exports Tab**: Allows exporting character profiles in JSON, CSV, and PDF formats.

### Content View

Selecting a character profile from the Explorer populates the Content View. Here, users can view and edit detailed character information:

- **ActionBar**: Provides options to edit, duplicate, save, and delete character profiles.
- **Tools Panel**: Offers tabs such as "Edit," "AI," and "Import" for configuring and enhancing character details.
- **Preview**: Enables users to preview character profiles and modifications before finalizing changes.

### Feature Tools

The Feature Tools panel provides advanced functionalities for creating and managing character profiles:

- **Create/Edit Tab**: Allows users to define character attributes using the \`ICharacter\` schema, specifying demographics, traits, background, and more.
- **AI Tab**: Utilizes AI tools to generate character profiles based on specified criteria and themes.
- **Import Tab**: Facilitates importing character profiles from external sources using JSON format.

## Imports & Exports

The Characters feature supports seamless import and export capabilities for efficient collaboration and project management:

### Imports

Users can import character profiles and attributes using JSON format, ensuring compatibility and data integrity.

### Exports

Character profiles can be exported in various formats:
- JSON
- CSV
- PDF

The Exports tab within the Empty View allows exporting entire collections or subsets of character profiles for sharing and archival purposes.

## Creating and Managing Character Profiles

### Creating New Characters

To create a new character profile, navigate to the "Get Started" tab and click the big blue round button with a +. This action opens the "Character Tools" panel, allowing users to define demographics, traits, and backgrounds.

### Editing Character Details

Editing character profiles enables users to modify demographics, traits, backgrounds, and other attributes using the "Edit" tab in the Feature Tools panel.

### AI-Assisted Character Generation

The "AI" tab in the "Character Tools" panel utilizes machine learning algorithms to suggest character profiles based on user-defined parameters and themes.

### Importing and Exporting Character Profiles

Use the "Import" tab to import character profiles in JSON format from external sources. The "Export" tab provides options to export character profiles in JSON, CSV, or PDF formats for sharing and collaboration.

## FAQs

Here are some frequently asked questions about the **Characters** feature:

1. **How do I create a new character profile?**
   - Navigate to the "Get Started" tab and click the big blue round button with a + to open the "Character Tools" panel. Define the necessary demographics, traits, and backgrounds.

2. **Can I import character profiles from other projects?**
   - Yes, use the "Import" tab to import character profiles in JSON format from external sources.

3. **What export formats are supported for character profiles?**
   - Character profiles can be exported in JSON, CSV, and PDF formats for compatibility and collaboration.

4. **How does the AI tab assist in generating character profiles?**
   - The AI tab utilizes machine learning to suggest character profiles based on user-defined themes and attributes.

5. **Is there a limit to the number of character profiles I can create?**
   - The number of character profiles may vary based on your subscription plan.

6. **Can I preview character profiles before finalizing changes?**
   - Yes, use the "Preview" option in the ActionBar to visualize character profiles and modifications.

7. **What types of media projects can benefit from the Characters feature?**
   - Vision Studio supports character creation for games, films, novels, and other media projects requiring detailed character profiles.

8. **Can I collaborate with team members on character profiles?**
   - Yes, invite team members to your workspace to collaborate on creating and managing character profiles.

9. **Are there predefined templates for common character profiles?**
   - Yes, explore the "Docs" tab in the Empty View for templates and guidelines on creating character profiles.

10. **How can I delete a character profile from my project?**
    - Select the character profile in the Explorer view and use the "Delete" option in the ActionBar. Confirm deletion in the modal that appears.

## Appendix
`,
    faqs: [
      {
        answer: 'The Characters panel provides AI-powered character generation, encompassing attributes, concept art, backstory, demographics, affiliation, and more, tailored for game design.',
        question: 'What functionalities does the Characters panel offer for game design?'
      },
      {
        answer: 'The AI contributes by suggesting attributes, generating concept art based on descriptions, creating compelling backstories, and determining demographics and affiliations, streamlining the character design process.',
        question: 'How does the AI assist in character generation?'
      },
      {
        answer: 'Absolutely. While the AI provides a foundation, you have the flexibility to customize every aspect of the characters, ensuring they align perfectly with your game\'s vision.',
        question: 'Can I customize the generated characters?'
      },
      {
        answer: 'Yes, the Characters panel integrates seamlessly with the Dialogues panel, utilizing character information to streamline and enhance the dialogue creation process.',
        question: 'Is there integration with other panels, like Dialogues?'
      },
      {
        answer: 'Yes, you can export character profiles in various formats, making it easy to integrate them into other aspects of your game development workflow.',
        question: 'Can I export character profiles for external use?'
      },
      {
        answer: 'You can specify demographics, backstories, skills, abilities, and personality traits for each character.',
        question: '--- What details can I specify for a character?'
      },
      {
        answer: 'Yes, you can upload concept art and generate textured 3D models for your characters.',
        question: 'Can I upload concept art for characters?'
      },
      {
        answer: 'Characters can be organized using the searchable list in the Explorer with custom folders.',
        question: 'How can I organize my characters?'
      },
      {
        answer: 'Yes, you can use AI tools to generate character profiles and backstories.',
        question: 'Can I generate character profiles using AI?'
      },
      {
        answer: 'Characters can be exported in PDF, Docx, and 3DModel formats with textures.',
        question: 'What export formats are available for characters?'
      },
      {
        answer: 'Yes, you can invite collaborators with specific permissions to work on character creation.',
        question: 'Can I collaborate with others on character creation?'
      },
      {
        answer: 'Yes, there are templates and guidelines available to help you create detailed character profiles.',
        question: 'Are there templates available for creating characters?'
      },
      {
        answer: 'Select the character from the Explorer and use the \'Character Tools\' to edit its details.',
        question: 'How do I edit an existing character?'
      },
      {
        answer: 'Yes, you can duplicate a character profile using the \'Duplicate\' option in the Action Bar.',
        question: 'Can I duplicate a character profile?'
      },
      {
        answer: 'Select the character and use the \'Delete\' option in the Action Bar. A confirmation modal will appear before deletion.',
        question: 'How do I delete a character?'
      }
    ],
    featurePage: {
      description: 'Characters are the heart and soul of your stories, each with unique backgrounds, personalities, and arcs.',
      details: [
        {
          content: 'Craft detailed character profiles, including names, backstories, personalities, and visual representations. Make your characters come to life with depth and authenticity.',
          title: 'In-depth Character Creation'
        },
        {
          content: 'Generate high-quality concept art based on your character descriptions. Visualize your characters with precision, enhancing the world-building experience.',
          title: 'Stunning Concept Art'
        },
        {
          content: 'Experiment with generating 3D models of your characters. This adds a new dimension to your storytelling, making your characters even more engaging.',
          title: 'Immersive 3D Models'
        }
      ],
      key: 'characters'
    },
    form: {
      abilities: 'Abilities',
      alias: 'Alias',
      background: 'Background',
      demongraphics: 'Demographics',
      education: 'Education',
      ethnicity: 'Ethnicity',
      firstName: 'First Name',
      gender: 'Gender',
      identity: 'Identity',
      images: 'Images',
      language: 'Language',
      lastName: 'Last Name',
      name: 'Name',
      nationality: 'Nationality',
      occupation: 'Occupation',
      personality: 'Personality',
      sexuality: 'Sexuality',
      skills: 'Skills'
    },
    title: 'Characters'
  },

  common: {
    abilities: 'Abilities',
    abort: 'Abort',
    add: 'Add',
    addItem: (value) => `Add ${value}`,
    admin: 'Admin',
    alias: 'Alias',
    art: 'Art',
    artConcept: 'Concept Art',
    back: 'Back',
    background: 'Background',
    behaviour: 'Behaviour',
    cancel: 'Cancel',
    close: 'Close',
    confirm: 'Confirm',
    contactSupport: 'Contact support',
    continue: 'Continue',
    create: 'Create',
    createItem: (value) => `Create ${value}`,
    daily: 'Daily',
    dateOfBirth: 'Date of Birth',
    day: 'Day',
    days: 'Days',
    delete: 'Delete',
    deleteItem: (value) => `Delete ${value}`,
    demongraphics: 'Demongraphics',
    description: 'Description',
    diet: 'Diet',
    docs: 'Docs',
    download: 'Download',
    duplicate: 'Duplicate',
    edit: 'Edit',
    editItem: (value) => `Edit ${value}`,
    education: 'Education',
    errorSummary: 'An unexpected error has occurred.',
    errorTitle: 'Oh Snap',
    ethnicity: 'Ethnicity',
    explorer: 'Explorer',
    export: 'Export',
    exports: 'Exports',
    faqs: 'FAQs',
    features: 'Features',
    firstName: 'FirstName',
    folder: 'Folder',
    folders: 'Folders',
    fuelType: 'Fuel Type',
    galleryIds: 'Folder',
    gender: 'Gender',
    getStarted: 'Get Started',
    habitat: 'Habitat',
    hi: 'Hi',
    hour: 'Hour',
    hourly: 'Hourly',
    hours: 'Hours',
    identity: 'Identity',
    images: 'Images',
    import: 'Import',
    imports: 'Imports',
    itemExplorer: (value) => `Explorer ${value}`,
    itemPreview: (value) => `Preview ${value}`,
    itemTools: (value) => `Tools ${value}`,
    language: 'Language',
    lastName: 'LastName',
    legal: 'Legal',
    lore: 'Lore',
    material: 'Material',
    minute: 'Minute',
    minutely: 'Minutely',
    minutes: 'Minutes',
    month: 'Month',
    monthly: 'Monthly',
    months: 'Months',
    name: 'Name',
    nationality: 'Nationality',
    needHelp: 'Need Help',
    next: 'Next',
    occupation: 'Occupation',
    overview: 'Overview',
    personality: 'Personality',
    plot: 'Plot',
    preview: 'Preview',
    pricing: 'Pricing',
    recentItems: (items: string) => `Recent ${items}`,
    save: 'Save',
    search: 'Search',
    searchResource: (resource) => `Search ${resource}`,
    settings: 'Settings',
    sexuality: 'Sexuality',
    skills: 'Skills',
    speed: 'Speed',
    tools: 'Tools',
    warning: 'Warning',
    warningRequireProject: 'Select a Project first',
    warningRequireWorkspace: 'Select a Workspace first',
    webApp: 'App',
    webSite: 'Site',
    week: 'Week',
    weekly: 'Weekly',
    weeks: 'Weeks',
    year: 'Year',
    yearly: 'Yearly',
    years: 'Years',

  },

  components: {
    confirmActionHeading: (action: string, resource: string) => `${action} ${resource}`,
    confirmActionOnItem: (action: string, resource: string) => `Are you sure you want to ${action} this ${resource}?.`,
    confirmActionOnItemDescription: (primary: string, secondary: string) => `Press "${primary}" to continue, or "${secondary}" to cancel.`,
    featureGuideWelcomeP1: (featureName: string) => `"Welcome to the "*${featureName}*" feature."`,
    featureGuideWelcomeP2: (featureName: string) => `Here you can either create a new *${featureName}* or choose to edit an existing one.`,
    featureGuideWelcomeP3: (featureName: string) => `Every saved *${featureName}* is visible in the "*Explorer*" on the left.`,
    sidebarClose: 'Close Sidebar'
  },

  controls: {
    docs: `
# Vision Studio | Controls

## Overview

The Control Scheme Management feature provides users with the flexibility to customize and manage control configurations for various aspects of the game. Users can either manually configure controls for different game scenarios, such as combat, parkour, stealth, or safe-zone, or utilize the AI-driven control generation to create diverse and dynamic schemes.

## Key Features

### 1. **Manual Control Configuration**

Users have the ability to manually configure control schemes based on their preferences and gameplay needs. The intuitive interface allows for the assignment of actions to different input devices and buttons.

### 2. **AI-Driven Control Generation**

Vision introduces an innovative AI-driven control generation feature. Users can choose to let the AI design control schemes for specific game scenarios. This ensures a variety of playstyles and challenges within the same game environment.

### 3. **Multiple Schemes per Game Project**

Vision supports the creation and management of multiple control schemes within a single game project. This enables users to tailor controls for distinct in-game situations, such as combat, parkour, stealth, or safe zones. Users can seamlessly switch between these schemes during gameplay.

## How to Use

### Manual Configuration

1. Navigate to the Control Scheme section in the game settings.
2. Choose the scenario or aspect for which you want to configure controls (e.g., combat, parkour).
3. Assign actions to specific input devices and buttons by following the on-screen instructions.
4. Save your customized control scheme.

### AI-Driven Generation

1. Access the AI-Driven Control Generation tool in the Control Scheme settings.
2. Select the game scenario or aspect for which you want the AI to generate controls (e.g., stealth).
3. Review and fine-tune the suggested control scheme.
4. Save the AI-generated control scheme.

### Managing Multiple Schemes

1. In the Control Scheme section, navigate to the Manage Schemes tab.
2. Create a new scheme and specify its purpose (e.g., stealth).
3. Configure controls manually or use AI-driven generation for the new scheme.
4. Save the scheme and easily switch between different schemes during gameplay.

## Notes

- Experiment with various control schemes to enhance your gaming experience.
- Utilize the AI-driven generation for creative and challenging gameplay scenarios.
- Save and manage multiple control schemes to adapt to different in-game situations.

# Vision Studio | Controls

The **Controls** feature in Vision Studio enables detailed management and customization of control settings for various input devices. Whether you are designing game controls, configuring input mappings, or optimizing user interface interactions, this feature provides tools to streamline control management.

## Feature Layout

The Controls feature is designed with a structured layout to enhance user experience and productivity.

### Explorer

The Explorer view displays a comprehensive list of control settings categorized into folders based on project requirements. Each control item provides detailed information, including name, description, and configuration options.

### Empty View

Upon entering the Controls feature, users are presented with essential tools and resources to get started:

- **Get Started Tab**: Offers an introductory overview of the feature with links to documentation and tutorials.
- **FAQs Tab**: Provides answers to common questions about using control settings within Vision Studio.
- **Videos Tab**: Contains video tutorials demonstrating how to configure and manage control mappings effectively.
- **Docs Tab**: Provides detailed documentation and guidelines for creating and editing control settings.
- **Exports Tab**: Allows exporting control configurations in formats such as JSON, CSV, and PDF.

### Content View

Selecting a control setting from the Explorer populates the Content View. Here, users can view and edit control details:

- **ActionBar**: Provides options to manage the selected control setting, including editing, duplicating, saving, and deleting.
- **Tools Panel**: Offers tabs such as "Edit", "A.I.", and "Import" for configuring, enhancing, and importing control settings.
- **Preview**: Allows users to preview control mappings and configurations before finalizing changes.

### Feature Tools

The Feature Tools panel provides advanced functionalities for creating, editing, and managing control settings:

- **Create/Edit Tab**: Enables users to define control settings using the \`IControls\` schema, specifying key-value pairs for each control type.
- **A.I. Tab**: Utilizes AI tools to suggest optimal control configurations based on input device types and project requirements.
- **Import Tab**: Allows importing control mappings or configurations from external sources, supporting JSON format.

## Imports & Exports

Controls feature robust import and export capabilities for seamless integration and sharing across projects:

### Imports

Users can import control mappings and configurations using JSON format, leveraging the flexible \`IControls\` schema for structured data.

### Exports

Control settings can be exported in various formats:
- JSON
- CSV
- PDF

The Exports tab within the Empty View facilitates exporting entire collections or subsets of control settings, ensuring compatibility and collaboration.

## Creating and Managing Control Settings

### Creating New Control Settings

To create a new control setting, navigate to the "Get Started" tab and click the big blue round button with a +. This action opens the "Control Tools" panel, allowing users to define control configurations and mappings.

### Editing Control Details

Editing control settings enables users to modify key-value pairs, names, descriptions, and configurations using the "Edit" tab in the Feature Tools panel.

### AI-Assisted Control Configuration

The "A.I." tab in the "Control Tools" panel offers AI-powered tools to recommend optimal control settings based on input device specifications and user preferences.

### Importing and Exporting Control Configurations

Use the "Import" tab to import control mappings or configurations in JSON format from external sources. The "Export" tab provides options to export control settings in JSON, CSV, or PDF formats for sharing and backup purposes.

## FAQs

Here are some frequently asked questions about the **Controls** feature:

1. **How do I create a new control setting?**
   - Navigate to the "Get Started" tab and click the big blue round button with a + to open the "Control Tools" panel. Define the necessary key-value pairs and configurations.

2. **Can I import control configurations from other projects?**
   - Yes, use the "Import" tab to import control mappings in JSON format from external sources.

3. **What export formats are supported for control settings?**
   - Control settings can be exported in JSON, CSV, and PDF formats for compatibility and collaboration.

4. **How does the AI tab assist in configuring control settings?**
   - The AI tab utilizes machine learning algorithms to suggest optimal control configurations based on input device types and project requirements.

5. **Is there a limit to the number of control settings I can create?**
   - The number of control settings you can create may vary based on your subscription plan.

6. **Can I preview control mappings before applying changes?**
   - Yes, use the "Preview" option in the ActionBar to visualize control mappings and configurations before finalizing edits.

7. **What types of input devices are supported for control settings?**
   - Vision Studio supports a wide range of input devices, allowing flexible configuration and customization of control mappings.

8. **Can I collaborate with team members on control settings?**
   - Yes, invite team members to your workspace to collaborate on creating and managing control settings for projects.

9. **Are there predefined templates for common control configurations?**
   - Yes, explore the "Docs" tab in the Empty View for templates and guidelines on setting up common control mappings.

10. **How can I delete a control setting from my project?**
    - Select the control setting in the Explorer view and use the "Delete" option in the ActionBar. Confirm deletion in the modal that appears.

## Appendix

### IControls Interface
\`\`\`typescript
import { IProjectResource } from "../resource";

export interface IControls extends IProjectResource {
    data: {
        /** key-value pairs for each control setting */
        [key in ControlType]?: string | {
            name: string,
            description: string,
        };
    };
}

export type ControlType =
    // Sticks
    'STICK_LEFT' |
    'STICK_RIGHT' |
    'STICK_LEFT_PRESS' |
    'STICK_RIGHT_PRESS' |
    // DPAD
    'DPAD_UP' |
    'DPAD_RIGHT' |
    'DPAD_DOWN' |
    'DPAD_LEFT' |
    // Face buttons
    'BTN_FACE_UP' |
    'BTN_FACE_RIGHT' |
    'BTN_FACE_DOWN' |
    'BTN_FACE_LEFT' |
    // Triggers & Shoulders
    'TRIGGER_LEFT' |
    'SHOULDER_LEFT' |
    'TRIGGER_RIGHT' |
    'SHOULDER_RIGHT';
\`\`\`

`,
    faqs: [
      {
        answer:
          'The Controls panel is an AI-powered control scheme generator tailored for the PS5, Xbox, and Nintendo Switch. It streamlines the process of configuring control schemes for different consoles in your game.',
        question: 'What functionalities does the Controls panel offer for game design?'
      },
      {
        answer:
          'The AI in the Controls panel takes into account the specific requirements of each console and suggests optimal control schemes, ensuring a seamless and user-friendly gaming experience.',
        question: 'How does the AI assist in control scheme generation?'
      },
      {
        answer:
          'Absolutely. While the AI provides initial suggestions, you have the flexibility to customize and fine-tune control schemes for each console, meeting the unique needs of your game.',
        question: 'Can I customize control schemes for each console?'
      },
      {
        answer:
          'Yes, the platform offers a preview feature, allowing you to simulate and test control schemes in real-time, ensuring they meet your design and player experience expectations.',
        question: 'Is there a preview feature for control schemes?'
      },
      {
        answer:
          'Yes, you can export control schemes for PS5, Xbox, and Nintendo Switch in various formats, facilitating seamless integration into your game development pipeline.',
        question: 'Can I export control schemes for external use?'
      },
      {
        answer: 'Controls are used to define control schemes for popular input devices like PS, Xbox, Switch, and PC.',
        question: '--- What are Controls used for in Vision Studio?'
      },
      {
        answer: 'Yes, you can create custom control schemes tailored to your project\'s needs.',
        question: 'Can I create custom control schemes?'
      },
      {
        answer: 'Control schemes can be exported in JSON, CSV, and PDF formats.',
        question: 'How do I export control schemes?'
      },
      {
        answer: 'Yes, you can import control schemes from JSON or CSV files.',
        question: 'Can I import existing control schemes?'
      },
      {
        answer: 'The number of control schemes you can create may be limited based on your subscription plan.',
        question: 'Is there a limit to the number of control schemes I can create?'
      },
      {
        answer: 'Yes, you can invite collaborators to work on control schemes with specific permissions.',
        question: 'Can I collaborate on control schemes with others?'
      },
      {
        answer: 'Select the control scheme from the Explorer and use the \'Control Tools\' to edit its details.',
        question: 'How do I edit an existing control scheme?'
      },
      {
        answer: 'Yes, you can duplicate a control scheme using the \'Duplicate\' option in the Action Bar.',
        question: 'Can I duplicate a control scheme?'
      },
      {
        answer: 'Select the control scheme and use the \'Delete\' option in the Action Bar. A confirmation modal will appear before deletion.',
        question: 'How do I delete a control scheme?'
      },
      {
        answer: 'Control schemes can be created for PS, Xbox, Switch, and PC (mouse and keyboard) input devices.',
        question: 'What input devices are supported for control schemes?'
      }
    ],
    featurePage: {
      description: 'Controls provide the tools to manage the interactive elements within your projects, ensuring smooth and engaging user experiences.',
      details: [
        {
          content: 'Implement control schemes tailored for major platforms such as PlayStation, Xbox, and Nintendo Switch, ensuring a consistent user experience.',
          title: 'Platform-Specific Controls'
        },
        {
          content: 'Access a collection of preconfigured control schemes to jumpstart your project, and customize them as needed for fine-tuning.',
          title: 'Extensive Preset Library'
        },
        {
          content: 'Create and manage custom control schemes, organizing them into folders for easy access and context-specific usage, such as \'combat\' vs. \'exploration\'.',
          title: 'Organized Control Schemes'
        }
      ],
      key: 'controls'
    }
  },

  creatures: {
    featurePage: {
      description: 'Creatures are any animals or non-humanoid characters that inhabit your stories, adding life and diversity to your world.',
      details: [
        {
          content: 'Create detailed and imaginative designs for your creatures, ensuring they fit seamlessly into your world.',
          title: 'Unique Creature Designs'
        },
        {
          content: 'Define the behaviour, habitats, and ecological roles of your creatures to make your world more immersive and realistic.',
          title: 'Behavior and Ecology'
        },
        {
          content: 'Incorporate magical and mythical creatures into your stories, each with its own lore and mystical abilities.',
          title: 'Magical and Mythical Creatures'
        }
      ],
      key: 'creatures'
    }
  },

  dashboard: {
    addItem: 'Add Item',
    addProject: 'Add Project',
    contentRating: 'ContentRating',
    description: 'Create, edit and browse documents.',
    devTechnology: 'Development Technology',
    projectArt: 'Concept Art',
    projectArtDescription: 'The various artwork from your projects various collections in Vision\'s different available features.',
    projectFeatures: 'Project Features',
    projectFeaturesDescription: 'Features can be added to and removed from projects arbitrarily, without affecting the underlying resources.',
    projectInfo: 'Project Info',
    projectInfoDescription: 'Modify project public information',
    projects: '',
    releaseDate: 'Release Date',
    tableHeaders: {
      lastUpdated: 'Updated',
      projectName: 'Project Name',
      sections: 'Sections'
    },
    targetPlatform: 'Target Platform',
    technology: 'Technology',
    title: 'Dashboard',
    usersWithAccess: 'Users with access',
    viewMore: 'View more'

  },

  dialogues: {
    docs: `
# Vision Studio | Dialogues

The **Dialogues** feature in Vision Studio empowers users to effortlessly craft dynamic and authentic conversations. It allows you to create and manage dialogues for characters or actors within your projects. Whether you are writing scripts, designing interactive conversations, or scripting game dialogues, this feature provides tools to structure and visualize dialogues effectively, with the help of advanced AI technology. Here's a breakdown of how you can make the most out of this exciting functionality:

## Creating Dialogues

1. **Choose Your Characters:** Select from a diverse set of characters, each with their unique personalities. Whether it's a witty detective, a charming adventurer, or a futuristic AI, pick the characters that fit your narrative.

2. **Define the Setting:** Set the stage by choosing a topic for your dialogue. Define the context, be it a casual chat, a tense negotiation, or a thrilling confrontation.

3. **Adjust Moods:** Fine-tune the mood of each speaker. From happy and enthusiastic to serious or mysterious, tailor the emotions to bring your characters to life.

## Feature Layout

The Dialogues feature follows a structured layout to enhance user productivity and ease of use.

### Explorer

The Explorer view displays a searchable list of dialogues organized into folders based on project needs. Each dialogue item provides a summary view, including the actors involved, emotional tone, and key dialogue lines.

### Empty View

When entering the Dialogues feature, the Empty View provides essential tools and information to get started:

- **Get Started Tab**: Offers a basic overview of the feature with links to documentation and tutorials.
- **FAQs Tab**: Provides frequently asked questions about the Dialogues feature.
- **Videos Tab**: Contains video tutorials demonstrating how to use various aspects of the feature.
- **Docs Tab**: Offers detailed documentation and guidelines for creating and managing dialogues.
- **Exports Tab**: Allows exporting dialogues in various formats like JSON, CSV, PDF, and more.

### Content View

Selecting a dialogue from the Explorer populates the Content View. Here, users can view and edit dialogue details:

- **ActionBar**: Provides options to manage the selected dialogue, including editing, duplicating, saving, and deleting.
- **Tools Panel**: Offers tabs such as "Edit", "A.I.", and "Import" for creating, enhancing, and importing dialogues.
- **Preview**: Allows users to preview the dialogue interactions before finalizing changes.

### Feature Tools

The Feature Tools panel expands upon creating, editing, and managing dialogues:

- **Create/Edit Tab**: Enables users to fill out dialogue details using a form based on the \`IDialogue\` schema.
- **A.I. Tab**: Utilizes AI tools to assist in generating dialogue lines based on specified parameters.
- **Import Tab**: Allows importing dialogue scripts or files in supported formats like JSON.

## Imports & Exports

Dialogues support both import and export functionalities for seamless integration and sharing:

### Imports

Users can import dialogues using JSON format, leveraging the \`IDialogue\` schema for structured data.

### Exports

Dialogues can be exported in the following formats:
- JSON
- CSV
- PDF

The Exports tab in the Empty View enables exporting entire collections or subsets of dialogues in chosen formats, facilitating collaboration and backup.

## Creating and Managing Dialogues

### Creating a New Dialogue

To create a new dialogue, click the big blue round button with a + in the "Get started" tab of the Empty View. This opens the "Dialogue Tools" panel where you can enter dialogue details for actors involved.

### Editing Dialogue Details

Editing a dialogue allows users to modify dialogue lines, emotional tones, gestures, and more using the "Edit" tab in the Feature Tools panel.

### Using AI for Dialogue Generation

The "A.I." tab in the "Dialogue Tools" panel offers AI-powered tools to generate dialogue lines based on specified tones, emotions, and intents.

### Importing and Exporting Dialogues

Use the "Import" tab to bring in dialogue scripts or files in JSON format. The "Export" tab facilitates exporting dialogues in JSON, CSV, or PDF formats for sharing and archiving.

## FAQs

Here are some frequently asked questions about the **Dialogues** feature:

1. **How do I create a new dialogue?**
   - Click the big blue round button with a + in the "Get started" tab to open the "Dialogue Tools" panel. Fill out the necessary details and save.

2. **Can I import dialogue scripts from external sources?**
   - Yes, use the "Import" tab to import dialogue scripts in JSON format.

3. **What export formats are supported for dialogues?**
   - Dialogues can be exported in JSON, CSV, and PDF formats.

4. **How does the AI tab assist in dialogue creation?**
   - The AI tab uses machine learning algorithms to suggest dialogue lines based on specified tones, emotions, and intents.

5. **Can I collaborate with others on dialogue creation?**
   - Yes, invite team members to your workspace to collaborate on creating and managing dialogues.

6. **Are there predefined gestures and actions available for dialogues?**
   - Yes, select from a list of predefined gestures and actions when editing dialogue lines.

7. **Is there a limit to the number of dialogues I can create?**
   - The number of dialogues you can create may vary based on your subscription plan.

8. **Can I preview dialogue interactions before finalizing changes?**
   - Yes, use the "Preview" option in the ActionBar to see how dialogue interactions will appear in the final project.

9. **What does the Context field in a dialogue line represent?**
   - The Context field provides additional information about the situation or setting in which the dialogue occurs.

10. **How can I delete a dialogue from my project?**
    - Select the dialogue in the Explorer view and use the "Delete" option in the ActionBar. Confirm deletion in the modal that appears.

## Appendix
`,
    faqs: [
      {
        answer:
          'The Dialogues panel is AI-powered, leveraging information from the Characters panel. It streamlines and enhances the dialogue creation process by providing intelligent suggestions based on character profiles.',
        question: 'What functionalities does the Dialogues panel offer for game design?'
      },
      {
        answer:
          'The Dialogues panel integrates seamlessly with the Characters panel, using character information to suggest realistic and contextually appropriate dialogue options for your game.',
        question: 'How does the Dialogues panel interact with the Characters panel?'
      },
      {
        answer:
          'Yes, the platform allows real-time preview of dialogues, enabling you to see how the interactions unfold and make adjustments on the fly.',
        question: 'Can I preview dialogues in real-time?'
      },
      {
        answer:
          'Absolutely. The Dialogues panel supports branching dialogue options, providing the flexibility to create dynamic and interactive conversations within your game.',
        question: 'Is there a branching dialogue feature?'
      },
      {
        answer:
          'Yes, you can export dialogues in various formats, facilitating easy integration into your game development pipeline.',
        question: 'Can I export dialogues for external use?'
      },
      {
        answer: 'To create a new dialogue, navigate to the Dialogues feature, choose your characters, set the setting and moods, then click the \'Generate Dialogue\' button.',
        question: 'How do I create a new dialogue?'
      },
      {
        answer: 'Absolutely! You can choose from a variety of pre-defined characters and also adjust their moods to tailor their personalities to your liking.',
        question: 'Can I customize the personalities of the characters?'
      },
      {
        answer: 'No, there\'s no strict limit. You can include as many characters as your narrative requires to create diverse and engaging conversations.',
        question: 'Is there a limit to the number of characters in a dialogue?'
      },
      {
        answer: 'Yes, after generating a dialogue, you can edit the text to add your personal touch, ensuring the script aligns perfectly with your creative vision.',
        question: 'Can I edit the generated dialogue?'
      },
      {
        answer: 'Certainly! The platform provides a seamless speech-to-text integration, making it easy to convert your spoken words into editable text for quick and efficient editing.',
        question: 'Is there a speech-to-text feature for editing?'
      },
      {
        answer: 'Yes, you can review and fine-tune each line of dialogue individually. This feature allows you to ensure that each character\'s lines are delivered as intended.',
        question: 'Can I listen to individual lines of dialogue?'
      },
      {
        answer: 'The text-to-speech functionality uses advanced AI algorithms to convert your written script into lifelike spoken words, enhancing the overall storytelling experience.',
        question: 'How does the AI-powered text-to-speech work?'
      },
      {
        answer: 'Yes, the platform provides a range of predefined topics to choose from. These topics serve as a foundation for your dialogues and can be further customized to suit your narrative.',
        question: 'Are there predefined topics for dialogues?'
      },
      {
        answer: 'Absolutely! Once you\'re satisfied with your dialogue, you can save it, share it with others, or even export it for use in various projects.',
        question: 'Can I save and share my created dialogues?'
      },
      {
        answer: 'Yes, the Dialogues feature is designed to be accessible across various platforms, ensuring a seamless and consistent experience for users.',
        question: 'Is the Dialogues feature available on all platforms?'
      },
      // New
      {
        answer: 'Dialogues are used to generate and manage character conversations and narratives.',
        question: '--- What are Dialogues used for in Vision Studio?'
      },
      {
        answer: 'Yes, you can use AI tools to generate dialogues based on characters and specific moods or topics.',
        question: 'Can I generate dialogues using AI?'
      },
      {
        answer: 'Dialogues can be organized using the searchable list in the Explorer with custom folders.',
        question: 'How do I organize my dialogues?'
      },
      {
        answer: 'Dialogues can be exported in PDF, Docx, Audio File (non-free tier), and JSON formats.',
        question: 'What export formats are available for dialogues?'
      },
      {
        answer: 'Yes, you can import dialogues from JSON files.',
        question: 'Can I import existing dialogues?'
      },
      {
        answer: 'Yes, you can invite collaborators with specific permissions to work on dialogue creation.',
        question: 'Can I collaborate with others on dialogue creation?'
      },
      {
        answer: 'Select the dialogue from the Explorer and use the \'Dialogue Tools\' to edit its details.',
        question: 'How do I edit an existing dialogue?'
      },
      {
        answer: 'Yes, you can duplicate a dialogue using the \'Duplicate\' option in the Action Bar.',
        question: 'Can I duplicate a dialogue?'
      },
      {
        answer: 'Select the dialogue and use the \'Delete\' option in the Action Bar. A confirmation modal will appear before deletion.',
        question: 'How do I delete a dialogue?'
      },
      {
        answer: 'The narrator can be used to provide context or background information in dialogues.',
        question: 'What is the role of the narrator in dialogues?'
      }
    ],
    featurePage: {
      description: 'Dialogues bring your characters to life, enabling rich and engaging interactions between them.',
      details: [
        {
          content: 'Craft and manage dialogues between characters with an easy-to-use editor, ensuring smooth and engaging interactions.',
          title: 'Intuitive Dialogue Creation'
        },
        {
          content: 'Create branching dialogue trees to explore various conversation paths and outcomes, adding depth to character interactions.',
          title: 'Dynamic Dialogue Trees'
        },
        {
          content: 'Integrate voice acting scripts or audio files to enhance the immersion and realism of your dialogues.',
          title: 'Seamless Voice Integration'
        }
      ],
      key: 'dialogues'
    }

  },

  documents: {
    description: '',
    docs: `
# Vision Studio | Documents

The **Documents** feature in Vision Studio provides a comprehensive and flexible way to create, manage, and organize various types of documents within your projects. Whether you are drafting scripts, creating detailed character backstories, or compiling research notes, the Documents feature offers the tools you need to maintain a well-structured and accessible repository of written content.

## Feature Layout

Each feature in Vision Studio, including Documents, follows a consistent layout for a seamless user experience. The layout comprises the **Explorer**, **Empty View**, **Content View**, and **Feature Tools**.

### Explorer

The Explorer view on the left is a searchable list with one level deep custom folders to group your items in the explorer, controlled by the \`galleryId\`. The various folders can be collapsed and expanded, and there is some optional filtering on the explorer, including sort by name (ascending and descending), collapsing and expanding all folders, etc.

### Empty View

The Empty View has a tabbed layout, where the first tab "Get started" has a basic description of the feature, Markdown that links to Docs, and contains a \`gif\` providing a preview of the feature. The "Get started" tab also has a big blue round button with a + that is used to create a new resource (Document, Location, etc., depending on which feature you're currently in). The other tabs in the Empty View are "FAQs", "Videos", "Docs", and "Exports", which all provide further help/documentation for the relevant feature. Note that the "Exports" tab lets you export a subset or all of the items in the explorer. The three most recently updated resources of this feature are also listed on the Empty View, and clicking one of them simply selects it, as if clicking it on the Explorer (also updates the URL with the resource ID).

### Content View

When clicking on an item in the Explorer, it selects the item and populates the URL with the ID (e.g., \`v1/documents/:id\`). At this point, the "Tools" also open up. There is also an "ActionBar" at the top which has the options to "Close", "Preview", "Save", "Duplicate", "Edit", "Cancel", and "Delete" the option, each indicated with "Primary" (duplicate), "Secondary" (preview), "Success" (save), "Warning" (cancel), and "Error" (delete) colors, that have confirmation modals for some of the options.

### Feature Tools

When the "Create new" button is pressed, another resizable side panel appears on the right, which is the "Document Tools". These usually consist of the tabs "Create/Edit", which is a form for a resource of the feature (e.g., \`IDocument\`). Then there is "A.I.", which similarly would fill out parts of the \`IDocument\` but using various AI generators. Then there is an "Import" tab, which allows importing the media in JSON or basic other formats like files for "Images", "Audio", and "Video" for the Galleries. The "Export" tab allows you to export the relevant resource in various specific formats.

## Imports & Exports

The **Documents** feature supports both imports and exports to facilitate easy data management and sharing.

### Imports

You can import documents in JSON format using the relevant schema (\`IDocument\`).

### Exports

Documents can be exported in the following formats:
- PDF
- Markdown
- Docx

The Exports tab on the Empty View allows you to export the entire collection (e.g., all Documents of the project) or a subset thereof, in various formats, including PDF, Markdown, and Docx. Feature-specific exports apply here as well, and would just be grouped and put into a zip file.

## Creating and Managing Documents

### Creating a New Document

To create a new document, click on the big blue round button with a + in the "Get started" tab of the Empty View. This will open the "Document Tools" panel where you can fill out the details of the new document.

### Editing Document Details

When editing a document, you can update its sections, blocks, and associated data. The "Document Tools" panel will provide forms and inputs for each of these fields.

### Using AI for Document Creation

The "A.I." tab in the "Document Tools" panel allows you to use various AI generators to fill out parts of the document details. This can help automate the creation of detailed and comprehensive documents for your projects.

### Importing and Exporting Documents

Use the "Import" tab to bring in documents from external sources in JSON format. The "Export" tab allows you to export your documents in PDF, Markdown, or Docx formats, facilitating easy sharing and backups.

## FAQs

Here are some frequently asked questions about the **Documents** feature:

1. **How do I create a new document?**
   - Click the big blue round button with a + in the "Get started" tab of the Empty View. This opens the "Document Tools" panel where you can enter the details of the new document.

2. **Can I import documents from other projects?**
   - Yes, you can import documents in JSON format using the relevant schema (\`IDocument\`).

3. **What export formats are supported for documents?**
   - Documents can be exported in PDF, Markdown, and Docx formats.

4. **How can I use AI to create documents?**
   - Use the "A.I." tab in the "Document Tools" panel to generate document details with various AI generators.

5. **Can I edit the sections and blocks of a document after creating it?**
   - Yes, you can edit the sections, blocks, and associated data of a document at any time.

6. **Is it possible to organize documents into folders?**
   - Yes, the Explorer view allows you to create custom folders to group your documents.

7. **How do I delete a document?**
   - Select the document in the Explorer, then use the "Delete" option in the ActionBar at the top. Confirm the deletion in the modal that appears.

8. **Can I preview a document before saving changes?**
   - Yes, use the "Preview" option in the ActionBar to see how the document will look before saving any changes.

9. **Are there any limitations on the number of documents I can create?**
   - The number of documents you can create may be limited by your subscription tier.

10. **Can I collaborate with others on document creation?**
    - Yes, you can invite users to your workspace with specific permissions to collaborate on document creation and management.

## Appendix

### IDocument Interface
\`\`\`typescript
import { IProjectResource } from "../resource"

export interface IDocument extends IProjectResource {
    /** \`sections\`:  the various sections the document has */
    blocks?: IEditorJSBlock[];
    /** \`sectionCount\`: the number of sections when the document gets returned in a list */
    sectionCount?: number;
    /** \`templateId?\`:  the optional template from which the document was created*/
    templateId?: string | number;
    /** \`collectionId?\`:  the optional collection the document belongs to */
    collectionId?: string | number;
    /** \`userPrompt?\`:  */
    userPrompt?: string;
}
\`\`\`

### IEditorJSBlock Interface
\`\`\`typescript
export type IEditorJSBlock =
    | {
        type: "paragraph";
        data: {
            text: string;
        };
    }
    | {
        type: "header";
        data: {
            text: string;
            level: number;
        };
    }
    | {
        type: "list";
        data: {
            type: "unordered" | "ordered";
            items: (string | IEditorJSBlock)[];
        };
    }
    | {
        type: "attaches";
        data: {
            file: {
                url: string;
                size: number;
                name: string;
                extension: string;
            };
            title: string;
        };
    }
    | {
        type: "image";
        data: {
            file: {
                url: string;
            };
            withBorder: boolean;
            withBackground: boolean;
            stretched: boolean;
            caption: string;
        };
    };
\`\`\`

`,
    faqs: [
      {
        answer:
          'The Documents panel serves as an AI-powered document editor, utilizing markdown and editor.js. It provides a seamless platform for creating and modifying content with advanced formatting options.',
        question: 'What features does the Documents panel offer?'
      },
      {
        answer:
          'The AI in the Documents panel enhances content creation by offering intelligent suggestions, improving readability, and assisting in structuring documents using markdown and editor.js.',
        question: 'How does the AI contribute to document editing?'
      },
      {
        answer:
          'Yes, the platform supports real-time collaboration, allowing multiple users to work on documents simultaneously, fostering teamwork and efficiency.',
        question: 'Can I collaborate with others on documents in real-time?'
      },
      {
        answer:
          'Absolutely. The Documents panel features version control, enabling users to track changes, revert to previous versions, and maintain a comprehensive history of document modifications.',
        question: 'Is there version control for documents?'
      },
      {
        answer:
          'Yes, you can export documents to various formats such as PDF, DOCX, and HTML, providing flexibility for different use cases and sharing options.',
        question: 'Can I export documents to different formats?'
      },
      {
        answer: 'Documents can be used to write summaries, chapter descriptions, rules, stories, plots, lore, and more.',
        question: '--- What can I use Documents for in Vision Studio?'
      },
      {
        answer: 'Documents use a rich text editor called Editor.js for writing content.',
        question: 'What editor is used for writing documents?'
      },
      {
        answer: 'Yes, you can import documents in various formats such as Markdown and Docx.',
        question: 'Can I import existing documents?'
      },
      {
        answer: 'Documents can be exported in PDF, Markdown, and Docx formats.',
        question: 'How do I export documents?'
      },
      {
        answer: 'The number of documents you can create may be limited based on your subscription plan.',
        question: 'Is there a limit to the number of documents I can create?'
      },
      {
        answer: 'Yes, you can invite collaborators with specific permissions to work on documents.',
        question: 'Can I collaborate on documents with others?'
      },
      {
        answer: 'Select the document from the Explorer and use the \'Document Tools\' to edit its details.',
        question: 'How do I edit an existing document?'
      },
      {
        answer: 'Yes, you can duplicate a document using the \'Duplicate\' option in the Action Bar.',
        question: 'Can I duplicate a document?'
      },
      {
        answer: 'Select the document and use the \'Delete\' option in the Action Bar. A confirmation modal will appear before deletion.',
        question: 'How do I delete a document?'
      },
      {
        answer: 'The document editor includes features like text formatting, embedding media, and adding custom elements.',
        question: 'What features are available in the document editor?'
      }
    ],
    featurePage: {
      description: 'Documents are your primary tools for writing and organizing your content, with support for various formats.',
      details: [
        {
          content: 'Utilize a powerful text editor with rich formatting options to create detailed and visually appealing documents.',
          title: 'Advanced Text Editing'
        },
        {
          content: 'Keep your documents neatly organized into folders and subfolders, making them easy to access and manage.',
          title: 'Efficient Document Organization'
        },
        {
          content: 'Import and export documents in multiple formats, including PDF, Markdown, and Docx, ensuring compatibility and ease of sharing.',
          title: 'Versatile Import & Export'
        }
      ],
      key: 'documents'
    },
    title: ''
  },

  features: {
    '3D': '3D',
    account: 'Account',
    admin: 'Admin',
    ai: 'AI',
    ai3D: 'AI 3D',
    aiAudio: 'AI Audio',
    aiExamples: 'AI Examples',
    aiImages: 'AI Images',
    aiText: 'AI Text',
    aiVideo: 'AI Video',
    asset: 'Asset',
    assets: 'Assets',
    audio: 'Audio',
    character: 'Character',
    characters: 'Characters',
    control: 'Control',
    controls: 'Controls',
    creature: 'Creature',
    creatures: 'Creatures',
    dashboard: 'Dashboard',
    dialogue: 'Dialogue',
    dialogues: 'Dialogues',
    document: 'Document',
    documents: 'Documents',
    examples: 'Examples',
    graph: 'Graph',
    graphs: 'Graphs',
    home: 'Home',
    homePage: 'Homepage',
    illustration: 'Illustration',
    illustrations: 'Illustrations',
    images: 'Images',
    location: 'Location',
    locations: 'Locations',
    media: 'Media',
    multimedia: 'Multimedia',
    object: 'Object',
    objects: 'Objects',
    part: 'Part',
    parts: 'Parts',
    project: 'Project',
    projects: 'Projects',
    quest: 'Quest',
    quests: 'Quests',
    segment: 'Segment',
    segments: 'Segments',
    setting: 'Setting',
    settings: 'Settings',
    storie: 'Storie',
    stories: 'Stories',
    subscription: 'Subscription',
    subscriptions: 'Subscriptions',
    text: 'text',
    transport: 'Transport',
    transports: 'Transports',
    user: 'User',
    users: 'Users',
    vehicle: 'Vehicle',
    vehicles: 'Vehicles',
    video: 'Video',
    workspace: 'Workspace',
    workspaces: 'Workspaces'
  },

  galleries: {
    character: {
      description: 'Generate and edit characters to use in "Dialogues", etc.',
      title: 'Characters'
    },
    description: 'A place to brainstorm any visual concepts, and put them into gallery collections.',
    image: {
      description: 'Generate custom AI powered images',
      enterPrompt: 'Enter a prompt',
      pickStyle: 'Pick an art style',
      title: 'Images'
    },
    sound: {
      description: 'Craft AI generated sound clips',
      title: 'Sounds'
    },
    title: 'Galleries',
    video: {
      description: 'Direct videos from text with AI',
      title: 'Videos'
    }
  },

  generators: {
    description: 'The suite of underlying AI generators that enable this experience',
    title: 'Generators'
  },

  graphs: {
    docs: `
# Vision Studio | Graphs

The **Graphs** feature in Vision Studio allows you to create, manage, and visualize complex networks and relationships within your projects. Whether you're mapping out character relationships, plotlines, or data structures, the Graphs feature provides a powerful and flexible toolset to bring your ideas to life.

## Feature Layout

Each feature in Vision Studio, including Graphs, follows a consistent layout for a seamless user experience. The layout comprises the **Explorer**, **Empty View**, **Content View**, and **Feature Tools**.

### Explorer

The Explorer view on the left is a searchable list with one level deep custom folders to group your items in the explorer, controlled by the \`galleryId\`. The various folders can be collapsed and expanded, and there is some optional filtering on the explorer, including sort by name (ascending and descending), collapsing and expanding all folders, etc.

### Empty View

The Empty View has a tabbed layout, where the first tab "Get started" has a basic description of the feature, Markdown that links to Docs, and contains a \`gif\` providing a preview of the feature. The "Get started" tab also has a big blue round button with a + that is used to create a new resource (Graph, Location, etc., depending on which feature you're currently in). The other tabs in the Empty View are "FAQs", "Videos", "Docs", and "Exports", which all provide further help/documentation for the relevant feature. Note that the "Exports" tab lets you export a subset or all of the items in the explorer. The three most recently updated resources of this feature are also listed on the Empty View, and clicking one of them simply selects it, as if clicking it on the Explorer (also updates the URL with the resource ID).

### Content View

When clicking on an item in the Explorer, it selects the item and populates the URL with the ID (e.g., \`v1 / graphs /: id\`). At this point, the "Tools" also open up. There is also an "ActionBar" at the top which has the options to "Close", "Preview", "Save", "Duplicate", "Edit", "Cancel", and "Delete" the option, each indicated with "Primary" (duplicate), "Secondary" (preview), "Success" (save), "Warning" (cancel), and "Error" (delete) colors, that have confirmation modals for some of the options.

### Feature Tools

When the "Create new" button is pressed, another resizable side panel appears on the right, which is the "Graph Tools". These usually consist of the tabs "Create/Edit", which is a form for a resource of the feature (e.g., \`IGraph\`). Then there is "A.I.", which similarly would fill out parts of the \`IGraph\` but using various AI generators. Then there is an "Import" tab, which allows importing the media in JSON or basic other formats like files for "Images", "Audio", and "Video" for the Galleries. The "Export" tab allows you to export the relevant resource in various specific formats.

## Imports & Exports

The **Graphs** feature supports both imports and exports to facilitate easy data management and sharing.

### Imports

You can import graphs in JSON format using the relevant schema (\`IGraph\`).

### Exports

Graphs can be exported in the following formats:
- JSON
- PDF

The Exports tab on the Empty View allows you to export the entire collection (e.g., all Graphs of the project) or a subset thereof, in various formats, including JSON and PDF. Feature-specific exports apply here as well, and would just be grouped and put into a zip file.

## Creating and Managing Graphs

### Creating a New Graph

To create a new graph, click on the big blue round button with a + in the "Get started" tab of the Empty View. This will open the "Graph Tools" panel where you can fill out the details of the new graph.

### Editing Graph Details

When editing a graph, you can update its nodes, edges, and associated data. The "Graph Tools" panel will provide forms and inputs for each of these fields.

### Using AI for Graph Creation

The "A.I." tab in the "Graph Tools" panel allows you to use various AI generators to fill out parts of the graph details. This can help automate the creation of complex and rich networks for your projects.

### Importing and Exporting Graphs

Use the "Import" tab to bring in graphs from external sources in JSON format. The "Export" tab allows you to export your graphs in JSON or PDF formats, facilitating easy sharing and backups.

## FAQs

Here are some frequently asked questions about the **Graphs** feature:

1. **How do I create a new graph?**
   - Click the big blue round button with a + in the "Get started" tab of the Empty View. This opens the "Graph Tools" panel where you can enter the details of the new graph.

2. **Can I import graphs from other projects?**
   - Yes, you can import graphs in JSON format using the relevant schema (\`IGraph\`).

3. **What export formats are supported for graphs?**
   - Graphs can be exported in JSON and PDF formats.

4. **How can I use AI to create graphs?**
   - Use the "A.I." tab in the "Graph Tools" panel to generate graph details with various AI generators.

5. **Can I edit the nodes and edges of a graph after creating it?**
   - Yes, you can edit the nodes, edges, and associated data of a graph at any time.

6. **Is it possible to organize graphs into folders?**
   - Yes, the Explorer view allows you to create custom folders to group your graphs.

7. **How do I delete a graph?**
   - Select the graph in the Explorer, then use the "Delete" option in the ActionBar at the top. Confirm the deletion in the modal that appears.

8. **Can I preview a graph before saving changes?**
   - Yes, use the "Preview" option in the ActionBar to see how the graph will look before saving any changes.

9. **Are there any limitations on the number of graphs I can create?**
   - The number of graphs you can create may be limited by your subscription tier.

10. **Can I collaborate with others on graph creation?**
    - Yes, you can invite users to your workspace with specific permissions to collaborate on graph creation and management.

## Appendix

### IGraph Interface
\`\`\`typescript
import { IProjectResource } from "../resource"

export interface IGraph extends IProjectResource {
    data: {
        edges: IEdge[],
        nodes: INode[],
    }
}
\`\`\`

### IEdge Interface
\`\`\`typescript
export interface IEdge {
    id: string,
    label: string,
    source: string,
    target: string,
}
\`\`\`

### INode Interface
\`\`\`typescript
export interface INode {
    id: string,
    width: number,
    height: number,
    type: string,
    data: {
        label: string,
        id: string,
    },
    position: {
        x: number,
        y: number,
    }
}
\`\`\`

`,
    faqs: [
      {
        answer:
          'The Graphs panel is an AI-powered node editor using reactflow. It can be used for a variety of things, including skill trees, story branches, and quest design, providing a visual representation of complex structures within your game.',
        question: 'What functionalities does the Graphs panel offer for game design?'
      },
      {
        answer:
          'Certainly. The Graphs panel supports the creation of intricate skill trees, allowing you to design and visualize the progression of abilities and skills for characters in your game.',
        question: 'Can I create skill trees using the Graphs panel?'
      },
      {
        answer:
          'The AI in the Graphs panel can suggest quest structures based on predefined parameters, helping you create engaging and well-paced quests for your game.',
        question: 'How does the AI assist in quest design?'
      },
      {
        answer:
          'Yes, the platform offers collaboration features, allowing multiple team members to work on the same graph simultaneously, fostering efficient quest and story design.',
        question: 'Is there collaboration support for the Graphs panel?'
      },
      {
        answer:
          'Absolutely. The Graphs panel supports exporting graph structures in various formats, making it easy to integrate them into your game development workflow.',
        question: 'Can I export the graph structures for external use?'
      },
      {
        answer: 'Graphs are used to create node-based visualizations like skill trees, branching stories, and dialogues.',
        question: '--- What are Graphs used for in Vision Studio?'
      },
      {
        answer: 'Yes, you can import graphs from JSON files.',
        question: 'Can I import existing graphs?'
      },
      {
        answer: 'Graphs can be exported in JSON format.',
        question: 'How do I export graphs?'
      },
      {
        answer: 'The number of graphs you can create may be limited based on your subscription plan.',
        question: 'Is there a limit to the number of graphs I can create?'
      },
      {
        answer: 'Yes, you can invite collaborators with specific permissions to work on graphs.',
        question: 'Can I collaborate on graphs with others?'
      },
      {
        answer: 'Select the graph from the Explorer and use the \'Graph Tools\' to edit its details.',
        question: 'How do I edit an existing graph?'
      },
      {
        answer: 'Yes, you can duplicate a graph using the \'Duplicate\' option in the Action Bar.',
        question: 'Can I duplicate a graph?'
      },
      {
        answer: 'Select the graph and use the \'Delete\' option in the Action Bar. A confirmation modal will appear before deletion.',
        question: 'How do I delete a graph?'
      },
      {
        answer: 'Yes, graphs are ideal for visualizing branching dialogues and alternate story endings.',
        question: 'Can I use graphs for visualizing branching dialogues?'
      },
      {
        answer: 'The graph editor provides tools for creating nodes, connections, and customizing the layout.',
        question: 'What tools are available for creating graphs?'
      }
    ],
    featurePage: {
      description: 'Graphs allow you to visually represent data and relationships within your projects, providing clarity and insight.',
      details: [
        {
          content: 'Build and customize graphs to visually represent complex data and relationships, enhancing understanding and insight.',
          title: 'Comprehensive Graph Creation'
        },
        {
          content: 'Use graphs to illustrate character relationships, plot points, and other story elements, making complex information more accessible.',
          title: 'Effective Data Visualization'
        },
        {
          content: 'Create interactive graphs that allow users to explore and engage with the data, providing a deeper understanding of your project.',
          title: 'Interactive Graphs'
        }
      ],
      key: 'graphs'
    }
  },

  landing: {
    allFeatures: 'All Features',
    getAccess: 'Get Access',
    sections: [],
    watchVideo: 'Watch Video'
  },

  locations: {
    docs: `
# Vision | Locations

The **Locations** feature in Vision Studio allows you to create, manage, and develop detailed settings for your projects. Whether it's a fictional world, a game level, or a significant place in a novel, the Locations feature helps you bring these settings to life with rich descriptions, images, lore, and more.

## Feature Layout

Each feature in Vision Studio, including Locations, follows a consistent layout for a seamless user experience. The layout comprises the **Explorer**, **Empty View**, **Content View**, and **Feature Tools**.

### Explorer

The Explorer view on the left is a searchable list with one level deep custom folders to group your items in the explorer, controlled by the \`galleryId\`. The various folders can be collapsed and expanded, and there is some optional filtering on the explorer, including sort by name (ascending and descending), collapsing and expanding all folders, etc.

### Empty View

The Empty View has a tabbed layout, where the first tab "Get started" has a basic description of the feature, Markdown that links to Docs, and contains a \`gif\` providing a preview of the feature. The "Get started" tab also has a big blue round button with a + that is used to create a new resource (Character, Location, etc., depending on which feature you're currently in). The other tabs in the Empty View are "FAQs", "Videos", "Docs", and "Exports", which all provide further help/documentation for the relevant feature. Note that the "Exports" tab lets you export a subset or all of the items in the explorer. The three most recently updated resources of this feature are also listed on the Empty View, and clicking one of them simply selects it, as if clicking it on the Explorer (also updates the URL with the resource ID).

### Content View

When clicking on an item in the Explorer, it selects the item and populates the URL with the ID (e.g., \`v1/locations/:id\`). At this point, the "Tools" also open up. There is also an "ActionBar" at the top which has the options to "Close", "Preview", "Save", "Duplicate", "Edit", "Cancel", and "Delete" the option, each indicated with "Primary" (duplicate), "Secondary" (preview), "Success" (save), "Warning" (cancel), and "Error" (delete) colors, that have confirmation modals for some of the options.

### Feature Tools

When the "Create new" button is pressed, another resizable side panel appears on the right, which is the "Location Tools". These usually consist of the tabs "Create/Edit", which is a form for a resource of the feature (e.g., \`ILocation\`). Then there is "A.I.", which similarly would fill out parts of the \`ILocation\` but using various AI generators. Then there is an "Import" tab, which allows importing the media in JSON or basic other formats like files for "Images", "Audio", and "Video" for the Galleries. The "Export" tab allows you to export the relevant resource in various specific formats.

## Imports & Exports

The **Locations** feature supports both imports and exports to facilitate easy data management and sharing.

### Imports

You can import locations in JSON format using the relevant schema (\`ILocation\`).

### Exports

Locations can be exported in the following formats:
- JSON
- PDF

The Exports tab on the Empty View allows you to export the entire collection (e.g., all Locations of the project) or a subset thereof, in various formats, including JSON and PDF. Feature-specific exports apply here as well, and would just be grouped and put into a zip file.

## Creating and Managing Locations

### Creating a New Location

To create a new location, click on the big blue round button with a + in the "Get started" tab of the Empty View. This will open the "Location Tools" panel where you can fill out the details of the new location.

### Editing Location Details

When editing a location, you can update its description, lore, plot, and associated images. The "Location Tools" panel will provide forms and inputs for each of these fields.

### Using AI for Location Creation

The "A.I." tab in the "Location Tools" panel allows you to use various AI generators to fill out parts of the location details. This can help automate the creation of complex and rich settings for your projects.

### Importing and Exporting Locations

Use the "Import" tab to bring in locations from external sources in JSON format. The "Export" tab allows you to export your locations in JSON or PDF formats, facilitating easy sharing and backups.

## FAQs

Here are some frequently asked questions about the **Locations** feature:

1. **How do I create a new location?**
   - Click the big blue round button with a + in the "Get started" tab of the Empty View. This opens the "Location Tools" panel where you can enter the details of the new location.

2. **Can I import locations from other projects?**
   - Yes, you can import locations in JSON format using the relevant schema (\`ILocation\`).

3. **What export formats are supported for locations?**
   - Locations can be exported in JSON and PDF formats.

4. **How can I use AI to create locations?**
   - Use the "A.I." tab in the "Location Tools" panel to generate location details with various AI generators.

5. **Can I edit the lore and plot of a location after creating it?**
   - Yes, you can edit the description, lore, plot, and associated images of a location at any time.

6. **Is it possible to organize locations into folders?**
   - Yes, the Explorer view allows you to create custom folders to group your locations.

7. **How do I delete a location?**
   - Select the location in the Explorer, then use the "Delete" option in the ActionBar at the top. Confirm the deletion in the modal that appears.

8. **Can I preview a location before saving changes?**
   - Yes, use the "Preview" option in the ActionBar to see how the location will look before saving any changes.

9. **Are there any limitations on the number of locations I can create?**
   - The number of locations you can create may be limited by your subscription tier.

10. **Can I collaborate with others on location creation?**
    - Yes, you can invite users to your workspace with specific permissions to collaborate on location creation and management.

## Appendix

### ILocation Interface
\`\`\`typescript
export interface ILocation extends IProjectResource {
    // the description of the location
    description?: string;
    // lore of the location, as a background to provide context
    lore?: string;
    // plot of the location, significant to the game/story
    plot?: string;
    // the images to identify the location
    images?: string[];
    // an array of EditorJS blocks for arbitrary editing
    blocks?: IEditorJSBlock[];
}
\`\`\`

### IProjectResource Interface
\`\`\`typescript
export interface IProjectResource extends IResource {
    /**
     * \`galleryId\`: the folder name in which this resource belongs
     */
    galleryId?: string;
    /**
     * \`projectId\`: the project this resource belongs to
     */
    projectId: string | number;
}
\`\`\`

### IResource Interface
\`\`\`typescript
export interface IResource {
    /**
     * the unique \`identifier\` of the resource
     */
    id?: string;
    /**
     * the \`name\` of the resource
     */
    name: string;
    /**
     * \`dateCreated\`: is the date this resource was created
     */
    dateCreated?: string | Date;
    /**
     * \`dateUpdated\`: is the date this resource was updated
     */
    dateUpdated?: string | Date;
}
\`\`\`

### IEditorJSBlock Interface
\`\`\`typescript
export type IEditorJSBlock =
    | {
        type: "paragraph";
        data: {
            text: string;
        };
    }
    | {
        type: "header";
        data: {
            text: string;
            level: number;
        };
    }
    | {
        type: "list";
        data: {
            type: "unordered" | "ordered";
            items: (string | IEditorJSBlock)[];
        };
    }
    | {
        type: "attaches";
        data: {
            file: {
                url: string;
                size: number;
                name: string;
                extension: string;
            };
            title: string;
        };
    }
    | {
        type: "image";
        data: {
            file: {
                url: string;
            };
            withBorder: boolean;
            withBackground: boolean;
            stretched: boolean;
            caption: string;
        };
    };
\`\`\`
`,
    faqs: [
      {
        answer:
          'The Locations panel is a comprehensive tool for planning actual in-game locations, including levels, safe houses, and hubs. It provides a platform for designing and visualizing the spatial layout of your game world.',
        question: 'What functionalities does the Locations panel offer for game design?'
      },
      {
        answer:
          'The Locations panel streamlines level design by offering intuitive tools to plan and visualize spatial elements, helping you create immersive and well-structured environments for your game.',
        question: 'How does the Locations panel assist in level design?'
      },
      {
        answer:
          'Certainly. The platform supports the import of assets, allowing you to integrate existing design elements and create a cohesive visual representation of your game locations.',
        question: 'Can I import assets and design elements into the Locations panel?'
      },
      {
        answer:
          'Yes, the Locations panel supports collaboration features, enabling multiple team members to work on the same location simultaneously, fostering efficient level design and world-building.',
        question: 'Is there collaboration support for the Locations panel?'
      },
      {
        answer:
          'Absolutely. The Locations panel allows you to export location layouts in various formats, making it easy to integrate them into your game development pipeline.',
        question: 'Can I export location layouts for external use?'
      },
      {
        answer: 'You can specify the setting, environment, history, and key features of a location.',
        question: '--- What can I specify for a location?'
      },
      {
        answer: 'Yes, you can upload or generate concept art for your locations.',
        question: 'Can I upload or generate concept art for locations?'
      },
      {
        answer: 'Locations can be organized using the searchable list in the Explorer with custom folders.',
        question: 'How do I organize my locations?'
      },
      {
        answer: 'Yes, you can use AI tools to generate detailed descriptions and concept art for locations.',
        question: 'Can I generate locations using AI?'
      },
      {
        answer: 'Locations can be exported in PDF, Docx, and JSON formats.',
        question: 'What export formats are available for locations?'
      },
      {
        answer: 'Yes, you can import locations from JSON files.',
        question: 'Can I import existing locations?'
      },
      {
        answer: 'Yes, you can invite collaborators with specific permissions to work on locations.',
        question: 'Can I collaborate on locations with others?'
      },
      {
        answer: 'Select the location from the Explorer and use the \'Location Tools\' to edit its details.',
        question: 'How do I edit an existing location?'
      },
      {
        answer: 'Yes, you can duplicate a location using the \'Duplicate\' option in the Action Bar.',
        question: 'Can I duplicate a location?'
      },
      {
        answer: 'Select the location and use the \'Delete\' option in the Action Bar. A confirmation modal will appear before deletion.',
        question: 'How do I delete a location?'
      }
    ],
    featurePage: {
      description: 'Locations provide the settings for your stories, bringing your worlds to life with rich details and visuals.',
      details: [
        {
          content: 'Define and describe locations with rich text and images to create immersive environments that enhance your story.',
          title: 'Detailed Location Creation'
        },
        {
          content: 'Visualize your locations and their connections with interactive maps, making it easier to understand and navigate your story world.',
          title: 'Interactive Map Integration'
        },
        {
          content: 'Add historical and lore-based information to your locations, providing depth and context that enriches your storytelling.',
          title: 'Rich Location Lore'
        }
      ],
      key: 'locations'
    }
  },

  objects: {
    featurePage: {
      description: 'Objects are inanimate items that can be used, collected, or traded in your stories, such as weapons, equipment, loot, and currencies.',
      details: [
        {
          content: 'Create thorough descriptions for each object, including their uses, origins, and significance in your story.',
          title: 'Detailed Object Descriptions'
        },
        {
          content: 'Organize and manage the objects in your story with ease, tracking their availability and usage.',
          title: 'Inventory Management'
        },
        {
          content: 'Develop a robust trading system for your objects, enhancing the economic aspect of your story.',
          title: 'Trade and Economy'
        }
      ],
      key: 'objects'
    }

  },

  pricing: {

  },

  projects: {
    addProject: 'Add Project',
    createProject: 'Create Project',
    editor: {
      linkCopiedToClipboard: 'Link Copied to Clipboard'
    },
    featurePage: {
      description: 'Projects serve as the foundation for your creative vision, housing all related content and ideas in one place.',
      details: [
        {
          content: 'Create and manage multiple projects, each dedicated to a specific creative idea, such as a game, TV series, or graphic novel. Keep your ideas organized and focused.',
          title: 'Diverse Project Management'
        },
        {
          content: 'Tailor each project with unique features that suit its needs. Add or remove features anytime without losing data, ensuring flexibility and adaptability.',
          title: 'Customizable Features'
        },
        {
          content: 'Easily transfer projects between workspaces or accounts using the import/export functionality. Maintain the integrity of your data during transitions.',
          title: 'Effortless Imports & Exports'
        }
      ],
      key: 'projects'
    },
    generating: {

    },
    importProject: 'Import Project',
    newProject: 'New Project',
    setup: {
      generate: 'Create',
      next: 'Next',
      projectName: 'Name your project',
      projectPrompt: 'What is your project about?'
    }

  },

  transports: {
    featurePage: {
      description: 'Transports are any mode of travel through spacetime, including vehicles, wormholes, portal guns, railways, and time machines.',
      details: [
        {
          content: 'Explore a variety of transport modes, from traditional vehicles to futuristic wormholes and time machines.',
          title: 'Innovative Modes of Transport'
        },
        {
          content: 'Discover the latest advancements in transport technology, from hyperloop systems to teleportation devices.',
          title: 'Advanced Technology'
        },
        {
          content: 'Create stunning visuals of transport methods to immerse your audience in the experience of traveling through spacetime.',
          title: 'Immersive Visuals'
        }
      ],
      key: 'transports'
    }
  },

  version: {
    currentVersion: 'Your current version is:',
    getVersion: 'Get it now!',
    header: 'Vision Update',
    newVersion: 'New version',
    updateNow: 'Update Now'
  },

  workspaces: {
    addWorkspace: 'Add workspace',
    addWorkspaceImage: 'Add workspace image',
    addWorkspaceName: 'Add workspace name',
    addWorkspaceUsers: 'Add workspace users',
    addWorkspaceUsersInfo: 'Add users to your workspace, assign permissions for each and share all projects in this workspace with these.',
    chooseAWorkspace: 'Choose a workspace',
    createWorkspace: 'Create workspace',
    featurePage: {
      description: 'Workspaces empower you to organize projects and collaborate seamlessly with team members within a focused environment.',
      details: [
        {
          content: 'Create distinct workspaces for different types of projects, such as games, writing, and more. Each workspace keeps your projects organized and context-specific.',
          title: 'Tailored Workspaces for Every Project'
        },
        {
          content: 'Invite team members to collaborate within specific workspaces. Assign roles and permissions to control access, ensuring all members have the information they need.',
          title: 'Collaboration Support'
        },
        {
          content: 'Personalize your workspace with Dark or Light themes. Switch between them easily using the theme toggle button, enhancing your productivity and comfort.',
          title: 'Customizable Themes'
        }
      ],
      key: 'workspaces'
    },
    permissions: 'Permissions',
    toCreateProjectsIn: 'to create projects in'

  }

};
