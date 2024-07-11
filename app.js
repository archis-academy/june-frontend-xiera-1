var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 50,
    depth: 100,
    modifier: 0.5,
    slideShadows: true,

  },

  pagination: {
    el: ".swiper-pagination",

  },
});

const packagesProduct =
{
  yearly: [{
    id: 1,
    title: "Premium",
    packageType: "Yearly Package",
    price: "$97.99"
  },
  {
    id: 2,
    title: "Basic",
    packageType: "Yearly Package",
    price: "$37.99"
  },
  {
    id: 3,
    title: "Beginner",
    packageType: "Yearly Package",
    price: "$57.99"
  }]
  ,
  monthly: [
    {
      id: 1,
      title: "basic",
      packageType: "Monthly Package",
      price: "17.99"
    }, {
      id: 2,
      title: "beginner",
      packageType: "Monthly Package",
      price: "25.99"
    }
  ]
}

const swiperWrapper = document.querySelector("#swiper-items")

const changeSwiperContent = (type) => {
console.log("çalıştı");
if(type==="monthly"){
  swiperWrapper.innerHTML = packagesProduct.monthly.map((item) => { 
    `<div class="swiper-slide">
     <div class="card">
       <h2 class="beginer">${item.title}</h2>
       <p>${item.packageType} </p>
       <span class="dollar">$<sup>${item.price}</sup></span>
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
else{
  swiperWrapper.innerHTML = packagesProduct.yearly.map((item) => { 
    `<div class="swiper-slide">
     <div class="card">
       <h2 class="beginer">${item.title}</h2>
       <p>${item.packageType} </p>
       <span class="dollar">$<sup>${item.price}</sup></span>
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

 

}


