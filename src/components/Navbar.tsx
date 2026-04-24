"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Target, Crosshair } from "lucide-react";
import { Button } from "./Button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Content", href: "/content" },
  { name: "Achievements", href: "/achievements" },
  { name: "Community", href: "/community" },
  { name: "Store", href: "/store" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-2xl border-b border-primary/10 shadow-[0_0_30px_rgba(14,165,233,0.05)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col -space-y-1 group relative">
          <div className="absolute -inset-2 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span className="relative text-2xl font-black leading-tight tracking-[0.1em] text-foreground group-hover:text-primary transition-colors">DMS</span>
          <span className="relative text-[10px] font-bold tracking-[0.4em] text-primary opacity-80 uppercase">Official</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative text-[12px] font-bold uppercase tracking-wider transition-all duration-300 group ${
                pathname === link.href ? "text-primary" : "text-foreground/50 hover:text-foreground"
              }`}
            >
              {pathname === link.href && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute -bottom-1.5 left-0 right-0 h-px bg-primary shadow-[0_0_8px_var(--glow-color)]"
                />
              )}
              {link.name}
            </Link>
          ))}
          <div className="flex items-center space-x-3 border-l border-white/10 pl-6">
            <Link href="/contact">
              <Button size="sm" className="px-5 rounded-lg font-bold uppercase tracking-widest text-[10px] gap-2">
                <Crosshair size={12} />
                Contact
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center border border-primary/30 rounded-lg text-primary hover:bg-primary/10 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Target size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-2xl border-b border-primary/10 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center space-x-3 py-3 px-4 rounded-lg text-sm font-bold uppercase tracking-wider transition-all ${
                      pathname === link.href
                        ? "text-primary bg-primary/10 border border-primary/20"
                        : "text-foreground/60 hover:text-foreground hover:bg-white/5"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <Target size={12} className="text-primary/50" />
                    <span>{link.name}</span>
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4 border-t border-white/5 mt-2">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full gap-2">
                    <Crosshair size={16} />
                    Initiate Contact
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
