"use client";

import { useState } from "react";
import BlurFade from "@/components/ui/blur-fade";
import { ShinyButton } from "@/components/ui/shiny-button";
import { FaLinkedin, FaGithub, FaInstagram, FaMedium } from "react-icons/fa";
import { Copy, Check } from "lucide-react";

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

const EMAIL = "choirulrasyid09@gmail.com";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="container mx-auto px-4 py-24 md:py-32"
    >
       <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-6 text-center">
        <BlurFade delay={0.2} inView>
          <div className="inline-block rounded-lg bg-neutral-100 px-3 py-1 text-sm dark:bg-neutral-800">
            Contact
          </div>
        </BlurFade>
        
        <BlurFade delay={0.3} inView>
          <h2 id="contact-heading" className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Get in Touch
          </h2>
        </BlurFade>
        
        <BlurFade delay={0.4} inView>
          <p className="text-neutral-500 md:text-xl/relaxed dark:text-neutral-400">
            Interested in working together or have a question? Feel free to reach out. I&apos;m always open to discussing new projects and opportunities.
          </p>
        </BlurFade>
        
        <BlurFade delay={0.5} inView>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <ShinyButton className="bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-900" onClick={() => window.open(`mailto:${EMAIL}`)}>
              Say Hello
            </ShinyButton>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white/60 px-4 py-2 text-sm font-medium text-neutral-700 backdrop-blur-md transition-all hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-200 dark:hover:bg-neutral-800"
            >
              {copied ? (
                <Check aria-hidden="true" className="h-4 w-4 text-green-500" />
              ) : (
                <Copy aria-hidden="true" className="h-4 w-4" />
              )}
              <span aria-live="polite">{copied ? "Copied" : "Copy email"}</span>
            </button>
          </div>
        </BlurFade>

        <BlurFade delay={0.6} inView>
          <div className="mt-4 flex items-center justify-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${social.name} (opens in a new tab)`}
                className="rounded-full bg-neutral-100 p-3 text-neutral-600 transition-all duration-300 hover:scale-110 hover:bg-neutral-200 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-100"
              >
                <social.icon aria-hidden="true" className="h-5 w-5" />
              </a>
            ))}
          </div>
        </BlurFade>
       </div>
    </section>
  );
}
