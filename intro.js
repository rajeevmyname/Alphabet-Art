let container = document.querySelector(".container")
let boxNames;
for (let i = 65; i < 91; i++) {
    boxNames = String.fromCharCode(i);

    let card = document.createElement("div")
    let cell = document.createElement("div")
    let nextCell = document.createElement("div")

    cell.setAttribute("class", "box")
    card.setAttribute("class", "card")
    nextCell.setAttribute("class", "backbox")

    card.appendChild(cell)
    card.appendChild(nextCell)
    container.appendChild(card)



    cell.innerHTML = boxNames

    card.addEventListener("click", () => {
        card.classList.toggle("flipled")
    })
}





