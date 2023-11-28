// Make a container in which all Alphabet divs will appear
var container = document.querySelector(".container");

// make a var for store aphabets
let alphabet;

// Make an imgArray in which all Alphabet images when we will click alphabet then flip card and will show image
let imgArray = [
    "images/a.png", "images/b.png", "images/c.png", "images/d.png", "images/e.png", "images/f.png", "images/g.png",
    "images/h.png", "images/i.png", "images/j.png", "images/k.png", "images/l.png", "images/m.png", "images/n.png",
    "images/o.png", "images/p.png", "images/q.png", "images/r.png", "images/s.png", "images/t.png", "images/u.png",
    "images/v.png", "images/w.png", "images/x.png", "images/y.png", "images/z.png"]

// Make a pattern array in which store classes for background styling in front-div
let pattern = ["print1", "print2", "print3", "print4", "print5", "print6",]


//This "For loop" used to making alphabet divs, and changing background design with alphabet divs, and changeing image
// i var for make alphabets 
// j variable for pattern array
for (let i = 65, j = 0; i <= 90; i++, j++) {
    if (j > 6)
        j = 0

    // Number 65-90 to make alphabet a to z
    alphabet = String.fromCharCode(i);

    // Make a container in which will be front and back both card and append flipcontainer to container
    let flipContainer = document.createElement("div")
    flipContainer.classList.add("card")
    container.appendChild(flipContainer)

    // Creat divs who will make by loop 
    let frontDiv = document.createElement("div");
    frontDiv.classList.add("front-div")
    frontDiv.innerHTML = alphabet;

    // Add classes in the pattern array in front-div
    frontDiv.classList.add(pattern[j])

    let backDivs = document.createElement("div");
    backDivs.classList.add("back-div");

    // Append front and back divs in flipcontainer
    flipContainer.appendChild(frontDiv);
    flipContainer.appendChild(backDivs)

    //When we will click any abphabet then show back side of the card
    flipContainer.addEventListener("click", () => {
        flipContainer.classList.toggle("flipped")
    })

    // when we will click any alphabet then flip cell and show back image
    let images = document.createElement("img")
    images.setAttribute("src", imgArray[i - 65])
    images.setAttribute("class", "imgClass")
    backDivs.appendChild(images)
}