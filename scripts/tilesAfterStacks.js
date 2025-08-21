import { getSelectedTool } from "./tools.js";
import { updateStacksUI, addToInventory, placeTile } from "./stacks.js";
import { placingType } from "./main.js";

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

export function tilesAfterStacks(event) {
  const tile = event.target;
  if (!tile.classList.contains("tile")) return

  if (placingType) {
    placeTile(tile, placingType);
    // placingType = null;
  } else {
    handleMining(tile);
  }
}
