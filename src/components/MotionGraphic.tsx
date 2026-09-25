"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function MotionGraphic() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const paths = svgRef.current.querySelectorAll("path");
    
    // Abstract continuous flowing line animation
    gsap.fromTo(paths, 
      { strokeDasharray: 2000, strokeDashoffset: 2000 },
      { 
        strokeDashoffset: 0, 
        duration: 8, 
        ease: "power2.inOut", 
        stagger: 0.5,
        repeat: -1,
        yoyo: true
      }
    );

    // Subtle floating effect
    gsap.to(svgRef.current, {
      y: 20,
      rotation: 2,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center opacity-20 pointer-events-none">
      <svg 
        ref={svgRef}
        viewBox="0 0 800 800" 
        className="w-full h-full max-w-3xl"
        fill="none" 
        stroke="black" 
        strokeWidth="1"
      >
        <path d="M 100 400 C 200 100, 600 100, 700 400 C 800 700, 400 800, 100 400 Z" />
        <path d="M 150 400 C 250 200, 550 200, 650 400 C 750 600, 350 700, 150 400 Z" />
        <path d="M 200 400 C 300 300, 500 300, 600 400 C 700 500, 300 600, 200 400 Z" />
        <path d="M 250 400 C 350 350, 450 350, 550 400 C 650 450, 250 500, 250 400 Z" />
      </svg>
    </div>
  );
}
