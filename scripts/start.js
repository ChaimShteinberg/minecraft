export function start(main) {
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

  ceangeTiles(2000, 2999, "rocks");

  ceangeTiles(1000, 1999, "dirt");

  ceangeTiles(125, 125, "leaves");
  ceangeTiles(224, 226, "leaves");
  ceangeTiles(323, 327, "leaves");
  ceangeTiles(422, 428, "leaves");
  ceangeTiles(521, 524, "leaves");
  ceangeTiles(526, 529, "leaves");

  ceangeTiles(150, 150, "leaves");
  ceangeTiles(249, 251, "leaves");
  ceangeTiles(348, 352, "leaves");
  ceangeTiles(447, 453, "leaves");
  ceangeTiles(546, 549, "leaves");
  ceangeTiles(551, 554, "leaves");

  ceangeTiles(175, 175, "leaves");
  ceangeTiles(274, 276, "leaves");
  ceangeTiles(373, 377, "leaves");
  ceangeTiles(472, 478, "leaves");
  ceangeTiles(571, 574, "leaves");
  ceangeTiles(576, 579, "leaves");

  const treeplace = [
    925, 825, 725, 625, 525, 950, 850, 750, 650, 550, 975, 875, 775, 675, 575,
  ];

  for (let num of treeplace) {
    const tile = document.querySelector(`#tile${num}`);
    tile.classList.replace("sky", "trees");
  }
}
