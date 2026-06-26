import model from "../config/gemini.js";
import { generateTravelPrompt } from "../utils/aiPrompt.js";

export const generateAIItinerary = async (parsedData) => {
  const prompt = generateTravelPrompt(parsedData);

  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const result = await model.generateContent(prompt);
      return result.response.text();

    } catch (error) {
      console.error(`Gemini Attempt ${attempt}:`, error.message);
      if (attempt === 3) {
        throw new Error("Gemini AI is currently unavailable. Please try again later.");
      }

      await new Promise((resolve) => setTimeout(resolve, 2000));
    }
  }
};