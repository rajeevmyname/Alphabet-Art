const url = window.location.href;
const paramString = url.split("?")[1];

const queryString = new URLSearchParams(paramString);
let queryObj= {};

for (let pair of queryString.entries()) {
    queryObj[pair[0]] = pair[1];
}

let qty = document.querySelector(".workshop-img p");
if(queryObj["q"])
    qty.innerText = `Quantity : ${queryObj["q"]}`
else
    qty.innerText = `Quantity : 1`


// const form = document.querySelector('form');
// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     const name = document.getElementById("name").value;
//     const phone = document.getElementById("phone-number").value;
//     const email = document.getElementById("email-id").value;
//     const address1 = document.getElementById("address1").value;
//     const address2 = document.getElementById("address2").value;
//     const state = document.getElementById("state").value;
//     const city = document.getElementById("city").value;
//     const pincode = document.getElementById("pincode").value;

//     const data = {name, email, phone, address1, address2, state, city, pincode};
//     // console.log(data);
//     fetch('/submit-sticker',{
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application.json',
//         },
//         body: JSON.stringify(data)
//     })
// })