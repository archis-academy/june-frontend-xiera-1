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
    }, 300);
  } else {
    mobilMenu.classList.add("active");
    mobilMenu.style.visibilty = "visible";
  }

  mobilMenu.classList.contains("active")
    ? (closeIcon.style.display = "block")
    : (closeIcon.style.display = "none");

  mobilMenu.classList.contains("active")
    ? (hamburgerIcon.style.display = "none")
    : (hamburgerIcon.style.display = "block");
};
// Mobil menu visibilty changer function start

// Search functions start

const DUMMY_DATA = [
  {
    jobTitle: "Remote JAVA Developer",
    company: "ABC Company",
    location: "Istanbul",
    remotely: "remotely",
  },
  {
    jobTitle: "Senior Frontend Developer",
    company: "XYZ Tech",
    location: "Ankara",
    remotely: "office",
  },
  {
    jobTitle: "Data Scientist",
    company: "DataInsights",
    location: "Izmir",
    remotely: "office",
  },
  {
    jobTitle: "DevOps Engineer",
    company: "CloudWorks",
    location: "Bursa",
    remotely: "hibrit",
  },
  {
    jobTitle: "Full Stack Developer",
    company: "Web Innovations",
    location: "Antalya",
    remotely: "remotely",
  },
  {
    jobTitle: "Mobile App Developer",
    company: "AppMasters",
    location: "Konya",
    remotely: "hibrit",
  },
  {
    jobTitle: "Backend Developer",
    company: "CodeCrafters",
    location: "Gaziantep",
    remotely: "remotely",
  },
  {
    jobTitle: "UI/UX Designer",
    company: "Creative Minds",
    location: "Adana",
    remotely: "office",
  },
  {
    jobTitle: "Software Engineer",
    company: "Innovatech",
    location: "Samsun",
    remotely: "hibrit",
  },
  {
    jobTitle: "Cybersecurity Analyst",
    company: "SecureNet",
    location: "Kayseri",
    remotely: "remotely",
  },
  {
    jobTitle: "Machine Learning Engineer",
    company: "AI Solutions",
    location: "Trabzon",
    remotely: "hibrit",
  },
];

const titleSearh = document.querySelector(".hero-title-search");
const locationSearh = document.querySelector(".hero-location-search");
const jobType = document.querySelector("#hero-job-type");
const heroModalContainer = document.querySelector("#hero-modal-container");
const heroModalBody = document.querySelector("#hero-modal-table-body");

const searchSubmitHandler = () => {
  const searchTitle = titleSearh.value.trim().toLowerCase();
  const searchLocation = locationSearh.value.trim().toLowerCase();
  const searchJobType = jobType.value.trim().toLowerCase();

  const filteredJob = DUMMY_DATA.filter((job) => {
    if (searchTitle && searchJobType === "default") {
      //  Searching for only title or keyword
      return job.jobTitle.toLowerCase().includes(searchTitle.toLowerCase());
    } else if (searchTitle && searchJobType !== "default") {
      //  Searching for title or keyword & job type
      return (
        job.jobTitle.toLowerCase().includes(searchTitle.toLowerCase()) &&
        job.remotely == searchJobType
      );
    } else if (searchLocation && searchJobType === "default") {
      //  Searching for only location
      return job.location.toLowerCase() === searchLocation.toLowerCase();
    } else if (searchLocation && searchJobType !== "default") {
      //  Searching for location & job type
      return (
        job.location.toLowerCase() === searchLocation.toLowerCase() &&
        job.remotely == searchJobType
      );
    } else if (!searchTitle && !searchLocation && searchJobType !== "default") {
      //  Searching for only job type
      return job.remotely === searchJobType;
    }
  });

  heroModalBody.innerHTML = "";

  if (filteredJob.length === 0) {
    heroModalBody.innerHTML = `<tr><td colspan="4">No job found</td></tr>`;
  } else {
    filteredJob.forEach((job) => {
      const row = document.createElement("tr");

      console.log(job);

      for (const key in job) {
        const value = document.createElement("td");
        value.textContent = job[key];
        row.appendChild(value);
      }

      heroModalBody.appendChild(row);
    });
  }

  heroModalContainer.style.display = "flex";
};

const heroCloseIcon = document.querySelector("#hero-modal-close-icon");
heroCloseIcon.addEventListener("click", () => {
  heroModalContainer.style.display = "none";
});

// Search functions end
