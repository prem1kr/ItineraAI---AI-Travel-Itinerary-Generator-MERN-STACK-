import model from "../config/gemini.js";
import { generateTravelPrompt } from "../utils/aiPrompt.js";

export const generateAIItinerary = async (parsedData) => {
  const prompt = generateTravelPrompt(parsedData);
  const result = await model.generateContent(prompt);
  const response = result.response.text();
  return response;
};