import type { Locale } from './types';

export const es: Locale = {
  code: 'es',
  label: 'ES',
  htmlLang: 'es',
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
    'exp-clickonplans': {
      title: 'Desarrollador web y móvil',
      description:
        'Gestioné documentos, fases, etapas, usuarios y maquinaria de una constructora. Hice la migración de la versión de PHP y la actualización de una aplicación móvil en React Native, y me encargué de subir los proyectos a AWS.',
    },
    'exp-laika': {
      title: 'Desarrollador full stack',
      description:
        'Creé y mantuve los módulos de la parte logística de la tienda: inventario, repartidores, cupones y descuentos de producto, y horarios de entrega.',
    },
    'exp-qoopa': {
      title: 'Desarrollador full stack',
      description:
        'Desarrollé formularios para clientes del sector financiero y el cálculo de vida crediticia de una persona, para determinar si el banco podía otorgar un crédito y por cuánto. También construí módulos para cooperativas: créditos, nómina e intereses de CDAT, sobre entornos legados con Oracle.',
    },
    'exp-ethos': {
      title: 'Ingeniero aprendiz',
      description:
        'Inicié como aprendiz en el desarrollo de los aplicativos que necesitaban las cooperativas del país: solicitud de créditos, pago de nómina y cálculo de intereses.',
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
    'edu-praxis-a2': {
      title: 'Certificado de inglés A2',
      description: 'Certificación de nivel A2 en el idioma inglés.',
    },
    'edu-praxis-b1': {
      title: 'Certificado de inglés B1',
      description: 'Certificación de nivel B1 en el idioma inglés.',
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
      title: 'IA aplicada',
      description: 'Modelos de lenguaje y Bedrock para análisis de encuestas y audio.',
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
      description: 'Liderazgo técnico, revisión de código y código limpio.',
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
      lede: 'AI Engineer en Illumia. Trabajo con modelos de lenguaje para analizar encuestas y audio, y construyo el full stack en Node.js y TypeScript que los sostiene.',
      primaryCta: 'Ver experiencia',
      secondaryCta: 'Conversemos',
      tickerLabel: 'Stack frecuente',
    },
    about: {
      eyebrow: 'Perfil',
      heading: 'Sobre mí y stack técnico',
      philosophyLabel: 'Cómo trabajo',
      philosophy:
        'Me enfoco en backends sólidos y en dejar el código legible para quien venga después. La IA me interesa cuando resuelve un problema concreto y medible, no como fin en sí mismo, así que prefiero entregar menos superficie y mejor fundamento.',
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
      heading: '¿Tenés un problema que valga la pena resolver?',
      lede: 'Trabajo en Illumia y no estoy buscando un cambio hoy, pero siempre me interesa conversar sobre datos, modelos y sistemas que tengan que aguantar producción.',
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
