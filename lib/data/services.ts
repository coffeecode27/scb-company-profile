import { Service } from "@/types";
import { Settings, Smartphone, Link2, Bot } from "lucide-react";

/**
 * Service data configuration
 */
export const services: Service[] = [
  {
    icon: Settings,
    title: "Custom Software Development",
    description:
      "Tailored solutions built to your specific business needs with cutting-edge technology and best practices.",
  },
  {
    icon: Smartphone,
    title: "Web & Mobile Apps",
    description:
      "Responsive and powerful applications for web, iOS, and Android platforms to reach your customers everywhere.",
  },
  {
    icon: Link2,
    title: "System Integration",
    description:
      "Seamlessly connect your existing systems and data sources for unified, efficient operations.",
  },
  {
    icon: Bot,
    title: "Automation Solutions",
    description:
      "Streamline your workflows and reduce manual tasks with intelligent automation systems.",
  },
];
