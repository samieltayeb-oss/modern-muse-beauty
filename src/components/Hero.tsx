"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLHeadingElement>(null);
  const title2Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro Animation
      gsap.fromTo(
        imageRef.current,
        { scale: 1.1, opacity: 0, clipPath: "inset(10% 10% 10% 10%)" },
        { scale: 1, opacity: 1, clipPath: "inset(0% 0% 0% 0%)", duration: 2.5, ease: "power4.inOut" }
      );

      gsap.fromTo(
        [title1Ref.current, title2Ref.current],
        { y: "100%" },
        { y: "0%", duration: 2, stagger: 0.1, ease: "power4.out", delay: 1.5 }
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

      tl.to(imageRef.current, { y: "20%", scale: 1.05, ease: "none" }, 0)
        .to(title1Ref.current, { y: "-50%", opacity: 0, ease: "none" }, 0)
        .to(title2Ref.current, { y: "50%", opacity: 0, ease: "none" }, 0);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-[100vh] md:h-[110vh] overflow-hidden bg-white flex items-center justify-center pt-24">
      
      {/* Background/Center Image */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div ref={imageRef} className="relative w-full h-[70vh] md:w-[60vw] md:h-[85vh] overflow-hidden">
          <Image
            src="/images/hero_portrait.jpg"
            alt="Serene Beauty Portrait"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </div>
      
      {/* Typography Overlay */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center pointer-events-none px-6">
        <div className="overflow-hidden leading-[0.8] mb-2 md:mb-0">
          <h1 ref={title1Ref} className="font-serif text-[18vw] tracking-tighter text-black uppercase text-center mix-blend-normal">
            Modern
          </h1>
        </div>
        <div className="overflow-hidden leading-[0.8]">
          <h1 ref={title2Ref} className="font-serif text-[18vw] tracking-tighter text-black uppercase text-center mix-blend-normal indent-[10vw]">
            Muse
          </h1>
        </div>
      </div>

    </section>
  );
}
