import { TSidebarItem_Dynamic } from "@/types/sidebar";
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
    id: "dashboard",
    url(shopId) {
      return new URL(`/shop/${shopId}`);
    },
    label: "Dashboard",
    pattern: "/shop/*",
    icon: LayoutDashboard,
    isActive(url) {
      return micromatch.isMatch(url, this.pattern!);
    },
  },
  {
    id: "members",
    url(dynamic) {
      return new URL(`/shop/${dynamic}/members`);
    },
    label: "Members",
    icon: Users2,
    pattern: "/shop/*/members/**",
    isActive(url) {
      return micromatch.isMatch(url, this.pattern!);
    },
  },
  {
    id: "categories",
    url(dynamic) {
      return new URL(`/shop/${dynamic}/categories`);
    },
    label: "Categories",
    icon: Boxes,
    pattern: "/shop/*/categories/**",
    isActive(url) {
      return micromatch.isMatch(url, this.pattern!);
    },
  },
  {
    id: "products",
    url(dynamic) {
      return new URL(`/shop/${dynamic}/products`);
    },
    label: "Products",
    icon: CookingPot,
    pattern: "/shop/*/products/**",
    isActive(url) {
      return micromatch.isMatch(url, this.pattern!);
    },
  },
  {
    id: "orders",
    url(dynamic) {
      return new URL(`/shop/${dynamic}/orders`);
    },
    label: "Orders",
    icon: NotebookPen,
    pattern: "/shop/*/orders/**",
    isActive(url) {
      return micromatch.isMatch(url, this.pattern!);
    },
  },
  {
    id: "delivery",
    url(dynamic) {
      return new URL(`/shop/${dynamic}/delivery`);
    },
    label: "Delivery",
    icon: Bike,
    pattern: "/shop/*/delivery/**",
    isActive(url) {
      return micromatch.isMatch(url, this.pattern!);
    },
  },
  {
    id: "revenue",
    url(dynamic) {
      return new URL(`/shop/${dynamic}/revenue`);
    },
    label: "Revenue",
    icon: BadgeIndianRupee,
    pattern: "/shop/*/revenue/**",
    isActive(url) {
      return micromatch.isMatch(url, this.pattern!);
    },
  },
];
