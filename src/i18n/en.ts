import type { Locale } from './types';

export const en: Locale = {
  code: 'en',
  label: 'EN',
  htmlLang: 'en',
  skillLabels: {
    'skill-technical-leadership': 'Technical leadership',
    'skill-clean-code': 'Clean code & SOLID',
    'skill-code-review': 'Code review',
    'skill-scrum': 'Scrum',
  },
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
      title: 'AI, day to day',
      description: 'What I actually work with, every day.',
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
      description: 'How I work with other teams and what I check before calling something done.',
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
      kicker: "Hi, I'm Miguel",
      headline: 'I build software that',
      headlineAccent: 'turns data into decisions.',
      lede:
        'Seven years turning processes people do by hand —spreadsheets, paper, steps nobody remembers— into tools they open without anyone explaining how. Backend in Node.js and TypeScript, and an interface that stays out of the way.',
      primaryCta: 'See experience',
      secondaryCta: "Let's talk",
      tickerLabel: 'Working stack',
    },
    about: {
      eyebrow: 'Profile',
      heading: 'About me and technical stack',
      philosophyLabel: 'How I work',
      philosophy:
        'I like building things that make someone\'s day easier: an application that replaces a spreadsheet, a tool that saves a team three steps. I work with AI because it is part of how software gets built today, the way a framework used to be: I give it context, the conventions of the project and what I already know does not work, and then I review what comes back the same way I would review another person\'s work. In my spare time I build games and small projects, mostly out of curiosity: I like understanding how new things work and trying them with my own hands.',
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
      heading: "Shall we build something?",
      lede: "If you have an idea going around, a system that needs a hand, or just want to argue about how to approach a problem, this is the place. I like people who ask before assuming.",
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
