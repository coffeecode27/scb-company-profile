"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, MessageCircle } from "lucide-react";
import { useMobile } from "@/hooks/useMobile";
import { MobileMenu } from "./mobile-menu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useMobile();
  const navbarRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    if (!isMobile && isOpen) {
      setIsOpen(false);
    }
  }, [isMobile, isOpen]);

  return (
    <>
      <nav
        ref={navbarRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMobile
            ? "bg-white/95 dark:bg-[#0a192f]/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
        suppressHydrationWarning
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-24 flex items-center">
            {/* Logo - Absolute Left */}
            <Link href="/" className="absolute left-0 flex items-center group">
              <Image
                src="/logo scb/logo1.svg"
                alt="PT Solusi Cerdas Berkualitas"
                width={400}
                height={110}
                className="h-24 w-auto transition-transform group-hover:scale-105"
                priority
              />
            </Link>

            {/* Desktop Menu - Absolute Center */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center">
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => scrollToSection("home")}
                  className="px-4 py-2 font-body font-medium text-foreground transition text-sm relative group"
                >
                  Beranda
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="px-4 py-2 font-body font-medium text-foreground transition text-sm relative group"
                >
                  Tentang
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="px-4 py-2 font-body font-medium text-foreground transition text-sm relative group"
                >
                  Layanan
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </button>
                <button
                  onClick={() => scrollToSection("products")}
                  className="px-4 py-2 font-body font-medium text-foreground transition text-sm relative group"
                >
                  Produk
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </button>
              </div>
            </div>

            {/* Contact CTA - Absolute Right (Desktop) */}
            <div className="hidden md:flex absolute right-0 items-center">
              <a
                href="https://wa.me/622112345678"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-medium text-sm shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                Hubungi Kami
              </a>
            </div>

            {/* Mobile Menu Button - Absolute Right (Mobile) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden absolute right-0 text-foreground p-2 rounded-lg hover:bg-accent/10 transition"
              aria-label={isOpen ? "Tutup menu" : "Buka menu"}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu — sibling of nav, outside backdrop-blur stacking context */}
      <MobileMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        scrollToSection={scrollToSection}
      />
    </>
  );
}
