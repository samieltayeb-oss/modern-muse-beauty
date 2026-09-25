"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Footer() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    const text = textRef.current;
    if (!button || !text) return;

    const xTo = gsap.quickTo(text, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
    const yTo = gsap.quickTo(text, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = button.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x * 0.3);
      yTo(y * 0.3);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    button.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mousemove", handleMouseMove);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <footer className="w-full bg-black text-white py-32 md:py-48 px-6 md:px-12 flex flex-col items-center justify-center text-center overflow-hidden">
      <h2 className="font-serif text-6xl md:text-8xl lg:text-[10rem] mb-24 tracking-tighter leading-[0.9]">
        Begin your <br/> transformation.
      </h2>
      
      <a 
        href="https://modern-muse-beauty.square.site/"
        target="_blank"
        rel="noreferrer"
        ref={buttonRef as any}
        className="group relative flex items-center justify-center w-48 h-48 md:w-72 md:h-72 rounded-full border border-white/20 hover:border-white transition-colors duration-700 mb-40"
      >
        <span ref={textRef} className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-white pointer-events-none">
          Book Now
        </span>
      </a>

      <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-end border-t border-white/10 pt-16 text-[10px] md:text-xs font-sans tracking-[0.2em] text-white/40 uppercase">
        <div className="mb-8 md:mb-0 text-center md:text-left leading-loose">
          <p>909 5 Ave SW</p>
          <p>Calgary, AB T2P 3G5</p>
        </div>
        <div className="mb-8 md:mb-0 flex flex-col md:flex-row gap-4 md:gap-12 text-center">
          <a href="https://www.instagram.com/modernmusebeauty_yyc" target="_blank" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
        <div>
          <p>&copy; {new Date().getFullYear()} Modern Muse Beauty</p>
        </div>
      </div>
    </footer>
  );
}
