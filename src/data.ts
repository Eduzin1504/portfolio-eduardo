import { Tool, Project, CareerItem } from './types';
import profileImgUrl from './assets/images/profile_img_1779763702973.png';

export const PERSONAL_INFO = {
  name: "EDUARDO MACIEL",
  taglines: [
    "desenvolvedor FullStack",
    "empreendedor",
    "cybersecurity"
  ],
  bioTitle: "about.txt",
  bioParagraphs: [
    "Sou Eduardo Hirohito Izawa Maciel, estudante de Engenharia de Software com interesse em desenvolvimento full stack, cybersecurity, inteligência artificial e produtos digitais. Gosto de transformar problemas em soluções bem estruturadas, unindo visão técnica, estratégia e design.",
    "Tenho foco em aprender continuamente, construir projetos com impacto real e desenvolver soluções modernas, funcionais e escaláveis."
  ],
  profileImg: profileImgUrl,
  systemVersion: "2.0.4-STABLE"
};

export const TOOLS_LIST: Tool[] = [
  {
    id: "linux",
    name: "LINUX",
    category: "OS",
    indexCode: "[00]",
    iconName: "Terminal"
  },
  {
    id: "git",
    name: "GIT",
    category: "VCS",
    indexCode: "[01]",
    iconName: "GitBranch"
  },
  {
    id: "supabase",
    name: "SUPABASE",
    category: "Database",
    indexCode: "[02]",
    iconName: "Zap"
  },
  {
    id: "htmlcss",
    name: "HTML/CSS",
    category: "Frontend",
    indexCode: "[03]",
    iconName: "Code2"
  },
  {
    id: "cybersecurity",
    name: "CYBERSECURITY",
    category: "Security",
    indexCode: "[04]",
    iconName: "Shield"
  },
  {
    id: "burp",
    name: "BURP SUITE",
    category: "Pentest",
    indexCode: "[05]",
    iconName: "Target"
  },
  {
    id: "ai",
    name: "AGENTES IA",
    category: "AI",
    indexCode: "[06]",
    iconName: "Bot"
  },
  {
    id: "python",
    name: "PYTHON",
    category: "Language",
    indexCode: "[07]",
    iconName: "FileCode"
  }
];

export const PROJECTS_LIST: Project[] = [
  {
    id: "eye-tracking",
    title: "JOGO COM EYETRACKING",
    status: "active",
    description: "Jogo educacional para UNIFESP desenvolvido em 10 semanas com integração a um Eyetracker, JavaScript, Phaser e HTML",
    techStack: ["Phaser.js", "JavaScript", "EyeTracker API", "HTML5", "CSS3"],
    runLabel: "RUN EXECUTABLE"
  },
  {
    id: "resolve-brasil",
    title: "APLICATIVO RESOLVE BRASIL",
    status: "active",
    description: "Aplicativo e Site desenvolvido usando React, Html, CSS, Javascript e banco de dados e autenticação via Firebase. O intuito do projeto era facilitar a comunicação dos governos e sua população em áreas rurais",
    techStack: ["React.js", "Firebase", "CSS Grid", "JavaScript ES6"],
    runLabel: "RUN EXECUTABLE"
  },
  {
    id: "redbull-24h",
    title: "PROJETO REDBULL 24 HORAS",
    status: "deployed",
    description: "Plataforma Web desenvolvida em HTML, CSS, Supabase, Typescript com React+Express, e integração de um OCR utilizando Tesseract.js e OpenCV.js",
    techStack: ["React", "Express", "Supabase", "TypeScript", "Tesseract.js", "OpenCV.js"],
    runLabel: "RUN EXECUTABLE"
  }
];

export const CAREER_HISTORY: CareerItem[] = [
  {
    company: "ECHOSEC",
    duration: "4 mos",
    roles: [
      {
        title: "Diretor de Eventos",
        type: "Full-time",
        period: "May 2026 - Present",
        description: "Responsável por liderar a área de eventos da liga, organizando bate-papos com profissionais de mercado e competições de CTFs abertos, trazendo oportunidades para os membros das ligas e gerando networking orgânico."
      },
      {
        title: "Membro de Eventos e Competidor CTF",
        type: "Part-time",
        period: "Feb 2026 - May 2026"
      }
    ]
  },
  {
    company: "INTELI JÚNIOR",
    roles: [
      {
        title: "Representante Comercial",
        type: "Full-time",
        period: "Mar 2026 - Present",
        description: "Aprovado em primeiro lugar no processo seletivo para a empresa Júnior da Inteli de mais de 60 funcionários. Encarregado pela prospecção ativa via Cold Calls e SDR, e closer de leads vindos de tráfego pago, com experiência com o cliente, rapport, criação de propostas e negociação."
      }
    ]
  },
  {
    company: "INTELI CONSULTING SOCIETY",
    roles: [
      {
        title: "Membro",
        type: "Full-time",
        period: "Mar 2026 - Present",
        description: "Aprovado para um ambiente de apenas 12 alunos dedicados em estudar para processos seletivos e consultorias techs. Esses estudos vão desde conceitos de negócios até técnicos como System Design, LeetCode e arquitetura de software."
      }
    ]
  },
  {
    company: "ALPHABOTS #1860",
    duration: "full-time, 3 yrs 8 mos",
    roles: [
      {
        title: "Apresentador de Prêmios",
        type: "Jan 2024 - Apr 2025",
        period: "Jan 2024 - Apr 2025"
      },
      {
        title: "Líder da Equipe de Estratégia",
        type: "Jan 2023 - Dec 2023",
        period: "Jan 2023 - Dec 2023"
      },
      {
        title: "Pit student",
        type: "Sep 2021 - Dec 2022",
        period: "Sep 2021 - Dec 2022"
      }
    ]
  }
];
