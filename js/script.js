var hamburger = document.querySelector("#nav-icon");
hamburger.addEventListener("click", function () {
   document.querySelector(".page-header").classList.toggle("nav-opened");
   document.querySelector("#nav-icon").classList.toggle("open");
}, false);