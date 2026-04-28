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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://solusicerdas.org";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:
      "Jasa Custom Software & Web Development Profesional | PT Solusi Cerdas Berkualitas",
    template: "%s | SCB",
  },

  description:
    "Tingkatkan efisiensi dan pertumbuhan bisnis Anda dengan jasa custom software dan pengembangan aplikasi web profesional. Dipercaya 10+ klien sejak 2020.",

  keywords: [
    "jasa custom software",
    "software house indonesia",
    "web development indonesia",
    "pengembangan aplikasi web",
    "erp system",
    "crm system",
    "digitalisasi bisnis",
    "otomasi bisnis",
    "software house banda aceh",
  ],

  authors: [{ name: "PT Solusi Cerdas Berkualitas" }],
  creator: "PT Solusi Cerdas Berkualitas",
  publisher: "PT Solusi Cerdas Berkualitas",

  category: "technology",
  classification: "business",

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
    locale: "id_ID",
    url: SITE_URL,
    title:
      "Jasa Custom Software & Web Development Profesional | PT Solusi Cerdas Berkualitas",
    description:
      "Tingkatkan bisnis Anda dengan software kustom dan aplikasi web yang cepat, scalable, dan siap digunakan.",
    siteName: "Solusi Cerdas Berkualitas",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jasa Custom Software & Web Development Profesional",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "PT Solusi Cerdas Berkualitas",
    description:
      "Custom software & web development untuk meningkatkan efisiensi dan pertumbuhan bisnis Anda.",
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
    // google: "your-google-verification-token",
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
    foundingDate: "2020",
    description:
      "Perusahaan pengembang software kustom yang berfokus pada aplikasi web, ERP, CRM, dan solusi digital untuk transformasi bisnis.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Banda Aceh",
      addressCountry: "ID",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+6289691733479",
      contactType: "customer service",
      email: "sales@solusicerdas.org",
      availableLanguage: ["Indonesian", "English"],
    },
    sameAs: ["https://www.instagram.com/solusicerdasberkualitas/"],
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
  };

  return (
    <html
      lang="id"
      className={`scroll-smooth ${sora.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="font-body antialiased relative">
        {/* Background */}
        <div
          className="fixed inset-0 pointer-events-none overflow-hidden z-0"
          aria-hidden="true"
        >
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-bl from-purple-500/10 via-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
          <div
            className="absolute bottom-1/4 left-1/3 w-[550px] h-[550px] bg-gradient-to-tr from-blue-500/10 via-cyan-500/10 to-transparent rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />

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
