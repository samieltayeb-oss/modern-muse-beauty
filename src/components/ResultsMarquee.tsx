"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const row1 = [
  "/images/ig_aesthetic_1.jpg",
  "/images/ig_aesthetic_2.jpg",
  "/images/ig_aesthetic_3.jpg",
  "/images/ig_aesthetic_4.jpg",
  "/images/ig_aesthetic_5.jpg",
];

const row2 = [
  "/images/ig_aesthetic_6.jpg",
  "/images/ig_aesthetic_7.jpg",
  "/images/ig_aesthetic_8.jpg",
  "/images/ig_aesthetic_9.jpg",
  "/images/ig_aesthetic_10.jpg",
];

export default function ResultsMarquee() {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Continuous horizontal scroll for Row 1
      gsap.to(".marquee-row-1", {
        xPercent: -50,
        ease: "none",
        duration: 40,
        repeat: -1,
      });

      // Continuous horizontal scroll for Row 2 (opposite direction)
      gsap.set(".marquee-row-2", { xPercent: -50 });
      gsap.to(".marquee-row-2", {
        xPercent: 0,
        ease: "none",
        duration: 45,
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full bg-muse-stone py-32 overflow-hidden flex flex-col gap-8">
      
      <div className="container mx-auto px-6 lg:px-24 mb-16 text-center">
        <h3 className="font-sans text-xs tracking-[0.4em] uppercase text-muse-muted mb-4">The Archive</h3>
        <h2 className="font-serif text-4xl lg:text-5xl tracking-tight text-muse-ink">Real Results.</h2>
      </div>

      {/* Row 1 */}
      <div className="relative w-full flex overflow-hidden" ref={row1Ref}>
        <div className="marquee-row-1 flex w-max gap-8 px-4">
          {[...row1, ...row1].map((src, i) => (
            <div key={i} className="relative w-[60vw] md:w-[30vw] lg:w-[20vw] aspect-[4/5] flex-shrink-0 overflow-hidden bg-muse-ivory">
              <Image 
                src={src} 
                alt="Studio Archive" 
                fill 
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 */}
      <div className="relative w-full flex overflow-hidden" ref={row2Ref}>
        <div className="marquee-row-2 flex w-max gap-8 px-4">
          {[...row2, ...row2].map((src, i) => (
            <div key={i} className="relative w-[60vw] md:w-[30vw] lg:w-[20vw] aspect-[4/5] flex-shrink-0 overflow-hidden bg-muse-ivory">
              <Image 
                src={src} 
                alt="Studio Archive" 
                fill 
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
