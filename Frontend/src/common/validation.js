// Regex
const PasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validation for each form field
const validate = {
  fullname: (value) => {
    if (value.trim().length < 6) {
      return {
        fullname: true,
        fullnameError: "Full Name must 6 characters long.",
      };
    } else {
      return { fullname: false, fullnameError: false };
    }
  },

  email: (value) => {
    if (value.trim().length < 5 || !emailRegex.test(value)) {
      return { email: true, emailError: "Enter Valid Email" };
    } else {
      return { email: false, emailError: false };
    }
  },
  password: (value) => {
    if (!PasswordRegex.test(value)) {
      return {
        password: true,
        passwordError:
          "Minimum 8 characters including 1 uppercase, 1 lowercase, 1 number, 1 symbol",
      };
    } else {
      return { password: false, passwordError: false };
    }
  },
  title: (value) => {
    if (value.trim().length < 4 || value.trim().length > 30) {
      return { title: true, titleError: "Title: Min. 4 Max. 30 charcaters" };
    } else {
      return { title: false, titleError: false };
    }
  },
  content: (value) => {
    if (value.trim().length < 20 || value.trim().length > 200) {
      return {
        content: true,
        contentError: "Content: Min. 20 Max. 200 charcaters",
      };
    } else {
      return { content: false, contentError: false };
    }
  },
};

export default validate;
