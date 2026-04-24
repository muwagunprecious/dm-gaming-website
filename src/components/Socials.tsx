"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play, Camera, Send, MessageSquare, Music, ArrowUpRight } from "lucide-react";
import Section from "./Section";

const socialLinks = [
  { name: "YouTube", icon: Play, color: "hover:bg-red-500", followers: "200K+", link: "#" },
  { name: "Instagram", icon: Camera, color: "hover:bg-pink-500", followers: "150K+", link: "#" },
  { name: "Twitter", icon: Send, color: "hover:bg-sky-500", followers: "80K+", link: "#" },
  { name: "TikTok", icon: Music, color: "hover:bg-black", followers: "120K+", link: "#" },
  { name: "Discord", icon: MessageSquare, color: "hover:bg-indigo-500", followers: "20K+", link: "#" },
];

export default function Socials() {
  return (
    <Section className="pb-32">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.link}
            initial={{ opacity: 0, y: 60, skewX: index % 2 === 0 ? -10 : 10 }}
            whileInView={{ opacity: 1, y: 0, skewX: 0 }}
            transition={{ delay: index * 0.12, duration: 0.7, type: "spring", stiffness: 80, damping: 14 }}
            viewport={{ once: true, margin: "-60px" }}
            className={`group relative py-12 px-6 h-56 bg-card dark:bg-[#050505] shadow-lg dark:hover:shadow-[0_0_60px_var(--glow-color)] transition-all duration-500 hover:-translate-y-4 text-foreground hover:text-white [clip-path:polygon(20%_0,100%_0,80%_100%,0_100%)] overflow-hidden flex items-center justify-center`}
          >
            {/* Thruster Glow Background */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${social.color.replace('hover:', '')} -z-10`}></div>
            {/* Inner Geometry Border */}
            <div className="absolute inset-[1px] bg-card [clip-path:polygon(20%_0,100%_0,80%_100%,0_100%)] -z-0 group-hover:opacity-0 transition-opacity duration-300"></div>
            <div className="relative z-10 flex flex-col h-full justify-between items-center text-center space-y-4">
              <div className="p-4 bg-muted/50 [clip-path:polygon(20%_0,100%_0,80%_100%,0_100%)] group-hover:bg-white/20 transition-colors">
                <social.icon size={32} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-2xl font-extrabold tracking-tight">{social.followers}</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-50 group-hover:opacity-100">{social.name}</p>
              </div>
              <ArrowUpRight className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
