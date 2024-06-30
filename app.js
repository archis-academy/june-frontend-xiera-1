const vacancies = [
  {
    id: 1,
    JobTitle: "Senior UX/UI Developer with strong Designer skills",
    CompanyName: "Gucci",
    PostedDate: "5 days ago",
    Location: "Oslo, Norway",
    JobType: "Part-Time",
  },
  {
    id: 2,
    JobTitle: "Experienced Frontend Developer with a Focus on Accessibility",
    CompanyName: "Apple",
    PostedDate: "2 days ago",
    Location: "Oslo, Norway",
    JobType: "Full-Time",
  },
  {
    id: 3,
    JobTitle: "Backend Developer Specializing in Microservices Architecture",
    CompanyName: "Microsoft",
    PostedDate: "1 week ago",
    Location: "Redmond, WA",
    JobType: "Contract",
  },
  {
    id: 4,
    JobTitle: "Full Stack Developer with Expertise in Cloud Technologies",
    CompanyName: "Google",
    PostedDate: "3 days ago",
    Location: "Oslo, Norway",
    JobType: "Remote",
  },
  {
    id: 5,
    JobTitle: "Product Designer with a Strong Background in User Research",
    CompanyName: "Facebook",
    PostedDate: "4 days ago",
    Location: "Menlo Park, CA",
    JobType: "Internship",
  },
  {
    id: 6,
    JobTitle: "UX Researcher Focused on Improving User Engagement",
    CompanyName: "Amazon",
    PostedDate: "5 days ago",
    Location: "Seattle, WA",
    JobType: "Part-Time",
  },
  {
    id: 7,
    JobTitle: "Mobile App Developer Specializing in iOS and Android Platforms",
    CompanyName: "Spotify",
    PostedDate: "1 day ago",
    Location: "Oslo, Norway",
    JobType: "Full-Time",
  },
  {
    id: 8,
    JobTitle: "Data Scientist with Expertise in Machine Learning Algorithms",
    CompanyName: "Netflix",
    PostedDate: "1 week ago",
    Location: "Los Gatos, CA",
    JobType: "Full-Time",
  },
  {
    id: 9,
    JobTitle: "DevOps Engineer with Experience in Continuous Deployment",
    CompanyName: "Adobe",
    PostedDate: "3 days ago",
    Location: "San Jose, CA",
    JobType: "Contract",
  },
  {
    id: 10,
    JobTitle: "Security Analyst Specializing in Threat Detection and Response",
    CompanyName: "IBM",
    PostedDate: "5 days ago",
    Location: "Armonk, NY",
    JobType: "Full-Time",
  },
  {
    id: 11,
    JobTitle: "Software Engineer with Strong Problem-Solving Skills",
    CompanyName: "Intel",
    PostedDate: "2 days ago",
    Location: "Santa Clara, CA",
    JobType: "Remote",
  },
  {
    id: 12,
    JobTitle: "UI Designer with a Passion for Creating Intuitive Interfaces",
    CompanyName: "Oracle",
    PostedDate: "4 days ago",
    Location: "Redwood City, CA",
    JobType: "Part-Time",
  },
];

// Vacansies Cards Start

let jobsVacancies = document.querySelector(".jobs-vacancies");

vacancies.map((vacancy) => {
  jobsVacancies.innerHTML += `
       <div class="vacancies-card">
         <div class="vc-header">
           <div class="vc-header-content">
             <img
               src="./images/featured-jobs/company-logo/nike.svg"
               alt="${vacancy[" "]} Logo"
             />
             <div class="vc-company"> <h3>${vacancy["CompanyName"]}</h3>
             <p>${vacancy["PostedDate"]}</p></div>
           </div>
           <div class="popup-close">
             <button class="popup-close-btn">X</button>
           </div>
         </div>
         <div class="vc-content">
           <p>${vacancy["JobTitle"]}</p>
         </div>
         <div class="vc-info">
           <span>${vacancy["Location"]}</span>
           <span>${vacancy["JobType"]}</span>
         </div>
       </div>
     `;
});

// Vacansies Cards End

const cards = document.querySelectorAll(".vacancies-card");
const vacanciesModal = document.querySelector("#jobs-vacancies-modal");

cards.forEach((card, index) => {
  card.addEventListener("click", (e) => {
    vacanciesModal.innerHTML = `<div class="vacancies-card">
         <div class="vc-header">
           <div class="vc-header-content">
             <img
               src="./images/featured-jobs/company-logo/nike.svg"
               alt="${vacancies[index]} Logo"
             />
             <div class="vc-company"> <h3>${vacancies[index]}</h3>
             <p>${vacancies[index]}</p></div>
           </div>
           <div class="popup-close">
             <button class="popup-close-btn">X</button>
           </div>
         </div>
         <div class="vc-content">
           <p>${vacancies[index]}</p>
         </div>
         <div class="vc-info">
           <span>${vacancies[index]}</span>
           <span>${vacancies[index]}</span>
         </div>
       </div>`;
  });
});

// See All Button Start

let seeAllBtn = document.querySelector("#jobs-see-all-btn");
let currentVacancy = 6;

seeAllBtn.onclick = () => {
  let nextVacancies = [
    ...document.querySelectorAll(".jobs-vacancies .vacancies-card"),
  ];
  for (var i = currentVacancy; i < currentVacancy + 6; i++) {
    nextVacancies[i].style.display = "inline-block";
  }
  currentVacancy += 6;

  if (currentVacancy >= nextVacancies.length) {
    seeAllBtn.style.display = "none";
  }
};

// See All Button End
