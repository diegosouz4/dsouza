(() => {
  const projetoHomeUl = document.querySelector("[data-projetos]");

  if (!projetoHomeUl)  return;
  
  const puxaProjetos = () => {
    const url = "https://rest.dsouza.com.br/wp-json/dsProjetos/v1/projetos";
    fetch(url)
      .then((response) => {
        if (!response.ok) throw response;
        return response.json();
      })
      .then((dadosJson) => {
        if (projetoHomeUl.getAttribute("data-projetos") === "home") {
          mostraProjetos(dadosJson, 6);
          return;
        }
        mostraProjetos(dadosJson);
      })
      .catch((erro) => {
        console.log(erro.status);
        mostraErro();
      });
  };

  const mostraErro = () => {
    projetoHomeUl.classList.add("erro");
    projetoHomeUl.innerHTML = `
      <li data-anime="bottom">
        <h3>Não foi possível carregar a lista de projetos.</h3>
        <p>Atualize a página ou tente novamente mais tarde.</p>
      </li>
    `;
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

  const mostraProjetos = (arr, limite = 12) => {
    arr.forEach((projeto) => {
      const posicaoAtual = arr.indexOf(projeto) + 1;

      if (posicaoAtual > limite) return;

      const tags = criaTags(projeto.tags);
      const novaLi = document.createElement("li");
      novaLi.setAttribute("data-anime", "bottom");
      novaLi.innerHTML = `
        <li data-anime="bottom">
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
        </li>
      `;
      projetoHomeUl.appendChild(novaLi);
    });
    selecionaProjeto();
  };
  puxaProjetos();

  const selecionaProjeto = () => {
    const projetos = document.querySelectorAll("[data-projetos] li");
    projetos.forEach((projeto) => {
      projeto.addEventListener("click", (e) => {
        const target = e.currentTarget;
        const url = target.querySelector("a").getAttribute("href");
        location.href = url;
      });
    });
  };
})();
