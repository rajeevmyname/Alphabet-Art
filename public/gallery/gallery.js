import data from './arts.json' assert{type: 'json'}

let all_entries =  document.querySelector(".all-entries")
for(let i=0; i<data.length; i++){
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML =
`<div class="art">
    <img src="${data[i].art}" alt="Art Image">
</div>

<div class="profile">
    <div class="profile-photo">
        <img src="${data[i].profile}" alt="Profile">
    </div>
    <div class="profile-info">
        <p class="name">${data[i].name}</p>
        <p class="age">${data[i].age} years</p>
        <p class="school">${data[i].school}</p>
    </div>
</div>`

all_entries.appendChild(card);

}

