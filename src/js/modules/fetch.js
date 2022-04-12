export function fetchApi(url, funcaoSucesso, funcaoErro, anima = true) {
  fetch(url)
    .then((response) => {
      if (!response.ok) throw response;
      return response.json();
    })
    .then((json) => {
      funcaoSucesso(json);
    })
    .catch((erro) => {
      funcaoErro();
    });
}
