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
    <main className="relative min-h-screen bg-white">
      <Navbar />
      
      {/* Massive Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 scale-105 fade-up">
          <Image 
            src="/images/hero_faq.jpg"
            alt="FAQ Hero"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/10 z-10"></div>
        <h1 className="relative z-20 font-serif text-[12vw] text-white tracking-tighter leading-none fade-up text-center">
          Inquiries.
        </h1>
      </section>
      
      <section className="container mx-auto px-6 md:px-12 py-32 md:py-48 max-w-5xl">
        <div className="flex flex-col gap-16">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-black/10 pb-16 fade-up">
              <h3 className="font-serif text-3xl md:text-5xl mb-8 leading-tight">{faq.q}</h3>
              <p className="font-sans text-lg md:text-xl text-black/60 leading-relaxed max-w-3xl">
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
