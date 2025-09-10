import { member, organization } from "@/db/schema";
import { db } from "@/lib/db";
import { Auth, injectAuthMiddleware } from "@/middlewares/inject-auth";
import { ORPCError, os } from "@orpc/server";
import { eq } from "drizzle-orm";
import z from "zod";

const getAllUserShopsContract = z.array(
  z.object({
    name: z.string().nullable(),
    role: z.string(),
    verificationStatus: z.boolean().nullable(),
  })
);

export const shopRouter = os
  .use(injectAuthMiddleware)
  .use(async ({ context, next }) => {
    if (!context) throw new ORPCError("UNAUTHORIZED");
    return next({ context });
  })
  .router({
    getAllUserShops: os
      .$context<{ auth: Auth }>()
      .output(getAllUserShopsContract)
      .handler(async ({ context }) => {
        const res = await db
          .select({
            name: organization.name,
            role: member.role,
            verificationStatus: organization.isVerified,
          })
          .from(member)
          .leftJoin(organization, eq(member.organizationId, organization.id))
          .where(eq(member.userId, context.auth!.user.id));
        return res;
      }),
  });
