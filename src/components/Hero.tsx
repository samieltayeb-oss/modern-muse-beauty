"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const title1Ref = useRef<HTMLHeadingElement>(null);
  const title2Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Wait for preloader
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        // Entry animation
        gsap.fromTo(
          [title1Ref.current, title2Ref.current],
          { y: "100%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 2, stagger: 0.1, ease: "power4.out" }
        );

        gsap.fromTo(
          imageWrapperRef.current,
          { width: "20%", height: "40vh" },
          { width: "35%", height: "60vh", duration: 2.5, ease: "power4.inOut" }
        );

        // Scroll animation: Massive image expansion
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
            pin: true,
          },
        });

        tl.to(imageWrapperRef.current, {
          width: "100vw",
          height: "100vh",
          ease: "none",
        }, 0)
        .to(imageRef.current, {
          scale: 1,
          ease: "none"
        }, 0)
        .to(title1Ref.current, { x: "-50vw", opacity: 0, ease: "none" }, 0)
        .to(title2Ref.current, { x: "50vw", opacity: 0, ease: "none" }, 0);

      }, containerRef);
      return () => ctx.revert();
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden bg-white flex flex-col items-center justify-center">
      
      {/* Typography Back layer */}
      <div className="absolute inset-0 z-0 flex flex-col items-center justify-center pointer-events-none px-6">
        <div className="overflow-hidden leading-[0.8] mb-4">
          <h1 ref={title1Ref} className="font-serif text-[20vw] tracking-tighter text-black uppercase text-center mix-blend-exclusion text-white">
            Modern
          </h1>
        </div>
        <div className="overflow-hidden leading-[0.8]">
          <h1 ref={title2Ref} className="font-serif text-[20vw] tracking-tighter text-black uppercase text-center mix-blend-exclusion text-white indent-[15vw]">
            Muse
          </h1>
        </div>
      </div>

      {/* Expanding Image Center layer */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <div ref={imageWrapperRef} className="relative w-[20%] h-[40vh] overflow-hidden will-change-transform">
          <Image
            ref={imageRef as any}
            src="/images/hero_portrait.jpg"
            alt="Serene Beauty Portrait"
            fill
            className="object-cover object-center scale-125 will-change-transform"
            priority
          />
        </div>
      </div>

    </section>
  );
}
