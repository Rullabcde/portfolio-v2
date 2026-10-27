"use client";

import { ArrowUpRight } from "lucide-react";
import BlurFade from "@/components/ui/blur-fade";
import { ProjectCard } from "@/components/project-card";

const GITHUB_URL = "https://github.com/Rullabcde";

const PROJECTS = [
  {
    title: "DevSecOps CI/CD Pipeline",
    description: "A fully automated, end-to-end CI/CD and GitOps pipeline. This architecture automates the entire workflow from a developer's git push to the application running live in a Kubernetes cluster, embedding security and quality checks at every step.",
    tags: ["DevOps", "CI/CD", "Kubernetes", "GitOps"],
    href: "https://www.linkedin.com/posts/muhammad-choirul-rasyid_devops-ci-cd-activity-7385197044803592192-sZ1n",
    image: "/devsecops.jpeg",
  },
  {
    title: "HA Kubernetes Cluster",
    description: "A High-Availability Kubernetes cluster built from the ground up on AWS. By distributing the control plane across three master nodes and decoupling the datastore, the cluster can withstand node failures without impacting operations.",
    tags: ["Kubernetes", "AWS", "K3s", "High Availability"],
    href: "https://www.linkedin.com/posts/muhammad-choirul-rasyid_kubernetes-highavailability-k3s-activity-7371788734272307201-OLq9",
    image: "/hacluster.jpeg",
  },
  {
    title: "UptimeID",
    description: "Real-time monitoring and observability platform for infrastructure and applications. Provides comprehensive insights into system performance and health.",
    tags: ["Next.js", "PostgreSQL", "Clickhouse", "Golang"],
    href: "https://uptime.id/",
    image: "/uptimeid.png",
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="container mx-auto px-4 py-24 md:px-6 lg:py-32"
    >
      <div className="mb-14 flex flex-col items-center justify-center gap-4 text-center">
        <BlurFade delay={0.2} inView>
          <div className="inline-block rounded-lg bg-neutral-100 px-3 py-1 text-sm dark:bg-neutral-800">
            My Work
          </div>
        </BlurFade>
        <BlurFade delay={0.3} inView>
          <h2 id="projects-heading" className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Selected Projects
          </h2>
        </BlurFade>
        <BlurFade delay={0.4} inView>
          <p className="max-w-[600px] text-neutral-500 md:text-lg/relaxed dark:text-neutral-400">
            A collection of projects I&apos;ve worked on, ranging from web apps to
            infrastructure.
          </p>
        </BlurFade>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <BlurFade key={project.title} delay={0.4 + index * 0.1} inView>
            <ProjectCard {...project} />
          </BlurFade>
        ))}
      </div>

      <BlurFade delay={0.7} inView>
        <div className="mt-10 flex justify-center">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-neutral-200 px-5 py-2.5 text-sm font-medium text-neutral-700 transition-colors hover:border-neutral-300 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:border-neutral-800 dark:text-neutral-300 dark:hover:border-neutral-700 dark:hover:bg-neutral-900"
          >
            More projects on GitHub
            <ArrowUpRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </BlurFade>
    </section>
  );
}
