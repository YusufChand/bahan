const bcghov = document.getElementById('logo');

bcghov.addEventListener("mouseenter", (event) => {
    document.getElementById('background').style.filter="brightness(200%)";
})
bcghov.addEventListener("mouseleave", (event) => {
    document.getElementById('background').style.filter="brightness(100%)";
})