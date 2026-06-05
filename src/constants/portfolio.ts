import {
  Atom,
  Brain,
  Code2,
  Database,
  Dna,
  FlaskConical,
  GitBranch,
  GraduationCap,
  Languages,
  LineChart,
  Medal,
  Microscope,
  Network,
  ServerCog,
  Sparkles,
  Trophy,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const profile = {
  name: 'Nikil Krishna',
  role: 'Undergraduate Student',
  location: 'SASTRA Deemed University, Thanjavur',
  email: '126010091@sastra.ac.in',
  website: 'https://nikilkrishna.netlify.app',
  linkedin: 'https://www.linkedin.com/in/nikil-krishna-0b2a5b1bb/',
  github: 'https://github.com/greenrace666',
  twitter: 'https://x.com/bionikil',
  blog: 'https://nikilblog.netlify.app/',
  summary:
    'My academic and research interests lie in structural computational biology. My experience encompasses molecular visualization, design, and simulation. I am currently learning about artificial intelligence and deep learning applications for in silico drug design and protein binder design.',
};

export const highlights = [
  { label: 'GATE BT AIR', value: '14', detail: 'Score 858, April 2026' },
  { label: 'Current venture', value: 'Graduate', detail: 'SASTRA Deemed University' },
  { label: 'Focus', value: 'AI + Bio', detail: 'Drug design and protein binder design' },
];

export const education = [
  {
    institution: 'SASTRA Deemed University, Thanjavur',
    degree: 'B.Tech Biotechnology',
    period: '2022 - Present',
  },
  {
    institution: 'ALPHA Wisdom Vidyashram',
    degree: 'HSC and SSLC',
    period: '2020',
  },
];

export const experience = [
  {
    title: 'GATE Biotechnology',
    organization: 'GATE BT',
    period: '04/2026',
    icon: Trophy,
    bullets: ['AIR 14', 'Score 858'],
  },
  {
    title: 'Capstone Project and Publication',
    organization: 'SASTRA Deemed University',
    period: '04/2026',
    icon: FlaskConical,
    bullets: [
      'Structure-Based Drug Design of Novel Inhibitors Targeting the Thiamine Biosynthesis Pathway in Bacteria',
      'High throughput virtual screening',
      'Lead optimization by R-group substitution and SAR analysis',
      'Molecular dynamics and analysis',
      'Preprint available at bioRxiv',
    ],
  },
  {
    title: 'Founder',
    organization: 'Phage',
    period: '01/2026',
    icon: ServerCog,
    bullets: [
      'phage.netlify.app (alpha testing)',
      'Molecular Dynamics as a Service',
      'Frontend web design',
      'Production-grade molecular dynamics automation',
      'Backend scaling, optimization and maintenance',
      'Agentic engineering',
    ],
  },
  {
    title: 'Summer Internship',
    organization: 'IIT Dharwad',
    period: '06/2025',
    icon: Code2,
    bullets: [
      'Development of early-stage computational drug discovery pipeline using Python',
      'Virtual screening, rescoring and statistical analysis automation',
      'Virtual environment and dependency management using Conda',
      'Parallel high performance scientific computing',
      'Benchmark of three SOTA machine learning architectures for protein binder design',
    ],
  },
  {
    title: 'Undergraduate Student Researcher',
    organization: 'SASTRA Deemed University',
    period: '06/2024',
    icon: Microscope,
    bullets: [
      'Molecular Motors Laboratory',
      'Drug design and protein engineering',
      'Research Credits - Fragment Based Drug Design Of Anthelmintic using Genetic Algorithm',
    ],
  },
];

export const projects = [
  {
    title: 'Phage',
    category: 'Platform',
    description:
      'A Molecular Dynamics as a Service platform in an interactive web interface.',
    technologies: ['React', 'Modal GPU', 'Supabase', 'Automation'],
    github: '',
    demo: 'https://phage.netlify.app/',
  },
  {
    title: 'Computational Drug Discovery Pipeline',
    category: 'Research',
    description:
      'Python pipeline for early-stage drug discovery, including virtual screening, rescoring, statistics, Conda environments, and parallel scientific computing.',
    technologies: ['Python', 'Conda', 'HPC', 'Virtual Screening'],
    github: '',
    demo: '',
  },
  {
    title: 'Protein Binder Design Benchmark',
    category: 'ML',
    description:
      'Benchmarking three state-of-the-art machine learning architectures for protein binder design during the IIT Dharwad internship.',
    technologies: ['Protein Design', 'ML', 'Benchmarking'],
    github: '',
    demo: '',
  },
  {
    title: 'Protein Structure Prediction',
    category: 'Open Source',
    description: 'Improvements to boltz.py and chai1.py examples for all-atom protein structure prediction workflows on Modal.',
    technologies: ['Python', 'PyTorch', 'Modal', 'Chai-1', 'Boltz'],
    github: 'https://github.com/modal-labs/modal-examples/pull/1016',
    demo: '',
  },
  {
    title: 'Biocolabs',
    category: 'Learning',
    description: 'Implementing machine learning models in Google Colab for practical computational biology workflows.',
    technologies: ['Google Colab', 'Python', 'GitHub'],
    github: 'https://github.com/greenrace666/biocolabs',
    demo: '',
  },
  {
    title: 'Portfolio Website',
    category: 'Web',
    description: 'Open-source portfolio website for research, projects, writing, CV, and contact workflows.',
    technologies: ['React', 'Vite', 'Tailwind', 'Netlify'],
    github: 'https://github.com/greenrace666/websitecode',
    demo: '',
  },
];

export const skillGroups: { title: string; icon: LucideIcon; skills: string[] }[] = [
  {
    title: 'ML Protein Structure Prediction',
    icon: Brain,
    skills: ['AlphaFold', 'Boltz', 'Diffusion-based models'],
  },
  {
    title: 'Drug Design',
    icon: Atom,
    skills: ['Virtual screening', 'Fragment-based drug design', 'Genetic algorithm / combinatorial chemistry', 'Lead optimization', 'ADMET analysis'],
  },
  {
    title: 'Molecular Docking and Dynamics',
    icon: Network,
    skills: ['AutoDock', 'DiffDock', 'Gromacs', 'OpenMM'],
  },
  {
    title: 'Process Simulation',
    icon: LineChart,
    skills: ['Aspen Plus', 'SuperPro Designer', 'DWSIM'],
  },
  {
    title: 'Molecular Modelling',
    icon: Dna,
    skills: ['ChimeraX', 'PyMOL', 'VMD', 'MOE', 'Schrodinger Maestro'],
  },
  {
    title: 'Python',
    icon: Code2,
    skills: ['Molecular visualization', 'Data analysis', 'Machine learning', 'Bioinformatics pipelines', 'Dependency management', 'AI automation'],
  },
  {
    title: 'Bioinformatics',
    icon: Database,
    skills: ['Linux', 'BLAST', 'MSA', 'Visual Studio Code', 'Git version management', 'Scientific computing'],
  },
];

export const languages = [
  { name: 'English', proficiency: 'Professional working proficiency' },
  { name: 'Tamil', proficiency: 'Bilingual proficiency' },
  { name: 'Telugu', proficiency: 'Elementary proficiency' },
  { name: 'Hindi', proficiency: 'Limited working proficiency' },
  { name: 'Kannada', proficiency: 'Bilingual proficiency' },
];

export const certifications = [
  {
    title: 'Aspen Plus Simulation Software - A Basic Course For Beginners',
    issuer: 'NPTEL',
    date: '2026',
    detail: '90%',
    icon: GraduationCap,
  },
  {
    title: 'Schrodinger Drug Discovery Hackathon Winner',
    issuer: 'Schrodinger',
    date: '2024',
    detail:
      'In silico structure-based drug design targeting Mycobacterium tuberculosis using genetic algorithm and combinatorial chemistry.',
    icon: Medal,
  },
  {
    title: 'Drug Delivery: Principles and Engineering',
    issuer: 'NPTEL',
    date: '2024',
    detail: '83%',
    icon: GraduationCap,
  },
];

export const researchFocus = [
  'Structural computational biology',
  'Molecular visualization, design and simulation',
  'AI and machine learning for in silico drug design',
  'Protein binder design',
  'Drug design and protein engineering',
];

export const blogPosts = [
  {
    title: 'From Lab Bench to Life Lessons - A Slightly Less Boring Journey of Discovery',
    excerpt: 'A reflective note on biology, curiosity, and learning through research.',
    date: 'December 30, 2024',
    readTime: '5 min read',
    link: 'https://nikilblog.netlify.app/posts/bio/',
  },
  {
    title: 'All Atom Structure Prediction in Minutes',
    excerpt: 'Using Chai-1 on H100 GPUs for rapid all-atom structure prediction.',
    date: 'December 16, 2024',
    readTime: '5 min read',
    link: 'https://nikilblog.netlify.app/posts/chai1-modal/',
  },
];

export const socialLinks = [
  {
    platform: 'GitHub',
    username: '@greenrace666',
    link: profile.github,
  },
  {
    platform: 'LinkedIn',
    username: 'nikil-krishna-0b2a5b1bb',
    link: profile.linkedin,
  },
  {
    platform: 'X',
    username: '@bionikil',
    link: profile.twitter,
  },
  {
    platform: 'Portfolio',
    username: 'nikilkrishna.netlify.app',
    link: profile.website,
  },
];

export const languageIcon = Languages;
export const gitIcon = GitBranch;
