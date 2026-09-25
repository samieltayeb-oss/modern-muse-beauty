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
    desc: "A rejuvenating and deeply relaxing treatment combining traditional techniques with precise, rhythmic movements.",
  },
  {
    title: "Lymphatic Drainage",
    duration: "60 MINS",
    price: "$150",
    image: "/images/lymphatic_body.jpg",
    desc: "A gentle, rhythmic treatment designed to stimulate the lymphatic system, helping the body eliminate toxins.",
  },
  {
    title: "Glute Enhancement",
    duration: "75 MINS",
    price: "$145",
    image: "/images/glute_enhancement.jpg",
    desc: "A non-invasive procedure that helps lift, firm, and tone the buttocks using specialized techniques.",
  },
  {
    title: "Cellulite Reduction",
    duration: "45 MINS",
    price: "$115",
    image: "/images/cellulite_reduction.jpg",
    desc: "Targets uneven skin texture and dimpling by improving circulation and stimulating collagen production.",
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // Pin the left column while scrolling through the right list
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: leftColRef.current,
      });

      // Update active image based on scroll position of list items
      const items = gsap.utils.toArray<HTMLElement>(".service-item");
      items.forEach((item, i) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top center",
          end: "bottom center",
          onToggle: (self) => {
            if (self.isActive) setActiveIndex(i);
          }
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full bg-muse-ivory text-muse-ink relative">
      <div className="flex flex-col lg:flex-row w-full min-h-[200vh]">
        
        {/* Left Side: Pinned Image Area */}
        <div className="w-full lg:w-1/2 h-screen p-6 lg:p-24 hidden lg:block" ref={leftColRef}>
          <div className="w-full h-full relative overflow-hidden bg-muse-stone">
            {services.map((service, i) => (
              <Image
                key={i}
                src={service.image}
                alt={service.title}
                fill
                className={`object-cover transition-opacity duration-1000 ease-in-out ${
                  i === activeIndex ? "opacity-100" : "opacity-0"
                }`}
                priority={i === 0}
              />
            ))}
          </div>
        </div>

        {/* Right Side: Scrolling List */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 lg:px-24 py-32 lg:py-[50vh]">
          <h3 className="font-sans text-xs tracking-[0.4em] uppercase mb-16 text-muse-muted">The Offerings</h3>
          <ul className="space-y-32">
            {services.map((service, i) => (
              <li 
                key={i} 
                className={`service-item group flex flex-col gap-6 transition-opacity duration-500 ${i === activeIndex ? 'opacity-100' : 'opacity-30 lg:opacity-100'}`}
              >
                {/* Mobile Image (Hidden on Desktop) */}
                <div className="w-full aspect-[4/3] relative overflow-hidden lg:hidden mb-4">
                  <Image src={service.image} alt={service.title} fill className="object-cover" />
                </div>
                
                <h4 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-muse-ink">
                  {service.title}
                </h4>
                <p className="font-sans text-sm leading-loose text-muse-muted max-w-sm">
                  {service.desc}
                </p>
                <div className="font-sans text-xs tracking-[0.2em] text-muse-ink uppercase border-t border-muse-line pt-6 mt-4 flex gap-8">
                  <span>{service.duration}</span>
                  <span>{service.price}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
