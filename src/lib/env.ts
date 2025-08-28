import { loadEnvConfig } from "@next/env";
import z from "zod";

loadEnvConfig(process.cwd());

const envSchema = z.object({
  DATABASE_URL: z.url(),
  BETTER_AUTH_SECRET: z.string().nonempty(),
});

export const env = envSchema.parse(process.env);
