document.addEventListener("DOMContentLoaded", function () {

    const menuOpenButton = document.querySelector('button[command="show-modal"][commandfor="mobile-menu"]');
    const menuCloseButton = document.querySelector('button[command="close"][commandfor="mobile-menu"]');
    const mobileMenu = document.getElementById("mobile-menu");

    menuOpenButton.addEventListener("click", function () {
        mobileMenu.setAttribute("open");
    });

    menuCloseButton.addEventListener("click", function () {
        mobileMenu.removeAttribute("open");
    });

});