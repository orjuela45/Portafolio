import type { YearMonth } from './dates';

export type Emphasis = 'primary' | 'solid' | 'working';

export type Skill = {
  readonly name: string;
  readonly emphasis: Emphasis;
};

export type SkillGroup = {
  readonly id: string;
  readonly items: readonly Skill[];
};

export type ExperienceEntry = {
  readonly id: string;
  readonly company: string;
  readonly start: YearMonth;
  readonly end?: YearMonth;
  readonly current?: boolean;
  readonly freelance?: boolean;
  readonly stack: readonly string[];
};

export type EducationEntry = {
  readonly id: string;
  readonly institution: string;
  readonly start: YearMonth;
  readonly end?: YearMonth;
};

export type CertificationEntry = {
  readonly id: string;
  readonly issuer: string;
  readonly issued: YearMonth;
};

export type Profile = {
  readonly name: string;
  readonly shortName: string;
  readonly email: string;
  readonly phone: string;
  readonly location: string;
  readonly links: readonly { readonly label: string; readonly href: string }[];
  readonly skills: readonly SkillGroup[];
};

const ym = (year: number, month: number): YearMonth => ({ year, month });

export const profile: Profile = {
  name: 'Miguel Ángel Orjuela Riaño',
  shortName: 'Miguel Orjuela',
  email: 'miguel.orjuela45@gmail.com',
  phone: '+57 310 863 0877',
  location: 'Bogotá, Colombia',
  links: [
    { label: 'GitHub', href: 'https://github.com/orjuela45' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/miguel-angel-orjuela-ria%C3%B1o-1baa40177/',
    },
  ],
  skills: [
    {
      id: 'skill-backend',
      items: [
        { name: 'Node.js', emphasis: 'primary' },
        { name: 'TypeScript', emphasis: 'primary' },
        { name: 'Express', emphasis: 'solid' },
        { name: 'NestJS', emphasis: 'solid' },
        { name: 'REST', emphasis: 'solid' },
      ],
    },
    {
      id: 'skill-ai',
      items: [
        { name: 'Claude Code', emphasis: 'primary' },
        { name: 'AWS Bedrock', emphasis: 'primary' },
        { name: 'LLM pipelines', emphasis: 'solid' },
        { name: 'Audio & survey analysis', emphasis: 'solid' },
      ],
    },
    {
      id: 'skill-frontend',
      items: [
        { name: 'React', emphasis: 'primary' },
        { name: 'React Native', emphasis: 'solid' },
        { name: 'Svelte', emphasis: 'solid' },
        { name: 'Tailwind CSS', emphasis: 'solid' },
      ],
    },
    {
      id: 'skill-data',
      items: [
        { name: 'PostgreSQL', emphasis: 'primary' },
        { name: 'MySQL', emphasis: 'solid' },
        { name: 'SQL Server', emphasis: 'solid' },
        { name: 'Elasticsearch', emphasis: 'working' },
      ],
    },
    {
      id: 'skill-cloud',
      items: [
        { name: 'AWS', emphasis: 'primary' },
        { name: 'Linux', emphasis: 'solid' },
        { name: 'Docker', emphasis: 'solid' },
        { name: 'Git', emphasis: 'solid' },
      ],
    },
    {
      id: 'skill-practice',
      items: [
        { name: 'Technical leadership', emphasis: 'solid' },
        { name: 'Clean code & SOLID', emphasis: 'solid' },
        { name: 'Code review', emphasis: 'solid' },
        { name: 'Scrum', emphasis: 'working' },
      ],
    },
  ],
};

export const experience: readonly ExperienceEntry[] = [
  {
    id: 'exp-illumia',
    company: 'Illumia',
    start: ym(2026, 5),
    current: true,
    stack: ['Claude Code', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS', 'Bedrock'],
  },
  {
    id: 'exp-christus',
    company: 'Christus sinergia',
    start: ym(2023, 5),
    end: ym(2026, 5),
    stack: ['Svelte', 'Node.js', 'TypeScript', 'SQL Server', 'Linux', 'Gitea', 'ClickUp'],
  },
  {
    id: 'exp-periferia',
    company: 'Periferia — El Tiempo',
    start: ym(2023, 8),
    end: ym(2024, 12),
    freelance: true,
    stack: ['PHP', 'Symfony', 'MySQL', 'Docker', 'React Native', 'Drupal', 'Vue'],
  },
  {
    id: 'exp-talent',
    company: 'Talent.com',
    start: ym(2022, 7),
    end: ym(2023, 2),
    stack: ['PHP', 'MySQL', 'RabbitMQ', 'Elasticsearch', 'Linux'],
  },
  {
    id: 'exp-metabiblioteca',
    company: 'MetaBiblioteca',
    start: ym(2021, 8),
    end: ym(2022, 6),
    stack: ['PHP', 'MySQL', 'Linux', 'OJS'],
  },
  {
    id: 'exp-clickonplans',
    company: 'Clickonplans',
    start: ym(2020, 9),
    end: ym(2021, 8),
    stack: ['PHP', 'Python', 'MySQL', 'React Native', 'AWS', 'Linux'],
  },
  {
    id: 'exp-laika',
    company: 'Laika',
    start: ym(2020, 7),
    end: ym(2020, 9),
    stack: ['PHP', 'Laravel', 'Vue', 'MySQL'],
  },
  {
    id: 'exp-qoopa',
    company: 'Qoopa',
    start: ym(2019, 11),
    end: ym(2020, 7),
    stack: ['PHP', 'Yii2', 'MySQL'],
  },
  {
    id: 'exp-ethos',
    company: 'Ethos soluciones',
    start: ym(2019, 2),
    end: ym(2019, 10),
    stack: ['Java', 'Oracle'],
  },
];

export const education: readonly EducationEntry[] = [
  {
    id: 'edu-universidad-libre',
    institution: 'Universidad Libre',
    start: ym(2016, 1),
    end: ym(2022, 4),
  },
  {
    id: 'edu-fedesoft',
    institution: 'Fedesoft',
    start: ym(2018, 1),
    end: ym(2018, 12),
  },
  {
    id: 'edu-praxis-a2',
    institution: 'Praxis School',
    start: ym(2021, 12),
    end: ym(2021, 12),
  },
  {
    id: 'edu-praxis-b1',
    institution: 'Praxis School',
    start: ym(2022, 6),
    end: ym(2022, 6),
  },
];

export const certifications: readonly CertificationEntry[] = [
  { id: 'cert-solid', issuer: 'Udemy', issued: ym(2022, 12) },
  { id: 'cert-node', issuer: 'Udemy', issued: ym(2022, 12) },
  { id: 'cert-typescript', issuer: 'Udemy', issued: ym(2023, 1) },
  { id: 'cert-java', issuer: 'Universidad Libre', issued: ym(2017, 12) },
  { id: 'cert-ethical-hacking', issuer: 'Universidad Libre', issued: ym(2017, 12) },
];
