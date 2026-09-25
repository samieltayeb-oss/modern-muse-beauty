"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";

export default function ContactPage() {
  useEffect(() => {
    gsap.fromTo(".fade-up", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1.5, stagger: 0.2, ease: "power4.out" }
    );
  }, []);

  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />
      
      {/* Massive Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 scale-105 fade-up">
          <Image 
            src="/images/hero_contact.jpg"
            alt="Contact Hero"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/10 z-10"></div>
        <h1 className="relative z-20 font-serif text-[12vw] text-white tracking-tighter leading-none fade-up text-center">
          Connect.
        </h1>
      </section>

      <section className="container mx-auto px-6 md:px-12 py-32 md:py-48 flex flex-col md:flex-row gap-24">
        
        <div className="w-full md:w-1/2 fade-up">
          <h2 className="font-serif text-5xl md:text-7xl mb-12 tracking-tight">Visit the studio</h2>
          <div className="font-sans text-lg md:text-xl text-black/70 leading-loose space-y-8">
            <div>
              <h4 className="text-xs tracking-[0.3em] uppercase text-black/40 mb-2">Location</h4>
              <p>909 5 Ave SW</p>
              <p>Calgary, AB T2P 3G5</p>
            </div>
            <div>
              <h4 className="text-xs tracking-[0.3em] uppercase text-black/40 mb-2">Social</h4>
              <a href="https://www.instagram.com/modernmusebeauty_yyc" target="_blank" className="hover:opacity-50 transition-opacity border-b border-black">@modernmusebeauty_yyc</a>
            </div>
            <div>
              <h4 className="text-xs tracking-[0.3em] uppercase text-black/40 mb-2">Policies</h4>
              <p className="text-sm">Please arrive 10 minutes prior to your scheduled appointment. Cancellations made within 24 hours of the appointment will be charged the full service fee.</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 fade-up">
          <h2 className="font-serif text-5xl md:text-7xl mb-12 tracking-tight">Direct inquiry</h2>
          <form className="space-y-12">
            <div className="border-b border-black/20 pb-4">
              <input type="text" placeholder="YOUR NAME" className="w-full bg-transparent font-sans text-sm tracking-widest outline-none placeholder:text-black/30" />
            </div>
            <div className="border-b border-black/20 pb-4">
              <input type="email" placeholder="YOUR EMAIL" className="w-full bg-transparent font-sans text-sm tracking-widest outline-none placeholder:text-black/30" />
            </div>
            <div className="border-b border-black/20 pb-4">
              <textarea placeholder="MESSAGE" rows={4} className="w-full bg-transparent font-sans text-sm tracking-widest outline-none placeholder:text-black/30 resize-none"></textarea>
            </div>
            <button type="button" className="font-sans text-xs tracking-[0.3em] uppercase border border-black px-12 py-6 hover:bg-black hover:text-white transition-colors duration-500">
              Send Message
            </button>
          </form>
        </div>

      </section>

      <Footer />
    </main>
  );
}
