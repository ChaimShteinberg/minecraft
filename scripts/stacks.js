const inventory = {
    tree: [],
    rocks: [],
    dirt: []
};

export function getInventory() {
    return inventory;
}

export function addToInventory(type) {
    inventory[type].push(type);
    updateStacksUI();
}


export function updateStacksUI() {
    for (let key in inventory) {
        const section = document.getElementById(key);
        section.textContent = inventory[key].length;
    }
}

export function placeTile(tile, type) {
    if (inventory[type].length === 0) return;
    tile.className = `tile ${type}`;
    inventory[type].pop();
    updateStacksUI();
}
