const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")
const scrollableNav = document.querySelector(".mySlides")
const pre = document.querySelector(".pre-test")
const next = document.querySelector(".next-test")
const scrollDivTest = document.querySelector(".random-flex")

function carousel(previousButton, nextButton, carouselBody) {
    carouselBody.style.scrollBehavior = "smooth";

previousButton.addEventListener("click", () => {
    let scrollStep = carouselBody.clientWidth;
    let scrollLength = carouselBody.scrollWidth - scrollStep;
    carouselBody.scrollLeft -= scrollStep;
    if (Math.floor(carouselBody.scrollLeft) == 0) {
        carouselBody.scrollLeft = scrollLength;
    }
})

    nextButton.addEventListener("click", () => {
        let scrollStep = carouselBody.clientWidth;
        let scrollLength = carouselBody.scrollWidth - scrollStep;
        carouselBody.scrollLeft += scrollStep;
        if (Math.floor(carouselBody.scrollLeft) == scrollLength) {
            carouselBody.scrollLeft = 0;
        }
    })
    
}
carousel(prevBtn, nextBtn, scrollableNav);
carousel(pre, next, scrollDivTest);
