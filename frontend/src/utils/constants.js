export const APP_NAME = "ItineraAI";
export const FILE_TYPES = [
  "application/pdf",
  "image/png",
  "image/jpeg",
  "image/jpg",
];

export const MAX_FILE_SIZE = 10 * 1024 * 1024;

export const API_ENDPOINTS = {
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  PROFILE: "/auth/profile",
  UPLOAD: "/upload",
  GENERATE_ITINERARY: "/itinerary/generate",
  HISTORY: "/itinerary/history",
};

export const ITINERARY_STATUS = {
  PENDING: "pending",
  GENERATED: "generated",
  FAILED: "failed",
};

export const STORAGE_KEYS = {
  TOKEN: "token",
  USER: "user",
};