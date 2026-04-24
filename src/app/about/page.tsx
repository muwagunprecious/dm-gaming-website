import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";

export default function AboutPage() {
  const journeys = [
    { year: "2018", title: "The Beginning", description: "Started with a mobile phone and a dream. First gameplay clips shared online." },
    { year: "2020", title: "Breaking Through", description: "Reached 100K followers and won the first national CODM open tournament." },
    { year: "2022", title: "Elite Status", description: "Represented Africa in global championships. Joined a top-tier esports organization." },
    { year: "2024", title: "Legacy Building", description: "Expanding into education, community building, and personal branding." },
  ];

  return (
    <main className="min-h-screen flex flex-col pt-32">
      <Navbar />
      
      {/* Header */}
      <Section className="pb-12">
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight">The Story.</h1>
        <p className="mt-8 text-xl text-slate-600 max-w-2xl leading-relaxed">
          From a casual gamer in South Africa to the continental champion. DMS is not just a name, it's a standard of excellence.
        </p>
      </Section>

      {/* Narrative Section */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          <div className="space-y-8">
            <h2 className="text-3xl font-black text-primary">Beyond the Screen</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              DMS (David Mulindwa Ssemwogerere) has spent the last 6 years redefining what it means to be a professional gamer in Africa. Known for tactical brilliance and lightning reflexes, he has become the bridge between the African gaming community and the global stage.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              His mission extends beyond winning trophies. He's dedicated to empowering the next generation of African creators through mentorship and community initiatives.
            </p>
          </div>
          
          <div className="aspect-[3/4] bg-slate-100 rounded-[2.5rem] overflow-hidden relative shadow-xl">
             <Image 
                src="/images/about-dms.jpg"
                alt="DMS Interview"
                fill
                className="object-cover"
             />
          </div>
        </div>
      </Section>

      {/* Journey Timeline */}
      <Section className="bg-slate-50/50">
        <h2 className="text-3xl font-black text-center mb-20 text-slate-900 uppercase tracking-widest">My Journey</h2>
        <div className="relative border-l border-slate-200 ml-6 md:ml-0 md:border-l-0 md:grid md:grid-cols-4 md:gap-8 space-y-12 md:space-y-0">
          {journeys.map((item) => (
            <div key={item.year} className="relative md:text-center pl-8 md:pl-0">
              <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary -translate-x-1/2 md:hidden"></div>
              <div className="hidden md:block w-4 h-4 rounded-full bg-primary mx-auto mb-6"></div>
              <p className="text-primary font-black text-2xl mb-2">{item.year}</p>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm">{item.description}</p>
            </div>
          ))}
          {/* Connector Line for Desktop */}
          <div className="absolute top-2 left-0 right-0 h-[2px] bg-slate-200 -z-10 hidden md:block"></div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
