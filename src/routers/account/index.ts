import { auth } from "@/lib/auth";
import { Auth, injectAuthMiddleware } from "@/middlewares/inject-auth";
import { onboardingSchema } from "@/schema/onboarding";
import { ORPCError, os } from "@orpc/server";
import { headers } from "next/headers";
import z from "zod";

export const accountRouter = os
  .use(injectAuthMiddleware)
  .use(async ({ context, next }) => {
    if (!context.auth) throw new ORPCError("UNAUTHORIZED");
    return next({ context });
  })
  .router({
    onboarding: os
      .$context<{ auth: Auth }>()
      .input(onboardingSchema)
      .output(z.boolean())
      .handler(async ({ context, input }) => {
        try {
          await auth.api.setPassword({
            body: { newPassword: input.confirmPassword },
            headers: await headers(),
          });

          await auth.api.updateUser({
            body: { name: input.name },
            headers: await headers(),
          });
        } catch (error) {
          console.log((error as any).body);
          throw new ORPCError("BAD_REQUEST");
        }

        return true;
      }),
  });
