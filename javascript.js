document.querySelectorAll(".sub-header").forEach(item => item.addEventListener("mouseenter", placeSymbol));

const emblemRuby = document.createElement("i");
emblemRuby.classList.add("devicon-ruby-plain", "colored");
const emblemRails = document.createElement("i");
emblemRails.classList.add("devicon-rails-plain", "colored");
const emblemJS = document.createElement("i");
emblemJS.classList.add("devicon-javascript-plain", "colored");
const emblemCSS = document.createElement("i");
emblemCSS.classList.add("devicon-css3-plain", "colored");
const emblemHTML = document.createElement("i");
emblemHTML.classList.add("devicon-html5-plain", "colored");

function placeSymbol () {
    const container = document.querySelector(`#l-${this.id}`);
    switch (this.id) {
        case "monkebook":
            container.appendChild(emblemRuby);
            container.appendChild(emblemRails);
            container.appendChild(emblemCSS);
            container.appendChild(emblemHTML);
            break;
        case "chess":
            container.appendChild(emblemRuby);
            break;
        case "games":
            container.appendChild(emblemRuby);
            break;
        case "data-structures":
            container.appendChild(emblemRuby);
            break;
        case "old-js":
            container.appendChild(emblemJS);
            container.appendChild(emblemCSS);
            container.appendChild(emblemHTML);
            break;
    };
    this.removeEventListener("mouseenter", placeSymbol);
    this.addEventListener("mouseleave", removeSymbol);
}

function removeSymbol () {
    const container = document.querySelector(`#l-${this.id}`);
    container.replaceChildren();
    this.removeEventListener("mouseleave", removeSymbol);
    this.addEventListener("mouseenter", placeSymbol);
}