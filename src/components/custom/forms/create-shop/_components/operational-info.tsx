import { TCreateShopSchema } from "@/schema/create-shop";
import SubForm from "../../sub-form";
import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function OperationalInfo() {
  const { control, formState } = useFormContext<TCreateShopSchema>();

  return (
    <SubForm>
      <SubForm.Header>
        <SubForm.Title>Operational Details</SubForm.Title>
        <SubForm.Description>
          Set your shop's operating hours and delivery options
        </SubForm.Description>
      </SubForm.Header>
      <SubForm.Body className="grid grid-cols-2 gap-4">
        <FormField
          control={control}
          name="contact.operationalDetails.timing.opening"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Opening</FormLabel>
              <FormControl>
                <Input type="time" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="contact.operationalDetails.timing.closing"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Closing</FormLabel>
              <FormControl>
                <Input type="time" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="contact.operationalDetails.isDeliveryAvailable"
          render={({ field }) => (
            <FormItem className="flex mt-4">
              <FormLabel>Home Delivery Available</FormLabel>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="col-span-2">
          <Button
            className="w-full cursor-pointer"
            type="submit"
            disabled={formState.isSubmitting}
          >
            {formState.isSubmitting ? (
              <Loader2 className="animate-spin" />
            ) : (
              <span>Create</span>
            )}
          </Button>
        </div>
      </SubForm.Body>
    </SubForm>
  );
}
