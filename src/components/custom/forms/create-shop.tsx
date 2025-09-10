import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { TCreateShopSchema } from "@/schema/create-shop";
import { TFormDefaultProps } from "@/types/form";

export default function CreateShopForm({
  form,
  onSubmit,
}: TFormDefaultProps<TCreateShopSchema>) {
  return (
    <Form {...form}>
      <form className="space-y-10" onSubmit={form.handleSubmit(onSubmit)}>
        <SubForm>
          <SubFormHeader>
            <SubFormTitle>Basic Information</SubFormTitle>
            <SubFormDescription>
              Enter basic details about your shop
            </SubFormDescription>
          </SubFormHeader>
          <SubFormBody className="grid grid-cols-2">
            <FormField
              control={form.control}
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
              control={form.control}
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
              control={form.control}
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
          </SubFormBody>
        </SubForm>

        <SubForm>
          <SubFormHeader>
            <SubFormTitle>Address</SubFormTitle>
            <SubFormDescription>
              Enter your shop's physical address
            </SubFormDescription>
          </SubFormHeader>
          <SubFormBody className="grid">
            <FormField
              control={form.control}
              name="address.street"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Street</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="address.city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address.state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address.zipCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Zip Code</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Separator />
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="address.coordinates.latitude"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Latitude</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address.coordinates.longitude"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Longitude</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </SubFormBody>
        </SubForm>
        <SubForm>
          <SubFormHeader>
            <SubFormTitle>Contact Information</SubFormTitle>
            <SubFormDescription>
              Enter contact details for your shop
            </SubFormDescription>
          </SubFormHeader>
          <SubFormBody className="grid grid-cols-2">
            <FormField
              control={form.control}
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
              control={form.control}
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
          </SubFormBody>
        </SubForm>
        <SubForm>
          <SubFormHeader>
            <SubFormTitle>Branding</SubFormTitle>
            <SubFormDescription>
              Upload your shop's visual assets
            </SubFormDescription>
          </SubFormHeader>
        </SubForm>
        <SubForm>
          <SubFormHeader>
            <SubFormTitle>Operational Details</SubFormTitle>
            <SubFormDescription>
              Set your shop's operating hours and delivery options
            </SubFormDescription>
          </SubFormHeader>
        </SubForm>
      </form>
    </Form>
  );
}

function SubForm({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("p-6 border rounded-xl shadow space-y-8", className)}
      {...props}
    >
      {children}
    </div>
  );
}

function SubFormHeader({
  className,
  children,
  ...props
}: React.ComponentProps<"header">) {
  return (
    <header className={cn("space-y-1", className)} {...props}>
      {children}
    </header>
  );
}

function SubFormTitle({
  children,
  className,
  ...props
}: React.ComponentProps<"h2">) {
  return (
    <h2 className={cn("text-lg font-semibold", className)} {...props}>
      {children}
    </h2>
  );
}

function SubFormDescription({
  children,
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      className={cn("text-sm text-muted-foreground font-medium", className)}
      {...props}
    >
      {children}
    </p>
  );
}

function SubFormBody({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("gap-4", className)} {...props}>
      {children}
    </div>
  );
}
