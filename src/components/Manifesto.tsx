"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Manifesto() {
  const textRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "center center",
            scrub: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full py-40 md:py-64 bg-muse-ivory flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        <h2 ref={textRef} className="font-serif text-4xl md:text-6xl lg:text-8xl tracking-tight leading-tight text-muse-ink">
          Beauty, <br className="hidden md:block" />
          <span className="italic text-muse-accent">considered.</span>
        </h2>
        <p className="mt-12 text-sm md:text-base font-sans tracking-widest uppercase text-muse-muted max-w-lg mx-auto leading-relaxed">
          A holistic wellness studio specializing in lymphatic drainage and kobido japanese facials.
        </p>
      </div>
    </section>
  );
}
