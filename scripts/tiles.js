import { select } from "./main.js";
import { tileAfterTool } from "./tileAfterTool.js";
import { tilesAfterStacks } from "./tilesAfterStacks.js";

export const handleClick = (e) => {
  if (select === "tool") {
    tileAfterTool(e);

  }

if(select === 'stack'){
  tilesAfterStacks(e)
}
}

