import { generateAIItinerary } from "../services/aiService.js";
import { saveItineraryService, getHistoryService, getItineraryByIdService, deleteItineraryService, shareItineraryService, getSharedItineraryService } from "../services/itineraryService.js";
import { successResponse, errorResponse } from "../utils/responseHandler.js";

export const generateItinerary = async (req, res) => {
  try {
    const { extractedData } = req.body;
    const aiResponse = await generateAIItinerary(extractedData);
    const parsed = JSON.parse(aiResponse);
    const itinerary = await saveItineraryService(req.user._id, parsed);
    successResponse(res, "Itinerary generated", itinerary, 201);
  } catch (error) {
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
    successResponse(res, "Share link created",
      {
        shareId,
        shareUrl: `${process.env.CLIENT_URL}/shared/${shareId}`,
      }
    );

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