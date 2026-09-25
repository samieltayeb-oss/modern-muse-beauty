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
    image: "/images/studio_atmosphere.jpg", // reuse or wait for specific images
  },
  {
    title: "Cellulite Reduction",
    duration: "45 MINS",
    price: "$115",
    image: "/images/lymphatic_body.jpg", // reuse
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState(services[0].image);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background color transition
      gsap.to(containerRef.current, {
        backgroundColor: "rgb(var(--muse-ink))",
        color: "rgb(var(--muse-ivory))",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "top 20%",
          scrub: true,
        },
      });

      // Staggered list reveal
      gsap.fromTo(
        ".service-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".service-list",
            start: "top 70%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full py-32 md:py-48 px-6 md:px-12 transition-colors duration-1000 bg-muse-ivory text-muse-ink relative min-h-screen flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        
        {/* Left Side: Images */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-[80vh] relative overflow-hidden hidden md:block">
          <Image
            src={activeImage}
            alt="Service Image"
            fill
            className="object-cover object-center transition-opacity duration-700 ease-in-out"
          />
        </div>

        {/* Right Side: List */}
        <div className="w-full md:w-1/2 flex flex-col justify-center service-list">
          <h3 className="font-sans text-xs tracking-widest uppercase mb-16 text-muse-stone">The Offerings</h3>
          <ul className="space-y-8 md:space-y-12">
            {services.map((service, i) => (
              <li 
                key={i} 
                className="service-item group cursor-pointer border-b border-muse-stone/20 pb-8"
                onMouseEnter={() => setActiveImage(service.image)}
              >
                <div className="flex justify-between items-end">
                  <h4 className="font-serif text-3xl md:text-5xl lg:text-6xl transition-colors group-hover:text-muse-accent">
                    {service.title}
                  </h4>
                  <div className="text-right font-sans text-xs md:text-sm tracking-widest text-muse-stone/60 group-hover:text-muse-stone transition-colors">
                    <p>{service.duration}</p>
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
