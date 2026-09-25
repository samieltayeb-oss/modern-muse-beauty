"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Extremely subtle, elegant fade-in
      gsap.fromTo(
        textRef.current?.children || [],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, stagger: 0.2, ease: "power3.out", delay: 0.2 }
      );

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 1.05 },
        { opacity: 1, scale: 1, duration: 2.5, ease: "power3.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-between pt-32 lg:pt-0 px-6 lg:px-24">
      
      {/* Left Typography */}
      <div ref={textRef} className="w-full lg:w-1/2 flex flex-col justify-center z-10 space-y-8 pr-0 lg:pr-12 mb-16 lg:mb-0">
        <h3 className="font-sans text-xs tracking-[0.4em] uppercase text-muse-muted">
          Holistic Wellness Studio
        </h3>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] tracking-tight text-muse-ink">
          The art of <br/>
          <span className="italic font-light">becoming.</span>
        </h1>
        <p className="font-sans text-sm leading-loose text-muse-muted max-w-md pt-4">
          A sanctuary devoted to deep structural aesthetics. We bridge ancient healing traditions with modern, results-driven techniques like Kobido and Lymphatic Drainage.
        </p>
        <div className="pt-8">
          <a href="https://modern-muse-beauty.square.site/" target="_blank" rel="noreferrer" className="inline-block pb-3 border-b border-muse-line hover:border-muse-ink transition-colors font-sans text-xs tracking-[0.3em] uppercase">
            Book an appointment
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full lg:w-1/2 h-[60vh] lg:h-[80vh] relative z-0 flex justify-end">
        <div ref={imageRef} className="relative w-full lg:w-[90%] h-full overflow-hidden">
          <Image
            src="/images/hero_portrait.jpg"
            alt="Modern Muse Hero Portrait"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>

    </section>
  );
}
