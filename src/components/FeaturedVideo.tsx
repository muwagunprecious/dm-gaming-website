"use client";

import React from "react";
import { motion } from "framer-motion";
import { Crosshair, Eye, Info, Lock } from "lucide-react";
import Section from "./Section";

export default function FeaturedVideo() {
  return (
    <Section className="bg-background relative py-60">
      <div className="data-spine h-full"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Sniper Info Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-12"
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-accent text-[10px] font-bold tracking-[0.3em] uppercase">
                <Lock size={14} className="animate-pulse" />
                <span>Weapon Locked // S3-Tactical</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-foreground leading-[1] tracking-tighter glow-text-pulse">
                THE<br />
                <span className="text-primary">ULTIMATE</span><br />
                STRATEGY
              </h2>
            </div>
            
            <div className="p-6 border-l-2 border-primary/20 space-y-4">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Visualizing the latest tactical shifts in the global circuit. Every movement is logged. Every target is analyzed.
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2 text-xs font-bold text-primary">
                  <Eye size={16} />
                  <span>145K LOGS</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-bold text-accent">
                  <Info size={16} />
                  <span>S3_UPDATE</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sniper Scope Viewport */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ once: true }}
            className="lg:col-span-8 relative aspect-video group"
          >
            {/* Scope Frame Brackets (Custom for this video) */}
            <div className="absolute inset-0 border-[20px] border-black/80 z-20 pointer-events-none [clip-path:polygon(0_0,100%_0,100%_100%,0_100%,0_0,10%_10%,10%_90%,90%_90%,90%_10%,10%_10%)]"></div>
            
            {/* Range Finder Ticks */}
            <div className="absolute inset-0 z-30 pointer-events-none flex items-center justify-between px-12">
               <div className="h-2/3 flex flex-col justify-between items-start text-[8px] font-mono text-primary/40 uppercase">
                  <span>Elev: 102.4</span>
                  <span>Dist: 400m</span>
                  <span>Wind: 2.1s</span>
               </div>
               <div className="h-2/3 flex flex-col justify-between items-end text-[8px] font-mono text-primary/40 uppercase">
                  <span>Obj: Target</span>
                  <span>Bln: Safe</span>
                  <span>Sys: Active</span>
               </div>
            </div>

            {/* Central Scope Crosshair Overlay */}
            <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
               <div className="w-1/2 h-[1px] bg-primary/20"></div>
               <div className="h-1/2 w-[1px] bg-primary/20 absolute"></div>
               <div className="w-48 h-48 border border-primary/20 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 border border-accent rounded-full animate-ping opacity-30"></div>
               </div>
            </div>

            {/* Video Container */}
            <div className="relative w-full h-full overflow-hidden bg-[#050b14] border border-primary/10">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
              
              {/* Fake Video Content/Thumb */}
              <div className="w-full h-full bg-slate-900 group-hover:scale-105 transition-transform duration-1000 flex items-center justify-center">
                <div className="relative w-32 h-32 flex items-center justify-center transition-transform duration-500 group-hover:scale-125">
                   <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 border border-primary/30 border-dashed rounded-full" 
                   />
                   <div className="relative z-10 w-20 h-20 bg-background/50 backdrop-blur-md rounded-full flex items-center justify-center border border-primary/50 text-primary shadow-[0_0_30px_var(--glow-color)] group-hover:bg-primary group-hover:text-black transition-all">
                      <Crosshair size={32} />
                   </div>
                </div>
              </div>

              {/* Scanline/Grid Overlay */}
              <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none z-10"></div>
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none z-10"></div>
            </div>
            
            {/* Data Readout Badge */}
            <div className="absolute -bottom-6 right-10 z-40 bg-accent text-black px-4 py-1 text-[10px] font-black uppercase tracking-[0.2em] [clip-path:polygon(0_0,100%_0,90%_100%,10%_100%)]">
              Primary_Feed
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
