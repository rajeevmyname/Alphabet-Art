let container = document.querySelector(".main-container")
let alphabet;

// This is pattern array for store name of classes in a front-card.
let patterns = ["pattern-1", "pattern-2", "pattern-3", "pattern-4", "pattern-5", "pattern-6"]        

//This "for loop"  used to make alphabet cards.
// i variable used to make alphabets.
// j variable for run loop in the pattern array.
for (let i = 65, j = 0; i < 91; i++, j++) {
    if (j >= 6)
        j = 0;

    //this is for make alphabet.    
    alphabet = String.fromCharCode(i); 

    let cardContainer = document.createElement("div")
    let frontCard = document.createElement("div")
    let backCard = document.createElement("div")
    let image = document.createElement("img")
    let text = document.createElement("p")

    // this is used to set class in frontCard
    frontCard.classList.add(patterns[j])  
    frontCard.classList.add("front-card")

    cardContainer.setAttribute("class", "card-container")
    backCard.setAttribute("class", "back-card")
    text.setAttribute("class" ,"text")

    //this is used for set images in the back-card.   
    image.setAttribute("src", `images/${alphabet.toLowerCase()}.png`)
    image.setAttribute("class", "image")

    cardContainer.appendChild(frontCard)
    cardContainer.appendChild(backCard)
    container.appendChild(cardContainer)
    backCard.appendChild(image)
    frontCard.appendChild(text)

    text.innerHTML = alphabet


    //This is for when we clicked any aiphabet cards so than card is flipped and show back card.
    cardContainer.addEventListener("click", () => {   
        cardContainer.classList.toggle("flipped")
    })
}

