import { select } from "./main.js";
import { tileAfterTool } from "./tileAfterTool.js";

export const handleClick = (e) => {
  if (select === "tool") {
    tileAfterTool(e);

  }

if(select === 'stack'){
  tilesAfterStacks(e)
}
}

