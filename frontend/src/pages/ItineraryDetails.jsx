import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/common/Loader";
import Timeline from "../components/itinerary/Timeline";
import DayPlan from "../components/itinerary/DayPlan";
import ShareModal from "../components/itinerary/ShareModal";
import DownloadPDF from "../components/itinerary/DownloadPDF";
import { formatDate, getTripDuration } from "../utils/formatDate";
import { getItineraryById, shareItinerary } from "../services/itineraryService";
import { showSuccess, showError } from "../utils/toast";

const ItineraryDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [shareLink, setShareLink] = useState("");
  const [itinerary, setItinerary] = useState(null);

  useEffect(() => {
    fetchItinerary();
  }, [id]);

  const fetchItinerary = async () => {
    try {
      const response = await getItineraryById(id);
      setItinerary(response.data);
    } catch (error) {
      showError(error.response?.data?.message || "Failed to load itinerary");
    } finally {
      setLoading(false);
    }
  };

  const handleShare = async () => {
    try {
      const response = await shareItinerary(id);
      setShareLink(response.data.shareUrl);
      setOpen(true);
      showSuccess("Share link generated");
    } catch (error) {
      showError(error.response?.data?.message || "Failed to share itinerary");
    }
  };

  if (loading) return <Loader />;

  if (!itinerary) {
    return (
      <div className="text-center py-20">Itinerary not found</div>
    );
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold">{itinerary.destination} Trip</h1>
          <p className="text-gray-500 mt-2">{formatDate(itinerary.startDate)}{" - "}{formatDate(itinerary.endDate)}</p>
          <p className="text-sm text-gray-400">{getTripDuration(itinerary.startDate, itinerary.endDate)}{" "} Days</p>
        </div>

        <div className="flex gap-3">
          <DownloadPDF itinerary={itinerary} />
          <button onClick={handleShare} className="bg-blue-600 text-white px-4 py-2 rounded-lg" >
            Share
          </button>
        </div>
      </div>

      {itinerary.timeline?.length > 0 && (
        <div className="mt-8">
          <Timeline timeline={itinerary.timeline} />
        </div>
      )}

      {itinerary.days?.length > 0 && (
        <div className="grid gap-4 mt-8">
          {itinerary.days.map((day) => (<DayPlan key={day.day} {...day} />))}
        </div>
      )}

      <ShareModal isOpen={open} onClose={() => setOpen(false)} shareLink={shareLink} />
    </div>
  );
};

export default ItineraryDetails;