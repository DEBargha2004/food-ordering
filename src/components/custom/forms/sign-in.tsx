import { TSignIn } from "@/schema/sign-in";
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

export default function SignInForm({
  form,
  onSubmit,
}: TFormDefaultProps<TSignIn>) {
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
      </form>
    </Form>
  );
}
