"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Spotlight() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: imageRef.current,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full relative bg-muse-ivory text-muse-ink">
      <div className="flex flex-col md:flex-row w-full min-h-[200vh]">
        
        {/* Pinned Image Side */}
        <div className="w-full md:w-1/2 h-screen relative" ref={imageRef}>
          <Image
            src="/images/kobido_hands.jpg"
            alt="Kobido Facial Detail"
            fill
            className="object-cover"
          />
        </div>

        {/* Scrolling Text Side */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-24 py-32 md:py-0">
          <div className="max-w-md h-screen flex flex-col justify-center">
            <h3 className="font-sans text-xs tracking-widest uppercase text-muse-accent mb-6">Signature Treatment</h3>
            <h2 className="font-serif text-5xl md:text-7xl mb-8 leading-tight">Kobido <br/> Japanese <br/> Facial</h2>
            <p className="font-sans text-base leading-relaxed text-muse-muted mb-12">
              Known as the “ancient way of beauty,” this massage stimulates circulation, boosts collagen production, and promotes lymphatic drainage, leaving the face glowing, sculpted, and refreshed.
            </p>
            <button className="self-start pb-2 border-b border-muse-ink font-sans text-xs tracking-widest uppercase hover:text-muse-accent hover:border-muse-accent transition-colors">
              Book this treatment
            </button>
          </div>
          
          <div className="max-w-md h-screen flex flex-col justify-center">
            <h3 className="font-sans text-xs tracking-widest uppercase text-muse-accent mb-6">The Studio</h3>
            <h2 className="font-serif text-5xl md:text-7xl mb-8 leading-tight">A space <br/> to exhale.</h2>
            <p className="font-sans text-base leading-relaxed text-muse-muted mb-12">
              Step into a serene, architectural wellness studio designed to quiet the mind. Every detail, from the warm stone textures to the premium linens, is curated for deep restoration.
            </p>
            <div className="relative w-full aspect-[4/3] mt-8">
              <Image src="/images/studio_atmosphere.jpg" alt="Studio" fill className="object-cover" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
