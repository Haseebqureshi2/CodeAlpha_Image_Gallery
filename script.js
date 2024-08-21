const images = document.querySelectorAll('.gallery-image');
let currentIndex = 0;

document.getElementById('prev-btn').addEventListener('click', () => {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    images[currentIndex].classList.add('active');
});

document.getElementById('next-btn').addEventListener('click', () => {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    images[currentIndex].classList.add('active');
});
