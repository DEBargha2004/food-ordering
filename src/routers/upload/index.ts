import { env } from "@/lib/env";
import { Auth, injectAuthMiddleware } from "@/middlewares/inject-auth";
import { validateAuth } from "@/middlewares/validate-auth";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { os } from "@orpc/server";
import z from "zod";
import { nanoid } from "nanoid";
import mime from "mime-types";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { s3 } from "@/lib/s3";

const presignerInputContract = z.object({ mimetype: z.string() });
const presignerOutputContract = z.object({ path: z.string(), url: z.string() });

const getPutObjectCommand = (key: string, mimetype: string) =>
  new PutObjectCommand({
    Bucket: env.NEXT_PUBLIC_S3_BUCKET_NAME,
    Key: key,
    ContentType: mimetype,
  });

export const uploadRouter = os.use(injectAuthMiddleware).router({
  verified: os
    .$context<{ auth: Auth }>()
    .use(validateAuth)
    .router({
      uploadLogo: os
        .$context<{ auth: Auth }>()
        .input(presignerInputContract)
        .output(presignerOutputContract)
        .handler(async ({ context, input }) => {
          const ext = mime.extension(input.mimetype);
          const key = `business/logo/${nanoid()}.${ext}`;
          const putCommand = getPutObjectCommand(key, input.mimetype);

          const url = await getSignedUrl(s3, putCommand, { expiresIn: 300 });

          return { path: key, url };
        }),
    }),
});

export type PresignerInput = z.infer<typeof presignerInputContract>;
export type PresignerOutput = z.infer<typeof presignerOutputContract>;
