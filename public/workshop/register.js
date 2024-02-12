import workshops from './dates.json' assert {type: 'json'}

const url = window.location.href;
const paramString = url.split("?")[1];

const queryString = new URLSearchParams(paramString);
let queryObj= {};

for (let pair of queryString.entries()) {
    queryObj[pair[0]] = pair[1];
}

const i = queryObj["w"];
const date = workshops[i]["Date"];
const type = workshops[i]["Workshop"];
const fees = workshops[i]["Fees"];

let dateP = document.querySelector("#date");
let typeP = document.querySelector("#type");
let feesP = document.querySelector("#fees");

dateP.textContent = date;
typeP.textContent = type;
feesP.textContent = fees;