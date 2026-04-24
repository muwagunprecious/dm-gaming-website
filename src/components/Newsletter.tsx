"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Mail } from "lucide-react";
import { Button } from "./Button";
import { subscribeToNewsletter } from "@/app/actions/newsletter";

export default function Newsletter() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const result = await subscribeToNewsletter(formData);

    if (result.success) {
      setStatus("success");
      setMessage(result.message || "Welcome to the squad!");
    } else {
      setStatus("error");
      setMessage(result.error || "Something went wrong. Try again.");
    }
  };

  return (
    <section className="py-32 px-6 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-30 pointer-events-none"></div>
      <div className="max-w-6xl mx-auto">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-card dark:bg-[#050b14] border border-border-color rounded-[3rem] p-8 md:p-20 shadow-[0_0_40px_rgba(0,0,0,0.05)] dark:shadow-[0_0_50px_var(--glow-color)] overflow-hidden">
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-3 px-4 py-1.5 bg-primary/10 rounded-full text-primary border border-primary/20">
              <Mail size={16} />
              <span className="text-[11px] font-bold uppercase tracking-widest text-primary">Squad Setup</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-foreground tracking-tight leading-[1.1] glow-shadow">
              Get the latest <span className="text-primary underline decoration-4 decoration-primary/20 underline-offset-8">tactics</span> directly.
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-md leading-relaxed">
              Join 50k+ gamers receiving weekly breakdowns, early stream notifications, and exclusive merch drops.
            </p>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-primary/5 rounded-3xl p-8 text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center mx-auto mb-2 glow-shadow">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground drop-shadow-md">{message}</h3>
                  <p className="text-muted-foreground">You've been successfully subscribed. Look out for updates soon.</p>
                  <Button variant="ghost" onClick={() => setStatus("idle")}>
                    Back
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="relative group">
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="Your email address"
                      className="w-full h-16 md:h-20 px-8 bg-muted/50 border border-border-color rounded-[2rem] text-foreground outline-none focus:ring-2 focus:ring-primary focus:bg-card transition-all text-lg"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full h-16 md:h-20 rounded-[2rem] text-lg font-bold"
                  >
                    {status === "submitting" ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <div className="flex items-center space-x-3">
                        <span>Subscribe for Updates</span>
                        <Send size={20} />
                      </div>
                    )}
                  </Button>
                  <p className="text-[10px] text-slate-400 text-center uppercase tracking-[0.2em] font-bold">
                    Join 50k+ gamers. Zero spam.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
