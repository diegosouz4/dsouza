const classAnime = "animate";

const debounce = (func, wait, immediate) => {
  let timeout;
  return (...args) => {
    const context = this;
    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const animaScroll = (arr) => {
  const windowTop = window.scrollY + (window.innerHeight * 3) / 4;
  arr.forEach((item) => {
    if (windowTop > item.offsetTop) {
      item.classList.add(classAnime);
    } else {
      item.classList.remove(classAnime);
    }
  });
};

const ativaAnimacao = () => {
  const listaItens = document.querySelectorAll("[data-anime]");

  if (listaItens.length) {
    animaScroll(listaItens);

    window.addEventListener(
      "scroll",
      debounce(() => {
        animaScroll(listaItens);
      }, 200)
    );
  }
  return;
};

export function initAnimeDefault() {
  ativaAnimacao();
}

export function initAnimeFetch() {
  ativaAnimacao();
}
