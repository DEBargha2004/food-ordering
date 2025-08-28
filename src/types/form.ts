import { useForm } from "react-hook-form";

export type TFormDefaultProps<T extends Record<string, any>> = {
  form: ReturnType<typeof useForm<T>>;
  onSubmit: (formdata: T) => Promise<void>;
};
