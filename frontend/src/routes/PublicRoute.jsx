import { Navigate, Outlet } from "react-router-dom";
import { getItem } from "../utils/storage.js";

const PublicRoute = () => {
    const token = getItem("token");
    return token ? (
        <Navigate to="/dashboard" replace />) : (
        <Outlet />
    );
};

export default PublicRoute;