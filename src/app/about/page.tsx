"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";

export default function AboutPage() {
  useEffect(() => {
    gsap.fromTo(".fade-up", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1.5, stagger: 0.2, ease: "power4.out" }
    );
  }, []);

  return (
    <main className="relative min-h-screen bg-muse-ivory text-muse-ink">
      <Navbar />
      
      {/* Elegant Hero Section */}
      <section className="relative w-full pt-40 md:pt-48 pb-16 px-6 lg:px-24">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none fade-up text-center mb-16">
          The <span className="italic font-light">Muse</span>.
        </h1>
        <div className="relative w-full aspect-[21/9] overflow-hidden fade-up bg-muse-stone">
          <Image 
            src="/images/hero_about.jpg"
            alt="The Muse"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </section>

      {/* Extensive Copy Section */}
      <section className="container mx-auto px-6 md:px-12 pb-32 flex flex-col items-center">
        <div className="max-w-3xl text-center space-y-12 font-sans text-lg md:text-xl text-muse-ink/80 leading-[2.2] fade-up">
          <h3 className="text-xs tracking-[0.4em] uppercase text-muse-muted mb-12">Our Philosophy</h3>
          <p>
            Modern Muse Beauty is a sanctuary devoted to the art of transformation. We believe that true beauty is not merely aesthetic—it is a physiological response to deep, intentional care.
          </p>
          <p>
            Located in the heart of Calgary, Alberta, our studio specializes in holistic therapies that bridge the gap between ancient healing traditions and modern structural aesthetics. From the deeply rhythmic flow of Lymphatic Drainage to the precise, lifting strokes of the Kobido Japanese Facial Massage, every treatment is a meticulously choreographed sequence designed to restore your body’s natural harmony.
          </p>
          <p>
            We are not just an esthetics studio. We are a space to exhale. A place to disconnect from the noise and reconnect with your intrinsic vitality. Our approach is entirely non-invasive, focusing on stimulating the lymphatic system, boosting collagen production, and sculpting the body's natural contours.
          </p>
          <p className="font-serif text-4xl md:text-5xl italic text-black py-12">
            "Beauty is the physical manifestation of internal balance."
          </p>
          <p>
            As a specialized, female-only studio, we provide an intimate, fiercely protected environment where every detail—from the temperature of the linens to the acoustic design of the room—is curated for deep restoration. 
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
