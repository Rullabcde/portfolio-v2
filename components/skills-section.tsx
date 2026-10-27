"use client";

import type { ComponentType } from "react";
import {
  SiAmazonwebservices,
  SiAnsible,
  SiClickhouse,
  SiCloudflare,
  SiDocker,
  SiGit,
  SiGithubactions,
  SiGitlab,
  SiGo,
  SiGrafana,
  SiGnubash,
  SiHelm,
  SiKubernetes,
  SiLinux,
  SiNextdotjs,
  SiNginx,
  SiPostgresql,
  SiPrometheus,
  SiPython,
  SiTerraform,
  SiUbuntu,
} from "react-icons/si";
import { Activity, Boxes, Cloud, Code2, Server, Workflow } from "lucide-react";
import BlurFade from "@/components/ui/blur-fade";

type IconComponent = ComponentType<{ className?: string }>;

interface Skill {
  name: string;
  icon: IconComponent;
}

interface SkillGroup {
  title: string;
  icon: IconComponent;
  description: string;
  skills: Skill[];
}

const skillGroups: SkillGroup[] = [
  {
    title: "Systems & Servers",
    icon: Server,
    description: "Day-to-day Linux administration and web serving.",
    skills: [
      { name: "Linux", icon: SiLinux },
      { name: "Ubuntu", icon: SiUbuntu },
      { name: "Nginx", icon: SiNginx },
      { name: "Bash", icon: SiGnubash },
    ],
  },
  {
    title: "Containers & Orchestration",
    icon: Boxes,
    description: "Packaging, scheduling, and running workloads.",
    skills: [
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Helm", icon: SiHelm },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    description: "Provisioning and managing infrastructure as code.",
    skills: [
      { name: "AWS", icon: SiAmazonwebservices },
      { name: "Terraform", icon: SiTerraform },
      { name: "Ansible", icon: SiAnsible },
      { name: "Cloudflare", icon: SiCloudflare },
    ],
  },
  {
    title: "CI/CD & Automation",
    icon: Workflow,
    description: "Pipelines from commit to production, with checks.",
    skills: [
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "GitLab CI", icon: SiGitlab },
      { name: "Git", icon: SiGit },
    ],
  },
  {
    title: "Observability",
    icon: Activity,
    description: "Knowing what the system is doing before it breaks.",
    skills: [
      { name: "Grafana", icon: SiGrafana },
      { name: "Prometheus", icon: SiPrometheus },
    ],
  },
  {
    title: "Development",
    icon: Code2,
    description: "The application side of the stack, when needed.",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "Go", icon: SiGo },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "ClickHouse", icon: SiClickhouse },
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="tech-stack" aria-labelledby="tech-stack-heading" className="py-24 md:py-32">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="flex flex-col items-center justify-center gap-4 text-center mb-14">
          <BlurFade delay={0.2} inView>
            <div className="inline-block rounded-lg bg-neutral-100 px-3 py-1 text-sm dark:bg-neutral-800">
              Tech Stack
            </div>
          </BlurFade>
          <BlurFade delay={0.3} inView>
            <h2 id="tech-stack-heading" className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Skills &amp; Technologies
            </h2>
          </BlurFade>
          <BlurFade delay={0.4} inView>
            <p className="max-w-[600px] text-neutral-500 md:text-lg/relaxed dark:text-neutral-400">
              Tools and technologies I use for infrastructure, automation, and DevOps.
            </p>
          </BlurFade>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <BlurFade key={group.title} delay={0.35 + index * 0.06} inView>
              <article className="group h-full rounded-2xl border border-neutral-200 bg-white p-5 transition-colors duration-300 hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900/40 dark:hover:border-neutral-700">
                <div className="mb-4 flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-neutral-600 transition-colors duration-300 group-hover:bg-neutral-900 group-hover:text-white dark:bg-neutral-800 dark:text-neutral-300 dark:group-hover:bg-neutral-100 dark:group-hover:text-neutral-900">
                    <group.icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                      {group.title}
                    </h3>
                    <p className="mt-0.5 text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
                      {group.description}
                    </p>
                  </div>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-xs font-medium text-neutral-700 transition-colors duration-200 hover:border-neutral-300 hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-neutral-700 dark:hover:bg-neutral-800"
                    >
                      <skill.icon className="h-3.5 w-3.5 shrink-0" />
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </article>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
