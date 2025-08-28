"use client";

import { authClient } from "@/lib/auth-client";
import { defaultValues, signInSchema, TSignIn } from "@/schema/sign-in";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SignInForm from "@/components/custom/forms/sign-in";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function Page() {
  const form = useForm<TSignIn>({
    resolver: zodResolver(signInSchema),
    defaultValues: defaultValues(),
  });
  const router = useRouter();

  const onSubmit = async (formdata: TSignIn) => {
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
        <SignInForm form={form} onSubmit={onSubmit} />
      </CardContent>
    </Card>
  );
}
