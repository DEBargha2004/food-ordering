import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db";
import {
  admin as adminPlugin,
  openAPI,
  phoneNumber,
} from "better-auth/plugins";
import { nextCookies } from "better-auth/next-js";
import { ac, admin, delivery, manager, owner, user } from "./permissions";
import { authSchema } from "@/db/schema";

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
    adminPlugin({
      ac,
      roles: {
        admin,
        owner,
        manager,
        delivery,
        user,
      },
    }),
  ],
});
