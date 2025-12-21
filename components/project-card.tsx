"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  href?: string;
  tags: string[];
  image?: string;
  className?: string;
}

export function ProjectCard({ title, description, href = "#", tags, image, className }: ProjectCardProps) {
  return (
    <Link href={href} className={cn("block group relative", className)}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative flex flex-col gap-4 rounded-2xl border border-neutral-200 bg-white p-5 transition-all duration-300 hover:border-neutral-300 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900/50 dark:hover:border-neutral-700"
      >
        {/* Header with title and arrow */}
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 line-clamp-2">
              {description}
            </p>
          </div>
          
          {/* Arrow icon */}
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-500 transition-all duration-300 group-hover:bg-primary group-hover:text-white dark:bg-neutral-800 dark:text-neutral-400">
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span 
              key={tag}
              className="inline-flex items-center rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Hover image preview - appears on hover */}
        {image && (
          <div className="absolute -right-4 -top-4 z-20 h-32 w-48 opacity-0 scale-90 origin-bottom-left transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-y-2 pointer-events-none">
            <div className="relative h-full w-full overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-2xl dark:border-neutral-700 dark:bg-neutral-800">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        )}
      </motion.div>
    </Link>
  );
}

