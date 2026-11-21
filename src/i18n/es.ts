import type { Locale } from './types';

export const es: Locale = {
  code: 'es',
  label: 'ES',
  htmlLang: 'es',
  skillLabels: {
    'skill-technical-leadership': 'Liderazgo técnico',
    'skill-clean-code': 'Código limpio y SOLID',
    'skill-code-review': 'Revisión de código',
    'skill-scrum': 'Scrum',
  },
  entries: {
    'exp-illumia': {
      title: 'AI Engineer',
      description:
        'Desarrollo el análisis de encuestas y audios para métricas, usando herramientas de IA para procesar cada uno de ellos. Construyo los pipelines que convierten material no estructurado en datos que el negocio puede leer.',
    },
    'exp-christus': {
      title: 'Líder técnico de desarrollo',
      description:
        'Arquitecté y desarrollé desde cero una aplicación full stack para clínicas, cubriendo todo su ciclo de vida. Lideré el equipo: planificación de tareas, revisión de código y aseguramiento de calidad. Supervisé el mantenimiento de servicios en producción y la compilación de aplicativos críticos, además de coordinar los despliegues y dar soporte técnico a los equipos internos.',
    },
    'exp-periferia': {
      title: 'Desarrollador backend',
      description:
        'Participé en la actualización del CMS Xalog que usa el portal, en el rediseño de la página de El Tiempo y en el arranque de la migración de MOTOR. Trabajo por proyecto, con entregas acotadas dentro de la redacción.',
    },
    'exp-talent': {
      title: 'Desarrollador backend',
      description:
        'Construí las funciones de envío masivo de correos con lógica de personalización y los tableros para seguir métricas clave: tasa de clics, listas negras y tasa de apertura. Optimicé consultas y el manejo de datos sobre MySQL y Elasticsearch, colaborando con equipos internacionales en los flujos de campañas.',
    },
    'exp-metabiblioteca': {
      title: 'Desarrollador full stack',
      description:
        'Instalé, configuré y desplegué OJS en servidores Linux, incluyendo gestión de dependencias, mantenimiento de módulos y corrección de errores. Automaticé tareas del servidor para mejorar la disponibilidad y acompañé a los clientes en la implementación de sus sistemas editoriales.',
    },
    'exp-qoopa': {
      title: 'Desarrollador full stack',
      description:
        'Desarrollé formularios para clientes del sector financiero y el cálculo de vida crediticia de una persona, para determinar si el banco podía otorgar un crédito y por cuánto. También construí módulos para cooperativas: créditos, nómina e intereses de CDAT, sobre entornos legados con Oracle.',
    },

    'edu-universidad-libre': {
      title: 'Ingeniería de Sistemas',
      description:
        'Ingeniero de Sistemas graduado. Formación en arquitectura de software, bases de datos y desarrollo de aplicaciones.',
    },
    'edu-fedesoft': {
      title: 'Desarrollador Full Stack y aplicaciones híbridas',
      description: 'Curso de desarrollador full stack y aplicaciones híbridas.',
    },

    'cert-solid': {
      title: 'Principios SOLID y Clean Code',
      description: 'Curso de principios SOLID y código limpio con Fernando Herrera.',
    },
    'cert-node': {
      title: 'Node: de cero a experto',
      description: 'Curso de Node.js de cero a experto con Fernando Herrera.',
    },
    'cert-typescript': {
      title: 'TypeScript: guía completa',
      description: 'Curso de TypeScript: tu completa guía y manual de mano, con Fernando Herrera.',
    },
    'cert-java': {
      title: 'Fundamentos de Java',
      description: 'Curso de fundamentos de Java ofrecido por la Universidad Libre.',
    },
    'cert-ethical-hacking': {
      title: 'Ethical Hacking',
      description: 'Curso de ethical hacking ofrecido por la Universidad Libre.',
    },

    'skill-backend': {
      title: 'Backend',
      description: 'Node.js y TypeScript como base, con Express y NestJS según el proyecto.',
    },
    'skill-ai': {
      title: 'IA en el día a día',
      description: 'Con qué trabajo de verdad, todos los días.',
    },
    'skill-frontend': {
      title: 'Frontend',
      description: 'React como base, más React Native y Svelte cuando el producto lo pide.',
    },
    'skill-data': {
      title: 'Datos',
      description: 'PostgreSQL como motor principal, con MySQL, SQL Server y Elasticsearch.',
    },
    'skill-cloud': {
      title: 'Infraestructura',
      description: 'AWS, Linux y Docker: despliegue, mantenimiento y automatización.',
    },
    'skill-practice': {
      title: 'Práctica',
      description: 'Cómo trabajo con otros equipos y qué reviso antes de dar algo por terminado.',
    },
  },
  ui: {
    nav: {
      about: 'Sobre mí',
      experience: 'Experiencia',
      background: 'Formación',
      contact: 'Contacto',
      cv: 'Descargar CV',
    },
    hero: {
      status: 'En activo',
      kicker: 'Hola, soy Miguel',
      headline: 'Construyo software que',
      headlineAccent: 'convierte datos en decisiones.',
      lede:
        'Llevo siete años convirtiendo procesos que se hacen a mano —planillas, papeles, pasos que nadie recuerda— en herramientas que la gente abre sin que nadie le explique cómo. Backend en Node.js y TypeScript, y una interfaz que no estorba.',
      primaryCta: 'Ver experiencia',
      secondaryCta: 'Conversemos',
      tickerLabel: 'Stack frecuente',
    },
    about: {
      eyebrow: 'Perfil',
      heading: 'Sobre mí y stack técnico',
      philosophyLabel: 'Cómo trabajo',
      philosophy:
        'Me gusta construir cosas que le faciliten la vida a alguien: un aplicativo que reemplaza una planilla, una herramienta que le ahorra tres pasos a un equipo. Trabajo con IA porque hoy es parte de cómo se construye software, igual que antes lo fue el framework de turno: le doy contexto, las convenciones del proyecto y lo que ya sé que no funciona, y después reviso lo que devuelve con el mismo ojo con el que revisaría el trabajo de otra persona. Y para no quedarme mirando, hago videojuegos y proyectos chicos donde pruebo lo que va saliendo: modelos nuevos, agentes, herramientas que todavía no tienen documentación decente.',
      endToEnd: 'Stack de punta a punta',
      skillLevels: {
        primary: 'Principal',
        solid: 'Sólido',
        working: 'En uso',
      },
    },
    experience: {
      eyebrow: 'Trayectoria',
      heading: 'Experiencia laboral',
      lede: 'Siete años construyendo software, desde aplicativos para cooperativas hasta pipelines de IA en producción.',
      currentBadge: 'Actual',
      freelanceBadge: 'Freelance',
    },
    background: {
      eyebrow: 'Formación',
      heading: 'Educación y certificaciones',
      educationLabel: 'Educación',
      certificationLabel: 'Certificaciones',
      languageLabel: 'Idiomas',
      languageValue: 'Español nativo · Inglés B2',
    },
    contact: {
      eyebrow: 'Hablemos',
      heading: '¿Armamos algo?',
      lede: 'Si tenés una idea dando vueltas, un sistema que necesita una mano o ganas de discutir cómo encarar un problema, este es el lugar. Me gusta la gente que pregunta antes de asumir.',
      emailCta: 'Escribime',
      linkedinCta: 'Conectar en LinkedIn',
    },
    cv: {
      download: 'Descargar CV',
      hint: 'PDF, en inglés y en español',
    },
    footer: {
      role: 'AI Engineer · Full stack con Node.js y TypeScript',
      builtWith: 'Hecho con React, TypeScript y Tailwind',
    },
  },
};
