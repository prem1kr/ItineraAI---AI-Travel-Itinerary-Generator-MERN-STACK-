import { Navigate, Outlet } from "react-router-dom";
import { getItem } from "../utils/storage.js";
const PrivateRoute = () => {
  const token = getItem("token");
  return token ? (<Outlet />) : (<Navigate to="/login" replace />);
};

export default PrivateRoute;