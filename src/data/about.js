// Personal Information
export const personalInfo = {
  name: 'Camilo Tejada',
  title: 'Full Stack Developer',
  location: 'Medellín, Antioquia, Colombia',
  email: 'camilo@tejada.dev',
  phone: '+57 300 123 4567',
  website: 'https://camilotejada.dev',
  avatar: '/images/profile.webp',
  
  bio: {
    short: 'Desarrollador Full Stack apasionado por crear soluciones digitales robustas y escalables.',
    long: `
      Soy un desarrollador Full Stack con más de 3 años de experiencia especializándome 
      en el desarrollo de aplicaciones web y móviles. Mi enfoque principal está en 
      JavaScript/TypeScript, React, Node.js, y Java con Spring Boot.
      
      Me apasiona crear código limpio, mantenible y escalable, siempre aplicando las 
      mejores prácticas de la industria. Disfruto trabajar en equipos colaborativos 
      y contribuir al crecimiento de proyectos desde la conceptualización hasta 
      la implementación.
      
      Constantemente me mantengo actualizado con las últimas tecnologías y tendencias 
      del desarrollo de software, participando en comunidades tech y contribuyendo 
      a proyectos open source.
    `
  },
  
  stats: {
    experience: '2+',
    projects: '10+',
    technologies: '10+',
    contributions: '200+'
  }
};

// Professional Timeline
export const timeline = [
  {
    id: 'riwi-2024',
    type: 'work',
    title: 'Full Stack Developer',
    company: 'Riwi',
    period: '2024 - Presente',
    description: 'Desarrollo de plataformas educativas interactivas y sistemas de gestión académica. Liderando la arquitectura frontend y colaborando en el diseño de APIs escalables.',
    technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'TypeScript'],
    achievements: [
      'Optimización del rendimiento de la plataforma en un 40%',
      'Implementación de sistema de gamificación',
      'Mentoring de desarrolladores junior'
    ],
    location: 'Medellín, Colombia'
  },
  {
    id: 'freelance-2023',
    type: 'work',
    title: 'Freelance Developer',
    company: 'Independiente',
    period: '2023 - 2024',
    description: 'Desarrollo de aplicaciones web y móviles para diversos clientes. Especialización en e-commerce, dashboards administrativos y sistemas de gestión.',
    technologies: ['React', 'React Native', 'Java', 'Spring Boot', 'MongoDB'],
    achievements: [
      'Entregados +20 proyectos exitosamente',
      'Satisfacción del cliente del 98%',
      'Desarrollo de sistema de e-commerce completo'
    ],
    location: 'Remoto'
  },
];

// Skills Summary (complementary to detailed skills)
export const skillsSummary = {
  programming: {
    title: 'Lenguajes de Programación',
    skills: ['JavaScript/TypeScript', 'Java', 'Python', 'PHP', 'SQL', 'HTML/CSS']
  },
  frontend: {
    title: 'Frontend Development',
    skills: ['React', 'Next.js', 'Vue.js', 'Angular', 'Tailwind CSS', 'Material-UI']
  },
  backend: {
    title: 'Backend Development',
    skills: ['Node.js', 'Spring Boot', 'Express.js', 'Laravel', 'RESTful APIs', 'GraphQL']
  },
  database: {
    title: 'Bases de Datos',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Firebase', 'Supabase']
  },
  tools: {
    title: 'Herramientas y DevOps',
    skills: ['Git', 'Docker', 'AWS', 'Vercel', 'GitHub Actions', 'Jest']
  },
  methodologies: {
    title: 'Metodologías',
    skills: ['Agile/Scrum', 'TDD', 'Clean Code', 'SOLID Principles', 'Design Patterns']
  }
};

// Achievements and Awards
export const achievements = [
  {
    id: 'hackathon-winner',
    title: 'Ganador HackMedellín 2023',
    category: 'Competencia',
    date: '2023',
    description: 'Primer lugar en categoría Innovación Social',
    icon: '🏆'
  },
  {
    id: 'oracle-certification',
    title: 'Oracle Certified Professional Java SE',
    category: 'Certificación',
    date: '2023',
    description: 'Certificación oficial de Oracle en Java',
    icon: '📜'
  },
  {
    id: 'aws-certification',
    title: 'AWS Cloud Practitioner',
    category: 'Certificación',
    date: '2023',
    description: 'Certificación de Amazon Web Services',
    icon: '☁️'
  },
  {
    id: 'academic-excellence',
    title: 'Cum Laude Graduate',
    category: 'Académico',
    date: '2022',
    description: 'Graduación con honores académicos',
    icon: '🎓'
  },
  {
    id: 'open-source',
    title: 'Contributor Open Source',
    category: 'Contribución',
    date: '2021-presente',
    description: '+200 contribuciones en GitHub',
    icon: '💻'
  }
];

// Personal Interests and Hobbies
export const interests = [
  {
    category: 'Tecnología',
    items: ['Inteligencia Artificial', 'Blockchain', 'IoT', 'Machine Learning']
  },
  {
    category: 'Desarrollo Personal',
    items: ['Lectura técnica', 'Cursos online', 'Podcasts tech', 'Conferencias']
  },
  {
    category: 'Hobbies',
    items: ['Fotografía', 'Senderismo', 'Fútbol', 'Videojuegos']
  },
  {
    category: 'Comunidad',
    items: ['Mentoring', 'Tech talks', 'Voluntariado', 'Meetups locales']
  }
];

// Fun Facts
export const funFacts = [
  'Empecé a programar a los 15 años creando mods para videojuegos',
  'Mi IDE favorito es VS Code con más de 30 extensiones instaladas',
  'Disfruto explicar conceptos técnicos complejos de manera simple',
  'Mi primer "Hello World" fue en Python, pero me enamoré de Java',
  'Creo firmemente que el mejor código es el que no necesitas escribir'
];

export default {
  personalInfo,
  timeline,
  skillsSummary,
  achievements,
  interests,
  funFacts
};