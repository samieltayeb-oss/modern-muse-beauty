"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MotionGraphic from "./MotionGraphic";

gsap.registerPlugin(ScrollTrigger);

export default function Manifesto() {
  const textRef = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [textRef.current, pRef.current],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full py-40 md:py-56 bg-muse-stone flex flex-col items-center justify-center px-6 overflow-hidden">
      
      {/* Subtle background graphic */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10 mix-blend-multiply">
        <MotionGraphic />
      </div>

      <div className="max-w-4xl text-center relative z-10">
        <h2 ref={textRef} className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[1.2] text-muse-ink">
          Lymphatic Drainage <br/>
          <span className="italic font-light">&amp; Kobido Facials.</span>
        </h2>
        <div ref={pRef} className="mt-12 flex flex-col items-center gap-4">
          <p className="text-xs font-sans tracking-[0.3em] uppercase text-muse-ink border border-muse-line px-6 py-2 rounded-full">
            YYC 📍
          </p>
          <p className="text-sm font-sans tracking-widest uppercase text-muse-muted max-w-lg mx-auto leading-loose mt-4">
            Lymphatic Drainage Specialist ✨ <br/>
            Esthetician (Not RMT) <br/>
            Educating beauty & bodywork professionals in advanced techniques 🤍
          </p>
        </div>
      </div>
    </section>
  );
}
