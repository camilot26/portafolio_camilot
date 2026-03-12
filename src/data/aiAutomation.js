import { Bot, Mic, Zap, Code2, GitBranch, Network } from 'lucide-react';

export const aiTools = [
  {
    id: 'python-ai',
    name: 'Python & IA',
    tagline: 'Automatización inteligente con código',
    description:
      'Desarrollo de scripts, pipelines y agentes inteligentes usando Python como base. Integración con APIs de modelos de lenguaje y automatización de flujos de trabajo.',
    icon: Code2,
    color: '#3B82F6',
    glow: 'rgba(59,130,246,0.3)',
    border: 'border-blue-500/40',
    technologies: [
      'Python',
      'LangChain',
      'OpenAI API',
      'FastAPI',
      'Pandas',
      'BeautifulSoup',
    ],
    useCases: [
      'Scraping y procesamiento de datos',
      'Agentes conversacionales',
      'Automatización de tareas repetitivas',
      'Integración de LLMs en apps',
    ],
  },
  {
    id: 'n8n',
    name: 'n8n Workflows',
    tagline: 'Automatización sin fricción',
    description:
      'Diseño e implementación de flujos de automatización complejos conectando APIs, bases de datos y servicios en la nube. Desde webhooks hasta orquestación de agentes.',
    icon: GitBranch,
    color: '#F97316',
    glow: 'rgba(249,115,22,0.3)',
    border: 'border-orange-500/40',
    technologies: [
      'n8n',
      'Webhooks',
      'REST APIs',
      'Zapier',
      'Make (Integromat)',
      'Cron Jobs',
    ],
    useCases: [
      'Sincronización entre plataformas',
      'Notificaciones automáticas',
      'Pipelines de datos',
      'Orquestación de agentes IA',
    ],
  },
  {
    id: 'elevenlabs',
    name: 'ElevenLabs & Voz',
    tagline: 'Agentes de voz con IA',
    description:
      'Creación de agentes conversacionales de voz usando ElevenLabs para síntesis de audio de alta calidad. Construcción de flujos de voice AI para atención, tutoriales y automatización.',
    icon: Mic,
    color: '#A855F7',
    glow: 'rgba(168,85,247,0.3)',
    border: 'border-purple-500/40',
    technologies: [
      'ElevenLabs API',
      'Text-to-Speech',
      'Voice Cloning',
      'Speech-to-Text',
      'Twilio',
      'WebSockets',
    ],
    useCases: [
      'Agentes de atención al cliente',
      'Tutoriales de voz automatizados',
      'Clonación de voz personalizada',
      'Bots de llamadas con IA',
    ],
  },
];

export const workflowSteps = [
  {
    id: 'input',
    label: 'Entrada',
    description: 'Voz, texto o evento',
    icon: Mic,
    color: 'text-purple-400',
    bg: 'bg-purple-500/10 border-purple-500/30',
  },
  {
    id: 'process',
    label: 'Procesamiento',
    description: 'Python + LLM',
    icon: Bot,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/30',
  },
  {
    id: 'orchestrate',
    label: 'Orquestación',
    description: 'n8n Workflow',
    icon: Network,
    color: 'text-orange-400',
    bg: 'bg-orange-500/10 border-orange-500/30',
  },
  {
    id: 'output',
    label: 'Respuesta',
    description: 'Voz o acción',
    icon: Zap,
    color: 'text-green-400',
    bg: 'bg-green-500/10 border-green-500/30',
  },
];

export default aiTools;
