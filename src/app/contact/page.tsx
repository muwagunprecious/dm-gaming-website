"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import { Mail, MessageCircle, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/Button";
import { motion } from "framer-motion";
import { submitContactForm } from "@/app/actions/contact";

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");
    
    const formData = new FormData(e.currentTarget);
    const result = await submitContactForm(formData);
    
    if (result.success) {
      setFormState("success");
    } else {
      setFormState("error");
      setErrorMessage(result.error || "Failed to send message. Please try again.");
    }
  };

  return (
    <main className="min-h-screen flex flex-col pt-32">
      <Navbar />
      
      <Section className="pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-8">
             <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight">Let's Connect.</h1>
             <p className="text-xl text-slate-600 leading-relaxed">
               Whether it's for sponsorships, collaboration, or just to say hi, I'm always open to new opportunities.
             </p>
             
             <div className="space-y-6 pt-8">
                <div className="flex items-center space-x-6 p-6 rounded-[2rem] bg-slate-50 border border-slate-100">
                   <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                      <Mail size={28} />
                   </div>
                   <div>
                      <p className="text-xs font-black uppercase tracking-widest text-slate-400">Email Me</p>
                      <p className="text-xl font-bold text-slate-900">contact@dms.africa</p>
                   </div>
                </div>
                
                <div className="flex items-center space-x-6 p-6 rounded-[2rem] bg-slate-50 border border-slate-100">
                   <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                      <MessageCircle size={28} />
                   </div>
                   <div>
                      <p className="text-xs font-black uppercase tracking-widest text-slate-400">Business</p>
                      <p className="text-xl font-bold text-slate-900">business@dms.africa</p>
                   </div>
                </div>
             </div>
          </div>

          <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-primary/5 border border-slate-100">
             {formState === "success" ? (
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20"
               >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                     <CheckCircle2 size={48} />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-3xl font-black text-slate-900">Message Sent!</h2>
                    <p className="text-slate-500">I'll get back to you as soon as possible.</p>
                  </div>
                  <Button variant="secondary" onClick={() => setFormState("idle")}>Send Another</Button>
               </motion.div>
             ) : (
               <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                     <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-4">Full Name</label>
                     <input 
                       required
                       name="name"
                       type="text" 
                       placeholder="John Doe"
                       className="w-full h-14 px-6 rounded-2xl bg-slate-50 border border-transparent focus:border-primary/20 focus:bg-white outline-none transition-all font-medium"
                     />
                  </div>
                  
                  <div className="space-y-2">
                     <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-4">Email Address</label>
                     <input 
                       required
                       name="email"
                       type="email" 
                       placeholder="john@example.com"
                       className="w-full h-14 px-6 rounded-2xl bg-slate-50 border border-transparent focus:border-primary/20 focus:bg-white outline-none transition-all font-medium"
                     />
                  </div>
                  
                  <div className="space-y-2">
                     <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-4">Your Message</label>
                     <textarea 
                       required
                       name="message"
                       rows={5}
                       placeholder="Tell me about your project..."
                       className="w-full p-6 rounded-2xl bg-slate-50 border border-transparent focus:border-primary/20 focus:bg-white outline-none transition-all font-medium resize-none"
                     />
                  </div>
                  
                  {formState === "error" && (
                    <div className="flex items-center space-x-2 text-red-500 bg-red-50 p-4 rounded-xl text-sm font-medium">
                      <AlertCircle size={18} />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <Button 
                    className="w-full h-16 text-lg space-x-2" 
                    disabled={formState === "submitting"}
                  >
                     {formState === "submitting" ? (
                       <span className="animate-pulse">Sending...</span>
                     ) : (
                       <>
                         <Send size={20} />
                         <span>Send Message</span>
                       </>
                     )}
                  </Button>
               </form>
             )}
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
