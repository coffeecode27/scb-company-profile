/**
 * Type definitions for SCB Landing Page
 */

export interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface Product {
  name: string;
  description: string;
  tag: string;
  image: string;
  color: string;
}

export interface Reason {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface StatItem {
  stat: string;
  label: string;
}

export interface TrustedBrand {
  name: string;
  logo: string;
  darkInvert?: boolean;
}

export interface NavLink {
  id: string;
  label: string;
  ariaLabel: string;
}

export interface SocialLink {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}
