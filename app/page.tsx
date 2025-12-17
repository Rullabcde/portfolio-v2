import dynamic from "next/dynamic";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";

// Lazy load below-fold components to reduce initial JS bundle
const ProjectsSection = dynamic(
  () => import("@/components/projects-section").then((m) => ({ default: m.ProjectsSection })),
  { ssr: true }
);
const TimelineSection = dynamic(
  () => import("@/components/timeline-section").then((m) => ({ default: m.TimelineSection })),
  { ssr: true }
);
const ContactSection = dynamic(
  () => import("@/components/contact-section").then((m) => ({ default: m.ContactSection })),
  { ssr: true }
);

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
