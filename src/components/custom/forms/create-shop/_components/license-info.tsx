import { TCreateShopSchema } from "@/schema/create-shop";
import { ControllerRenderProps, useFormContext } from "react-hook-form";
import SubForm from "../../sub-form";
import { useFileUpload } from "@/hooks/use-file-upload";
import { orpc } from "@/lib/orpc";
import { useDropzone } from "react-dropzone";
import { catchError } from "@/lib/utils";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RefCallback } from "react";
import { CheckCircle2, Loader2, UploadCloud } from "lucide-react";

export default function LicenseInfo() {
  const { control, setValue } = useFormContext<TCreateShopSchema>();

  return (
    <SubForm>
      <SubForm.Header>
        <SubForm.Title>Licenses & Documents</SubForm.Title>
        <SubForm.Description>Upload the licenses</SubForm.Description>
      </SubForm.Header>
      <SubForm.Body className="grid grid-cols-2 gap-4">
        <FormField
          control={control}
          name="documents.pan.path"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pan Card</FormLabel>
              <FormControl>
                <DocUpload
                  onUploadSuccess={(p) =>
                    typeof p === "string" && field.onChange(p)
                  }
                  field={field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="documents.fssai.path"
          render={({ field }) => (
            <FormItem>
              <FormLabel>FSSAI</FormLabel>
              <FormControl>
                <DocUpload
                  onUploadSuccess={(p) =>
                    typeof p === "string" && field.onChange(p)
                  }
                  field={field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="documents.gst.path"
          render={({ field }) => (
            <FormItem>
              <FormLabel>GST</FormLabel>
              <FormControl>
                <DocUpload
                  onUploadSuccess={(p) =>
                    typeof p === "string" && field.onChange(p)
                  }
                  field={field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="documents.trade.path"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Trade Liscense</FormLabel>
              <FormControl>
                <DocUpload
                  onUploadSuccess={(p) =>
                    typeof p === "string" && field.onChange(p)
                  }
                  field={field}
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

function DocUpload({
  onUploadSuccess,
  successText,
  field,
}: {
  successText?: string;
  onUploadSuccess: (path: string | string[]) => void;
  field: ControllerRenderProps<TCreateShopSchema>;
}) {
  const { upload, fileStatus } = useFileUpload(
    orpc.uplod.verified.uploadLicense
  );

  const docUploader = useDropzone({
    accept: {
      "application/pdf": [".pdf"],
      "image/*": [],
    },
    multiple: false,
    async onDrop(acceptedFiles, fileRejections, event) {
      const [res, err] = await catchError(upload(acceptedFiles[0]));
      if (err) {
        return toast.error(err.message);
      }
      onUploadSuccess(res.path);
      return toast.success(successText ?? "Pan Card uploaded Successfully");
    },
  });
  return (
    <>
      <Button
        variant={"outline"}
        type="button"
        ref={field.ref}
        className="justify-between"
        {...docUploader.getRootProps()}
      >
        <span className="text-muted-foreground">
          {field.value ? "Upload Successfull" : "Upload Document"}
        </span>
        {field.value ? (
          <CheckCircle2 className="text-green-400" />
        ) : fileStatus[0]?.isUploading ? (
          <Loader2 className="animate-spin" />
        ) : (
          <UploadCloud />
        )}
      </Button>
      <input type="hidden" {...docUploader.getInputProps()} />
    </>
  );
}
