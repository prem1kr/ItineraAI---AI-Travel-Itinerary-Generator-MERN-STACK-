import { FiDownload } from "react-icons/fi";
import { downloadItineraryPDF } from "../../utils/pdfGenerator";

const DownloadPDF = ({ itinerary }) => {
  return (
    <button onClick={() => downloadItineraryPDF(itinerary)} className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
      <FiDownload />
      Download PDF
    </button>
  );
};

export default DownloadPDF;