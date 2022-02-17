window.addEventListener("load", () => {
  const depoimentos = document.querySelectorAll(".depoimentos__lista li");

  if (!depoimentos) return;
  const criaDot = () => {
    const dotsLista = document.querySelector(".depoimentos__dots");
    if (depoimentos.length > 0) {
      depoimentos.forEach((item) => {
        const novoDot = document.createElement("span");
        dotsLista.appendChild(novoDot);
      });
      dotsLista.querySelector("span").classList.add("ativo");
    }
  };
  criaDot();

  const dotsArray = document.querySelectorAll(".depoimentos__dots span");
  const selecionaDot = (e) => {
    const dotSelecionado = e.currentTarget;
    const dotsNewArray = Array.from(dotsArray);

    //Remove o Dot ativo.
    const dotAtivo = document.querySelectorAll(".depoimentos__dots .ativo");
    dotAtivo.forEach((ativo) => {
      ativo.classList.remove("ativo");
    });

    //Adiciona classe ativo no dot selecionado.
    dotSelecionado.classList.add("ativo");

    //Pega o ID do Dot selecionado
    const dotId = dotsNewArray.indexOf(dotSelecionado);
    trocaDepoimento(dotId);
  };

  const trocaDepoimento = (id) => {
    const ulDepoimento = document.querySelector(".depoimentos__lista");
    const posXDepoimento = depoimentos[id].offsetLeft;

    ulDepoimento.style.transform = "translateX(-" + posXDepoimento + "px)";
  };

  dotsArray.forEach((dot) => {
    dot.addEventListener("click", selecionaDot);
  });

  //Adiciona os controles
  const btnNext = document.getElementById("depNext");
  const btnPrev = document.getElementById("depPrev");
  const listaDepoimentos = Array.from(dotsArray);

  const atualizaDot = (id) => {
    const depoimentoAtivo = document.querySelector(".depoimentos__dots .ativo");
    depoimentoAtivo.classList.remove("ativo");
    dotsArray[id].classList.add("ativo");
  };

  const pegaIdDot = () => {
    const depoimentoAtivo = document.querySelector(".depoimentos__dots .ativo");
    const id = listaDepoimentos.indexOf(depoimentoAtivo);
    return id;
  };

  const proximoDepoimento = () => {
    const id = pegaIdDot();
    if (id == listaDepoimentos.length - 1) return;

    let novoDepoimento = id + 1;
    trocaDepoimento(novoDepoimento);
    atualizaDot(novoDepoimento);
  };

  const depoimentoAnterior = () => {
    const id = pegaIdDot();
    if (id == 0) return;

    let novoDepoimento = id - 1;
    trocaDepoimento(novoDepoimento);
    atualizaDot(novoDepoimento);
  };

  btnNext.addEventListener("click", proximoDepoimento);
  btnPrev.addEventListener("click", depoimentoAnterior);
});
