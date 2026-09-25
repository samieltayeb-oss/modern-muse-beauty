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
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "The Muse", path: "/about" },
    { name: "Transformations", path: "/gallery" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out ${
          scrolled || menuOpen ? "py-4 bg-muse-ivory/90 backdrop-blur-md border-b border-muse-line" : "py-8 bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-2 text-sm font-sans tracking-widest uppercase hover:text-muse-accent transition-colors z-50 mix-blend-difference text-white"
          >
            {menuOpen ? <X size={20} strokeWidth={1} /> : <Menu size={20} strokeWidth={1} />}
            <span className="hidden md:block">{menuOpen ? "Close" : "Menu"}</span>
          </button>
          
          <Link href="/" className="relative h-12 w-48 md:w-64 z-50 mix-blend-difference" onClick={() => setMenuOpen(false)}>
            <Image
              src="/images/logo.png"
              alt="Modern Muse Beauty"
              fill
              className="object-contain"
              priority
            />
          </Link>

          <a href="https://modern-muse-beauty.square.site/" target="_blank" rel="noreferrer" className="text-sm font-sans tracking-widest uppercase relative group z-50 mix-blend-difference text-white">
            Book
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
          </a>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-muse-ivory flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {links.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5, ease: "easeOut" }}
                >
                  <Link 
                    href={link.path}
                    onClick={() => setMenuOpen(false)}
                    className="font-serif text-4xl md:text-6xl text-muse-ink hover:text-muse-accent transition-colors hover:italic"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="absolute bottom-12 flex gap-8 text-sm font-sans tracking-widest uppercase text-muse-muted">
              <a href="https://www.instagram.com/modernmusebeauty_yyc" target="_blank" className="hover:text-muse-ink transition-colors">Instagram</a>
              <span>Calgary, AB</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
