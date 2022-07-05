document.querySelectorAll(".sub-header").forEach(item => item.addEventListener("mouseenter", placeSymbol));

function placeSymbol () {
    const container = document.querySelector("#l-monkebook.sub-language");
    const emblem = document.createElement("i");
    emblem.classList.add("devicon-ruby-plain", "colored");
    container.appendChild(emblem);
    this.removeEventListener("mouseenter", placeSymbol);
    this.addEventListener("mouseleave", removeSymbol);
}

function removeSymbol () {
    const container = document.querySelector("#l-monkebook.sub-language");
    container.removeChild(container.lastChild);
    this.removeEventListener("mouseleave", removeSymbol);
    this.addEventListener("mouseenter", placeSymbol);
}