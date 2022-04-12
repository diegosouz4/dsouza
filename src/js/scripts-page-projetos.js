import { initProjetos } from "./modules/mostra-projetos.js";
import { initDepoimentos } from "./modules/depoimento.js";

async function initPageProjetos() {
  await initProjetos();
  window.addEventListener("load", () => {
    initDepoimentos();
  });
}
initPageProjetos();
