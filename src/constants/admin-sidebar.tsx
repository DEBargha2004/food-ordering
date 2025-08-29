import { TSidebarItem_Default } from "@/types/sidebar";
import { Hotel, LayoutDashboard, ShieldCheck } from "lucide-react";
import micromatch from "micromatch";

export const adminSidebar: TSidebarItem_Default[] = [
  {
    url: "/admin",
    icon: LayoutDashboard,
    label: "Dashboard",
    isActive(url) {
      return url === this.url;
    },
  },
  {
    url: "/admin/restaurant",
    icon: Hotel,
    label: "Restaurants",
    pattern: "/admin/restaurent",
    isActive(url) {
      return micromatch.isMatch(url, this.pattern!);
    },
  },
  {
    url: "/admin/verification",
    icon: ShieldCheck,
    label: "Verifications",
    pattern: "/admin/verification",
    isActive(url) {
      return micromatch.isMatch(url, this.pattern!);
    },
  },
];
