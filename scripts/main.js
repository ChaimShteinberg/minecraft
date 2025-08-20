import { selectTool } from "./tools.js";
import { handleMining } from "./tiles.js";
import { placeTile, getInventory } from "./stacks.js";

export const main = document.querySelector("main")

let placingType = null;

for (let index = 0; index < 3000; index++) {
  const div = document.createElement("div");
  div.classList.add("tile", "sky");
  div.id = `tile${index}`;
  main.append(div);
}

function ceangeTiles(start, end, typeTile) {
  for (let index = start; index < end + 1; index++) {
    const tile = document.querySelector(`#tile${index}`);
    tile.classList.replace("sky", typeTile);
  }
}

ceangeTiles(2000, 2999, "rocks");

ceangeTiles(1000, 1999, "dirt");

const treeplace = [925, 825, 725, 625, 525, 950, 850, 750, 650, 550, 975, 875, 775, 675, 575];

for (let num of treeplace) {
  const tile = document.querySelector(`#tile${num}`);
  tile.classList.replace("sky", "tree");
}
const toolsContainer = document.getElementById('tools');

toolsContainer.addEventListener('click', (event) => {
    const clicked = event.target.id; 
        selectTool(clicked); 
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
