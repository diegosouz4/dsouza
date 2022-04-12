export function getLocalStorage(chave, string = true) {
  const dados = localStorage.getItem(chave);
  if (string) {
    return dados;
  }
  return JSON.parse(dados);
}

export function setLocalStorage(chave, valor) {
  if (typeof valor === "string") {
    localStorage.setItem(chave, valor);
    return;
  }
  const valorString = JSON.stringify(valor);
  localStorage.setItem(chave, valorString);
}
