export function addTileFromStack(tile, tiles) {
    console.log(tile, tiles)
    if (tile.classList[1] === "sky"){
        tile.classList.replace("sky", tiles)
    }
}
