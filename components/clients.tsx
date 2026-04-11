"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { trustedBrands } from "@/lib/data/brands";
import { Quote } from "lucide-react";

export default function Clients() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % trustedBrands.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      quote:
        "PT Solusi Cerdas Berkualitas menyelesaikan sistem kami tepat waktu dengan kualitas luar biasa. Keahlian dan dedikasi tim mereka melampaui ekspektasi kami.",
      author: "RSBA",
      sector: "Sektor Kesehatan",
      initials: "RS",
    },
    {
      quote:
        "Profesional, inovatif, dan dapat diandalkan. Mereka mentransformasi kehadiran digital kami dan membantu menjangkau pasar baru.",
      author: "Universitas Malahayati",
      sector: "Sektor Pendidikan",
      initials: "UN",
    },
    {
      quote:
        "Dukungan teknis yang luar biasa dan solusi inovatif. Sangat direkomendasikan untuk organisasi yang ingin melakukan transformasi digital.",
      author: "Abulyatama",
      sector: "Sektor Pendidikan",
      initials: "AB",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24" aria-label="Klien terpercaya">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-1000">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 tracking-tight">
            Dipercaya oleh Pemimpin Industri
          </h2>
          <div
            className="w-20 h-1 bg-primary mx-auto mb-6"
            aria-hidden="true"
          />
          <p className="text-lg font-body text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Kami bangga bermitra dengan berbagai perusahaan dan institusi lintas
            industri, menghadirkan solusi yang mendorong kesuksesan mereka.
          </p>
        </div>

        {/* Floating Testimonials */}
        <div className="mb-20">
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative group p-8 rounded-3xl dark:bg-[#1a3a5c]/60 dark:border-white/10 bg-white border-gray-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 flex flex-col animate-in fade-in slide-in-from-bottom"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Quote watermark */}
                <div
                  className="absolute top-4 right-4 text-primary/10"
                  aria-hidden="true"
                >
                  <Quote className="w-24 h-24 transform rotate-12" />
                </div>

                {/* Quote icons */}
                <div className="flex items-center gap-2 mb-4 text-primary relative z-10">
                  <Quote className="w-6 h-6" />
                  <Quote className="w-6 h-6 -ml-4" />
                </div>

                <p className="text-base font-body text-muted-foreground leading-relaxed mb-6 grow relative z-10 italic">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-3 mt-auto relative z-10">
                  <div className="w-12 h-12 rounded-full dark:bg-primary/20 bg-primary/10 flex items-center justify-center shadow-lg">
                    <span className="text-primary font-bold text-sm">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-heading font-bold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-xs font-body text-muted-foreground">
                      {testimonial.sector}
                    </p>
                  </div>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-primary/10 via-secondary/10 to-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </div>
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <div className="text-center">
          <p className="text-muted-foreground text-sm font-body mb-8 animate-in fade-in">
            Bergabunglah dengan daftar klien puas kami yang terus bertumbuh
          </p>

          {/* Mobile: Carousel */}
          <div className="block sm:hidden">
            <div className="relative max-w-xs mx-auto">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {trustedBrands.map((brand, index) => (
                    <div key={index} className="w-full shrink-0 px-4">
                      <div className="flex items-center justify-center py-8">
                        <div className="relative h-24 w-auto">
                          <div
                            className={
                              brand.darkInvert
                                ? "dark:bg-white dark:rounded-xl dark:p-4 dark:overflow-hidden"
                                : ""
                            }
                          >
                            <Image
                              src={brand.logo}
                              alt={`${brand.name} Logo`}
                              width={300}
                              height={200}
                              className="h-24 w-auto object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-4">
                {trustedBrands.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-primary w-8"
                        : "bg-primary/30 hover:bg-primary/50 w-1.5"
                    }`}
                    aria-label={`Lihat ${trustedBrands[index].name}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop: Static Grid */}
          <div className="hidden sm:grid sm:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {trustedBrands.map((brand, index) => (
              <div
                key={index}
                className={`flex items-center justify-center transition-opacity duration-300${brand.darkInvert ? " dark:bg-white dark:rounded-xl dark:p-4 dark:overflow-hidden" : ""}`}
              >
                <div className="relative h-24 w-auto">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} Logo`}
                    width={300}
                    height={200}
                    className="h-24 w-auto object-contain hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
