"use client";

import { authClient } from "@/lib/auth-client";
import { defaultValues, signUpSchema, TSignUp } from "@/schema/sign-up";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import SignUpForm from "@/components/custom/forms/sign-up";

export default function Page() {
  const form = useForm<TSignUp>({
    resolver: zodResolver(signUpSchema),
    defaultValues: defaultValues(),
  });
  const router = useRouter();

  const onSubmit = async (formdata: TSignUp) => {
    formdata.phone = `+91${formdata.phone}`;
    localStorage.setItem("phone", formdata.phone);

    await authClient.phoneNumber.sendOtp({
      phoneNumber: formdata.phone,
      fetchOptions: {
        onError(context) {
          toast.error(context.error.message);
        },
        onSuccess(context) {
          toast.success("OTP sent successfully");
          router.push("/auth/otp");
        },
      },
    });
  };

  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
      </CardHeader>
      <CardContent>
        <SignUpForm form={form} onSubmit={onSubmit} />
      </CardContent>
    </Card>
  );
}
