let container = document.querySelector(".container")
let boxNames;

let imagesArray = [
    "/Alphabet-Art/images/a.png",
    "/Alphabet-Art/images/b.png",
    "/Alphabet-Art/images/c.png",
    "/Alphabet-Art/images/d.png",
    "/Alphabet-Art/images/e.png",
    "/Alphabet-Art/images/f.png",
    "/Alphabet-Art/images/g.png",
    "/Alphabet-Art/images/h.png",
    "/Alphabet-Art/images/i.png",
    "/Alphabet-Art/images/j.png",
    "/Alphabet-Art/images/k.png",
    "/Alphabet-Art/images/l.png",
    "/Alphabet-Art/images/m.png",
    "/Alphabet-Art/images/n.png",
    "/Alphabet-Art/images/o.png",
    "/Alphabet-Art/images/p.png",
    "/Alphabet-Art/images/q.png",
    "/Alphabet-Art/images/r.png",
    "/Alphabet-Art/images/s.png",
    "/Alphabet-Art/images/t.png",
    "/Alphabet-Art/images/u.png",
    "/Alphabet-Art/images/v.png",
    "/Alphabet-Art/images/w.png",
    "/Alphabet-Art/images/x.png",
    "/Alphabet-Art/images/y.png",
    "/Alphabet-Art/images/z.png"
]

let pattarn = ["pattarn1", "pattarn2", "pattarn3", "pattarn4", "pattarn5", "pattarn6", "pattarn7", "pattarn8", "pattarn9", "pattarn10", "pattarn11", "pattarn12", "pattarn13"]

for (let i = 65, j = 0; i < 91; i++, j++) {
    if (j > 12)
        j = 0;

    boxNames = String.fromCharCode(i);

    let card = document.createElement("div")
    let cell = document.createElement("div")
    let nextCell = document.createElement("div")
    let image = document.createElement("img")
    
    cell.classList.add(pattarn[j])
    cell.classList.add("box")

    console.log(cell)



    // cell.setAttribute("class", "box")
    card.setAttribute("class", "card")
    nextCell.setAttribute("class", "backbox")
    image.setAttribute("src", imagesArray[i - 65])
    image.setAttribute("class", "image")


    card.appendChild(cell)
    card.appendChild(nextCell)
    container.appendChild(card)
    nextCell.appendChild(image)


    cell.innerHTML = boxNames

    card.addEventListener("click", () => {
        card.classList.toggle("flipled")
    })
}




