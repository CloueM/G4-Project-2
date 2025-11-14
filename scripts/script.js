const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.menu');
let menuOpen = false;

hamburger.addEventListener('click', () => {
    if (!menuOpen) {
        navMenu.classList.add('active');
        hamburger.classList.add('active'); // Add this to animate the X
        menuOpen = true;
    }
    else {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        menuOpen = false;
    }
});