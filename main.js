// Make a container in which all Alphabet divs will appear
var container = document.querySelector(".main-container");

let carouselImg = document.querySelector(".carousel-img")
var dots = document.querySelectorAll(".dot")

// make a var for store aphabets
let alphabet;
let i = 0;

let carouselImgArr = ["images/carouselimges/img-1.jpeg", "images/carouselimges/img-2.jpeg", "images/carouselimges/img-3.jpeg"]
// this  carouselImg array for carousel images

let pattern = ["print1", "print2", "print3", "print4", "print5", "print6"]
// Make a pattern array in which store classes for background styling in front-div

let soundArry = ["Apple", "Ball", "Cat", "Dog", "Elephant", "Fish", "Giraffe", "Horse", "Igloo", "Joker", "King",
    "Lion", "Monkey", "Nose", "Octopus", "Pen", "Queen", "Rabbit", "Snak", "Tiger", "Umbrella", "Van", "Watermelon", "X-ray",
    "Yak", "Zebra"]


setInterval(function () {      //this autoplay for carousel images 
    i++;
    let selectedDotId = "#dot" + i;
    let selectedDot = document.querySelector(selectedDotId);

    dots.forEach(dot => dot.style.backgroundColor = "white");
    selectedDot.style.backgroundColor = "black";

    if (i >= 3)
        i = 0;
    carouselImg.setAttribute("src", carouselImgArr[i]);
}, 1200);
//console.log(carouselImg)


//This "For loop" used to making alphabet divs, and changing background design with alphabet divs, and changeing image
// i var for make alphabets 
// j variable for pattern array
for (let i = 65, k = 0, j = 0; i <= 90; k++, i++, j++) {

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
        flipContainer.classList.toggle("flipped");
        var msg = new SpeechSynthesisUtterance();
        msg.text = soundArry[k];
        window.speechSynthesis.speak(msg);
    })
    // when wi will click then ring words sound
    let backImgText = document.createElement("p")
    backImgText.classList.add("back-img-text")
    backImgText.innerHTML = soundArry[k]
    backDivs.appendChild(backImgText)

    // when we will click any alphabet then flip cell and show back image
    let images = document.createElement("img")

    // Add imges in the back-div of the cards and we added images by using link from images folder 
    images.setAttribute("src", `images/alphabetImges/${alphabet.toLocaleLowerCase()}.png`)
    images.setAttribute("class", "imgClass")
    backDivs.appendChild(images)

    let iconImg1 = document.createElement("img");
    let iconImg2 = document.createElement("img");
    let iconImg3 = document.createElement("img")

    iconImg1.src = "images/backImgIcons/expendIcon.png"
    iconImg2.src = "images/backImgIcons/likeIcon.png"
    iconImg3.src = "images/backImgIcons/shareIcon.png"

    backDivs.appendChild(iconImg1)
    backDivs.appendChild(iconImg2)
    backDivs.appendChild(iconImg3)

    iconImg1.setAttribute("class", "like_img")
    iconImg2.setAttribute("class", "expend_img")
    iconImg3.setAttribute("class", "share_img")

}


