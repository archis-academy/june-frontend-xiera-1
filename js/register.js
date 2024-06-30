// => Theme settings start

const themes = [
  {
    background: "#1A1A2E",
    color: "#FFFFFF",
    primaryColor: "#0F3460",
  },
  {
    background: "#461220",
    color: "#FFFFFF",
    primaryColor: "#E94560",
  },
  {
    background: "#192A51",
    color: "#FFFFFF",
    primaryColor: "#967AA1",
  },
  {
    background: "#F7B267",
    color: "#000000",
    primaryColor: "#F4845F",
  },
  {
    background: "#F25F5C",
    color: "#000000",
    primaryColor: "#642B36",
  },
  {
    background: "#231F20",
    color: "#FFF",
    primaryColor: "#BB4430",
  },
];

const setTheme = (theme) => {
  const root = document.querySelector(":root");
  root.style.setProperty("--background", theme.background);
  root.style.setProperty("--color", theme.color);
  root.style.setProperty("--primary-color", theme.primaryColor);
  root.style.setProperty("--glass-color", theme.glassColor);
};

const displayThemeButtons = () => {
  const btnContainer = document.querySelector(".theme-btn-container");
  themes.forEach((theme) => {
    const div = document.createElement("div");
    div.className = "theme-btn";
    div.style.cssText = `background: ${theme.background}; width: 25px; height: 25px`;
    btnContainer.appendChild(div);
    div.addEventListener("click", () => setTheme(theme));
  });
};

displayThemeButtons();
// => Theme settings end

// # Form submit functions start

const heroFormSubmit = document.querySelector("#hero-register-form");

// * Save the user to LocalStorage
const saveUserToLocalStorage = (user) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  users.push(user);

  localStorage.setItem("users", JSON.stringify(users));

  heroFormSubmit.reset();

  return true;
};

// => Get user information and validation

const formRegisterSubmitHandler = (e) => {
  e.preventDefault();

  const formDataObject = {};
  const formData = new FormData(heroFormSubmit);

  formData.forEach((value, key) => (formDataObject[key] = value));

  // * Get user information
  const userEmail = formDataObject.email.trim();
  const confirmUserEmail = formDataObject.confirmEmail.trim();
  const password = formDataObject.password.trim();
  const confirmPassword = formDataObject.confirmPassword.trim();

  // !Checking email and password
  const validEmail = userEmail.includes("@") ? userEmail : false;
  const validConfirmEmail =
    validEmail === confirmUserEmail ? validEmail : false;
  const validPassword = password.length >= 8 ? password : false;
  const validConfirmPassword =
    validPassword === confirmPassword ? validPassword : false;

  const emailError = document.querySelector("#hero-email-error");
  const confirmEmailError = document.querySelector("#hero-email-confirm-error");
  const passwordError = document.querySelector("#hero-password-error");
  const confirmPasswordError = document.querySelector(
    "#hero-password-confirm-error"
  );

  !validEmail
    ? emailError.classList.add("hero-error-show")
    : emailError.classList.remove("hero-error-show");

  !validConfirmEmail
    ? confirmEmailError.classList.add("hero-error-show")
    : confirmEmailError.classList.remove("hero-error-show");

  !validPassword
    ? passwordError.classList.add("hero-error-show")
    : passwordError.classList.remove("hero-error-show");

  !validConfirmPassword
    ? confirmPasswordError.classList.add("hero-error-show")
    : confirmPasswordError.classList.remove("hero-error-show");

  const newUser = {
    isAuth: false,
    email: validConfirmEmail,
    password: validConfirmPassword,
  };

  const isUser =
    newUser.email && newUser.password ? saveUserToLocalStorage(newUser) : null;

  isUser ? registeringAlert("success") : registeringAlert("error");
};

const registeringAlert = (alertType) => {
  if (alertType === "success") {
    Swal.fire({
      title: "Registration was successful",
      text: "Please hold, you are being redirected",
      icon: "success",
      showCloseButton: true,
      showConfirmButton: false,
      background: "#1A1A2E",
      color: "#fff",
    });

    setTimeout(() => {
      window.location.href = "/login.html";
    }, 2500);
  } else {
    Swal.fire({
      title: "Failed to create record",
      text: "Please check your entries",
      icon: "error",
      showCloseButton: true,
      showConfirmButton: false,
      background: "#1A1A2E",
      color: "#fff",
    });
  }
};

// # Form submit functions end
