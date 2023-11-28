let container = document.querySelector(".container");
let alphabet;
let imgArray = [
  "image/a.png", "image/b.png", "image/c.png", "image/d.png", "image/e.png", "image/f.png", "image/g.png",
  "image/h.png", "image/i.png", "image/j.png", "image/k.png", "image/l.png", "image/m.png", "image/n.png",
  "image/0.png", "image/p.png", "image/q.png", "image/r.png", "image/s.png", "image/t.png", "image/u.png",
  "image/v.png", "image/w.png", "image/x.png", "image/y.png", "image/z.png"]

let pattern = ["print1", "print2", "print3", "print4", "print5", "print6",]

for (let i = 65, j = 0; i <= 90; i++, j++) {
  if (j > 6)
    j = 0
  alphabet = String.fromCharCode(i);
  let frontDiv = document.createElement("div");
  frontDiv.classList.add("front-div");
  container.appendChild(frontDiv);
  frontDiv.classList.add(pattern[j])
  frontDiv.innerHTML = alphabet;
  let backDivs = document.createElement("div");
  backDivs.classList.add("back-div");

  let flipContainer = document.createElement("div")
  flipContainer.classList.add("flip-div")
  container.appendChild(flipContainer)

  flipContainer.appendChild(frontDiv);
  flipContainer.appendChild(backDivs)

  flipContainer.addEventListener("click", () => {
    flipContainer.classList.toggle("flipped")
  })
  let images = document.createElement("img")
  images.setAttribute("src", imgArray[i - 65])
  images.setAttribute("class", "imgClass")
  backDivs.appendChild(images)
}
