let swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
});

const incrementButton = document.getElementById("counter-el");
let ilksayi = 0;

function increment() {

  ilksayi += 1;
  console.log("sayı arttırılıyor")
  incrementButton.innerHTML = 398 + ilksayi;
  }
