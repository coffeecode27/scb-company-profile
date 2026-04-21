import { TrustedBrand } from "@/types";

/**
 * Trusted brands data configuration with real partner logos
 */
export const trustedBrands: TrustedBrand[] = [
  // { name: "Abulyatama", logo: "/partners/abulyatama.svg", darkInvert: true },
  // { name: "malahayati", logo: "/partners/malahayati.svg", darkInvert: true },
  { name: "RSBA", logo: "/partners/rsba.svg", darkInvert: true },
  { name: "RSPur", logo: "/partners/rspur.svg", darkInvert: true },
];

/**
 * Navigation links configuration
 */
export const navLinks = [
  { id: "home", label: "Home", ariaLabel: "Navigate to home section" },
  {
    id: "services",
    label: "Service",
    ariaLabel: "Navigate to services section",
  },
  { id: "products", label: "Work", ariaLabel: "Navigate to products section" },
  { id: "about", label: "About", ariaLabel: "Navigate to about section" },
];
