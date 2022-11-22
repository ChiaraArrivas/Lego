const $accordionBtn = document.querySelectorAll(".circle");
const $verticalLine = document.querySelectorAll(".line1");
const $horizontalLine = document.querySelectorAll(".line2");
const $accordion = document.querySelectorAll(".accordion");
const $preBtnDesc = document.querySelector(".desc-prev-btn");
const $nextBtnDesc = document.querySelector(".desc-next-btn");
const $descriptionCarousel = document.querySelector(".description-carousel");

for (let i = 0; i < $accordionBtn.length; i++) {
    $accordionBtn[i].addEventListener("click", () => {
        $verticalLine[i].classList.toggle("line1-anim");
        $horizontalLine[i].classList.toggle("line2-anim");
        $accordion[i].classList.toggle("accordion-open");
        })
}


function carousel(previousButton, nextButton, carouselBody, value = 0) {
    carouselBody.style.scrollBehavior = "smooth";

previousButton.addEventListener("click", () => {
    let scrollStep = carouselBody.clientWidth;
    let scrollLength = carouselBody.scrollWidth - scrollStep;
    carouselBody.scrollLeft -= (scrollStep  + value);
    if (Math.floor(carouselBody.scrollLeft) == 0) {
        carouselBody.scrollLeft = scrollLength;
    }
})

    nextButton.addEventListener("click", () => {
        let scrollStep = carouselBody.clientWidth;
        let scrollLength = carouselBody.scrollWidth - scrollStep;
        carouselBody.scrollLeft += (scrollStep + value);
        console.log(carouselBody.scrollLeft, scrollLength)
        if (Math.floor(carouselBody.scrollLeft) == scrollLength) {
            carouselBody.scrollLeft = 0;
        }
    })
    
}

carousel($preBtnDesc, $nextBtnDesc, $descriptionCarousel, 17);
