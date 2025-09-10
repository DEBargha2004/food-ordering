import z from "zod";

export const onboardingSchema = z
  .object({
    name: z.string().min(3),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword)
      return ctx.addIssue({
        code: "custom",
        path: ["confirmPassword"],
      });
  });

export type TOnboarding = z.infer<typeof onboardingSchema>;
export const defaultValues = (): TOnboarding => ({
  name: "",
  password: "",
  confirmPassword: "",
});
