import mongoose from "mongoose";

const itinerarySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId, ref: "User",
    required: true,
  },

  destination: {
    type: String,
    required: true,
  },

  startDate: {
    type: Date,
  },

  endDate: {
    type: Date,
  },

  bookingDocuments: [{
    type: mongoose.Schema.Types.ObjectId, ref: "BookingDocument"
  }],

  timeline: [{
    type: { type: String },
    title: String,
    time: String,
    description: String,
  }],

  days: [{
    day: Number,
    title: String,
    activities: [String],
  }],

  aiResponse: {
    type: Object,
  },

  shareId: {
    type: String,
    unique: true,
    sparse: true,
  },

}, { timestamps: true });

const Itinerary = mongoose.model("Itinerary", itinerarySchema);
export default Itinerary;