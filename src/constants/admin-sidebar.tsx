import { TSidebarItem_Default } from "@/types/sidebar";
import { Hotel, LayoutDashboard, ShieldCheck, Store } from "lucide-react";
import micromatch from "micromatch";

export const adminSidebar: TSidebarItem_Default[] = [
  {
    id: "dashboard",
    url: "/admin",
    icon: LayoutDashboard,
    label: "Dashboard",
    isActive(url) {
      return url === this.url;
    },
  },
  {
    id: "shop",
    url: "/admin/shop",
    icon: Store,
    label: "Shop",
    pattern: "/admin/shop",
    isActive(url) {
      return micromatch.isMatch(url, this.pattern!);
    },
  },
  {
    id: "verification",
    url: "/admin/verification",
    icon: ShieldCheck,
    label: "Verifications",
    pattern: "/admin/verification",
    isActive(url) {
      return micromatch.isMatch(url, this.pattern!);
    },
  },
];
