import { createAuthClient } from "better-auth/client";
import {
  phoneNumberClient,
  adminClient,
  organizationClient,
} from "better-auth/client/plugins";

export const authClient = createAuthClient({
  plugins: [phoneNumberClient(), adminClient(), organizationClient()],
});

export const { signIn, signOut, signUp, useSession } = authClient;
