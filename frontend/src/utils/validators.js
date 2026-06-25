export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const validatePassword = (password) => {
  return password.length >= 6;
};

export const validateLogin = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Email is required";

  } else if (!validateEmail(values.email)) {
    errors.email = "Invalid email";
  }

  if (!values.password) {
    errors.password = "Password is required";
  }
  return errors;
};

export const validateRegister = (values) => {
  const errors = {};

  if (!values.name?.trim()) {
    errors.name = "Name is required";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!validateEmail(values.email)) {
    errors.email = "Invalid email";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (!validatePassword(values.password)) {
    errors.password = "Minimum 6 characters required";
  }

  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }

  return errors;
};