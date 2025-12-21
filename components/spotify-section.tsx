"use client";

import { motion } from "framer-motion";
import BlurFade from "@/components/ui/blur-fade";
import { Music } from "lucide-react";

export function SpotifySection() {
  return (
    <section className="container mx-auto py-12 px-4 max-w-2xl">
      <BlurFade delay={0.2} inView>
        <motion.div 
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400">
            <Music className="h-4 w-4" />
            <span className="text-sm font-medium">Currently Vibing To</span>
            <span className="inline-block h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          </div>
          
          <motion.div 
            className="w-full max-w-[400px]"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <iframe 
              style={{ borderRadius: 12 }}
              src="https://open.spotify.com/embed/track/0I3I9hgBRat6HR5Gzy26jx?utm_source=generator&theme=0" 
              width="100%" 
              height="152" 
              frameBorder="0" 
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              className="shadow-lg"
            />
          </motion.div>
        </motion.div>
      </BlurFade>
    </section>
  );
}
