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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <p className="text-4xl md:text-6xl font-extrabold text-foreground tracking-tight glow-shadow">
              {stat.value}
            </p>
            <div className="w-10 h-1 bg-primary/30 rounded-full"></div>
            <p className="text-xs md:text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
