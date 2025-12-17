"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram, ArrowUpRight, Copy, Check } from "lucide-react";
import { useState } from "react";

const socials = [
  { name: "GitHub", href: "https://github.com/Rullabcde", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-choirul-rasyid/", icon: Linkedin },
  { name: "Instagram", href: "https://www.instagram.com/rullabcd/", icon: Instagram },
  { name: "Email", href: "mailto:choirulrasyid09@gmail.com", icon: Mail },
];

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText("choirulrasyid09@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent" />
      <div className="bg-gradient-orb bg-gradient-orb-red w-[600px] h-[600px] bottom-0 left-1/4" />
      <div className="bg-gradient-orb bg-gradient-orb-purple w-[400px] h-[400px] bottom-1/4 right-1/4" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Header */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Let&apos;s build <span className="gradient-text">together</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Have a project in mind? Want to discuss DevOps, Linux, or infrastructure? 
            I&apos;m always excited to connect.
          </p>

          {/* CTA Button */}
          <motion.a
            href="mailto:choirulrasyid09@gmail.com"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#D91847] text-white font-semibold text-lg rounded-xl hover:bg-[#FF1E56] hover:shadow-[0_0_60px_rgba(255,30,86,0.3)] transition-all duration-300 mb-8"
          >
            Get in touch
            <ArrowUpRight className="w-5 h-5" />
          </motion.a>

          {/* Command Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="command-box inline-flex items-center gap-4 px-6 py-4 cursor-pointer mb-12"
            onClick={handleCopy}
          >
            <span className="text-gray-500">$</span>
            <span className="text-gray-300 font-mono">echo &quot;choirulrasyid09@gmail.com&quot;</span>
            <button 
              className="text-gray-500 hover:text-[#FF1E56] transition-colors"
              aria-label={copied ? "Email copied" : "Copy email address to clipboard"}
            >
              {copied ? <Check className="w-4 h-4 text-green-500" aria-hidden="true" /> : <Copy className="w-4 h-4" aria-hidden="true" />}
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-3"
          >
            {socials.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target={social.name !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="group p-4 rounded-xl border border-white/10 hover:border-[#FF1E56]/30 bg-white/5 hover:bg-[#FF1E56]/5 transition-all duration-300"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5 text-gray-400 group-hover:text-[#FF1E56] transition-colors" aria-hidden="true" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
