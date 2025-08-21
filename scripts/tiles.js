import { tilesAfterStacks } from "./tilesAfterStacks.js";
import { selectedTool } from "./tools.js";
import { select } from "./main.js";
import { addToInventory } from "./stacks.js";
 
export const handleClick = (e) => {
    if(select === 'tool'){
  const typeClass = e.target.classList;
  if (typeClass.contains("dirt")) {
    if (selectedTool === "shovel") {
      e.target.classList.replace("dirt", "sky");
      const stack = document.getElementById('dirt')
      stack.classList.add('dirt')
      addToInventory('dirt')
    }
  }
  if(typeClass.contains("tree")){
    if(selectedTool === "axe"){
        e.target.classList.replace('tree','sky')
        const stack = document.getElementById('trees')
      stack.classList.add('tree')
      addToInventory('tree')
    }
  }
  if(typeClass.contains("rocks")){
    if(selectedTool === 'pickaxe'){
        e.target.classList.replace('rocks','sky')
        const stack = document.getElementById('rocks')
      stack.classList.add('rocks')
      addToInventory('rocks')
    }
  }
}
if(select === 'stack'){
  tilesAfterStacks(e)
}
};
