"use server";

import { account, user } from "@/db/schema";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { Auth } from "@/middlewares/inject-auth";
import { os } from "@orpc/server";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import z from "zod";

export const canUserSetPassword = os
  .$context<{ auth: Auth }>()
  .output(z.boolean())
  .handler(async ({ context }) => {
    const [res] = await db
      .select()
      .from(user)
      .leftJoin(account, eq(account.userId, user.id))
      .where(eq(user.id, context.auth!.user.id));

    if (!res.user.phoneNumberVerified) return false;
    return true;
  })
  .callable({
    context: async () => ({
      auth: await auth.api.getSession({
        headers: await headers(),
      }),
    }),
  })
  .actionable({
    context: async () => ({
      auth: await auth.api.getSession({
        headers: await headers(),
      }),
    }),
  });
