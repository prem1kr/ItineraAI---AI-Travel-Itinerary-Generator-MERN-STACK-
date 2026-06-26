import API from "./api";
import { validateFile } from "../utils/helpers";

export const uploadDocuments = async (files, onUploadProgress) => {
  files.forEach((file) => {
    const validation = validateFile(file);
    if (!validation.valid) {
      throw new Error(validation.message);
    }
  });

  const formData = new FormData();

  files.forEach((file) => {
    formData.append("documents", file);
  });

  const response = await API.post("/upload", formData,
    {
      headers: {
        "Content-Type":
          "multipart/form-data",
      },

      onUploadProgress: (event) => {
        const progress = Math.round((event.loaded * 100) / event.total);
        onUploadProgress?.(progress);
      },
    }
  );

  return response.data;
};