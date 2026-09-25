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
    <section ref={containerRef} className="w-full relative bg-muse-ivory text-muse-ink border-t border-muse-line">
      <div className="flex flex-col lg:flex-row-reverse w-full min-h-[200vh]">
        
        {/* Pinned Image Side */}
        <div className="w-full lg:w-1/2 h-screen relative p-6 lg:p-24" ref={imageRef}>
          <div className="relative w-full h-full overflow-hidden bg-muse-stone">
            <Image
              src="/images/spotlight_kobido.jpg"
              alt="Kobido Facial Detail"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Scrolling Text Side */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 lg:px-24 py-32 lg:py-0">
          
          <div className="max-w-xl h-screen flex flex-col justify-center">
            <h3 className="font-sans text-xs tracking-[0.4em] uppercase text-muse-muted mb-12">Signature Treatment</h3>
            <h2 className="font-serif text-5xl lg:text-[4.5rem] mb-10 leading-[1.1] tracking-tight">Kobido <br/> Japanese <br/> Facial</h2>
            <p className="font-sans text-sm leading-[2.5] text-muse-muted mb-16 tracking-widest uppercase">
              Known as the “ancient way of beauty,” this massage stimulates circulation, boosts collagen production, and promotes lymphatic drainage, leaving the face glowing, sculpted, and refreshed.
            </p>
            <a href="https://modern-muse-beauty.square.site/" target="_blank" rel="noreferrer" className="self-start pb-4 border-b border-muse-line hover:border-muse-ink font-sans text-xs tracking-[0.3em] uppercase transition-colors">
              Book this treatment
            </a>
          </div>
          
          <div className="max-w-xl h-screen flex flex-col justify-center">
            <h3 className="font-sans text-xs tracking-[0.4em] uppercase text-muse-muted mb-12">The Studio</h3>
            <h2 className="font-serif text-5xl lg:text-[4.5rem] mb-10 leading-[1.1] tracking-tight">A space <br/> to exhale.</h2>
            <p className="font-sans text-sm leading-[2.5] text-muse-muted mb-16 tracking-widest uppercase">
              Step into a serene, architectural wellness studio designed to quiet the mind. Every detail, from the warm stone textures to the premium linens, is curated for deep restoration.
            </p>
            <div className="relative w-full aspect-[4/3] mt-8 overflow-hidden group">
              <Image src="/images/spotlight_studio.jpg" alt="Studio" fill className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-[0.16,1,0.3,1]" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
