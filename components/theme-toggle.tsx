"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

/**
 * Modern Theme Toggle Switch
 */
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Prevent hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="w-10 h-10 rounded-full bg-muted"
        aria-hidden="true"
        tabIndex={-1}
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group w-10 h-10 rounded-full bg-muted hover:bg-muted/80 border border-border/50 shadow-sm flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      suppressHydrationWarning
    >
      {isDark ? (
        <Sun
          className="w-4.5 h-4.5 text-yellow-400 transition-transform duration-300 group-hover:rotate-45"
          strokeWidth={2}
        />
      ) : (
        <Moon
          className="w-4.5 h-4.5 text-slate-600 transition-transform duration-300 group-hover:-rotate-12"
          strokeWidth={2}
        />
      )}
    </button>
  );
}
