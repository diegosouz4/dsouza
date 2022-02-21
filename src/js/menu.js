const btnMenu = document.getElementById("toggleMenu");
const menu = document.getElementById("menuMobile");
const header = document.querySelector(".header");

const resetaMenu = () => {
  if (!menu.classList.contains("open")) return;
  setTimeout(() => {
    btnMenu.classList.remove("open");
    menu.classList.remove("open");
    setTimeout(() => {
      header.classList.remove("show");
    }, 600);
  }, 6000);
};

btnMenu.addEventListener("click", () => {
  btnMenu.classList.toggle("open");
  menu.classList.toggle("open");
  if (menu.classList.contains("open")) header.classList.add("show");
  setTimeout(() => {
    btnMenu.blur();
    if (!menu.classList.contains("open")) header.classList.remove("show");
  }, 600);
  resetaMenu();
});

const menuLinks = document.querySelectorAll(".nav__menu a");

menuLinks.forEach((link) => {
  const UrlAtual = location.href;
  const linkUrl = link.href;
  if (UrlAtual.includes(linkUrl)) link.classList.add("ativo");
});
