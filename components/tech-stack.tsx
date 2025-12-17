"use client";

import { motion } from "framer-motion";
import { Server, Cloud, Container, Network, Shield, Terminal, Cpu, Database } from "lucide-react";

const features = [
  {
    icon: Server,
    title: "Linux Systems",
    description: "Expert in Linux administration, system optimization, and server management",
  },
  {
    icon: Container,
    title: "Containerization",
    description: "Docker & Kubernetes orchestration for scalable applications",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "AWS, Proxmox VE, and hybrid cloud solutions",
  },
  {
    icon: Network,
    title: "Networking",
    description: "DNS, SSL/TLS, Nginx, HAProxy, and network security",
  },
  {
    icon: Terminal,
    title: "Automation",
    description: "Ansible, Shell scripting, and CI/CD pipelines",
  },
  {
    icon: Shield,
    title: "Security",
    description: "Infrastructure hardening and security best practices",
  },
];

const tools = [
  { name: "Linux", icon: Terminal },
  { name: "Docker", icon: Container },
  { name: "K8s", icon: Cpu },
  { name: "AWS", icon: Cloud },
  { name: "Nginx", icon: Server },
  { name: "MySQL", icon: Database },
];

export function TechStack() {
  return (
    <section id="skills" className="py-24 px-4 relative">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Technical <span className="text-[#FF1E56]">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Building reliable systems with modern DevOps practices and proven technologies.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl border border-white/5 bg-[#0a0a0a] hover:border-white/10 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:bg-[#FF1E56]/10 transition-colors">
                <feature.icon className="w-5 h-5 text-gray-400 group-hover:text-[#FF1E56] transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tools Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <span className="text-gray-500 text-sm">Tools:</span>
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.05 }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:border-white/20 transition-all text-sm"
            >
              <tool.icon className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-gray-300">{tool.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
