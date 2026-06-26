import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/auth/RegisterForm";
import { registerUser } from "../services/authService";
import { authStart, authSuccess, authFailure } from "../redux/slices/authSlice";
import { showSuccess, showError } from "../utils/toast";
import { setItem } from "../utils/storage";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = async (data) => {
    try {
      dispatch(authStart());
      const response = await registerUser(data);
      dispatch(authSuccess({
        user: response.data.user,
        token: response.data.token,
      }));
      setItem("token", response.data.token);
      showSuccess("Account created successfully");
      navigate("/dashboard");

    } catch (error) {
      dispatch(authFailure(error.response?.data?.message || "Registration failed"));
      showError(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <RegisterForm onSubmit={handleRegister} />
    </div>
  );
};

export default Register;