import { TeamMember, Review, Category, ModelSet, ProgrammingSet, AddonSet } from '../types';

// ==========================================
// CONFIGURAÇÕES GERAIS DO SITE
// ==========================================
export const siteConfig = {
  // Informações básicas
  siteName: 'FirstStudios',
  siteDescription: 'Criamos experiências únicas através de modelos 3D excepcionais, programações avançadas e addons inovadores para Minecraft',
  
  // Hero Section
  hero: {
    title: 'FirstStudios',
    subtitle: 'Criamos experiências únicas através de modelos 3D excepcionais, programações avançadas e addons inovadores para Minecraft',
    backgroundImage: '/banner.png',
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
    email: 'firststudios.contact@gmail.com',
    phone: '+55 (15) 98824-1215',
    location: 'São Paulo, Brasil',
    socialMedia: {
      youtube: 'https://youtube.com/@first.studios?si=ZiBYDzwTIxNRFAca',
      discord: 'https://discord.com',
      instagram: 'https://instagram.com'
    }
  },

    // Configurações do EmailJS
  emailjs: {
    serviceId: 'service_4mky3fy', // Substitua pelo seu Service ID
    templateId: 'template_u4a8u89', // Substitua pelo seu Template ID
    publicKey: 'IB8pZrf8D8BImCjp1' // Substitua pela sua Public Key
  },

  // Parceria especial
  specialPartnership: {
    title: 'Parceria Especial',
    name: 'Turio',
    description: 'Olá! Tudo bem? Sou o Turio, um animador 3D, artista pixel',
    image: '/equipe/Turio.png',
    socialLink: {
      platform: 'Pagina ',
      url: 'https://turio.carrd.co/',
      buttonText: 'Ver na Página'
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
    name: 'Hobs',
    role: 'Lead Developer',
    bio: 'Especialista em desenvolvimento de sistemas e scripts avançados com mais de 5 anos de experiência.',
    image: '/equipe/Hobs.png'
  },
  {
    id: '2',
    name: 'Copper',
    role: '3D Artist',
    bio: 'Criador de modelos 3D realistas para RPGs e veículos, especializado em texturas detalhadas.',
    image: '/equipe/Copper.png'
  },
  {
    id: '3',
    name: 'Chimas',
    role: 'Game Designer',
    bio: 'Designer focado em mecânicas de jogo e experiência do usuário em projetos Minecraft.',
    image: '/equipe/Chimas.png'
  },
  {
    id: '4',
    name: 'Chica',
    role: 'Content Creator',
    bio: 'Criadora de conteúdo especializada em modelos 3D e texturização.',
    image: '/equipe/Chica.png'
  },
  {
    id: '5',
    name: 'Guzen',
    role: 'Content Creator',
    bio: 'Criadoro de conteúdo especializado em programções de addons.',
    image: '/equipe/Guzen.png'
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
    image: 'https://images.unsplash.com/photo-1603415526960-f7e0328b4a0f?w=400&h=400&fit=crop&crop=faces'
  },
  {
    id: '2',
    name: 'Fernanda Lima',
    rating: 5,
    comment: 'Os addons desenvolvidos pela equipe revolucionaram nosso servidor. Recomendo muito!',
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=400&fit=crop&crop=faces'
  },
  {
    id: '3',
    name: 'Pedro Rocha',
    rating: 4,
    comment: 'Excelente suporte e qualidade. Os scripts funcionam perfeitamente.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=faces'
  },
  {
    id: '4',
    name: 'Mariana Souza',
    rating: 5,
    comment: 'A equipe superou minhas expectativas! Entrega rápida e qualidade impecável.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces'
  },
  {
    id: '5',
    name: 'João Ferreira',
    rating: 4,
    comment: 'Muito satisfeito com o resultado, embora tenha demorado um pouco mais que o esperado.',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop&crop=faces'
  },
  {
    id: '6',
    name: 'Larissa Mendes',
    rating: 5,
    comment: 'Profissionais atenciosos e comprometidos. Meu projeto ficou perfeito!',
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop&crop=faces'
  },
  {
    id: '7',
    name: 'Ricardo Martins',
    rating: 3,
    comment: 'Bom trabalho, mas encontrei alguns bugs que precisaram ser corrigidos depois.',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop&crop=faces'
  },
  {
    id: '8',
    name: 'Bianca Torres',
    rating: 5,
    comment: 'Simplesmente incrível! O nível de detalhes é impressionante.',
    image: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=400&h=400&fit=crop&crop=faces'
  },
  {
    id: '9',
    name: 'André Costa',
    rating: 4,
    comment: 'Atendimento muito bom, entrega no prazo e produto de qualidade.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=faces'
  },
  {
    id: '10',
    name: 'Sofia Almeida',
    rating: 5,
    comment: 'Fiquei impressionada com a criatividade e profissionalismo da equipe.',
    image: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=400&h=400&fit=crop&crop=faces'
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
    description: 'Modelos de veículos e transporte' 
  },
  { 
    id: '3', 
    name: 'Animais', 
    description: 'Modelos de animais e criaturas' 
  },
  { 
    id: '4', 
    name: 'Equipamentos', 
    description: 'Modelos de equipamentos e armas' 
  }
];

export const modelSets: ModelSet[] = [
  {
    id: '1',
    name: 'Goblins Warrior Pack',
    categoryId: '1',
    description: 'Conjunto completo de guerreiros goblins com diferentes armas',
    images: [
      '/goblins/allGoblins.webp',
      '/goblins/Full/Goblins0001.png',
      '/goblins/Full/Goblins0002.png',
      '/goblins/Full/Goblins0003.png',
      '/goblins/Full/Goblins0004.png',
      '/goblins/Full/Goblins0005.png',
    ],
    detailedDescription: 'Set completo com 5 modelos únicos de goblins guerreiros, incluindo diferentes poses, armas e armaduras. Perfeito para aventuras RPG.'
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
  },
  {
    id: '3',
    name: 'Sistema de Economia',
    categoryId: '1',
    description: 'Sistema completo de economia para servidores',
    codeImages: [
      'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    functionality: 'Sistema de moedas, lojas, transações e economia balanceada',
    technicalDetails: 'Desenvolvido com banco de dados MySQL e sistema de backup automático',
    illustrations: [
      'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=600'
    ]
  },
  {
    id: '4',
    name: 'API de Integração Discord',
    categoryId: '3',
    description: 'API para integração entre servidor Minecraft e Discord',
    codeImages: [
      'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    functionality: 'Sincronização de chat, comandos remotos e notificações automáticas',
    technicalDetails: 'Desenvolvido com Discord.js e WebSocket para comunicação em tempo real',
    illustrations: [
      'https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&w=600'
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
    name: 'Mobs', 
    description: 'Addons de transporte' 
  },
  { 
    id: '3', 
    name: 'Equipamentos', 
    description: 'Automação e produção' 
  },
  { 
    id: '4', 
    name: 'Outros', 
    description: 'Itens decorativos e mobília' 
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
  },
  {
    id: '4',
    name: 'Smart Backpack',
    categoryId: '1',
    description: 'Mochila inteligente com organização automática',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    embedId: 'dQw4w9WgXcQ'
  },
  {
    id: '5',
    name: 'Submarine Explorer',
    categoryId: '2',
    description: 'Submarino para exploração oceânica',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    embedId: 'dQw4w9WgXcQ'
  },
  {
    id: '6',
    name: 'Furniture Plus',
    categoryId: '4',
    description: 'Pack completo de móveis e decorações',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    embedId: 'dQw4w9WgXcQ'
  }
];