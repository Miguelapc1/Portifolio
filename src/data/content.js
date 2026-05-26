/**
 * CONTENT.JS — Central content file
 * Edit all text, links, projects, skills, and experience here.
 * No need to touch any component to update content.
 */

// ─── PERSONAL INFO ───────────────────────────────────────────────────────────
export const personal = {
  name: 'Miguel Augusto',
  role: 'Desenvolvedor Fullstack Pleno',
  tagline: 'Engenharia de software com foco em infraestrutura, automação e confiabilidade operacional.',
  greeting: 'Olá, meu nome é',
  bio: [
    'Profissional Fullstack com experiência em desenvolvimento de aplicações web, infraestrutura e automação de processos, atuando na criação de soluções escaláveis, performáticas e orientadas à confiabilidade operacional.',
    'Possuo conhecimento em front-end, back-end e práticas DevOps, trabalhando com foco em integração de sistemas, eficiência operacional e evolução contínua de ambientes tecnológicos.',
  ],
};

// ─── NAVIGATION ──────────────────────────────────────────────────────────────
export const navLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
];

// ─── SOCIAL LINKS ────────────────────────────────────────────────────────────
export const social = {
  github: 'https://github.com/Miguelapc1',
  linkedin: 'https://www.linkedin.com/in/miguel-augusto-51b563334/',
  email: 'miguelpecanha2020@gmail.com',
};

// ─── SKILLS ──────────────────────────────────────────────────────────────────
// Edit technologies here. Each item: { name, icon (SVG path string or component key) }
export const skills = {
  frontend: {
    label: 'Front-end',
    items: [
      { name: 'JavaScript', icon: '/icons/javascript.svg' },
      { name: 'React', icon: '/icons/react.svg' },
      { name: 'CSS', icon: '/icons/css.svg' },
      { name: 'HTML', icon: '/icons/html.svg' },
      { name: 'Figma', icon: '/icons/figma.svg' },
    ],
  },

  backend: {
    label: 'Back-end',
    items: [
      { name: 'Java', icon: '/icons/java.svg' },
      { name: 'Python', icon: '/icons/python.svg' },
      { name: 'C', icon: '/icons/c.svg' },
      { name: 'PHP', icon: '/icons/php.svg' },
      { name: 'SQL', icon: '/icons/sql.svg' },
    ],
  },

  devops: {
    label: 'DevOps / Infra',
    items: [
      { name: 'Linux', icon: '/icons/linux.svg' },
      { name: 'Redes', icon: '/icons/redes.svg' },
      { name: 'GitHub', icon: '/icons/github.png' },
      { name: 'Docker', icon: '/icons/docker.svg' },
      { name: 'Cloud', icon: '/icons/cloud.svg' },
      { name: 'GitLab', icon: '/icons/gitlab.svg' },
    ],
  },
};
// ─── EXPERIENCE ──────────────────────────────────────────────────────────────
export const experiences = [
  {
    id: 1,
    period: '2025 — 2026',
    role: 'Desenvolvedor Fullstack Pleno',
    company: 'Ironlab',
    description:
      'Desenvolvedor Fullstack com experiência na criação e manutenção de aplicações web modernas, atuando tanto no front-end quanto no back-end. Trabalho no desenvolvimento de soluções escaláveis, interfaces responsivas e integrações de sistemas, com foco em desempenho, organização de código e experiência do usuário.',
    tags: ['Fullstack', 'Gestão de projetos', 'DevOps'],
  },
  {
    id: 2,
    period: '2025 — 2026',
    role: 'Desenvolvedor Back-end',
    company: 'Freelance',
    description:
      'Desenvolvimento de APIs REST e microsserviços. Gestão de infraestrutura cloud e automação de processos críticos. Integração de sistemas legados com stacks modernas.',
    tags: ['Back-end', 'Cloud', 'Automação', 'DataBase'],
  },
  {
    id: 3,
    period: '2025 — Atual',
    role: 'Analista de Operações',
    company: 'Zoox Smart Data',
    description:
      'Administração de servidores Linux e ambientes de rede. Monitoramento e sustentação de sistemas de produção. Desenvolvimento de scripts de automação e ferramentas internas.',
    tags: ['Linux', 'Redes', 'Automação'],
  },
];

// ─── PROJECTS ────────────────────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    name: 'Plataforma de Monitoramento',
    description:
      'Sistema de monitoramento automatizado para análise contínua de URLs e serviços, com verificação em tempo real, identificação de falhas e acompanhamento operacional. Desenvolvido com foco em estabilidade, automação de processos e centralização de informações para monitoramento eficiente dos ambientes.',
    stack: ['JavaScript', 'React', 'Data Base', 'Git', 'Python'],
    url: '#',
    featured: true,
  },
  {
    id: 2,
    name: 'Script de Automação de Monitoramento',
    description:
      'Script de monitoramento automatizado desenvolvido para acompanhamento contínuo de URLs e serviços, realizando verificações em tempo real, detecção de instabilidades e geração de informações para suporte operacional e análise de disponibilidade dos ambientes.',
    stack: ['JavaScript', 'HubSpot', 'Zabbix',],
    url: '#',
    featured: true,
  },
  {
    id: 3,
    name: 'API Monitoring Platform',
    description:
      'Plataforma desenvolvida para monitoramento e gerenciamento de APIs em tempo real, oferecendo métricas de disponibilidade, desempenho, status operacional e análise de incidentes através de um painel centralizado.',
    stack: ['Java', 'Spring Boot', 'Redis', 'Docker'],
    url: '#',
    featured: false,
  },
  {
    id: 4,
    name: 'Deploy Platform',
    description:
      'Sistema de deploy automatizado integrado ao GitHub, permitindo seleção de repositórios, execução de builds e publicação automática de aplicações com gerenciamento simplificado de ambientes e processos de implantação.',
    stack: ['Python', 'GitLab CI', 'Kubernetes', 'React'],
    url: '#',
    featured: false,
  },
];
