import { initDarkMode } from "./modules/darkmode.js";
import { initMenu } from "./modules/menu.js";

function initDefault() {
  initMenu();
  initDarkMode();
}

initDefault();
