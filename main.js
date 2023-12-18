let container = document.querySelector(".main-container")
let carouselImg = document.querySelector(".carousel-img")
let i =0;
 
let corousel = [
    "images/carousel-img/img-A.png",
    "images/carousel-img/img-B.png",
    "images/carousel-img/img-C.png"
]

let soundArray =["Apple","Ball","Cat","Dog","Elephant","Fish","Goat","Horse","Igloo","Joker","Kite","Lion","Monkey"
                 ,"Nose","Octopus","Pig","Queen","Rocket","Snake","Tiger","Umbrella","Van","Watermelon","X-Ray","Yak","Zebra"]

autoplay = setInterval(function(){
    i++;
    if(i>2)
    i=0;
carouselImg.setAttribute("src",corousel[i])
},1200);

// This is pattern array for store name of classes in a front-card.
let patterns = ["pattern-1", "pattern-2", "pattern-3", "pattern-4", "pattern-5", "pattern-6"]        

//This "for loop"  used to make alphabet cards.
// i variable used to make alphabets.
// j variable for run loop in the pattern array.
for (let i = 65,k=0, j = 0; i < 91; i++, j++,k++) {
    if (j >= 6)
        j = 0;

    //this is for make alphabet.    
    alphabet = String.fromCharCode(i); 

    let cardContainer = document.createElement("div")
    let frontCard = document.createElement("div")
    let backCard = document.createElement("div")
    let image = document.createElement("img")
    let text = document.createElement("p")
    let backImgText = document.createElement("p")

    // this is used to set class in frontCard
    frontCard.classList.add(patterns[j])  
    frontCard.classList.add("front-card")

    cardContainer.setAttribute("class", "card-container")
    backCard.setAttribute("class", "back-card")
    text.setAttribute("class" ,"text")
    backImgText.setAttribute("class","back-img-text")

    //this is used for set images in the back-card.   
    image.setAttribute("src", `images/Alphabet-img/${soundArray[k]}.png`)
    image.setAttribute("class", "alphabet-image")

    cardContainer.appendChild(frontCard)
    cardContainer.appendChild(backCard)
    container.appendChild(cardContainer)
    backCard.appendChild(image)
    backCard.appendChild(backImgText)
    frontCard.appendChild(text)

    text.innerHTML = alphabet
    backImgText.innerHTML = soundArray[k]


    //This is for when we clicked any aiphabet cards so than card is flipped and show back card.
    cardContainer.addEventListener("click", () => {   
        cardContainer.classList.toggle("flipped")
        let msg = new SpeechSynthesisUtterance();
        msg.text = soundArray[k]
        window.speechSynthesis.speak(msg);
    })
}

