"use client";

import { products } from "@/lib/data/products";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Products() {
  return (
    <section
      id="products"
      className="relative py-16 overflow-hidden"
      aria-labelledby="products-heading"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-1000">
          <h2
            id="products-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4"
          >
            Produk Siap Pakai
          </h2>
          <div
            className="w-20 h-1 bg-primary mx-auto mb-4"
            aria-hidden="true"
          />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Solusi andal yang siap diimplementasikan untuk mempercepat
            pertumbuhan bisnis Anda
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]"
          role="list"
          aria-label="Produk kami"
        >
          {products.map((product, index) => {
            // Bento grid spans
            const isFirst = index === 0;
            const spanClass = isFirst
              ? "sm:col-span-2 lg:col-span-2 lg:row-span-2"
              : "sm:col-span-1 lg:col-span-1 lg:row-span-1";

            return (
              <article
                key={index}
                className={`
                  ${spanClass}
                  relative group cursor-pointer
                  dark:bg-[#1a3a5c]/60 dark:border-white/10
                  bg-white border-gray-300
                  rounded-2xl overflow-hidden
                  hover:-translate-y-1 hover:shadow-xl
                  transition-[transform,box-shadow] duration-300
                  animate-in fade-in slide-in-from-bottom
                  transform-[translateZ(0)]
                  isolate
                `}
                style={{ animationDelay: `${index * 100}ms` }}
                role="listitem"
              >
                {/* Product Image */}
                <div className="relative h-full">
                  <Image
                    src={product.image}
                    alt={`${product.name} - Tangkapan Layar Proyek`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out will-change-transform"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Tag — always visible */}
                  <span className="absolute top-3 right-3 z-10 px-3 py-1 rounded-full text-xs font-body font-semibold bg-white/90 backdrop-blur-sm text-gray-900 shadow-md">
                    {product.tag}
                  </span>

                  {/* Hover Overlay — slides up on hover */}
                  <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-10">
                    <div className="dark:bg-[#0a192f]/90 bg-white/95 backdrop-blur-sm px-5 py-4">
                      <h3 className="text-base font-heading font-bold text-foreground mb-1 leading-snug group-hover:text-primary transition-colors duration-300 line-clamp-1">
                        {product.name}
                      </h3>
                      <p className="font-body text-muted-foreground text-xs leading-relaxed line-clamp-2 mb-3">
                        {product.description}
                      </p>
                      <button className="w-full px-4 py-2 rounded-full bg-linear-to-r from-primary to-secondary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2">
                        Lihat Detail
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
