import { createAccessControl } from "better-auth/plugins/access";
import {
  adminAc,
  defaultStatements,
  userAc,
} from "better-auth/plugins/admin/access";

export const statement = {
  ...defaultStatements,
  // TO DO
  // adding permissions
} as const;

export const ac = createAccessControl(statement);

export const admin = ac.newRole({
  ...adminAc.statements,
});

export const owner = ac.newRole({});

export const manager = ac.newRole({});

export const delivery = ac.newRole({});

export const user = ac.newRole({
  ...userAc.statements,
});
