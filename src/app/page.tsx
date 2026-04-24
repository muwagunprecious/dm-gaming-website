import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import FeaturedVideo from "@/components/FeaturedVideo";
import UpcomingStream from "@/components/UpcomingStream";
import Newsletter from "@/components/Newsletter";
import Socials from "@/components/Socials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <FeaturedVideo />
      <UpcomingStream />
      <Newsletter />
      <Socials />
      <Footer />
    </main>
  );
}
