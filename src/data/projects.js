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
    id: 'portafolio-platform',
    title: 'Portafolio personal',
    description: 'portafolio hecho a la medida con las tecnologías más modernas y de código abierto',
    longDescription: `
    Portafolio hecho a la medida con las tecnologías más modernas y de código abierto. El proyecto fue desarrollado en astro, junto con supabase como base de datos.
    `,
    image: '/images/projects/ecommerce-platform.webp',
    tags: ['Astro', 'Supabase', 'Netlify', 'JavaScript', 'CSS'],
    category: 'frontend',
    github: 'https://github.com/camilot26/Portafolio-arquitectura-Pacotejada',
    demo: 'https://portafolio-pacotejada.netlify.app/arquitectura/',
    status: 'completed',
    featured: true,
    duration: '4 meses',
    team: 'Solo',
    lines: '15,000+',
    year: 2024,
    highlights: [
      'Diseño personalizado y responsivo',
      'Galería de proyectos de arquitectura',
      'Integración con Supabase como base de datos',
      'Despliegue continuo en Netlify',
      'Optimización de rendimiento y SEO'
    ],
    technologies: {
      frontend: ['Astro'],
      backend: ['Supabase'],
      database: ['Supabase'],
      deployment: ['Netlify'],
      tools: ['Git', 'Postman', 'VS Code', 'Figma']
    }
  },
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