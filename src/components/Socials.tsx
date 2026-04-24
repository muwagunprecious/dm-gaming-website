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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`group relative p-8 rounded-[2rem] bg-card dark:bg-[#050b14] border border-border-color shadow-[0_0_20px_rgba(0,0,0,0.02)] dark:hover:shadow-[0_0_40px_var(--glow-color)] transition-all duration-500 ${social.color} hover:text-white hover:-translate-y-2`}
          >
            <div className="flex flex-col h-full justify-between items-center text-center space-y-4">
              <div className="p-4 bg-muted/50 rounded-2xl group-hover:bg-white/20 transition-colors">
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
