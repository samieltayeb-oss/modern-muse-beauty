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
    <main className="relative min-h-screen bg-muse-ivory text-muse-ink">
      <Navbar />

      {/* Elegant Hero Section */}
      <section className="relative w-full pt-40 md:pt-48 pb-16 px-6 lg:px-24">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none fade-up text-center mb-16">
          Archive.
        </h1>
        <div className="relative w-full aspect-[21/9] overflow-hidden fade-up bg-muse-stone">
          <Image 
            src="/images/gallery_two.jpg"
            alt="Gallery Hero"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </section>

      <section className="container mx-auto px-6 lg:px-24 py-16 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {images.map((src, i) => (
            <div key={i} className="relative aspect-[3/4] w-full group overflow-hidden fade-up bg-muse-stone">
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
