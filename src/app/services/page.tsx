"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";

const allServices = [
  {
    title: "Kobido Japanese Facial Massage",
    duration: "55 mins",
    price: "CAD$130.00",
    slug: "kobido-japanese-facial",
    desc: "A rejuvenating and deeply relaxing treatment that combines traditional techniques with precise, rhythmic movements to lift, tone, and revitalize the skin.",
    image: "/images/kobido_hands.jpg"
  },
  {
    title: "Full Body Lymphatic Drainage",
    duration: "1 hr",
    price: "CAD$150.00",
    slug: "full-body-lymphatic-drainage",
    desc: "A gentle, rhythmic treatment designed to stimulate the lymphatic system, helping the body eliminate toxins and reduce fluid retention.",
    image: "/images/lymphatic_body.jpg"
  },
  {
    title: "Glute Enhancement",
    duration: "1 hr 15 mins",
    price: "CAD$145.00",
    slug: "glute-enhancement",
    desc: "A non-invasive procedure that helps lift, firm, and tone the buttocks using specialized techniques and equipment.",
    image: "/images/glute_enhancement.jpg"
  },
  {
    title: "Cellulite Reduction Therapy",
    duration: "45 mins",
    price: "CAD$115.00",
    slug: "cellulite-reduction-therapy",
    desc: "Targets uneven skin texture and dimpling by improving circulation and stimulating collagen production.",
    image: "/images/cellulite_reduction.jpg"
  },
  {
    title: "Abdomen Drainage",
    duration: "40 mins",
    price: "CAD$105.00",
    slug: "abdomen-drainage",
    desc: "A gentle, targeted massage technique focused exclusively on the abdominal area to reduce bloating and support detox.",
    image: "/images/abdomen_drainage.jpg"
  }
];

export default function ServicesPage() {
  useEffect(() => {
    gsap.fromTo(".fade-up", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1.5, stagger: 0.1, ease: "power4.out" }
    );
  }, []);

  return (
    <main className="relative min-h-screen bg-muse-ivory text-muse-ink">
      <Navbar />

      {/* Elegant Hero Section */}
      <section className="relative w-full pt-40 md:pt-48 pb-16 px-6 lg:px-24">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none fade-up text-center mb-16">
          Offerings.
        </h1>
        <div className="relative w-full aspect-[21/9] overflow-hidden fade-up bg-muse-stone">
          <Image 
            src="/images/lymphatic_body.jpg"
            alt="Services Hero"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </section>

      <section className="container mx-auto px-6 lg:px-24 py-16 md:py-32">
        <div className="flex flex-col gap-32">
          {allServices.map((service, i) => (
            <div key={i} className="flex flex-col lg:flex-row gap-16 items-center fade-up">
              <div className="w-full lg:w-1/2 aspect-[4/3] relative overflow-hidden group bg-muse-stone">
                <Link href={`/services/${service.slug}`}>
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-[0.16,1,0.3,1]" 
                  />
                </Link>
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-center px-0 lg:px-12">
                <h3 className="font-sans text-xs tracking-[0.4em] text-muse-muted mb-8 uppercase">
                  {service.duration} &mdash; {service.price}
                </h3>
                <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
                  <Link href={`/services/${service.slug}`}>{service.title}</Link>
                </h2>
                <p className="font-sans text-sm leading-loose text-muse-muted mb-12 max-w-md">
                  {service.desc}
                </p>
                <Link 
                  href={`/services/${service.slug}`}
                  className="self-start text-xs font-sans tracking-[0.3em] uppercase border-b border-muse-line hover:border-muse-ink pb-2 transition-colors"
                >
                  Discover Treatment
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
