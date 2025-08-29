"use client";

import { ModeToggle } from "@/components/custom/mode-toggle";
import { cn } from "@/lib/utils";

export default function AdminNavbar() {
  return (
    <nav
      className={cn(
        "min-h-14 w-full border-b sticky top-0 bg-muted px-2",
        "flex justify-end items-center"
      )}
    >
      <ModeToggle />
    </nav>
  );
}
