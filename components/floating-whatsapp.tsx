"use client";

import { ThemeToggle } from "./theme-toggle";

export default function FloatingWhatsApp() {
  return (
    <div
      className="fixed bottom-6 right-6 z-50 rounded-full bg-background/90 backdrop-blur-sm border border-border shadow-xl p-1.5"
      aria-label="Floating theme toggle"
    >
      <ThemeToggle />
    </div>
  );
}
