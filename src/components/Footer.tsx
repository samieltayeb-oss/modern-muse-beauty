"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-muse-stone text-muse-ink py-24 md:py-32 px-6 lg:px-24 flex flex-col relative overflow-hidden border-t border-muse-line">
      
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start mb-32 z-10 gap-16 lg:gap-0">
        
        {/* Left: Brand & Newsletter */}
        <div className="w-full lg:w-1/3 flex flex-col">
          <Link href="/" className="relative h-20 md:h-28 w-64 md:w-80 mb-12 -ml-2">
            <Image
              src="/images/logo.png"
              alt="Modern Muse Beauty"
              fill
              className="object-contain object-left contrast-125 drop-shadow-sm"
            />
          </Link>
          <p className="font-sans text-sm text-muse-muted leading-loose mb-12 max-w-sm">
            Subscribe to our private mailing list to receive exclusive editorial content, studio updates, and priority booking access.
          </p>
          <form className="flex border-b border-muse-ink/20 pb-2 max-w-sm">
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="w-full bg-transparent font-sans text-xs tracking-[0.2em] uppercase outline-none placeholder:text-muse-muted"
            />
            <button type="button" className="font-sans text-xs tracking-[0.2em] uppercase hover:text-muse-muted transition-colors">
              Join
            </button>
          </form>
        </div>

        {/* Middle: Links */}
        <div className="w-full lg:w-1/3 flex flex-col lg:items-center">
          <div className="flex flex-col gap-6">
            <h4 className="font-sans text-xs tracking-[0.4em] uppercase text-muse-ink mb-4">Explore</h4>
            <Link href="/services" className="font-sans text-sm text-muse-muted hover:text-muse-ink transition-colors">Treatments</Link>
            <Link href="/about" className="font-sans text-sm text-muse-muted hover:text-muse-ink transition-colors">The Studio</Link>
            <Link href="/gallery" className="font-sans text-sm text-muse-muted hover:text-muse-ink transition-colors">Archive</Link>
            <Link href="/faq" className="font-sans text-sm text-muse-muted hover:text-muse-ink transition-colors">Inquiries</Link>
          </div>
        </div>

        {/* Right: Contact & Location */}
        <div className="w-full lg:w-1/3 flex flex-col lg:items-end text-left lg:text-right">
          <div className="flex flex-col gap-6">
            <h4 className="font-sans text-xs tracking-[0.4em] uppercase text-muse-ink mb-4">Connect</h4>
            <a href="https://www.instagram.com/modernmusebeauty_yyc" target="_blank" rel="noreferrer" className="font-sans text-sm text-muse-muted hover:text-muse-ink transition-colors">Instagram</a>
            <Link href="/contact" className="font-sans text-sm text-muse-muted hover:text-muse-ink transition-colors">Contact Us</Link>
            <a href="https://modern-muse-beauty.square.site/" target="_blank" rel="noreferrer" className="font-sans text-sm text-muse-muted hover:text-muse-ink transition-colors">Book Online</a>
          </div>
          <div className="mt-12 flex flex-col gap-2">
            <h4 className="font-sans text-xs tracking-[0.4em] uppercase text-muse-ink mb-4">Studio</h4>
            <p className="font-sans text-sm text-muse-muted">909 5 Ave SW</p>
            <p className="font-sans text-sm text-muse-muted">Calgary, Alberta T2P 3G5</p>
            <p className="font-sans text-sm text-muse-muted mt-2"><a href="tel:4035611337" className="hover:text-muse-ink transition-colors">(403) 561-1337</a></p>
          </div>
        </div>

      </div>

      {/* Bottom Massive Typography */}
      <div className="w-full text-center z-10 pt-16 border-t border-muse-line flex flex-col items-center">
        <h2 className="font-serif text-[12vw] lg:text-[10vw] text-muse-ink/10 tracking-tighter leading-none mb-8 select-none">
          Modern Muse
        </h2>
        <div className="w-full flex justify-between items-center text-[10px] font-sans tracking-[0.2em] uppercase text-muse-muted">
          <span>&copy; {new Date().getFullYear()}</span>
          <span>Calgary, Alberta</span>
        </div>
      </div>

    </footer>
  );
}
