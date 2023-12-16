let container = document.querySelector(".container")
let navItems = document.querySelector("nav-items");
let carouselImg = document.querySelector(".carouselImg")
let dots = document.querySelectorAll(".dot")
const crslImg = [
	"assest/carouselImages/image1.png",
	"assest/carouselImages/image2.jpeg",
	"assest/carouselImages/image3.jpeg"
]
let i = 0;
setInterval(function () {
	i++;
	let selectedDotId = "#dot"+ i;
	let selectedDot = document.querySelector(selectedDotId);
	//console.log(selectedDot)
	dots.forEach(dot=>dot.style.backgroundColor = "white");
	selectedDot.style.backgroundColor = "black";

	if (i >= 3)
	 i = 0;
	// dots.forEach(dot=>dot.style.backgroundColor = "white")
	carouselImg.setAttribute("src", crslImg[i]);

}, 2000);

let alphabet;        // this variavle to make store the A-Z alphabet

//  this pattern variable has created to store the card desgin
let pattern = ["cardDesign1", "cardDesign2", "cardDesign3", "cardDesign4", "cardDesign5", "cardDesign6"];
const backCardImgName = ["Apple", "Ball", "Cat", "Dog", "Elephant", "Fish",
	"Giraffe", "Horse", "Igloo", "Joker", "king", "Lion", "Monkey", "Nose", "Octopus",
	"Pig", "Queen", "Rocket", "Snake", "Tiger", "Umberla", "Van", "Watermelon", "X-ray", "Yalk", "Zebra"]
for (let i = 65, j = 0, k = 0; i < 91, k < 26; i++, j++, k++) {      //this loop making div and alphabet
	if (j >= 6)
		j = 0;
	alphabet = String.fromCharCode(i);

	let backImage = document.createElement("img")
	backImage.classList.add("image")
	backImage.setAttribute("src", `assest/backCardsImages/${alphabet.toLowerCase()}.jpeg`);

	let text = document.createElement("p")
	text.classList.add("text");
	text.innerHTML = alphabet;


	let newContainer = document.createElement("div")
	newContainer.classList.add("card");
	container.appendChild(newContainer);

	let frontCard = document.createElement("div");
	frontCard.classList.add("frontCard");
	newContainer.appendChild(frontCard);
	frontCard.appendChild(text);

	frontCard.classList.add(pattern[j]);


	let backCard = document.createElement("div");
	backCard.classList.add("backCard");
	newContainer.appendChild(backCard);
	backCard.appendChild(backImage);

	let backCardImageText = document.createElement("p");
	backCardImageText.setAttribute("class", "backcardImageText");
	backCard.appendChild(backCardImageText);
	backCardImageText.innerText = backCardImgName[k];


	let icons = document.createElement("div");
	icons.classList.add("iconContainer");
	backCard.appendChild(icons);

	let imgIconOne = document.createElement("img")
	imgIconOne.setAttribute("class","imgIconOne")
	icons.appendChild(imgIconOne);

	let imgIconTwo = document.createElement("img")
	imgIconTwo.setAttribute("class","imgIconTwo")
	icons.appendChild(imgIconTwo);

	let imgIconThree = document.createElement("img")
	imgIconThree.setAttribute("class","imgIconThree")
	icons.appendChild(imgIconThree);

	imgIconOne.src = "assest/backCardIcons/heartIcon.png"
	imgIconTwo.src = "assest/backCardIcons/sizeIcon.png"
	imgIconThree.src = "assest/backCardIcons/shareIcon.png"





	newContainer.addEventListener('click', () => {
		newContainer.classList.toggle("flipped");
		var msg = new SpeechSynthesisUtterance();
		msg.text = backCardImgName[k];
		window.speechSynthesis.speak(msg);

	})



}