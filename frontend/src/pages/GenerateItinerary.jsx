import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/common/Loader";
import Button from "../components/common/Button";
import { generateItinerary } from "../services/itineraryService";
import { itineraryStart, itinerarySuccess, itineraryFailure } from "../redux/slices/itinerarySlice";
import { showSuccess, showError } from "../utils/toast";

const GenerateItinerary = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [generating, setGenerating] = useState(false);
  const extractedData = useSelector(state => state.upload.extractedData);

  console.log("Redux extractedData:", extractedData);
  const handleGenerate = async () => {
    try {
      setGenerating(true);
      dispatch(itineraryStart());

      // Temporary demo data
      // Later this comes from UploadDocument page
      // const extractedData = {
      //   destination: "Dubai",
      //   startDate: "2026-07-10",
      //   endDate: "2026-07-15",

      //   flights: [
      //     {
      //       from: "Delhi",
      //       to: "Dubai",
      //       departure:
      //         "2026-07-10T08:00:00",
      //     },
      //   ],

      //   hotels: [
      //     {
      //       name:
      //         "Atlantis The Palm",
      //     },
      //   ],
      // };

      const response = await generateItinerary(extractedData);
      dispatch(itinerarySuccess(response.data));
      showSuccess("Itinerary generated successfully");
      navigate(`/itinerary/${response.data._id}`);

    } catch (error) {
      dispatch(itineraryFailure(error.response?.data?.message || "Failed to generate itinerary"));
      showError(error.response?.data?.message || "Failed to generate itinerary");
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