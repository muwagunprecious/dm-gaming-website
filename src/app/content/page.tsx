"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import { Play, Filter } from "lucide-react";
import { motion } from "framer-motion";

const categories = ["All", "Gameplay", "Tactics", "Vlogs", "Tournaments"];

const videos = [
  { id: 1, title: "Pro Rush Tactics - S3", category: "Tactics", views: "45K", date: "2 days ago" },
  { id: 2, title: "Winning the ZA Open", category: "Tournaments", views: "120K", date: "1 week ago" },
  { id: 3, title: "Day in the Life", category: "Vlogs", views: "30K", date: "2 weeks ago" },
  { id: 4, title: "CODM Sniping Guide", category: "Gameplay", views: "88K", date: "3 weeks ago" },
  { id: 5, title: "Tournament Prep Secret", category: "Tactics", views: "52K", date: "1 month ago" },
  { id: 6, title: "Season Recap - DMS", category: "Gameplay", views: "200K", date: "2 months ago" },
];

export default function ContentPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredVideos = videos.filter(
    (v) => activeFilter === "All" || v.category === activeFilter
  );

  return (
    <main className="min-h-screen flex flex-col pt-32">
      <Navbar />
      
      <Section className="pb-8">
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight">Content.</h1>
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <div className="flex items-center space-x-2 text-slate-400 mr-4">
            <Filter size={18} />
            <span className="text-sm font-bold uppercase tracking-widest">Filter:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                activeFilter === cat 
                  ? "bg-primary text-white shadow-lg shadow-primary/20" 
                  : "bg-slate-100 text-slate-500 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video) => (
            <motion.div
              layout
              key={video.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-video bg-slate-200 rounded-3xl overflow-hidden relative mb-4 shadow-sm group-hover:shadow-xl transition-all duration-500">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-lg">
                    <Play size={24} fill="currentColor" />
                  </div>
                </div>
                {/* Thumbnail placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300"></div>
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-black uppercase tracking-widest text-slate-800">
                  {video.category}
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">{video.title}</h3>
              <div className="mt-1 flex items-center space-x-4 text-xs font-bold uppercase tracking-widest text-slate-400">
                <span>{video.views} Views</span>
                <span className="w-1 h-1 rounded-full bg-slate-200"></span>
                <span>{video.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Footer />
    </main>
  );
}
