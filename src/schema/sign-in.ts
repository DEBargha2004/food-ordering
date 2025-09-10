import z from "zod";

export const signInSchema = z.object({
  phone: z.string().regex(/^[0-9]{10}$/, { error: "Invalid Phone Number" }),
  password: z.string(),
});

export type TSignIn = z.infer<typeof signInSchema>;
export const defaultValues = (): TSignIn => ({
  phone: "",
  password: "",
});
