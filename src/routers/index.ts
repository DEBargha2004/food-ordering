import { os } from "@orpc/server";
import { productRouter } from "./product";
import { categoryRouter } from "./category";
import { shopRouter } from "./shop";
import { accountRouter } from "./account";

export const router = os.router({
  product: productRouter,
  category: categoryRouter,
  shop: shopRouter,
  account: accountRouter,
});
