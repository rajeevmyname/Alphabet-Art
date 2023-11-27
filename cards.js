let container = document.querySelector(".container")
let alphabet;
for (let i = 65; i < 91; i++) {
	alphabet = String.fromCharCode(i);

	let newparent = document.createElement("div")
	newparent.classList.add("card");
	container.appendChild(newparent);

	let cell = document.createElement("div");
	cell.classList.add("frontCard");
	newparent.appendChild(cell);
	cell.innerHTML = alphabet;
	
	
	let box = document.createElement("div");
	box.classList.add("backCard");
	newparent.appendChild(box);

	newparent.addEventListener('click', ()=>{
		newparent.classList.toggle("flipled")
	})

}