import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loader from "../components/common/Loader";
import { getItineraries } from "../services/itineraryService";

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalItineraries: 0,
    upcomingTrips: 0,
    documentsUploaded: 0,
  });

  const [recentTrips, setRecentTrips] = useState([]);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const response = await getItineraries();
      const itineraries = response.data || [];
      const upcomingTrips = itineraries.filter((trip) => new Date(trip.startDate) > new Date()).length;
      const documentsUploaded = itineraries.reduce((total, trip) => total + (trip.bookingDocuments?.length || 0), 0);

      setStats({ totalItineraries: itineraries.length, upcomingTrips, documentsUploaded, });
      setRecentTrips(itineraries.slice(0, 5));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader />;

  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-500 mt-2">Welcome back,{" "}{user?.name || "Traveler"} 👋</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">Total Itineraries</h3>
          <p className="text-3xl font-bold mt-2 text-blue-600">{stats.totalItineraries}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">Documents Uploaded</h3>
          <p className="text-3xl font-bold mt-2 text-green-600">{stats.documentsUploaded}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">Upcoming Trips</h3>
          <p className="text-3xl font-bold mt-2 text-purple-600">{stats.upcomingTrips}</p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Recent Itineraries</h2>

        {recentTrips.length === 0 ? (
          <div className="bg-white p-6 rounded-xl shadow text-gray-500">
            No itineraries generated yet.
          </div>
        ) : (
          <div className="space-y-4">
            {recentTrips.map((trip) => (
              <div key={trip._id} className="bg-white p-5 rounded-xl shadow flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">{trip.destination}</h3>
                  <p className="text-sm text-gray-500">
                    {new Date(trip.startDate).toLocaleDateString()}{" - "}{new Date(trip.endDate).toLocaleDateString()}
                  </p>
                </div>

                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">View</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;