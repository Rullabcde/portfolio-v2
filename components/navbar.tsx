"use client";

import { motion } from "framer-motion";
import { Home, User, Code, Mail, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero", icon: Home },
  { name: "Stack", href: "#tech-stack", icon: Code },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Projects", href: "#projects", icon: User },
  { name: "Contact", href: "#contact", icon: Mail },
];

export function Navbar() {
  const [activeHash, setActiveHash] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.querySelector(item.href));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        if (section && section instanceof HTMLElement) {
           const top = section.offsetTop;
           const height = section.offsetHeight;
           if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveHash(`#${section.id}`);
              break;
           }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveHash(href);
    }
  };

  return (
    <motion.div 
      className="fixed bottom-6 left-0 right-0 z-50 mx-auto flex w-fit items-center justify-center gap-1 rounded-full border border-neutral-200 bg-white/80 p-2 shadow-lg backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/80"
      initial={{ y: 100, opacity: 0 }}
      animate={isVisible ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 100, 
        damping: 20,
        delay: 0.2 
      }}
    >
      {navItems.map((item, index) => {
        const isActive = activeHash === item.href;
        return (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ 
              delay: 0.4 + index * 0.1,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
          >
            <Link
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={cn(
                "group relative flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-neutral-100 hover:text-black dark:hover:bg-neutral-800 dark:hover:text-white",
                isActive ? "bg-neutral-100 text-black dark:bg-neutral-800 dark:text-white" : "text-neutral-500 dark:text-neutral-400"
              )}
            >
               <motion.div
                 whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                 whileTap={{ scale: 0.9 }}
                 transition={{ type: "spring", stiffness: 400, damping: 10 }}
               >
                 <item.icon className={cn("h-5 w-5 sm:mr-2", isActive && "text-primary")} />
               </motion.div>
               <span className="hidden sm:inline">{item.name}</span>
               {isActive && (
                  <motion.span 
                    className="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-linear-to-r from-transparent via-primary to-transparent"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
               )}
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
