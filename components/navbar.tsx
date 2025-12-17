"use client";

import { Home, User, FolderGit2, Briefcase, Mail } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const navItems = [
    { name: "Home", href: "#", icon: Home },
    { name: "Skills", href: "#skills", icon: User },
    { name: "Projects", href: "#projects", icon: FolderGit2 },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: Mail },
];

export function Navbar() {
  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <TooltipProvider delayDuration={0}>
            <div className="flex items-center gap-1 p-2 rounded-full border border-white/10 bg-black/80 backdrop-blur-xl shadow-2xl">
                {navItems.map((item) => (
                    <Tooltip key={item.name}>
                        <TooltipTrigger asChild>
                            <a 
                                href={item.href}
                                className="p-3 rounded-full text-gray-400 hover:text-[#FF1E56] hover:bg-[#FF1E56]/10 transition-all duration-300"
                            >
                                <item.icon className="w-5 h-5" />
                                <span className="sr-only">{item.name}</span>
                            </a>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="bg-[#111] border-white/10 text-white">
                            <p className="text-xs font-medium">{item.name}</p>
                        </TooltipContent>
                    </Tooltip>
                ))}
            </div>
        </TooltipProvider>
    </nav>
  );
}
