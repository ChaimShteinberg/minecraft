const main = document.querySelector("main")

for (let index = 0; index < 3000; index++) {
    const div = document.createElement("div")
    div.classList.add("tile", "sky")
    div.id = `tile${index}`
    main.append(div)
}

function ceangeTiles(start, end, tile){
    for (let index = start; index < end +1 ; index++) {
        const div = document.querySelector(`#tile${index}`)  
        div.classList.replace("sky", tile)      
    }
}