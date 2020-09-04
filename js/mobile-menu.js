// Mobile menu
const domElem = document.querySelector('.wrapper');

// Toggle buttons
const visibleButton = document.querySelector('.mobile-header__button');
const unvisibleButton = document.querySelector('.mobile-menu__close');

// Toggle func
function toggleMobileMenu() {
    domElem.classList.toggle('mobile-menu-active');
}


// Event listeners
visibleButton.addEventListener('click', toggleMobileMenu);
unvisibleButton.addEventListener('click', toggleMobileMenu);