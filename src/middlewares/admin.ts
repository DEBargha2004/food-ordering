import { ORPCError, os } from "@orpc/server";
import { Auth } from "./inject-auth";

export const adminValidator = os
  .$context<{ auth: Auth }>()
  .use(async ({ context, next }) => {
    if (!context.auth) throw new ORPCError("UNAUTHORIZED");

    return next({ context });
  });
