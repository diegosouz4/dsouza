export function initHabilidades() {
  const campoHabilidades = document.querySelector(".habilidades");
  const habilidades = document.querySelectorAll(".habilidades__card button");

  if (!campoHabilidades) return;

  const mostraHabilidade = (event) => {
    const habilidadeSelecionada = event.currentTarget;
    const controls = habilidadeSelecionada.getAttribute("aria-controls");
    const habilidadeResultado = document.getElementById(controls);

    const ativo = () => {
      if (habilidadeResultado.classList.contains("ativo")) {
        return "false";
      }
      return "true";
    };

    habilidadeSelecionada.parentNode.classList.toggle("ativo");
    habilidadeSelecionada.setAttribute("aria-expanded", ativo());
    habilidadeResultado.classList.toggle("ativo");
  };

  habilidades.forEach((item) => {
    item.addEventListener("click", mostraHabilidade);
  });
}
