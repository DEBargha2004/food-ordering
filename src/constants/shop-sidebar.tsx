import { TSidebarItem_Default, TSidebarItem_Dynamic } from "@/types/sidebar";
import {
  BadgeIndianRupee,
  Bike,
  Boxes,
  CookingPot,
  LayoutDashboard,
  NotebookPen,
  Users2,
} from "lucide-react";
import micromatch from "micromatch";

export const shopSidebar: TSidebarItem_Dynamic[] = [
  {
    url(shopId) {
      return `/shop/${shopId}`;
    },
    label: "Dashboard",
    pattern: "/shop/*",
    icon: LayoutDashboard,
    isActive(url) {
      return micromatch.isMatch(url, this.pattern!);
    },
  },
  {
    url(dynamic) {
      return `/shop/${dynamic}/members`;
    },
    label: "Members",
    icon: Users2,
    pattern: "/shop/*/members/**",
    isActive(url) {
      return micromatch.isMatch(url, this.pattern!);
    },
  },
  {
    url(dynamic) {
      return `/shop/${dynamic}/categories`;
    },
    label: "Categories",
    icon: Boxes,
    pattern: "/shop/*/categories/**",
    isActive(url) {
      return micromatch.isMatch(url, this.pattern!);
    },
  },
  {
    url(dynamic) {
      return `/shop/${dynamic}/products`;
    },
    label: "Products",
    icon: CookingPot,
    pattern: "/shop/*/products/**",
    isActive(url) {
      return micromatch.isMatch(url, this.pattern!);
    },
  },
  {
    url(dynamic) {
      return `/shop/${dynamic}/orders`;
    },
    label: "Orders",
    icon: NotebookPen,
    pattern: "/shop/*/orders/**",
    isActive(url) {
      return micromatch.isMatch(url, this.pattern!);
    },
  },
  {
    url(dynamic) {
      return `/shop/${dynamic}/delivery`;
    },
    label: "Delivery",
    icon: Bike,
    pattern: "/shop/*/delivery/**",
    isActive(url) {
      return micromatch.isMatch(url, this.pattern!);
    },
  },
  {
    url(dynamic) {
      return `/shop/${dynamic}/revenue`;
    },
    label: "Revenue",
    icon: BadgeIndianRupee,
    pattern: "/shop/*/revenue/**",
    isActive(url) {
      return micromatch.isMatch(url, this.pattern!);
    },
  },
];
