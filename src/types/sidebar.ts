import { Icon, LucideIcon } from "lucide-react";

export type TSidebarItem_Default = {
  url: string;
  icon: LucideIcon;
  label: string;
  isActive: (url: string) => boolean;
  pattern?: string | string[];
};

export type TSidebarItem_Dynamic = {
  url: (dynamic: string) => string;
  icon: LucideIcon;
  label: string;
  isActive: (url: string) => boolean;
  pattern?: string | string[];
};
