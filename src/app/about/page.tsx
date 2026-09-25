import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen selection:bg-muse-nude selection:text-muse-ink pt-32">
      <Navbar />
      
      <section className="container mx-auto px-6 md:px-12 py-24 flex flex-col items-center">
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl tracking-tight mb-16 text-center">
          The Muse.
        </h1>
        
        <div className="w-full max-w-4xl relative aspect-video mb-24">
          <Image 
            src="/images/studio_atmosphere.jpg"
            alt="The Studio"
            fill
            className="object-cover"
          />
        </div>

        <div className="max-w-2xl text-center space-y-8 font-sans text-lg text-muse-muted leading-relaxed">
          <p>
            Modern Muse Beauty is a holistic wellness studio specializing in lymphatic drainage, Kobido Japanese facials, and cellulite reduction therapy.
          </p>
          <p>
            We believe that beauty is an act of deep care. By blending traditional, ancient techniques with modern body sculpting methods, we create an environment that enhances circulation, promotes natural healing, and reveals a more sculpted, radiant you.
          </p>
          <p>
            As a specialized esthetician, our practice goes beyond surface-level treatments. We offer a space to exhale, to reconnect with your body, and to engage in the art of becoming.
          </p>
        </div>

      </section>

      <Footer />
    </main>
  );
}
