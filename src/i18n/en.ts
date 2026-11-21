import type { Locale } from './types';

export const en: Locale = {
  code: 'en',
  label: 'EN',
  htmlLang: 'en',
  entries: {
    'exp-illumia': {
      title: 'AI Engineer',
      description:
        'I build the analysis of surveys and audio recordings into metrics, using AI tooling to process each one. My work turns unstructured material into data the business can actually read.',
    },
    'exp-christus': {
      title: 'Technical Lead',
      description:
        'I architected and developed a full-stack application from scratch for clinics, owning its entire lifecycle. I led the team through task planning, code review and quality assurance, supervised maintenance of production services and compilation of critical applications, and coordinated deployments and technical support for internal teams.',
    },
    'exp-periferia': {
      title: 'Backend Developer',
      description:
        "I joined the update of the Xalog CMS the portal runs on, the redesign of El Tiempo's front page, and the start of the MOTOR migration. Scoped, project-based delivery inside the newsroom.",
    },
    'exp-talent': {
      title: 'Backend Developer',
      description:
        'I built mass email delivery with personalization logic and the dashboards tracking key metrics: click rate, blacklists and open rate. I optimized queries and data handling on MySQL and Elasticsearch, working with international teams on campaign and messaging workflows.',
    },
    'exp-metabiblioteca': {
      title: 'Full Stack Developer',
      description:
        'I installed, configured and deployed OJS on Linux servers, including dependency management, module maintenance and bug fixing. I automated server-side tasks to improve uptime and guided clients through implementing their editorial systems.',
    },
    'exp-qoopa': {
      title: 'Full Stack Developer',
      description:
        'I developed forms for financial-sector clients and the credit-life calculation that decides whether a bank can grant a loan and for how much. I also built cooperative modules for loans, payroll and CDAT interest, on legacy Oracle environments.',
    },

    'edu-universidad-libre': {
      title: 'Systems Engineering',
      description:
        'Graduated Systems Engineer. Coursework in software architecture, databases and application development.',
    },
    'edu-fedesoft': {
      title: 'Full Stack Developer and Hybrid Applications',
      description: 'Full stack developer and hybrid applications course.',
    },

    'cert-solid': {
      title: 'SOLID Principles and Clean Code',
      description: 'SOLID principles and clean code course by Fernando Herrera.',
    },
    'cert-node': {
      title: 'Node: From Zero to Expert',
      description: 'Node.js from zero to expert course by Fernando Herrera.',
    },
    'cert-typescript': {
      title: 'TypeScript: The Complete Guide',
      description: 'TypeScript complete guide and manual course by Fernando Herrera.',
    },
    'cert-java': {
      title: 'Java Fundamentals',
      description: 'Java fundamentals course offered by Universidad Libre.',
    },
    'cert-ethical-hacking': {
      title: 'Ethical Hacking',
      description: 'Ethical hacking course offered by Universidad Libre.',
    },

    'skill-backend': {
      title: 'Backend',
      description: 'Node.js and TypeScript as the base, with Express and NestJS per project.',
    },
    'skill-ai': {
      title: 'Applied AI',
      description: 'Language models and Bedrock for survey and audio analysis.',
    },
    'skill-frontend': {
      title: 'Frontend',
      description: 'React as the base, plus React Native and Svelte when the product asks for it.',
    },
    'skill-data': {
      title: 'Data',
      description: 'PostgreSQL as the primary engine, with MySQL, SQL Server and Elasticsearch.',
    },
    'skill-cloud': {
      title: 'Infrastructure',
      description: 'AWS, Linux and Docker: deployment, maintenance and automation.',
    },
    'skill-practice': {
      title: 'Practice',
      description: 'Technical leadership, code review and clean code.',
    },
  },
  ui: {
    nav: {
      about: 'About',
      experience: 'Experience',
      background: 'Background',
      contact: 'Contact',
      cv: 'Download CV',
    },
    hero: {
      status: 'Currently employed',
      kicker: "Hi, I'm Miguel",
      headline: 'I build software that',
      headlineAccent: 'turns data into decisions.',
      lede: 'AI Engineer at Illumia. I work with language models to analyze surveys and audio, and I build the Node.js and TypeScript full stack that holds them up.',
      primaryCta: 'See experience',
      secondaryCta: "Let's talk",
      tickerLabel: 'Working stack',
    },
    about: {
      eyebrow: 'Profile',
      heading: 'About me and technical stack',
      philosophyLabel: 'How I work',
      philosophy:
        'I focus on solid backends and on leaving code readable for whoever comes next. AI interests me when it solves a concrete, measurable problem rather than as an end in itself, so I prefer shipping less surface with better foundations.',
      endToEnd: 'End-to-end stack',
      skillLevels: {
        primary: 'Primary',
        solid: 'Solid',
        working: 'Working',
      },
    },
    experience: {
      eyebrow: 'Track record',
      heading: 'Work experience',
      lede: 'Seven years building software, from cooperative systems to AI pipelines in production.',
      currentBadge: 'Current',
      freelanceBadge: 'Freelance',
    },
    background: {
      eyebrow: 'Background',
      heading: 'Education and certifications',
      educationLabel: 'Education',
      certificationLabel: 'Certifications',
      languageLabel: 'Languages',
      languageValue: 'Spanish native · English B2',
    },
    contact: {
      eyebrow: "Let's talk",
      heading: 'Got a problem worth solving?',
      lede: "I work at Illumia and I'm not looking to move right now, but I'm always glad to talk about data, models and systems that have to hold up in production.",
      emailCta: 'Email me',
      linkedinCta: 'Connect on LinkedIn',
    },
    cv: {
      download: 'Download CV',
      hint: 'PDF, in English and Spanish',
    },
    footer: {
      role: 'AI Engineer · Full stack with Node.js and TypeScript',
      builtWith: 'Built with React, TypeScript and Tailwind',
    },
  },
};
