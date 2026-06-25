export const parseFlightData = (extractedText) => {
    return {
        type: "flight",
        text: extractedText,
    };
};

export const parseHotelData = (extractedText) => {
    return {
        type: "hotel",
        text: extractedText,
    };
};

export const parseTravelDocument =
    (documentType, text) => {
        switch (documentType) {
            case "flight":
                return parseFlightData(text);

            case "hotel":
                return parseHotelData(text);

            default:
                return {
                    type: "unknown",
                    text,
                };
        }
    };

export const cleanOCRText = (text) => {
    return text?.replace(/\s+/g, " ")?.trim();
};

export const buildTravelContext = (documents) => {
    return documents.map((doc) => ({
        type: doc.type,
        content: cleanOCRText(doc.content),
    }));
};