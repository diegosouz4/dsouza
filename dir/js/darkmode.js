(()=>{const e=e=>{localStorage.setItem("ModoDeCor",e)};window.addEventListener("load",(()=>{const t=localStorage.getItem("ModoDeCor");null==t&&(window.matchMedia("(prefers-color-scheme: dark)").matches?e("dark"):e("light"));const a=document.querySelector("body"),r=document.getElementById("btnDarkMode");if("light"==t)return a.setAttribute("data-darkmode","false"),void r.setAttribute("aria-label","Mudar para darkmode");a.setAttribute("data-darkmode","true"),r.setAttribute("aria-label","Desativar darkmode")}));document.getElementById("btnDarkMode").addEventListener("click",(()=>{const t=document.querySelector("body"),a=t.getAttribute("data-darkmode"),r=document.getElementById("btnDarkMode");if("true"==a)return t.setAttribute("data-darkmode","false"),e("light"),void r.setAttribute("aria-label","Mudar para darkmode");t.setAttribute("data-darkmode","true"),e("dark"),r.setAttribute("aria-label","Desativar darkmode")}))})();