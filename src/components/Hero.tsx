"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const modernRef = useRef<HTMLDivElement>(null);
  const museRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro Animation
      gsap.fromTo(
        imageRef.current,
        { scale: 1.1, opacity: 0, filter: "blur(10px)" },
        { scale: 1, opacity: 1, filter: "blur(0px)", duration: 2.5, ease: "power3.out" }
      );

      gsap.fromTo(
        [modernRef.current, museRef.current],
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, stagger: 0.2, ease: "power4.out", delay: 0.5 }
      );

      // Scroll Animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      tl.to(imageRef.current, { y: 150, scale: 1.05, ease: "none" }, 0)
        .to(modernRef.current, { y: -100, opacity: 0.2, ease: "none" }, 0)
        .to(museRef.current, { y: 100, opacity: 0.2, ease: "none" }, 0);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden bg-muse-ivory flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <div ref={imageRef} className="relative w-full h-full w-[80%] md:w-[60%] lg:w-[45%] mx-auto h-[70vh] md:h-[80vh] mt-[10vh]">
          <Image
            src="/images/hero_portrait.jpg"
            alt="Serene Beauty Portrait"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>
      
      <div className="relative z-10 w-full flex flex-col items-center justify-center pointer-events-none mix-blend-difference">
        <div className="overflow-hidden leading-none">
          <h1 ref={modernRef} className="font-serif text-[15vw] md:text-[12vw] tracking-tight text-white uppercase text-center block" style={{ textShadow: "0 4px 24px rgba(0,0,0,0.1)" }}>
            Modern
          </h1>
        </div>
        <div className="overflow-hidden leading-none -mt-4 md:-mt-10">
          <h1 ref={museRef} className="font-serif text-[15vw] md:text-[12vw] tracking-tight text-white uppercase text-center block" style={{ textShadow: "0 4px 24px rgba(0,0,0,0.1)" }}>
            Muse
          </h1>
        </div>
      </div>
    </section>
  );
}
