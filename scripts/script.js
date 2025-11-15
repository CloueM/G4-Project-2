document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const closeBtn = document.querySelector('.menu-close-btn');
    const menu = document.querySelector('.menu');
    const backdrop = document.querySelector('.menu-backdrop');
    const navLinks = document.querySelectorAll('.menu a');

    const openMenu = () => {
        menu.classList.add('active');
        if (backdrop) backdrop.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
        menu.classList.remove('active');
        if (backdrop) backdrop.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    if (hamburger) hamburger.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    if (backdrop) backdrop.addEventListener('click', closeMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 800) {
        }
    });
});