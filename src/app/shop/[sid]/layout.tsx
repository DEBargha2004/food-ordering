import { SidebarProvider } from "@/components/ui/sidebar";
import { cookies } from "next/headers";
import ShopSidebar from "../_components/sidebar";
import ShopNavbar from "../_components/navbar";

export default async function Layout({ children }: LayoutProps<"/shop/[sid]">) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";
  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <main className="min-h-dvh flex w-full">
        <ShopSidebar />
        <div className="flex-1 h-full">
          <ShopNavbar />
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
}
