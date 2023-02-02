
const menuBtn = document.querySelector("[data-menu-button]");
const mobileMenu = document.querySelector("[data-menu]");

console.log(menuBtn);

menuBtn.addEventListener("click", () => {
    const expended = menuBtn.getAttribute("aria-expanded") === "true" || false;

    menuBtn.classList.toggle("is-open");

    menuBtn.setAttribute("aria-expanded", !expended);
    console.log(menuBtn);

    mobileMenu.classList.toggle("is-open");

})


// (() => {
//     const mobileMenu = document.querySelector('.js-menu-container');
//     const openMenuBtn = document.querySelector('.js-open-menu');
//     const closeMenuBtn = document.querySelector('.js-close-menu');

//     const toggleMenu = () => {
//         const isMenuOpen =
//             openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
//         openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
//         mobileMenu.classList.toggle('is-open');

//         const scrollLockMethod = !isMenuOpen
//             ? 'disableBodyScroll'
//             : 'enableBodyScroll';
//         bodyScrollLock[scrollLockMethod](document.body);
//     };

//     openMenuBtn.addEventListener('click', toggleMenu);
//     closeMenuBtn.addEventListener('click', toggleMenu);

//     // Закрываем мобильное меню на более широких экранах
//     // в случае изменения ориентации устройства.
//     window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
//         if (!e.matches) return;
//         mobileMenu.classList.remove('is-open');
//         openMenuBtn.setAttribute('aria-expanded', false);
//         bodyScrollLock.enableBodyScroll(document.body);
//     });
// })();
