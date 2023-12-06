let container = document.querySelector(".container")
let navItems = document.querySelector("nav-items");
let alphabet;        // this variavle to make store the A-Z alphabet

//  this pattern variable has created to store the card desgin
let pattern = ["cardDesign1", "cardDesign2", "cardDesign3", "cardDesign4", "cardDesign5", "cardDesign6"];

for (let i = 65, j = 0; i < 91; i++, j++) {      //this loop making div and alphabet
	if (j >= 6)
		j = 0;
	alphabet = String.fromCharCode(i);

	let backImage = document.createElement("img")
	backImage.classList.add("image")
	backImage.setAttribute("src", `backCardsImages/${alphabet.toLowerCase()}.png`);

	let text = document.createElement("p")
	text.classList.add("text");
	
	let newContainer = document.createElement("div")
	newContainer.classList.add("card");
	container.appendChild(newContainer);

	let frontCard = document.createElement("div");
	frontCard.classList.add("frontCard");
	newContainer.appendChild(frontCard);
	frontCard.appendChild(text);

	frontCard.classList.add(pattern[j])
	text.innerHTML = alphabet;

	let backCard = document.createElement("div");
	backCard.classList.add("backCard");
	newContainer.appendChild(backCard);
	backCard.appendChild(backImage);

	newContainer.addEventListener('click', () => {
		newContainer.classList.toggle("flipped")
	})

}