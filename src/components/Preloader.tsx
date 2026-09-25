"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Preloader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const wipeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Show text
      tl.fromTo(textRef.current, 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      )
      // Hold
      .to(textRef.current, { opacity: 0, y: -20, duration: 0.8, ease: "power3.in", delay: 0.5 })
      // Wipe up
      .to(wipeRef.current, { height: "0%", duration: 1.2, ease: "power4.inOut" })
      // Hide container
      .set(containerRef.current, { display: "none" });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none">
      <div ref={wipeRef} className="absolute bottom-0 w-full h-full bg-black"></div>
      <div ref={textRef} className="relative z-10 font-serif text-white text-3xl md:text-5xl italic tracking-wider">
        Modern Muse
      </div>
    </div>
  );
}
