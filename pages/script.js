const slideContainer = document.querySelector('.carousel-slide');
const slides = document.querySelectorAll('.carousel-slide img');
let counter = 1;
const size = slides[0].clientWidth;


const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);


slideContainer.appendChild(firstClone);
slideContainer.insertBefore(lastClone, slides[0]);


slideContainer.style.transform = `translateX(${-size * counter}px)`;

function carousel() {
    counter++;
    slideContainer.style.transition = "transform 0.5s ease-in-out";
    slideContainer.style.transform = `translateX(${-size * counter}px)`;

    slideContainer.addEventListener('transitionend', () => {
        if (counter >= slides.length) {
            slideContainer.style.transition = "none";
            counter = 1;
            slideContainer.style.transform = `translateX(${-size * counter}px)`;
        } else if (counter <= 0) {
            slideContainer.style.transition = "none";
            counter = slides.length - 2;
            slideContainer.style.transform = `translateX(${-size * counter}px)`;
        }
    });
}


setInterval(carousel, 3000);

AOS.init({
    duration: 2000, 
    offset: 100,   
    bucle: true,     
    easing: 'ease-in-out', 
});


