import React from "react";
import Link from "next/link";
import { Play, Camera, Send, MessageSquare, Music } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 text-center md:text-left">
          <div className="space-y-6">
            <Link href="/" className="flex flex-col -space-y-1">
              <span className="text-2xl font-black leading-tight tracking-[0.1em] text-foreground">DMS</span>
              <span className="text-[10px] font-bold tracking-[0.4em] text-primary opacity-80 uppercase">Official</span>
            </Link>
            <p className="text-slate-500 max-w-xs text-sm leading-relaxed">
              Africa's elite gaming force. Creating content, winning titles, and building a community.
            </p>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-slate-400 hover:text-primary transition-colors">
              <Play size={20} />
            </a>
            <a href="#" className="text-slate-400 hover:text-primary transition-colors">
              <Camera size={20} />
            </a>
            <a href="#" className="text-slate-400 hover:text-primary transition-colors">
              <Send size={20} />
            </a>
            <a href="#" className="text-slate-400 hover:text-primary transition-colors">
              <Music size={20} />
            </a>
            <a href="#" className="text-slate-400 hover:text-primary transition-colors">
              <MessageSquare size={20} />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] text-slate-400 uppercase tracking-[0.2em] font-bold">
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
