import type { ImageMetadata } from 'astro';
import verbenaApp from '@/assets/projects/verbena-app.png';
import verbenaGift from '@/assets/projects/verbena-gift.png';
import r2d2Monitor from '@/assets/projects/r2d2-monitor.png';
import debianTimeCapsule from '@/assets/projects/debian-time-capsule.png';
import gameboyCamera from '@/assets/projects/gameboy-camera-studio.png';

export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  demoUrl: string;
  codeUrl: string;
  category: string;
  featured: boolean;
  gradient: string;
  accentColor: string;
  image?: ImageMetadata;
  stars?: number;
  vibe?: string;
}

export const projects: Project[] = [
  {
    id: 'verbena-app',
    title: 'Verbena App',
    description: 'A comprehensive solution designed to centralize and automate every critical area of the business, acting as the intelligence hub for brand growth.',
    stack: ['Tailwind CSS', 'Laravel', 'MariaDB', 'JavaScript'],
    demoUrl: 'https://app.verbenadesign.com.mx',
    codeUrl: '', // Private source
    category: 'SAAS',
    featured: true,
    gradient: 'from-violet-900/50 via-indigo-900/30 to-slate-900/50',
    accentColor: '#7c3aed',
    image: verbenaApp,
    vibe: 'professional',
  },
  {
    id: 'verbena-gift',
    title: 'Verbena Gift',
    description: 'A premium digital storefront fully synchronized with a central database to offer a seamless and dynamic shopping experience.',
    stack: ['Tailwind CSS', 'Laravel', 'MariaDB', 'JavaScript'],
    demoUrl: 'https://gift.verbenadesign.com.mx',
    codeUrl: '', // Private source
    category: 'E-commerce',
    featured: true,
    gradient: 'from-blue-900/50 via-slate-900/40 to-indigo-900/30',
    accentColor: '#3b82f6',
    image: verbenaGift,
    vibe: 'professional',
  },
  {
    id: 'r2d2-monitor',
    title: 'R2-D2 Monitor',
    description: 'High-performance system telemetry console for Windows with a robust TUI inspired by retro astromech aesthetics.',
    stack: ['Go', 'Powershell'],
    demoUrl: '', // CLI tool, no web demo
    codeUrl: 'https://github.com/victxrlarixs/r2d2-monitor',
    category: 'TUI',
    featured: false,
    gradient: 'from-slate-900 via-blue-900/40 to-slate-800/50',
    accentColor: '#00ADD8',
    image: r2d2Monitor,
    vibe: 'terminal',
  },
  {
    id: 'debian-time-capsule',
    title: 'Debian Time Capsule',
    description: 'A full-scale recreation of the Unix Experience using Common Desktop Environment (CDE) — running entirely in the browser.',
    stack: ['TypeScript', 'Astro', 'PWA', 'Tailwind CSS'],
    demoUrl: 'https://debian.com.mx',
    codeUrl: 'https://github.com/victxrlarixs/debian-time-capsule',
    category: 'Frontend',
    featured: false,
    gradient: 'from-[#A81D33]/30 via-slate-900/60 to-black',
    accentColor: '#A81D33',
    image: debianTimeCapsule,
    vibe: 'creative',
  },
  {
    id: 'gameboy-camera-studio',
    title: 'Game Boy Camera Studio',
    description: 'A browser-based recreation of the iconic 1998 Game Boy Camera workflow — capture, develop, and print — inside a tactile interface.',
    stack: ['TypeScript', 'Astro', 'CSS'],
    demoUrl: 'https://victxrlarixs.github.io/gameboy-camera-studio/',
    codeUrl: 'https://github.com/Victxrlarixs/gameboy-camera-studio',
    category: 'Frontend',
    featured: false,
    gradient: 'from-[#8bac0f]/30 via-emerald-900/40 to-slate-900/60',
    accentColor: '#8bac0f',
    image: gameboyCamera,
    vibe: 'creative',
  },
];
