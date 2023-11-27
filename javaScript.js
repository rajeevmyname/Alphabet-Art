var container = document.querySelector(".container");
let alphabet;

let pattern = ["print1", "print2", "print3", "print4", "print5", "print6",]

for (let i = 65, j = 0; i <= 90; i++, j++) {
    if (j > 6)
    j = 0

    alphabet = String.fromCharCode(i);

    let frontDiv = document.createElement("div");
    frontDiv.classList.add("front-div")
    frontDiv.classList.add(pattern[j])
    frontDiv.innerHTML = alphabet;

    let backDivs = document.createElement("div");
    backDivs.classList.add("back-div");

    let flipContainer = document.createElement("div")
    flipContainer.classList.add("card")
    container.appendChild(flipContainer)

    flipContainer.appendChild(frontDiv);
    flipContainer.appendChild(backDivs)

    flipContainer.addEventListener("click", () => {
        flipContainer.classList.toggle("fliped")
    })

}