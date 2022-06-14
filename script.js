// hamburger menu
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

const workContainer = document.querySelector('.popup');
const workBox = workContainer.querySelectorAll('.pop');

document.querySelectorAll('.workContent .card').forEach((work) => {
  work.onclick = () => {
    workContainer.style.display = 'flex';
    const name = work.getAttribute('data-name');
    workBox.forEach((preview) => {
      const target = preview.getAttribute('data-target');
      if (name === target) {
        preview.classList.add('active');
      }
    });
  };
});

workBox.forEach((close) => {
  close.querySelector('.fa-times').onclick = () => {
    close.classList.remove('active');
    workContainer.style.display = 'none';
  };
});