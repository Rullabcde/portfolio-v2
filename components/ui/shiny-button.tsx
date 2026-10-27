"use client";

import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

const animationProps = {
  initial: { "--x": "100%", scale: 0.8 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
} as HTMLMotionProps<"button">;

// --primary is an oklch() token, so `hsl(var(--primary))` would be invalid CSS.
// color-mix() accepts whatever color space the token is defined in.
const primaryAt = (percent: number) =>
  `color-mix(in oklab, var(--primary) ${percent}%, transparent)`;

interface ShinyButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const ShinyButton = ({ children, className, onClick }: ShinyButtonProps) => {
  return (
    <motion.button
      {...animationProps}
      onClick={onClick}
      className={cn(
        "relative rounded-lg px-6 py-2 font-medium backdrop-blur-xl transition-shadow duration-300 ease-in-out hover:shadow",
        className
      )}
      style={{
        backgroundImage: `radial-gradient(circle at 50% 0%, ${primaryAt(10)} 0%, transparent 60%)`,
      }}
    >
      <span
        className="relative block h-full w-full text-sm uppercase tracking-wide text-[rgb(0,0,0,65%)] dark:text-[rgb(255,255,255,90%)]"
        style={{
          maskImage: `linear-gradient(-75deg, var(--primary) calc(var(--x) + 20%), transparent calc(var(--x) + 30%), var(--primary) calc(var(--x) + 100%))`,
        }}
      >
        {children}
      </span>
      <span
        aria-hidden="true"
        style={{
          mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          maskComposite: "exclude",
          backgroundImage: `linear-gradient(-75deg, ${primaryAt(10)} calc(var(--x) + 20%), ${primaryAt(50)} calc(var(--x) + 25%), ${primaryAt(10)} calc(var(--x) + 100%))`,
        }}
        className="absolute inset-0 z-10 block rounded-[inherit] p-px"
      ></span>
    </motion.button>
  );
};
