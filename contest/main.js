// import data from './main.json' assert{type: 'json'}

// let cardContainer = document.createElement("div")
// cardContainer.setAttribute("class", "cardContainer")
// for (let i = 0; i < data.length; i++) {
//     //user-Alphabet-Card
//     let artworkContainer = document.querySelector(".artwork-container")
//     let card = document.createElement("div")
//     cardContainer.appendChild(card)
//     card.setAttribute("class", "card")
//     artworkContainer.appendChild(cardContainer)
//     //user-alphabet-art
//     let alphabetArt = document.createElement("img")
//     alphabetArt.setAttribute("class", "alphabet-art")
//     alphabetArt.setAttribute("src", "https://img.freepik.com/premium-photo/fantasy-monogram-letter_738906-322.jpg?size=626&ext=jpg&ga=GA1.1.1361178089.1689231563&semt=ais")
//     alphabetArt.setAttribute("alt", "alphabetArt")
//     card.appendChild(alphabetArt)
//     //user profile
//     let userProfile = document.createElement("div")
//     userProfile.setAttribute("class", "user-profile")
//     card.appendChild(userProfile)
//     //user-name
//     let userName = document.createElement("p")
//     userName.setAttribute("class", "user-name")
//     userName.innerHTML = data[i].name
//     //user-age
//     let userAge = document.createElement("p")
//     userAge.innerHTML = data[i].age
//     userAge.setAttribute("class", "user-age")
//     //user identity                                                                
//     let identity = document.createElement("div")
//     identity.append(userName, userAge)
//     //user-profile-picture
//     let profileImg = document.createElement("img")
//     profileImg.setAttribute("class", "profile-img")
//     profileImg.setAttribute("src", data[i].src)
//     profileImg.setAttribute("alt", "user-profile-picture")
//     userProfile.append(profileImg, identity)
// }