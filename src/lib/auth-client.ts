import { createAuthClient } from "better-auth/client";
import { phoneNumberClient, adminClient } from "better-auth/client/plugins";
import { ac, admin, delivery, manager, owner, user } from "./permissions";

export const authClient = createAuthClient({
  plugins: [
    phoneNumberClient(),
    adminClient({
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

export const { signIn, signOut, signUp, useSession } = authClient;
