let container = document.querySelector(".container")
let alphabet;
let backgroundImage = [
	"/Alphabet-Art/Images/a.png",
	"/Alphabet-Art/Images/b.png",
	"/Alphabet-Art/Images/c.png",
	"/Alphabet-Art/Images/d.png",
	"/Alphabet-Art/Images/e.png",
	"/Alphabet-Art/Images/f.png",
	"/Alphabet-Art/Images/g.png",
	"/Alphabet-Art/Images/h.png",
	"/Alphabet-Art/Images/i.png",
	"/Alphabet-Art/Images/j.png",
	"/Alphabet-Art/Images/k.png",
	"/Alphabet-Art/Images/l.png",
	"/Alphabet-Art/Images/m.png",
	"/Alphabet-Art/Images/n.png",
	"/Alphabet-Art/Images/o.png",
	"/Alphabet-Art/Images/p.png",
	"/Alphabet-Art/Images/q.png",
	"/Alphabet-Art/Images/r.png",
	"/Alphabet-Art/Images/s.png",
	"/Alphabet-Art/Images/t.png",
	"/Alphabet-Art/Images/u.png",
	"/Alphabet-Art/Images/v.png",
	"/Alphabet-Art/Images/w.png",
	"/Alphabet-Art/Images/x.png",
	"/Alphabet-Art/Images/y.png",
	"/Alphabet-Art/Images/z.png"
]
for (let i = 65; i < 91; i++) {
	alphabet = String.fromCharCode(i);

	let backimage = document.createElement("img")
	backimage.classList.add("image")
	backimage.setAttribute("src", backgroundImage[i-65])
	

	let newparent = document.createElement("div")
	newparent.classList.add("card");
	container.appendChild(newparent);

	let frontCard = document.createElement("div");
	frontCard.classList.add("frontCard");
	newparent.appendChild(frontCard);
	frontCard.innerHTML = alphabet;
	
	
	let backCard = document.createElement("div");
	backCard.classList.add("backCard");
	newparent.appendChild(backCard);
	backCard.appendChild(backimage);

	newparent.addEventListener('click', ()=>{
		newparent.classList.toggle("flipled")
	})

}