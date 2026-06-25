import API from "./api";

export const generateItinerary = async (extractedData) => {
  const response = await API.post("/itinerary/generate", { extractedData });
  return response.data;
};

export const getItineraries = async () => {
  const response = await API.get("/itinerary/history");
  return response.data;
};

export const getItineraryById = async (id) => {
  const response = await API.get(`/itinerary/${id}`);
  return response.data;
};

export const deleteItinerary = async (id) => {
  const response = await API.delete(`/itinerary/${id}`);
  return response.data;
};

export const shareItinerary = async (id) => {
  const response = await API.post(`/itinerary/share/${id}`);
  return response.data;
};