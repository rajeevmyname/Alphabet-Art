// Make a container in which all Alphabet divs will appear
var container = document.querySelector(".container");

// make a var for store aphabets
let alphabet;

// Make a pattern array in which store classes for background styling in front-div
let pattern = ["print1", "print2", "print3", "print4", "print5", "print6"]

//This "For loop" used to making alphabet divs, and changing background design with alphabet divs, and changeing image
// i var for make alphabets 
// j variable for pattern array
for (let i = 65, j = 0; i <= 90; i++, j++) {
    if (j > 5)
        j = 0

    // Number 65-90 to make alphabet a to z
    alphabet = String.fromCharCode(i);

    // Make a container in which will be front and back both card and append flipcontainer to container
    let flipContainer = document.createElement("div")
    flipContainer.classList.add("card")
    container.appendChild(flipContainer)

    // Creat divs who will make by loop 
    let frontDiv = document.createElement("div");
    frontDiv.classList.add("front-div")

    // Add classes in the pattern array in front-div
    frontDiv.classList.add(pattern[j])

    // make a paragraph tag for style alphabet etxt
    let text = document.createElement("p")
    text.classList.add("text")
    text.innerHTML = alphabet
    frontDiv.appendChild(text)

    let backDivs = document.createElement("div");
    backDivs.classList.add("back-div");

    // Append front and back divs in flipcontainer
    flipContainer.appendChild(frontDiv);
    flipContainer.appendChild(backDivs)

    //When we will click any abphabet then show back side of the card
    flipContainer.addEventListener("click", () => {
        flipContainer.classList.toggle("flipped")
    })

    // when we will click any alphabet then flip cell and show back image
    let images = document.createElement("img")

    // Add imges in the back-div of the cards and we added images by using link from images folder 
    images.setAttribute("src", `images/alphabetImges/${alphabet.toLocaleLowerCase()}.png`)
    images.setAttribute("class", "imgClass")
    backDivs.appendChild(images)
}

// this  carouselImg array for carousel images
let carouselImgArr = ["images/carouselimges/img-1.jpeg", "images/carouselimges/img-2.jpeg", "images/carouselimges/img-3.jpeg"]
let carouselImg = document.querySelector(".carousel-img")
let i = 0;
autoplay = setInterval(function () {      //this autoplay for carousel images 
    i++;
    if (i > 2)
        i = 0;
    carouselImg.setAttribute("src", carouselImgArr[i]);
    // carouselImg.style.width = "100%";
    // carouselImg.style.height = "250px"
}, 1200);
