let container = document.querySelector(".main-container")
let alphabet;

//This is a array of images.
let imagesArray = [
    "images/a.png", "images/b.png", "images/c.png", "images/d.png", "images/e.png",   
    "images/f.png", "images/g.png", "images/h.png", "images/i.png", "images/j.png",
    "images/k.png", "images/l.png", "images/m.png", "images/n.png", "images/o.png",
    "images/p.png", "images/q.png", "images/r.png", "images/s.png", "images/t.png",
    "images/u.png", "images/v.png", "images/w.png", "images/x.png", "images/y.png", "images/z.png"
]

// This is pattern array for store name of classes in a front-card.
let patterns = ["pattern-1", "pattern-2", "pattern-3", "pattern-4", "pattern-5", "pattern-6", "pattern-7",
    "pattern-8", "pattern-9", "pattern-10", "pattern-11", "pattern-12", "pattern-13"]        

//This "for loop"  used to make alphabet cards.
// i variable used to make alphabets.
// j variable for run loop in the pattern array.
for (let i = 65, j = 0; i < 91; i++, j++) {
    if (j > 12)
        j = 0;

    //this is for make alphabet.    
    alphabet = String.fromCharCode(i); 

    let cardContainer = document.createElement("div")
    let frontCard = document.createElement("div")
    let backCard = document.createElement("div")
    let image = document.createElement("img")

    // this is used to set class in frontCard
    frontCard.classList.add(patterns[j])  
    frontCard.classList.add("front-card")

    cardContainer.setAttribute("class", "card-container")
    backCard.setAttribute("class", "back-card")

    //imagesArray[i-65] this is used for change value of i.   
    image.setAttribute("src", imagesArray[i - 65])
    image.setAttribute("class", "image")

    cardContainer.appendChild(frontCard)
    cardContainer.appendChild(backCard)
    container.appendChild(cardContainer)
    backCard.appendChild(image)

    frontCard.innerHTML = alphabet

    //This is for when we clicked any aiphabet cards so than card is flipped and show back card.
    cardContainer.addEventListener("click", () => {   
        cardContainer.classList.toggle("flipped")
    })
}