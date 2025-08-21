export let selectedTool = null;

export function selectTool(toolType,select) {
    selectedTool = toolType;
}

export function getSelectedTool() {
    return selectedTool;
}