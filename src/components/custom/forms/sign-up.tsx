import { TFormDefaultProps } from "@/types/form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import AddonInput from "../addon-input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { TSignUp } from "@/schema/sign-up";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function SignUpForm({
  form,
  onSubmit,
}: TFormDefaultProps<TSignUp>) {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <AddonInput {...field} prefix="+91" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? (
            <Loader2 className="animate-spin" />
          ) : (
            "Submit"
          )}
        </Button>
        <Separator orientation="horizontal" className="h-1" />
        <div className="text-center text-sm">
          <p>
            Already have an account?{" "}
            <Link
              href={"/auth/sign-in"}
              className="text-cyan-400 hover:underline underline-offset-1"
            >
              Sign In
            </Link>
          </p>
        </div>
      </form>
    </Form>
  );
}
