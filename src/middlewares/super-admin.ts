import { ORPCError, os } from "@orpc/server";
import { Auth } from "./inject-auth";

export const superAdminOnly = os
  .$context<{ auth: Auth }>()
  .middleware(async ({ context, next }) => {
    if (!context?.auth?.user.role?.includes("super-admin"))
      throw new ORPCError("UNAUTHORIZED");

    return next({ context });
  });
