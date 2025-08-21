import { selectTool } from "./tools.js";
import { handleMining } from "./tiles.js";
import { placeTile, getInventory } from "./stacks.js";
import { selectedTool } from "./tools.js";
import { handleClick } from "./tiles.js";
import { start } from "./start.js";

export const main = document.querySelector("main");

let placingType = null;
start(main)

const toolsContainer = document.getElementById("tools");

toolsContainer.addEventListener("click", (event) => {
  const clicked = event.target.id;
  selectTool(clicked, selectedTool);
});

const stacksContainer = document.getElementById('stacks');
stacksContainer.addEventListener('click', (event) => {
    const type = event.target.id; 
    if (!type || getInventory()[type].length === 0) return;
    placingType = type;
});

main.addEventListener("click", (event) => {
    const tile = event.target;
    if (!tile.classList.contains("tile")) return;

    if (placingType) {
        placeTile(tile, placingType);
        placingType = null;
    } else {
        handleMining(tile);
    }
});
main.addEventListener("click", handleClick);
