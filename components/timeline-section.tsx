"use client";

import BlurFade from "@/components/ui/blur-fade";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const experiences = [
  {
    title: "Junior System Administrator",
    org: "PT. Jetorbit Indonesia",
    date: "May 2025 - Present",
    description: "Managing server infrastructure and ensuring uptime. Implementing automated backup solutions and monitoring systems.",
    logo: "/jetorbit.jpg",
  },
  {
    title: "Sistem Informasi Jaringan dan Aplikasi",
    org: "SMK Negeri 2 Yogyakarta",
    date: "2022 - Present",
    description: "Specializing in Linux administration, cloud networking, and infrastructure automation.",
    logo: "/smk2yk.jpeg",
  },
];

const certifications = [
  {
    title: "Belajar Jaringan Komputer untuk Pemula",
    issuer: "Dicoding Indonesia",
    link: "https://www.dicoding.com/certificates/1OP82K86LPQK",
    logo: "/dicoding.png",
  },
  {
    title: "Belajar Dasar-Dasar DevOps",
    issuer: "Dicoding Indonesia",
    link: "https://www.dicoding.com/certificates/1RXYE87VKZVM",
    logo: "/dicoding.png",
  },
  {
    title: "AI Praktis untuk Produktivitas",
    issuer: "Dicoding Indonesia",
    link: "https://www.dicoding.com/certificates/6RPNRMD78X2M",
    logo: "/dicoding.png",
  },
];

export function TimelineSection() {
  return (
    <section id="experience" className="container mx-auto py-24 md:py-32 max-w-5xl px-4">
      <div className="flex flex-col items-center justify-center gap-4 text-center mb-16">
        <BlurFade delay={0.2} inView>
          <div className="inline-block rounded-lg bg-neutral-100 px-3 py-1 text-sm dark:bg-neutral-800">
            Career & Education
          </div>
        </BlurFade>
        <BlurFade delay={0.3} inView>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            My Journey
          </h2>
        </BlurFade>
      </div>

      <div className="grid gap-16 md:grid-cols-2 lg:gap-24">
        {/* Experience Column */}
        <div>
          <BlurFade delay={0.4} inView>
            <h3 className="text-xl font-semibold mb-8 flex items-center gap-2">
              Experience
            </h3>
          </BlurFade>

          <div className="relative border-l border-neutral-200 dark:border-neutral-800 ml-3 space-y-12">
            {experiences.map((item, index) => (
              <BlurFade key={index} delay={0.4 + (index * 0.1)} inView>
                <div className="pl-8 relative">
                  <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border border-neutral-200 bg-white ring-4 ring-white dark:border-neutral-800 dark:bg-neutral-950 dark:ring-background transition-colors" />
                  
                  <div className="flex gap-4">
                    <Image 
                      src={item.logo} 
                      alt={item.org} 
                      width={80} 
                      height={48} 
                      className="h-12 w-auto rounded-lg object-contain shrink-0"
                    />
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider dark:text-neutral-400">{item.date}</span>
                      <h4 className="font-semibold text-lg text-neutral-900 dark:text-neutral-100">{item.title}</h4>
                      <p className="text-sm font-medium text-primary/80">{item.org}</p>
                      <p className="text-sm text-neutral-500 leading-relaxed dark:text-neutral-400 mt-1">{item.description}</p>
                    </div>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>

        {/* Certifications Column */}
        <div>
          <BlurFade delay={0.5} inView>
            <h3 className="text-xl font-semibold mb-8 flex items-center gap-2">
              Certifications
            </h3>
          </BlurFade>

          <div className="space-y-4">
            {certifications.map((cert, index) => (
             <BlurFade key={index} delay={0.5 + (index * 0.1)} inView>
                <Link 
                  href={cert.link} 
                  target="_blank"
                  className="group flex items-center gap-4 rounded-xl border border-neutral-200 bg-white p-5 transition-all hover:bg-neutral-50 hover:shadow-md dark:border-neutral-800 dark:bg-transparent dark:hover:bg-neutral-900"
                >
                  <Image 
                    src={cert.logo} 
                    alt={cert.issuer} 
                    width={40} 
                    height={40} 
                    className="rounded-lg object-cover shrink-0"
                  />
                  <div className="flex-1 flex flex-col gap-1">
                    <div className="flex items-center justify-between gap-4">
                      <h4 className="font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-primary transition-colors">
                        {cert.title}
                      </h4>
                      <ExternalLink className="w-4 h-4 text-neutral-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </div>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">{cert.issuer}</p>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
