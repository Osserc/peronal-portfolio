const projects =  document.querySelectorAll(".single-project");

function delayLight() {
    projects.forEach(project => {
        project.classList.add("light-up");
    })
}

setTimeout(delayLight, 3600);