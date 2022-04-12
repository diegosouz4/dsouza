import { fetchApi } from "./fetch.js";
import { getLocalStorage, setLocalStorage } from "./localStorage.js";
import { initAnimeDefault, initAnimeFetch } from "./animeScroll.js";

export function initProjeto() {
  const pegaSlug = () => {
    let slugFinal = location.href.split("/projetos/");
    slugFinal = slugFinal[1].split(".html");
    slugFinal = slugFinal[0];
    return slugFinal;
  };

  const montaTags = (arr) => {
    const tags = document.querySelector(".projeto__tags");
    arr.forEach((tag) => {
      const novaTag = document.createElement("li");
      novaTag.innerHTML = tag;
      tags.appendChild(novaTag);
    });
  };

  const montaGaleria = (arr, title) => {
    const ulImagens = document.querySelector(
      ".projeto__imagens .projeto__lista"
    );
    arr.forEach((imagem) => {
      const id = arr.indexOf(imagem) + 1;
      const novaLi = document.createElement("li");
      novaLi.setAttribute("data-anime", "bottom");
      novaLi.innerHTML = `
        <picture>
          <source srcset="${imagem.projeto_list_webp}" type="image/webp">
          <img width="1440" height="810" src="${imagem.projeto_list_item}" alt="Projeto ${title} imagem ${id}">
        </picture>
      `;
      ulImagens.appendChild(novaLi);
    });
  };

  const montaPagina = (dados) => {
    const titulo = document.querySelector(".projeto__titulo");
    const descricao = document.querySelector(".projeto__descricao");
    const link = document.querySelector(".projeto__intro a");
    const listaImagens = document.querySelector(".projeto__lista");

    titulo.innerHTML = dados.title;
    descricao.innerHTML = dados.description;
    link.innerHTML = dados.linkText;
    link.setAttribute("href", dados.link);
    montaTags(dados.tags);
    montaGaleria(dados.listaImgs, dados.title);

    initAnimeFetch();
  };

  const mensagemErro = document.querySelector(".erro--fetch");
  const mostraErro = () => {
    mensagemErro.innerHTML =
      "Não foi possível carregar os itens… Tente novamente mais tarde, obrigado 😅";
  };

  const fetchSucesso = (json) => {
    montaPagina(json);
    setLocalStorage("projetoAtual", JSON.stringify(json));
    mensagemErro.remove();
  };
  const fetchErro = () => {
    const localDados = getLocalStorage("projetoAtual");
    if (localDados === null) {
      mostraErro();
      initAnimeDefault();
      return;
    }
    montaPagina(JSON.parse(localDados));
  };

  const slug = pegaSlug();
  const url = `https://rest.dsouza.com.br/wp-json/dsProjetos/v1/projeto/${slug}`;
  fetchApi(url, fetchSucesso, fetchErro);
}
