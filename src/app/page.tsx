import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Services from "@/components/Services";
import Spotlight from "@/components/Spotlight";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Preloader />
      <Navbar />
      <Hero />
      <Manifesto />
      <Services />
      <Spotlight />
      <Footer />
    </main>
  );
}
