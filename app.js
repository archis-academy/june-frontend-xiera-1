const vacancies = [
  {
    JobTitle: "Senior UX/UI Developer with strong Designer skills",
    CompanyName: "Gucci",
    PostedDate: "5 days ago",
    Location: "Oslo, Norway",
    JobType: "Part-Time",
  },
  {
    JobTitle: "Experienced Frontend Developer with a Focus on Accessibility",
    CompanyName: "Apple",
    PostedDate: "2 days ago",
    Location: "Oslo, Norway",
    JobType: "Full-Time",
  },
  {
    JobTitle: "Backend Developer Specializing in Microservices Architecture",
    CompanyName: "Microsoft",
    PostedDate: "1 week ago",
    Location: "Redmond, WA",
    JobType: "Contract",
  },
  {
    JobTitle: "Full Stack Developer with Expertise in Cloud Technologies",
    CompanyName: "Google",
    PostedDate: "3 days ago",
    Location: "Oslo, Norway",
    JobType: "Remote",
  },
  {
    JobTitle: "Product Designer with a Strong Background in User Research",
    CompanyName: "Facebook",
    PostedDate: "4 days ago",
    Location: "Menlo Park, CA",
    JobType: "Internship",
  },
  {
    JobTitle: "UX Researcher Focused on Improving User Engagement",
    CompanyName: "Amazon",
    PostedDate: "5 days ago",
    Location: "Seattle, WA",
    JobType: "Part-Time",
  },
  {
    JobTitle: "Mobile App Developer Specializing in iOS and Android Platforms",
    CompanyName: "Spotify",
    PostedDate: "1 day ago",
    Location: "Oslo, Norway",
    JobType: "Full-Time",
  },
  {
    JobTitle: "Data Scientist with Expertise in Machine Learning Algorithms",
    CompanyName: "Netflix",
    PostedDate: "1 week ago",
    Location: "Los Gatos, CA",
    JobType: "Full-Time",
  },
  {
    JobTitle: "DevOps Engineer with Experience in Continuous Deployment",
    CompanyName: "Adobe",
    PostedDate: "3 days ago",
    Location: "San Jose, CA",
    JobType: "Contract",
  },
  {
    JobTitle: "Security Analyst Specializing in Threat Detection and Response",
    CompanyName: "IBM",
    PostedDate: "5 days ago",
    Location: "Armonk, NY",
    JobType: "Full-Time",
  },
  {
    JobTitle: "Software Engineer with Strong Problem-Solving Skills",
    CompanyName: "Intel",
    PostedDate: "2 days ago",
    Location: "Santa Clara, CA",
    JobType: "Remote",
  },
  {
    JobTitle: "UI Designer with a Passion for Creating Intuitive Interfaces",
    CompanyName: "Oracle",
    PostedDate: "4 days ago",
    Location: "Redwood City, CA",
    JobType: "Part-Time",
  },
];

let jobsVacancies = document.querySelector(".jobs-vacancies");
let rightArrow = document.querySelector("#right-arrow");
let leftArrow = document.querySelector("#left-arrow");

let currentIndex = 0;
const itemsPerPage = 6;

function loadVacancies(startIndex, endIndex) {
  jobsVacancies.innerHTML = "";
  for (let i = startIndex; i < endIndex && i < vacancies.length; i++) {
    jobsVacancies.innerHTML += `
      <div class="vacancies-card">
        <div class="vc-header">
          <img
            src="./images/featured-jobs/company-logo/nike.svg"
            alt="${vacancies[i].CompanyName} Logo"
            />
          <h3>${vacancies[i].CompanyName}</h3>
          <span>${vacancies[i].PostedDate}</span>
        </div>
        <div class="vc-content">
          <p>${vacancies[i].JobTitle}</p>
        </div>
        <div class="vc-info">
          <span>${vacancies[i].Location}</span>
          <span>${vacancies[i].JobType}</span>
        </div>
      </div>
    `;
  }
}

loadVacancies(0, itemsPerPage);

rightArrow.addEventListener("click", () => {
  currentIndex += itemsPerPage;
  if (currentIndex >= vacancies.length) {
    currentIndex = 0; //
  }
  loadVacancies(currentIndex, currentIndex + itemsPerPage);
});

leftArrow.addEventListener("click", () => {
  currentIndex -= itemsPerPage;
  if (currentIndex < 0) {
    currentIndex = Math.max(0, vacancies.length - itemsPerPage);
  }
  loadVacancies(currentIndex, currentIndex + itemsPerPage);
});
