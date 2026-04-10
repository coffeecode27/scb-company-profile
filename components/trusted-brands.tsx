"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { trustedBrands } from "@/lib/data/brands";

export default function TrustedBrands() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % trustedBrands.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-16 sm:py-20" aria-label="Trusted brands">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4 tracking-tight">
            Trusted by Enterprises and Institutions
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" aria-hidden="true" />
        </div>

        {/* Mobile: Carousel - Desktop: Grid */}
        <div className="block sm:hidden">
          {/* Mobile Carousel */}
          <div className="relative max-w-xs mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {trustedBrands.map((brand, index) => (
                  <div key={index} className="w-full shrink-0 px-4">
                    <div className="flex items-center justify-center py-8">
                      <div className="relative h-56 w-auto">
                        <div
                          className={
                            brand.darkInvert
                              ? "dark:bg-white dark:rounded-lg dark:p-2"
                              : ""
                          }
                        >
                          <Image
                            src={brand.logo}
                            alt={`${brand.name} Logo`}
                            width={350}
                            height={250}
                            className="h-56 w-auto object-contain"
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
                  aria-label={`Go to ${trustedBrands[index].name}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden sm:grid sm:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {trustedBrands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              <div
                className={`relative h-40 sm:h-48 lg:h-56 w-auto${brand.darkInvert ? " dark:bg-white dark:rounded-lg dark:p-2" : ""}`}
              >
                <Image
                  src={brand.logo}
                  alt={`${brand.name} Logo`}
                  width={300}
                  height={200}
                  className={`h-40 sm:h-48 lg:h-56 w-auto object-contain hover:scale-110 transition-transform duration-300`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
