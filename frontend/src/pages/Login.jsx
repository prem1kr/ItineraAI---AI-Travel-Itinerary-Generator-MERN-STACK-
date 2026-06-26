import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm";
import { loginUser } from "../services/authService";
import { authStart, authSuccess, authFailure } from "../redux/slices/authSlice";
import { showSuccess, showError } from "../utils/toast";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      dispatch(authStart());
      const response = await loginUser(data);
      dispatch(authSuccess({
        user: response.data.user,
        token: response.data.token,
      })
      );

      showSuccess("Login successful");
      navigate("/dashboard");

    } catch (error) {
      dispatch(authFailure(error.response?.data?.message || "Login failed"));
      showError(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default Login;