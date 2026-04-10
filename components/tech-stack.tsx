"use client";

import {
  Monitor,
  Server,
  Database,
  Cloud,
  Smartphone,
  Wrench,
  Bot,
  Pen,
  ClipboardList,
  Package,
} from "lucide-react";
import type { ReactNode } from "react";

type Tech = {
  name: string;
  logo: string;
  color: string;
  darkInvert?: boolean;
};

type Category = {
  title: string;
  icon: ReactNode;
  technologies: Tech[];
};

const techCategories: Category[] = [
  {
    title: "Frontend",
    icon: <Monitor className="w-6 h-6" />,
    technologies: [
      { name: "React", logo: "/tech logo/react.svg", color: "#61DAFB" },
      {
        name: "Next.js",
        logo: "/tech logo/nextdotjs.svg",
        color: "#888888",
        darkInvert: true,
      },
      { name: "Vue.js", logo: "/tech logo/vuedotjs.svg", color: "#4FC08D" },
      {
        name: "TypeScript",
        logo: "/tech logo/typescript.svg",
        color: "#3178C6",
      },
      {
        name: "JavaScript",
        logo: "/tech logo/javascript.svg",
        color: "#F7DF1E",
      },
      {
        name: "Tailwind CSS",
        logo: "/tech logo/tailwindcss.svg",
        color: "#06B6D4",
      },
      {
        name: "React Router",
        logo: "/tech logo/reactrouter.svg",
        color: "#CA4245",
      },
      {
        name: "React Query",
        logo: "/tech logo/reactquery.svg",
        color: "#FF4154",
      },
      {
        name: "React Hook Form",
        logo: "/tech logo/reacthookform.svg",
        color: "#EC5990",
      },
      {
        name: "React Table",
        logo: "/tech logo/reacttable.svg",
        color: "#FF4154",
      },
      { name: "TanStack", logo: "/tech logo/tanstack.svg", color: "#FF4154" },
    ],
  },
  {
    title: "Backend",
    icon: <Server className="w-6 h-6" />,
    technologies: [
      { name: "Node.js", logo: "/tech logo/nodedotjs.svg", color: "#339933" },
      {
        name: "Express",
        logo: "/tech logo/express.svg",
        color: "#888888",
        darkInvert: true,
      },
      { name: "NestJS", logo: "/tech logo/nestjs.svg", color: "#E0234E" },
      { name: "Laravel", logo: "/tech logo/laravel.svg", color: "#FF2D20" },
      { name: "Python", logo: "/tech logo/python.svg", color: "#3776AB" },
      { name: "PHP", logo: "/tech logo/php.svg", color: "#777BB4" },
      { name: "Go", logo: "/tech logo/go.svg", color: "#00ADD8" },
      { name: "Bun", logo: "/tech logo/bun.svg", color: "#FBF0DF" },
      { name: "Hono", logo: "/tech logo/hono.svg", color: "#FF5B11" },
      { name: "Drizzle", logo: "/tech logo/drizzle.svg", color: "#C5F74F" },
      { name: "Prisma", logo: "/tech logo/prisma.svg", color: "#5A67D8" },
    ],
  },
  {
    title: "Mobile",
    icon: <Smartphone className="w-6 h-6" />,
    technologies: [
      { name: "Flutter", logo: "/tech logo/flutter.svg", color: "#02569B" },
      { name: "Kotlin", logo: "/tech logo/kotlin.svg", color: "#7F52FF" },
    ],
  },
  {
    title: "Database",
    icon: <Database className="w-6 h-6" />,
    technologies: [
      {
        name: "PostgreSQL",
        logo: "/tech logo/postgresql.svg",
        color: "#4169E1",
      },
      { name: "MySQL", logo: "/tech logo/mysql.svg", color: "#4479A1" },
      { name: "MongoDB", logo: "/tech logo/mongodb.svg", color: "#47A248" },
      { name: "Supabase", logo: "/tech logo/supabase.svg", color: "#3ECF8E" },
      { name: "DBeaver", logo: "/tech logo/dbeaver.svg", color: "#382C77" },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-6 h-6" />,
    technologies: [
      { name: "Docker", logo: "/tech logo/docker.svg", color: "#2496ED" },
      {
        name: "Kubernetes",
        logo: "/tech logo/kubernetes.svg",
        color: "#326CE5",
      },
      {
        name: "Google Cloud",
        logo: "/tech logo/googlecloud.svg",
        color: "#4285F4",
      },
      {
        name: "Vercel",
        logo: "/tech logo/vercel.svg",
        color: "#888888",
        darkInvert: true,
      },
      {
        name: "GitHub",
        logo: "/tech logo/github.svg",
        color: "#888888",
        darkInvert: true,
      },
      { name: "GitLab", logo: "/tech logo/gitlab.svg", color: "#FC6D26" },
    ],
  },
  {
    title: "Alat AI",
    icon: <Bot className="w-6 h-6" />,
    technologies: [
      { name: "Claude", logo: "/tech logo/claude.svg", color: "#CC9B7A" },
      { name: "Gemini", logo: "/tech logo/googlegemini.svg", color: "#4285F4" },
      {
        name: "OpenRouter",
        logo: "/tech logo/openrouter.svg",
        color: "#6366F1",
      },
      {
        name: "GitHub Copilot",
        logo: "/tech logo/githubcopilot.svg",
        color: "#6E40C9",
      },
      {
        name: "Cursor",
        logo: "/tech logo/cursor.svg",
        color: "#888888",
        darkInvert: true,
      },
      {
        name: "v0",
        logo: "/tech logo/v0.svg",
        color: "#888888",
        darkInvert: true,
      },
    ],
  },
  {
    title: "UI/UX",
    icon: <Pen className="w-6 h-6" />,
    technologies: [
      { name: "Figma", logo: "/tech logo/figma.svg", color: "#F24E1E" },
      { name: "CorelDraw", logo: "/tech logo/coreldraw.svg", color: "#1A9B4B" },
      { name: "Miro", logo: "/tech logo/miro.svg", color: "#FFD02F" },
    ],
  },
  {
    title: "Manajemen Tugas",
    icon: <ClipboardList className="w-6 h-6" />,
    technologies: [
      { name: "Git", logo: "/tech logo/git.svg", color: "#F05032" },
      { name: "Jira", logo: "/tech logo/jira.svg", color: "#0052CC" },
      {
        name: "Notion",
        logo: "/tech logo/notion.svg",
        color: "#888888",
        darkInvert: true,
      },
    ],
  },
  {
    title: "Manajer Paket",
    icon: <Package className="w-6 h-6" />,
    technologies: [
      { name: "npm", logo: "/tech logo/npm.svg", color: "#CB3837" },
      { name: "pnpm", logo: "/tech logo/pnpm.svg", color: "#F69220" },
      { name: "Bun", logo: "/tech logo/bun.svg", color: "#FBF0DF" },
    ],
  },
];

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="relative py-20 sm:py-32 overflow-hidden"
      aria-labelledby="tech-stack-heading"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-1000">
          <h2
            id="tech-stack-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 tracking-tight"
          >
            Teknologi yang Kami Gunakan
          </h2>
          <div
            className="w-20 h-1 bg-primary mx-auto mb-6"
            aria-hidden="true"
          />
          <p className="text-lg font-body text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Kami memanfaatkan teknologi terdepan dan tools berstandar industri
            untuk membangun solusi yang skalabel, aman, dan berkinerja tinggi.
          </p>
        </div>

        {/* Category Sections */}
        <div className="space-y-14">
          {techCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="animate-in fade-in slide-in-from-bottom duration-1000"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              {/* Category Title */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl dark:bg-primary/20 bg-primary/10 flex items-center justify-center text-primary">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Tech Bubbles */}
              <div className="flex flex-wrap gap-6">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex flex-col items-center gap-2 cursor-pointer group"
                    style={{
                      animation: `bobbing ${2 + (techIndex % 6) * 0.25}s ease-in-out infinite`,
                      animationDelay: `${techIndex * 0.15}s`,
                    }}
                  >
                    {/* Logo Circle */}
                    <div
                      className="w-20 h-20 rounded-full dark:bg-[#1a3a5c]/60 bg-white flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1"
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLDivElement).style.boxShadow =
                          `0 8px 30px ${tech.color}55, 0 0 0 2px ${tech.color}40`;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLDivElement).style.boxShadow =
                          "";
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: tech.color,
                          WebkitMaskImage: `url(${encodeURI(tech.logo)})`,
                          maskImage: `url(${encodeURI(tech.logo)})`,
                          WebkitMaskSize: "contain",
                          maskSize: "contain",
                          WebkitMaskRepeat: "no-repeat",
                          maskRepeat: "no-repeat",
                          WebkitMaskPosition: "center",
                          maskPosition: "center",
                          width: 44,
                          height: 44,
                          flexShrink: 0,
                        }}
                        role="img"
                        aria-label={tech.name}
                      />
                    </div>

                    {/* Name */}
                    <span className="text-xs font-body text-muted-foreground text-center leading-tight max-w-20 group-hover:text-foreground transition-colors duration-200">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes bobbing {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </section>
  );
}
