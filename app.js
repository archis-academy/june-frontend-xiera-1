const vacancies = [
  {
    id: 1,
    JobTitle:
      "Senior UX/UI Developer with strong Designer skills, responsible for creating visually appealing and user-friendly interfaces, working closely with the development team to ensure seamless integration of design elements",
    CompanyName: "Gucci",
    PostedDate: "5 days ago",
    Location: "Oslo, Norway",
    JobType: "Part-Time",
  },
  {
    id: 2,
    JobTitle:
      "Experienced Frontend Developer with a Focus on Accessibility, tasked with building responsive web applications that adhere to accessibility standards, ensuring all users have a great experience",
    CompanyName: "Apple",
    PostedDate: "2 days ago",
    Location: "Oslo, Norway",
    JobType: "Full-Time",
  },
  {
    id: 3,
    JobTitle:
      "Backend Developer Specializing in Microservices Architecture, responsible for designing and implementing scalable backend services, optimizing performance, and ensuring reliability",
    CompanyName: "Microsoft",
    PostedDate: "1 week ago",
    Location: "Redmond, WA",
    JobType: "Contract",
  },
  {
    id: 4,
    JobTitle:
      "Full Stack Developer with Expertise in Cloud Technologies, responsible for developing and maintaining web applications using cloud services, ensuring high availability and scalability",
    CompanyName: "Google",
    PostedDate: "3 days ago",
    Location: "Oslo, Norway",
    JobType: "Remote",
  },
  {
    id: 5,
    JobTitle:
      "Product Designer with a Strong Background in User Research, focusing on gathering user insights to inform design decisions, creating prototypes, and collaborating with cross-functional teams",
    CompanyName: "Facebook",
    PostedDate: "4 days ago",
    Location: "Menlo Park, CA",
    JobType: "Internship",
  },
  {
    id: 6,
    JobTitle:
      "UX Researcher Focused on Improving User Engagement, conducting user studies and data analysis to understand user behavior, and providing actionable insights to enhance user experience",
    CompanyName: "Amazon",
    PostedDate: "5 days ago",
    Location: "Seattle, WA",
    JobType: "Part-Time",
  },
  {
    id: 7,
    JobTitle:
      "Mobile App Developer Specializing in iOS and Android Platforms, responsible for developing, testing, and maintaining mobile applications, ensuring they meet performance and quality standards",
    CompanyName: "Spotify",
    PostedDate: "1 day ago",
    Location: "Oslo, Norway",
    JobType: "Full-Time",
  },
  {
    id: 8,
    JobTitle:
      "Data Scientist with Expertise in Machine Learning Algorithms, analyzing large datasets, building predictive models, and deriving actionable insights to drive business decisions",
    CompanyName: "Netflix",
    PostedDate: "1 week ago",
    Location: "Los Gatos, CA",
    JobType: "Full-Time",
  },
  {
    id: 9,
    JobTitle:
      "DevOps Engineer with Experience in Continuous Deployment, responsible for automating and streamlining operations and processes, ensuring reliable and efficient delivery of software",
    CompanyName: "Adobe",
    PostedDate: "3 days ago",
    Location: "San Jose, CA",
    JobType: "Contract",
  },
  {
    id: 10,
    JobTitle:
      "Security Analyst Specializing in Threat Detection and Response, monitoring and analyzing security incidents, developing strategies to protect against cyber threats, and ensuring compliance",
    CompanyName: "IBM",
    PostedDate: "5 days ago",
    Location: "Armonk, NY",
    JobType: "Full-Time",
  },
  {
    id: 11,
    JobTitle:
      "Software Engineer with Strong Problem-Solving Skills, designing, developing, and maintaining software applications, collaborating with team members to identify and resolve technical issues",
    CompanyName: "Intel",
    PostedDate: "2 days ago",
    Location: "Santa Clara, CA",
    JobType: "Remote",
  },
  {
    id: 12,
    JobTitle:
      "UI Designer with a Passion for Creating Intuitive Interfaces, crafting user-centric designs that are both aesthetically pleasing and functional, ensuring a seamless user experience",
    CompanyName: "Oracle",
    PostedDate: "4 days ago",
    Location: "Redwood City, CA",
    JobType: "Part-Time",
  },
];

// Vacansies Cards Start

let jobsVacancies = document.querySelector(".jobs-vacancies");

vacancies.map((vacancy) => {
  let vacanciesList = (jobsVacancies.innerHTML += `
       <div class="vacancies-card" onclick="vacancyId(${vacancy.id})">
         <div class="vc-header">
           <div class="vc-header-content">
             <img
               src="./images/featured-jobs/company-logo/nike.svg"
               alt="${vacancy[" "]} Logo"
             />
             <div class="vc-company"> <h3>${vacancy.CompanyName}</h3>
             <p>${vacancy.PostedDate}</p></div>
           </div>
           
         </div>
         <div class="vc-content">
           <p class="content-text">${
             vacancy.JobTitle.substring(0, 90) + "..."
           }</p>
         </div>
         <div class="vc-info">
           <span>${vacancy.Location}</span>
           <span>${vacancy.JobType}</span>
         </div>
       </div>
     `);

  return;
});

// Vacansies Cards End

// Vacansies Popup Start

let vacancyId = (v_id) => {
  let data = vacancies.find((e) => e.id === v_id);
  jobsVacancies.innerHTML = `
       <div class="vacancies-card-popup")">
         <div class="vc-header">
           <div class="vc-header-content">
             <img
               src="./images/featured-jobs/company-logo/nike.svg"
               alt="${data[" "]} Logo"
             />
             <div class="vc-company"> <h3>${data.CompanyName}</h3>
             <p>${data.PostedDate}</p></div>
           </div>
           <div class="popup-close">
             <button class="popup-close-btn" onclick="vacanciesList()">X</button>
           </div>
         </div>
         <div class="vc-content">
           <p class="content-text">${data.JobTitle}</p>
         </div>
         <div class="vc-info">
           <span>${data.Location}</span>
           <span>${data.JobType}</span>
         </div>
       </div>
     `;
};

// Vacansies Popup End

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
