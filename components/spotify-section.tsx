"use client";

import { motion } from "framer-motion";
import BlurFade from "@/components/ui/blur-fade";
import { Music } from "lucide-react";

export function SpotifySection() {
  return (
    <section
      aria-labelledby="spotify-heading"
      className="container mx-auto max-w-2xl px-4 py-12"
    >
      <BlurFade delay={0.2} inView>
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400">
            <Music aria-hidden="true" className="h-4 w-4" />
            <h2 id="spotify-heading" className="text-sm font-medium">
              Currently Vibing To
            </h2>
          </div>

          <motion.div
            className="w-full max-w-[400px]"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <iframe
              title="Spotify track currently playing"
              style={{ borderRadius: 12 }}
              src="https://open.spotify.com/embed/track/0I3I9hgBRat6HR5Gzy26jx?utm_source=generator&theme=0"
              width="100%"
              height="152"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="border-0 shadow-lg"
            />
          </motion.div>
        </motion.div>
      </BlurFade>
    </section>
  );
}
