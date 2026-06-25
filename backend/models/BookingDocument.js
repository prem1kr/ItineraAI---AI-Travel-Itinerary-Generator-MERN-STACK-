import mongoose from "mongoose";

const bookingDocumentSchema = new mongoose.Schema({

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  fileName: {
    type: String,
    required: true,
  },

  fileUrl: {
    type: String,
    required: true,
  },

  fileType: {
    type: String,
    enum: ["pdf", "image", "flight", "hotel", "train", "other"],
    default: "other",
  },

  extractedText: {
    type: String,
    default: "",
  },

  uploadStatus: {
    type: String,
    enum: ["uploaded", "processed", "failed"],
    default: "uploaded",
  },

}, { timestamps: true });

const BookingDocument = mongoose.model("BookingDocument", bookingDocumentSchema);
export default BookingDocument;