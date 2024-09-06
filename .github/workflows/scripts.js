document.addEventListener("DOMContentLoaded", function() {
    const img = document.querySelector("header img");
    img.addEventListener("load", function() {
        img.style.opacity = "1";
    });
});
