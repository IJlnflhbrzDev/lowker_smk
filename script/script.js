const loaderEvents = document.querySelector(".loader");
console.log(loaderEvents)
window.addEventListener('DOMContentLoaded', () => {
     loaderEvents.classList.remove("d-none");
     setTimeout(() => {

          loaderEvents.classList.add("d-none");
     }, 1000);

});

// humberger animation
$(".navbar-toggle").click(function () {
     $(".open").toggle(500).siblings().toggle(500);
});