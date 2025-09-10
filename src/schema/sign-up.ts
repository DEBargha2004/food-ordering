import z from "zod";

export const signUpSchema = z.object({
  phone: z.string().regex(/^\d{10}$/, { error: "Incorrect Number" }),
});

export type TSignUp = z.infer<typeof signUpSchema>;
export const defaultValues = (): TSignUp => ({
  phone: "",
});
