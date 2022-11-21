const $accordionBtn = document.querySelectorAll(".circle");
const $verticalLine = document.querySelectorAll(".line1");
const $horizontalLine = document.querySelectorAll(".line2");


for (let i = 0; i < $accordionBtn.length; i++) {
    $accordionBtn[i].addEventListener("click", () => {
        $verticalLine[i].classList.toggle("line1-anim");
        $horizontalLine[i].classList.toggle("line2-anim");
        })
}