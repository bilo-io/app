# Vision Studio

Vision Studio is a mobile-friendly, responsive web application with light and dark modes, designed for content creation, note-taking, and conceptualizing fictional worlds for video games, movies, novels, comics, music, and more. Users can manage these elements manually or create them with AI.

## **Workspaces** & **Projects**

### Workspaces

- **Default Workspace**: Every user starts with a default workspace.
- **Additional Workspace**: Users can create one additional workspace and invite collaborators with specific permissions.
- **Project Limits**: Each workspace can host a limited number of projects.

## Project **Features**

Each project provides access to various features such as "AI Galleries", "Characters", "Controls", "Dialogues", "Documents", "Locations", and "Graphs", available as main navigation items.

### AI Galleries

- **Sub-Tabs**: Includes "Text", "Images", "Audio", "Video", and "3D".
- **Content**: Generate or upload galleries of AI-created or user-uploaded media.
- **Tools**: Each media type in the AI Galleries has various generators:
  - **Images**: "Upload", "Text to Image", "Image to Image".
  - **Text**: "Upload", "Text Generation".
  - **Audio**: "Upload", "Text to Audio", "Audio Editing".
  - **Video**: "Upload", "Text to Video", "Video Editing".
  - **3D**: "Upload", "3D Model Generation".

### Characters

- **Details**: Specify demographics, backstories, skills, abilities, and personality traits.
- **Art**: Upload or generate concept art and textured 3D models.

### Controls

- **Schemes**: Define control schemes for popular input devices (PS, Xbox, Switch, PC).

### Dialogues

- **Narratives**: Generate dialogue involving characters and a narrator, with specific moods and topics.

### Documents

- **Rich Text Editor**: Utilize Editor.js to write summaries, chapter descriptions, rules, stories, plots, lore, and more.

### Locations

- **Details**: Specify settings and environments.
- **Art**: Upload or generate visuals similar to character creation.

### Graphs

- **Node-Based Editor**: Use react-flow to create skill trees, branching stories, and dialogues.

## Feature Layout

Each feature maintains a consistent layout for a unified user experience.

### Explorer

- **View**: Searchable list with 1-level deep custom folders for organizing items.
- **Functions**: Collapse/expand folders, sort items, and filter options.

### Empty View

- **Tabs**: 
  - **Get Started**: Feature description, documentation links, and a preview gif. Includes a "Create New" button.
  - **FAQs, Videos, Docs, Exports**: Provide additional help and documentation.
  - **Exports**: Export the entire collection or a subset in various formats, including JSON and PDF. Feature-specific exports apply here and are grouped into a zip file.
- **Recent Items**: Displays the three most recently updated resources.

### Content View

- **Selection**: Clicking an item in the Explorer updates the URL and opens the "Tools" panel.
- **Action Bar**: Options to "Close", "Preview", "Save", "Duplicate", "Edit", "Cancel", and "Delete" items with corresponding color-coded buttons and confirmation modals.

### Feature Tools

- **Panels**: Resizeable side panels for creating or editing resources.
- **Tabs**:
  - **Create/Edit**: Form for creating or editing resources.
  - **AI**: AI-generated content assistance.
  - **Import**: Import media in JSON and other formats.
  - **Export**: Export resources in various formats.

## AI Tools

The "AI Galleries" feature follows a nested layout, similar to other features but with deeper levels for managing "Text", "Images", "Audio", "Video", and "3D" content.

## Project **Dashboard**

- **Overview**: Displays all project content in a grid format.
- **Metadata**: Allows modification of project metadata (thumbnail, content rating, target platforms, etc.).
- **Tabs**:
  - **Concept Art**: Manage and view concept art for the project.
  - **Settings**: Manage the project name, delete the project, and access other settings.
  - **Team**: List all collaborating users and their roles in the project.
  - **Timeline**: Indicates high-level milestones and who is responsible for each, with various view types including Gantt charts.

## Pricing

### Free Tier

- **Features**: Monthly recurring credits with feature limits per project.
- **Export Options**: Limited export options with a watermark on PDF exports.

### Personal Subscription

- **Features**: Higher limits compared to the free tier.
- **Cost**: Medium pricing.

### Pro Subscription

- **Features**: Even higher limits and additional features.
- **Cost**: Higher pricing.

### Pay-As-You-Go Subscription

- **Features**: Scales with usage and charges per item with a minimum threshold.
- **Cost**: Flexible pricing based on actual usage.

## Imports & Exports

### JSON Exports

- **Formats**: Import and export features using relevant JSON schemas (ICharacter, ILocation, IDialogue, etc.).

### Feature-Specific Exports

- **AI Galleries**: JSON, media-specific formats (images, audio, video, 3D models).
- **Characters**: PDF, Docx, 3DModel (with textures).
- **Controls**: JSON, CSV, PDF.
- **Dialogues**: PDF, Docx, Audio File (non-free tier), JSON.
- **Documents**: PDF, Markdown, Docx.
- **Locations**: PDF, Docx, 3DModel.
- **Graphs**: JSON, GraphML.

Vision Studio provides a comprehensive and intuitive platform for creators to develop and manage their projects efficiently, leveraging AI to enhance the creative process.
