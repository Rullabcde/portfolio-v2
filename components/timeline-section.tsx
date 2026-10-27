"use client";

import BlurFade from "@/components/ui/blur-fade";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const experiences = [
  {
    title: "Junior System Administrator",
    org: "PT. Jetorbit Indonesia",
    date: "May 2025 - Feb 2026",
    description: "Managing server infrastructure and ensuring uptime. Implementing automated backup solutions and monitoring systems.",
    logo: "/jetorbit.jpg",
  },
  {
    title: "Sistem Informasi Jaringan dan Aplikasi",
    org: "SMK Negeri 2 Yogyakarta",
    date: "2022 - 2026",
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
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="container mx-auto max-w-5xl px-4 py-24 md:py-32"
    >
      <div className="mb-14 flex flex-col items-center justify-center gap-4 text-center">
        <BlurFade delay={0.2} inView>
          <div className="inline-block rounded-lg bg-neutral-100 px-3 py-1 text-sm dark:bg-neutral-800">
            Career &amp; Education
          </div>
        </BlurFade>
        <BlurFade delay={0.3} inView>
          <h2 id="experience-heading" className="text-3xl font-bold tracking-tighter sm:text-5xl">
            My Journey
          </h2>
        </BlurFade>
      </div>

      <div className="grid gap-16 md:grid-cols-2 lg:gap-20">
        {/* Experience Column */}
        <div>
          <BlurFade delay={0.4} inView>
            <h3 className="mb-8 text-sm font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
              Experience
            </h3>
          </BlurFade>

          <ol className="relative ml-3 space-y-10 border-l border-neutral-200 dark:border-neutral-800">
            {experiences.map((item, index) => (
              <li key={`${item.org}-${item.date}`}>
                <BlurFade delay={0.4 + index * 0.1} inView>
                  <div className="relative pl-8">
                    <span
                      aria-hidden="true"
                      className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border border-neutral-200 bg-white ring-4 ring-white transition-colors dark:border-neutral-800 dark:bg-neutral-950 dark:ring-background"
                    />

                    <div className="flex gap-4">
                      <Image
                        src={item.logo}
                        alt=""
                        width={80}
                        height={48}
                        sizes="80px"
                        className="h-12 w-auto shrink-0 rounded-lg bg-white object-contain"
                      />
                      <div className="flex flex-col gap-1">
                        <span className="text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                          {item.date}
                        </span>
                        <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                          {item.title}
                        </h4>
                        <p className="text-sm font-medium text-neutral-600 dark:text-neutral-300">
                          {item.org}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </BlurFade>
              </li>
            ))}
          </ol>
        </div>

        {/* Certifications Column */}
        <div>
          <BlurFade delay={0.5} inView>
            <h3 className="mb-8 text-sm font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
              Certifications
            </h3>
          </BlurFade>

          <ul className="space-y-3">
            {certifications.map((cert, index) => (
              <li key={cert.link}>
                <BlurFade delay={0.5 + index * 0.1} inView>
                  <Link
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-xl border border-neutral-200 bg-white p-4 transition-all hover:border-neutral-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:border-neutral-800 dark:bg-transparent dark:hover:border-neutral-700 dark:hover:bg-neutral-900"
                  >
                    <Image
                      src={cert.logo}
                      alt=""
                      width={40}
                      height={40}
                      sizes="40px"
                      className="shrink-0 rounded-lg object-cover"
                    />
                    <div className="flex flex-1 flex-col gap-0.5">
                      <div className="flex items-center justify-between gap-4">
                        <h4 className="font-medium text-neutral-900 transition-colors dark:text-neutral-100">
                          {cert.title}
                        </h4>
                        <ExternalLink
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 -translate-x-1 text-neutral-400 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
                        />
                      </div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">
                        {cert.issuer}
                      </p>
                    </div>
                  </Link>
                </BlurFade>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
