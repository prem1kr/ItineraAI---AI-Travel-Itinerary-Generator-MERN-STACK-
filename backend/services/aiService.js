import model from "../config/gemini.js";
import { generatePrompt } from "../utils/aiPrompt.js";

const sleep = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const generateAIItinerary = async (parsedData) => {
  const prompt = generatePrompt(parsedData);
  let lastError;

  for (let i = 1; i <= 3; i++) {
    try {
      const result = await model.generateContent(prompt);
      return result.response.text();

    } catch (error) {
      console.log(`Gemini Attempt ${i}:`, error.message);
      lastError = error;
      if (i < 3) {
        await sleep(3000);
      }
    }
  }

  throw lastError;
};