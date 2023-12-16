// Make a container in which all Alphabet divs will appear
var container = document.querySelector(".main-container");

let carouselImg = document.querySelector(".carousel-img")
var dots = document.querySelectorAll(".dot")

// make a var for store aphabets
let alphabet;
let i = 0;

let carouselImgArr = ["images/carouselimges/img-1.jpeg", "images/carouselimges/img-2.jpeg", "images/carouselimges/img-3.jpeg"]
// this  carouselImg array for carousel images

let pattern = ["pattern1", "pattern2", "pattern3", "pattern4", "pattern5", "pattern6"]
// Make a pattern array in which store classes for background styling in front-div

let soundArry = ["apple", "ball", "cat", "dog", "elephant", "fish", "goat", "horse", "igloo", "joker", "kite",
    "lion", "monkey", "nose", "octopus", "pig", "queen", "rocket", "snake", "tiger", "umbrella", "van", "watermelon", "xray",
    "yak", "zebra"]


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

    // Add imges in the back-div of the cards and we added images by using link from images folder > ${alphabet.toLocaleLowerCase()}>
    images.setAttribute("src", `images/alphabetImges/${soundArry[k]}.png`)
    images.setAttribute("class", "imgClass")
    backDivs.appendChild(images)

    let backImgIconDiv = document.createElement("div");
    let iconImg1 = document.createElement("img");
    let iconImg2 = document.createElement("img");
    let iconImg3 = document.createElement("img")

    iconImg1.src = "images/backImgIcons/likeIcon.png"
    iconImg2.src = "images/backImgIcons/expendIcon.png"
    iconImg3.src = "images/backImgIcons/shareIcon.png"

    backDivs.appendChild(backImgIconDiv)
    backImgIconDiv.appendChild(iconImg1)
    backImgIconDiv.appendChild(iconImg2)
    backImgIconDiv.appendChild(iconImg3)

    backImgIconDiv.setAttribute("class", "backImgicon-div")
    iconImg1.setAttribute("class", "like_img")
    iconImg2.setAttribute("class", "expend_img")
    iconImg3.setAttribute("class", "share_img")

    iconImg1.addEventListener("click", () => {
        iconImg1.style.backgroundColor = "red";
        iconImg1.src = "images/backImgIcons/redHeartIcon.png"
    })

}


