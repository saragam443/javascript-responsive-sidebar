const close = document.querySelector("#close-sidebar-btn");
const hamburger = document.querySelector("#hamburger");
const sidebar = document.querySelector(".sidebar");


hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("translate-x-0")
});
close.addEventListener("click", () => {
    sidebar.classList.remove("translate-x-0")
});

