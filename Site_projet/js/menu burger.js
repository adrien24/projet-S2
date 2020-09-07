// Retourne le premier élement dans le document correspondant au sélecteur  spécifié (ici, celui qui a la classe 'nav-toggle')
var hamburger = document.querySelector(".nav-toggle");

// Retourne l'élément racine du document, ici <html>
var page      = document.documentElement;

function doToggle() {

    // element.classList.toggle() => change la présence d'une classe dans la liste. Si la classe existe, alors la supprime et renvoie false, dans le cas inverse, ajoute cette classe et retourne true.
    page.classList.toggle('menu-open');
}

// Ajoute un écouteur d'évènement à l'icone 'hamburger'. Lorsqu'on clique dessus => lance la fonction doToggle();
hamburger.addEventListener('click', doToggle);