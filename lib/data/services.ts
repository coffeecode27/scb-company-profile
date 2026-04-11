import { Service } from "@/types";
import { Settings, Smartphone, Link2, Bot } from "lucide-react";

/**
 * Service data configuration
 */
export const services: Service[] = [
  {
    icon: Settings,
    title: "Pengembangan Software Kustom",
    description:
      "Solusi khusus yang dibangun sesuai kebutuhan bisnis Anda dengan teknologi modern dan praktik terbaik.",
  },
  {
    icon: Smartphone,
    title: "Aplikasi Web & Mobile",
    description:
      "Aplikasi responsif dan andal untuk web, iOS, dan Android agar bisnis Anda menjangkau pelanggan di mana saja.",
  },
  {
    icon: Link2,
    title: "Integrasi Sistem",
    description:
      "Hubungkan sistem dan sumber data yang sudah ada secara mulus untuk operasional yang lebih efisien dan terpadu.",
  },
  {
    icon: Bot,
    title: "Solusi Otomasi",
    description:
      "Sederhanakan alur kerja dan kurangi tugas manual dengan sistem otomasi yang cerdas.",
  },
];
