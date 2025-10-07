export const contactInfo = {
  email: 'camilotejada1@gmail.com',
  phone: '+57 300 123 4567',
  location: 'Medellín, Antioquia, Colombia',
  timezone: 'GMT-5 (COT)',
  availability: {
    status: 'available', 
    message: 'Disponible para nuevos proyectos',
    workingHours: 'Lunes - Viernes, 9:00 AM - 6:00 PM COT'
  }
};

export const socialLinks = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/camilot26',
    username: '@camilot26',
    icon: 'github',
    color: '#181717',
    description: 'Mis proyectos y contribuciones'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/camilo-tejada-09386b1a4/',
    username: 'camilo-tejada',
    icon: 'linkedin',
    color: '#0077B5',
    description: 'Perfil profesional'
  },
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://www.instagram.com/tejada.1/',
    username: '@tejada.1',
    icon: 'instagram',
    color: '#E4405F',
    description: 'Vida personal y hobbies'
  }
];

export const contactMethods = [
  {
    id: 'email',
    name: 'Email',
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    icon: 'mail',
    primary: true,
    description: 'La mejor forma de contactarme',
    responseTime: 'Respondo en 24 horas'
  },
  {
    id: 'phone',
    name: 'Teléfono',
    value: contactInfo.phone,
    href: `tel:${contactInfo.phone}`,
    icon: 'phone',
    primary: false,
    description: 'Para consultas urgentes',
    responseTime: 'L-V, 9AM-6PM COT'
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    value: contactInfo.phone,
    href: `https://wa.me/573225080206`,
    icon: 'message-circle',
    primary: false,
    description: 'Chat directo',
    responseTime: 'Respuesta rápida'
  },
];
// Form configuration
export const contactForm = {
  fields: [
    {
      name: 'name',
      label: 'Nombre completo',
      type: 'text',
      required: true,
      placeholder: 'Tu nombre',
      validation: {
        minLength: 2,
        maxLength: 50
      }
    },
    {
      name: 'email',
      label: 'Correo electrónico',
      type: 'email',
      required: true,
      placeholder: 'tu@email.com',
      validation: {
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      }
    },
    {
      name: 'company',
      label: 'Empresa (opcional)',
      type: 'text',
      required: false,
      placeholder: 'Tu empresa'
    },
    {
      name: 'subject',
      label: 'Asunto',
      type: 'text',
      required: true,
      placeholder: '¿En qué puedo ayudarte?',
      validation: {
        minLength: 5,
        maxLength: 100
      }
    },
    {
      name: 'projectType',
      label: 'Tipo de proyecto',
      type: 'select',
      required: false,
      options: [
        { value: '', label: 'Selecciona una opción' },
        { value: 'web-development', label: 'Desarrollo Web' },
        { value: 'mobile-development', label: 'Desarrollo Móvil' },
        { value: 'api-development', label: 'Desarrollo de APIs' },
        { value: 'consulting', label: 'Consultoría' },
        { value: 'maintenance', label: 'Mantenimiento' },
        { value: 'other', label: 'Otro' }
      ]
    },
    {
      name: 'budget',
      label: 'Presupuesto estimado (opcional)',
      type: 'select',
      required: false,
      options: [
        { value: '', label: 'Selecciona un rango' },
        { value: 'under-1k', label: 'Menos de $1,000 USD' },
        { value: '1k-5k', label: '$1,000 - $5,000 USD' },
        { value: '5k-10k', label: '$5,000 - $10,000 USD' },
        { value: '10k-25k', label: '$10,000 - $25,000 USD' },
        { value: 'over-25k', label: 'Más de $25,000 USD' },
        { value: 'discuss', label: 'Prefiero discutirlo' }
      ]
    },
    {
      name: 'timeline',
      label: 'Cronograma esperado (opcional)',
      type: 'select',
      required: false,
      options: [
        { value: '', label: 'Selecciona un tiempo' },
        { value: 'asap', label: 'Lo antes posible' },
        { value: '1-2weeks', label: '1-2 semanas' },
        { value: '1month', label: '1 mes' },
        { value: '2-3months', label: '2-3 meses' },
        { value: '3-6months', label: '3-6 meses' },
        { value: 'flexible', label: 'Flexible' }
      ]
    },
    {
      name: 'message',
      label: 'Mensaje',
      type: 'textarea',
      required: true,
      placeholder: 'Cuéntame sobre tu proyecto, objetivos, y cualquier detalle relevante...',
      validation: {
        minLength: 20,
        maxLength: 1000
      },
      rows: 5
    },
    {
      name: 'howDidYouFind',
      label: '¿Cómo me encontraste? (opcional)',
      type: 'select',
      required: false,
      options: [
        { value: '', label: 'Selecciona una opción' },
        { value: 'google', label: 'Búsqueda en Google' },
        { value: 'linkedin', label: 'LinkedIn' },
        { value: 'github', label: 'GitHub' },
        { value: 'referral', label: 'Referencia de alguien' },
        { value: 'social-media', label: 'Redes sociales' },
        { value: 'portfolio', label: 'Viendo mi portafolio' },
        { value: 'other', label: 'Otro' }
      ]
    }
  ],
  
  // Form submission settings
  submission: {
    method: 'POST',
    action: '/api/contact',
    successMessage: '¡Mensaje enviado exitosamente! Te responderé pronto.',
    errorMessage: 'Hubo un error al enviar el mensaje. Por favor intenta de nuevo.',
    loadingMessage: 'Enviando mensaje...',
    
    emailjs: {
      serviceId: 'your_service_id',
      templateId: 'your_template_id',
      publicKey: 'your_public_key'
    }
  },
  
  validationMessages: {
    required: 'Este campo es obligatorio',
    email: 'Por favor ingresa un email válido',
    minLength: 'Debe tener al menos {min} caracteres',
    maxLength: 'No puede exceder {max} caracteres',
    pattern: 'Formato inválido'
  }
};
// Exportaciones individuales que necesitan los componentes
// Añadir al final del archivo contact.js, ANTES de cualquier export
export const contactFAQ = [
  {
    question: '¿Cuál es tu tiempo de respuesta típico?',
    answer: 'Generalmente respondo todos los emails en un plazo máximo de 24 horas durante días hábiles.'
  }
];

export const availability = {
  workingHours: {
    timezone: 'COT (GMT-5)',
    schedule: {
      monday: { start: '09:00', end: '18:00' },
      tuesday: { start: '09:00', end: '18:00' },
      wednesday: { start: '09:00', end: '18:00' },
      thursday: { start: '09:00', end: '18:00' },
      friday: { start: '09:00', end: '18:00' }
    }
  },
  currentStatus: {
    available: true,
    message: 'Disponible para nuevos proyectos'
  }
};