const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button
            .closest("[data-carousel]")
            .querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})




// currentSlideID = 1;
//
// sliderElement = document.getElementById('slider');
// totalSlides = 3;
//
// function next() {
//     if (totalSlides < currentSlideID) {
//         currentSlideID++;
//         showSlide();
//     }
// }
//
// function prev() {
//     if (currentSlideID > 1) {
//         currentSlideID--;
//         showSlide();
//     }
// }
//
// function showSlide() {
//     slides = document.getElementById('slider').getElementsByTagName('li')
//     for (let index = 0; index < 3; index++) {
//         const element = slides[index];
//         if (currentSlideID === index + 1) {
//             element.classList.remove('hidden')
//         }else {
//             element.classList.add('hidden')
//         }
//     }
// }