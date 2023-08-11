// Toggle mobile menu
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const nav = document.querySelector('nav ul');

mobileMenuButton.addEventListener('click', () => {
    nav.classList.toggle('show-mobile-menu');
});
