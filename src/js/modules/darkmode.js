import { getLocalStorage, setLocalStorage } from "./localStorage.js";

export function initDarkMode() {
  const verificaPreferencia = () => {
    let preferencia = "light";
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      let preferencia = "dark";
      setLocalStorage("ModoDeCor", preferencia);
      return;
    }
    setLocalStorage("ModoDeCor", preferencia);
  };

  window.addEventListener("load", () => {
    const valorStorage = getLocalStorage("ModoDeCor");
    if (valorStorage === null) {
      verificaPreferencia();
    }

    const body = document.querySelector("body");
    const labelBtn = document.getElementById("btnDarkMode");

    if (valorStorage == "light") {
      body.setAttribute("data-darkmode", "false");
      labelBtn.setAttribute("aria-label", "Mudar para darkmode");
      labelBtn.classList.remove("ativo");
      return;
    }
    body.setAttribute("data-darkmode", "true");
    labelBtn.setAttribute("aria-label", "Desativar darkmode");
    labelBtn.classList.add("ativo");
  });

  const alternaDarkMode = () => {
    const body = document.querySelector("body");
    const darkModeAtivo = body.getAttribute("data-darkmode");
    const labelBtn = document.getElementById("btnDarkMode");
    if (darkModeAtivo == "true") {
      body.setAttribute("data-darkmode", "false");
      setLocalStorage("ModoDeCor", "light");
      labelBtn.setAttribute("aria-label", "Mudar para darkmode");
      labelBtn.classList.remove("ativo");
      return;
    }
    body.setAttribute("data-darkmode", "true");
    setLocalStorage("ModoDeCor", "dark");
    labelBtn.setAttribute("aria-label", "Desativar darkmode");
    labelBtn.classList.add("ativo");
  };

  const btnDarkmode = document.getElementById("btnDarkMode");
  btnDarkmode.addEventListener("click", alternaDarkMode);
}
