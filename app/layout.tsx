import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import { JsonLd } from "@/components/json-ld";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://solucerah.id";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "PT Solusi Cerdas Berkualitas - Custom Software Development",
    template: "%s | SCB",
  },
  description:
    "Transform your business with cutting-edge custom software development, web & mobile apps, and digital solutions. Trusted by 200+ brands since 2014.",
  keywords: [
    "custom software development",
    "web development",
    "mobile apps",
    "ERP",
    "CRM",
    "business automation",
    "digital transformation",
    "Indonesia",
    "Jakarta",
  ],
  authors: [{ name: "PT Solusi Cerdas Berkualitas" }],
  creator: "PT Solusi Cerdas Berkualitas",
  publisher: "PT Solusi Cerdas Berkualitas",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  generator: "v0.app",
  icons: {
    icon: "/logo scb/logo2.svg",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "PT Solusi Cerdas Berkualitas - Custom Software Development",
    description:
      "Transform your business with cutting-edge custom software development, web & mobile apps, and digital solutions.",
    siteName: "SCB",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PT Solusi Cerdas Berkualitas - Custom Software Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PT Solusi Cerdas Berkualitas",
    description: "Transform your business with cutting-edge technology",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification tokens here
    // google: 'your-google-verification-token',
    // yandex: 'your-yandex-verification-token',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PT Solusi Cerdas Berkualitas",
    url: SITE_URL,
    logo: `${SITE_URL}/logo scb/logo1.svg`,
    foundingDate: "2014",
    description:
      "Custom software development company specializing in web & mobile apps, ERP, CRM, and digital transformation solutions.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jakarta",
      addressCountry: "ID",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+62-21-1234-5678",
      contactType: "customer service",
      email: "hello@solucerah.id",
      availableLanguage: ["English", "Indonesian"],
    },
    sameAs: [
      "https://facebook.com/solucerah",
      "https://twitter.com/solucerah",
      "https://linkedin.com/company/solucerah",
    ],
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
  };

  return (
    <html
      lang="en"
      className={`scroll-smooth ${sora.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="font-body antialiased relative">
        {/* Global Background Pattern */}
        <div
          className="fixed inset-0 pointer-events-none overflow-hidden z-0"
          aria-hidden="true"
        >
          {/* Subtle gradient orbs */}
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-bl from-purple-500/10 via-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
          <div
            className="absolute bottom-1/4 left-1/3 w-[550px] h-[550px] bg-gradient-to-tr from-blue-500/10 via-cyan-500/10 to-transparent rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />

          {/* Global Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
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

          {/* Subtle diagonal lines */}
          <svg
            className="absolute inset-0 w-full h-full opacity-5"
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
            </defs>
            <g opacity="0.6">
              <line
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
                stroke="url(#global-line-grad)"
                strokeWidth="1"
              />
              <line
                x1="100%"
                y1="0%"
                x2="0%"
                y2="100%"
                stroke="url(#global-line-grad)"
                strokeWidth="1"
              />
              <line
                x1="0%"
                y1="20%"
                x2="80%"
                y2="100%"
                stroke="url(#global-line-grad)"
                strokeWidth="0.5"
              />
              <line
                x1="20%"
                y1="0%"
                x2="100%"
                y2="80%"
                stroke="url(#global-line-grad)"
                strokeWidth="0.5"
              />
              <line
                x1="100%"
                y1="20%"
                x2="20%"
                y2="100%"
                stroke="url(#global-line-grad)"
                strokeWidth="0.5"
              />
              <line
                x1="80%"
                y1="0%"
                x2="0%"
                y2="80%"
                stroke="url(#global-line-grad)"
                strokeWidth="0.5"
              />
            </g>
          </svg>
        </div>

        <div className="relative z-10">
          <JsonLd data={jsonLd} />
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          {process.env.NODE_ENV === "production" && <Analytics />}
        </div>
      </body>
    </html>
  );
}
