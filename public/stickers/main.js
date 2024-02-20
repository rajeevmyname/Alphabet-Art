//increment and decrement quantity
let decrement = document.getElementById("decrement")
let increment = document.getElementById("increment")
let quantityInput = document.querySelector("#quantity")
let form = document.querySelector("form");

decrement.addEventListener("click", () => {
    if(Number(quantity.value)>1)
        quantityInput.value = Number(quantity.value) - 1;
})
increment.addEventListener("click", () => {
    quantityInput.value = Number(quantity.value) + 1;
})

form.addEventListener("submit",(e)=>{
    e.preventDefault();
})

//set preview images on click
let previewImage = document.querySelector(".preview-image img");
let stickerImages = document.querySelectorAll(".sticker-image>img");
stickerImages.forEach((sticker)=>{  
    sticker.addEventListener("click", ()=>{
        previewImage.src = sticker.src;
        stickerImages.forEach((sticker)=>{
            sticker.style.border = "none";
        })
        sticker.style.border = "2px solid black";
    })
})

//re-direct to stickers buy page
let proceedButton = document.querySelector(".pushable-button")
proceedButton.addEventListener("click", () => {
    const url = `./buy.html?q=${quantityInput.value}`
    window.location.href = url;
})