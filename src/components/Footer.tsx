import React from "react";
import Link from "next/link";
import { Play, Camera, Send, MessageSquare, Music, Crosshair, Radar } from "lucide-react";

const socials = [
  { icon: Play, href: "#", label: "YouTube" },
  { icon: Camera, href: "#", label: "Instagram" },
  { icon: Send, href: "#", label: "Twitter" },
  { icon: Music, href: "#", label: "TikTok" },
  { icon: MessageSquare, href: "#", label: "Discord" },
];

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Content", href: "/content" },
  { name: "Achievements", href: "/achievements" },
  { name: "Community", href: "/community" },
  { name: "Store", href: "/store" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#020408] border-t border-primary/10 py-20 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      {/* Radar accent */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] border border-primary/10 rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none">
        <div className="absolute inset-0 radar-sweep opacity-10"></div>
        <div className="absolute inset-[30px] border border-primary/10 rounded-full"></div>
        <div className="absolute inset-[60px] border border-primary/10 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 pb-12 border-b border-white/5">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex flex-col -space-y-1 group w-fit">
              <span className="text-3xl font-black leading-tight tracking-[0.1em] text-foreground group-hover:text-primary transition-colors">DMS</span>
              <span className="text-[10px] font-bold tracking-[0.4em] text-primary opacity-80 uppercase">Official</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Africa's elite gaming force. Creating content, winning titles, and building a relentless community.
            </p>
            <div className="flex items-center space-x-1">
              <Crosshair size={12} className="text-primary" />
              <span className="text-[10px] font-bold text-primary/60 uppercase tracking-widest">Target Acquired</span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="space-y-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-6">Navigation</p>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors font-medium tracking-wide"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Socials */}
          <div className="space-y-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Connect</p>
            <div className="grid grid-cols-3 gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="group flex items-center justify-center w-12 h-12 bg-card border border-white/5 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 rounded-xl hover:shadow-[0_0_20px_var(--glow-color)]"
                >
                  <Icon size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground text-xs">
              <Radar size={14} className="text-primary animate-pulse" />
              <span className="font-medium">500K+ across all platforms</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-bold">
          <p>© {currentYear} DMS OFFICIAL. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
