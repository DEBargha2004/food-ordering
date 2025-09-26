import { Form } from "@/components/ui/form";
import { TCreateShopSchema } from "@/schema/create-shop";
import { TFormDefaultProps } from "@/types/form";
import BaiscInfo from "./_components/basic-info";
import AddressInfo from "./_components/address-info";
import ContactInfo from "./_components/contact-info";
import BrandingInfo from "./_components/branding-info";
import OperationalInfo from "./_components/operational-info";
import LicenseInfo from "./_components/license-info";

export default function CreateShopForm({
  form,
  onSubmit,
}: TFormDefaultProps<TCreateShopSchema>) {
  return (
    <Form {...form}>
      <form className="space-y-10" onSubmit={form.handleSubmit(onSubmit)}>
        <BaiscInfo />
        <AddressInfo />
        <ContactInfo />
        <BrandingInfo />
        <LicenseInfo />
        <OperationalInfo />
      </form>
    </Form>
  );
}
