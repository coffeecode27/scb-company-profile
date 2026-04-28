"use client";

import { Mail, MessageCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Particle {
  id: number;
  left: number;
  top: number;
  duration: number;
}

export default function CTA() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/+6289691733479",
      "_blank",
      "noopener,noreferrer",
    );
  };

  const handleEmail = () => {
    window.location.href = "mailto:sales@solusicerdas.org";
  };

  useEffect(() => {
    // Generate particles on client-side only to avoid hydration mismatch
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 5 + Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
      return () => section.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-16 overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Gradient blobs */}
        <div
          className="absolute inset-0 bg-linear-to-br from-primary/20 via-secondary/20 to-primary/20 animate-gradient-shift"
          style={{ animationDuration: "10s" }}
        />

        {/* Floating particles - client-side only */}
        {particles.length > 0 && (
          <div className="absolute inset-0">
            {particles.map((particle) => (
              <div
                key={particle.id}
                className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                  animationDelay: `${particle.id * 0.5}s`,
                  animationDuration: `${particle.duration}s`,
                }}
              />
            ))}
          </div>
        )}

        {/* Geometric shapes */}
        <div
          className="absolute top-10 left-10 w-32 h-32 border-2 border-primary/20 rounded-lg rotate-45 animate-spin"
          style={{ animationDuration: "20s" }}
        />
        <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-secondary/20 rounded-full animate-pulse" />
        <div
          className="absolute top-1/2 left-20 w-16 h-16 border-2 border-primary/20 rotate-12 animate-bounce"
          style={{ animationDuration: "3s" }}
        />

        {/* Interactive glow effect */}
        <div
          className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl transition-opacity duration-300 pointer-events-none"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            opacity: 0.3,
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 animate-in fade-in slide-in-from-bottom duration-1000">
        <h2
          id="contact-heading"
          className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight"
        >
          Mari Bangun Sesuatu yang Hebat Bersama
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto" aria-hidden="true" />
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Siap mentransformasi bisnis Anda dengan teknologi terdepan? Mari
          diskusikan proyek Anda dan susun roadmap menuju kesuksesan.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          {/* WhatsApp Button with gradient border */}
          <button
            onClick={handleWhatsApp}
            className="group relative w-full sm:w-auto px-8 py-4 rounded-full font-semibold transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background flex items-center justify-center gap-2 overflow-hidden"
            aria-label="Chat dengan kami lewat WhatsApp"
          >
            {/* Animated gradient border */}
            <div className="absolute inset-0 rounded-full p-0.5">
              <div
                className="absolute inset-0 rounded-full bg-linear-to-r from-primary via-secondary to-primary animate-gradient-shift"
                style={{ animationDuration: "3s" }}
              />
            </div>

            {/* Button background */}
            <div className="absolute inset-0.5 rounded-full dark:bg-[#0a192f] bg-white" />

            {/* Button content */}
            <span className="relative z-10 flex items-center gap-2 font-bold">
              <MessageCircle className="w-5 h-5 text-primary" />
              <span className="text-primary dark:bg-linear-to-r dark:from-primary dark:to-secondary dark:bg-clip-text dark:text-transparent">
                Chat via WhatsApp
              </span>
            </span>
          </button>

          {/* Email Button */}
          <button
            onClick={handleEmail}
            className="group relative w-full sm:w-auto px-8 py-4 rounded-full border-2 border-primary text-primary hover:bg-primary/10 font-semibold transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background flex items-center justify-center gap-2 overflow-hidden"
            aria-label="Kirim email ke kami"
          >
            <span className="relative z-10 flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
              <Mail className="w-5 h-5" />
              Kirim Email
            </span>

            {/* Hover effect */}
            <div className="absolute inset-0 bg-linear-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>

        <p className="text-muted-foreground pt-4">
          Waktu respons dalam 24 jam | Konsultasi gratis
        </p>
      </div>

      <style jsx>{`
        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
        }

        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
