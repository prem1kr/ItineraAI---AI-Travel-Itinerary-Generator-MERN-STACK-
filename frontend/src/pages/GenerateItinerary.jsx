import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Loader from "../components/common/Loader";
import Button from "../components/common/Button";
import { generateItinerary } from "../services/itineraryService";
import { generateStart, generateSuccess, generateFailure } from "../redux/slices/itinerarySlice";
import { showSuccessToast, showErrorToast } from "../utils/toast";

const GenerateItinerary = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [generating, setGenerating] = useState(false);

  const handleGenerate = async () => {
    try {
      setGenerating(true);
      dispatch(generateStart());

      // Temporary demo data
      // Later this comes from UploadDocument page
      const extractedData = {
        destination: "Dubai",
        startDate: "2026-07-10",
        endDate: "2026-07-15",

        flights: [
          {
            from: "Delhi",
            to: "Dubai",
            departure:
              "2026-07-10T08:00:00",
          },
        ],

        hotels: [
          {
            name:
              "Atlantis The Palm",
          },
        ],
      };

      const response = await generateItinerary(extractedData);
      dispatch(generateSuccess(response.data));
      showSuccessToast("Itinerary generated successfully");
      navigate(`/itinerary/${response.data._id}`);

    } catch (error) {
      dispatch(generateFailure(error.response?.data?.message || "Failed to generate itinerary"));
      showErrorToast(error.response?.data?.message || "Failed to generate itinerary");
    } finally {
      setGenerating(false);
    }
  };

  if (generating) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Generate Itinerary</h1>

      <div className="bg-white p-8 rounded-2xl shadow">
        <h2 className="text-xl font-semibold mb-3">AI Travel Planner</h2>
        <p className="text-gray-600 mb-6">Generate a complete travel itinerary from your uploaded booking documents.</p>
        <Button onClick={handleGenerate}>Generate AI Itinerary</Button>
      </div>
    </div>
  );
};

export default GenerateItinerary;