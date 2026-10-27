"use client";

import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

type Theme = "dark" | "light";

function currentTheme(): Theme {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
  try {
    localStorage.setItem("theme", theme);
  } catch {
    // Private mode: the choice simply will not persist across reloads.
  }
}

export function ThemeToggle({ className }: { className?: string }) {
  // No React state: the theme lives on <html>, which the inline script in the
  // layout sets before first paint. Reading it at click time avoids a
  // hydration mismatch and a setState-in-effect cascade.
  const toggle = () => {
    applyTheme(currentTheme() === "dark" ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      className={cn(
        "group relative flex h-9 w-9 items-center justify-center rounded-full text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white",
        className
      )}
    >
      <Moon
        aria-hidden="true"
        className="block h-[18px] w-[18px] dark:hidden"
      />
      <Sun
        aria-hidden="true"
        className="hidden h-[18px] w-[18px] dark:block"
      />
    </button>
  );
}
