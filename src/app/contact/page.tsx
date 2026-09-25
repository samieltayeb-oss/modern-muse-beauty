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
    <main className="relative min-h-screen bg-muse-ivory text-muse-ink">
      <Navbar />
      
      {/* Elegant Hero Section */}
      <section className="relative w-full pt-40 md:pt-48 pb-16 px-6 lg:px-24">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none fade-up text-center mb-16">
          Connect.
        </h1>
        <div className="relative w-full aspect-[21/9] overflow-hidden fade-up bg-muse-stone">
          <Image 
            src="/images/hero_contact.jpg"
            alt="Contact Hero"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </section>

      <section className="container mx-auto px-6 lg:px-24 py-16 md:py-32 flex flex-col md:flex-row gap-24">
        
        <div className="w-full md:w-1/2 fade-up">
          <h2 className="font-serif text-4xl md:text-5xl mb-12 tracking-tight">Visit the studio</h2>
          <div className="font-sans text-sm text-muse-muted leading-[2.5] space-y-12 max-w-sm">
            <div>
              <h4 className="text-xs tracking-[0.4em] uppercase text-muse-ink mb-4">Location & Contact</h4>
              <p>909 5 Ave SW</p>
              <p>Calgary, Alberta T2P 3G5</p>
              <p className="mt-4"><a href="tel:4035611337" className="hover:text-muse-ink transition-colors">(403) 561-1337</a></p>
            </div>
            <div>
              <h4 className="text-xs tracking-[0.4em] uppercase text-muse-ink mb-4">Hours</h4>
              <p className="grid grid-cols-2 gap-4">
                <span>Monday - Thursday</span> <span>Closed</span>
                <span>Friday</span> <span>10:00 a.m. - 6:00 p.m.</span>
                <span>Saturday</span> <span>10:00 a.m. - 6:00 p.m.</span>
                <span>Sunday</span> <span>Closed</span>
              </p>
            </div>
            <div>
              <h4 className="text-xs tracking-[0.4em] uppercase text-muse-ink mb-4">Social</h4>
              <a href="https://www.instagram.com/modernmusebeauty_yyc" target="_blank" className="hover:opacity-50 transition-opacity border-b border-muse-line">@modernmusebeauty_yyc</a>
            </div>
            <div>
              <h4 className="text-xs tracking-[0.4em] uppercase text-muse-ink mb-4">Policies</h4>
              <p className="text-xs leading-loose">Please arrive 10 minutes prior to your scheduled appointment. Cancellations made within 24 hours of the appointment will be charged the full service fee.</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 fade-up">
          <h2 className="font-serif text-4xl md:text-5xl mb-12 tracking-tight">Direct inquiry</h2>
          <form className="space-y-12">
            <div className="border-b border-muse-line pb-4">
              <input type="text" placeholder="YOUR NAME" className="w-full bg-transparent font-sans text-xs tracking-[0.2em] uppercase outline-none placeholder:text-muse-muted" />
            </div>
            <div className="border-b border-muse-line pb-4">
              <input type="email" placeholder="YOUR EMAIL" className="w-full bg-transparent font-sans text-xs tracking-[0.2em] uppercase outline-none placeholder:text-muse-muted" />
            </div>
            <div className="border-b border-muse-line pb-4">
              <textarea placeholder="MESSAGE" rows={4} className="w-full bg-transparent font-sans text-xs tracking-[0.2em] uppercase outline-none placeholder:text-muse-muted resize-none"></textarea>
            </div>
            <button type="button" className="font-sans text-xs tracking-[0.3em] uppercase border border-muse-ink px-12 py-6 hover:bg-muse-ink hover:text-muse-ivory transition-colors duration-500">
              Send Message
            </button>
          </form>
        </div>

      </section>

      <Footer />
    </main>
  );
}
