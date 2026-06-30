export const generatePrompt = (extractedData) => {
  return `
You are an expert AI travel planner.

Analyze the following booking documents and generate a complete travel itinerary.

BOOKING DATA:
${JSON.stringify(extractedData, null, 2)}

IMPORTANT RULES:
- Return ONLY valid JSON.
- Do NOT use markdown.
- Do NOT wrap the response inside \`\`\`.
- Do NOT write explanations.
- Do NOT write notes.
- Do NOT omit any required fields.
- Use only double quotes (").
- Every property name must be enclosed in double quotes.
- Dates should be in ISO format (YYYY-MM-DD) whenever possible.
- Generate a realistic itinerary using the booking information.
- Include flights, hotel check-in/check-out, airport transfers, sightseeing, meals, shopping and free time.
- If some information is unavailable, use an empty string "".

VERY IMPORTANT:

Each day's "activities" MUST be an array of OBJECTS.

DO NOT return:

"activities": [
  "09:00 AM: Visit Burj Khalifa",
  "01:00 PM: Lunch"
]

ALWAYS return:

"activities": [
  {
    "time": "09:00 AM",
    "event": "Visit Burj Khalifa",
    "recommendation": "Book tickets online in advance."
  },
  {
    "time": "01:00 PM",
    "event": "Lunch at a local restaurant",
    "recommendation": "Try authentic Emirati cuisine."
  }
]

Return EXACTLY this JSON schema:

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
      "activities": [
        {
          "time": "",
          "event": "",
          "recommendation": ""
        }
      ]
    }
  ]
}
`;
};