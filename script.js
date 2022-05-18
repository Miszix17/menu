const menu = document.getElementById("Menu");
const btn = document.getElementById("MenuBtm");
const icon = document.getElementById("Icon");

const showMenu = () => {
    menu.classList.toggle("show");
    icon.classList.toggle("bi-list");
    icon.classList.toggle("bi-x-octagon");
}

btn.addEventListener("click", showMenu);