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
          scrolled || menuOpen ? "py-6 bg-white border-b border-black/5" : "py-10 bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-3 text-xs font-sans tracking-[0.2em] uppercase hover:opacity-50 transition-opacity z-50 text-black"
          >
            {menuOpen ? <X size={18} strokeWidth={1} /> : <Menu size={18} strokeWidth={1} />}
            <span className="hidden md:block mt-[2px]">{menuOpen ? "Close" : "Menu"}</span>
          </button>
          
          <Link href="/" className="relative h-10 md:h-14 w-48 md:w-72 z-50" onClick={() => setMenuOpen(false)}>
            <Image
              src="/images/logo.png"
              alt="Modern Muse Beauty"
              fill
              className="object-contain"
              priority
            />
          </Link>

          <a href="https://modern-muse-beauty.square.site/" target="_blank" rel="noreferrer" className="text-xs font-sans tracking-[0.2em] uppercase relative group z-50 text-black">
            Book
            <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-black origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[0.16,1,0.3,1]"></span>
          </a>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-10">
              {links.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link 
                    href={link.path}
                    onClick={() => setMenuOpen(false)}
                    className="font-serif text-5xl md:text-7xl lg:text-8xl text-black hover:italic transition-all duration-500 block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="absolute bottom-12 w-full px-12 flex justify-between text-xs font-sans tracking-[0.2em] uppercase text-black/40">
              <a href="https://www.instagram.com/modernmusebeauty_yyc" target="_blank" className="hover:text-black transition-colors">Instagram</a>
              <span>Calgary, AB</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
