export const generateTravelPrompt = (extractedData) => {
  return `
You are an expert travel planner.

Using the travel booking information below, create a complete travel itinerary.

Booking Information:

${JSON.stringify(extractedData, null, 2)}

Requirements:

1. Generate a day-wise itinerary.
2. Include flight schedules.
3. Include hotel check-in/check-out.
4. Suggest nearby attractions.
5. Suggest restaurants/local food.
6. Suggest transportation options.
7. Return ONLY valid JSON.

Format:

{
  "destination": "",
  "startDate": "",
  "endDate": "",
  "timeline": [],
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

export const systemPrompt = `
You are a professional AI travel itinerary generator.
Generate accurate travel plans from uploaded booking documents.
`;