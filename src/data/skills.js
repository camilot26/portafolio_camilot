import { 
  Globe, 
  Server, 
  Database, 
  Smartphone, 
  Cloud, 
  Code2,
  GitBranch,
  Layers,
  Shield,
  Zap
} from 'lucide-react';

export const skillsData = [
  {
    id: 'frontend',
    name: 'Frontend Development',
    icon: Globe,
    description: 'Interfaces modernas y responsivas',
    technologies: [
      { name: 'React', level: 95, color: '#61DAFB' },
      { name: 'Next.js', level: 90, color: '#000000' },
      { name: 'TypeScript', level: 85, color: '#3178C6' },
      { name: 'Tailwind CSS', level: 92, color: '#06B6D4' },
      { name: 'HTML5/CSS3', level: 98, color: '#E34F26' }
    ],
    projects: 5,
    experience: '1+ años',
    category: 'development'
  },
  {
    id: 'backend',
    name: 'Backend Development',
    icon: Server,
    description: 'APIs robustas y escalables',
    technologies: [
      { name: 'Java', level: 90, color: '#ED8B00' },
      { name: 'Spring Boot', level: 85, color: '#6DB33F' },
      { name: 'Node.js', level: 80, color: '#339933' },
      { name: 'Python', level: 75, color: '#3776AB' },
      { name: 'Express.js', level: 78, color: '#000000' }
    ],
    projects: 5,
    experience: '1+ años',
    category: 'development'
  },
  {
    id: 'database',
    name: 'Database Management',
    icon: Database,
    description: 'Gestión eficiente de datos',
    technologies: [
      { name: 'PostgreSQL', level: 88, color: '#336791' },
      { name: 'MySQL', level: 85, color: '#4479A1' },
      { name: 'MongoDB', level: 80, color: '#47A248' },
      { name: 'Redis', level: 70, color: '#DC382D' },
      { name: 'Firebase', level: 75, color: '#FFCA28' }
    ],
    projects: 5,
    experience: '1+ años',
    category: 'database'
  },
  {
    id: 'devops',
    name: 'DevOps & Cloud',
    icon: Cloud,
    description: 'Infraestructura y despliegue',
    technologies: [
      { name: 'Docker', level: 78, color: '#2496ED' },
      { name: 'AWS', level: 75, color: '#FF9900' },
      { name: 'Vercel', level: 88, color: '#000000' },
      { name: 'GitHub Actions', level: 80, color: '#2088FF' },
      { name: 'Nginx', level: 70, color: '#009639' }
    ],
    projects: 5,
    experience: '1+ años',
    category: 'infrastructure'
  },
  {
    id: 'tools',
    name: 'Development Tools',
    icon: Code2,
    description: 'Herramientas de desarrollo',
    technologies: [
      { name: 'Git', level: 95, color: '#F05032' },
      { name: 'VS Code', level: 98, color: '#007ACC' },
      { name: 'Postman', level: 90, color: '#FF6C37' },
      { name: 'Figma', level: 75, color: '#F24E1E' },
      { name: 'Jira', level: 80, color: '#0052CC' }
    ],
    projects: 15,
    experience: '2+ años',
    category: 'tools'
  }
];

// Skill categories for filtering
export const skillCategories = [
  { id: 'all', label: 'Todas', icon: Layers },
  { id: 'development', label: 'Desarrollo', icon: Code2 },
  { id: 'database', label: 'Base de Datos', icon: Database },
  { id: 'infrastructure', label: 'Infraestructura', icon: Cloud },
  { id: 'tools', label: 'Herramientas', icon: GitBranch }
];

// Additional certifications and achievements
export const certifications = [
  {
    id: 'oracle-java',
    name: 'Oracle Certified Professional Java SE',
    issuer: 'Oracle',
    year: 2023,
    credentialId: 'OCP-JSE-2023',
    icon: Shield
  },
  {
    id: 'aws-cloud',
    name: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    year: 2023,
    credentialId: 'AWS-CP-2023',
    icon: Cloud
  },
  {
    id: 'react-advanced',
    name: 'Advanced React Development',
    issuer: 'Meta',
    year: 2022,
    credentialId: 'META-REACT-2022',
    icon: Zap
  }
];

// Learning progress - currently studying
export const currentLearning = [
  {
    name: 'Kubernetes',
    progress: 60,
    estimatedCompletion: '2024-Q2',
    platform: 'CNCF'
  },
  {
    name: 'GraphQL',
    progress: 75,
    estimatedCompletion: '2024-Q1',
    platform: 'GraphQL Foundation'
  },
  {
    name: 'Machine Learning',
    progress: 40,
    estimatedCompletion: '2024-Q3',
    platform: 'Coursera'
  }
];

export default skillsData;