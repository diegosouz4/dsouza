(() => {
  window.addEventListener("load", () => {
    const listaItens = document.querySelectorAll("[data-anime]");
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

    const animaScroll = () => {
      const windowTop = window.scrollY + (window.innerHeight * 3) / 4;
      listaItens.forEach((item) => {
        if (windowTop > item.offsetTop) {
          item.classList.add(classAnime);
        } else {
          item.classList.remove(classAnime);
        }
      });
    };

    animaScroll();

    if (listaItens.length) {
      window.addEventListener(
        "scroll",
        debounce(() => {
          animaScroll();
        }, 200)
      );
    }
  });
})();
