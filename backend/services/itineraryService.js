import { nanoid } from "nanoid";
import Itinerary from "../models/Itinerary.js";
import SharedItinerary from "../models/SharedItinerary.js";

export const saveItineraryService = async (userId, itineraryData, documents = []) => {
  const itinerary = await Itinerary.create({
    user: userId,
    destination: itineraryData.destination,
    startDate: itineraryData.startDate,
    endDate: itineraryData.endDate,
    timeline: itineraryData.timeline,
    days: itineraryData.days,
    aiResponse: itineraryData,
    bookingDocuments: documents,
  });

  return itinerary;
};

export const getHistoryService = async (userId) => {
  return await Itinerary.find({ user: userId }).sort({ createdAt: -1 });
};

export const getItineraryByIdService = async (id) => {
  return await Itinerary.findById(id).populate("bookingDocuments").populate("user");
};

export const deleteItineraryService = async (id) => {
  return await Itinerary.findByIdAndDelete(id);
};

export const shareItineraryService = async (itineraryId) => {
  const shareId = nanoid(12);
  await Itinerary.findByIdAndUpdate(itineraryId, { shareId });
  await SharedItinerary.create({ itineraryId, shareId });
  return shareId;
};

export const getSharedItineraryService =
  async (shareId) => {
    const shared = await SharedItinerary.findOne({ shareId });

    if (!shared) {
      throw new Error("Shared itinerary not found");
    }

    shared.views += 1;
    await shared.save();
    return await Itinerary.findById(shared.itineraryId);
  };