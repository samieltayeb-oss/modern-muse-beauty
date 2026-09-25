"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out ${
        scrolled ? "py-4 bg-muse-ivory/90 backdrop-blur-md border-b border-muse-line" : "py-8 bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="text-sm font-sans tracking-widest uppercase hidden md:block">
          Calgary, AB
        </div>
        
        <div className="relative h-12 w-48 md:w-64">
          <Image
            src="/images/logo.png"
            alt="Modern Muse Beauty"
            fill
            className="object-contain"
            priority
          />
        </div>

        <button className="text-sm font-sans tracking-widest uppercase relative group">
          Book
          <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-muse-ink origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
        </button>
      </div>
    </motion.header>
  );
}
