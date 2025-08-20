import { getSelectedTool } from "./tools.js";

const inventory = {
    tree: [],
    rocks: [],
    dirt: []
};

export function handleMining(tile) {
    const tool = getSelectedTool();

    if (tool === "axe" && tile.classList.contains("tree")) {
        removeTile(tile, "tree");
    }
    if (tool === "pickaxe" && tile.classList.contains("rocks")) {
        removeTile(tile, "rocks");
    }
    if (tool === "shovel" && tile.classList.contains("dirt")) {
        removeTile(tile, "dirt");
    }
}

function removeTile(tile, type) {
    tile.className = "tile sky"; 
    inventory[type].push(type);
    updateStacksUI();
}

function updateStacksUI() {
    for (let key in inventory) {
        const section = document.getElementById(key);
        section.textContent = inventory[key].length;
    }
}
