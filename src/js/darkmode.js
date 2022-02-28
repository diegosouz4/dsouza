(() => {
  const verificaLocalStorage = () => {
    const modoDeCor = localStorage.getItem("ModoDeCor");
    return modoDeCor;
  };

  const salvaLocalStorage = (valor) => {
    localStorage.setItem("ModoDeCor", valor);
  };

  const verificaPreferencia = () => {
    let preferencia = "light";
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      let preferencia = "dark";
      salvaLocalStorage(preferencia);
      return;
    }
    salvaLocalStorage(preferencia);
  };

  window.addEventListener("load", () => {
    const valorStorage = verificaLocalStorage();
    if (valorStorage == null) {
      verificaPreferencia();
    }

    const body = document.querySelector("body");
    const labelBtn = document.getElementById("btnDarkMode");
    if (valorStorage == "light") {
      body.setAttribute("data-darkmode", "false");
      labelBtn.setAttribute("aria-label", "Mudar para darkmode");
      return;
    }
    body.setAttribute("data-darkmode", "true");
    labelBtn.setAttribute("aria-label", "Desativar darkmode");
  });

  const alternaDarkMode = () => {
    const body = document.querySelector("body");
    const darkModeAtivo = body.getAttribute("data-darkmode");
    const labelBtn = document.getElementById("btnDarkMode");
    if (darkModeAtivo == "true") {
      body.setAttribute("data-darkmode", "false");
      salvaLocalStorage("light");
      labelBtn.setAttribute("aria-label", "Mudar para darkmode");
      return;
    }
    body.setAttribute("data-darkmode", "true");
    salvaLocalStorage("dark");
    labelBtn.setAttribute("aria-label", "Desativar darkmode");
  };

  const btnDarkmode = document.getElementById("btnDarkMode");
  btnDarkmode.addEventListener("click", alternaDarkMode);
})();
