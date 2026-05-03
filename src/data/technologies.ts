export type TechCategory = 'Backend' | 'Frontend & Mobile' | 'Databases' | 'Systems & DevOps';

export interface Tech {
  name: string;
  color: string;
  bgColor: string;
  borderColor: string;
  icon: string;
  category: TechCategory;
}

export const technologies: Tech[] = [
  // Backend
  { name: 'Laravel', color: '#FF2D20', bgColor: 'rgba(255, 45, 32, 0.05)', borderColor: 'rgba(255, 45, 32, 0.1)', icon: 'devicon-laravel-original', category: 'Backend' },
  { name: 'Go', color: '#00ADD8', bgColor: 'rgba(0, 173, 216, 0.05)', borderColor: 'rgba(0, 173, 216, 0.1)', icon: 'devicon-go-original-wordmark', category: 'Backend' },
  { name: 'Node.js', color: '#16a34a', bgColor: 'rgba(22, 163, 74, 0.05)', borderColor: 'rgba(22, 163, 74, 0.1)', icon: 'devicon-nodejs-plain', category: 'Backend' },
  
  // Frontend & Mobile
  { name: 'Vue.js', color: '#41B883', bgColor: 'rgba(65, 184, 131, 0.05)', borderColor: 'rgba(65, 184, 131, 0.1)', icon: 'devicon-vuejs-plain', category: 'Frontend & Mobile' },
  { name: 'Astro', color: '#FF5D01', bgColor: 'rgba(255, 93, 1, 0.05)', borderColor: 'rgba(255, 93, 1, 0.1)', icon: 'devicon-astro-plain', category: 'Frontend & Mobile' },
  { name: 'TypeScript', color: '#3178C6', bgColor: 'rgba(49, 120, 198, 0.05)', borderColor: 'rgba(49, 120, 198, 0.1)', icon: 'devicon-typescript-plain', category: 'Frontend & Mobile' },
  { name: 'Flutter', color: '#02569B', bgColor: 'rgba(2, 86, 155, 0.05)', borderColor: 'rgba(2, 86, 155, 0.1)', icon: 'devicon-flutter-plain', category: 'Frontend & Mobile' },
  { name: 'Tailwind', color: '#0ea5e9', bgColor: 'rgba(14, 165, 233, 0.05)', borderColor: 'rgba(14, 165, 233, 0.1)', icon: 'devicon-tailwindcss-original', category: 'Frontend & Mobile' },

  // Databases
  { name: 'MariaDB', color: '#003545', bgColor: 'rgba(0, 53, 69, 0.05)', borderColor: 'rgba(0, 53, 69, 0.1)', icon: 'devicon-mariadb-original', category: 'Databases' },
  { name: 'Redis', color: '#DC382D', bgColor: 'rgba(220, 56, 45, 0.05)', borderColor: 'rgba(220, 56, 45, 0.1)', icon: 'devicon-redis-plain', category: 'Databases' },
  { name: 'SQL Server', color: '#CC2927', bgColor: 'rgba(204, 41, 39, 0.05)', borderColor: 'rgba(204, 41, 39, 0.1)', icon: 'devicon-microsoftsqlserver-plain', category: 'Databases' },

  // Systems & DevOps
  { name: 'Docker', color: '#2563eb', bgColor: 'rgba(37, 99, 235, 0.05)', borderColor: 'rgba(37, 99, 235, 0.1)', icon: 'devicon-docker-plain', category: 'Systems & DevOps' },
  { name: 'Linux', color: '#FCC624', bgColor: 'rgba(252, 198, 36, 0.05)', borderColor: 'rgba(252, 198, 36, 0.1)', icon: 'devicon-linux-plain', category: 'Systems & DevOps' },
  { name: 'Git', color: '#dc2626', bgColor: 'rgba(220, 38, 38, 0.05)', borderColor: 'rgba(220, 38, 38, 0.1)', icon: 'devicon-git-plain', category: 'Systems & DevOps' },
  { name: 'GitHub Actions', color: '#2088FF', bgColor: 'rgba(32, 136, 255, 0.05)', borderColor: 'rgba(32, 136, 255, 0.1)', icon: 'devicon-githubactions-plain', category: 'Systems & DevOps' },
  { name: 'PowerShell', color: '#5391FE', bgColor: 'rgba(83, 145, 254, 0.05)', borderColor: 'rgba(83, 145, 254, 0.1)', icon: 'devicon-powershell-plain', category: 'Systems & DevOps' },
  { name: 'Bash', color: '#4EAA25', bgColor: 'rgba(78, 170, 37, 0.05)', borderColor: 'rgba(78, 170, 37, 0.1)', icon: 'devicon-bash-plain', category: 'Systems & DevOps' },
  { name: 'Windows Server', color: '#0078D6', bgColor: 'rgba(0, 120, 214, 0.05)', borderColor: 'rgba(0, 120, 214, 0.1)', icon: 'devicon-windows8-original', category: 'Systems & DevOps' },
];
