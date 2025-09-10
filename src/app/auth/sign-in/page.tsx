"use client";

import SignInForm from "@/components/custom/forms/sign-in";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { authClient } from "@/lib/auth-client";
import { defaultValues, signInSchema, TSignIn } from "@/schema/sign-in";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function Page() {
  const form = useForm<TSignIn>({
    resolver: zodResolver(signInSchema),
    defaultValues: defaultValues(),
  });
  const router = useRouter();

  const onSubmit = async (formdata: TSignIn) => {
    await authClient.signIn.phoneNumber({
      phoneNumber: `+91${formdata.phone}`,
      password: formdata.password,
      fetchOptions: {
        onSuccess(context) {
          toast.success("Sign In Successfull");
          router.push("/");
        },
        onError(context) {
          toast.error(context.error.message);
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
