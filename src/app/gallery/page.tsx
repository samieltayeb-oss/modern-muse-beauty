"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";

export default function GalleryPage() {
  const images = [
    "/images/hero_portrait.jpg",
    "/images/kobido_hands.jpg",
    "/images/lymphatic_body.jpg",
    "/images/studio_atmosphere.jpg",
    "/images/gallery_one.jpg",
    "/images/gallery_two.jpg",
    "/images/glute_enhancement.jpg",
    "/images/abdomen_drainage.jpg",
    "/images/cellulite_reduction.jpg"
  ];

  useEffect(() => {
    gsap.fromTo(".fade-up", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1.5, stagger: 0.1, ease: "power4.out" }
    );
  }, []);

  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />

      {/* Massive Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 scale-105 fade-up">
          <Image 
            src="/images/gallery_two.jpg"
            alt="Gallery Hero"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <h1 className="relative z-20 font-serif text-[12vw] text-white tracking-tighter leading-none fade-up text-center mix-blend-overlay">
          Archive.
        </h1>
      </section>

      <section className="container mx-auto px-6 md:px-12 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {images.map((src, i) => (
            <div key={i} className="relative aspect-[3/4] w-full group overflow-hidden fade-up">
              <Image 
                src={src} 
                alt={`Gallery image ${i + 1}`} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-[0.16,1,0.3,1]"
              />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
