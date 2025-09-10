"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { shopSidebar } from "@/constants/shop-sidebar";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import ShopSwitcher from "./shop-switcher";
import UserProfile from "./user-profile";

export default function ShopSidebar() {
  const pathname = usePathname();
  const params = useParams<{ sid: string }>();
  const shopId = params.sid;

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <ShopSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {shopSidebar.map((si) => (
                <SidebarMenuItem key={si.id}>
                  <SidebarMenuButton asChild isActive={si.isActive(pathname)}>
                    <Link href={si.url(shopId)}>
                      <si.icon />
                      <span>{si.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <UserProfile />
      </SidebarFooter>
    </Sidebar>
  );
}
