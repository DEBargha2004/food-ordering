import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db";
import {
  admin as adminPlugin,
  openAPI,
  phoneNumber,
  organization,
} from "better-auth/plugins";
import { nextCookies } from "better-auth/next-js";
import { authSchema } from "@/db/schema";
import { ac, manager, owner } from "./permissions";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: authSchema,
  }),
  plugins: [
    nextCookies(),
    phoneNumber({
      phoneNumberValidator(phoneNumber) {
        return /^\+91[0-9]{10}$/.test(phoneNumber);
      },
      signUpOnVerification: {
        getTempEmail(phoneNumber) {
          return `${phoneNumber}@example.com`;
        },
        getTempName(phoneNumber) {
          return phoneNumber;
        },
      },
      sendOTP(data, request) {
        console.log(data);
      },
      requireVerification: true,
      allowedAttempts: 3,
    }),
    openAPI(),
    adminPlugin(),
    organization({
      ac,
      roles: {
        owner,
        manager,
      },
    }),
  ],
});
