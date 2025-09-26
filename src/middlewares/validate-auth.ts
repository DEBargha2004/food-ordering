import { ORPCError, os } from "@orpc/server";
import { Auth } from "./inject-auth";

export const validateAuth = os
  .$context<{ auth: Auth }>()
  .middleware(({ context, next }) => {
    if (!context.auth) throw new ORPCError("UNAUTHORIZED");
    return next({ context });
  });
