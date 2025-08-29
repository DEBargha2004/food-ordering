import { injectAuthMiddleware } from "@/middlewares/inject-auth";
import { os } from "@orpc/server";

export const categoryRouter = os.use(injectAuthMiddleware).router({});
