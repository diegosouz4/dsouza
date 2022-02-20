const btnMenu = document.getElementById("toggleMenu");
const menu = document.getElementById("menuMobile");

btnMenu.addEventListener("click", () => {
  btnMenu.classList.toggle("open");
  menu.classList.toggle("open");
  setTimeout(() => {
    btnMenu.blur();
  }, 600);
});

const menuLinks = document.querySelectorAll(".nav__menu a");

menuLinks.forEach((link) => {
  const UrlAtual = location.href;
  const linkUrl = link.href;
  if (UrlAtual.includes(linkUrl)) link.classList.add("ativo");
});
