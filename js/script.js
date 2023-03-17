const links = document.querySelectorAll('.header-menu a');

function ativarLink(link){
    const url = location.href;
    const linkHref = link.href;

    if (url.includes(linkHref)){
        link.classList.add('ativo');
    }else {
        link.classList.remove('ativo');
    }
}

links.forEach(ativarLink)