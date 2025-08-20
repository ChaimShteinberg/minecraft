let selectedTool = null;

export function selectTool(toolType) {
    selectedTool = toolType;
}

export function getSelectedTool() {
    return selectedTool;
}