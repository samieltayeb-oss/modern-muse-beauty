"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import MotionGraphic from "./MotionGraphic";

export default function Manifesto() {
  const textRef = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [textRef.current, pRef.current],
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1.5,
          ease: "power4.out",
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
    <section ref={containerRef} className="relative w-full py-40 md:py-64 bg-white flex flex-col items-center justify-center px-6 border-b border-black/5 overflow-hidden">
      
      {/* Animated Motion Graphic Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <MotionGraphic />
      </div>

      <div className="max-w-5xl text-center relative z-10">
        <h2 ref={textRef} className="font-serif text-5xl md:text-7xl lg:text-9xl tracking-tight leading-[1.1] text-black">
          Beauty, <br />
          <span className="italic text-black/60 font-light">considered.</span>
        </h2>
        <p ref={pRef} className="mt-16 text-xs md:text-sm font-sans tracking-[0.3em] uppercase text-black/40 max-w-lg mx-auto leading-loose">
          A holistic wellness studio specializing in lymphatic drainage and Kobido Japanese facials.
        </p>
      </div>
    </section>
  );
}
