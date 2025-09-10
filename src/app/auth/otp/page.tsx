"use client";

import OtpForm from "@/components/custom/forms/otp";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { authClient } from "@/lib/auth-client";
import { defaultValues, otpSchema, TOtp } from "@/schema/otp";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function Page() {
  const form = useForm<TOtp>({
    resolver: zodResolver(otpSchema),
    defaultValues: defaultValues(),
  });
  const router = useRouter();

  const onSubmit = async (formdata: TOtp) => {
    const phone = localStorage.getItem("phone") ?? "";

    await authClient.phoneNumber.verify({
      phoneNumber: phone,
      code: formdata.otp,
      disableSession: false,
      fetchOptions: {
        onError(context) {
          toast.error(context.error.message + phone);
        },
        onSuccess(context) {
          toast.success("Sign In Successfull");
          router.push("/auth/onboarding");
        },
      },
    });
  };

  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>OTP</CardTitle>
      </CardHeader>
      <CardContent>
        <OtpForm form={form} onSubmit={onSubmit} />
      </CardContent>
    </Card>
  );
}
