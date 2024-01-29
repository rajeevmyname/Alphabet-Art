const url=window.location.href
const queryString=url.split("?")[1]

const quantity=queryString.split("=")[1]

const heading=document.querySelector("h3")
heading.innerText=`Quantity:- ${quantity}`
console.log(quantity);