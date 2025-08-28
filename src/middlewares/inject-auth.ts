import { auth } from "@/lib/auth";
import { os } from "@orpc/server";
import { headers } from "next/headers";

export const injectAuthMiddleware = os.middleware(async ({ next }) => {
  return next({
    context: {
      auth: await auth.api.getSession({
        headers: await headers(),
      }),
    },
  });
});

export type Auth = Awaited<ReturnType<typeof auth.api.getSession>>;
