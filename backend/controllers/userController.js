import User from "../models/User.js";
import { successResponse, errorResponse } from "../utils/responseHandler.js";

export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    successResponse(res, "Profile fetched", user);

  } catch (error) {
    errorResponse(res, error.message);
  }
};