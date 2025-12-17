"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Linkedin } from "lucide-react";

const projects = [
  {
    title: "DevSecOps CI/CD Pipeline",
    description: "Designed and implemented a fully automated, end-to-end CI/CD and GitOps pipeline. This architecture automates the entire workflow from a developer's git push to the application running live in a Kubernetes cluster, embedding security and quality checks at every step.",
    tags: ["Jenkins", "SonarQube", "Docker", "Trivy", "Harbor", "ArgoCD", "K3s"],
    image: "/devsecops-pipeline.jpg",
    href: "https://www.linkedin.com/in/muhammad-choirul-rasyid/recent-activity/all/",
    featured: true,
  },
  {
    title: "High-Availability K3s Cluster",
    description: "Built a fault-tolerant Kubernetes cluster with multi-control plane architecture, MySQL backend for persistent storage, and Traefik as the ingress controller.",
    tags: ["K3s", "MySQL", "Traefik", "HA"],
    image: "/k3scluster.jpg",
    href: "https://www.linkedin.com/posts/muhammad-choirul-rasyid_kubernetes-highavailability-k3s-activity-7371788734272307201-OLq9",
    featured: false,
  },
  {
    title: "Mailcow Mail Server",
    description: "Deployed a self-hosted email infrastructure using Mailcow with Postfix for SMTP, Dovecot for IMAP/POP3, and SOGo for webmail.",
    tags: ["Docker", "Postfix", "Dovecot", "SSL"],
    image: "/mailcow.jpg",
    href: "https://www.linkedin.com/posts/muhammad-choirul-rasyid_mailcow-docker-emailsecurity-activity-7363100514831527936-2aw4",
    featured: false,
  },
  {
    title: "Proxmox HA Cluster",
    description: "Configured a high-availability Proxmox VE 8.2.2 cluster with NFS shared storage, automatic VM migration, and centralized management.",
    tags: ["Proxmox", "NFS", "HA"],
    image: "/hacluster.jpg",
    href: "#",
    featured: false,
  },
  {
    title: "IoT Data Center Monitor",
    description: "Developed a real-time monitoring solution using DHT11 temperature/humidity sensors and PZEM power meters, integrated with Arduino.",
    tags: ["Arduino", "C++", "IoT", "Blynk"],
    image: "/iotdatacenter.jpg",
    href: "https://github.com/Rullabcde/monitoring_data_center",
    featured: false,
  },
];

export function ProjectsSection() {
  const featured = projects.find(p => p.featured);
  const others = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 px-4 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#FF1E56]/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Featured <span className="gradient-text-red">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Infrastructure solutions built with passion and precision.
          </p>
        </motion.div>

        {/* Featured Project - Compact Version */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <a 
              href={featured.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block relative overflow-hidden rounded-2xl border border-white/5 bg-[#0a0a0a] hover:border-[#FF1E56]/30 transition-all duration-500"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-56 md:h-72 overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-r from-transparent to-[#0a0a0a] z-10 md:block hidden" />
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col justify-center relative z-20">
                  <div className="inline-flex items-center gap-2 text-[#FF1E56] text-sm font-medium mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#FF1E56]" />
                    FEATURED
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-[#FF1E56] transition-colors">
                    {featured.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base mb-4 line-clamp-3">{featured.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featured.tags.slice(0, 5).map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">
                        {tag}
                      </span>
                    ))}
                    {featured.tags.length > 5 && (
                      <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400">
                        +{featured.tags.length - 5}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-[#FF1E56] font-medium text-sm">
                    View Project <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </div>
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#FF1E56]/10 rounded-full blur-3xl" />
              </div>
            </a>
          </motion.div>
        )}

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {others.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl border border-white/5 bg-[#0a0a0a] hover:border-[#A855F7]/30 transition-all duration-500 hover-lift"
            >
              {/* Image */}
              <div className="relative h-36 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] to-transparent z-10" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-sm mb-2 text-white group-hover:text-[#A855F7] transition-colors line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-xs mb-3 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="px-2 py-0.5 bg-white/5 rounded text-xs text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-linear-to-t from-[#A855F7]/10 to-transparent" />
              </div>
            </motion.a>
          ))}
        </div>
        
        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a 
            href="https://www.linkedin.com/in/muhammad-choirul-rasyid/recent-activity/all/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 hover:border-[#FF1E56]/30 text-gray-300 hover:text-white text-sm font-medium transition-all duration-300 hover:bg-white/5"
          >
            <Linkedin className="w-4 h-4" />
            View More on LinkedIn
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
