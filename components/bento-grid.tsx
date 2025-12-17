"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div className={cn(
      "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto p-4",
      className
    )}>
      {children}
    </div>
  );
}

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  colSpan?: 1 | 2 | 3;
  rowSpan?: 1 | 2;
  variant?: "default" | "terminal" | "gradient" | "neon";
}

export function BentoCard({ 
  children, 
  className, 
  colSpan = 1, 
  rowSpan = 1,
  variant = "default"
}: BentoCardProps) {
  const colSpanClasses = {
    1: "md:col-span-1",
    2: "md:col-span-2",
    3: "md:col-span-3"
  };
  
  const rowSpanClasses = {
    1: "row-span-1",
    2: "row-span-2"
  };

  const variantClasses = {
    default: "bg-[#0a0a0a] border-white/5 hover:border-white/10",
    terminal: "bg-[#0a0a0a] border-[#00ffff]/20 hover:border-[#00ffff]/40 font-mono",
    gradient: "bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#0a0a0a] border-white/5",
    neon: "bg-[#0a0a0a] border-[#00ffff]/30 hover:shadow-[0_0_30px_rgba(0,255,255,0.1)]"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "relative overflow-hidden rounded-2xl border p-6 transition-all duration-500",
        colSpanClasses[colSpan],
        rowSpanClasses[rowSpan],
        variantClasses[variant],
        className
      )}
    >
      {children}
    </motion.div>
  );
}
