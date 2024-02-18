const url = window.location.href;
const paramString = url.split("?")[1];

const queryString = new URLSearchParams(paramString);
let queryObj = {};

for (let pair of queryString.entries()) {
    queryObj[pair[0]] = pair[1];
}

let qty = document.querySelector(".workshop-img p");
if (queryObj["q"])
    qty.innerText = `Quantity : ${queryObj["q"]}`
else
    qty.innerText = `Quantity : 1`



var btn = document.querySelector('.pushable');
btn.addEventListener('click', function () {
    var options = {
        "key": "rzp_test_5JZb6rwNu8F2qa", // Replace with your Test API key
        "amount": queryObj['q'] * 199 * 100, // Amount in paise
        "currency": "INR",
        "name": "Alphabet Arts",
        "description": "A-Z Alphabet Art Stickers",
        "image": "../assets/Logo.png",
        "prefill":{
            "name": document.querySelector("#name").value,
            "email": document.querySelector('#email-id').value,
            "contact": document.querySelector('#phone-number').value
        },
        "notes":{
            "type": "stickers"
        },
        "handler": function (response) {
            console.log("Hello success");
            document.querySelector('form').submit();
            window.location.replace(`./confirmation.html?id=${response.razorpay_payment_id}`);
        }
    };
    var rzp = new Razorpay(options);
    rzp.open();
});
