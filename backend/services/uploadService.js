import cloudinary from "../config/cloudinary.js";
import BookingDocument from "../models/BookingDocument.js";

export const uploadDocumentService = async (file, userId, extractedText = "") => {
  const uploadResult = await cloudinary.uploader.upload(file.path, { folder: "travel-itinerary-documents" });
  const document = await BookingDocument.create({
    user: userId,
    fileName: file.originalname,
    fileUrl: uploadResult.secure_url,
    fileType: file.mimetype.includes("pdf") ? "pdf" : "image",
    extractedText,
    uploadStatus: "processed",
  });

  return document;
};