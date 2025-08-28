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
    experience: '3+',
    projects: '50+',
    technologies: '15+',
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
  {
    id: 'junior-dev-2022',
    type: 'work',
    title: 'Junior Full Stack Developer',
    company: 'TechSolutions Col',
    period: '2022 - 2023',
    description: 'Desarrollo y mantenimiento de aplicaciones empresariales. Colaboración en equipo ágil para la entrega de soluciones de software de calidad.',
    technologies: ['JavaScript', 'PHP', 'MySQL', 'Laravel', 'Vue.js'],
    achievements: [
      'Reducción de bugs en producción en un 60%',
      'Implementación de testing automatizado',
      'Contribución al sistema de CI/CD'
    ],
    location: 'Medellín, Colombia'
  },
  {
    id: 'university-2021',
    type: 'education',
    title: 'Ingeniería de Sistemas',
    institution: 'Universidad de Antioquia',
    period: '2018 - 2022',
    description: 'Formación sólida en fundamentos de programación, algoritmos, estructuras de datos, ingeniería de software y arquitectura de sistemas.',
    achievements: [
      'Graduado Cum Laude (GPA: 4.2/5.0)',
      'Presidente del grupo de estudio de desarrollo web',
      'Proyecto de grado: Sistema de gestión académica'
    ],
    finalProject: {
      title: 'Sistema de Gestión Académica Integral',
      description: 'Plataforma web completa para la administración de instituciones educativas',
      technologies: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL'],
      grade: '4.8/5.0'
    },
    location: 'Medellín, Colombia'
  },
  {
    id: 'bootcamp-2021',
    type: 'education',
    title: 'Full Stack Web Development Bootcamp',
    institution: 'Riwi',
    period: '2021',
    description: 'Programa intensivo de desarrollo web full stack con enfoque práctico en tecnologías modernas y metodologías ágiles.',
    technologies: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB'],
    achievements: [
      'Graduado entre el top 5% de la clase',
      'Proyecto final destacado',
      'Certificación en metodologías ágiles'
    ],
    location: 'Medellín, Colombia'
  },
  {
    id: 'certification-java-2023',
    type: 'achievement',
    title: 'Oracle Certified Professional: Java SE',
    institution: 'Oracle',
    period: '2023',
    description: 'Certificación oficial de Oracle que valida conocimientos avanzados en Java SE, programación orientada a objetos y mejores prácticas.',
    credentialId: 'OCP-JSE-12345',
    verificationUrl: 'https://education.oracle.com/oracle-certified-professional-java-se-11-developer/trackp_815'
  },
  {
    id: 'hackathon-2023',
    type: 'achievement',
    title: 'Ganador HackMedellín 2023',
    institution: 'Ruta N',
    period: '2023',
    description: 'Primer lugar en la categoría "Innovación Social" con una solución tecnológica para la gestión comunitaria de torneos deportivos.',
    project: 'SportsCommunity',
    team: '4 desarrolladores',
    prize: '$5,000 USD + Mentoría empresarial'
  },
  {
    id: 'aws-certification-2023',
    type: 'achievement',
    title: 'AWS Certified Cloud Practitioner',
    institution: 'Amazon Web Services',
    period: '2023',
    description: 'Certificación que valida conocimientos fundamentales de la nube de AWS, incluyendo servicios, arquitectura y mejores prácticas de seguridad.',
    credentialId: 'AWS-CP-67890',
    verificationUrl: 'https://aws.amazon.com/certification/certified-cloud-practitioner/'
  }
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
  'He contribuido a más de 20 proyectos open source',
  'Mi IDE favorito es VS Code con más de 30 extensiones instaladas',
  'Disfruto explicar conceptos técnicos complejos de manera simple',
  'Siempre tengo al menos 10 pestañas de Stack Overflow abiertas',
  'Mi primer "Hello World" fue en Python, pero me enamoré de JavaScript',
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