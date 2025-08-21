import { selectTool } from "./tools.js";
import { handleMining } from "./tilesAfterStacks.js";
import { placeTile, getInventory } from "./stacks.js";
import { selectedTool } from "./tools.js";
import { handleClick } from "./tiles.js";
import { start } from "./start.js";


export const main = document.querySelector("main");
export let select = null
export let placingType = null;

start(main)

const toolsContainer = document.getElementById("tools");

toolsContainer.addEventListener("click", (event) => {
  const clicked = event.target.id;
  selectTool(clicked, selectedTool);
  select = 'tool'
});

const stacksContainer = document.getElementById('stacks');
stacksContainer.addEventListener('click', (event) => {
    const type = event.target.id; 
    if (!type || getInventory()[type].length === 0) return;
    placingType = type;
    select = 'stack'
});


main.addEventListener("click", handleClick);
