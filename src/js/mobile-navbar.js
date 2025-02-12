const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
});

document.addEventListener("click", (event) => {
    const isClickInsideNav = nav.contains(event.target);
    const isClickOnHamburger = hamburger.contains(event.target);

    if (!isClickInsideNav && !isClickOnHamburger && nav.classList.contains("active")) {
        nav.classList.remove("active");
    }
});