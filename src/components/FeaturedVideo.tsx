"use client";

import React from "react";
import { motion } from "framer-motion";
import { Crosshair, Calendar, Eye } from "lucide-react";
import Section from "./Section";

export default function FeaturedVideo() {
  return (
    <Section className="bg-background">
      <div className="space-y-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-extrabold text-foreground tracking-tight leading-tight glow-shadow">Latest Content</h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed">Stay updated with the newest tactical breakdowns, high-level gameplay, and exclusive streams.</p>
          </div>
          <button className="text-[11px] font-bold text-primary uppercase tracking-[0.2em] hover:opacity-70 transition-opacity border-b-2 border-primary/20 pb-1">View All Videos</button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative group cursor-pointer"
        >
          {/* Big Video Card */}
          <div className="aspect-video rounded-[2.5rem] overflow-hidden bg-card border border-border-color shadow-[0_0_30px_rgba(0,0,0,0.05)] dark:shadow-[0_0_50px_var(--glow-color)] relative">
             <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity z-10"></div>
             
             {/* HUD Corners */}
             <div className="hud-corner top-4 left-4 border-t-2 border-l-2 opacity-30 z-20"></div>
             <div className="hud-corner top-4 right-4 border-t-2 border-r-2 opacity-30 z-20"></div>
             <div className="hud-corner bottom-4 left-4 border-b-2 border-l-2 opacity-30 z-20"></div>
             <div className="hud-corner bottom-4 right-4 border-b-2 border-r-2 opacity-30 z-20"></div>
             
             {/* Thumbnail placeholder */}
             <div className="w-full h-full bg-slate-800 dark:bg-[#0b1120] flex items-center justify-center">
                <div className="w-24 h-24 rounded-full glass border border-accent/20 flex items-center justify-center text-accent transform group-hover:scale-110 transition-transform duration-500 z-20 glow-shadow relative">
                  <div className="absolute inset-0 rounded-full border border-accent animate-ping opacity-20"></div>
                  <Crosshair size={40} fill="currentColor" />
                </div>
             </div>

             {/* Content Overlay */}
             <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full flex flex-col md:flex-row justify-between items-end gap-6 text-foreground z-20">
                <div className="space-y-3">
                  <h3 className="text-2xl md:text-4xl font-bold leading-tight drop-shadow-md">Mastering CODM: <br /> The Ultimate S3 Strategy</h3>
                  <div className="flex items-center space-x-6 text-sm text-foreground/80 font-medium">
                    <span className="flex items-center space-x-2"><Eye size={16} /> <span>145K Views</span></span>
                    <span className="flex items-center space-x-2"><Calendar size={16} /> <span>2 Days ago</span></span>
                  </div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
