import { loadEnvConfig } from "@next/env";
import z from "zod";

loadEnvConfig(process.cwd());

const envSchema = z.object({
  DATABASE_URL: z.url(),
  BETTER_AUTH_SECRET: z.string().nonempty(),
  S3_ACCESS_KEY_ID: z.string(),
  S3_SECRET_ACCESS_KEY: z.string(),
  NEXT_PUBLIC_S3_BUCKET_NAME: z.string(),
  NEXT_PUBLIC_S3_BUCKET_URL: z.string(),
});

export const env = envSchema.parse(process.env);
