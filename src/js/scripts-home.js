import { initProjetos } from "./modules/mostra-projetos.js";
import { initHabilidades } from "./modules/habilidades.js";
import { initDepoimentos } from "./modules/depoimento.js";

async function initHome() {
  await initProjetos();
  window.addEventListener("load", () => {
    initHabilidades();
    initDepoimentos();
  });
}
initHome();
