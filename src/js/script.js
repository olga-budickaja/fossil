//MENU MOBILE
const menuMobile = document.querySelector(".header__wrapper");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener('click', () => {
    menuMobile.classList.toggle("header__wrapper_active");
    hamburger.classList.toggle("close");
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



