import { useEffect, useState } from "react";
import Loader from "../components/common/Loader";
import { getProfile } from "../services/authService";
import { getItineraries } from "../services/itineraryService";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [totalTrips, setTotalTrips] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchProfile = async () => {
    try {
      const profileRes = await getProfile();
      setUser(profileRes.data);
      const itineraryRes = await getItineraries();
      setTotalTrips(itineraryRes.data.length);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (loading) return <Loader />;

  return (
    <div >
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>

      <div className="bg-white rounded-2xl shadow-md p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
            {user?.name?.charAt(0)}
          </div>

          <div>
            <h2 className="text-xl font-semibold">{user?.name}</h2>
            <p className="text-gray-500">{user?.email}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-xl">
            <h3 className="text-gray-500 text-sm">Total Trips</h3>
            <p className="text-2xl font-bold text-blue-600">{totalTrips}</p>
          </div>

          <div className="bg-green-50 p-4 rounded-xl">
            <h3 className="text-gray-500 text-sm">Member Since</h3>
            <p className="font-semibold">{new Date(user?.createdAt).toLocaleDateString()}</p>
          </div>

          <div className="bg-purple-50 p-4 rounded-xl">
            <h3 className="text-gray-500 text-sm">Account Status</h3>
            <p className="font-semibold text-green-600">Active</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;