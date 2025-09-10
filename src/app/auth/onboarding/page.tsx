import { canUserSetPassword } from "@/routers/account/actions";
import { redirect } from "next/navigation";
import SetPasswordFormWrapper from "./_components/onboarding";

export default async function Page() {
  const [err, res] = await canUserSetPassword();
  if (err || !res) return redirect("/auth/sign-in");

  return <SetPasswordFormWrapper />;
}
