import { Icon, LucideIcon } from "lucide-react";
import { TypedRoute } from ".";
import { UrlObject } from "url";

export type TSidebarItem_Default = {
  id: string;
  url: TypedRoute;
  icon: LucideIcon;
  label: string;
  isActive: (url: string) => boolean;
  pattern?: string | string[];
};

export type TSidebarItem_Dynamic = {
  id: string;
  url: (dynamic: string) => UrlObject;
  icon: LucideIcon;
  label: string;
  isActive: (url: string) => boolean;
  pattern?: string | string[];
};
