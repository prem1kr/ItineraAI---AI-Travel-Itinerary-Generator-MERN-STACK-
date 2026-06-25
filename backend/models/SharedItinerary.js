import mongoose from "mongoose";

const sharedItinerarySchema = new mongoose.Schema({
  itineraryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Itinerary",
    required: true,
  },

  shareId: {
    type: String,
    required: true,
    unique: true,
  },

  views: {
    type: Number,
    default: 0,
  },

  expiresAt: {
    type: Date,
  },
}, { timestamps: true });

const SharedItinerary = mongoose.model("SharedItinerary", sharedItinerarySchema);
export default SharedItinerary;