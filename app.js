const mobilMenuIcon = document.querySelector("#hero-mobil-menu-icon");
const mobilMenu = document.querySelector("#hero-mobil-menu");
const hamburgerIcon = document.querySelector("#hero-hamburger-icon");
const closeIcon = document.querySelector("#hero-close-icon");

// Mobil menu visibilty switcher function start
const mobilMenuHandler = () => {
  if (mobilMenu.classList.contains("active")) {
    mobilMenu.classList.remove("active");
    setTimeout(() => {
      mobilMenu.style.visibilty = "hidden";
      mobilMenu.style.opacity = "0";
    }, 300);
  } else {
    mobilMenu.classList.add("active");
    mobilMenu.style.visibilty = "visible";
    mobilMenu.style.opacity = "1";
  }

  mobilMenu.classList.contains("active")
    ? (closeIcon.style.display = "block")
    : (closeIcon.style.display = "none");

  mobilMenu.classList.contains("active")
    ? (hamburgerIcon.style.display = "none")
    : (hamburgerIcon.style.display = "block");
};
// Mobil menu visibilty changer function start
