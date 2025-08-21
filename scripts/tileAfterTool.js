import { addToInventory } from "./stacks.js";
import { selectedTool } from "./tools.js";

export function tileAfterTool(e) {
  const typeClass = e.target.classList;
  if (typeClass.contains("dirt")) {
    if (selectedTool === "shovel") {
      e.target.classList.replace("dirt", "sky");
      const stack = document.getElementById("dirt");
      stack.classList.add("dirt");
      addToInventory("dirt");
    }
  }
  if (typeClass.contains("trees")) {
    if (selectedTool === "axe") {
      e.target.classList.replace("trees", "sky");
      const stack = document.getElementById("trees");
      stack.classList.add("trees");
      addToInventory("trees");
    }
  }
  if (typeClass.contains("rocks")) {
    if (selectedTool === "pickaxe") {
      e.target.classList.replace("rocks", "sky");
      const stack = document.getElementById("rocks");
      stack.classList.add("rocks");
      addToInventory("rocks");
    }
  }
  if (typeClass.contains("leaves")) {
    if (selectedTool === "shears") {
      e.target.classList.replace("leaves", "sky");
      const stack = document.getElementById("leaves");
      stack.classList.add("leaves");
      addToInventory("leaves");
    }
  }
}
