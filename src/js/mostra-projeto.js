const pegaSlug = () => {
  let slugFinal = location.href.split("/projetos/");
  slugFinal = slugFinal[1].split(".html");
  slugFinal = slugFinal[0];
  return slugFinal;
};

const puxaProjeto = () => {
  const slug = pegaSlug();
  const url = `https://rest.dsouza.com.br/wp-json/dsProjetos/v1/projeto/${slug}`;
  fetch(url)
    .then((resposta) => {
      if (!resposta.ok) throw resposta;
      return resposta.json();
    })
    .then((dadosJson) => {
      montaPágina(dadosJson);
    })
    .catch((erro) => {
      console.log(erro.status);
    });
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
  const ulImagens = document.querySelector(".projeto__imagens .projeto__lista");
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

const montaPágina = (dados) => {
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
};

puxaProjeto();
