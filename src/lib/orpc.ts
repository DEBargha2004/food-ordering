import { router } from "@/routers";
import { createORPCClient } from "@orpc/client";
import { RPCLink } from "@orpc/client/fetch";
import { RouterClient } from "@orpc/server";

const link = new RPCLink({
  url: "http://localhost:3000",
  headers: {},
});

export const orpc: RouterClient<typeof router> = createORPCClient(link);
