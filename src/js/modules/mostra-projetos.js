import { fetchApi } from "./fetch.js";
import { getLocalStorage, setLocalStorage } from "./localStorage.js";
import { initAnimeFetch, initAnimeDefault } from "./animeScroll.js";

export function initProjetos() {
  const projetoHomeUl = document.querySelector("[data-projetos]");
  const mensagemErro = document.querySelector(".erro--fetch");

  if (!projetoHomeUl) return;

  const mostraErro = () => {
    mensagemErro.innerHTML =
      "Não foi possível carregar os itens… Tente novamente mais tarde, obrigado 😅";
  };

  const criaTags = (arr) => {
    const tags = document.createElement("p");
    arr.forEach((tag) => {
      const novaTag = document.createElement("span");
      novaTag.innerHTML = tag;
      tags.appendChild(novaTag);
    });
    return tags.innerHTML;
  };

  const mostraProjetos = (arr) => {
    let limite = 12;
    if (projetoHomeUl.getAttribute("data-projetos") === "home") limite = 3;

    arr.forEach((projeto) => {
      const posicaoAtual = arr.indexOf(projeto) + 1;

      if (posicaoAtual > limite) return;

      const tags = criaTags(projeto.tags);
      const novaLi = document.createElement("li");
      novaLi.setAttribute("data-anime", "bottom");
      novaLi.innerHTML = `
        <picture>
          <source srcset="${projeto.thumb_webp}" type="image/webp">
          <img width="350" width="250" src="${projeto.thumb}" alt="Projeto ${projeto.title}">
        </picture>
        <div class="thumbs__info">
          <div class="info_content">
            <h3>${projeto.title}</h3>
            <p class="tags">${tags}</p>
            <a href="./projetos/${projeto.slug}.html" class="btn btn--border" title="Ver projeto">Ver projeto</a>
          </div>
        </div>
      `;
      projetoHomeUl.appendChild(novaLi);
    });
    selecionaProjeto();
    initAnimeFetch();
  };

  const fetchSucesso = (json) => {
    mostraProjetos(json);
    setLocalStorage("projetos", JSON.stringify(json));
    mensagemErro.remove();
  };

  const fetchErro = () => {
    const localDados = getLocalStorage("projetos");
    if (localDados === null) {
      mostraErro();
      initAnimeDefault();
      return;
    }
    mostraProjetos(JSON.parse(localDados));
    mensagemErro.remove();
  };

  const url = "https://rest.dsouza.com.br/wp-json/dsProjetos/v1/projetos";
  fetchApi(url, fetchSucesso, fetchErro);

  const selecionaProjeto = () => {
    const projetos = document.querySelectorAll("[data-projetos] li");
    if (!projetos) return;

    projetos.forEach((projeto) => {
      projeto.addEventListener("click", (e) => {
        const target = e.currentTarget;
        const url = target.querySelector("a").getAttribute("href");
        location.href = url;
      });
    });
  };
}
