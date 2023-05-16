export const EMAIL_VALIDATE = {
    regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    error: "Invalid Email Address",
  };
  
export const PASSWORD_VALIDATE = {
    regex: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/,
    error:
      "Password must contain at least: 1 digit, 1 letter, 1 special character and 8 characters",
};
  