import { catchError, clone } from "@/lib/utils";
import { PresignerInput, PresignerOutput } from "@/routers/upload";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import { safe } from "@orpc/client";

type Presigner = (props: PresignerInput) => Promise<PresignerOutput>;
const initUploadStatus = (id: string) => ({
  id,
  isUploading: false,
  uploadPercentage: 0,
  hasFailed: false,
  hasUploaded: false,
});
type InitUploadStatus = ReturnType<typeof initUploadStatus>;
type InitUploadParam = Partial<Omit<InitUploadStatus, "id">>;

export function useFileUpload(presigner: Presigner) {
  const [fileStatus, setFileStatus] = useState<InitUploadStatus[]>([]);

  const get = (id: string) => fileStatus.find((file) => file.id === id);
  const set = (id: string, params: InitUploadParam) => {
    setFileStatus(
      clone((prev) => {
        const obj = prev.find((file) => file.id === id);
        if (obj) Object.assign(obj, params);
      })
    );
  };
  const append = (id: string) =>
    setFileStatus((prev) => [...prev, initUploadStatus(id)]);

  const upload = async (file: File) => {
    return new Promise<PresignerOutput>(async (resolve, reject) => {
      const [err, res] = await safe(presigner({ mimetype: file.type }));
      if (err) return reject(err.message);

      append(res!.path);
      set(res!.path, { isUploading: true });
      resolve(res!);

      const [_, uploadError] = await catchError<AxiosError>(
        axios.put(res!.url, file, {
          headers: {
            "Content-Type": file.type,
          },
          onUploadProgress(progressEvent) {
            set(res!.path, {
              uploadPercentage: Math.round(
                ((progressEvent.loaded ?? 0) * 100) / (progressEvent.total ?? 1)
              ),
            });
          },
        })
      );

      if (uploadError) {
        set(res!.path, { hasFailed: true, isUploading: false });
        return reject(uploadError.message);
      }
      set(res!.path, { hasUploaded: true, isUploading: false });
    });
  };

  return { upload, get, fileStatus };
}
