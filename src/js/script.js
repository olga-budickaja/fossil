//MENU MOBILE
const menuMobile = document.querySelector(".header__wrapper");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener('click', () => {
    menuMobile.classList.toggle("header__wrapper_active");
    hamburger.classList.toggle("close");
});
