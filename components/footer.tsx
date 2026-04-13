"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://instagram.com/solusicerdas",
      svg: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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
              Mengubah ide menjadi solusi digital yang kuat sejak 2020.
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
              {/* Healthcare Solutions sub-group */}
              <li>
                <p className="text-xs font-semibold text-primary/80 uppercase tracking-wide mt-1 mb-1">
                  Healthcare Solutions
                </p>
                <ul className="space-y-1.5 pl-3 border-l border-primary/20">
                  <li>
                    <Link
                      href="#products"
                      className="hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded"
                    >
                      Sistem Informasi Manajemen Rumah Sakit (SIMRS)
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#products"
                      className="hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded"
                    >
                      Radiology Information System (RIS)
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  href="#products"
                  className="hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded"
                >
                  Content Management System (CMS)
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded"
                >
                  Point of Sales (POS)
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded"
                >
                  SIM Keuangan
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded"
                >
                  Sistem Informasi Akademik (SIAKAD)
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded"
                >
                  Sistem Penerimaan Mahasiswa Baru (SIPMB)
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
                  sales@solusicerdas.org
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
