"use client";

import React from "react";
import { motion } from "framer-motion";
import { Radar, Target, Crosshair, Zap } from "lucide-react";
import Section from "./Section";

const stats = [
  { label: "Elite Followers", value: "500K+", icon: Target },
  { label: "Championship Wins", value: "100+", icon: Zap },
  { label: "Global Presence", value: "20M+", icon: Radar },
  { label: "Pro Tournaments", value: "50+", icon: Crosshair },
];

export default function Stats() {
  return (
    <Section className="py-40 bg-background relative perspective-[2000px]">
      <div className="data-spine h-full"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, rotateY: 45, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[350px] flex items-center justify-center"
            >
              <div className="relative w-full aspect-square flex flex-col items-center justify-center">
                {/* Holographic 3D Rings */}
                <motion.div 
                  animate={{ rotate: 360, scale: [1, 1.05, 1] }} 
                  transition={{ rotate: { duration: 15, repeat: Infinity, ease: "linear" }, scale: { duration: 4, repeat: Infinity } }}
                  className="absolute inset-0 border-2 border-primary/20 rounded-full border-dashed"
                />
                <motion.div 
                   animate={{ rotate: -360, scale: [1.1, 1, 1.1] }} 
                   transition={{ rotate: { duration: 25, repeat: Infinity, ease: "linear" }, scale: { duration: 5, repeat: Infinity } }}
                   className="absolute inset-[-10px] border border-accent/20 rounded-full" 
                />

                {/* Central HUD Card */}
                <div className="relative z-10 w-48 h-48 bg-black/40 backdrop-blur-xl [clip-path:polygon(15%_0,85%_0,100%_15%,100%_85%,85%_100%,15%_100%,0_85%,0_15%)] border border-primary/30 flex flex-col items-center justify-center text-center p-6 space-y-3 group-hover:border-primary transition-colors duration-500 shadow-[0_0_50px_rgba(14,165,233,0.1)]">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:animate-glitch">
                    <stat.icon size={24} className="text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-3xl font-black text-foreground tracking-tighter hologram-glow">
                      {stat.value}
                    </p>
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary/60">
                      {stat.label}
                    </p>
                  </div>
                  {/* Small decorative line */}
                  <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
                </div>

                {/* Sub-tracking circle */}
                <motion.div 
                  animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.1, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-[-40px] border-4 border-primary/5 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
