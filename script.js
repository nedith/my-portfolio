//hamburger menu
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
hamburger.classList.toggle('active');
mobileMenu.classList.toggle('active');
});

document.querySelectorAll('.menu-item').forEach((n) => n.addEventListener('click', () => {
hamburger.classList.remove('active');
mobileMenu.classList.remove('active');   
}));
    