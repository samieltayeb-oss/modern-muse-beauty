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
    <footer className="w-full bg-muse-ink text-muse-ivory py-32 px-6 md:px-12 flex flex-col items-center justify-center text-center overflow-hidden">
      <h2 className="font-serif text-5xl md:text-8xl lg:text-9xl mb-16 tracking-tight">
        Begin your <br/> transformation.
      </h2>
      
      <button 
        ref={buttonRef}
        className="group relative flex items-center justify-center w-48 h-48 md:w-64 md:h-64 rounded-full border border-muse-stone/30 hover:border-muse-nude transition-colors duration-500 mb-32"
      >
        <span ref={textRef} className="font-sans text-xs md:text-sm tracking-[0.2em] uppercase text-muse-nude pointer-events-none">
          Book Now
        </span>
      </button>

      <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-end border-t border-muse-stone/20 pt-12 text-xs font-sans tracking-widest text-muse-muted uppercase">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <p>909 5 Ave SW</p>
          <p>Calgary, AB T2P 3G5</p>
        </div>
        <div className="mb-6 md:mb-0 flex gap-8">
          <a href="#" className="hover:text-muse-nude transition-colors">Instagram</a>
          <a href="#" className="hover:text-muse-nude transition-colors">Contact</a>
        </div>
        <div>
          <p>&copy; {new Date().getFullYear()} Modern Muse Beauty</p>
        </div>
      </div>
    </footer>
  );
}
