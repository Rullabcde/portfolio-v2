"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Mail } from "lucide-react";
import BlurFade from "@/components/ui/blur-fade";
import { ShinyButton } from "@/components/ui/shiny-button";

const GITHUB_URL = "https://github.com/Rullabcde";
const EMAIL = "choirulrasyid09@gmail.com";

const focusAreas = ["Linux", "Kubernetes", "CI/CD", "AWS"];

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
}

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative mx-auto flex min-h-[80vh] w-full max-w-3xl flex-col items-center justify-center gap-6 px-4 pt-32 pb-16 text-center md:pt-40"
    >
      <BlurFade delay={0.2} inView>
        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/50 px-4 py-1.5 text-sm font-medium text-neutral-800 backdrop-blur-md dark:border-neutral-800 dark:bg-black/50 dark:text-neutral-200">
          <span aria-hidden="true" className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60 motion-reduce:animate-none" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          Available for work
        </div>
      </BlurFade>

      <BlurFade delay={0.3} inView>
        <h1
          id="hero-heading"
          className="text-5xl font-bold tracking-tighter sm:text-7xl xl:text-8xl/none"
        >
          Hi, I&apos;m{" "}
          <motion.span
            className="text-primary inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Choirul
          </motion.span>
        </h1>
      </BlurFade>

      <BlurFade delay={0.4} inView>
        <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
          System Administrator &amp; DevOps Enthusiast.
          <br className="hidden sm:block" /> Specializing in Linux, Cloud
          Infrastructure, and Automation.
        </p>
      </BlurFade>

      <BlurFade delay={0.45} inView>
        <ul className="flex flex-wrap justify-center gap-2">
          {focusAreas.map((area) => (
            <li
              key={area}
              className="rounded-full border border-neutral-200 px-3 py-1 text-xs font-medium text-neutral-600 dark:border-neutral-800 dark:text-neutral-400"
            >
              {area}
            </li>
          ))}
        </ul>
      </BlurFade>

      <BlurFade delay={0.5} inView>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <ShinyButton
            className="bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-900"
            onClick={() => scrollToId("projects")}
          >
            View Projects
          </ShinyButton>

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900 dark:hover:text-white"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            GitHub
          </a>

          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 rounded-lg border border-transparent px-4 py-2 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:text-neutral-400 dark:hover:text-white"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Email me
          </a>
        </div>
      </BlurFade>

      {/* Scroll hint */}
      <motion.button
        type="button"
        onClick={() => scrollToId("tech-stack")}
        aria-label="Scroll to tech stack"
        className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 text-neutral-400 transition-colors hover:text-neutral-700 lg:flex dark:hover:text-neutral-200"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="h-5 w-5" aria-hidden="true" />
      </motion.button>
    </section>
  );
}
