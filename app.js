const mobilMenuIcon = document.querySelector("#hero-mobil-menu-icon");
const mobilMenu = document.querySelector("#hero-mobil-menu");
const hamburgerIcon = document.querySelector("#hero-hamburger-icon");
const closeIcon = document.querySelector("#hero-close-icon");
const heroWorkingModel = document.querySelector("#hero-job-type");

// #Get all jops with api start

const getAllJobs = async () => {
  const response = await fetch(
    "https://667681ab145714a1bd71f20d.mockapi.io/api/fake-data/jobs"
  );

  const fetchedData = await response.json();

  return fetchedData;
};
// #Get all jops with api end

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
  console.log(wmodels);

  wmodels.forEach((item) => {
    const optionElement = document.createElement("option");
    optionElement.value = item.toLowerCase();
    optionElement.textContent = item;
    heroWorkingModel.appendChild(optionElement);
  });
});

// #Get working model end

// =>Mobil menu visibilty switcher function start
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
// =>Mobil menu visibilty changer function start

// !Search functions start

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

// =>Searching in all jobs start
const searchSubmitHandler = async () => {
  const allJobs = await getAllJobs();

  const searchTitle = titleSearh.value.trim().toLowerCase();
  const searchLocation = locationSearh.value.trim().toLowerCase();
  const searchJobType = jobType.value;

  const filteredJob = await allJobs.filter((job) => {
    if (searchTitle && searchJobType === "default") {
      //  *Searching for only title or keyword
      return job.jobTitle.toLowerCase().includes(searchTitle.toLowerCase());
    } else if (searchTitle && searchJobType !== "default") {
      //  *Searching for title or keyword & job type
      return (
        job.jobTitle.toLowerCase().includes(searchTitle.toLowerCase()) &&
        job.working_model.toLowerCase() == searchJobType
      );
    } else if (searchLocation && searchJobType === "default") {
      //  *Searching for only location
      return job.location.toLowerCase() === searchLocation.toLowerCase();
    } else if (searchLocation && searchJobType !== "default") {
      //  *Searching for location & job type
      return (
        job.location.toLowerCase() === searchLocation.toLowerCase() &&
        job.working_model.toLowerCase() == searchJobType
      );
    } else if (!searchTitle && !searchLocation && searchJobType !== "default") {
      //  *Searching for only job type
      return job.working_model.toLowerCase() === searchJobType;
    }
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

// =>Searchin in all jobs end

// =>Closing function to the modal start
const heroCloseIcon = document.querySelector("#hero-modal-close-icon");
heroCloseIcon.addEventListener("click", () => {
  heroModalContainer.style.display = "none";
});
// =>Closing function to the modal end

// !Search functions end
