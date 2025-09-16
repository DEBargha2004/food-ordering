import { useFormContext } from "react-hook-form";
import SubForm from "../../sub-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { TCreateShopSchema } from "@/schema/create-shop";

export default function BaiscInfo() {
  const { control } = useFormContext<TCreateShopSchema>();
  return (
    <SubForm>
      <SubForm.Header>
        <SubForm.Title>Basic Information</SubForm.Title>
        <SubForm.Description>
          Enter basic details about your shop
        </SubForm.Description>
      </SubForm.Header>
      <SubForm.Body className="grid grid-cols-2">
        <FormField
          control={control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="gstin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>GSTIN</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="description"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  className="field-sizing-content resize-none max-h-36"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </SubForm.Body>
    </SubForm>
  );
}
