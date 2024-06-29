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

const heroFormSubmit = document.querySelector("#hero-login-form");

// *Get User

const getUserToLocalStorage = (user) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const userObject = users.filter((item) => item.email === user.email);

  return userObject[0];
};

// *Entering user

const formSubmitHandler = (e) => {
  e.preventDefault();

  const loginForm = {};

  const loginFormData = new FormData(heroFormSubmit);

  loginFormData.forEach((value, key) => (loginForm[key] = value));

  const userEmail = loginForm.email.trim();
  const password = loginForm.password.trim();

  const validEmail = userEmail.includes("@") ? userEmail : false;
  const validPassword = password.length >= 8 ? password : false;

  // !Checking email and password
  const emailError = document.querySelector("#hero-email-error");
  const passwordError = document.querySelector("#hero-password-error");

  !validEmail
    ? emailError.classList.add("hero-error-show")
    : emailError.classList.remove("hero-error-show");

  !validPassword
    ? passwordError.classList.add("hero-error-show")
    : passwordError.classList.remove("hero-error-show");

  const newUser = {
    email: validEmail,
    password: validPassword,
  };

  const enteredUser =
    newUser.email && newUser.password ? getUserToLocalStorage(newUser) : null;

  console.log(enteredUser);
  if (
    enteredUser.email === newUser.email &&
    enteredUser.password === newUser.password
  ) {
    enteredUser.isAuth = true;
    localStorage.setItem("user", JSON.stringify(enteredUser));

    window.location.href = "index.html";
  } else {
    console.log("Failed to log in ");
  }
};

// # Form submit functions end
