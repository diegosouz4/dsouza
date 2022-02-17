const btnMenu = document.getElementById("toggleMenu");
const menu = document.getElementById("menuMobile");

btnMenu.addEventListener("click", () => {
  btnMenu.classList.toggle("open");
  menu.classList.toggle("open");
  setTimeout(() => {
    btnMenu.blur();
  }, 600);
});
