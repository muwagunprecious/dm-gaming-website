import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import { Trophy, Award, Target, Star } from "lucide-react";

const achievements = [
  {
    title: "CODM African Championship",
    rank: "1st Place",
    year: "2024",
    icon: Trophy,
    details: "Undefeated run across the entire bracket, defeating 32 teams from 10 countries."
  },
  {
    title: "Global Mobile Open",
    rank: "Top 8 Overall",
    year: "2023",
    icon: Target,
    details: "First African player to reach the final stage of the Global Mobile Open in Japan."
  },
  {
    title: "Tournament of Kings",
    rank: "MVP & Winner",
    year: "2022",
    icon: Star,
    details: "Led the squad to victory while maintaining the highest K/D ratio in the tournament."
  },
  {
    title: "National Esports Finals",
    rank: "1st Place",
    year: "2021",
    icon: Award,
    details: "Back-to-back national champion in the competitive mobile shooter category."
  },
];

export default function AchievementsPage() {
  return (
    <main className="min-h-screen flex flex-col pt-32">
      <Navbar />
      
      <Section className="pb-12">
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight">Hall of Fame.</h1>
        <p className="mt-8 text-xl text-slate-600 max-w-2xl leading-relaxed">
          The records that define a career. Every win is a step towards the global summit of gaming excellence.
        </p>
      </Section>

      <Section className="bg-slate-50/50">
        <div className="space-y-12 max-w-4xl mx-auto">
          {achievements.map((item, index) => (
            <div key={item.title} className="group bg-white p-8 md:p-12 rounded-[3rem] shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-start md:items-center hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <div className="w-20 h-20 rounded-3xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                <item.icon size={40} strokeWidth={1.5} />
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                   <h2 className="text-2xl font-black text-slate-900">{item.title}</h2>
                   <span className="px-4 py-1 bg-slate-100 rounded-full text-xs font-black uppercase tracking-widest text-primary">{item.year}</span>
                </div>
                <p className="text-xl font-bold text-accent uppercase tracking-tight">{item.rank}</p>
                <p className="text-slate-500 leading-relaxed max-w-2xl">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Gallery/Moments Section */}
      <Section>
        <h2 className="text-3xl font-black text-slate-900 mb-12 uppercase tracking-widest">Memorable Moments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl group">
              <Image 
                src="/images/achievement-dms.png"
                alt="DMS Champion Trophy"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                 <p className="text-white font-bold">Winning the Africa Cup 2025</p>
              </div>
           </div>
           <div className="bg-slate-900 rounded-[3rem] p-12 flex flex-col justify-center text-white space-y-6">
              <Trophy size={64} className="text-primary" />
              <h3 className="text-4xl font-black">The Grind Doesn't Stop.</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                "Every trophy is just a reminder of the hours spent practicing, the losses that taught me resilience, and the community that stood by me."
              </p>
           </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
