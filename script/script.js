const loaderEvents = document.querySelector(".loader");
const loaderAnimation = document.querySelector(".loader-animation");
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
// $(window).load(function () {
//      $(".loader-animation").fadeOut("slow");
// });
