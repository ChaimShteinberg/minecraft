export function addTileFromStack(tile, tiles) {
  console.log(tile, tiles);
  if (tiles["sum"] > 0 && tile.classList[1] === "sky") {
    tile.classList.replace("sky", tiles["type"]);
    tiles["sum"]--;
  }
}
