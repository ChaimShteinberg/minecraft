const main = document.querySelector("main");

for (let index = 0; index < 3000; index++) {
  const div = document.createElement("div");
  div.classList.add("tile", "sky");
  div.id = `tile${index}`;
  main.append(div);
}

function ceangeTiles(start, end, typeTile) {
  for (let index = start; index < end + 1; index++) {
    const tile = document.querySelector(`#tile${index}`);
    tile.classList.replace("sky", typeTile);
  }
}

ceangeTiles(2500, 2999, "rocks");

ceangeTiles(2000, 2599, "dirt");

treeplace = [1925, 1825, 1725, 1625, 1525, 1950, 1850, 1750, 1650, 1550, 1975, 1875, 1775, 1675, 1575];

for (let num of treeplace) {
  const tile = document.querySelector(`#tile${num}`);
  tile.classList.replace("sky", "tree");
}
