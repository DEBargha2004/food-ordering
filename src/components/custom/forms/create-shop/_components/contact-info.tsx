import SubForm from "../../sub-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { TCreateShopSchema } from "@/schema/create-shop";
import { useFormContext } from "react-hook-form";

export default function ContactInfo() {
  const { control } = useFormContext<TCreateShopSchema>();
  return (
    <SubForm>
      <SubForm.Header>
        <SubForm.Title>Contact Information</SubForm.Title>
        <SubForm.Description>
          Enter contact details for your shop
        </SubForm.Description>
      </SubForm.Header>
      <SubForm.Body className="grid grid-cols-2">
        <FormField
          control={control}
          name="contact.phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="contact.email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </SubForm.Body>
    </SubForm>
  );
}
