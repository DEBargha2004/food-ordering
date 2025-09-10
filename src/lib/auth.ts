import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db";
import {
  admin as adminPlugin,
  openAPI,
  phoneNumber,
  organization as organizationPlugin,
} from "better-auth/plugins";
import { nextCookies } from "better-auth/next-js";
import { ac, manager, owner } from "./permissions";
import { organizationVerifierPlugin } from "./organization-verifier-plugin";
import {
  account,
  invitation,
  member,
  organization,
  session,
  user,
  verification,
} from "@/db/schema";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      account,
      invitation,
      member,
      organization,
      session,
      user,
      verification,
    },
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
    organizationPlugin({
      ac,
      roles: {
        owner,
        manager,
      },
    }),
    organizationVerifierPlugin(),
  ],
});
