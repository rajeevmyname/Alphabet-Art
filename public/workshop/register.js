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

const btn = document.querySelector('.pushable');
const form = document.querySelector('form');

btn.addEventListener('click', function () {
    var options = {
        "key": "rzp_test_5JZb6rwNu8F2qa", // Replace with your Test API key
        "amount": 499 * 100, // Amount in paise
        "currency": "INR",
        "name": "Alphabet Arts",
        "description": "Alphabet Art Workshop",
        "image": "../assets/Logo.png",
        "prefill": {
            "name": document.querySelector("#name").value,
            "email": document.querySelector('#email-id').value,
            "contact": document.querySelector('#phone-number').value
        },
        "notes": {
            "type": "workshop"
        },
        "handler": function (response) {
            document.querySelector('form').submit();
            window.location.replace(`./confirmation.html?id=${response.razorpay_payment_id}`);
        }
    };
    if (!form.checkValidity())
        console.log("Form is not valid")
    else {
        var rzp = new Razorpay(options);
        rzp.open();
    }

});