import { z } from "zod";

export const otpSchema = z.object({
  otp: z.string().regex(/^\d{6}$/, { error: "Invalid OTP" }),
});

export type TOtp = z.infer<typeof otpSchema>;
export const defaultValues = (): TOtp => ({
  otp: "",
});
