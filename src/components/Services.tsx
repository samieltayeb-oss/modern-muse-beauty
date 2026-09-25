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
    image: "/images/hero_portrait.jpg",
  },
  {
    title: "Cellulite Reduction",
    duration: "45 MINS",
    price: "$115",
    image: "/images/lymphatic_body.jpg",
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState(services[0].image);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background color transition to pure black
      gsap.to(containerRef.current, {
        backgroundColor: "#000000",
        color: "#FFFFFF",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 40%",
          end: "top 10%",
          scrub: true,
        },
      });

      // Staggered list reveal
      gsap.fromTo(
        ".service-item",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.1,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".service-list",
            start: "top 80%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full py-32 md:py-64 px-6 md:px-12 transition-colors duration-1000 bg-white text-black relative min-h-screen flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-stretch justify-between gap-16 relative z-10">
        
        {/* Left Side: Images */}
        <div className="w-full md:w-5/12 h-[60vh] md:h-[80vh] relative hidden md:block">
          <div className="w-full h-full relative overflow-hidden">
            <Image
              src={activeImage}
              alt="Service Image"
              fill
              className="object-cover object-center transition-opacity duration-1000 ease-in-out"
            />
          </div>
        </div>

        {/* Right Side: List */}
        <div className="w-full md:w-7/12 flex flex-col justify-center service-list pl-0 md:pl-16">
          <h3 className="font-sans text-xs tracking-[0.3em] uppercase mb-16 text-current opacity-40">The Offerings</h3>
          <ul className="space-y-0 w-full">
            {services.map((service, i) => (
              <li 
                key={i} 
                className="service-item group cursor-pointer border-b border-current/20 py-10"
                onMouseEnter={() => setActiveImage(service.image)}
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <h4 className="font-serif text-4xl md:text-5xl lg:text-7xl transition-transform duration-700 ease-out group-hover:translate-x-4 italic">
                    {service.title}
                  </h4>
                  <div className="text-left md:text-right font-sans text-xs tracking-[0.2em] opacity-40 group-hover:opacity-100 transition-opacity duration-500 uppercase">
                    <p className="mb-1">{service.duration}</p>
                    <p>{service.price}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
