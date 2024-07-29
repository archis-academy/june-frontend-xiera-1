

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

const customers = [{
    name: "Saitama Sensei",
    imageUrl: "images/0.png",
    work: "frontend development",
    description: "Wanpanman) is a Japanese superhero manga series created by One. It tells the story of Saitama, an independent superhero who, because he can defeat any opponent with a single punch due to having trained himself to his peak condition, grows bored from a lack of challenge, setting out to find powerful opponents, while making allies of other heroes as well.",
    rate: "images/group-star.svg",
    status: "active",
},
{
    name: "luffy Senpai",
    imageUrl: "images/1.png",
    work: "frontend development",
    description: "“One Piece (stylized in all caps) is a Japanese manga series written and illustrated by Eiichiro Oda. One Piece (stylized in all caps) is a Japanese manga series written and illustrated by Eiichiro Oda.One Piece (stylized in all caps) is a Japanese manga series written and illustrated by Eiichiro Oda.One Piece (stylized in all caps) is a Japanese manga series written and illustrated by Eiichiro Oda.",
    rate: "images/group-star.svg",
    status: "active",
},
{
    name: "John Med",
    imageUrl: "images/2.png",
    work: "frontend development",
    description: "“Really Jobfind is the best platform to get any kind of job, aspecially their support was awesome, They have tried to level best to give best support of new candidate.”",
    rate: "images/group-star.svg",
    status: "active",
},
{
    name: "levi Acerman",
    imageUrl: "images/3.png",
    work: "frontend development",
    description: "“Really Jobfind is the best platform to get any kind of job, aspecially their support was awesome, They have tried to level best to give best support of new candidate.”",
    rate: "images/group-star.svg",
    status: "active",
},
{
    name: "Nicola Tesla",
    imageUrl: "images/4.png",
    work: "frontend development",
    description: "“Really Jobfind is the best platform to get any kind of job, aspecially their support was awesome, They have tried to level best to give best support of new candidate.”",
    rate: "images/group-star.svg",
    status: "active",
},
{
    name: "John Wick",
    imageUrl: "images/5.png",
    work: "frontend development",
    description: "“Really Jobfind is the best platform to get any kind of job, aspecially their support was awesome, They have tried to level best to give best support of new candidate.”",
    rate: "images/group-star.svg",
    status: "active",
},
{
    name: "Bleach",
    imageUrl: "images/6.png",
    work: "frontend development",
    description: "“Really Jobfind is the best platform to get any kind of job, aspecially their support was awesome, They have tried to level best to give best support of new candidate.”",
    rate: "images/group-star.svg",
    status: "active",
},
{
    name: "Demon Slayer",
    imageUrl: "images/7.png",
    work: "frontend development",
    description: "“Really Jobfind is the best platform to get any kind of job, aspecially their support was awesome, They have tried to level best to give best support of new candidate.”",
    rate: "images/group-star.svg",
    status: "active",
},


]



const testimonialContent = document.querySelector(".testimonial-content")
const customerImage = document.querySelector(".testimonial-content-customer-img-customer");
const customerName = document.querySelector(".testimonial-content-customer-info-header-h2");
const customerWork = document.querySelector(".testimonial-content-customer-info-header-p");
const customerDescription = document.querySelector(".testimonial-content-customer-info-details");
const rateSvg = document.querySelector(".testimonial-content-customer-info-rate")
const prevButton = document.querySelector("#prev")
const nextButton = document.querySelector("#next")

let currentIndex = 0;
function updateCustomerDetails(customer) {
  customerImage.src = customer.imageUrl;
  customerImage.alt = customer.name;
  customerName.textContent = customer.name;
  customerWork.textContent = customer.work;
  customerDescription.textContent = customer.description;
  rateSvg.src = customer.rate
}

function updateCarousel() {
  updateCustomerDetails(customers[currentIndex]);
  testimonialContent.classList.add('fade-out');
  prevButton.classList.toggle('arrow-disabled', currentIndex === 0);
  nextButton.classList.toggle('arrow-disabled', currentIndex === customers.length - 1);
  
  testimonialContent.addEventListener('transitionend', () => {
    testimonialContent.classList.remove('fade-out');
  },{ once: true });
}

prevButton.addEventListener('click', () => {
  
  if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
  }
});

nextButton.addEventListener('click', () => {
  if (currentIndex < customers.length - 1) {
      currentIndex++;
      updateCarousel();
  }
});


updateCarousel();