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
