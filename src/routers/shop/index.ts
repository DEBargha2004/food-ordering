import { injectAuthMiddleware } from "@/middlewares/inject-auth";
import { os } from "@orpc/server";

export const shopRouter = os.use(injectAuthMiddleware).router({});
