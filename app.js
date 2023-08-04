const navToggle = document.querySelector(".navbar_toggle");
const links = document.querySelector(".menu");

navToggle.addEventListener('click', function (){
    links.classList.toggle("show_nav");
})