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
    <section ref={containerRef} className="w-full relative bg-white text-black">
      <div className="flex flex-col md:flex-row w-full min-h-[200vh]">
        
        {/* Pinned Image Side */}
        <div className="w-full md:w-1/2 h-screen relative p-6 md:p-12 lg:p-24" ref={imageRef}>
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src="/images/kobido_hands.jpg"
              alt="Kobido Facial Detail"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Scrolling Text Side */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-16 lg:px-24 py-32 md:py-0">
          <div className="max-w-xl h-screen flex flex-col justify-center">
            <h3 className="font-sans text-xs tracking-[0.4em] uppercase text-black/40 mb-12">Signature Treatment</h3>
            <h2 className="font-serif text-6xl md:text-[5.5rem] mb-12 leading-[1.0] tracking-tighter">Kobido <br/> Japanese <br/> Facial</h2>
            <p className="font-sans text-sm leading-[2.5] text-black/60 mb-16 tracking-widest uppercase">
              Known as the “ancient way of beauty,” this massage stimulates circulation, boosts collagen production, and promotes lymphatic drainage, leaving the face glowing, sculpted, and refreshed.
            </p>
            <button className="self-start pb-4 border-b border-black/20 hover:border-black font-sans text-xs tracking-[0.3em] uppercase transition-colors">
              Book this treatment
            </button>
          </div>
          
          <div className="max-w-xl h-screen flex flex-col justify-center">
            <h3 className="font-sans text-xs tracking-[0.4em] uppercase text-black/40 mb-12">The Studio</h3>
            <h2 className="font-serif text-6xl md:text-[5.5rem] mb-12 leading-[1.0] tracking-tighter">A space <br/> to exhale.</h2>
            <p className="font-sans text-sm leading-[2.5] text-black/60 mb-16 tracking-widest uppercase">
              Step into a serene, architectural wellness studio designed to quiet the mind. Every detail, from the warm stone textures to the premium linens, is curated for deep restoration.
            </p>
            <div className="relative w-full aspect-[4/3] mt-8 overflow-hidden group">
              <Image src="/images/studio_atmosphere.jpg" alt="Studio" fill className="object-cover group-hover:scale-110 transition-transform duration-[3s] ease-[0.16,1,0.3,1]" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
