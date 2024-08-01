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


const jobListings = [
  {
    logo: "https://via.placeholder.com/150x150/0077b6/ffffff?text=Gucci",
    id: 1,
    JobTitle: "Senior UI/UX Designer",
    CompanyName: "Gucci",
    PostedDate: "2 days ago",
    Location: "Oslo, Norway",
    JobType: "Part-Time",
    Description:
      "Gucci is seeking an experienced UI/UX Designer to join our innovative design team. You will be responsible for creating visually stunning and user-friendly interfaces, working closely with the development team to ensure seamless integration of design elements.",
  },
  {
    logo: "https://via.placeholder.com/150x150/c8102e/ffffff?text=Prada",
    id: 2,
    JobTitle: "Frontend Developer - React Specialist",
    CompanyName: "Prada",
    PostedDate: "1 week ago",
    Location: "Milan, Italy",
    JobType: "Full-Time",
    Description:
      "Prada is seeking a talented Frontend Developer with expertise in React to join our dynamic web development team. You will be responsible for developing and maintaining high-quality web applications, ensuring optimal performance across all devices.",
  },
  {
    logo: "https://via.placeholder.com/150x150/1d2951/ffffff?text=Versace",
    id: 3,
    JobTitle: "Backend Developer - Node.js Expert",
    CompanyName: "Versace",
    PostedDate: "3 days ago",
    Location: "Rome, Italy",
    JobType: "Remote",
    Description:
      "Versace is seeking an experienced Backend Developer with a strong background in Node.js to join our growing tech team. You will be responsible for creating and maintaining scalable server-side logic, ensuring high performance and responsiveness to requests from the front-end.",
  },
  {
    logo: "https://via.placeholder.com/150x150/8c1aff/ffffff?text=Fendi",
    id: 4,
    JobTitle: "Full-Stack Developer",
    CompanyName: "Fendi",
    PostedDate: "1 month ago",
    Location: "Paris, France",
    JobType: "Full-Time",
    Description:
      "Fendi is seeking a versatile Full-Stack Developer to join our innovative tech team. You will be responsible for developing and maintaining end-to-end web applications, working with both the front-end and back-end components to deliver high-quality, scalable solutions.",
  },
  {
    logo: "https://via.placeholder.com/150x150/ff6b6b/ffffff?text=Valentino",
    id: 5,
    JobTitle: "Mobile App Developer - iOS and Android",
    CompanyName: "Valentino",
    PostedDate: "2 weeks ago",
    Location: "Milan, Italy",
    JobType: "Full-Time",
    Description:
      "Valentino is seeking a talented Mobile App Developer with expertise in both iOS and Android platforms. You will be responsible for designing, developing, and maintaining our mobile applications, ensuring a seamless and engaging user experience across all devices.",
  },
  {
    logo: "https://via.placeholder.com/150x150/9b59b6/ffffff?text=Dior",
    id: 6,
    JobTitle: "Senior Data Analyst",
    CompanyName: "Dior",
    PostedDate: "1 month ago",
    Location: "Paris, France",
    JobType: "Full-Time",
    Description:
      "Dior is seeking an experienced Senior Data Analyst to join our data-driven team. You will be responsible for analyzing complex data sets, extracting valuable insights, and helping shape the company's data-driven decision-making processes.",
  },
  {
    logo: "https://via.placeholder.com/150x150/e67e22/ffffff?text=Chanel",
    id: 7,
    JobTitle: "DevOps Engineer",
    CompanyName: "Chanel",
    PostedDate: "2 weeks ago",
    Location: "London, UK",
    JobType: "Full-Time",
    Description:
      "Chanel is seeking a skilled DevOps Engineer to join our tech team. You will be responsible for automating and optimizing our deployment and infrastructure management processes, ensuring the reliability and scalability of our systems.",
  },
  {
    logo: "https://via.placeholder.com/150x150/2980b9/ffffff?text=Armani",
    id: 8,
    JobTitle: "Product Manager",
    CompanyName: "Armani",
    PostedDate: "1 week ago",
    Location: "Milan, Italy",
    JobType: "Full-Time",
    Description:
      "Armani is seeking a talented Product Manager to lead the development and growth of our innovative product lines. You will be responsible for defining product strategies, managing the product roadmap, and collaborating with cross-functional teams to deliver exceptional products.",
  },
  {
    logo: "https://via.placeholder.com/150x150/8e44ad/ffffff?text=Burberry",
    id: 9,
    JobTitle: "Senior QA Engineer",
    CompanyName: "Burberry",
    PostedDate: "3 days ago",
    Location: "London, UK",
    JobType: "Full-Time",
    Description:
      "Burberry is seeking an experienced Senior QA Engineer to join our quality assurance team. You will be responsible for designing and implementing comprehensive testing strategies, identifying and resolving issues, and ensuring the delivery of high-quality software.",
  },
  {
    logo: "https://via.placeholder.com/150x150/f39c12/ffffff?text=Rolex",
    id: 10,
    JobTitle: "Business Analyst",
    CompanyName: "Rolex",
    PostedDate: "1 month ago",
    Location: "Geneva, Switzerland",
    JobType: "Full-Time",
    Description:
      "Rolex is seeking a skilled Business Analyst to join our strategic planning team. You will be responsible for gathering and analyzing business requirements, identifying opportunities for improvement, and collaborating with stakeholders to develop innovative solutions.",
  },
  {
    logo: "https://via.placeholder.com/150x150/e74c3c/ffffff?text=Cartier",
    id: 11,
    JobTitle: "Cybersecurity Specialist",
    CompanyName: "Cartier",
    PostedDate: "2 weeks ago",
    Location: "Paris, France",
    JobType: "Full-Time",
    Description:
      "Cartier is seeking a Cybersecurity Specialist to join our IT security team. You will be responsible for implementing and maintaining robust security measures, monitoring for threats, and developing strategies to protect our systems and data from cyber attacks.",
  },
  {
    logo: "https://via.placeholder.com/150x150/2c3e50/ffffff?text=Hermes",
    id: 12,
    JobTitle: "Content Writer",
    CompanyName: "Hermes",
    PostedDate: "1 week ago",
    Location: "Paris, France",
    JobType: "Part-Time",
    Description:
      "Hermes is seeking a talented Content Writer to join our marketing team. You will be responsible for creating engaging, high-quality content for our website, social media channels, and marketing materials, helping to promote our brand and connect with our audience.",
  },
  {
    logo: "https://via.placeholder.com/150x150/7f8c8d/ffffff?text=Louis%20Vuitton",
    id: 13,
    JobTitle: "Project Manager",
    CompanyName: "Louis Vuitton",
    PostedDate: "3 days ago",
    Location: "Paris, France",
    JobType: "Full-Time",
    Description:
      "Louis Vuitton is seeking an experienced Project Manager to lead the delivery of our high-profile initiatives. You will be responsible for managing project timelines, coordinating cross-functional teams, and ensuring the successful completion of our strategic projects.",
  },
  {
    logo: "https://via.placeholder.com/150x150/16a085/ffffff?text=Celine",
    id: 14,
    JobTitle: "Visual Merchandiser",
    CompanyName: "Celine",
    PostedDate: "2 weeks ago",
    Location: "New York, USA",
    JobType: "Part-Time",
    Description:
      "Celine is seeking a talented Visual Merchandiser to join our retail team. You will be responsible for designing and executing visually appealing in-store displays, creating captivating product presentations, and ensuring a seamless and engaging shopping experience for our customers.",
  },
  {
    logo: "https://via.placeholder.com/150x150/9b59b6/ffffff?text=Dior",
    id: 15,
    JobTitle: "Social Media Coordinator",
    CompanyName: "Dior",
    PostedDate: "1 week ago",
    Location: "Paris, France",
    JobType: "Full-Time",
    Description:
      "Dior is seeking a Social Media Coordinator to join our marketing team. You will be responsible for managing our social media channels, creating and curating engaging content, and developing strategies to increase our online brand presence and engagement.",
  },
  {
    logo: "https://via.placeholder.com/150x150/e67e22/ffffff?text=Chanel",
    id: 16,
    JobTitle: "Graphic Designer",
    CompanyName: "Chanel",
    PostedDate: "2 days ago",
    Location: "London, UK",
    JobType: "Full-Time",
    Description:
      "Chanel is seeking a talented Graphic Designer to join our creative team. You will be responsible for designing visually stunning assets, such as advertisements, brochures, and marketing materials, that effectively communicate our brand's identity and values.",
  },
  {
    logo: "https://via.placeholder.com/150x150/2980b9/ffffff?text=Armani",
    id: 17,
    JobTitle: "HR Generalist",
    CompanyName: "Armani",
    PostedDate: "3 weeks ago",
    Location: "Milan, Italy",
    JobType: "Full-Time",
    Description:
      "Armani is seeking an HR Generalist to join our people operations team. You will be responsible for a variety of HR functions, including employee onboarding, performance management, benefits administration, and talent acquisition, ensuring a positive and supportive work environment for our employees.",
  },
  {
    logo: "https://via.placeholder.com/150x150/8e44ad/ffffff?text=Burberry",
    id: 18,
    JobTitle: "Supply Chain Specialist",
    CompanyName: "Burberry",
    PostedDate: "1 month ago",
    Location: "London, UK",
    JobType: "Full-Time",
    Description:
      "Burberry is seeking a Supply Chain Specialist to join our operations team. You will be responsible for optimizing our supply chain processes, managing inventory, and ensuring the timely and efficient delivery of our products to our customers and retail partners.",
  },
  {
    logo: "https://via.placeholder.com/150x150/f39c12/ffffff?text=Rolex",
    id: 19,
    JobTitle: "Customer Service Representative",
    CompanyName: "Rolex",
    PostedDate: "2 weeks ago",
    Location: "Geneva, Switzerland",
    JobType: "Part-Time",
    Description:
      "Rolex is seeking a Customer Service Representative to join our client support team. You will be responsible for providing exceptional service to our customers, responding to inquiries, and resolving any issues or concerns, ensuring a positive brand experience.",
  },
  {
    logo: "https://via.placeholder.com/150x150/e74c3c/ffffff?text=Cartier",
    id: 20,
    JobTitle: "Finance Analyst",
    CompanyName: "Cartier",
    PostedDate: "1 week ago",
    Location: "Paris, France",
    JobType: "Full-Time",
    Description:
      "Cartier is seeking a Finance Analyst to join our financial planning and analysis team. You will be responsible for conducting financial analysis, preparing reports, and supporting strategic decision-making processes, ensuring the company's financial health and growth.",
  },
  {
    logo: "https://via.placeholder.com/150x150/2c3e50/ffffff?text=Hermes",
    id: 21,
    JobTitle: "E-commerce Specialist",
    CompanyName: "Hermes",
    PostedDate: "3 days ago",
    Location: "Paris, France",
    JobType: "Full-Time",
    Description:
      "Hermes is seeking an E-commerce Specialist to join our digital team. You will be responsible for managing and optimizing our online sales channels, implementing effective marketing strategies, and enhancing the overall user experience for our customers.",
  },
];

let vacansyBoxContainer = document.querySelector(".vacansy-box-container");

let startPage = 0;
let endPage = 6;

function showMainVacancies(startPage, endPage) {
  vacansyBoxContainer.innerHTML = jobListings
    .slice(startPage, endPage)
    .map((job) => {
      return `<div class="vacansy-card" onclick="vacancyId(${job.id})">
                <div class="vacansy-header-content">
                <div class="vacansy-logo">
                    <img
                    src=${job.logo}
                    alt=""
                    />
                </div>
                <div class="vacansy-header">
                    <h3>${job.CompanyName}</h3>
                    <h4>${job.PostedDate}</h4>
                </div>
                </div>
                <div class="vacansy-text">
                <p>${job.Description.substring(0, 50) + "..."}</p>
                </div>
                <div class="vacansy-info">
                <p>
                    <i class="fa-solid fa-location-dot"></i>&nbsp;&nbsp;${
                      job.Location.substring(0, 10) + "..."
                    }
                </p>
                <p>${job.JobType}</p>
                </div>
            </div>`;
    })
    .join("");
}

showMainVacancies(startPage, endPage);

const totalVacancy = jobListings.length;
const itemsPerPage = 6;

document.querySelector(".arrow-right").addEventListener("click", () => {
  if (endPage < totalVacancy) {
    startPage += itemsPerPage;
    endPage += itemsPerPage;
    showMainVacancies(startPage, Math.min(endPage, totalVacancy));
    updateButtonVisibility();
  }
});

document.querySelector(".arrow-left").addEventListener("click", () => {
  if (startPage !== 0) {
    startPage -= itemsPerPage;
    endPage -= itemsPerPage;
    showMainVacancies(startPage, endPage);
    updateButtonVisibility();
  }
});

function updateButtonVisibility() {
  document.querySelector(".arrow-left").style.display =
    startPage === 0 ? "none" : "block";
  document.querySelector(".arrow-right").style.display =
    endPage >= totalVacancy ? "none" : "block";
}

updateButtonVisibility();

function showAllVacancies() {
  vacansyBoxContainer.innerHTML = jobListings
    .map((job) => {
      return `<div class="vacansy-card" onclick="vacancyId(${job.id})">
                <div class="vacansy-header-content">
                <div class="vacansy-logo">
                    <img
                    src=${job.logo}
                    alt=""
                    />
                </div>
                <div class="vacansy-header">
                    <h3>${job.CompanyName}</h3>
                    <h4>${job.PostedDate}</h4>
                </div>
                </div>
                <div class="vacansy-text">
                <p>${job.Description.substring(0, 50) + "..."}</p>
                </div>
                <div class="vacansy-info">
                <p>
                    <i class="fa-solid fa-location-dot"></i>&nbsp;&nbsp;${
                      job.Location.substring(0, 10) + "..."
                    }
                </p>
                <p>${job.JobType}</p>
                </div>
            </div>`;
    })
    .join("");
}

let isFirstClick = true;

let showAllVacanciesButton = document.getElementById("show-all-vacansy");

showAllVacanciesButton.addEventListener("click", () => {
  if (isFirstClick) {
    showAllVacancies();
    showAllVacanciesButton.innerHTML = `<i class="fa-solid fa-arrow-left"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Show Less`;
    isFirstClick = false;
  } else {
    showMainVacancies(startPage, endPage);
    isFirstClick = true;
    showAllVacanciesButton.innerHTML = `See all&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <i class="fa-solid fa-arrow-right"></i>`;
  }
});

function vacancyId(id) {
  let job = jobListings.find((job) => job.id === id);
  vacansyBoxContainer.innerHTML = `
<div
  class="vacansy-card job_popup"
  onclick="showMainVacancies(startPage, endPage);"
>
  <div class="vacansy-header-content">
    <div class="vacansy-logo">
      <img src="${job.logo}" alt="" />
    </div>
    <div class="vacansy-header">
      <h3>${job.CompanyName}</h3>
      <h4>${job.PostedDate}</h4>
    </div>
    <div class="close-button">
      <button><i class="fa-solid fa-xmark"></i></button>
    </div>
  </div>
  <div class="vacansy-text">
    <p>${job.Description}</p>
  </div>
  <div class="vacansy-info">
    <p><i class="fa-solid fa-location-dot"></i>&nbsp;&nbsp;${job.Location}</p>
    <p>${job.JobType}</p>
  </div>
</div>`;
}
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
  work: "backend development",
  description: "“One Piece (stylized in all caps) is a Japanese manga series written and illustrated by Eiichiro Oda. One Piece (stylized in all caps) is a Japanese manga series written and illustrated by Eiichiro Oda.One Piece (stylized in all caps) is a Japanese manga series written and illustrated by Eiichiro Oda.One Piece (stylized in all caps) is a Japanese manga series written and illustrated by Eiichiro Oda.",
  rate: "images/group-star.svg",
  status: "active",
},
{
  name: "John Med",
  imageUrl: "images/2.png",
  work: "web desingner",
  description: "“Really Jobfind is the best platform to get any kind of job, aspecially their support was awesome, They have tried to level best to give best support of new candidate.”",
  rate: "images/group-star.svg",
  status: "active",
},
{
  name: "levi Acerman",
  imageUrl: "images/3.png",
  work: "full stack development",
  description: "Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. 'The Advancing Giant') is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities surrounded by three enormous walls that protect them from gigantic man-eating humanoids referred to as Titans; the story follows Eren Yeager, who vows to exterminate the Titans after they bring about the destruction of his hometown and the death of his mother. It was serialized in Kodansha's monthly magazine Bessatsu Shōnen Magazine from September 2009 to April 2021, with its chapters collected in 34 tankōbon volumes.",
  rate: "images/group-star.svg",
  status: "active",
},
{
  name: "Nicola Tesla",
  imageUrl: "images/4.png",
  work: "embedded",
  description: "Nikola Tesla (/ˈtɛslə/;[2] Serbian Cyrillic: Никола Тесла, [nǐkola têsla]; 10 July [O.S. 28 June] 1856 – 7 January 1943) was a Serbian-American[3][4] engineer, futurist, and inventor. He is known for his contributions to the design of the modern alternating current (AC) electricity supply system.[5]",
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
  work: "backend development",
  description: "Bleach (stylized in all caps) is a Japanese manga series written and illustrated by Tite Kubo. It follows the adventures of a teenager Ichigo Kurosaki, who obtains the powers of a Soul Reaper—a death personification similar to a Grim Reaper—from another Soul Reaper, Rukia Kuchiki. His new-found powers allow him to take on the duties of defending humans from evil spirits and guiding departed souls to the afterlife, and set him on journeys to various ghostly realms of existence.",
  rate: "images/group-star.svg",
  status: "active",
},
{
  name: "Demon Slayer",
  imageUrl: "images/7.png",
  work: "mobile development",
  description: "Demon Slayer: Kimetsu no Yaiba – To the Hashira Training (Japanese: 鬼滅の刃 柱稽古編, Hepburn: Kimetsu no Yaiba Hashira Geiko-hen), also known simply as Demon Slayer: To the Hashira Training, is a 2024 Japanese animated dark fantasy action film based on the Swordsmith Village and 'Hashira Training' arcs of the 2016–20 manga series Demon Slayer Kimetsu no Yaiba by Koyoharu Gotouge.",
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