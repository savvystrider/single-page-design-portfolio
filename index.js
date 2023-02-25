const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const slideImg = document.getElementById("slide-img");

const images = ["image-slide-1.jpg", "image-slide-2.jpg", "image-slide-3.jpg", "image-slide-4.jpg", "image-slide-5.jpg"];

let imageIndex = 0;

leftArrow.addEventListener("click", showPreviousImage);
rightArrow.addEventListener("click", showNextImage);

function showPreviousImage() {
    imageIndex = (imageIndex - 1 + images.length) % images.length;
    slideImg.src = `./images/${images[imageIndex]}`;
};

function showNextImage() {
    imageIndex = (imageIndex + 1) % images.length;
    slideImg.src = `./images/${images[imageIndex]}`;
}

document.querySelectorAll(".consult-btn").forEach((button) => {
    button.addEventListener("click", function() {
        alert("Booked!");
    })
})