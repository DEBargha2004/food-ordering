import { BetterAuthClientPlugin } from "better-auth";
import { organizationVerifierPlugin } from ".";

type OrganizationVerifierPlugin = typeof organizationVerifierPlugin;

export const organizationVerifierClientPlugin = () => {
  return {
    id: "organizationVerifierPlugin",
    $InferServerPlugin: {} as ReturnType<OrganizationVerifierPlugin>,
  } satisfies BetterAuthClientPlugin;
};
