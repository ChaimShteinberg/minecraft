import { selectedTool } from "./tools.js";
 
export const handleClick = (e) => {
  const typeClass = e.target.classList;
  if (typeClass.contains("dirt")) {
    if (selectedTool === "shovel") {
      e.target.classList.replace("dirt", "sky");
    }
  }
  if(typeClass.contains("tree")){
    if(selectedTool === "axe"){
        e.target.classList.replace('tree','sky')
    }
  }
  if(typeClass.contains("rocks")){
    if(selectedTool === 'pickaxe'){
        e.target.classList.replace('rocks','sky')
    }
  }
};
