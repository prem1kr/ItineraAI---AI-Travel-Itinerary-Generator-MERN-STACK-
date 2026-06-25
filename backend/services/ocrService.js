import fs from "fs";
import pdf from "pdf-parse";
import Tesseract from "tesseract.js";

export const extractTextFromPDF = async (filePath) => {
  const dataBuffer = fs.readFileSync(filePath);
  const pdfData = await pdf(dataBuffer);
  return pdfData.text;
};

export const extractTextFromImage = async (filePath) => {
  const result = await Tesseract.recognize(filePath, "eng");
  return result.data.text;
};