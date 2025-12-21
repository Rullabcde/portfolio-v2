import { HeroSection } from "@/components/hero-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { TimelineSection } from "@/components/timeline-section";
import { ContactSection } from "@/components/contact-section";
import { SpotifySection } from "@/components/spotify-section";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="flex flex-col gap-16 pb-20">
        <HeroSection />
        <SkillsSection />
        <TimelineSection />
        <ProjectsSection />
        <ContactSection />
        <SpotifySection />
      </div>
      <Navbar />
    </main>
  );
}
