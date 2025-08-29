import { SidebarProvider } from "@/components/ui/sidebar";
import AdminSidebar from "./_components/sidebar";
import AdminNavbar from "./_components/navbar";
import { cookies } from "next/headers";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";
  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <main className="min-h-dvh flex w-full">
        <AdminSidebar />
        <div className="flex-1 min-h-full">
          <AdminNavbar />
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
}
