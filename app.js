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

const packagesProduct = [
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
  }

  ],
  Monthly: [
    {
      id: 1,
      title: "basic",
      packageType: "monthly",
      price: "17.99"
    },{
      id: 2,
      title: "beginner",
      packageType: "monthly",
      price: "25.99"
    }
  ]
}
]
document.querySelector(".montly").addEventListener("click" , (event) => {
  console.log()
getPackagesType(event.target.innerHTML)

});


const getPackagesType = (value) => {
  console.log(value)
  const uptadePackage = packagesProduct.Object(keys).filter((item) => {
    if(item.Monthly === value){
      return item.Monthly
    }
    return item.Monthly
  } )
console.log(uptadePackage)
}

const getPackage = () => {

  document.querySelector(".swiper-wrapper").innerHTML = packagesProduct.map((package) => {

    return 
  })

}