import { TeamMember, Review, Category, ModelSet, ProgrammingSet, AddonSet } from '../types';

// ==========================================
// ARQUIVO TEMPLATE - BACKUP DO MOCKDATA
// ==========================================
// Este arquivo serve como backup e template para o mockData principal
// Copie o conteúdo deste arquivo para mockData.ts se precisar restaurar

// ==========================================
// CONFIGURAÇÕES GERAIS DO SITE
// ==========================================
export const siteConfig = {
  // Informações básicas
  siteName: 'FirstStudioss',
  siteDescription: 'Criamos experiências únicas através de modelos 3D excepcionais, programações avançadas e addons inovadores para Minecraft',
  
  // Hero Section
  hero: {
    title: 'FirstStudioss',
    subtitle: 'Criamos experiências únicas através de modelos 3D excepcionais, programações avançadas e addons inovadores para Minecraft',
    backgroundImage: 'https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&w=1200',
    primaryButtonText: 'Ver Nossos Projetos',
    secondaryButtonText: 'Assista ao Demo'
  },

  // Seções da Home
  sections: {
    team: {
      title: 'Nossa Equipe',
      description: 'Somos uma equipe apaixonada de criadores dedicados a transformar ideias em realidade digital. Com anos de experiência combinada, oferecemos soluções inovadoras e de alta qualidade.',
      buttonText: 'Conheça Toda a Equipe'
    },
    featuredWork: {
      title: 'Nossos Trabalhos em Destaque',
      description: 'Uma seleção dos nossos melhores projetos que demonstram nossa qualidade e criatividade'
    },
    reviews: {
      title: 'O Que Nossos Clientes Dizem',
      description: 'Feedback real de clientes satisfeitos com nosso trabalho'
    }
  },

  // Informações de contato
  contact: {
    email: 'contact@FirstStudioss.com',
    phone: '+55 (11) 99999-9999',
    location: 'São Paulo, Brasil',
    socialMedia: {
      youtube: 'https://youtube.com',
      discord: 'https://discord.com',
      instagram: 'https://instagram.com'
    }
  },

  // Representante de contato
  contactRepresentative: {
    name: 'Alex Thompson',
    role: 'Representante Comercial',
    bio: 'Responsável por atendimento ao cliente e negociações. Entre em contato para discutir seu projeto e receber um orçamento personalizado.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    contact: {
      email: 'alex@FirstStudioss.com',
      phone: '+55 (11) 99999-9999',
      discord: 'AlexThompson#1234'
    }
  },

  // Parceria especial
  specialPartnership: {
    title: 'Parceria Especial',
    name: 'MinecraftBR Studio',
    description: 'Estúdio especializado em criação de conteúdo para Minecraft com foco em qualidade e inovação.',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400',
    socialLink: {
      platform: 'YouTube',
      url: 'https://youtube.com',
      buttonText: 'Ver no YouTube'
    }
  },

  // Textos das páginas
  pages: {
    team: {
      title: 'Nossa Equipe',
      description: 'Conheça os talentosos profissionais que tornam nossos projetos possíveis. Cada membro traz expertise única e paixão pelo que faz.'
    },
    models: {
      title: 'Nossos Modelos',
      description: 'Explore nossa coleção de modelos 3D de alta qualidade, organizados por categoria para facilitar sua busca.'
    },
    programming: {
      title: 'Nossas Programações',
      description: 'Descubra nossos sistemas, scripts e soluções programáticas desenvolvidos com as melhores práticas e tecnologias modernas.'
    },
    addons: {
      title: 'Nossos Addons',
      description: 'Explore nossa coleção de addons para Minecraft. Cada addon inclui um vídeo demonstrativo mostrando suas funcionalidades e como usar.'
    },
    contact: {
      title: 'Entre em Contato',
      description: 'Tem um projeto em mente? Quer colaborar conosco? Entre em contato e vamos conversar sobre como podemos ajudar a transformar sua ideia em realidade.',
      formTitle: 'Envie uma Mensagem',
      contactInfoTitle: 'Informações de Contato',
      socialMediaTitle: 'Redes Sociais'
    }
  }
};

// ==========================================
// MEMBROS DA EQUIPE
// ==========================================
export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Alex Thompson',
    role: 'Lead Developer',
    bio: 'Especialista em desenvolvimento de sistemas e scripts avançados com mais de 5 anos de experiência.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '2',
    name: 'Maria Santos',
    role: '3D Artist',
    bio: 'Criadora de modelos 3D realistas para RPGs e veículos, especializada em texturas detalhadas.',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '3',
    name: 'João Silva',
    role: 'Game Designer',
    bio: 'Designer focado em mecânicas de jogo e experiência do usuário em projetos Minecraft.',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '4',
    name: 'Ana Costa',
    role: 'Content Creator',
    bio: 'Criadora de conteúdo especializada em tutoriais e demonstrações de addons.',
    image: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=400'
  }
];

// ==========================================
// AVALIAÇÕES DE CLIENTES
// ==========================================
export const reviews: Review[] = [
  {
    id: '1',
    name: 'Carlos Oliveira',
    rating: 5,
    comment: 'Trabalho excepcional! Os modelos são extremamente detalhados e profissionais.',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '2',
    name: 'Fernanda Lima',
    rating: 5,
    comment: 'Os addons desenvolvidos pela equipe revolucionaram nosso servidor. Recomendo muito!',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '3',
    name: 'Pedro Rocha',
    rating: 4,
    comment: 'Excelente suporte e qualidade. Os scripts funcionam perfeitamente.',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

// ==========================================
// CATEGORIAS E MODELOS 3D
// ==========================================
export const modelCategories: Category[] = [
  { 
    id: '1', 
    name: 'RPG', 
    description: 'Personagens e criaturas fantasy' 
  },
  { 
    id: '2', 
    name: 'Veículos', 
    description: 'Carros, motos e aeronaves' 
  },
  { 
    id: '3', 
    name: 'Animais', 
    description: 'Criaturas realistas e míticas' 
  },
  { 
    id: '4', 
    name: 'Arquitetura', 
    description: 'Estruturas e construções' 
  }
];

export const modelSets: ModelSet[] = [
  {
    id: '1',
    name: 'Goblins Warrior Pack',
    categoryId: '1',
    description: 'Conjunto completo de guerreiros goblins com diferentes armas',
    images: [
      'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    detailedDescription: 'Set completo com 12 modelos únicos de goblins guerreiros, incluindo diferentes poses, armas e armaduras. Perfeito para aventuras RPG.'
  },
  {
    id: '2',
    name: 'Dragon Elder Collection',
    categoryId: '1',
    description: 'Dragões anciões com diferentes elementos',
    images: [
      'https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/4100130/pexels-photo-4100130.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    detailedDescription: 'Coleção épica de dragões elementais: fogo, gelo, terra e ar. Cada modelo possui animações únicas e efeitos visuais impressionantes.'
  },
  {
    id: '3',
    name: 'Modern Car Pack',
    categoryId: '2',
    description: 'Veículos modernos para cidade',
    images: [
      'https://images.pexels.com/photos/100656/pexels-photo-100656.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/385997/pexels-photo-385997.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    detailedDescription: 'Pack com 8 veículos modernos incluindo sedans, SUVs e carros esportivos, todos com interior detalhado e funcionalidades completas.'
  }
];

// ==========================================
// CATEGORIAS E PROGRAMAÇÕES
// ==========================================
export const programmingCategories: Category[] = [
  { 
    id: '1', 
    name: 'Sistemas', 
    description: 'Sistemas complexos e automatizados' 
  },
  { 
    id: '2', 
    name: 'Scripts', 
    description: 'Scripts utilitários e ferramentas' 
  },
  { 
    id: '3', 
    name: 'APIs', 
    description: 'Integrações e serviços web' 
  }
];

export const programmingSets: ProgrammingSet[] = [
  {
    id: '1',
    name: 'Sistema de Carros Avançado',
    categoryId: '1',
    description: 'Sistema completo de veículos com física realista',
    codeImages: [
      'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    functionality: 'Sistema que permite spawn, customização e controle de veículos com física realista',
    technicalDetails: 'Desenvolvido em JavaScript com integração Node.js, inclui sistema de combustível, danos e manutenção',
    illustrations: [
      'https://images.pexels.com/photos/100656/pexels-photo-100656.jpeg?auto=compress&cs=tinysrgb&w=600'
    ]
  },
  {
    id: '2',
    name: 'Gerador de Dungeons',
    categoryId: '2',
    description: 'Script automático para geração procedural de dungeons',
    codeImages: [
      'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    functionality: 'Gera dungeons procedurais com salas, corredores, armadilhas e tesouros',
    technicalDetails: 'Algoritmo baseado em cellular automata com sistema de templates configuráveis',
    illustrations: [
      'https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&w=600'
    ]
  }
];

// ==========================================
// CATEGORIAS E ADDONS
// ==========================================
export const addonCategories: Category[] = [
  { 
    id: '1', 
    name: 'Utilidades', 
    description: 'Ferramentas úteis para gameplay' 
  },
  { 
    id: '2', 
    name: 'Veículos', 
    description: 'Addons de transporte' 
  },
  { 
    id: '3', 
    name: 'Máquinas', 
    description: 'Automação e produção' 
  }
];

export const addonSets: AddonSet[] = [
  {
    id: '1',
    name: 'Advanced Inventory Manager',
    categoryId: '1',
    description: 'Sistema avançado de gerenciamento de inventário',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    embedId: 'dQw4w9WgXcQ'
  },
  {
    id: '2',
    name: 'Flying Cars Pack',
    categoryId: '2',
    description: 'Veículos voadores funcionais',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    embedId: 'dQw4w9WgXcQ'
  },
  {
    id: '3',
    name: 'Auto Mining System',
    categoryId: '3',
    description: 'Sistema automático de mineração',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    embedId: 'dQw4w9WgXcQ'
  }
];