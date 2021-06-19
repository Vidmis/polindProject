const burger = document.getElementById("hamburger");
const navUL = document.getElementById("nav-ul");

burger.addEventListener('click', () => {
    navUL.classList.toggle('show');
});