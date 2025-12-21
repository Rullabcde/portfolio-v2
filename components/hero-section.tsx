"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import BlurFade from "@/components/ui/blur-fade";
import { ShinyButton } from "@/components/ui/shiny-button";

const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

const decorativeAnimation1 = {
  rotate: [6, 8, 6],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

const decorativeAnimation2 = {
  rotate: [-6, -8, -6],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

export function HeroSection() {
  return (
    <section id="hero" className="relative flex flex-col-reverse items-center justify-center min-h-[90vh] w-full px-4 pt-32 md:pt-40 lg:flex-row lg:justify-between lg:px-20 lg:pt-0 max-w-7xl mx-auto gap-12">
      
      {/* Content */}
      <div className="z-10 flex flex-col items-center gap-6 text-center lg:items-start lg:text-left lg:w-1/2">
        <BlurFade delay={0.2} inView>
          <motion.div 
            className="rounded-full border border-neutral-200 bg-white/50 px-4 py-1.5 text-sm font-medium text-neutral-800 backdrop-blur-md dark:border-neutral-800 dark:bg-black/50 dark:text-neutral-200"
            animate={{ 
              boxShadow: ["0 0 0 0 rgba(59, 130, 246, 0)", "0 0 0 8px rgba(59, 130, 246, 0.1)", "0 0 0 0 rgba(59, 130, 246, 0)"] 
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            Available for work
          </motion.div>
        </BlurFade>
        
        <BlurFade delay={0.3} inView>
          <h1 className="text-5xl font-bold tracking-tighter sm:text-7xl xl:text-8xl/none">
            Hi, I&apos;m <motion.span 
              className="text-primary inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >Choirul</motion.span>
          </h1>
        </BlurFade>
        
        <BlurFade delay={0.4} inView>
          <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
            System Administrator &amp; DevOps Enthusiast.<br/>
            Specializing in Linux, Cloud Infrastructure, and Automation.
          </p>
        </BlurFade>
        
        <BlurFade delay={0.5} inView>
          <ShinyButton className="bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-900" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            View Projects
          </ShinyButton>
        </BlurFade>
      </div>

      {/* Photo */}
      <div className="z-10 lg:w-1/2 flex justify-center lg:justify-end">
        <BlurFade delay={0.6} inView>
          <motion.div 
            className="relative h-[280px] w-[280px] sm:h-[320px] sm:w-[320px] lg:h-[400px] lg:w-[400px]"
            animate={floatingAnimation}
          >
            <motion.div 
              className="absolute inset-0 rounded-3xl bg-neutral-100 dark:bg-neutral-800/50" 
              animate={decorativeAnimation1}
            />
            <motion.div 
              className="absolute inset-0 rounded-3xl bg-neutral-200 dark:bg-neutral-800/50" 
              animate={decorativeAnimation2}
            />
            
            <motion.div 
              className="relative h-full w-full overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 shadow-2xl group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
               <Image
                 src="/me.jpeg"
                 alt="Choirul Rasyid"
                 fill
                 className="object-cover transition-transform duration-500 group-hover:scale-105"
                 priority
               />
               
               <div className="absolute inset-0 bg-linear-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          </motion.div>
        </BlurFade>
      </div>

      {/* Background effect */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center dark:bg-black bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </section>
  );
}
