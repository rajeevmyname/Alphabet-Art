// all alphabet card store in cardContainer
let cardContainer = document.querySelector(".card-container");
let alphabet;
// 6 card different digining are being stored in the pattern
let pattern = ["print1", "print2", "print3", "print4", "print5", "print6",]
// Alphabet letters are stored in variable i
// Different 6  disignin pattern are stored in variable j
// this for loop use make to alphabet card
for (let i = 65, j = 0; i <= 90; i++, j++) {
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
  flipcontainer.appendChild(backDivs)
  // this is for when click on the front card the card will flip and the back card show
  flipcontainer.addEventListener("click", () => {
    flipcontainer.classList.toggle("filpped")
  })
  let images = document.createElement("img")
  // imageArray[i -65] this is use for change value of i
  images.setAttribute("src", `images/${alphabet.toLocaleLowerCase()}.png`)
  images.setAttribute("class", "imgClass")
  backDivs.appendChild(images);
}
