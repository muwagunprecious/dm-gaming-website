"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Radar, Zap, Shield, Terminal } from "lucide-react";
import { Button } from "./Button";
import Section from "./Section";

export default function Newsletter() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const email = "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 2000);
  };

  return (
    <Section className="py-60 bg-background relative overflow-hidden">
      <div className="data-spine h-full"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-16">
          
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             className="text-center space-y-4"
          >
             <div className="inline-flex items-center space-x-2 text-accent text-[10px] font-black tracking-[0.4em] uppercase">
               <Shield size={14} className="animate-pulse" />
               <span>Command Bridge // Authorized Only</span>
             </div>
             <h2 className="text-6xl md:text-9xl font-black text-foreground tracking-tighter glow-text-pulse">
               LINK UP.
             </h2>
          </motion.div>

          {/* The Neural Link Console */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="w-full max-w-2xl relative"
          >
             {/* Dynamic Hex Frame */}
             <div className="absolute inset-[-40px] border border-primary/20 [clip-path:polygon(10%_0,90%_0,100%_50%,90%_100%,10%_100%,0_50%)] animate-pulse"></div>
             
             <div className="bg-black/60 backdrop-blur-2xl p-10 md:p-20 border border-primary/30 [clip-path:polygon(5%_0,95%_0,100%_50%,95%_100%,5%_100%,0_50%)] shadow-[0_0_100px_rgba(14,165,233,0.2)]">
                
                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center space-y-6"
                    >
                       <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto border-2 border-primary animate-glitch">
                          <CheckCircle2 size={40} className="text-primary" />
                       </div>
                       <div className="space-y-2">
                         <h3 className="text-3xl font-black text-white">LINK ESTABLISHED</h3>
                         <p className="text-primary/60 text-xs font-bold uppercase tracking-widest">Operator successfully registered in the neural net.</p>
                       </div>
                       <Button onClick={() => setStatus("idle")} className="bg-primary hover:bg-primary/80 text-black font-black uppercase text-[10px] tracking-widest px-8">Return to Base</Button>
                    </motion.div>
                  ) : (
                    <motion.form 
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      onSubmit={handleSubmit}
                      className="space-y-8"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                           <span className="text-[10px] font-bold text-primary uppercase tracking-widest flex items-center gap-2">
                              <Terminal size={12} />
                              Enter_Destination
                           </span>
                           <span className="text-[8px] font-mono text-primary/30">0x884_UDP</span>
                        </div>
                        <input 
                           required
                           type="email" 
                           placeholder="OPERATOR_EMAIL@GMAIL.COM"
                           className="w-full bg-white/5 border-b-2 border-primary/30 py-4 px-0 text-2xl font-black text-foreground placeholder:text-white/10 outline-none focus:border-primary transition-all text-center tracking-tighter"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        disabled={status === "submitting"}
                        className="w-full bg-primary py-8 flex items-center justify-center gap-4 group overflow-hidden relative border-none"
                      >
                         <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                         {status === "submitting" ? (
                            <div className="w-6 h-6 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
                         ) : (
                            <>
                              <span className="text-black font-black uppercase text-xl tracking-[0.2em] group-hover:animate-glitch">INITIALIZE LINK</span>
                              <Send size={24} className="text-black" />
                            </>
                         )}
                      </Button>
                    </motion.form>
                  )}
                </AnimatePresence>

                {/* Sub-UI Info */}
                <div className="mt-12 pt-8 border-t border-white/5 flex justify-between items-center opacity-40">
                   <div className="flex items-center space-x-2 text-[8px] font-bold text-primary uppercase tracking-widest">
                      <Radar size={12} />
                      <span>Syncing_50k_units</span>
                   </div>
                   <div className="flex space-x-2">
                      <div className="w-1 h-1 bg-primary rounded-full animate-ping"></div>
                      <div className="w-1 h-1 bg-primary rounded-full animate-ping [animation-delay:0.2s]"></div>
                      <div className="w-1 h-1 bg-primary rounded-full animate-ping [animation-delay:0.4s]"></div>
                   </div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
