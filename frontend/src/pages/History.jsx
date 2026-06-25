import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/common/Loader";
import EmptyState from "../components/common/EmptyState";
import ItineraryCard from "../components/itinerary/ItineraryCard";
import { getTripDuration } from "../utils/formatDate";
import { getItineraries } from "../services/itineraryService";

const History = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [itineraries, setItineraries] = useState([]);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const response = await getItineraries();
      setItineraries(response.data || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleView = (trip) => {
    navigate(`/itinerary/${trip._id}`);
  };

  if (loading) return <Loader />;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Itinerary History</h1>
      {itineraries.length === 0 ? (
        <EmptyState title="No Itineraries Found" description="Generate your first AI itinerary to see it here." />
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {itineraries.map((trip) => (
            <div key={trip._id}>
              <ItineraryCard itinerary={trip} onView={handleView} />
              <p className="text-sm text-gray-500 mt-2">
                Duration:{" "} {getTripDuration(trip.startDate, trip.endDate)}{" "}days
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default History;