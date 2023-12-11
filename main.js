// all alphabet card store in cardContainer
let cardContainer = document.querySelector(".card-container");
let dots = document.querySelectorAll(".dot")
let alphabet;
// 6 card different digining are being stored in the pattern
let pattern = ["print1", "print2", "print3", "print4", "print5", "print6",]
let soundArray = ["Apple", "Ball", "Cat", "Dog", "Elephant", "Fish", "Giraffe", "Horse", "igloo", "Joker", "King", "lion", "Monkey", "Nose", "Octopus", "Pen", "Queen", "Rabbit", "Snack", "Tiger", "Umbrella", "Ven", "Bettermelon", "X-ray", "Yak", "Zebra"]
// Alphabet letters are stored in variable i
// Different 6  disignin pattern are stored in variable j
// this for loop use make to alphabet card
for (let i = 65, k = 0, j = 0; i <= 90; i++, k++, j++) {
  if (j > 5)
    j = 0;
  // this is use for make alphabet
  alphabet = String.fromCharCode(i);
  // The entire display of the frint card is being stored in the frontDiv
  let frontDiv = document.createElement("div");
  // the entire back disigning of the back card is the being stored in the backDiv
  let backDivs = document.createElement("div");
  // the entire all fliping item stored in the flipcontainer
  let flipcontainer = document.createElement("div")
  let text = document.createElement("p")
  text.classList.add("text")
  text.innerHTML = alphabet;
  frontDiv.appendChild(text)
  frontDiv.classList.add("front-div");
  backDivs.classList.add("back-div");
  flipcontainer.classList.add("flip-div")
  cardContainer.appendChild(frontDiv);
  // this is used to set class and frontcard
  frontDiv.classList.add(pattern[j])
  cardContainer.appendChild(flipcontainer)
  flipcontainer.appendChild(frontDiv);
  flipcontainer.appendChild(backDivs);
  // this is for when click on the front card the card will flip and the back card show
  let backImgtext = document.createElement("p")
  backImgtext.classList.add("backImgtext")
  backImgtext.innerHTML = soundArray[k];
  backDivs.appendChild(backImgtext)

  flipcontainer.addEventListener("click", () => {
    flipcontainer.classList.toggle("filpped")
    let msg = new SpeechSynthesisUtterance();
    msg.text = soundArray[k];
    window.speechSynthesis.speak(msg);

  })
  let images = document.createElement("img")
  // imageArray[i -65] this is use for change value of i
  images.setAttribute("src", `images/Alphabetimages/${alphabet.toLocaleLowerCase()}.png`)
  images.setAttribute("class", "imgClass")
  backDivs.appendChild(images);
}
let crouselImg = document.querySelector(".crousel-img");
let i = 0;
let crouselArray = [
  "images/crouselimages/children1.jpg",
  "images/crouselimages/children2.jpg",
  "images/crouselimages/children3.jpg"
]
autoplay = setInterval(function () {
  i++;
  let selecteDotId = "#dot" + i;
  let selecteDot = document.querySelector(selecteDotId);
  dots.forEach(dot => dot.style.backgroundColor = "white");
  selecteDot.style.backgroundColor = "black";
  if (i > 2)
    i = 0;
  crouselImg.setAttribute("src", crouselArray[i])
}, 1200);

