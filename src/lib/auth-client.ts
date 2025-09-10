import { createAuthClient } from "better-auth/react";
import {
  phoneNumberClient,
  adminClient,
  organizationClient,
} from "better-auth/client/plugins";
import { organizationVerifierClientPlugin } from "./organization-verifier-plugin/client";

export const authClient = createAuthClient({
  plugins: [
    phoneNumberClient(),
    adminClient(),
    organizationClient(),
    organizationVerifierClientPlugin(),
  ],
});

export const { signIn, signOut, signUp, useSession } = authClient;
