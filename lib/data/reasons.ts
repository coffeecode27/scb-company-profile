import { Reason } from "@/types";
import { Users, Building2, Zap, TrendingUp } from "lucide-react";

/**
 * Reasons to choose us data configuration with professional icons
 */
export const reasons: Reason[] = [
  {
    icon: Users,
    title: "Experienced Team",
    description:
      "Seasoned professionals with 10+ years in custom software development and digital transformation.",
  },
  {
    icon: Building2,
    title: "Scalable Architecture",
    description:
      "Built with future growth in mind. Our solutions scale seamlessly with your business needs.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description:
      "Agile methodology ensures rapid development without compromising on quality and standards.",
  },
  {
    icon: TrendingUp,
    title: "Business-Oriented",
    description:
      "We focus on ROI and business outcomes, not just technology. Your success is our priority.",
  },
];

/**
 * Statistics data configuration
 */
export const stats = [
  { stat: "150+", label: "Projects Completed" },
  { stat: "50+", label: "Happy Clients" },
  { stat: "100%", label: "Delivery Rate" },
  { stat: "10+", label: "Years Experience" },
];
