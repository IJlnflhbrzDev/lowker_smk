const loaderEvents = document.querySelector(".loader");
const loaderAnimation = document.querySelector(".loader-animation");
console.log(loaderEvents)
window.addEventListener('DOMContentLoaded', () => {
     if (loaderAnimation) {
          loaderAnimation.classList.remove("d-none");
     }

     if (loaderEvents) {
          loaderEvents.classList.remove("d-none");
     }
     setTimeout(() => {
          if (loaderAnimation) {
               loaderAnimation.classList.add("d-none");
          }
          if (loaderEvents) {

               loaderEvents.classList.add("d-none");
          }
     }, 1000);

});

// humberger animation
$(".navbar-toggle").click(function () {
     $(".open").toggle(500).siblings().toggle(500);
});
console.log("global")