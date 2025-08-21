import { selectTool } from "./tools.js";
import { selectedTool } from "./tools.js";
import { handleClick } from "./tiles.js";
import { start } from "./start.js";

const main = document.querySelector("main");
export let select = null
start(main)

const toolsContainer = document.getElementById("tools");

toolsContainer.addEventListener("click", (event) => {
  const clicked = event.target.id;
  selectTool(clicked, selectedTool);
  select = 'tool'
});

main.addEventListener("click", handleClick);
