"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./Button";
import { Play, ArrowRight, Dot, Target, Crosshair, Radar, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-background">
      {/* Space & Gaming Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
      
      {/* Radar Sweep Animation */}
      <div className="absolute top-1/2 left-1/4 w-[800px] h-[800px] border border-primary/20 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-10">
        <div className="absolute inset-0 radar-sweep opacity-20"></div>
        <div className="absolute inset-0 border-[40px] border-background rounded-full mix-blend-overlay"></div>
        <div className="absolute top-1/2 w-full h-[1px] bg-primary/20"></div>
        <div className="absolute left-1/2 w-[1px] h-full bg-primary/20"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Status Badge */}
          <div className="relative inline-flex group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative inline-flex items-center space-x-2 px-4 py-1.5 bg-card border border-border-color rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#0ea5e9] animate-pulse glow-shadow"></span>
              <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-wider text-primary opacity-80">
                Live & Creating
              </span>
            </div>
          </div>

          <div className="relative inline-block mt-4 mb-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-foreground leading-[1] tracking-tight">
              Hi, I’m <span className="relative text-primary">DMS.</span>
            </h1>
            <div className="absolute -bottom-4 left-0 w-full h-1.5 bg-primary/20 rounded-full"></div>
            <div className="absolute -bottom-4 left-0 w-1/3 h-1.5 bg-primary rounded-full"></div>
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-xl leading-relaxed pt-4">
            <span className="font-bold text-foreground">Africa's Elite Gamer & Content Creator</span> building <span className="text-foreground underline decoration-2 decoration-primary/50 underline-offset-4 glow-shadow">world-class gaming experiences</span>. Professional Champion and Esports Pioneer.
          </p>

          <div className="flex flex-wrap gap-5 pt-4">
            <Button size="lg" className="group space-x-3 rounded-2xl relative overflow-hidden">
              <span className="relative z-10">Watch Stream</span>
              <Radar size={20} className="relative z-10 animate-pulse text-white/80" />
            </Button>
            <Button variant="outline" size="lg" className="space-x-3 rounded-2xl border-primary/40 group">
              <span className="text-primary font-bold group-hover:text-primary-foreground">Inquire for Projects</span>
              <div className="p-1 border border-primary/20 rounded-md group-hover:border-primary-foreground/30">
                 <Target size={16} className="text-primary group-hover:text-primary-foreground" />
              </div>
            </Button>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative px-4"
        >
          {/* Portrait Container */}
          <div className="relative aspect-[4/5] rounded-[3rem] p-2 bg-gradient-to-b from-primary/20 to-transparent shadow-[0_0_80px_var(--glow-color)] group">
             {/* HUD Corners */}
             <div className="hud-corner top-0 left-0 border-t-2 border-l-2 rounded-tl-3xl"></div>
             <div className="hud-corner top-0 right-0 border-t-2 border-r-2 rounded-tr-3xl"></div>
             <div className="hud-corner bottom-0 left-0 border-b-2 border-l-2 rounded-bl-3xl"></div>
             <div className="hud-corner bottom-0 right-0 border-b-2 border-r-2 rounded-br-3xl"></div>
             
             <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-card">
               <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent mix-blend-overlay z-10 pointer-events-none"></div>
             <Image 
                src="/images/hero-dms.png" 
                alt="DMS - African Gaming Champion"
                fill
                className="object-cover transition-all duration-700 hover:scale-105 z-0"
                priority
             />
             </div>
          </div>

          {/* Floating UI Elements */}
          <div className="absolute -bottom-20 left-10 space-y-3 hidden md:block z-20">
             <motion.div 
               initial={{ x: -20, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ delay: 0.5 }}
               className="glass px-5 py-3 rounded-2xl flex items-center space-x-3 shadow-xl glow-shadow"
             >
                <div className="p-1.5 bg-primary border-2 border-primary-foreground/20 rounded-lg text-primary-foreground">
                   <Target size={16} fill="currentColor" />
                </div>
                <span className="text-sm font-bold text-foreground">Target Acquired</span>
             </motion.div>
             <motion.div 
               initial={{ x: -20, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ delay: 0.7 }}
               className="glass px-5 py-3 rounded-2xl flex items-center space-x-3 shadow-lg border-l-2 border-l-accent"
             >
                <span className="text-sm font-bold text-foreground">Shield Systems Active</span>
                <Shield size={16} className="text-accent" />
             </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
