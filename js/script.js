// Ativar links do Menu
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
