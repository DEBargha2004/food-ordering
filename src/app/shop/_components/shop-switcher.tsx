import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { DropdownMenuLabel } from "@radix-ui/react-dropdown-menu";
import { ChevronsUpDown, Plus } from "lucide-react";

const teams = [
  {
    name: "Acme Inc",
  },
  {
    name: "Acme Corp.",
  },
  {
    name: "Evil Corp.",
  },
];

export default function ShopSwitcher() {
  const { isMobile } = useSidebar();
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg"></div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">Patuk</span>
                {/* <span className="truncate text-xs">{activeTeam.plan}</span> */}
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-muted-foreground text-xs p-2">
              Shops
            </DropdownMenuLabel>
            {teams.map((team, index) => (
              <DropdownMenuItem key={team.name} className="gap-2 p-2">
                <div className="flex size-7 items-center justify-center rounded-md border"></div>
                <div>
                  <h4>{team.name}</h4>
                  <p className="text-xs text-muted-foreground">Owner</p>
                </div>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2 p-2">
              <div className="flex size-6 items-center justify-center rounded-md border bg-transparent">
                <Plus className="size-4" />
              </div>
              <div className="text-muted-foreground font-medium">
                Create Shop
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
