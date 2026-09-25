import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function GalleryPage() {
  const images = [
    "/images/hero_portrait.jpg",
    "/images/kobido_hands.jpg",
    "/images/lymphatic_body.jpg",
    "/images/studio_atmosphere.jpg",
  ];

  return (
    <main className="relative min-h-screen selection:bg-muse-nude selection:text-muse-ink pt-32">
      <Navbar />
      
      <section className="container mx-auto px-6 md:px-12 py-24">
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl tracking-tight mb-8">
          Transformations.
        </h1>
        <p className="font-sans text-lg text-muse-muted max-w-xl mb-24 leading-relaxed">
          The art of becoming. A curated look into the studio, our techniques, and the radiant results of our holistic therapies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {images.map((src, idx) => (
            <div key={idx} className={`relative w-full overflow-hidden ${idx % 3 === 0 ? 'aspect-square' : 'aspect-[3/4]'}`}>
              <Image 
                src={src} 
                alt={`Gallery image ${idx + 1}`} 
                fill 
                className="object-cover" 
              />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
