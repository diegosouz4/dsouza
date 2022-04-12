import { fetchApi } from "./fetch.js";
import { initAnimeFetch, initAnimeDefault } from "./animeScroll.js";

export function initGitdados() {
  const textoErro = document.querySelector(".erro--fetch");

  const verificaLocalStorage = () => {
    if (localStorage.getItem("repositorio") === null) {
      const sectionEstudo = document.querySelector(
        ".estudo__repositorio .container"
      );
      const repositorioUl = document.querySelector(".repositorio__lista");
      repositorioUl.remove();
      textoErro.innerText =
        "Não foi possível carregar a lista de repositórios… Tente novamente mais tarde, obrigado 😅";
      initAnimeDefault();
      return;
    }
    const dadosLocais = JSON.parse(localStorage.getItem("repositorio"));
    montaLista(dadosLocais);
  };

  const salvaRepositorioLocal = (dados) => {
    localStorage.setItem("repositorio", dados);
  };

  //pega o json de dados || se não tiver carrega do local
  const gitSucesso = (json) => {
    const stringFyDado = JSON.stringify(json);
    salvaRepositorioLocal(stringFyDado);
    montaLista(json);
  };

  const gitErro = (json) => {
    verificaLocalStorage();
  };

  const url = "https://api.github.com/users/diegosouz4/repos";
  fetchApi(url, gitSucesso, gitErro);

  //loop cria li com os dados
  const repositorioUl = document.querySelector(".repositorio__lista");

  const criaLi = (dados) => {
    const novaLi = document.createElement("li");
    const title = dados.name.split("-").join(" ").split("_").join(" ");
    novaLi.setAttribute("data-anime", "bottom");
    novaLi.classList.add("float-card");
    novaLi.classList.add("card--repositorio");
    novaLi.innerHTML = `<h3>${title}</h3><p>${dados.description}</p><a class="btn btn--inline" href="${dados.html_url}" target="_blank" rel="noopen">Ver repositório</a>`;
    repositorioUl.appendChild(novaLi);
  };

  const montaLista = (arr) => {
    arr.forEach((item) => {
      criaLi(item);
    });
    textoErro.remove();
    initAnimeFetch();
  };
}
