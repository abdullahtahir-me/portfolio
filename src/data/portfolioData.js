// src/data/portfolioData.js
import {
  Code2, Layout, Database, Terminal, Calendar, 
  Gamepad2, Smile, ImageIcon
} from "lucide-react";

export const skills = [
  { category: "Languages", items: ["TypeScript", "JavaScript", "Python", "Java", "C", "SQL"], icon: Code2 },
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Vite", "shadcn/ui"], icon: Layout },
  { category: "Backend & DB", items: ["Node.js", "Supabase", "PostgreSQL", "Express"], icon: Database },
  { category: "Tools & Deployment", items: ["Git", "Vercel", "Linux", "Raylib", "libGDX"], icon: Terminal },
];

export const projects = [
  {
    title: "Calenme",
    icon: Calendar,
    featured: true,
    description: "Full-stack academic planner with server-side Google OAuth, atomic PostgreSQL transactions, and Row-Level Security.",
    tech: ["Next.js", "Supabase", "PostgreSQL", "Tailwind"],
    link: "https://calenme.vercel.app",
    github: "https://github.com/abdullahtahir-me/calenme",
    detail: "Ensured transactional integrity using custom PostgreSQL RPC functions for atomic operations.",
    tag: "Live App",
  },
  {
    title: "ProjectT",
    icon: Gamepad2,
    featured: false,
    description: "2D physics-based game with real-time destructible terrain and heightmap collision.",
    tech: ["Java", "libGDX", "Gradle"],
    link: null,
    github: "https://github.com/abdullahtahir-me/ProjectT",
    detail: "Engineered destructible terrain via pixel manipulation and custom collision detection.",
    tag: "Game Dev",
  },
  {
    title: "PingPong",
    icon: Gamepad2,
    featured: false,
    description: "Classic Pong rebuilt from scratch in C with full game loop and progressive difficulty.",
    tech: ["C", "Raylib"],
    link: null,
    github: "https://github.com/abdullahtahir-me/PingPong",
    detail: "Multiple screens, real-time collision, and state management purely in C.",
    tag: "Game Dev",
  },
  {
    title: "Emotis",
    icon: Smile,
    featured: false,
    description: "Real-time, PIN-based mood-sharing app synced across browser tabs via LocalStorage.",
    tech: ["React", "TypeScript", "Vite", "Tailwind"],
    link: null,
    github: "https://github.com/abdullahtahir-me/Emotis-Mood-Sharing",
    detail: "Backend-less real-time sync between browser tabs using the LocalStorage API.",
    tag: "Web App",
  },
  {
    title: "img2ascii",
    icon: ImageIcon,
    featured: false,
    description: "Java CLI tool converting images to ASCII art via per-pixel brightness mapping.",
    tech: ["Java"],
    link: null,
    github: "https://github.com/abdullahtahir-me/img2ascii",
    detail: "Grayscale conversion with a custom brightness-to-character scale. Zero dependencies.",
    tag: "CLI Tool",
  },
];

export const TAG_COLORS = {
  "Live App": "emerald",
  "Game Dev": "violet",
  "Web App": "sky",
  "CLI Tool": "amber",
};