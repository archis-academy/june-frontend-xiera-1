const customers = [{
        name: "Saitama Sensei",
        imageUrl: "assets/testimonial-image/rectangle-4452.png",
        work: "frontend development",
        description: "“Really Jobfind is the best platform to get any kind of job, aspecially their support was awesome, They have tried to level best to give best support of new candidate.”",
        rate: "100",
        status: "active",
    },
    {
        name: "luffy Senpai",
        imageUrl: "assets/testimonial-image/ambassador-852766_1920.jpg",
        work: "frontend development",
        description: "“Really Jobfind is the best platform to get any kind of job, aspecially their support was awesome, They have tried to level best to give best support of new candidate.”",
        rate: "70",
        status: "active",
    },
    {
        name: "John Med",
        imageUrl: "assets/testimonial-image/eye-2340806_1920.jpg",
        work: "frontend development",
        description: "“Really Jobfind is the best platform to get any kind of job, aspecially their support was awesome, They have tried to level best to give best support of new candidate.”",
        rate: "100",
        status: "active",
    },
    {
        name: "levi Acerman",
        imageUrl: "assets/testimonial-image/grimace-388987_1920.jpg",
        work: "frontend development",
        description: "“Really Jobfind is the best platform to get any kind of job, aspecially their support was awesome, They have tried to level best to give best support of new candidate.”",
        rate: "100",
        status: "active",
    },
    {
        name: "Nicola Tesla",
        imageUrl: "assets/testimonial-image/human-3782189_1920.jpg",
        work: "frontend development",
        description: "“Really Jobfind is the best platform to get any kind of job, aspecially their support was awesome, They have tried to level best to give best support of new candidate.”",
        rate: "100",
        status: "active",
    },
    {
        name: "John Wick",
        imageUrl: "assets/testimonial-image/istockphoto-1433127186-1024x1024.jpg",
        work: "frontend development",
        description: "“Really Jobfind is the best platform to get any kind of job, aspecially their support was awesome, They have tried to level best to give best support of new candidate.”",
        rate: "100",
        status: "active",
    },
    {
        name: "Bleach",
        imageUrl: "assets/testimonial-image/man-6800728_1920.jpg",
        work: "frontend development",
        description: "“Really Jobfind is the best platform to get any kind of job, aspecially their support was awesome, They have tried to level best to give best support of new candidate.”",
        rate: "100",
        status: "active",
    },
    {
        name: "Demon Slayer",
        imageUrl: "assets/testimonial-image/skull-1867707_1920.jpg",
        work: "frontend development",
        description: "“Really Jobfind is the best platform to get any kind of job, aspecially their support was awesome, They have tried to level best to give best support of new candidate.”",
        rate: "100",
        status: "active",
    },
  

]


let currentIndex = 0;

const root = document.querySelector("#root");

function renderCustomer(index) {
    const customer = customers[index];
    return `
        <div class="testimonial">
            <div class="testimonial-header">
                <h2 class="testimonial-header-testimonial-title">TESTIMONIALS</h2>
                <h3 class="testimonial-header-customer-title">What our customers say</h3>
            </div>
            <div class="testimonial-content">
                <div class="testimonial-content-customer-img">
                    <img class="testimonial-content-customer-img-customer" src="${customer.imageUrl}" alt="${customer.name}" />
                </div>
                <div class="testimonial-content-customer-info">
                    <div class="testimonial-content-customer-info-header">
                        <h2>${customer.name}</h2>
                        <p>${customer.work}</p>
                    </div>
                    <div class="testimonial-content-customer-info-details-title">
                        <p class="testimonial-content-customer-info-details">${customer.description}</p>
                        <img class="testimonial-content-customer-info-rate" src="assets/testimonial-image/Star.svg" alt="" />
                        <img class="testimonial-content-customer-info-rate" src="assets/testimonial-image/Star.svg" alt="" />
                        <img class="testimonial-content-customer-info-rate" src="assets/testimonial-image/Star.svg" alt="" />
                        <img class="testimonial-content-customer-info-rate" src="assets/testimonial-image/Star.svg" alt="" />
                        <img class="testimonial-content-customer-info-rate" src="assets/testimonial-image/Star.svg" alt="" />
                    </div>
                    <h3>Behance</h3>
                    <div class="testimonial-content-customer-info-arrow">
                        <i class="fa-solid fa-arrow-left" id="prev"></i>
                        <i class="fa-solid fa-arrow-right" id="next"></i>
                    </div>
                </div>
            </div>
        </div>
    `;
}




function updateCarousel() {
    const testimonialElement = root.querySelector('.testimonial-content'); 
   
    if (testimonialElement) {
        testimonialElement.classList.add('fade-out');
        testimonialElement.addEventListener('transitionend', () => {
            testimonialElement.remove();
            renderNewCustomer();
        });
    } else {
        renderNewCustomer();
    }
}

function renderNewCustomer() {
    root.innerHTML = renderCustomer(currentIndex);
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex -= 1;
            updateCarousel();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < customers.length - 1) {
            currentIndex += 1;
            updateCarousel();
        }
    });

    if (currentIndex === 0) {
        prevButton.classList.add('arrow-disabled');
    } else {
        prevButton.classList.remove('arrow-disabled');
    }
    
    if (currentIndex === customers.length - 1) {
        nextButton.classList.add('arrow-disabled');
    } else {
        nextButton.classList.remove('arrow-disabled');
    }
}

updateCarousel();