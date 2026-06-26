export const generatePrompt = (extractedData) => {
  return `
You are a professional travel planner.

Analyze the booking information and generate a complete travel itinerary.

BOOKING DATA:
${JSON.stringify(extractedData, null, 2)}

RULES:
- Return ONLY valid JSON.
- Do NOT use markdown.
- Do NOT wrap response in \`\`\`json.
- Do NOT add explanations.
- Do NOT add any text before or after JSON.
- Include flights, hotels, attractions, and food recommendations.
- Generate day-wise planning.

Return exactly this structure:

{
  "destination": "",
  "startDate": "",
  "endDate": "",
  "timeline": [
    {
      "type": "flight",
      "title": "",
      "time": "",
      "description": ""
    }
  ],
  "days": [
    {
      "day": 1,
      "title": "",
      "activities": []
    }
  ]
}
`;
};