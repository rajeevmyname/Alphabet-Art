let container = document.querySelector(".container")
let alphabet;        // this variavle to make store the A-Z alphabet
let backgroundImage = [      //this backgroundImage variable has created to store the all background images path
	"Images/a.png",
	"Images/b.png",
	"Images/c.png",
	"Images/d.png",
	"Images/e.png",
	"Images/f.png",
	"Images/g.png",
	"Images/h.png",
	"Images/i.png",
	"Images/j.png",
	"Images/k.png",
	"Images/l.png",
	"Images/m.png",
	"Images/n.png",
	"Images/o.png",
	"Images/p.png",
	"Images/q.png",
	"Images/r.png",
	"Images/s.png",
	"Images/t.png",
	"Images/u.png",
	"Images/v.png",
	"Images/w.png",
	"Images/x.png",
	"Images/y.png",
	"Images/z.png"
]

//  this pattern variable has created to store the card desgin
let pattern = ["cardDesign1", "cardDesign2", "cardDesign3", "cardDesign4", "cardDesign5", "cardDesign6"];

for (let i = 65, j = 0; i < 91; i++, j++) {      //this loop making div and alphabet
	if (j >= 6)
		j = 0;
	alphabet = String.fromCharCode(i);

	let backImage = document.createElement("img")      
	backImage.classList.add("image")
	backImage.setAttribute("src", backgroundImage[i - 65])

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

	frontCard.classList.add(pattern[j])


	let backCard = document.createElement("div");
	backCard.classList.add("backCard");
	newContainer.appendChild(backCard);
	backCard.appendChild(backImage);

	newContainer.addEventListener('click', () => {
		newContainer.classList.toggle("flipped")
	})

}