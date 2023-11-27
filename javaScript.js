var container = document.querySelector(".container");
let alphabet;

let imgArray = [
    "images/a.png", "images/b.png", "images/c.png", "images/d.png", "images/e.png", "images/f.png", "images/g.png",
    "images/h.png", "images/i.png", "images/j.png", "images/k.png", "images/l.png", "images/m.png", "images/n.png",
    "images/0.png", "images/p.png", "images/q.png", "images/r.png", "images/s.png", "images/t.png", "images/u.png",
    "images/v.png", "images/w.png", "images/x.png", "images/y.png", "images/z.png"]
let pattern = ["print1", "print2", "print3", "print4", "print5", "print6",]

for (let i = 65, j = 0; i <= 90; i++, j++) {
    if (j > 6)
        j = 0

    alphabet = String.fromCharCode(i);

    let frontDiv = document.createElement("div");
    frontDiv.classList.add("front-div")
    frontDiv.classList.add(pattern[j])
    frontDiv.innerHTML = alphabet;

    // console.log(frontDiv)
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

    let images = document.createElement("img")
    images.setAttribute("src", imgArray[i - 65])
    images.setAttribute("class", "imgClass")
    backDivs.appendChild(images)
}