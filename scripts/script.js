/* Scripts */
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
let memuOpen = false;

hamburger.addEventListener('click', () => {
    if (!memuOpen) {
        navLinks.style.display = 'block';
        menuOpen = true;
    }
    else {
        navLinks.style.display = 'none';
        menuOpen = false;
    }
});