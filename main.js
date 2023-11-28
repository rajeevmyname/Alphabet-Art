let container = document.querySelector(".container");
let alphabet;
for (let i = 65; i <= 90; i++) {
  alphabet = String.fromCharCode(i);
  let frontDiv = document.createElement("div");
  frontDiv.classList.add("front-div");
  container.appendChild(frontDiv);
  frontDiv.innerHTML = alphabet;

}
