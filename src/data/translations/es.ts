import { ITranslation } from '.';

export const es: ITranslation = {
  account: {
    billing: 'Facturación',
    chooseTheme: 'Elegir Tema',
    dark: 'Oscuro',
    email: 'Correo Electrónico',
    features: 'Características',
    light: 'Claro',
    name: 'Nombre',
    profile: 'Perfil',
    settingExplorerAutoExpand: 'Expandir automáticamente las carpetas en el Explorador para cada característica',
    settingExplorerEditOnSelect: 'Abrir automáticamente el Editor al seleccionar un elemento en el Explorador',
    settingNavbarExpanded: 'Expandir barra de navegación',
    settingPickLanguage: 'Elegir idioma',
    settingPickTheme: 'Elegir tema',
    settingPlayMusicOnStartup: 'Reproducir música al iniciar el proyecto',
    settingShowClock: 'Mostrar reloj',
    signOut: 'Cerrar Sesión',
    subscription: 'Suscripción',
    title: 'Cuenta',
  },

  ai: {
    docs: `
  # Vision Studio | Personajes

La función **Personajes** en Vision Studio permite a los usuarios crear y gestionar perfiles detallados de personajes para diversos proyectos mediáticos. Ya sea que estés desarrollando personajes para juegos, películas o novelas, esta función proporciona herramientas completas para definir personalidades, antecedentes, rasgos y más.

## Diseño de la Función

La función de Personajes está estructurada para mejorar la organización y la productividad durante todo el proceso de creación de personajes.

### Explorador

La vista Explorador enumera todos los perfiles de personajes dentro del proyecto, categorizados por carpetas como "Personajes Principales", "Personajes Secundarios" y "NPCs".

### Vista Vacía

Al ingresar a la función de Personajes, los usuarios encuentran una interfaz simplificada con herramientas esenciales:

- **Pestaña Comenzar**: Ofrece guías introductorias y tutoriales para nuevos usuarios.
- **Pestaña FAQs**: Proporciona respuestas a preguntas comunes sobre la creación y gestión de personajes.
- **Pestaña Videos**: Contiene tutoriales en video que demuestran técnicas de creación de personajes.
- **Pestaña Docs**: Ofrece documentación y plantillas para perfiles y atributos de personajes.
- **Pestaña Exportaciones**: Permite exportar perfiles de personajes en formatos JSON, CSV y PDF.

### Vista de Contenido

Seleccionar un perfil de personaje del Explorador llena la Vista de Contenido. Aquí, los usuarios pueden ver y editar información detallada del personaje:

- **Barra de Acciones**: Proporciona opciones para editar, duplicar, guardar y eliminar perfiles de personajes.
- **Panel de Herramientas**: Ofrece pestañas como "Editar", "IA" e "Importar" para configurar y mejorar los detalles de los personajes.
- **Vista Previa**: Permite a los usuarios previsualizar perfiles de personajes y modificaciones antes de finalizar los cambios.

### Herramientas de la Función

El panel de Herramientas de la Función proporciona funcionalidades avanzadas para crear y gestionar perfiles de personajes:

- **Pestaña Crear/Editar**: Permite a los usuarios definir atributos de personajes usando el esquema \`ICharacter\`, especificando demografía, rasgos, antecedentes y más.
- **Pestaña IA**: Utiliza herramientas de IA para generar perfiles de personajes basados en criterios y temas especificados.
- **Pestaña Importar**: Facilita la importación de perfiles de personajes desde fuentes externas usando formato JSON.

## Importaciones y Exportaciones

La función de Personajes soporta capacidades de importación y exportación sin problemas para una colaboración y gestión de proyectos eficientes:

### Importaciones

Los usuarios pueden importar perfiles y atributos de personajes usando formato JSON, asegurando compatibilidad e integridad de datos.

### Exportaciones

Los perfiles de personajes se pueden exportar en varios formatos:
- JSON
- CSV
- PDF

La pestaña Exportaciones dentro de la Vista Vacía permite exportar colecciones enteras o subconjuntos de perfiles de personajes para compartir y archivar.

## Creación y Gestión de Perfiles de Personajes

### Creación de Nuevos Personajes

Para crear un nuevo perfil de personaje, navega a la pestaña "Comenzar" y haz clic en el gran botón azul redondo con un +. Esta acción abre el panel "Herramientas de Personajes", permitiendo a los usuarios definir demografía, rasgos y antecedentes.

### Edición de Detalles de Personajes

Editar perfiles de personajes permite a los usuarios modificar demografía, rasgos, antecedentes y otros atributos usando la pestaña "Editar" en el panel de Herramientas de la Función.

### Generación de Personajes Asistida por IA

La pestaña "IA" en el panel "Herramientas de Personajes" utiliza algoritmos de aprendizaje automático para sugerir perfiles de personajes basados en parámetros y temas definidos por el usuario.

### Importación y Exportación de Perfiles de Personajes

Usa la pestaña "Importar" para importar perfiles de personajes en formato JSON desde fuentes externas. La pestaña "Exportar" proporciona opciones para exportar perfiles de personajes en formatos JSON, CSV o PDF para compartir y colaborar.

## FAQs

Aquí tienes algunas preguntas frecuentes sobre la función **Personajes**:

1. **¿Cómo creo un nuevo perfil de personaje?**
   - Navega a la pestaña "Comenzar" y haz clic en el gran botón azul redondo con un + para abrir el panel "Herramientas de Personajes". Define la demografía, los rasgos y los antecedentes necesarios.

2. **¿Puedo importar perfiles de personajes de otros proyectos?**
   - Sí, usa la pestaña "Importar" para importar perfiles de personajes en formato JSON desde fuentes externas.

3. **¿Qué formatos de exportación son compatibles para los perfiles de personajes?**
   - Los perfiles de personajes se pueden exportar en formatos JSON, CSV y PDF para compatibilidad y colaboración.

4. **¿Cómo ayuda la pestaña IA en la generación de perfiles de personajes?**
   - La pestaña IA utiliza aprendizaje automático para sugerir perfiles de personajes basados en temas y atributos definidos por el usuario.

5. **¿Hay un límite en la cantidad de perfiles de personajes que puedo crear?**
   - La cantidad de perfiles de personajes puede variar según tu plan de suscripción.

6. **¿Puedo previsualizar perfiles de personajes antes de finalizar los cambios?**
   - Sí, usa la opción "Vista Previa" en la Barra de Acciones para visualizar perfiles de personajes y modificaciones.

7. **¿Qué tipos de proyectos mediáticos pueden beneficiarse de la función de Personajes?**
   - Vision Studio soporta la creación de personajes para juegos, películas, novelas y otros proyectos mediáticos que requieran perfiles detallados de personajes.

8. **¿Puedo colaborar con miembros del equipo en perfiles de personajes?**
   - Sí, invita a los miembros del equipo a tu espacio de trabajo para colaborar en la creación y gestión de perfiles de personajes.

9. **¿Hay plantillas predefinidas para perfiles de personajes comunes?**
   - Sí, explora la pestaña "Docs" en la Vista Vacía para encontrar plantillas y guías sobre la creación de perfiles de personajes.

10. **¿Cómo puedo eliminar un perfil de personaje de mi proyecto?**
    - Selecciona el perfil de personaje en la vista Explorador y usa la opción "Eliminar" en la Barra de Acciones. Confirma la eliminación en el modal que aparece.

## Apéndice

  `,
    featurePage: {
      description: 'El contenido generado por IA acelera su flujo de trabajo creativo, ayudándole a producir recursos multimedia de alta calidad de manera eficiente.',
      details: [
        {
          content: 'Aprovecha los modelos de IA avanzados para generar contenido de texto de alta calidad rápidamente, mejorando tu proceso de escritura y estimulando la creatividad.',
          title: 'Generación de Texto Potenciada por IA'
        },
        {
          content: 'Transforma indicaciones de texto en imágenes impresionantes utilizando IA, ahorrando tiempo y aumentando tu producción creativa.',
          title: 'Creación de Imágenes Innovadoras con IA'
        },
        {
          content: 'Genera contenido de audio, incluyendo actuación de voz y efectos de sonido, con IA, optimizando tu flujo de trabajo de producción de audio.',
          title: 'Producción de Audio con IA'
        },
        {
          content: 'Produce narrativas visuales complejas con videos generados por IA, haciendo la creación de videos más eficiente y accesible.',
          title: 'Generación de Video con IA'
        },
        {
          content: 'Crea modelos 3D detallados a partir de descripciones de texto utilizando IA, dando vida a tus personajes y entornos con facilidad.',
          title: 'Modelos 3D Generados por IA'
        }
      ],
      key: 'ai',
    },

  },

  auth: {
    acceptTerms: 'Acepto los [Términos y condiciones](/legal)',
    alreadyHaveAccount: '¿Ya tienes una cuenta?',
    dontHaveAccount: '¿No tienes una cuenta?',
    logIn: 'Iniciar sesión',
    logOut: 'Cerrar sesión',
    signInWith: (provider: string) => `Iniciar sesión con ${provider}`,
    signOut: 'Desconectar',
    signUp: 'Registrarse',
    singleSignOn: 'Inicio de Sesión Único',
    welcomeHeading: 'Bienvenido a Vision',
    welcomeSentence: '¡Donde puedes materializar tus ideas de ensueño, potenciadas con el poder de la IA!',
  },

  blueprints: {
    description: 'Un conjunto de plantillas de documentos para acelerar la creación de un documento',
    title: 'Planes',
  },

  characters: {
    description: 'Generar y editar personajes para usar en "Diálogos", etc.',
    featurePage: {
      description: 'Los personajes son el corazón y el alma de tus historias, cada uno con antecedentes, personalidades y tramas únicas.',
      details: [
        {
          content: 'Cree perfiles de personajes detallados, incluidos nombres, historias de fondo, personalidades y representaciones visuales. Da vida a tus personajes con profundidad y autenticidad.',
          title: 'Creación de personajes en profundidad',
        },
        {
          content: 'Genera arte conceptual de alta calidad basado en tus descripciones de personajes. Visualiza a tus personajes con precisión, mejorando la experiencia de construcción de mundos.',
          title: 'Arte conceptual impresionante',
        },
        {
          content: 'Experimenta con la generación de modelos 3D de tus personajes. Esto añade una nueva dimensión a tu narración, haciendo que tus personajes sean aún más atractivos.',
          title: 'Modelos 3D inmersivos',
        }
      ],
      key: 'characters'
    },
    form: {
      abilities: 'Habilidades',
      alias: 'Alias',
      background: 'Antecedentes',
      demongraphics: 'Demografía',
      education: 'Educación',
      ethnicity: 'Etnicidad',
      firstName: 'Nombre',
      gender: 'Género',
      identity: 'Identidad',
      images: 'Imágenes',
      language: 'Idioma',
      lastName: 'Apellido',
      name: 'Nombre',
      nationality: 'Nacionalidad',
      occupation: 'Ocupación',
      personality: 'Personalidad',
      sexuality: 'Sexualidad',
      skills: 'Habilidades',
    },
    title: 'Personajes'
  },

  common: {
    behaviour: 'Comportamiento',
    description: 'Descripción',
    diet: 'Dieta',
    folder: 'Carpeta',
    folders: 'Carpetas',
    fuelType: 'Tipo de combustible',
    galleryIds: 'Carpetas',
    habitat: 'Hábitat',
    lore: 'Historia',
    material: 'Material',
    plot: 'Trama',
    speed: 'Velocidad',

    abilities: 'Capacidades',
    abort: 'Cancelar',
    add: 'Agregar',
    addItem: (value) => `Agregar ${value}`,
    admin: 'Administrador',
    alias: 'Alias',
    art: 'Arte',
    artConcept: 'Arte Conceptual',
    back: 'Volver',
    background: 'Fondo',
    cancel: 'Cancelar',
    close: 'Cerrar',
    confirm: 'Confirmar',
    continue: 'Continuar',
    create: 'Crear',
    createItem: (value) => `Crear ${value}`,
    daily: 'Diariamente',
    day: 'Día',
    days: 'Días',
    delete: 'Eliminar',
    deleteItem: (value) => `Eliminar ${value}`,
    demographics: 'Demografía',
    docs: 'Documentos',
    download: 'Descargar',
    duplicate: 'Duplicar',
    edit: 'Editar',
    editItem: (value) => `Editar ${value}`,
    education: 'Educación',
    ethnicity: 'Etnicidad',
    explorer: 'Explorador',
    export: 'Exportar',
    exports: 'Exportaciones',
    faqs: 'Preguntas frecuentes',
    features: 'Funcionalidades',
    firstName: 'Primer nombre',
    gender: 'Género',
    getStarted: 'Empezar',
    hi: 'Hola',
    hour: 'Hora',
    hourly: 'Cada hora',
    hours: 'Horas',
    identity: 'Identidad',
    images: 'Imágenes',
    import: 'Importar',
    imports: 'Importaciones',
    itemExplorer: (value) => `Explorador ${value}`,
    itemPreview: (value) => `Vista previa ${value}`,
    itemTools: (value) => `Herramientas ${value}`,
    language: 'Idioma',
    lastName: 'Apellido',
    legal: 'Legal',
    minute: 'Minuto',
    minutely: 'Minutario',
    minutes: 'Minutos',
    month: 'Mes',
    monthly: 'Mensualmente',
    months: 'Meses',
    name: 'Nombre',
    nationality: 'Nacionalidad',
    needHelp: 'Necesitas Ayuda',
    next: 'Siguiente',
    occupation: 'Ocupación',
    overview: 'Resumen',
    personality: 'Personalidad',
    preview: 'Vista previa',
    pricing: 'Precios',
    recentItems: (items: string) => `Recientes ${items}`,
    save: 'Guardar',
    search: 'Buscar',
    searchResource: (resource) => `Buscar ${resource}`,
    settings: 'Configuraciones',
    sexuality: 'Sexualidad',
    skills: 'Habilidades',
    tools: 'Herramientas',
    webApp: 'Aplicación',
    webSite: 'Sitio',
    week: 'Semana',
    weekly: 'Semanalmente',
    weeks: 'Semanas',
    year: 'Año',
    yearly: 'Anualmente',
    years: 'Años',
  },

  components: {
    confirmActionHeading: (action: string, resource: string) => `${action} ${resource}`,
    confirmActionOnItem: (action: string, resource: string) => `¿Está seguro de que desea ${action} este ${resource}?`,
    confirmActionOnItemDescription: (primary: string, secondary: string) => `Presione "${primary}" para continuar, o "${secondary}" para cancelar.`,
    featureGuideWelcomeP1: (featureName: string) => `Bienvenido a la función de *${featureName}*.`,
    featureGuideWelcomeP2: (featureName: string) => `Aquí puede crear una nueva *${featureName}* o elegir editar una existente.`,
    featureGuideWelcomeP3: (featureName: string) => `Cada *${featureName}* guardada es visible en el "Explorador" a la izquierda.`,
    sidebarClose: 'Cerrar barra lateral',

  },

  controls: {
    featurePage: {
      description: 'Los controles proporcionan las herramientas para gestionar los elementos interactivos dentro de sus proyectos, garantizando experiencias de usuario fluidas y atractivas.',
      details: [
        {
          content: 'Implementa esquemas de control adaptados para las principales plataformas como PlayStation, Xbox y Nintendo Switch, asegurando una experiencia de usuario consistente.',
          title: 'Controles Específicos de la Plataforma',
        },
        {
          content: 'Accede a una colección de esquemas de control preconfigurados para iniciar tu proyecto y personalízalos según sea necesario para ajustes finos.',
          title: 'Biblioteca de Preajustes Extensiva',
        },
        {
          content: 'Crea y gestiona esquemas de control personalizados, organizándolos en carpetas para facilitar el acceso y el uso específico del contexto, como \'combate\' vs. \'exploración\'.',
          title: 'Esquemas de Control Organizados',
        },
      ],
      key: 'controls',
    }

  },

  creatures: {
    featurePage: {
      description: 'Las criaturas son animales o personajes no humanoides que habitan tus historias, agregando vida y diversidad a tu mundo.',
      details: [
        {
          content: 'Cree diseños detallados e imaginativos para sus criaturas, asegurándose de que se integren perfectamente en su mundo.',
          title: 'Diseños de criaturas únicos'
        },
        {
          content: 'Defina el comportamiento, los hábitats y los roles ecológicos de sus criaturas para hacer su mundo más inmersivo y realista.',
          title: 'Comportamiento y ecología'
        },
        {
          content: 'Incorpore criaturas mágicas y míticas en sus historias, cada una con su propio folclore y habilidades místicas.',
          title: 'Criaturas mágicas y míticas'
        }
      ],
      key: 'creatures'
    }
  },

  dashboard: {
    addItem: 'Agregar Documento',
    addProject: 'Agregar Proyecto',
    contentRating: 'Clasificación de contenido',
    description: 'Crear, editar y navegar documentos.',
    devTechnology: 'Tecnología de desarrollo',
    projectArt: 'Arte conceptual',
    projectArtDescription: 'Las diferentes obras de arte de las diversas colecciones de sus proyectos en las diferentes funciones disponibles de Vision.',
    projectFeatures: 'Características del proyecto',
    projectFeaturesDescription: 'Las características se pueden agregar y eliminar de los proyectos arbitrariamente, sin afectar los recursos subyacentes.',
    projectInfo: 'Información del proyecto',
    projectInfoDescription: 'Modificar la información pública del proyecto',
    projects: '',
    releaseDate: 'Fecha de lanzamiento',
    tableHeaders: {
      lastUpdated: 'Última actualización',
      projectName: 'Nombre del proyecto',
      sections: 'Secciones',
    },
    targetPlatform: 'Plataforma objetivo',
    technology: 'Tecnología',
    title: 'Tablero',
    usersWithAccess: 'Usuarios con acceso',
    viewMore: 'Ver más',

  },

  dialogues: {
    featurePage: {
      description: 'Los diálogos dan vida a tus personajes, permitiendo interacciones ricas y atractivas entre ellos.',
      details: [
        {
          content: 'Crea y gestiona diálogos entre personajes con un editor fácil de usar, asegurando interacciones fluidas y atractivas.',
          title: 'Creación de Diálogos Intuitiva',
        },
        {
          content: 'Crea árboles de diálogos ramificados para explorar varios caminos y resultados de conversaciones, añadiendo profundidad a las interacciones entre personajes.',
          title: 'Árboles de Diálogos Dinámicos',
        },
        {
          content: 'Integra guiones de actuación de voz o archivos de audio para mejorar la inmersión y el realismo de tus diálogos.',
          title: 'Integración de Voz Perfecta',
        },
      ],
      key: 'dialogues',
    }
  },

  documents: {
    description: '',
    featurePage: {
      description: 'Los documentos son sus herramientas principales para escribir y organizar su contenido, con soporte para varios formatos.',
      details: [
        {
          content: 'Utiliza un editor de texto potente con opciones de formato enriquecido para crear documentos detallados y visualmente atractivos.',
          title: 'Edición de texto avanzada'
        },
        {
          content: 'Mantén tus documentos ordenados en carpetas y subcarpetas, haciéndolos fáciles de acceder y gestionar.',
          title: 'Organización eficiente de documentos'
        },
        {
          content: 'Importa y exporta documentos en varios formatos, incluidos PDF, Markdown y Docx, garantizando compatibilidad y facilidad de uso.',
          title: 'Importación y Exportación versátil'
        }
      ],
      key: 'documents'
    },
    title: '',

  },

  features: {
    '3D': '3D',
    account: 'Cuenta',
    ai: 'IA',
    ai3D: 'IA 3D',
    aiAudio: 'Audio de IA',
    aiExamples: 'Ejemplos de IA',
    aiImages: 'Imágenes de IA',
    aiText: 'Texto IA',
    aiVideo: 'Video de IA',
    asset: 'Activo',
    assets: 'Activos',
    audio: 'Audio',
    character: 'Personaje',
    characters: 'Personajes',
    control: 'Control',
    controls: 'Controles',
    creature: 'Criatura',
    creatures: 'Criaturas',
    dashboard: 'Tablero',
    dialogue: 'Diálogo',
    dialogues: 'Diálogos',
    document: 'Documento',
    documents: 'Documentos',
    examples: 'Ejemplos',
    graph: 'Gráfico',
    graphs: 'Gráficos',
    home: 'Inicio',
    homePage: 'Página de inicio',
    illustration: 'Ilustración',
    illustrations: 'Ilustraciones',
    images: 'Imágenes',
    location: 'Ubicación',
    locations: 'Ubicaciones',
    media: 'Medios',
    multimedia: 'Multimedia',
    object: 'Objeto',
    objects: 'Objetos',
    project: 'Proyecto',
    projects: 'Proyectos',
    quest: 'Misión',
    quests: 'Misiones',
    setting: 'Ajuste',
    settings: 'Ajustes',
    subscription: 'Suscripción',
    subscriptions: 'Suscripciones',
    text: 'Texto',
    transport: 'Transporte',
    transports: 'Transportes',
    user: 'Usuario',
    users: 'Usuarios',
    vehicle: 'Vehículo',
    vehicles: 'Vehículos',
    video: 'Video',
    workspace: 'Espacio de trabajo',
    workspaces: 'Espacios de trabajo',

  },

  galleries: {
    'character': {
      'description': 'Genera y edita personajes para usar en \'Diálogos\', etc.',
      'title': 'Galería de Personajes'
    },
    description: 'Un lugar para brainstormear conceptos visuales y ponerlos en colecciones de galerías.',
    image: {
      description: 'Genera imágenes personalizadas con IA',
      enterPrompt: 'Introduce una sugerencia',
      pickStyle: 'Elige un estilo artístico',
      title: 'Galería de imágenes',
    },
    sound: {
      description: 'Crea clips de sonido generados por IA',
      title: 'Galería de sonido'
    },
    title: 'Galerías',
    video: {
      description: 'Dirige videos a partir de texto con IA',
      title: 'Galería de video'
    }
  },

  generators: {
    description: 'El conjunto de generadores de IA subyacentes que hacen posible esta experiencia',
    title: 'Generadores',
  },

  graphs: {
    featurePage: {
      description: 'Los gráficos le permiten representar visualmente datos y relaciones dentro de sus proyectos, proporcionando claridad y visión.',
      details: [
        {
          content: 'Construye y personaliza gráficos para representar visualmente datos y relaciones complejas, mejorando la comprensión y el conocimiento.',
          title: 'Creación de Gráficos Integral',
        },
        {
          content: 'Utiliza gráficos para ilustrar relaciones de personajes, puntos de trama y otros elementos de la historia, haciendo la información compleja más accesible.',
          title: 'Visualización de Datos Efectiva',
        },
        {
          content: 'Crea gráficos interactivos que permitan a los usuarios explorar e interactuar con los datos, proporcionando una comprensión más profunda de tu proyecto.',
          title: 'Gráficos Interactivos',
        },
      ],
      key: 'graphs',
    }

  },

  landing: {
    allFeatures: 'Todas las características',
    getAccess: 'Obtener acceso',
    sections: [

    ],

    watchVideo: 'Ver video',
  },

  locations: {
    featurePage: {
      description: 'Los lugares proporcionan el escenario para tus historias, dando vida a tus mundos con detalles visuales ricos.',
      details: [
        {
          content: 'Define y describe ubicaciones con texto e imágenes ricos para crear entornos inmersivos que mejoren tu historia.',
          title: 'Creación Detallada de Ubicaciones'
        },
        {
          content: 'Visualiza tus ubicaciones y sus conexiones con mapas interactivos, facilitando la comprensión y navegación de tu mundo narrativo.',
          title: 'Integración de Mapas Interactivos'
        },
        {
          content: 'Agrega información histórica y basada en la tradición a tus ubicaciones, proporcionando profundidad y contexto que enriquece tu narración.',
          title: 'Rica Historia de Ubicaciones'
        }
      ],
      key: 'locations'
    }

  },

  objects: {
    featurePage: {
      description: 'Los objetos son elementos inanimados que pueden usarse, recolectarse o intercambiarse en tus historias, como armas, equipos, botines y monedas.',
      details: [
        {
          content: 'Cree descripciones detalladas para cada objeto, incluidas sus usos, orígenes y significados en tu historia.',
          title: 'Descripciones detalladas de los objetos'
        },
        {
          content: 'Organiza y gestiona los objetos de tu historia con facilidad, rastreando su disponibilidad y uso.',
          title: 'Gestión de inventario'
        },
        {
          content: 'Desarrolle un sistema comercial robusto para sus objetos, mejorando el aspecto económico de su historia.',
          title: 'Comercio y Economía'
        }
      ],
      key: 'objects'
    }
  },

  pricing: {

  },

  projects: {
    addProject: 'Agregar proyecto',
    createProject: 'Crear proyecto',
    editor: {
      linkCopiedToClipboard: 'Enlace Copiado al Portapapeles'
    },
    featurePage: {
      description: 'Los proyectos sirven como la base de su visión creativa, albergando todo el contenido relacionado e ideas en un solo lugar.',
      details: [
        {
          content: 'Crea y gestiona múltiples proyectos, cada uno dedicado a una idea creativa específica, como un juego, una serie de televisión o una novela gráfica. Mantén tus ideas organizadas y enfocadas.',
          title: 'Gestión de proyectos diversa'
        },
        {
          content: 'Personaliza cada proyecto con características únicas que se adapten a sus necesidades. Añade o elimina características en cualquier momento sin perder datos, asegurando flexibilidad y adaptabilidad.',
          title: 'Características personalizables'
        },
        {
          content: 'Transfiere proyectos fácilmente entre espacios de trabajo o cuentas usando la funcionalidad de importación/exportación. Mantén la integridad de tus datos durante las transiciones.',
          title: 'Importaciones y exportaciones sin esfuerzo'
        }
      ],
      key: 'projects'
    },
    generating: {

    },
    importProject: 'Importar proyecto',
    newProject: 'Nuevo proyecto',
    setup: {
      generate: 'Generar',
      next: 'Siguiente',
      projectName: '¿Cuál es el nombre de tu proyecto?',
      projectPrompt: '¿De qué trata tu proyecto?'
    }

  },

  transports: {
    featurePage: {
      description: 'Los transportes son cualquier modo de viajar a través del espacio-tiempo, incluidos los vehículos, los agujeros de gusano, las pistolas de portal, los ferrocarriles y las máquinas del tiempo.',
      details: [
        {
          content: 'Explore una variedad de modos de transporte, desde vehículos tradicionales hasta agujeros de gusano futuristas y máquinas del tiempo.',
          title: 'Modos de Transporte Innovadores'
        },
        {
          content: 'Descubre los últimos avances en tecnología de transporte, desde sistemas de hyperloop hasta dispositivos de teletransportación.',
          title: 'Tecnología Avanzada'
        },
        {
          content: 'Crea impresionantes visuales de métodos de transporte para sumergir a tu audiencia en la experiencia de viajar a través del espacio-tiempo.',
          title: 'Visuales Inmersivos'
        }
      ],
      key: 'transports'
    }

  },

  version: {
    currentVersion: 'Tu versión actual es:',
    getVersion: '¡Consíguelo ahora!',
    header: 'Actualización de Vision',
    newVersion: 'Nueva versión',
    updateNow: 'Actualizar ahora',
  },

  workspaces: {
    addWorkspace: 'Agregar espacio de trabajo',
    addWorkspaceImage: 'Agregar imagen del espacio de trabajo',
    addWorkspaceName: 'Agregar nombre del espacio de trabajo',
    addWorkspaceUsers: 'Agregar usuarios al espacio de trabajo',
    addWorkspaceUsersInfo: 'Agrega usuarios a tu espacio de trabajo, asigna permisos a cada uno y comparte todos los proyectos en este espacio de trabajo con ellos.',
    chooseAWorkspace: 'Elige un espacio de trabajo',
    createWorkspace: 'Crear espacio de trabajo',
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
    permissions: 'Permisos',
    toCreateProjectsIn: 'para crear proyectos en'
  },
};
