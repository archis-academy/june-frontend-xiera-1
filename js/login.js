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

const heroFormSubmit = document.querySelector("#hero-form");

const formSubmitHandler = (e) => {
  e.preventDefault();

  const useremail = document.querySelector("#hero-form-useremail").value.trim();
  const password = document.querySelector("#hero-form-password").value.trim();

  const validEmail = useremail.includes("@") ? useremail : false;
  const validPassword = password.length >= 8 ? password : false;

  // !Checking email and password
  const emailErorr = document.querySelector("#hero-email-error");
  const passwordErorr = document.querySelector("#hero-password-error");

  !validEmail
    ? emailErorr.classList.add("hero-error-show")
    : emailErorr.classList.remove("hero-error-show");

  !validPassword
    ? passwordErorr.classList.add("hero-error-show")
    : passwordErorr.classList.remove("hero-error-show");

  return validEmail && validPassword;
};

// # Form submit functions end
