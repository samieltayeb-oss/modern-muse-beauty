"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Kobido Facial",
    duration: "55 MINS",
    price: "$130",
    image: "/images/kobido_hands.jpg",
  },
  {
    title: "Lymphatic Drainage",
    duration: "60 MINS",
    price: "$150",
    image: "/images/lymphatic_body.jpg",
  },
  {
    title: "Glute Enhancement",
    duration: "75 MINS",
    price: "$145",
    image: "/images/glute_enhancement.jpg",
  },
  {
    title: "Cellulite Reduction",
    duration: "45 MINS",
    price: "$115",
    image: "/images/cellulite_reduction.jpg",
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRevealRef = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState(services[0].image);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered list reveal
      gsap.fromTo(
        ".service-item",
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
        }
      );

      // Follow cursor logic
      const reveal = imageRevealRef.current;
      if (reveal) {
        const xTo = gsap.quickTo(reveal, "left", { duration: 0.6, ease: "power3" });
        const yTo = gsap.quickTo(reveal, "top", { duration: 0.6, ease: "power3" });

        const move = (e: MouseEvent) => {
          xTo(e.clientX);
          yTo(e.clientY);
        };
        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full py-40 md:py-64 px-6 md:px-24 bg-white text-black relative min-h-screen">
      
      {/* Floating Image Reveal (Desktop Only) */}
      <div 
        ref={imageRevealRef}
        className="fixed w-[25vw] aspect-[3/4] pointer-events-none z-50 hidden lg:block overflow-hidden rounded-sm opacity-0 scale-50 transition-all duration-500 ease-out"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <Image
          src={activeImage}
          alt="Service"
          fill
          className="object-cover"
        />
      </div>

      <div className="container mx-auto max-w-6xl">
        <h3 className="font-sans text-xs tracking-[0.3em] uppercase mb-24 text-black/40">The Offerings</h3>
        <ul className="space-y-0 w-full">
          {services.map((service, i) => (
            <li 
              key={i} 
              className="service-item group cursor-pointer border-t border-black/10 py-12 lg:py-16 first:border-t-0"
              onMouseEnter={() => {
                setActiveImage(service.image);
                if (imageRevealRef.current) {
                  imageRevealRef.current.style.opacity = "1";
                  imageRevealRef.current.style.transform = "translate(-50%, -50%) scale(1)";
                }
              }}
              onMouseLeave={() => {
                if (imageRevealRef.current) {
                  imageRevealRef.current.style.opacity = "0";
                  imageRevealRef.current.style.transform = "translate(-50%, -50%) scale(0.5)";
                }
              }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <h4 className="font-serif text-5xl md:text-7xl lg:text-8xl transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:translate-x-12 group-hover:italic group-hover:opacity-40">
                  {service.title}
                </h4>
                <div className="text-left md:text-right font-sans text-xs tracking-[0.2em] opacity-40 group-hover:opacity-100 transition-opacity duration-500 uppercase">
                  <p className="mb-2">{service.duration}</p>
                  <p>{service.price}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
