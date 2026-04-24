"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./Button";
import { Radar, Target, Shield, Zap } from "lucide-react";

const SpaceBackground = () => {
  const [mounted, setMounted] = React.useState(false);
  const [stars, setStars] = React.useState<{ id: number; top: string; left: string; duration: string; delay: string }[]>([]);

  React.useEffect(() => {
    setMounted(true);
    setStars(
      Array.from({ length: 80 }).map((_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration: `${Math.random() * 3 + 1.5}s`,
        delay: `${Math.random() * 2}s`,
      }))
    );
  }, []);

  const { scrollY } = useScroll();
  const yStars = useTransform(scrollY, [0, 1000], [0, 400]);

  if (!mounted) return null;

  return (
    <motion.div style={{ y: yStars }} className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            animationDuration: star.duration,
            animationDelay: star.delay,
          }}
        />
      ))}
      <div className="meteor" style={{ top: '15%', left: '70%', animationDelay: '0s' }}></div>
      <div className="meteor" style={{ top: '40%', left: '90%', animationDelay: '2.5s' }}></div>
      <div className="meteor" style={{ top: '0%', left: '50%', animationDelay: '5s' }}></div>
      <div className="meteor" style={{ top: '60%', left: '100%', animationDelay: '7.5s' }}></div>
    </motion.div>
  );
};

export default function Hero() {
  const { scrollY } = useScroll();
  const yRadar = useTransform(scrollY, [0, 1000], [0, 250]);
  const yContentLeft = useTransform(scrollY, [0, 1000], [0, -150]);
  const yContentRight = useTransform(scrollY, [0, 1000], [0, -50]);

  return (
    <section className="relative min-h-screen pt-32 pb-24 overflow-hidden bg-background">
      <SpaceBackground />
      <div className="data-spine h-full"></div>
      
      {/* Central Axis Point */}
      <div className="data-spine-point top-[150px]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-2 relative z-10">
        
        {/* Left Content - Tactical Intel */}
        <motion.div
          style={{ y: yContentLeft }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="lg:pr-24 space-y-12 flex flex-col justify-center"
        >
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 text-primary font-bold text-[10px] tracking-[0.5em] uppercase">
              <Zap size={14} className="animate-glitch" />
              <span>Link Established // 0x4F2A</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-foreground leading-[0.9] tracking-tighter">
              DMS<span className="text-primary animate-glitch">_</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary bg-300% animate-shimmer">OPERATOR</span>
            </h1>
          </div>

          <div className="relative p-8 bg-card border-l-4 border-primary/40 [clip-path:polygon(0_0,100%_0,100%_80%,80%_100%,0_100%)]">
            <div className="absolute top-0 right-0 p-2 text-[8px] font-mono text-primary/30">INTEL_LOG_884</div>
            <p className="text-xl text-muted-foreground leading-relaxed italic border-b border-white/5 pb-6">
              "The battlefield isn't just a place — it's a series of calculated maneuvers and split-second decisions."
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <Button size="lg" className="rounded-none [clip-path:polygon(10%_0,100%_0,90%_100%,0_100%)] bg-primary text-black font-black uppercase tracking-widest text-xs px-12 group">
                <span className="group-hover:animate-glitch inline-block">Execute Mission</span>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Right Content - Visual Profile */}
        <motion.div
          style={{ y: yContentRight }}
          initial={{ opacity: 0, scale: 1.1, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="relative lg:pl-12 pt-20"
        >
          {/* Holographic Frame */}
          <div className="relative aspect-[3/4] w-full max-w-[500px] mx-auto group">
            <motion.div 
               animate={{ rotate: [0, 360] }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="absolute inset-[-10%] border border-primary/10 rounded-full border-dashed" 
            />
            
            {/* HUD Elements around the image */}
            <div className="absolute -top-10 -right-10 w-32 space-y-2 hidden lg:block">
              <div className="h-0.5 w-full bg-primary/20"></div>
              <div className="flex justify-between text-[10px] font-bold text-primary">
                <span>BIO_SYNC</span>
                <span>98.2%</span>
              </div>
            </div>

            <div className="relative w-full h-full bg-black/50 [clip-path:polygon(20%_0,100%_0,100%_80%,80%_100%,0_100%,0_20%)] overflow-hidden border border-primary/20 shadow-[0_0_100px_rgba(14,165,233,0.1)]">
              <Image 
                src="/images/hero-dms.png" 
                alt="DMS"
                fill
                className="object-cover opacity-90 grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-primary/10"></div>
              
              {/* Scanline overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none"></div>
            </div>

            {/* Float Cards */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 bg-primary/10 backdrop-blur-md border border-primary/30 p-6 flex flex-col items-center justify-center space-y-1 shadow-[0_0_40px_rgba(14,165,233,0.2)]"
            >
              <Target size={24} className="text-primary mb-2" />
              <div className="text-2xl font-black text-white">#01</div>
              <div className="text-[8px] font-bold text-primary tracking-widest uppercase">Global Rank</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Extreme background radar */}
      <motion.div 
        style={{ y: yRadar }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-primary/5 rounded-full pointer-events-none -z-20"
      >
        <div className="absolute inset-0 radar-sweep opacity-5"></div>
      </motion.div>
    </section>
  );
}
