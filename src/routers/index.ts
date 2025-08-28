import { os } from "@orpc/server";
import { productRouter } from "./product";

export const router = os.router({ product: productRouter });
