import data from './main.json' assert{type: 'json'}
console.log(data);

for (let i = 0; i < data.length; i++) {
    let artwork = document.querySelector(".artworks")
    let identityCard = document.createElement("div")
    artwork.appendChild(identityCard)
    identityCard.appendChild
    let userName = document.createElement("p")
    let userAge = document.createElement("p")
    let userProfile = document.createElement("img")
    userName.innerHTML = data[i].name
    userAge.innerHTML = data[i].age
    userProfile.setAttribute("src", data[i].src)
    identityCard.append(userName,userAge,userProfile)
}