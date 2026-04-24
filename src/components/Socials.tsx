"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play, Camera, Send, MessageSquare, Music, Radar, Zap } from "lucide-react";
import Section from "./Section";

const socialLinks = [
  { name: "YouTube", icon: Play, color: "#ef4444", angle: 0 },
  { name: "Instagram", icon: Camera, color: "#ec4899", angle: 72 },
  { name: "Twitter", icon: Send, color: "#0ea5e9", angle: 144 },
  { name: "TikTok", icon: Music, color: "#a855f7", angle: 216 },
  { name: "Discord", icon: MessageSquare, color: "#6366f1", angle: 288 },
];

export default function Socials() {
  return (
    <Section className="py-60 bg-background relative overflow-hidden">
      <div className="data-spine h-full"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        
        <div className="text-center space-y-4 mb-24 lg:mb-40">
           <div className="inline-flex items-center space-x-2 text-primary text-[10px] font-black tracking-[0.4em] uppercase">
             <Radar size={14} className="animate-pulse" />
             <span>Neural Uplink // Active</span>
           </div>
           <h2 className="text-6xl md:text-8xl font-black text-foreground tracking-tighter glow-text-pulse">
             ORBITAL LINK
           </h2>
        </div>

        {/* The Orbital Warp Core */}
        <div className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] flex items-center justify-center">
           
           {/* Central Pulsing Core */}
           <motion.div 
             animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
             transition={{ duration: 2, repeat: Infinity }}
             className="absolute w-32 h-32 md:w-64 md:h-64 bg-primary/20 rounded-full blur-3xl"
           ></motion.div>
           
           <div className="relative z-10 w-20 h-20 md:w-40 md:h-40 bg-black border-4 border-primary rounded-full flex flex-col items-center justify-center shadow-[0_0_80px_var(--glow-color)] group hover:scale-110 transition-transform">
              <Zap size={40} className="text-primary animate-glitch md:w-16 md:h-16" />
              <div className="absolute inset-[-10px] border border-primary/20 rounded-full animate-spin-slow"></div>
           </div>

           {/* Orbital Rings */}
           <div className="absolute inset-0 border border-primary/10 rounded-full border-dashed"></div>
           <div className="absolute inset-[-50px] border border-primary/5 rounded-full md:inset-[-100px]"></div>

           {/* Rotating Social Satellites */}
           {socialLinks.map((social, index) => {
             const angleRad = (social.angle * Math.PI) / 180;
             const radius = 150; // default for mobile
             const mdRadius = 300; // for desktop

             return (
               <motion.a
                 key={social.name}
                 href="#"
                 initial={{ opacity: 0, scale: 0 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ delay: index * 0.1, type: "spring" }}
                 className="absolute z-20 group"
                 style={{
                    // Approximate positioning using css variables or just absolute
                    transform: `translate(calc(var(--radius) * ${Math.cos(angleRad)}), calc(var(--radius) * ${Math.sin(angleRad)}))`
                 } as any}
               >
                  <style jsx>{`
                    .satellite-${index} {
                      --radius: 150px;
                      left: calc(50% + var(--radius) * ${Math.cos(angleRad)} - 32px);
                      top: calc(50% + var(--radius) * ${Math.sin(angleRad)} - 32px);
                    }
                    @media (min-width: 768px) {
                      .satellite-${index} {
                        --radius: 300px;
                        left: calc(50% + var(--radius) * ${Math.cos(angleRad)} - 48px);
                        top: calc(50% + var(--radius) * ${Math.sin(angleRad)} - 48px);
                      }
                    }
                  `}</style>
                  
                  <div className={`satellite-${index} absolute flex flex-col items-center`}>
                    <div 
                      className="w-16 h-16 md:w-24 md:h-24 bg-card border-2 border-white/5 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:shadow-[0_0_40px_var(--glow-color)] group-hover:border-primary"
                      style={{ boxShadow: `0 0 20px ${social.color}20` }}
                    >
                       <social.icon size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
                       
                       {/* Floating Data Line to Core */}
                       <div className="absolute w-[100px] md:w-[200px] h-px bg-gradient-to-r from-primary/0 to-primary/40 origin-left -left-[100px] md:-left-[200px] top-1/2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <span className="mt-4 text-[10px] font-black text-primary uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                      {social.name}
                    </span>
                  </div>
               </motion.a>
             );
           })}
        </div>

        {/* Bottom Data Badge */}
        <div className="mt-40 bg-zinc-900 border border-white/5 p-4 flex items-center space-x-6 [clip-path:polygon(5%_0,100%_0,95%_100%,0_100%)]">
            <div className="flex flex-col">
              <span className="text-[8px] font-bold text-primary/50 uppercase">Network_Load</span>
              <span className="text-xs font-mono text-primary font-bold">STABLE_0x99</span>
            </div>
            <div className="w-px h-8 bg-white/5"></div>
            <div className="flex flex-col">
              <span className="text-[8px] font-bold text-primary/50 uppercase">Link_Status</span>
              <span className="text-xs font-mono text-primary font-bold">CRYPTO_SYCURED</span>
            </div>
        </div>
      </div>
    </Section>
  );
}
