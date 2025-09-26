import SubForm from "../../sub-form";
import { useFileUpload } from "@/hooks/use-file-upload";
import { orpc } from "@/lib/orpc";
import { useDropzone } from "react-dropzone";
import { buildGetUrl, catchError, cn } from "@/lib/utils";
import { toast } from "sonner";
import { useFormContext, useWatch } from "react-hook-form";
import { TCreateShopSchema } from "@/schema/create-shop";
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Image, ImageIcon, Trash2 } from "lucide-react";

export default function BrandingInfo() {
  const { upload } = useFileUpload(orpc.uplod.verified.uploadLogo);
  const { control, setValue } = useFormContext<TCreateShopSchema>();
  const logo = useWatch({
    control: control,
    name: "contact.branding.logo",
  });

  const logoDropzone = useDropzone({
    accept: {
      "image/*": [],
    },
    multiple: false,
    async onDrop(acceptedFiles, fileRejections, event) {
      const [res, err] = await catchError(upload(acceptedFiles[0]));
      if (err) {
        // console.log(err);
        return toast.error(err.message);
      }
      setValue("contact.branding.logo", res!.path);
      toast.success("Logo Uploaded successfully");
    },
  });

  const handleDeleteImage = (type: "logo" | "banner") => {
    setValue("contact.branding.logo", "");
  };

  return (
    <SubForm>
      <SubForm.Header>
        <SubForm.Title>Branding</SubForm.Title>
        <SubForm.Description>
          Upload your shop's visual assets
        </SubForm.Description>
      </SubForm.Header>
      <SubForm.Body className="grid">
        <FormField
          control={control}
          name="contact.branding.logo"
          render={({ field }) => (
            <FormItem className="flex flex-col items-start">
              <FormLabel>Shop Logo</FormLabel>
              <Input type="file" {...logoDropzone.getInputProps()} hidden />
              <Button
                {...(!logo && logoDropzone.getRootProps())}
                type="button"
                className="w-full"
              >
                {logo ? (
                  <>
                    <CheckCircle2 /> <span>Logo Uploaded</span>
                  </>
                ) : (
                  <span>Upload</span>
                )}
              </Button>
              <ImageContainer
                {...(!logo && logoDropzone.getRootProps())}
                onDelete={() => handleDeleteImage("logo")}
                className="h-32 aspect-square mt-3"
              >
                {logo && (
                  <img
                    src={buildGetUrl(logo)}
                    className="size-full object-cover"
                  />
                )}
              </ImageContainer>
              <FormMessage />
            </FormItem>
          )}
        />
      </SubForm.Body>
    </SubForm>
  );
}

function ImageContainer({
  children,
  className,
  onDelete,
  ...props
}: React.ComponentProps<"div"> & { onDelete?: () => void }) {
  return (
    <div
      className={cn(
        "flex flex-col justify-center items-center gap-2",
        "border rounded-lg overflow-hidden bg-accent relative group",
        className
      )}
      {...props}
    >
      {children ? (
        children
      ) : (
        <>
          <Button
            variant={"secondary"}
            type="button"
            size={"icon"}
            className="rounded-full"
          >
            <ImageIcon />
          </Button>
        </>
      )}
      {children ? (
        <Button
          size={"icon"}
          variant={"destructive"}
          className="rounded-full absolute top-2 right-2 hidden group-hover:flex cursor-pointer"
          type="button"
          onClick={() => onDelete?.()}
        >
          <Trash2 />
        </Button>
      ) : null}
    </div>
  );
}
