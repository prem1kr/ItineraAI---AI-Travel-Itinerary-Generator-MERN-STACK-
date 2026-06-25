import { registerUserService, loginUserService } from "../services/authService.js";
import { successResponse, errorResponse } from "../utils/responseHandler.js";

export const registerUser = async (req, res) => {

  try {
    const { name, email, password } = req.body;
    const result = await registerUserService(
      name,
      email,
      password
    );

    successResponse(res, "User registered successfully", result, 201);

  } catch (error) {
    errorResponse(res, error.message, 400);
  }
};

export const loginUser = async (req, res) => {

  try {
    const { email, password } = req.body;
    const result = await loginUserService(email, password);
    successResponse(res, "Login successful", result);

  } catch (error) {
    errorResponse(res, error.message, 401);
  }
};