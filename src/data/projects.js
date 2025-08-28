import { 
  Globe, 
  Smartphone, 
  Server, 
  Database,
  Code,
  Layers
} from 'lucide-react';

export const projectsData = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'Plataforma de comercio electrónico completa con panel de administración, carrito de compras, sistema de pagos con Stripe, gestión de inventario y análisis de ventas en tiempo real.',
    longDescription: `
      Una plataforma de e-commerce moderna y escalable construida con las últimas tecnologías. 
      Incluye funcionalidades avanzadas como recomendaciones de productos con AI, 
      chat en tiempo real, sistema de reviews y ratings, y una arquitectura de microservicios 
      para alta disponibilidad.
    `,
    image: '/images/projects/ecommerce-platform.webp',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux', 'Socket.io'],
    category: 'fullstack',
    github: 'https://github.com/camilotejada/ecommerce-platform',
    demo: 'https://ecommerce-demo.tejada.dev',
    status: 'completed',
    featured: true,
    duration: '4 meses',
    team: 'Solo',
    lines: '15,000+',
    year: 2024,
    highlights: [
      'Sistema de pagos seguro con Stripe',
      'Panel de administración completo',
      'Carrito de compras persistente',
      'Sistema de recomendaciones',
      'Chat de soporte en tiempo real'
    ],
    technologies: {
      frontend: ['React 18', 'Redux Toolkit', 'Tailwind CSS', 'Framer Motion'],
      backend: ['Node.js', 'Express.js', 'JWT Authentication', 'Multer'],
      database: ['MongoDB', 'Redis'],
      deployment: ['Vercel', 'MongoDB Atlas', 'Cloudinary'],
      tools: ['Git', 'Postman', 'VS Code', 'Figma']
    }
  },
  {
    id: 'task-management-app',
    title: 'TaskMaster Pro',
    description: 'Aplicación de gestión de tareas empresarial con colaboración en tiempo real, notificaciones push, sincronización offline y metodologías ágiles integradas.',
    longDescription: `
      Una herramienta de productividad avanzada diseñada para equipos modernos. 
      Integra metodologías como Kanban y Scrum, con funciones de tracking de tiempo, 
      reportes automatizados y sincronización multiplataforma.
    `,
    image: '/images/projects/taskmaster-pro.webp',
    tags: ['Next.js', 'PostgreSQL', 'Socket.io', 'PWA', 'TypeScript'],
    category: 'fullstack',
    github: 'https://github.com/camilotejada/taskmaster-pro',
    demo: 'https://taskmaster.tejada.dev',
    status: 'in-progress',
    featured: true,
    duration: '6 meses',
    team: '3 personas',
    lines: '22,000+',
    year: 2024,
    highlights: [
      'Colaboración en tiempo real',
      'Modo offline con sincronización',
      'Metodologías ágiles integradas',
      'PWA con instalación nativa',
      'Analytics y reportes avanzados'
    ],
    technologies: {
      frontend: ['Next.js 14', 'TypeScript', 'Zustand', 'React Query'],
      backend: ['Next.js API Routes', 'Prisma ORM', 'WebSockets'],
      database: ['PostgreSQL', 'Redis'],
      deployment: ['Vercel', 'Supabase'],
      tools: ['Docker', 'GitHub Actions', 'ESLint', 'Prettier']
    }
  },
  {
    id: 'analytics-dashboard',
    title: 'DataViz Dashboard',
    description: 'Dashboard interactivo para análisis de datos empresariales con visualizaciones dinámicas, reportes automatizados y integración con múltiples fuentes de datos.',
    image: '/images/projects/analytics-dashboard.webp',
    tags: ['React', 'D3.js', 'Python', 'FastAPI', 'Chart.js'],
    category: 'frontend',
    github: 'https://github.com/camilotejada/analytics-dashboard',
    demo: 'https://analytics.tejada.dev',
    status: 'completed',
    featured: false,
    duration: '3 meses',
    team: '2 personas',
    lines: '12,000+',
    year: 2023,
    highlights: [
      'Visualizaciones interactivas con D3.js',
      'API REST con FastAPI',
      'Filtros dinámicos avanzados',
      'Exportación de reportes PDF',
      'Actualización en tiempo real'
    ]
  },
  {
    id: 'social-media-app',
    title: 'SocialConnect',
    description: 'Red social móvil con funciones de chat en tiempo real, stories, sistema de recomendaciones inteligente y moderación de contenido automática.',
    image: '/images/projects/social-connect.webp',
    tags: ['React Native', 'Firebase', 'Node.js', 'AI', 'TensorFlow'],
    category: 'mobile',
    github: 'https://github.com/camilotejada/social-connect',
    demo: 'https://play.google.com/store/apps/socialconnect',
    status: 'completed',
    featured: false,
    duration: '8 meses',
    team: '4 personas',
    lines: '25,000+',
    year: 2023,
    highlights: [
      'Chat en tiempo real',
      'Stories con efectos AR',
      'Feed personalizado con AI',
      'Moderación automática de contenido',
      'Notificaciones push inteligentes'
    ]
  },
  {
    id: 'calculadora-calorias',
    title: 'Calculadora de Calorías',
    description: 'Aplicación web para el cálculo y seguimiento de calorías diarias con base de datos de alimentos, métricas de salud y planes nutricionales personalizados.',
    image: '/images/projects/calculadora-calorias.webp',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'LocalStorage'],
    category: 'frontend',
    github: 'https://github.com/camilotejada/calculadora-calorias',
    demo: 'https://calculadora-de-calorias-phi.vercel.app/',
    status: 'completed',
    featured: false,
    duration: '1 mes',
    team: 'Solo',
    lines: '3,500+',
    year: 2023,
    highlights: [
      'Base de datos nutricional extensa',
      'Cálculo de TMB personalizado',
      'Tracking de progreso visual',
      'Interfaz intuitiva y responsiva',
      'Almacenamiento local persistente'
    ]
  },
  {
    id: 'torneo-barrio',
    title: 'Torneo del Barrio',
    description: 'Sistema de gestión de torneos deportivos comunitarios con registro de equipos, fixture automático, estadísticas en tiempo real y transmisión en vivo.',
    image: '/images/projects/torneo-barrio.webp',
    tags: ['JavaScript', 'Node.js', 'MongoDB', 'Socket.io'],
    category: 'fullstack',
    github: 'https://github.com/camilotejada/torneo-barrio',
    demo: 'https://torneo-delbarrio1-yx4i.vercel.app/',
    status: 'completed',
    featured: false,
    duration: '2 meses',
    team: 'Solo',
    lines: '8,000+',
    year: 2023,
    highlights: [
      'Generación automática de fixtures',
      'Estadísticas detalladas por jugador',
      'Sistema de brackets eliminatorios',
      'Notificaciones en tiempo real',
      'Panel de administración completo'
    ]
  },
  {
    id: 'sistema-contratacion',
    title: 'Sistema de Contratación',
    description: 'API REST robusta para gestión de procesos de contratación empresarial con autenticación avanzada, roles de usuario, workflow automatizado y reportes.',
    image: '/images/projects/sistema-contratacion.webp',
    tags: ['Java', 'Spring Boot', 'MySQL', 'JWT', 'JPA'],
    category: 'backend',
    github: 'https://github.com/camilotejada/sistema-contratacion',
    demo: '#',
    status: 'completed',
    featured: true,
    duration: '5 meses',
    team: '2 personas',
    lines: '18,000+',
    year: 2023,
    highlights: [
      'Arquitectura de microservicios',
      'Sistema de roles y permisos granular',
      'API REST documentada con Swagger',
      'Workflow automatizado de aprobaciones',
      'Integración con servicios de email'
    ],
    technologies: {
      backend: ['Spring Boot 3', 'Spring Security', 'Spring Data JPA', 'Hibernate'],
      database: ['MySQL 8', 'Redis'],
      security: ['JWT', 'BCrypt', 'OAuth2'],
      tools: ['Maven', 'Docker', 'Swagger', 'JUnit 5'],
      deployment: ['AWS EC2', 'Docker Compose', 'nginx']
    }
  },
  {
    id: 'riwi-mindset',
    title: 'Riwi Mindset',
    description: 'Plataforma educativa interactiva con cursos en línea, evaluaciones automáticas, seguimiento de progreso personalizado y gamificación del aprendizaje.',
    image: '/images/projects/riwi-mindset.webp',
    tags: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
    category: 'frontend',
    github: 'https://github.com/camilotejada/riwi-mindset',
    demo: 'https://riwi-mindset.vercel.app/',
    status: 'completed',
    featured: false,
    duration: '3 meses',
    team: '3 personas',
    lines: '14,000+',
    year: 2024,
    highlights: [
      'Sistema de cursos interactivos',
      'Evaluaciones con corrección automática',
      'Gamificación con badges y niveles',
      'Dashboard de progreso personalizado',
      'Foro de discusión por curso'
    ]
  }
];

// Categorías para filtrado
export const projectCategories = [
  { id: 'all', label: 'Todos', icon: Layers },
  { id: 'fullstack', label: 'Full Stack', icon: Globe },
  { id: 'frontend', label: 'Frontend', icon: Code },
  { id: 'backend', label: 'Backend', icon: Server },
  { id: 'mobile', label: 'Mobile', icon: Smartphone },
];

// Estadísticas de proyectos
export const projectStats = {
  total: projectsData.length,
  completed: projectsData.filter(p => p.status === 'completed').length,
  inProgress: projectsData.filter(p => p.status === 'in-progress').length,
  featured: projectsData.filter(p => p.featured).length,
  totalLines: projectsData.reduce((acc, project) => {
    const lines = parseInt(project.lines?.replace(/[^\d]/g, '') || '0');
    return acc + lines;
  }, 0),
  technologies: [...new Set(projectsData.flatMap(p => p.tags))].length,
  languages: ['JavaScript', 'TypeScript', 'Java', 'Python', 'HTML', 'CSS'],
  frameworks: ['React', 'Next.js', 'Node.js', 'Spring Boot', 'React Native'],
  databases: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Redis']
};

export default projectsData;