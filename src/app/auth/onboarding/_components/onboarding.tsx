"use client";

import OnboardingForm from "@/components/custom/forms/onboarding";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { orpc } from "@/lib/orpc";
import {
  defaultValues,
  onboardingSchema,
  TOnboarding,
} from "@/schema/onboarding";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function SetPasswordFormWrapper() {
  const form = useForm<TOnboarding>({
    resolver: zodResolver(onboardingSchema),
    defaultValues: defaultValues(),
  });
  const router = useRouter();

  const onSubmit = async (formdata: TOnboarding) => {
    try {
      await orpc.account.onboarding(formdata);
      toast.success("Onboarding Complete");
      router.push("/admin");
    } catch (error) {
      console.log(error);
      toast.error((error as Error)?.message);
    }
  };

  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Complete onboarding</CardTitle>
      </CardHeader>
      <CardContent>
        <OnboardingForm form={form} onSubmit={onSubmit} />
      </CardContent>
    </Card>
  );
}
