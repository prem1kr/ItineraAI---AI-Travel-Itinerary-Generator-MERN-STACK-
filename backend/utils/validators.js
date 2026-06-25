export const validateRegister = (data) => {
  const errors = {};
  if (!data.name?.trim()) {
    errors.name = "Name is required";
  }

  if (!data.email?.trim()) {
    errors.email = "Email is required";
  }

  if (!data.password) {
    errors.password = "Password is required";
  }

  if (data.password && data.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  return errors;
};

export const validateLogin = (data) => {
  const errors = {};

  if (!data.email) {
    errors.email = "Email is required";
  }

  if (!data.password) {
    errors.password = "Password is required";
  }

  return errors;
};

export const validateUpload = (
  files) => {
  if (!files || files.length === 0) {
    return { valid: false, message: "Please upload at least one file" };
  }

  return { valid: true };
};