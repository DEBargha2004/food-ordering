import { TCreateShopSchema } from "@/schema/create-shop";
import SubForm from "../../sub-form";
import { useFormContext } from "react-hook-form";

export default function OperationalInfo() {
  const { control } = useFormContext<TCreateShopSchema>();
  return (
    <SubForm>
      <SubForm.Header>
        <SubForm.Title>Operational Details</SubForm.Title>
        <SubForm.Description>
          Set your shop's operating hours and delivery options
        </SubForm.Description>
      </SubForm.Header>
    </SubForm>
  );
}
