import { createAccessControl } from "better-auth/plugins/access";

const statement = {
  shop: ["create", "edit", "delete", "verify"],
  category: ["create", "edit", "delete"],
  product: ["create", "edit", "delete"],
} as const;

export const ac = createAccessControl(statement);

export const owner = ac.newRole({
  shop: ["edit", "create", "delete"],
  category: ["create", "edit", "delete"],
  product: ["create", "edit", "delete"],
});

export const manager = ac.newRole({
  category: ["edit"],
  product: ["edit"],
});
