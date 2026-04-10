"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  Home,
  Info,
  Layers,
  Box,
  Code2,
  Users,
  ChevronRight,
} from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  scrollToSection: (id: string) => void;
}

const NAV_ITEMS = [
  { id: "home", label: "Beranda", icon: Home },
  { id: "about", label: "Tentang", icon: Info },
  { id: "services", label: "Layanan", icon: Layers },
  { id: "products", label: "Produk", icon: Box },
  { id: "tech-stack", label: "Tech Stack", icon: Code2 },
  { id: "clients", label: "Klien", icon: Users },
];

export function MobileMenu({
  isOpen,
  onClose,
  scrollToSection,
}: MobileMenuProps) {
  const [portalEl, setPortalEl] = useState<HTMLElement | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Create a stable dedicated container once — avoids removeChild race on scroll re-renders
  useEffect(() => {
    const el = document.createElement("div");
    document.body.appendChild(el);
    setPortalEl(el);
    return () => {
      document.body.removeChild(el);
    };
  }, []);

  // Close on click outside
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    const timeout = setTimeout(() => {
      document.addEventListener("mousedown", handleClickOutside);
    }, 50);

    return () => {
      clearTimeout(timeout);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Close on ESC key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Wait for container to be ready
  if (!portalEl) return null;

  // Always call createPortal with the same stable container.
  // Render null inside when closed so React reconciles cleanly.
  return createPortal(
    isOpen ? (
      <div
        ref={menuRef}
        className="fixed top-24 left-0 right-0 z-9999 md:hidden bg-white/95 dark:bg-[#0a192f]/95 backdrop-blur-md shadow-xl border-t border-border"
      >
        {/* Nav Items */}
        <nav className="px-5 py-4 space-y-1">
          {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="group w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 hover:bg-primary/10 active:scale-[0.98]"
            >
              {/* Icon */}
              <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-200 shrink-0" />

              {/* Label */}
              <span className="flex-1 text-left text-base font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                {label}
              </span>

              {/* Arrow */}
              <ChevronRight className="w-4 h-4 text-transparent group-hover:text-primary -translate-x-2 group-hover:translate-x-0 transition-all duration-200 shrink-0" />
            </button>
          ))}
        </nav>
      </div>
    ) : null,
    portalEl,
  );
}
