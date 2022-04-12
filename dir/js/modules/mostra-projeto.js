import{fetchApi}from"./fetch.js";import{getLocalStorage,setLocalStorage}from"./localStorage.js";import{initAnimeDefault,initAnimeFetch}from"./animeScroll.js";export function initProjeto(){const e=e=>{const t=document.querySelector(".projeto__titulo"),o=document.querySelector(".projeto__descricao"),r=document.querySelector(".projeto__intro a");document.querySelector(".projeto__lista");t.innerHTML=e.title,o.innerHTML=e.description,r.innerHTML=e.linkText,r.setAttribute("href",e.link),(e=>{const t=document.querySelector(".projeto__tags");e.forEach((e=>{const o=document.createElement("li");o.innerHTML=e,t.appendChild(o)}))})(e.tags),((e,t)=>{const o=document.querySelector(".projeto__imagens .projeto__lista");e.forEach((r=>{const i=e.indexOf(r)+1,n=document.createElement("li");n.setAttribute("data-anime","bottom"),n.innerHTML=`\n        <picture>\n          <source srcset="${r.projeto_list_webp}" type="image/webp">\n          <img width="1440" height="810" src="${r.projeto_list_item}" alt="Projeto ${t} imagem ${i}">\n        </picture>\n      `,o.appendChild(n)}))})(e.listaImgs,e.title),initAnimeFetch()},t=document.querySelector(".erro--fetch"),o=(()=>{let e=location.href.split("/projetos/");return e=e[1].split(".html"),e=e[0],e})();fetchApi(`https://rest.dsouza.com.br/wp-json/dsProjetos/v1/projeto/${o}`,(o=>{e(o),setLocalStorage("projetoAtual",JSON.stringify(o)),t.remove()}),(()=>{const o=getLocalStorage("projetoAtual");if(null===o)return t.innerHTML="Não foi possível carregar os itens… Tente novamente mais tarde, obrigado 😅",void initAnimeDefault();e(JSON.parse(o))}))}