const mobilMenuIcon = document.querySelector("#hero-mobil-menu-icon");
const mobilMenu = document.querySelector("#hero-mobil-menu");
const hamburgerIcon = document.querySelector("#hero-hamburger-icon");
const closeIcon = document.querySelector("#hero-close-icon");
const heroWorkingModel = document.querySelector("#hero-job-type");
const dropdowns = document.querySelectorAll(".dropdown");
const mobilDropdowns = document.querySelectorAll(".hero-mobil-dropdown");

// #Get all jobs with api start

const getAllJobs = async () => {
  const response = await fetch(
    "https://667681ab145714a1bd71f20d.mockapi.io/api/fake-data/jobs"
  );

  const fetchedData = await response.json();

  return fetchedData;
};
// #Get all jobs with api end

// #Get working models start

const getWorkingModels = async () => {
  const allJobss = await getAllJobs();
  const workingModels = await allJobss.map((workingModel) => {
    return workingModel.working_model;
  });

  const cleanedWorkingModels = [...new Set(workingModels)];

  return cleanedWorkingModels;
};

document.addEventListener("DOMContentLoaded", async () => {
  const wmodels = await getWorkingModels();

  wmodels.forEach((item) => {
    const optionElement = document.createElement("option");
    optionElement.value = item.toLowerCase();
    optionElement.textContent = item;
    heroWorkingModel.appendChild(optionElement);
  });
});

// #Get working model end

// =>Mobil menu visibility switcher function start
const mobilMenuHandler = () => {
  if (mobilMenu.classList.contains("active")) {
    mobilMenu.classList.remove("active");
    setTimeout(() => {
      mobilMenu.style.visibility = "hidden";
    }, 300);
  } else {
    mobilMenu.classList.add("active");
    mobilMenu.style.visibility = "visible";
  }

  mobilMenu.classList.contains("active")
    ? (closeIcon.style.display = "block")
    : (closeIcon.style.display = "none");

  mobilMenu.classList.contains("active")
    ? (hamburgerIcon.style.display = "none")
    : (hamburgerIcon.style.display = "block");
};

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) {
    mobilMenu.classList.remove("active");
    hamburgerIcon.style.display = "";
    closeIcon.style.display = "none";
  }
});

// =>Mobil menu visibility changer function end

// !Search functions start

const titleSearch = document.querySelector(".hero-title-search");
const locationSearch = document.querySelector(".hero-location-search");
const jobType = document.querySelector("#hero-job-type");
const heroModalContainer = document.querySelector("#hero-modal-container");
const heroModalBody = document.querySelector("#hero-modal-table-body");

// =>Searching in all jobs start
const searchSubmitHandler = async () => {
  const allJobs = await getAllJobs();

  const searchTitle = titleSearch.value.trim().toLowerCase();
  const searchLocation = locationSearch.value.trim().toLowerCase();
  const searchJobType = jobType.value;

  const filteredJob = await allJobs.filter((job) => {
    const jobTitleMatches = searchTitle
      ? job.jobTitle.toLowerCase().includes(searchTitle)
      : true;
    const jobLocationMatches = searchLocation
      ? job.location.toLowerCase() === searchLocation
      : true;
    const jobTypeMatches =
      searchJobType !== "default"
        ? job.working_model.toLowerCase() === searchJobType
        : true;

    return jobTitleMatches && jobLocationMatches && jobTypeMatches;
  });

  // =>Filtered result write to screen start

  heroModalBody.innerHTML = "";

  if (filteredJob.length === 0) {
    heroModalBody.innerHTML = `<tr><td colspan="4">No job found</td></tr>`;
  } else {
    heroModalBody.innerHTML = filteredJob
      .map(
        (job) => `
      <tr>
      <td>${job.jobTitle}</td>
      <td>${job.company}</td>
      <td>${job.location}</td>
      <td>${job.working_model}</td>
      </tr>
      `
      )
      .join("");
  }

  heroModalContainer.style.display = "flex";
  // =>Filtered result write to screen end
};

// =>Searching in all jobs end

// =>Closing function to the modal start
const heroCloseIcon = document.querySelector("#hero-modal-close-icon");
heroCloseIcon.addEventListener("click", () => {
  heroModalContainer.style.display = "none";
});
// =>Closing function to the modal end

// !Search functions end

// => Dropdown menu functions start

// *Close dropdown menu
const closeDropdownMenu = () => {
  dropdowns.forEach((dropdown) => {
    const heroDropDownMenu = dropdown.querySelector(".hero-menu-dropdown-item");
    const heroMenuArrow = dropdown.querySelector("#hero-menu-arrow-img");
    heroDropDownMenu.classList.remove("hero-dropdown-show");
    heroMenuArrow.classList.remove("hero-menu-arrow-rotator");
  });
};

// *Change visibility dropdown menu
dropdowns.forEach((dropdown) => {
  const heroDropDownMenu = dropdown.querySelector(".hero-menu-dropdown-item");
  const heroMenuArrow = dropdown.querySelector("#hero-menu-arrow-img");

  dropdown.addEventListener("click", (e) => {
    e.preventDefault();
    closeDropdownMenu();
    heroDropDownMenu.classList.toggle("hero-dropdown-show");
    heroMenuArrow.classList.toggle("hero-menu-arrow-rotator");
  });
});

// *Close dropdown menu when click dropdown menu's outside
window.addEventListener("click", (e) => {
  !e.target.matches(".dropdown") ? closeDropdownMenu() : null;
});

window.addEventListener("resize", () => {
  if (window.innerWidth <= 1024) {
    dropdowns.forEach((dropdown) => {
      const heroDropDownMenu = dropdown.querySelector(
        ".hero-menu-dropdown-item"
      );
      const heroMenuArrow = dropdown.querySelector("#hero-menu-arrow-img");
      heroDropDownMenu.classList.remove("hero-dropdown-show");
      heroMenuArrow.classList.remove("hero-menu-arrow-rotator");
    });
  }
});

// => Dropdown menu functions end

// => Dropdown mobil menu functions start

const closeMobilDropdownMenu = () => {
  mobilDropdowns.forEach((mobilMenuDropdown) => {
    const heroMobilDropdownContent = mobilMenuDropdown.querySelector(
      ".hero-mobil-dropdown-content"
    );
    heroMobilDropdownContent.classList.remove("hero-mobil-dropdown-show");
  });
};

mobilDropdowns.forEach((mobilMenuDropdown) => {
  const heroMobilDropdownContent = mobilMenuDropdown.querySelector(
    ".hero-mobil-dropdown-content"
  );

  mobilMenuDropdown.addEventListener("click", (e) => {
    e.preventDefault();
    closeMobilDropdownMenu();
    heroMobilDropdownContent.classList.toggle("hero-mobil-dropdown-show");
  });
});

// *Close dropdown menu when click dropdown mobil menu's outside
window.addEventListener("click", (e) => {
  !e.target.matches(".hero-mobil-dropdown") ? closeMobilDropdownMenu() : null;
});

// => Dropdown mobil menu functions end

// => User functions start

// * General screen
const enteringUser = document.querySelector("#hero-user-entering");
const enteredUser = document.querySelector("#hero-user-entered");
const userInfo = document.querySelector("#user-info");
// *Mobil screen
const enteringUserMobil = document.querySelector("#hero-user-mobil-entering");
const enteredUserMobil = document.querySelector("#hero-user-mobil-entered");
const userInfoMobil = document.querySelector("#user-mobil-info");

// *Get single user
const getEnteredUserToLocalStorage = () => {
  const enteredUser = JSON.parse(localStorage.getItem("user")) || null;

  return enteredUser;
};

// *When load the page checking the user

window.onload = function () {
  const user = getEnteredUserToLocalStorage();

  user !== null && user.isAuth ? (enteringUser.style.display = "none") : "";
  user !== null && user.isAuth ? (enteredUser.style.display = "flex") : "";
  user !== null && user.isAuth
    ? (enteringUserMobil.style.display = "none")
    : "";
  user !== null && user.isAuth ? (enteredUserMobil.style.display = "flex") : "";

  userInfo.textContent = `${user.email}`;
  userInfoMobil.textContent = `${user.email}`;
};

const logOut = () => {
  localStorage.removeItem("user");
  window.location.reload();
};

// => User functions end

/*   SWIPER JS    */

const swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,

  },

  pagination: {
    el: ".swiper-pagination",

  },
});



/*     HAPPY USER BUTTON   */

const incrementButton = document.getElementById("counter-el");
let ilksayi = 0;

function increment() {
  ilksayi += 1;
  console.log("sayı arttırılıyor");
  incrementButton.innerHTML = 398 + ilksayi;
}

/*   MONTHLY-YEARLY CHANGES PACKAGES   */

const packagesProduct =
{
  monthly: [
    {
      id: 1,
      title: "BEGINNER",
      packageType: "Monthly Package",
      price: "17"

    }, {
      id: 2,
      title: "BASIC",
      packageType: "Monthly Package",
      price: "27"
    },
    {
      id: 3,
      title: "PREMIUM",
      packageType: "Monthly Package",
      price: "37"
    }
  ],
  yearly: [
    {
      id: 1,
      title: "BEGINNER",
      packageType: "Yearly Package",
      price: "57"
    },
    {
      id: 2,
      title: "BASIC",
      packageType: "Yearly Package",
      price: "67"
    },
    {
      id: 3,
      title: "PREMIUM",
      packageType: "Yearly Package",
      price: "77"
    }]
}

const swiperWrapper = document.querySelector("#swiper-items")

const changeSwiperContent = (type) => {
  swiperWrapper.innerHTML = '';
  if (type === "monthly") {

    document.querySelector(".monthly-btn").style.color = "purple";
    document.querySelector(".yearly-btn").style.color = "black";


    swiperWrapper.innerHTML = packagesProduct.monthly.map((item) => {
      return `<div class="swiper-slide">
     <div class="card">
       <h2 class="beginer">${item.title}</h2>
       <p>${item.packageType} </p>
       <span class="dollar">$${item.price}<sup>.99</sup></span>
       <ul class="features">
         <li>Anonymous User</li>
         <li>Bot Detection</li>
         <li>Registration</li>
         <li>Directory</li>
       </ul>
       <button class="cta-button-${item.id}">Get Started Now</button>
     </div>
   </div>`
    }).join("")
  }
  else {
    document.querySelector(".monthly-btn").style.color = "black";
    document.querySelector(".yearly-btn").style.color = "purple";
    swiperWrapper.innerHTML = packagesProduct.yearly.map((item) => {
      return `<div class="swiper-slide">
     <div class="card">
       <h2 class="beginer">${item.title}</h2>
       <p>${item.packageType} </p>
       <span class="dollar">$${item.price}<sup>.99</sup></span>
       <ul class="features">
         <li>Anonymous User</li>
         <li>Bot Detection</li>
         <li>Registration</li>
         <li>Directory</li>
       </ul>
       <button class="cta-button-${item.id}">Get Started Now</button>
     </div>
   </div>`
    }).join("")

  }
  swiper.update();
}
changeSwiperContent();



