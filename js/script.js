/*Ativar linkes do Menu*/

const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
    const url = location.href;
    const linkHref = link.href;

    if (url.includes(linkHref)) {
        link.classList.add("ativo");
    } else {
        link.classList.remove("ativo");
    }
}

links.forEach(ativarLink);

//Ativar itens do orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro);
    if (elemento) {
        elemento.checked = true;
    }
}

parametros.forEach(ativarProduto);

// Perguntas Frequentes
const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute("aria-controls");
    const resposta = document.getElementById(controls);

    resposta.classList.toggle("ativa");
    const ativa = resposta.classList.contains("ativa");
    pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta) {
    pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

/*Galeria de bicicletas*/

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event) {
    const img = event.currentTarget;
    const media = matchMedia("(min-width: 1000px)").matches;
    if (media) {
        galeriaContainer.prepend(img);
    }
}

galeria.forEach((img) => {
    img.addEventListener("click", trocarImagem);
});
