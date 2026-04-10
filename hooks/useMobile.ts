"use client";

import { useState, useEffect } from "react";

/**
 * Custom hook to detect mobile screen size
 * Returns true on mobile, false on desktop
 * Defaults to false (desktop) during SSR to prevent hydration mismatch
 */
export function useMobile(breakpoint: number = 768) {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Check initial value
    checkMobile();

    // Add event listener
    window.addEventListener("resize", checkMobile, { passive: true });

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, [breakpoint]);

  // Return false during SSR to prevent hydration mismatch
  if (!mounted) return false;
  return isMobile;
}
