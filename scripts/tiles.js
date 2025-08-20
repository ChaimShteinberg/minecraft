import { getSelectedTool } from "./tools.js";
import { addToInventory, updateStacksUI } from "./stacks.js";

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
    addToInventory(type);
    updateStacksUI();
}
