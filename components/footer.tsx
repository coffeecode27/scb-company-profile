"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://facebook.com/solucerah",
      svg: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
        </svg>
      ),
    },
    {
      name: "X (Twitter)",
      href: "https://twitter.com/solucerah",
      svg: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/solucerah",
      svg: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="border-t border-border/50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-bold text-foreground">
              PT Solusi Cerdas Berkualitas
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Mengubah ide menjadi solusi digital yang kuat sejak 2014.
            </p>
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition p-2 rounded-lg hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                  aria-label={`Kunjungi halaman ${social.name} kami`}
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-foreground">Layanan</h4>
            <ul className="space-y-2 text-sm font-body text-muted-foreground">
              <li>
                <Link
                  href="#services"
                  className="hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded"
                >
                  Pengembangan Kustom
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded"
                >
                  Aplikasi Web & Mobile
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded"
                >
                  Integrasi Sistem
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded"
                >
                  Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Produk</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="#products"
                  className="hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded"
                >
                  Analitik
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded"
                >
                  E-Dagang
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded"
                >
                  Sistem CRM
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded"
                >
                  Suite ERP
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Kontak</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>
                  Jl. Teuku Iskandar, Lamglumpang, Kec. Ulee Kareng, Kota Banda
                  Aceh, Aceh 24411
                </span>
              </li>
              <li>
                <a
                  href="tel:+6265136200070"
                  className="hover:text-primary transition flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  (0651) 36 200 70
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6281269333588"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  0812 6933 3588 (WhatsApp)
                </a>
              </li>
              <li>
                <a
                  href="mailto:cs@verd.net.id"
                  className="hover:text-primary transition flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  cs@verd.net.id
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p className="text-center sm:text-left">
            &copy; {currentYear} PT Solusi Cerdas Berkualitas. Seluruh hak cipta
            dilindungi.
          </p>
          <div className="flex gap-4 sm:gap-6">
            <Link
              href="#"
              className="hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded"
            >
              Kebijakan Privasi
            </Link>
            <Link
              href="#"
              className="hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded"
            >
              Syarat Layanan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
