//MENU MOBILE
const menuMobile = document.querySelector(".header__wrapper");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener('click', () => {
    menuMobile.classList.toggle("header__wrapper_active");
    hamburger.classList.toggle("close");
});

//SCROLLUP
const scrollUp = document.querySelector(".scrollup");
let body = document.querySelector("body");
let heightWindow = document.documentElement.clientHeight;

console.log(window.scrollHeight);

window.addEventListener('scroll', () => {
    if (scrollY >= heightWindow) {
        scrollUp.classList.remove("hidden");
        scrollUp.classList.add("visible");
    } else {
        scrollUp.classList.remove("visible");
        scrollUp.classList.add("hidden");
    }
});




scrollUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});



//TABS
const tabs = document.querySelectorAll(".collection__tab");
const contentsTab = document.querySelectorAll(".collection__content");

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        let tabId = tab.getAttribute("data-tab");
        let contentTab = document.querySelector(tabId);

        tabs.forEach(tab => {
            tab.classList.remove("collection__tab_active");
        });

        contentsTab.forEach(content => {
            content.classList.remove("collection__content_active");
        });

        tab.classList.add("collection__tab_active");
        contentTab.classList.add("collection__content_active");
    });
});

//SLIDER MOBILE
const itemsSlider = document.querySelectorAll(".slider__item");
const lineSlider = document.querySelector(".slider__line");
const imgSlider = document.querySelectorAll(".slider__image")
let countSlider = 0;
let widthSlider;

if (document.documentElement.clientWidth < 768) {

    window.addEventListener('resize', init);
    init();

    document.querySelector(".slider__prev").addEventListener('click', () => {
        countSlider--;
        if (countSlider < 0) {
            countSlider = imgSlider.length -1;
        }
        nextSlider();
    });

    document.querySelector(".slider__next").addEventListener('click', () => {
        countSlider++;
        if (countSlider >= imgSlider.length) {
            countSlider = 0;
        }
        nextSlider();
    });
}

function init() {
    widthSlider = document.querySelector(".slider").offsetWidth;
    lineSlider.style = `width: ${widthSlider * imgSlider.length}px`;
    imgSlider.forEach(img => {
        img.style = `width: ${widthSlider}px; height: auto`;
    });
    nextSlider();
}

function nextSlider() {
    lineSlider.style = `left: -${countSlider * widthSlider}px; width: ${widthSlider * imgSlider.length}px`;
}



