
let selectedTool = null;

const toolCompatibility = {
    'axe': ['wood', 'tree'],
    'pickaxe': ['stone', 'rock'],
    'shovel': ['dirt', 'grass']
};

function selectTool(toolType) {
    
    deselectAllTools();
    
    selectedTool = toolType;
    
    const selectedButton = document.getElementById(toolType);
    if (selectedButton) {
        selectedButton.classList.add('selected');
    }
}


function deselectAllTools() {
    const tools = ['axe', 'pickaxe', 'shovel'];
    tools.forEach(tool => {
        const button = document.getElementById(tool);
        if (button) {
            button.classList.remove('selected');
        }
    });
}


function getSelectedTool() {
    return selectedTool;
}


function canBreakTile(tileType) {
    if (!selectedTool) {
        return false;
    }
    
    const compatibleTiles = toolCompatibility[selectedTool];
    return compatibleTiles && compatibleTiles.includes(tileType);
}


function resetTools() {
    selectedTool = null;
    deselectAllTools();
}