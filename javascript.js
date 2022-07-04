const header = document.getElementById('monkebook');
header.addEventListener('mouseenter', placeSymbol);

function placeSymbol () {
    const container = document.createElement('div');
    container.classList.add('test');
    const stemma = document.createElement('img');
    stemma.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg";

    stemma.width = 24;
    stemma.height = 24;
    container.appendChild(stemma);
    header.appendChild(container);
    header.removeEventListener('mouseenter', placeSymbol);
    header.addEventListener('mouseleave', removeSymbol);
}

function removeSymbol () {
    header.removeChild(header.lastChild);
    header.removeEventListener('mouseleave', removeSymbol);
    header.addEventListener('mouseenter', placeSymbol);
}