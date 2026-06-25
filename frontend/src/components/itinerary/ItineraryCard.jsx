import { FiMapPin, FiCalendar } from "react-icons/fi";
import { formatDate } from "../../utils/formatDate";

const ItineraryCard = ({ itinerary, onView }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md border p-5 hover:shadow-lg transition">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-bold">{itinerary.destination}</h2>

          <div className="flex items-center gap-2 text-gray-500 mt-2">
            <FiMapPin />
            {itinerary.destination}
          </div>

          <div className="flex items-center gap-2 text-gray-500 mt-2">
            <FiCalendar />
            {formatDate(itinerary.startDate)} -{" "}
            {formatDate(itinerary.endDate)}
          </div>
        </div>
      </div>

      <button onClick={() => onView(itinerary)} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">View Details</button>
    </div>
  );
};

export default ItineraryCard;