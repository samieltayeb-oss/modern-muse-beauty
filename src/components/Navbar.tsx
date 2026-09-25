"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", path: "/", img: "/images/hero_portrait.jpg" },
  { name: "Treatments", path: "/services", img: "/images/hero_services.jpg" },
  { name: "The Studio", path: "/about", img: "/images/hero_about.jpg" },
  { name: "Archive", path: "/gallery", img: "/images/hero_gallery.jpg" },
  { name: "Contact", path: "/contact", img: "/images/hero_contact.jpg" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredImg, setHoveredImg] = useState<string | null>(null);
  
  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLAnchorElement[]>([]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP Menu Animation
  useEffect(() => {
    if (menuOpen) {
      gsap.to(menuRef.current, { y: "0%", duration: 0.8, ease: "power4.inOut" });
      gsap.fromTo(
        linksRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power4.out", delay: 0.3 }
      );
    } else {
      gsap.to(menuRef.current, { y: "-100%", duration: 0.8, ease: "power4.inOut" });
    }
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out ${
          scrolled || menuOpen ? "py-6 bg-muse-ivory border-b border-muse-line" : "py-10 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-24 flex justify-between items-center">
          
          <Link href="/" className="relative h-16 md:h-20 w-64 md:w-80 z-50 transition-transform duration-500 hover:scale-[1.02]" onClick={() => setMenuOpen(false)}>
            <Image
              src="/images/logo.png"
              alt="Modern Muse Beauty"
              fill
              className="object-contain object-left contrast-125 drop-shadow-sm"
              priority
            />
          </Link>

          <div className="flex items-center gap-8 z-50">
            <a 
              href="https://modern-muse-beauty.square.site/" 
              target="_blank" 
              rel="noreferrer" 
              className="hidden md:block text-xs font-sans tracking-[0.2em] uppercase px-6 py-3 border border-muse-ink hover:bg-muse-ink hover:text-muse-ivory transition-all duration-300"
            >
              Book Now
            </a>
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-3 text-xs font-sans tracking-[0.2em] uppercase hover:opacity-50 transition-opacity text-muse-ink"
            >
              {menuOpen ? "Close" : "Menu"}
              {menuOpen ? <X size={20} strokeWidth={1} /> : <Menu size={20} strokeWidth={1} />}
            </button>
          </div>
        </div>
      </header>

      {/* High-End Fullscreen Menu */}
      <div 
        ref={menuRef} 
        className="fixed inset-0 w-full h-full bg-muse-stone z-40 flex items-center justify-center overflow-hidden"
        style={{ transform: "translateY(-100%)" }}
      >
        {/* Dynamic Background Image on Desktop Hover */}
        <div className="absolute inset-0 w-full h-full opacity-30 transition-opacity duration-700 hidden lg:block">
          {links.map((link) => (
            <Image
              key={link.name}
              src={link.img}
              alt={link.name}
              fill
              className={`object-cover object-center transition-opacity duration-700 absolute inset-0 ${hoveredImg === link.name ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
        </div>

        <nav className="relative z-10 flex flex-col items-center gap-8 md:gap-12 w-full px-6">
          {links.map((link, i) => (
            <div key={link.name} className="overflow-hidden">
              <Link 
                href={link.path}
                ref={(el) => { if (el) linksRef.current[i] = el; }}
                onClick={() => setMenuOpen(false)}
                onMouseEnter={() => setHoveredImg(link.name)}
                onMouseLeave={() => setHoveredImg(null)}
                className="font-serif text-5xl md:text-7xl lg:text-8xl text-muse-ink hover:italic transition-all duration-500 block text-center"
              >
                {link.name}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}
