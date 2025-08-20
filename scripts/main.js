const main = document.querySelector("main");

for (let index = 0; index < 3000; index++) {
  const div = document.createElement("div");
  div.classList.add("tile", "sky");
  div.id = `tile${index}`;
  main.append(div);
}

function ceangeTiles(start, end, tile) {
  for (let index = start; index < end + 1; index++) {
    const tile = document.querySelector(`#tile${index}`);
    tile.classList.replace("sky", tile);
  }
}

ceangeTiles(2501, 3000, "rocks");

ceangeTiles(2001, 2500, "dirt");

treeplace = [1925, 1825, 1725, 1625, 1525];

for (let num of treeplace) {
  const tile = document.querySelector(`#tile${num}`);
  tile.classList.replace("sky", "tree");
}
