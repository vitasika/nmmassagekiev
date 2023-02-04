
const menuBtn = document.querySelector("[data-menu-button]");
const mobileMenu = document.querySelector("[data-menu]");
const mobileMenuClosed = document.querySelector("[data-menu-closed]");

menuBtn.addEventListener("click", () => {
    const expended = menuBtn.getAttribute("aria-expanded") === "true" || false;
    menuBtn.classList.toggle("is-open");
    menuBtn.setAttribute("aria-expanded", !expended);

    mobileMenu.classList.toggle("is-open");

    document.body.classList.toggle('modal-open');

})

mobileMenuClosed.addEventListener("click", () => {
    const expended = menuBtn.getAttribute("aria-expanded") === false || "true";
    menuBtn.classList.remove("is-open");
    menuBtn.setAttribute("aria-expanded", !expended);

    mobileMenu.classList.remove("is-open");

    document.body.classList.remove('modal-open');
    
})