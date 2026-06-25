import { Link } from "react-router-dom";
import { FiUploadCloud, FiFileText, FiMap, FiShare2 } from "react-icons/fi";

const Home = () => {
  return (
    <div>

      <section className="min-h-[90vh] flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto text-center">
          <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
            ✈️ AI Powered Travel Planning
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-6 leading-tight">
            Turn Travel Bookings Into
            <span className="text-blue-600">{" "}Smart Itineraries</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Upload flight tickets, hotel reservations,
            train bookings, and travel documents.
            Our AI automatically generates a complete
            travel itinerary in seconds.
          </p>

          <div className="flex justify-center gap-4 mt-10 flex-wrap">
            <Link to="/register" className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
              Get Started Free
            </Link>

            <Link to="/login" className="border px-6 py-3 rounded-xl hover:bg-gray-100 transition">
              Login
            </Link>
          </div>
        </div>
      </section>


      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14">Features</h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow">
              <FiUploadCloud size={28} />
              <h3 className="font-semibold mt-4">Upload Documents</h3>
              <p className="text-gray-500 mt-2">Upload PDFs and travel booking images.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <FiFileText size={28} />
              <h3 className="font-semibold mt-4">OCR Extraction</h3>
              <p className="text-gray-500 mt-2">
                Extract flight and hotel details automatically.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <FiMap size={28} />
              <h3 className="font-semibold mt-4">AI Itinerary</h3>
              <p className="text-gray-500 mt-2">
                Generate day-by-day travel plans instantly.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <FiShare2 size={28} />
              <h3 className="font-semibold mt-4">Share Trips</h3>
              <p className="text-gray-500 mt-2">
                Share your itinerary with friends and family.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14">How It Works</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>

              <h3 className="font-semibold mt-4">Upload Bookings</h3>
              <p className="text-gray-500 mt-2">
                Upload flight tickets, hotel reservations,
                and travel documents.
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>

              <h3 className="font-semibold mt-4">AI Processing</h3>
              <p className="text-gray-500 mt-2">
                OCR and AI extract all travel details.
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>

              <h3 className="font-semibold mt-4">Get Itinerary</h3>
              <p className="text-gray-500 mt-2">
                Receive a complete travel plan instantly.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-20 px-6 bg-blue-600 text-white text-center">
        <h2 className="text-4xl font-bold">Ready to Plan Smarter Trips?</h2>
        <p className="mt-4 text-lg opacity-90">
          Let AI organize your travel experience.
        </p>

        <Link to="/register" className="inline-block mt-8 bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold">
          Start Now
        </Link>
      </section>
    </div>
  );
};

export default Home;