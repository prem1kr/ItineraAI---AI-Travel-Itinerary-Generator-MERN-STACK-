import { FILE_TYPES, MAX_FILE_SIZE } from "./constants";

export const validateFile = (file) => {
  if (!file) {
    return {
      valid: false,
      message: "No file selected",
    };
  }

  if (!FILE_TYPES.includes(file.type)) {
    return {
      valid: false,
      message:
        "Only PDF, PNG, JPG, JPEG files are allowed",
    };
  }

  if (file.size > MAX_FILE_SIZE) {
    return {
      valid: false,
      message:
        "File size exceeds 10MB limit",
    };
  }

  return { valid: true };
};

export const truncateText = (text, length = 100) => {
  if (!text) return "";
  return text.length > length ? text.substring(0, length) + "..." : text;
};

export const generateShareLink = (itineraryId) => {
  return `${window.location.origin}/share/${itineraryId}`;
};

export const capitalize = (str) => {
  if (!str) return "";
  return (str.charAt(0).toUpperCase() + str.slice(1));
};

export const getFileExtension = (filename) => {
  return filename.split(".").pop().toLowerCase();
};

export const fileSizeFormatter = (bytes) => {
  if (!bytes) return "0 Bytes";

  const sizes = [
    "Bytes",
    "KB",
    "MB",
    "GB",
  ];

  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return (
    Math.round((bytes / Math.pow(1024, i)) * 100) / 100 + " " + sizes[i]
  );
};