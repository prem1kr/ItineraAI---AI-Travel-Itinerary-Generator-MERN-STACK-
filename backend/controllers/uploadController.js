import { uploadDocumentService } from "../services/uploadService.js";
import { extractTextFromPDF, extractTextFromImage } from "../services/ocrService.js";
import { successResponse, errorResponse } from "../utils/responseHandler.js";

export const uploadDocuments = async (req, res) => {
  try {
    const uploadedDocs = [];
    for (const file of req.files) {
      let extractedText = "";
      if (file.mimetype === "application/pdf") {
        extractedText = await extractTextFromPDF(file.path);
      } else {
        extractedText = await extractTextFromImage(file.path);
      }

      const document = await uploadDocumentService(file, req.user._id, extractedText);
      uploadedDocs.push({ ...document.toObject(), extractedText });
    }

    successResponse(res, "Documents uploaded successfully", uploadedDocs);

  } catch (error) {
    errorResponse(res, error.message);
  }
};