"use client";

import { queryKeys } from "@/constants/query-keys";
import { ShopCard, ShopCardTitle } from "./_components/shop-card";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { orpc } from "@/lib/orpc";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Store } from "lucide-react";

export default function Page({}: PageProps<"/shop">) {
  const shops = useQuery({
    queryKey: [queryKeys.getShopsOfUser],
    queryFn: orpc.shop.getAllUserShops,
  });

  return (
    <main className="p-5 space-y-6">
      <section className="flex justify-end items-center">
        <Link href={"/shop/new"}>
          <Button>
            <Store />
            New
          </Button>
        </Link>
      </section>
      <section className="grid grid-cols-6 gap-5">
        {shops.data?.map((_, i) => (
          <ShopCard key={i} title={i.toString()}>
            <ShopCardTitle>{i}</ShopCardTitle>
          </ShopCard>
        ))}
      </section>
    </main>
  );
}
