import { useState } from "react";
import { Link } from "react-router-dom";

import Input from "../common/Input";
import Button from "../common/Button";
import Loader from "../common/Loader";

import { validateLogin } from "../../utils/validators";
import { showError, showSuccess } from "../../utils/toast";

const LoginForm = ({ onSubmit }) => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors =
      validateLogin(formData);

    if (
      Object.keys(validationErrors).length > 0
    ) {
      setErrors(validationErrors);

      return showError(
        "Please fix the form errors"
      );
    }

    try {
      setLoading(true);

      if (onSubmit) {
        await onSubmit(formData);
      }

      showSuccess("Login successful");
    } catch (error) {
      showError(
        error?.response?.data?.message ||
        "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
      <h2 className="text-3xl font-bold text-center mb-2">Welcome Back</h2>
      <p className="text-gray-500 text-center mb-6">Login to your account</p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <Input label="Email" name="email" type="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} error={errors.email} />
        <Input label="Password" name="password" type="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} error={errors.password} />
        <Button type="submit" className="w-full">Login</Button>
      </form>

      <p className="text-center mt-5 text-sm">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-600 font-medium">Register</Link>
      </p>
    </div>
  );
};

export default LoginForm;