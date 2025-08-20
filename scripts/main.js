import { selectTool } from "./tools.js"

export const main = document.querySelector("main")

for (let index = 0; index < 3000; index++) {
    const div = document.createElement("div")
    div.classList = "tile"
    div.id = `tile${index}`
    main.append(div)
}

const toolsContainer = document.getElementById('tools');

toolsContainer.addEventListener('click', (event) => {
    const clicked = event.target.id; 
        selectTool(clicked); 
});
