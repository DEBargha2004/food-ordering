import { os } from "@orpc/server";
import { productRouter } from "./product";
import { categoryRouter } from "./category";
import { shopRouter } from "./shop";
import { accountRouter } from "./account";
import { uploadRouter } from "./upload";

export const router = os.router({
  product: productRouter,
  category: categoryRouter,
  shop: shopRouter,
  account: accountRouter,
  uplod: uploadRouter,
});
