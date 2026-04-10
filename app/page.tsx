"use client";

import Navbar from "@/components/navbar";
import Hero from "../components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import Products from "@/components/products";
import WhyChooseUs from "@/components/why-choose-us";
import TechStack from "@/components/tech-stack";
import Clients from "@/components/clients";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import FloatingWhatsApp from "@/components/floating-whatsapp";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden dark:bg-[#0a192f] bg-white">
      {/* Global Tech Background Pattern */}
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden z-0"
        aria-hidden="true"
      >
        {/* SVG Lines, Particles, Circuit & Hexagon Patterns */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          aria-hidden="true"
        >
          <defs>
            <linearGradient
              id="global-line-grad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <filter id="global-glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Diagonal lines top-left to bottom-right */}
          <g className="animate-pulse" opacity="0.6">
            <line
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
              stroke="url(#global-line-grad)"
              strokeWidth="2"
            />
            <line
              x1="0%"
              y1="10%"
              x2="90%"
              y2="100%"
              stroke="url(#global-line-grad)"
              strokeWidth="1.5"
            />
            <line
              x1="10%"
              y1="0%"
              x2="100%"
              y2="90%"
              stroke="url(#global-line-grad)"
              strokeWidth="1.5"
            />
            <line
              x1="0%"
              y1="20%"
              x2="80%"
              y2="100%"
              stroke="url(#global-line-grad)"
              strokeWidth="1"
            />
            <line
              x1="20%"
              y1="0%"
              x2="100%"
              y2="80%"
              stroke="url(#global-line-grad)"
              strokeWidth="1"
            />
          </g>

          {/* Diagonal lines top-right to bottom-left */}
          <g
            className="animate-pulse"
            opacity="0.6"
            style={{ animationDelay: "0.5s" }}
          >
            <line
              x1="100%"
              y1="0%"
              x2="0%"
              y2="100%"
              stroke="url(#global-line-grad)"
              strokeWidth="2"
            />
            <line
              x1="100%"
              y1="10%"
              x2="10%"
              y2="100%"
              stroke="url(#global-line-grad)"
              strokeWidth="1.5"
            />
            <line
              x1="90%"
              y1="0%"
              x2="0%"
              y2="90%"
              stroke="url(#global-line-grad)"
              strokeWidth="1.5"
            />
            <line
              x1="100%"
              y1="20%"
              x2="20%"
              y2="100%"
              stroke="url(#global-line-grad)"
              strokeWidth="1"
            />
            <line
              x1="80%"
              y1="0%"
              x2="0%"
              y2="80%"
              stroke="url(#global-line-grad)"
              strokeWidth="1"
            />
          </g>

          {/* Corner nodes */}
          <g className="animate-pulse" style={{ animationDelay: "0.2s" }}>
            <circle
              cx="15%"
              cy="15%"
              r="6"
              fill="url(#global-line-grad)"
              filter="url(#global-glow)"
              opacity="0.8"
            />
            <circle
              cx="85%"
              cy="15%"
              r="6"
              fill="url(#global-line-grad)"
              filter="url(#global-glow)"
              opacity="0.8"
            />
            <circle
              cx="15%"
              cy="85%"
              r="6"
              fill="url(#global-line-grad)"
              filter="url(#global-glow)"
              opacity="0.8"
            />
            <circle
              cx="85%"
              cy="85%"
              r="6"
              fill="url(#global-line-grad)"
              filter="url(#global-glow)"
              opacity="0.8"
            />
            <circle
              cx="50%"
              cy="50%"
              r="8"
              fill="url(#global-line-grad)"
              filter="url(#global-glow)"
              opacity="0.9"
            />
          </g>

          {/* Connecting dashed lines to center */}
          <g
            className="animate-pulse"
            opacity="0.4"
            style={{ animationDelay: "0.7s" }}
          >
            <line
              x1="15%"
              y1="15%"
              x2="50%"
              y2="50%"
              stroke="url(#global-line-grad)"
              strokeWidth="1.5"
              strokeDasharray="5,5"
            />
            <line
              x1="85%"
              y1="15%"
              x2="50%"
              y2="50%"
              stroke="url(#global-line-grad)"
              strokeWidth="1.5"
              strokeDasharray="5,5"
            />
            <line
              x1="15%"
              y1="85%"
              x2="50%"
              y2="50%"
              stroke="url(#global-line-grad)"
              strokeWidth="1.5"
              strokeDasharray="5,5"
            />
            <line
              x1="85%"
              y1="85%"
              x2="50%"
              y2="50%"
              stroke="url(#global-line-grad)"
              strokeWidth="1.5"
              strokeDasharray="5,5"
            />
          </g>

          {/* Circuit board patterns */}
          <g
            className="animate-pulse"
            opacity="0.5"
            style={{ animationDelay: "1s" }}
          >
            <path
              d="M 10 20 L 30 20 L 30 30 L 50 30"
              stroke="url(#global-line-grad)"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="10" cy="20" r="4" fill="url(#global-line-grad)" />
            <circle cx="30" cy="20" r="4" fill="url(#global-line-grad)" />
            <circle cx="30" cy="30" r="4" fill="url(#global-line-grad)" />
            <circle cx="50" cy="30" r="4" fill="url(#global-line-grad)" />
            <path
              d="M 90 30 L 90 50 L 80 50 L 80 70"
              stroke="url(#global-line-grad)"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="90" cy="30" r="4" fill="url(#global-line-grad)" />
            <circle cx="90" cy="50" r="4" fill="url(#global-line-grad)" />
            <circle cx="80" cy="50" r="4" fill="url(#global-line-grad)" />
            <circle cx="80" cy="70" r="4" fill="url(#global-line-grad)" />
            <path
              d="M 20 90 L 40 90 L 40 80 L 60 80"
              stroke="url(#global-line-grad)"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="20" cy="90" r="4" fill="url(#global-line-grad)" />
            <circle cx="40" cy="90" r="4" fill="url(#global-line-grad)" />
            <circle cx="40" cy="80" r="4" fill="url(#global-line-grad)" />
            <circle cx="60" cy="80" r="4" fill="url(#global-line-grad)" />
            <path
              d="M 10 40 L 10 60 L 20 60 L 20 80"
              stroke="url(#global-line-grad)"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="10" cy="40" r="4" fill="url(#global-line-grad)" />
            <circle cx="10" cy="60" r="4" fill="url(#global-line-grad)" />
            <circle cx="20" cy="60" r="4" fill="url(#global-line-grad)" />
            <circle cx="20" cy="80" r="4" fill="url(#global-line-grad)" />
          </g>

          {/* Hexagon pattern */}
          <g
            className="animate-pulse"
            opacity="0.3"
            style={{ animationDelay: "1.5s" }}
          >
            <polygon
              points="30,10 40,15 40,25 30,30 20,25 20,15"
              stroke="url(#global-line-grad)"
              strokeWidth="1.5"
              fill="none"
            />
            <polygon
              points="70,10 80,15 80,25 70,30 60,25 60,15"
              stroke="url(#global-line-grad)"
              strokeWidth="1.5"
              fill="none"
            />
            <polygon
              points="30,70 40,75 40,85 30,90 20,85 20,75"
              stroke="url(#global-line-grad)"
              strokeWidth="1.5"
              fill="none"
            />
            <polygon
              points="70,70 80,75 80,85 70,90 60,85 60,75"
              stroke="url(#global-line-grad)"
              strokeWidth="1.5"
              fill="none"
            />
            <polygon
              points="50,40 60,45 60,55 50,60 40,55 40,45"
              stroke="url(#global-line-grad)"
              strokeWidth="2"
              fill="none"
            />
          </g>

          {/* Floating particles */}
          <g className="animate-pulse" style={{ animationDelay: "0.4s" }}>
            <circle cx="25%" cy="25%" r="3" fill="#06b6d4" opacity="0.6" />
            <circle cx="75%" cy="25%" r="3" fill="#3b82f6" opacity="0.6" />
            <circle cx="25%" cy="75%" r="3" fill="#8b5cf6" opacity="0.6" />
            <circle cx="75%" cy="75%" r="3" fill="#06b6d4" opacity="0.6" />
            <circle cx="35%" cy="45%" r="2" fill="#3b82f6" opacity="0.5" />
            <circle cx="65%" cy="45%" r="2" fill="#8b5cf6" opacity="0.5" />
            <circle cx="45%" cy="35%" r="2" fill="#06b6d4" opacity="0.5" />
            <circle cx="55%" cy="65%" r="2" fill="#3b82f6" opacity="0.5" />
          </g>

          {/* Data flow curves */}
          <g
            className="animate-pulse"
            opacity="0.4"
            style={{ animationDelay: "1.2s" }}
          >
            <path
              d="M 5 50 Q 25 30, 45 50 T 85 50"
              stroke="url(#global-line-grad)"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="8,4"
            />
            <path
              d="M 50 5 Q 30 25, 50 45 T 50 85"
              stroke="url(#global-line-grad)"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="8,4"
            />
          </g>
        </svg>

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(6, 182, 212, 0.15) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(6, 182, 212, 0.15) 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        {/* Radial depth overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/50" />
      </div>

      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:font-medium transition"
      >
        Skip to main content
      </a>

      <div id="main-content" className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Products />
          <WhyChooseUs />
          <TechStack />
          <Clients />
          <CTA />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </div>
  );
}
