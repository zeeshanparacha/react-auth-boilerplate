export const handleValidations = (validationData, errs) => {
  const errors = {};
  const EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  for (const [key, value] of Object.entries(validationData)) {
    if (key === "username" && !value) {
      errors[key] = "Username cannot be empty.";
    } else if (key === "email" && !EMAIL_PATTERN.test(value)) {
      errors[key] = "It looks like an invalid email address.";
    } else if (key === "password") {
      if (!value) {
        errors[key] = "Password cannot be empty.";
      } else if (errs?.["password"]) {
        errors[key] = "Please match all combinations.";
      }
    }
  }

  return errors;
};
