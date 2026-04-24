"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Followers", value: "500K+" },
  { label: "Tournaments", value: "50+" },
  { label: "Wins", value: "100+" },
  { label: "Views", value: "20M+" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-background relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-12 relative z-10">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.4, rotate: -180 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: index * 0.15, type: "spring", stiffness: 80, damping: 14 }}
            viewport={{ once: true, margin: "-80px" }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-56 h-56 mx-auto flex flex-col items-center justify-center p-6 border-4 border-primary/20 rounded-full bg-card shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden group">
               {/* Inner Radar Geometry */}
               <div className="absolute inset-0 radar-sweep opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
               <div className="absolute inset-x-0 h-[1px] bg-primary/20 top-1/2 -translate-y-1/2"></div>
               <div className="absolute inset-y-0 w-[1px] bg-primary/20 left-1/2 -translate-x-1/2"></div>
               
               <div className="absolute inset-2 border-2 border-dashed border-primary/30 rounded-full animate-spin-slow"></div>
            <div className="relative z-10 text-center space-y-2 background-blur-sm bg-black/40 px-4 py-2 rounded-xl border border-white/5">
              <p className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight glow-shadow">
                {stat.value}
              </p>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                {stat.label}
              </p>
            </div>
          </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
