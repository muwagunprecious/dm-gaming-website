"use client";

import React from "react";
import { motion } from "framer-motion";
import { Radar } from "lucide-react";
import Section from "./Section";
import { Button } from "./Button";

export default function UpcomingStream() {
  return (
    <Section className="bg-background">
      <div className="bg-card dark:bg-[#050b14] border border-border-color rounded-[4rem] p-10 md:p-24 text-foreground grid grid-cols-1 lg:grid-cols-2 gap-16 items-center overflow-hidden relative shadow-[0_0_50px_rgba(0,0,0,0.05)] dark:shadow-[0_0_80px_var(--glow-color)]">
        {/* Background Accent */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30 dark:opacity-50 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="space-y-10 relative z-10">
          <div className="inline-flex items-center space-x-3 px-4 py-2 bg-muted rounded-full text-[11px] font-bold uppercase tracking-[0.2em] leading-none text-foreground border border-border-color shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse glow-shadow"></span>
            <span>Upcoming Stream</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] glow-shadow">
            Grand Finals: <br /> Africa Showdown
          </h2>
          
          <p className="text-muted-foreground text-xl md:text-2xl max-w-lg leading-relaxed">
            Join thousands of viewers for the biggest CODM tournament of the year. I'll be competing live for the championship.
          </p>

          <div className="flex items-center space-x-16">
            <div className="space-y-2">
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-bold">Event</p>
              <p className="text-2xl font-bold">CODM Majors</p>
            </div>
            <div className="space-y-2">
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-bold">Date</p>
              <p className="text-2xl font-bold">May 24, 2026</p>
            </div>
          </div>

          <Button size="lg" className="rounded-[2rem] font-black uppercase tracking-[0.1em] shadow-[0_0_20px_var(--glow-color)] transition-all">
            <span>Remind Me</span>
          </Button>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-video lg:aspect-square bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-border-color dark:border-primary/20 glow-shadow z-10"
        >
          {/* Stream Thumbnail Placeholder */}
          {/* Stream Thumbnail Placeholder */}
          <div className="w-full h-full bg-gradient-to-br from-[#050b14] to-slate-900 flex items-center justify-center p-12 relative overflow-hidden group">
             {/* HUD Corners */}
             <div className="hud-corner top-4 left-4 border-t-2 border-l-2 opacity-30 z-20 transition-all duration-500 group-hover:inset-6"></div>
             <div className="hud-corner top-4 right-4 border-t-2 border-r-2 opacity-30 z-20 transition-all duration-500 group-hover:inset-6"></div>
             <div className="hud-corner bottom-4 left-4 border-b-2 border-l-2 opacity-30 z-20 transition-all duration-500 group-hover:inset-6"></div>
             <div className="hud-corner bottom-4 right-4 border-b-2 border-r-2 opacity-30 z-20 transition-all duration-500 group-hover:inset-6"></div>

             <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
             <div className="text-center space-y-4 relative z-10">
               <div className="text-6xl font-black text-white/5 tracking-[0.2em] uppercase">Signal</div>
               <Radar size={64} className="mx-auto text-primary opacity-50 drop-shadow-[0_0_15px_var(--glow-color)] animate-ping" />
             </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
