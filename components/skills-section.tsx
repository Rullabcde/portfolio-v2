"use client";

import BlurFade from "@/components/ui/blur-fade";
import Marquee from "@/components/ui/marquee";

const skills = [
  "Linux",
  "Docker", 
  "Kubernetes",
  "CI/CD",
  "IaC",
  "Monitoring",
  "Cloud",
];

const firstRow = skills.slice(0, Math.ceil(skills.length / 2));
const secondRow = skills.slice(Math.ceil(skills.length / 2));

function SkillItem({ name }: { name: string }) {
  return (
    <span className="text-2xl md:text-3xl font-medium text-neutral-400 dark:text-neutral-500 whitespace-nowrap px-4 transition-colors duration-300 hover:text-neutral-900 dark:hover:text-neutral-100">
      {name}
    </span>
  );
}



export function SkillsSection() {
  return (
    <section id="tech-stack" className="py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="flex flex-col items-center justify-center gap-4 text-center mb-12">
          <BlurFade delay={0.2} inView>
            <div className="inline-block rounded-lg bg-neutral-100 px-3 py-1 text-sm dark:bg-neutral-800">
              Tech Stack
            </div>
          </BlurFade>
          <BlurFade delay={0.3} inView>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Skills & Technologies
            </h2>
          </BlurFade>
          <BlurFade delay={0.4} inView>
            <p className="max-w-[600px] text-neutral-500 md:text-xl/relaxed dark:text-neutral-400">
              Tools and technologies I use for infrastructure, automation, and DevOps.
            </p>
          </BlurFade>
        </div>
      </div>

      {/* Marquee container - full width */}
      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-linear-to-r from-white to-transparent dark:from-neutral-950 z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-linear-to-l from-white to-transparent dark:from-neutral-950 z-10" />
        
        <div className="flex flex-col gap-6">
          <Marquee className="[--duration:25s]">
            {firstRow.map((skill) => (
              <SkillItem key={skill} name={skill} />
            ))}
          </Marquee>
          
          <Marquee reverse className="[--duration:25s]">
            {secondRow.map((skill) => (
              <SkillItem key={skill} name={skill} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

