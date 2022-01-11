const loaderEvents = document.querySelector(".loader");
console.log(loaderEvents)
window.addEventListener('DOMContentLoaded', (event) => {
     loaderEvents.classList.remove("d-none");
     setTimeout(() => {

          loaderEvents.classList.add("d-none");
     }, 1000);
     console.log('DOM fully loaded and parsed');
});