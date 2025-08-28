import z from "zod";

export const signInSchema = z.object({
  phone: z.string().regex(/^\d{10}$/, { error: "Incorrect Number" }),
});

export type TSignIn = z.infer<typeof signInSchema>;
export const defaultValues = (): TSignIn => ({
  phone: "",
});
