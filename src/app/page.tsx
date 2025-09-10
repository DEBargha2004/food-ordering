"use client";

import { Button } from "@/components/ui/button";
import { authClient, useSession } from "@/lib/auth-client";
import { Store } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const handleLogout = () => {
    authClient.signOut({ fetchOptions: { onSuccess(context) {} } });
  };

  const { data } = useSession();

  const handleClick = async () => {};

  return (
    <div>
      <Button onClick={handleLogout}>Logout</Button>
      <Link href={"/shop"}>
        <Button>
          <Store /> Shop
        </Button>
      </Link>
    </div>
  );
}
