import { useState } from "react";
import { Link } from "react-router-dom";

import Input from "../common/Input";
import Button from "../common/Button";
import Loader from "../common/Loader";

import { validateRegister } from "../../utils/validators";
import { showError, showSuccess } from "../../utils/toast";

const RegisterForm = ({ onSubmit }) => {
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

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
      validateRegister(formData);

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

      showSuccess(
        "Account created successfully"
      );
    } catch (error) {
      showError(
        error?.response?.data?.message ||
        "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
      <h2 className="text-3xl font-bold text-center mb-2">Create Account</h2>
      <p className="text-gray-500 text-center mb-6">Start planning smarter trips</p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <Input label="Full Name" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} error={errors.name} />
        <Input label="Email" name="email" type="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} error={errors.email} />
        <Input label="Password" name="password" type="password" placeholder="Create password" value={formData.password} onChange={handleChange} error={errors.password} />
        <Input label="Confirm Password" name="confirmPassword" type="password" placeholder="Confirm password" value={formData.confirmPassword} onChange={handleChange} error={errors.confirmPassword} />
        <Button type="submit" className="w-full">Register</Button>
      </form>

      <p className="text-center mt-5 text-sm">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-600 font-medium">Login</Link>
      </p>
    </div>
  );
};

export default RegisterForm;