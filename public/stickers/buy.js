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
