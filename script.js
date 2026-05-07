function bookNow() {
    alert("Booking feature coming soon!");
}

const slides = document.querySelectorAll(".slide");

if (slides.length > 0) {

    let currentSlide = 0;

    function showSlide(index) {

        slides.forEach(slide => {
            slide.classList.remove("active");
        });

        slides[index].classList.add("active");
    }

    setInterval(() => {

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        showSlide(currentSlide);

    }, 3000);
}