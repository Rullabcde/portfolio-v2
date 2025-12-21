"use client";

import BlurFade from "@/components/ui/blur-fade";
import { ShinyButton } from "@/components/ui/shiny-button";
import { FaLinkedin, FaGithub, FaInstagram, FaMedium } from "react-icons/fa";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammad-choirul-rasyid/",
    icon: FaLinkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/Rullabcde",
    icon: FaGithub,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/rullabcd",
    icon: FaInstagram,
  },
  {
    name: "Medium",
    href: "https://medium.com/@muhammadchoirulrasyid",
    icon: FaMedium,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="container mx-auto py-24 md:py-32">
       <div className="flex flex-col items-center justify-center gap-6 text-center max-w-2xl mx-auto">
        <BlurFade delay={0.2} inView>
          <div className="inline-block rounded-lg bg-neutral-100 px-3 py-1 text-sm dark:bg-neutral-800">
            Contact
          </div>
        </BlurFade>
        
        <BlurFade delay={0.3} inView>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Get in Touch
          </h2>
        </BlurFade>
        
        <BlurFade delay={0.4} inView>
          <p className="text-neutral-500 md:text-xl/relaxed dark:text-neutral-400">
            Interested in working together or have a question? Feel free to reach out. I&apos;m always open to discussing new projects and opportunities.
          </p>
        </BlurFade>
        
        <BlurFade delay={0.5} inView>
          <ShinyButton className="bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-900" onClick={() => window.open('mailto:choirulrasyid09@gmail.com')}>
            Say Hello
          </ShinyButton>
        </BlurFade>

        <BlurFade delay={0.6} inView>
          <div className="flex items-center justify-center gap-4 mt-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 hover:text-neutral-900 dark:hover:text-neutral-100 transition-all duration-300 hover:scale-110"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </BlurFade>
       </div>
    </section>
  );
}
