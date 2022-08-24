const closeBtn = document.querySelector(".close-btn");
const menuBtn = document.querySelector(".menu-btn");
const sideBar = document.querySelector(".side-bar");


menuBtn.addEventListener("click", () => {
    sideBar.classList.toggle("show-side-bar")
});
closeBtn.addEventListener("click", () => {
    sideBar.classList.remove("show-side-bar")
});