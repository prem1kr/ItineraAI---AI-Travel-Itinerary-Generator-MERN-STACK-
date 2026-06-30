import { generateAIItinerary } from "../services/aiService.js";
import { saveItineraryService, getHistoryService, getItineraryByIdService, deleteItineraryService, shareItineraryService, getSharedItineraryService } from "../services/itineraryService.js";
import { successResponse, errorResponse } from "../utils/responseHandler.js";

export const generateItinerary = async (req, res) => {
  try {
    const { extractedData } = req.body;
    if (!extractedData || !extractedData.length) {
      return errorResponse(res, "No extracted document data found", 400);
    }

    const combinedText = extractedData.map((doc) => doc.extractedText).join("\n\n");
    const aiResponse = await generateAIItinerary(combinedText);
    const cleanedResponse = aiResponse.replace(/```json/g, "").replace(/```/g, "").trim();

    const parsed = JSON.parse(cleanedResponse);
    parsed.days = (parsed.days || []).map((day) => ({
      ...day,
      activities: (day.activities || []).map((activity) => {
        if (typeof activity === "string") {
          const [time, ...rest] = activity.split(":");
          return {
            time: time?.trim() || "",
            event: rest.join(":").trim(),
            recommendation: "",
          };
        }
        return {
          time: activity.time || "",
          event: activity.event || "",
          recommendation: activity.recommendation || "",
        };
      }),
    }));

    console.log(JSON.stringify(parsed.days, null, 2));
    const itinerary = await saveItineraryService(req.user._id, parsed, extractedData.map((doc) => doc._id));
    successResponse(res, "Itinerary generated successfully", itinerary, 201);

  } catch (error) {
    console.error("Generate Itinerary Error:", error);
    errorResponse(res, error.message);
  }
};


export const getHistory = async (req, res) => {
  try {
    const itineraries = await getHistoryService(req.user._id);
    successResponse(res, "History fetched", itineraries);
  } catch (error) {
    errorResponse(res, error.message);
  }
};

export const getItineraryById = async (req, res) => {
  try {
    const itinerary = await getItineraryByIdService(req.params.id);
    successResponse(res, "Itinerary fetched", itinerary);
  } catch (error) {
    errorResponse(res, error.message);
  }
};

export const deleteItinerary = async (req, res) => {
  try {
    await deleteItineraryService(req.params.id);
    successResponse(res, "Itinerary deleted");
  } catch (error) {
    errorResponse(res, error.message);
  }
};

export const shareItinerary = async (req, res) => {
  try {
    const shareId = await shareItineraryService(req.params.id);
    successResponse(res, "Share link created", {
      shareId,
      shareUrl: `${process.env.CLIENT_URL}/shared/${shareId}`,
    });

  } catch (error) {
    errorResponse(res, error.message);
  }
};

export const getSharedItinerary = async (req, res) => {
  try {
    const itinerary = await getSharedItineraryService(req.params.shareId);
    successResponse(res, "Shared itinerary fetched", itinerary);
  } catch (error) {
    errorResponse(res, error.message, 404);
  }
};