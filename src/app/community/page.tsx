import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import { MessageSquare, Users, Globe, Zap } from "lucide-react";
import { Button } from "@/components/Button";

const benefits = [
  { icon: MessageSquare, title: "Private Discord", description: "Direct access to DMS and the pro team for tips and chats." },
  { icon: Users, title: "Weekly Scrims", description: "Participate in organized community tournaments and practice sessions." },
  { icon: Globe, title: "Global Network", description: "Connect with thousands of gamers from across the African continent." },
  { icon: Zap, title: "Pro Coaching", description: "Monthly live sessions breaking down the meta and pro strategies." },
];

export default function CommunityPage() {
  return (
    <main className="min-h-screen flex flex-col pt-32">
      <Navbar />
      
      <Section className="pb-12 text-center md:text-left">
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight">The Squad.</h1>
        <p className="mt-8 text-xl text-slate-600 max-w-2xl leading-relaxed">
          Gaming is better together. Join the fastest growing esports community in Africa and level up your game with DMS.
        </p>
      </Section>

      {/* Hero CTA */}
      <Section className="pt-0">
        <div className="bg-indigo-600 rounded-[3rem] p-12 md:p-24 text-white text-center space-y-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-500/20 to-transparent"></div>
          <h2 className="text-4xl md:text-6xl font-black relative z-10">Join the Discord Server</h2>
          <p className="text-xl text-white/80 max-w-xl mx-auto relative z-10">
            Over 20,000 members are already waiting for you. Get the latest news, find teammates, and talk shop.
          </p>
          <div className="relative z-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-slate-100 border-none px-12">
              Join Discord Now
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-12">
              Learn More
            </Button>
          </div>
        </div>
      </Section>

      {/* Benefits Grid */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item) => (
            <div key={item.title} className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600">
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Highlights */}
      <Section className="bg-slate-50/50">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Community Highlights</h2>
            <p className="text-slate-500 max-w-md">Our fans are talented. Check out some of the best clips and art from the squad.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="aspect-square bg-slate-200 rounded-2xl overflow-hidden hover:scale-95 transition-transform duration-500 group relative">
               <div className="w-full h-full bg-slate-300"></div>
            </div>
          ))}
        </div>
      </Section>

      <Footer />
    </main>
  );
}
