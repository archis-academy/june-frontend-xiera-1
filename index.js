
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

// Sayaç düğmesi ve sayaç değişkeni
const incrementButton = document.getElementById("counter-el");
let ilksayi = 0;

function increment() {
    ilksayi += 1;
    console.log("sayı arttırılıyor");
    incrementButton.innerHTML = 398 + ilksayi;
}

// Swiper yapılandırması (tekrar)
const swiper2 = new Swiper('.mySwiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

function changeSwiperContent(packageType) {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    swiperWrapper.innerHTML = ''; // Mevcut slaytları temizle

    if (packageType === 'monthly') {
        swiperWrapper.innerHTML = `
            <div class="swiper-slide">
                <div class="card">
                    <h2 class="beginer">BEGINNER</h2>
                    <p>Monthly Package</p>
                    <span class="dollar">$17<sup>.99</sup></span>
                    <ul class="features">
                        <li>Anonymous User</li>
                        <li>Bot Detection</li>
                        <li>Registration</li>
                        <li>Directory</li>
                    </ul>
                    <button class="cta-button-blue">Get Started Now</button>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="card">
                    <h2 class="beginer">BASIC</h2>
                    <p>Monthly Package</p>
                    <span class="dollar">$27<sup>.99</sup></span>
                    <ul class="features">
                        <li>Anonymous User</li>
                        <li>Bot Detection</li>
                        <li>Registration</li>
                        <li>Directory</li>
                    </ul>
                    <button class="cta-button-purple">Get Started Now</button>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="card">
                    <h2 class="beginer">PREMIUM</h2>
                    <p>Monthly Package</p>
                    <span class="dollar">$37<sup>.99</sup></span>
                    <ul class="features">
                        <li>Anonymous User</li>
                        <li>Bot Detection</li>
                        <li>Registration</li>
                        <li>Directory</li>
                    </ul>
                    <button class="cta-button-org">Get Started Now</button>
                </div>
            </div>
        `;
    } else if (packageType === 'yearly') {
        swiperWrapper.innerHTML = `
            <div class="swiper-slide">
                <div class="card">
                    <h2 class="beginer">BEGINNER</h2>
                    <p>Yearly Package</p>
                    <span class="dollar">$77<sup>.99</sup></span>
                    <ul class="features">
                        <li>Anonymous User</li>
                        <li>Bot Detection</li>
                        <li>Registration</li>
                        <li>Directory</li>
                    </ul>
                    <button class="cta-button-blue">Get Started Now</button>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="card">
                    <h2 class="beginer">BASIC</h2>
                    <p>Yearly Package</p>
                    <span class="dollar">$87<sup>.99</sup></span>
                    <ul class="features">
                        <li>Anonymous User</li>
                        <li>Bot Detection</li>
                        <li>Registration</li>
                        <li>Directory</li>
                    </ul>
                    <button class="cta-button-purple">Get Started Now</button>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="card">
                    <h2 class="beginer">PREMIUM</h2>
                    <p>Yearly Package</p>
                    <span class="dollar">$97<sup>.99</sup></span>
                    <ul class="features">
                        <li>Anonymous User</li>
                        <li>Bot Detection</li>
                        <li>Registration</li>
                        <li>Directory</li>
                    </ul>
                    <button class="cta-button-org">Get Started Now</button>
                </div>
            </div>
        `;
    }

    swiper.update(); // Swiper'ı güncelle
}