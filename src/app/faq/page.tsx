"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";

export default function FAQPage() {
  useEffect(() => {
    gsap.fromTo(".fade-up", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1.5, stagger: 0.2, ease: "power4.out" }
    );
  }, []);

  const faqs = [
    {
      q: "Do you accept male clients?",
      a: "Modern Muse Beauty is an intimate, specialized holistic wellness studio. At this time, we only accept and cater exclusively to female clients to ensure a deeply protected and comfortable environment."
    },
    {
      q: "What exactly is a Kobido Japanese Facial Massage?",
      a: "Kobido is often referred to as the 'ancient way of beauty.' It is a highly specialized, rigorous massage technique that stimulates circulation, boosts collagen production, and promotes intense lymphatic drainage. It acts as a natural, non-invasive facelift, leaving your jawline sculpted and your skin glowing."
    },
    {
      q: "Are you a Registered Massage Therapist (RMT)?",
      a: "No. Our treatments are performed by a highly specialized Esthetician focusing entirely on advanced structural bodywork, lymphatic drainage, and luxury beauty therapies. Because of this, we do not provide RMT receipts for insurance claims."
    },
    {
      q: "Where is the studio located?",
      a: "We are situated in the core of Calgary at 909 5 Ave SW, Alberta T2P 3G5. Detailed parking and entry instructions will be provided upon booking confirmation."
    },
    {
      q: "How should I prepare for Lymphatic Drainage?",
      a: "We recommend arriving hydrated. Please avoid heavy meals immediately prior to your session. Post-treatment, your body will be actively flushing toxins, so drinking plenty of water over the following 24 hours is essential."
    }
  ];

  return (
    <main className="relative min-h-screen bg-muse-ivory text-muse-ink">
      <Navbar />
      
      {/* Elegant Hero Section */}
      <section className="relative w-full pt-40 md:pt-48 pb-16 px-6 lg:px-24">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none fade-up text-center mb-16">
          Inquiries.
        </h1>
        <div className="relative w-full aspect-[21/9] overflow-hidden fade-up bg-muse-stone">
          <Image 
            src="/images/hero_faq.jpg"
            alt="FAQ Hero"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </section>
      
      <section className="container mx-auto px-6 md:px-12 py-16 md:py-32 max-w-4xl">
        <div className="flex flex-col gap-16">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-muse-line pb-16 fade-up">
              <h3 className="font-serif text-3xl md:text-4xl mb-8 leading-snug">{faq.q}</h3>
              <p className="font-sans text-sm md:text-base text-muse-muted leading-loose max-w-2xl">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
