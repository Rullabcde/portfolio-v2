"use client";

import { motion } from "framer-motion";
import { Home, User, Code, Mail, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { name: "Home", href: "#hero", icon: Home },
  { name: "Stack", href: "#tech-stack", icon: Code },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Projects", href: "#projects", icon: User },
  { name: "Contact", href: "#contact", icon: Mail },
];

export function Navbar() {
  const [activeHash, setActiveHash] = useState<string>(navItems[0].href);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Cache the elements once instead of querying the DOM on every scroll event.
    const sections = navItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => el !== null);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let current = navItems[0].href;

      for (const section of sections) {
        if (scrollPosition >= section.offsetTop) {
          current = `#${section.id}`;
        }
      }
      setActiveHash(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const element = document.querySelector<HTMLElement>(href);
    if (!element) return;
    e.preventDefault();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    element.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
    // Keep the URL shareable and let the browser handle focus, but skip the jump.
    window.history.replaceState(null, "", href);
    setActiveHash(href);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const links = Array.from(
      e.currentTarget.querySelectorAll<HTMLAnchorElement>("a[data-nav-item]")
    );
    const index = links.indexOf(document.activeElement as HTMLAnchorElement);
    if (index === -1) return;
    e.preventDefault();
    const next = e.key === "ArrowRight" ? index + 1 : index - 1;
    links[(next + links.length) % links.length]?.focus();
  }, []);

  return (
    <motion.nav
      aria-label="Primary navigation"
      onKeyDown={handleKeyDown}
      className="fixed bottom-6 left-0 right-0 z-50 mx-auto flex w-fit items-center justify-center gap-1 rounded-full border border-neutral-200 bg-white/80 p-2 shadow-lg backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/80"
      initial={{ y: 100, opacity: 0 }}
      animate={isVisible ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      {navItems.map((item, index) => {
        const isActive = activeHash === item.href;
        return (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              delay: 0.1 + index * 0.06,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
          >
            <Link
              href={item.href}
              data-nav-item
              onClick={(e) => handleClick(e, item.href)}
              aria-current={isActive ? "page" : undefined}
              aria-label={item.name}
              className={cn(
                "group relative flex items-center justify-center rounded-full px-3 py-2 text-sm font-medium transition-colors hover:bg-neutral-100 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:px-4 dark:hover:bg-neutral-800 dark:hover:text-white",
                isActive
                  ? "bg-neutral-100 text-black dark:bg-neutral-800 dark:text-white"
                  : "text-neutral-500 dark:text-neutral-400"
              )}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 12 }}
              >
                <item.icon className={cn("h-5 w-5 sm:mr-2", isActive && "text-primary")} />
              </motion.div>
              <span className="hidden sm:inline">{item.name}</span>
              {isActive && (
                <motion.span
                  aria-hidden="true"
                  className="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-linear-to-r from-transparent via-primary to-transparent"
                  layoutId="activeIndicator"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          </motion.div>
        );
      })}

      <span aria-hidden="true" className="mx-1 h-5 w-px bg-neutral-200 dark:bg-neutral-800" />
      <ThemeToggle />
    </motion.nav>
  );
}
