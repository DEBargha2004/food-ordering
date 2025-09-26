import { member, organization } from "@/db/schema";
import { db } from "@/lib/db";
import { Auth, injectAuthMiddleware } from "@/middlewares/inject-auth";
import { superAdminOnlyMiddleware } from "@/middlewares/super-admin";
import { validateAuth } from "@/middlewares/validate-auth";
import { createShopSchema } from "@/schema/create-shop";
import { os } from "@orpc/server";
import { eq } from "drizzle-orm";
import z from "zod";
import { defaultSuccessMessageContract } from "..";

const getAllUserShopsContract = z.array(
  z.object({
    name: z.string().nullable(),
    role: z.string(),
    verificationStatus: z.boolean().nullable(),
  })
);

export const shopRouter = os
  .use(injectAuthMiddleware)
  .use(validateAuth)
  .router({
    getAllUserShops: os
      .$context<{ auth: Auth }>()
      .use(superAdminOnlyMiddleware)
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
    createShop: os
      .$context<{ auth: Auth }>()
      .input(createShopSchema)
      .output(defaultSuccessMessageContract)
      .handler(async ({ input }) => {
        return {
          success: true,
          message:
            "Shop Created Successfully. It may take few days for us to verify",
        };
      }),
  });
