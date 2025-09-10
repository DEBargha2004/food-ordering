"use client";

import CreateShopForm from "@/components/custom/forms/create-shop";
import {
  createShopSchema,
  defaultValues,
  TCreateShopSchema,
} from "@/schema/create-shop";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function Page() {
  const form = useForm<TCreateShopSchema>({
    resolver: zodResolver(createShopSchema),
    defaultValues: defaultValues(),
  });

  const onSubmit = async (formdata: TCreateShopSchema) => {};

  return (
    <main className="flex flex-col items-center justify-start gap-10 p-5">
      <section className="space-y-3 text-center">
        <h1 className="text-4xl font-semibold">Create Your Shop</h1>
        <p className="text-lg text-muted-foreground">
          Fill out the form below to set up your new shop
        </p>
      </section>

      <section className="w-1/2">
        <CreateShopForm form={form} onSubmit={onSubmit} />
      </section>
    </main>
  );
}
