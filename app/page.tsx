import { HeroSection } from "@/components/hero-section";
// import { TechStack } from "@/components/tech-stack";
import { ProjectsSection } from "@/components/projects-section";
import { TimelineSection } from "@/components/timeline-section";
import { ContactSection } from "@/components/contact-section";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden selection:bg-[#FF1E56]/30 selection:text-white">
      <Navbar />
      <HeroSection />
      {/* <TechStack /> */}
      <ProjectsSection />
      <TimelineSection />
      <ContactSection />
    </main>
  );
}
