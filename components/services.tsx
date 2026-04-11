"use client";

import { services } from "@/lib/data/services";
import { getAnimationDelay } from "@/lib/utils/animation";

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-16 overflow-hidden"
      aria-labelledby="services-heading"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-1000">
          <h2
            id="services-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4"
          >
            Layanan Kami
          </h2>
          <div
            className="w-20 h-1 bg-primary mx-auto mb-4"
            aria-hidden="true"
          />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Solusi komprehensif yang dirancang untuk mentransformasi bisnis Anda
            melalui teknologi
          </p>
        </div>

        {/* Services Grid with Cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          role="list"
          aria-label="Layanan kami"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative h-full"
                style={{ animationDelay: getAnimationDelay(index) }}
                role="listitem"
              >
                {/* Card */}
                <div
                  className="
                    relative h-full p-8 rounded-3xl
                    flex flex-col
                    dark:bg-[#1a3a5c]/60 dark:border-white/10
                    bg-white border-gray-300
                    transition-all duration-300 ease-out
                    animate-in fade-in slide-in-from-bottom
                    text-center
                    hover:-translate-y-1 hover:shadow-xl
                  "
                  style={{ animationDelay: getAnimationDelay(index) }}
                >
                  {/* Icon with pulse glow */}
                  <div className="mb-6 relative">
                    <div
                      className="absolute inset-0 rounded-2xl bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-100 group-hover:scale-110"
                      aria-hidden="true"
                    />
                    <div className="relative w-20 h-20 rounded-2xl dark:bg-primary/20 bg-primary/10 flex items-center justify-center mx-auto transition-transform duration-300">
                      <Icon className="w-10 h-10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed text-base">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
