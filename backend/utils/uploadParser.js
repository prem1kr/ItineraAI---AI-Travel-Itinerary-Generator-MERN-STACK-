export const cleanText = (text) => {
  return text?.replace(/\s+/g, " ")?.trim();
};

export const parseFlightTicket = (text) => {
  return { type: "flight", content: cleanText(text) };
};

export const parseHotelBooking = (text) => {
  return { type: "hotel", content: cleanText(text) };
};

export const parseTrainTicket = (text) => {
  return { type: "train", content: cleanText(text) };
};

export const buildTravelContext = (documents) => {
  return documents.map((doc) => ({ type: doc.type, content: cleanText(doc.content) }));
};