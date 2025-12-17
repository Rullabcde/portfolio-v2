"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, ExternalLink, Calendar } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Junior System Administrator",
    org: "PT. Jetorbit Indonesia",
    date: "May 2025 - Present",
    description: "Managing server infrastructure and ensuring uptime.",
    icon: Briefcase,
  },
  {
    type: "education",
    title: "Sistem Informasi Jaringan dan Aplikasi",
    org: "SMK Negeri 2 Yogyakarta",
    date: "2022 - Present",
    description: "Linux administration, networking, and infrastructure automation.",
    icon: GraduationCap,
  },
];

const certifications = [
  {
    title: "Belajar Jaringan Komputer untuk Pemula",
    issuer: "Dicoding Indonesia",
    link: "https://www.dicoding.com/certificates/1OP82K86LPQK",
  },
  {
    title: "Belajar Dasar-Dasar DevOps",
    issuer: "Dicoding Indonesia",
    link: "https://www.dicoding.com/certificates/1RXYE87VKZVM",
  },
  {
    title: "AI Praktis untuk Produktivitas",
    issuer: "Dicoding Indonesia",
    link: "https://www.dicoding.com/certificates/6RPNRMD78X2M",
  },
];

export function TimelineSection() {
  return (
    <section id="experience" className="py-24 px-4 relative">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-30" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Journey & <span className="gradient-text-purple">Credentials</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Building expertise through continuous learning and real-world experience.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#FF1E56]/10 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-[#FF1E56]" />
              </div>
              <h3 className="text-xl font-semibold text-white">Experience</h3>
            </div>
            
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="feature-card p-6 group"
                >
                  <div className="flex items-start gap-4">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ 
                        backgroundColor: exp.type === 'work' ? 'rgba(255, 30, 86, 0.1)' : 'rgba(14, 165, 233, 0.1)',
                        color: exp.type === 'work' ? '#FF1E56' : '#0EA5E9'
                      }}
                    >
                      <exp.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
                        <Calendar className="w-3 h-3" />
                        {exp.date}
                      </div>
                      <h4 className="font-semibold text-white group-hover:text-[#FF1E56] transition-colors">
                        {exp.title}
                      </h4>
                      <p className="text-gray-400 text-sm">{exp.org}</p>
                      <p className="text-gray-500 text-sm mt-2">{exp.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#A855F7]/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-[#A855F7]" />
              </div>
              <h3 className="text-xl font-semibold text-white">Certifications</h3>
            </div>
            
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <motion.a
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="feature-card p-5 group flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#A855F7]/10 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-[#A855F7]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-white group-hover:text-[#A855F7] transition-colors truncate">
                      {cert.title}
                    </h4>
                    <p className="text-gray-500 text-sm">{cert.issuer}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-[#A855F7] transition-colors shrink-0 opacity-0 group-hover:opacity-100" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
