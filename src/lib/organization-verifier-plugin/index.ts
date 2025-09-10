import { BetterAuthPlugin } from "better-auth";

export const organizationVerifierPlugin = () =>
  ({
    id: "organizationVerifierPlugin",
    schema: {
      organization: {
        fields: {
          address: {
            fieldName: "address",
            type: "string",
          },
          isVerified: {
            fieldName: "is_verified",
            type: "boolean",
            defaultValue: false,
          },
        },
      },
    },
  } satisfies BetterAuthPlugin);
