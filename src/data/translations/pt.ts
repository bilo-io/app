import { ITranslation } from '.';

export const pt = {
  account: {
    billing: 'Faturamento',
    chooseTheme: 'Escolher Tema',
    dark: 'Escuro',
    email: 'Email',
    features: 'Recursos',
    light: 'Claro',
    name: 'Nome',
    profile: 'Perfil',
    settingExplorerAutoExpand: 'Expandir automaticamente as pastas no Explorador para cada recurso',
    settingExplorerEditOnSelect: 'Abrir automaticamente o Editor ao selecionar um item no Explorador',
    settingNavbarExpanded: 'Expandir Barra de Navegação',
    settingPickLanguage: 'Escolher Idioma',
    settingPickTheme: 'Escolher Tema',
    settingPlayMusicOnStartup: 'Tocar Música na Inicialização do Projeto',
    settingShowClock: 'Mostrar Relógio',
    signOut: 'Sair',
    subscription: 'Assinatura',
    title: 'Conta',
  },

  ai: {
    featurePage: {
      description: 'Conteúdo gerado por IA acelera seu fluxo de trabalho criativo, ajudando a produzir recursos de mídia de alta qualidade de forma eficiente.',
      details: [
        {
          content: 'Aproveite modelos avançados de IA para gerar conteúdo de texto de alta qualidade rapidamente, melhorando seu processo de escrita e estimulando a criatividade.',
          title: 'Geração de Texto com IA'
        },
        {
          content: 'Transforme prompts de texto em imagens impressionantes usando IA, economizando tempo e aumentando sua produção criativa.',
          title: 'Criação Inovadora de Imagens com IA'
        },
        {
          content: 'Gere conteúdo de áudio, incluindo dublagem e efeitos sonoros, com IA, simplificando seu fluxo de trabalho de produção de áudio.',
          title: 'Produção de Áudio com IA'
        },
        {
          content: 'Produza narrativas visuais complexas com vídeos gerados por IA, tornando a criação de vídeos mais eficiente e acessível.',
          title: 'Geração de Vídeos com IA'
        },
        {
          content: 'Crie modelos 3D detalhados a partir de descrições de texto usando IA, dando vida a seus personagens e ambientes com facilidade.',
          title: 'Modelos 3D Gerados por IA'
        }
      ],
      key: 'ai'
    }
  },

  auth: {
    acceptTerms: 'Aceitar Termos',
    alreadyHaveAccount: 'Já tem uma conta?',
    changeUser: 'Mudar usuário',
    dontHaveAccount: 'Não tem uma conta?',
    logIn: 'Entrar',
    logOut: 'Sair',
    signInWith: (provider: string) => `Entrar com ${provider}`,
    signOut: 'Sair',
    signUp: 'Inscrever-se',
    singleSignOn: 'Login Único',
    welcomeHeading: 'Bem-vindo',
    welcomeSentence: 'Bem-vindo à nossa plataforma.'
  },

  blueprints: {
    description: 'Um conjunto de modelos de documentos para acelerar a criação de um documento',
    title: 'Modelos',
  },

  common: {
    abort: 'Abortar',
    add: 'Adicionar',
    addItem: (value: string) => `Adicionar ${value}`,
    admin: 'Admin',
    art: 'Arte',
    artConcept: 'Arte Conceitual',
    back: 'Voltar',
    cancel: 'Cancelar',
    close: 'Fechar',
    confirm: 'Confirmar',
    contactSupport: 'Contato com suporte',
    continue: 'Continuar',
    create: 'Criar',
    createItem: (value: string) => `Criar ${value}`,
    daily: 'Diário',
    day: 'Dia',
    days: 'Dias',
    delete: 'Excluir',
    deleteItem: (value: string) => `Excluir ${value}`,
    docs: 'Documentos',
    download: 'Baixar',
    duplicate: 'Duplicar',
    edit: 'Editar',
    editItem: (value: string) => `Editar ${value}`,
    errorSummary: 'Ocorreu um erro inesperado.',
    errorTitle: 'Oh não',
    explorer: 'Explorador',
    export: 'Exportar',
    exports: 'Exportações',
    faqs: 'FAQs',
    features: 'Recursos',
    getStarted: 'Começar',
    hi: 'Oi',
    hour: 'Hora',
    hourly: 'Por hora',
    hours: 'Horas',
    import: 'Importar',
    imports: 'Importações',
    itemExplorer: (value: string) => `Explorar ${value}`,
    itemPreview: (value: string) => `Pré-visualizar ${value}`,
    itemTools: (value: string) => `Ferramentas ${value}`,
    legal: 'Legal',
    minute: 'Minuto',
    minutely: 'Por minuto',
    minutes: 'Minutos',
    month: 'Mês',
    monthly: 'Mensalmente',
    months: 'Meses',
    needHelp: 'Precisa de Ajuda',
    next: 'Próximo',
    overview: 'Visão geral',
    preview: 'Pré-visualizar',
    pricing: 'Preços',
    recentItems: (items: string) => `Itens recentes ${items}`,
    save: 'Salvar',
    search: 'Pesquisar',
    searchResource: (resource: string) => `Pesquisar ${resource}`,
    settings: 'Configurações',
    tools: 'Ferramentas',
    warning: 'Aviso',
    warningRequireProject: 'Selecione um Projeto primeiro',
    warningRequireWorkspace: 'Selecione um Espaço de Trabalho primeiro',
    webApp: 'Aplicativo',
    webSite: 'Site',
    week: 'Semana',
    weekly: 'Semanalmente',
    weeks: 'Semanas',
    year: 'Ano',
    yearly: 'Anualmente',
    years: 'Anos',
  },

  components: {
    confirmActionHeading: (action: string, resource: string) => `${action}`,
    confirmActionOnItem: (action: string, resource: string) => `Tem certeza de que deseja ${action} este ${resource}?`,
    confirmActionOnItemDescription: (primary: string, secondary: string) => `Pressione "${primary}" para continuar, ou "${secondary}" para cancelar.`,
    featureGuideWelcomeP1: (featureName: string) => `Bem-vindo ao recurso "*${featureName}*"`,
    featureGuideWelcomeP2: (featureName: string) => `Aqui você pode criar um novo *${featureName}* ou escolher editar um existente.`,
    featureGuideWelcomeP3: (featureName: string) => `Cada *${featureName}* salvo é visível no "*Explorador*" à esquerda.`,
    sidebarClose: 'Fechar Barra Lateral',
  },

  controls: {
    docs: `
# Vision Studio | Controles

## Visão Geral

O recurso de Gerenciamento de Esquema de Controle oferece aos usuários a flexibilidade de personalizar e gerenciar configurações de controle para vários aspectos do jogo. Os usuários podem configurar manualmente os controles para diferentes cenários do jogo, como combate, parkour, furtividade ou zona segura, ou utilizar a geração de controle impulsionada por IA para criar esquemas diversos e dinâmicos.

## Recursos Principais

### 1. **Configuração Manual de Controle**

Os usuários têm a capacidade de configurar manualmente esquemas de controle com base em suas preferências e necessidades de jogo. A interface intuitiva permite a atribuição de ações a diferentes dispositivos de entrada e botões.

### 2. **Geração de Controle por IA**

A Vision introduz um inovador recurso de geração de controle impulsionado por IA. Os usuários podem escolher deixar a IA projetar esquemas de controle para cenários específicos do jogo. Isso garante uma variedade de estilos de jogo e desafios dentro do mesmo ambiente de jogo.

### 3. **Múltiplos Esquemas por Projeto de Jogo**

A Vision suporta a criação e gerenciamento de múltiplos esquemas de controle dentro de um único projeto de jogo. Isso permite que os usuários adaptem os controles para diferentes situações no jogo, como combate, parkour, furtividade ou zonas seguras. Os usuários podem alternar entre esses esquemas durante o jogo.

## Como Usar

### Configuração Manual

1. Navegue até a seção de Esquema de Controle nas configurações do jogo.
2. Escolha o cenário ou aspecto para o qual deseja configurar os controles (por exemplo, combate, parkour).
3. Atribua ações a dispositivos de entrada específicos e botões, seguindo as instruções na tela.
4. Salve seu esquema de controle personalizado.

### Geração por IA

1. Acesse a ferramenta de Geração de Controle por IA nas configurações do Esquema de Controle.
2. Selecione o cenário ou aspecto do jogo para o qual deseja que a IA gere os controles (por exemplo, furtividade).
3. Revise e ajuste o esquema de controle sugerido.
4. Salve o esquema de controle gerado pela IA.

### Gerenciando Múltiplos Esquemas

1. Na seção de Esquema de Controle, navegue até a guia Gerenciar Esquemas.
2. Crie um novo esquema e especifique seu propósito (por exemplo, furtividade).
3. Configure os controles manualmente ou use a geração por IA para o novo esquema.
4. Salve o esquema e alterne facilmente entre diferentes esquemas durante o jogo.

## Notas

- Experimente vários esquemas de controle para aprimorar sua experiência de jogo.
- Utilize a geração por IA para cenários de jogo criativos e desafiadores.
- Salve e gerencie múltiplos esquemas de controle para se adaptar a diferentes situações no jogo.

# Vision Studio | Controles

O recurso **Controles** no Vision Studio permite a gestão detalhada e personalização das configurações de controle para vários dispositivos de entrada. Se você está projetando controles de jogo, configurando mapeamentos de entrada ou otimizando interações de interface do usuário, este recurso fornece ferramentas para simplificar a gestão de controles.

## Layout do Recurso

O recurso Controles é projetado com um layout estruturado para melhorar a experiência do usuário e a produtividade.

### Explorador

A visão do Explorador exibe uma lista abrangente de configurações de controle categorizadas em pastas com base nos requisitos do projeto. Cada item de controle fornece informações detalhadas, incluindo nome, descrição e opções de configuração.

### Visão Vazia

Ao entrar no recurso Controles, os usuários são apresentados com ferramentas e recursos essenciais para começar:

- **Guia de Introdução**: Oferece uma visão geral introdutória do recurso com links para documentação e tutoriais.
- **Guia de FAQs**: Fornece respostas para perguntas comuns sobre o uso das configurações de controle no Vision Studio.
- **Guia de Vídeos**: Contém tutoriais em vídeo que demonstram como configurar e gerenciar mapeamentos de controle de forma eficaz.
- **Guia de Documentos**: Fornece documentação detalhada e diretrizes para criar e editar configurações de controle.
- **Guia de Exportações**: Permite a exportação de configurações de controle em formatos como JSON, CSV e PDF.

### Visão de Conteúdo

Selecionar uma configuração de controle no Explorador preenche a Visão de Conteúdo. Aqui, os usuários podem visualizar e editar detalhes do controle:

- **Barra de Ações**: Fornece opções para gerenciar a configuração de controle selecionada, incluindo edição, duplicação, salvamento e exclusão.
- **Painel de Ferramentas**: Oferece guias como "Editar", "IA" e "Importar" para configurar, aprimorar e importar configurações de controle.
- **Pré-visualização**: Permite que os usuários pré-visualizem mapeamentos de controle e configurações antes de finalizar as mudanças.

### Ferramentas de Recurso

O painel de Ferramentas de Recurso oferece funcionalidades avançadas para criar, editar e gerenciar configurações de controle:

- **Guia Criar/Editar**: Permite que os usuários definam configurações de controle usando o esquema \`IControls\`, especificando pares de chave-valor para cada tipo de controle.
- **Guia IA**: Utiliza ferramentas de IA para sugerir configurações de controle otimizadas com base nos tipos de dispositivos de entrada e nos requisitos do projeto.
- **Guia Importar**: Permite a importação de mapeamentos ou configurações de controle de fontes externas, suportando o formato JSON.

## Importações e Exportações

O recurso Controles possui robustas capacidades de importação e exportação para integração e compartilhamento contínuos entre projetos:

### Importações

Os usuários podem importar mapeamentos e configurações de controle usando o formato JSON, aproveitando o esquema flexível \`IControls\` para dados estruturados.

### Exportações

As configurações de controle podem ser exportadas em vários formatos:
- JSON
- CSV
- PDF

A guia Exportações na Visão Vazia facilita a exportação de coleções inteiras ou subconjuntos de configurações de controle, garantindo compatibilidade e colaboração.

## Criando e Gerenciando Configurações de Controle

### Criando Novas Configurações de Controle

Para criar uma nova configuração de controle, navegue até a guia "Guia de Introdução" e clique no grande botão azul redondo com um +. Esta ação abre o painel "Ferramentas de Controle", permitindo que os usuários definam configurações e mapeamentos de controle.

### Editando Detalhes do Controle

Editar configurações de controle permite que os usuários modifiquem pares de chave-valor, nomes, descrições e configurações usando a guia "Editar" no painel de Ferramentas de Recurso.

### Configuração de Controle Assistida por IA

A guia "IA" no painel "Ferramentas de Controle" oferece ferramentas impulsionadas por IA para recomendar configurações de controle otimizadas com base nas especificações dos dispositivos de entrada e nas preferências do usuário.

### Importando e Exportando Configurações de Controle

Use a guia "Importar" para importar mapeamentos ou configurações de controle em formato JSON de fontes externas. A guia "Exportar" oferece opções para exportar configurações de controle em formatos JSON, CSV ou PDF para compartilhamento e backup.

## FAQs

Aqui estão algumas perguntas frequentes sobre o recurso **Controles**:

1. **Como crio uma nova configuração de controle?**
   - Navegue até a guia "Guia de Introdução" e clique no grande botão azul redondo com um + para abrir o painel "Ferramentas de Controle". Defina os pares de chave-valor e as configurações necessárias.

2. **Posso importar configurações de controle de outros projetos?**
   - Sim, use a guia "Importar" para importar mapeamentos de controle em formato JSON de fontes externas.

3. **Quais formatos de exportação são suportados para configurações de controle?**
   - As configurações de controle podem ser exportadas nos formatos JSON, CSV e PDF para compatibilidade e colaboração.

4. **Como a guia de IA auxilia na configuração de controles?**
   - A guia de IA utiliza algoritmos de aprendizado de máquina para sugerir configurações de controle otimizadas com base nos tipos de dispositivos de entrada e nos requisitos do projeto.

5. **Há um limite para o número de configurações de controle que posso criar?**
   - O número de configurações de controle que você pode criar pode variar com base no seu plano de assinatura.

6. **Posso pré-visualizar mapeamentos de controle antes de aplicar mudanças?**
   - Sim, use a opção "Pré-visualização" na Barra de Ações para visualizar mapeamentos e configurações de controle antes de finalizar as edições.

7. **Quais tipos de dispositivos de entrada são suportados para configurações de controle?**
   - O Vision Studio suporta uma ampla gama de dispositivos de entrada, permitindo configuração e personalização flexíveis de mapeamentos de controle.

8. **Posso colaborar com membros da equipe nas configurações de controle?**
   - Sim, convide membros da equipe para o seu espaço de trabalho para colaborar na criação e gestão de configurações de controle para projetos.

9. **Existem templates predefinidos para configurações comuns de controle?**
    - Sim, explore a guia "Documentação" na Visualização Vazia para obter modelos e diretrizes sobre como configurar mapeamentos de controle comuns.

10. **Como posso excluir uma configuração de controle do meu projeto?
    - Selecione a configuração de controle na visualização do Explorador e use a opção "Excluir" na ActionBar. Confirme a exclusão na janela modal que aparece.**

`,

    faqs: [
      {
        answer:
                    'O painel de Controles é um gerador de esquema de controle impulsionado por IA projetado para PS5, Xbox e Nintendo Switch. Ele simplifica o processo de configuração de esquemas de controle para diferentes consoles em seu jogo.',
        question: 'Quais funcionalidades o painel de Controles oferece para o design de jogos?',
      },
      {
        answer:
                    'A IA no painel de Controles leva em consideração os requisitos específicos de cada console e sugere esquemas de controle ótimos, garantindo uma experiência de jogo contínua e amigável ao usuário.',
        question: 'Como a IA auxilia na geração de esquemas de controle?',
      },
      {
        answer:
                    'Absolutamente. Enquanto a IA fornece sugestões iniciais, você tem a flexibilidade para personalizar e ajustar os esquemas de controle para cada console, atendendo às necessidades únicas do seu jogo.',
        question: 'Posso personalizar os esquemas de controle para cada console?',
      },
      {
        answer:
                    'Sim, a plataforma oferece um recurso de visualização, permitindo simular e testar esquemas de controle em tempo real, garantindo que atendam às suas expectativas de design e experiência do jogador.',
        question: 'Existe um recurso de visualização para esquemas de controle?',
      },
      {
        answer:
                    'Sim, você pode exportar esquemas de controle para PS5, Xbox e Nintendo Switch em vários formatos, facilitando a integração em seu pipeline de desenvolvimento de jogos.',
        question: 'Posso exportar esquemas de controle para uso externo?',
      },
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      {
        answer: 'Controles são usados para definir esquemas de controle para dispositivos de entrada populares como PS, Xbox, Switch e PC.',
        question: '--- Para que são usados os Controles no Vision Studio?'
      },
      {
        answer: 'Sim, você pode criar esquemas de controle personalizados adaptados às necessidades do seu projeto.',
        question: 'Posso criar esquemas de controle personalizados?'
      },
      {
        answer: 'Os esquemas de controle podem ser exportados nos formatos JSON, CSV e PDF.',
        question: 'Como exporto esquemas de controle?'
      },
      {
        answer: 'Sim, você pode importar esquemas de controle de arquivos JSON ou CSV.',
        question: 'Posso importar esquemas de controle existentes?'
      },
      {
        answer: 'O número de esquemas de controle que você pode criar pode ser limitado com base no seu plano de assinatura.',
        question: 'Há um limite para o número de esquemas de controle que posso criar?'
      },
      {
        answer: 'Sim, você pode convidar colaboradores para seu espaço de trabalho para colaborar na criação e gerenciamento de esquemas de controle para projetos.',
        question: 'Posso colaborar em esquemas de controle com outros?'
      },
      {
        answer: 'Selecione o esquema de controle no Explorador e use as "Ferramentas de Controle" para editar seus detalhes.',
        question: 'Como edito um esquema de controle existente?'
      },
      {
        answer: 'Sim, você pode duplicar um esquema de controle usando a opção "Duplicar" na ActionBar.',
        question: 'Posso duplicar um esquema de controle?'
      },
      {
        answer: 'Selecione o esquema de controle e use a opção "Excluir" na ActionBar. Uma janela modal de confirmação aparecerá antes da exclusão.',
        question: 'Como excluo um esquema de controle?'
      },
      {
        answer: 'Esquemas de controle podem ser criados para dispositivos de entrada PS, Xbox, Switch e PC (mouse e teclado).',
        question: 'Quais dispositivos de entrada são suportados para esquemas de controle?'
      }
    ],
    featurePage: {
      description: 'Os Controles fornecem ferramentas para gerenciar os elementos interativos dentro de seus projetos, garantindo experiências de usuário suaves e envolventes.',
      details: [
        {
          content: 'Implemente esquemas de controle adaptados para plataformas principais como PlayStation, Xbox e Nintendo Switch, garantindo uma experiência de usuário consistente.',
          title: 'Controles Específicos de Plataforma',
        },
        {
          content: 'Acesse uma coleção de esquemas de controle preconfigurados para iniciar seu projeto e personalizá-los conforme necessário para ajustes finos.',
          title: 'Biblioteca Extensa de Predefinições',
        },
        {
          content: 'Crie e gerencie esquemas de controle personalizados, organizando-os em pastas para facilitar o acesso e o uso específico de contexto, como \'combate\' vs. \'exploração\'.',
          title: 'Esquemas de Controle Organizados',
        },
      ],
      key: 'controls',
    }
  },

};