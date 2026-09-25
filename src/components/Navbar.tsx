"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "Treatments", path: "/services" },
    { name: "The Studio", path: "/about" },
    { name: "Archive", path: "/gallery" },
    { name: "Inquiries", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out ${
          scrolled || menuOpen ? "py-6 bg-muse-ivory border-b border-muse-line" : "py-10 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-24 flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" className="relative h-16 md:h-20 w-64 md:w-80 z-50 transition-transform duration-500 hover:scale-[1.02]" onClick={() => setMenuOpen(false)}>
            <Image
              src="/images/logo.png"
              alt="Modern Muse Beauty"
              fill
              className="object-contain object-left contrast-125 drop-shadow-sm"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-12">
            {links.map((link) => (
              <Link 
                key={link.name} 
                href={link.path}
                className="text-xs font-sans tracking-[0.2em] uppercase text-muse-ink hover:text-muse-muted transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="https://modern-muse-beauty.square.site/" 
              target="_blank" 
              rel="noreferrer" 
              className="text-xs font-sans tracking-[0.2em] uppercase px-6 py-3 border border-muse-ink hover:bg-muse-ink hover:text-muse-ivory transition-all duration-300"
            >
              Book
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex items-center gap-3 text-xs font-sans tracking-[0.2em] uppercase hover:opacity-50 transition-opacity z-50 text-muse-ink"
          >
            {menuOpen ? <X size={20} strokeWidth={1} /> : <Menu size={20} strokeWidth={1} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-muse-ivory flex flex-col items-center justify-center lg:hidden"
          >
            <nav className="flex flex-col items-center gap-10">
              {links.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.05, duration: 0.5 }}
                >
                  <Link 
                    href={link.path}
                    onClick={() => setMenuOpen(false)}
                    className="font-serif text-4xl md:text-5xl text-muse-ink hover:italic transition-all duration-300 block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
