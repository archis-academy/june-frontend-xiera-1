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
  yearly: [{
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
       <button class="cta-button-blue">Get Started Now</button>
     </div>
   </div>`
    }).join("")
  }
  else {
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
       <button class="cta-button-blue">Get Started Now</button>
     </div>
   </div>`
    }).join("")

  }
  swiper.update();
}
changeSwiperContent();



