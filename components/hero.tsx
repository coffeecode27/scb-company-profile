"use client";

import { scrollToSection } from "@/lib/utils/scroll";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const handleGetStarted = () => {
    scrollToSection("services");
  };

  const handleViewProducts = () => {
    scrollToSection("products");
  };

  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden pt-24"
      aria-label="Bagian utama"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-20 sm:pt-32 pb-12 w-full">
        {/* Main Content - Centered */}
        <div className="text-center space-y-8 animate-in fade-in slide-in-from-bottom duration-1000">
          <div className="space-y-6 max-w-5xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-foreground leading-tight tracking-tight">
              Transformasi Bisnis Anda
              <br />
              <span className="text-foreground">dengan </span>
              <span className="text-muted-foreground">Teknologi</span>
              <span className="text-foreground"> Masa Depan</span>
            </h1>
            <p className="text-lg sm:text-xl font-body text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Dari strategi hingga eksekusi, kami adalah
              <br />
              mitra Anda dalam transformasi digital.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button
              onClick={handleGetStarted}
              className="group w-full sm:w-auto px-8 py-4 rounded-full border-2 border-primary/30 text-foreground font-body font-medium hover:bg-primary/10 transition-all transform hover:scale-105 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background flex items-center justify-center gap-2"
              aria-label="Mulai dengan layanan kami"
            >
              Mulai Sekarang
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={handleViewProducts}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-primary-foreground font-body font-medium hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg shadow-primary/30 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background flex items-center justify-center gap-2"
              aria-label="Lihat produk kami"
            >
              Lihat Produk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
