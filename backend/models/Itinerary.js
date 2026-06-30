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
    day: { type: Number, required: true },
    title: { type: String, required: true },
    activities: [{
      time: { type: String, required: true },
      event: { type: String, required: true },
      recommendation: { type: String, default: "" },
    }]
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