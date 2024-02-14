//All words
let words = ["Alien", "Butterfly", "Cat",
    "Dinosaur", "Eagle", "Flower",
    "Giraffe", "Hammer", "Ice",
    "Jellyfish", "Keys", "Lamp",
    "Mountains", "Ninja", "Omelette",
    "Pirate", "Queen", "Rabbit",
    "Snowman", "Tree", "Unicorn",
    "Volcano", "Watermelon", "X-Ray",
    "Yak", "Zebra"]

//Set up text to speech
var msg = new SpeechSynthesisUtterance();

// Add Alphabet Cards
let container = document.querySelector(".container");
for (let i = 65; i <= 90; i++) {
    let alphabet = String.fromCharCode(i);

    let card = document.createElement("div");
    card.classList.add("card");
    container.appendChild(card);

    //backcard
    let backCard = document.createElement("div");
    let alphabetText = document.createElement("p");
    alphabetText.innerText = alphabet;

    backCard.classList.add("backCard");
    backCard.appendChild(alphabetText);
    card.appendChild(backCard);

    //frontcard
    let frontCard = document.createElement("div");
    frontCard.classList.add("frontCard");
    card.appendChild(frontCard);
    //alphabet image
    let imgContainer = document.createElement("div");
    let alphabetImg = document.createElement("img");
    alphabetImg.src = `./assets/alphabet_images/${alphabet}.png`;
    imgContainer.appendChild(alphabetImg);
    frontCard.appendChild(imgContainer);
    //word for the alphabet
    let word = document.createElement("p");
    word.innerText = words[i - 65];
    frontCard.appendChild(word);
    //div containing icons at the bottom of each card
    let faIcons = document.createElement("div");
    faIcons.classList.add("fa-icons");
    frontCard.appendChild(faIcons);
    //Heart Icon           
    let likeIcon = document.createElement("i");
    likeIcon.classList.add("fa-regular", "fa-heart");
    faIcons.appendChild(likeIcon);
    //Sound Icon
    let soundIcon = document.createElement("i");
    soundIcon.classList.add("fa-solid", "fa-volume-high");
    faIcons.appendChild(soundIcon);
    //Share Icon
    let shareIcon = document.createElement("i");
    shareIcon.classList.add("fa-solid", "fa-share-from-square");
    faIcons.appendChild(shareIcon);

    //Share Image On Click Share Icon
    let tooltip = document.createElement("span")
    tooltip.classList.add("toolTipText")
    tooltip.innerText = "Link Copied!!"
    shareIcon.appendChild(tooltip)
    shareIcon.addEventListener("click", () => {
        let currentUrl = window.location.origin;
        let url = currentUrl;
        if (navigator.share){
            fetch(`./assets/alphabet_images/${alphabet}.png`)
            .then(response => response.blob())
            .then(blob => {
                const file = new File([blob], `${alphabet}.png`, { type: 'image/png' });
                // navigator.share({ files: [file] });
                const shareData = {
                    title: `*${alphabet}* for *${words[i - 65]}*`,
                    files: [file],
                    url: url,
                    text: `*${alphabet}* for *${words[i - 65]}*
                    Click to see more Alphabet Art`
                }
                navigator.share(shareData)
            })
        }
        else {
            tooltip.style.visibility = "visible"
            setTimeout(() => {
                tooltip.style.visibility = "hidden"
            }, 1000)

            navigator.clipboard.writeText(url)
        }
    })

    //Show front card on click
    card.addEventListener("click", () => {
        card.classList.toggle("flipped");
        if (card.classList.contains("flipped")) {
            msg.text = words[i - 65];
            window.speechSynthesis.speak(msg);
        }
    })

    // Animate star icon on click
    soundIcon.addEventListener("click", (event) => {
        soundIcon.classList.add("fa-beat");
        window.speechSynthesis.speak(msg);
        event.stopPropagation();
    })

    soundIcon.addEventListener("mouseleave", (event) => {
        soundIcon.classList.remove("fa-beat");
        event.stopPropagation();
    })

    //Color the heart red when user clicks like
    likeIcon.addEventListener("click", (event) => {
        likeIcon.classList.toggle("fa-solid");
        likeIcon.style.color = "red";
        event.stopPropagation();
    })

    //heart beat on hover
    likeIcon.addEventListener("mouseover", (event) => {
        likeIcon.classList.add("fa-bounce");
        event.stopPropagation();
    })
    likeIcon.addEventListener("mouseleave", (event) => {
        likeIcon.classList.remove("fa-bounce");
        event.stopPropagation();
    })

    shareIcon.addEventListener("mouseover", (event) => {
        shareIcon.classList.add("fa-fade");
        event.stopPropagation();
    })

    shareIcon.addEventListener("mouseleave", (event) => {
        shareIcon.classList.remove("fa-fade");
        event.stopPropagation();
    })

    shareIcon.addEventListener("click", (event) => {
        event.stopPropagation();
    })

}

// Give design background to back of each alphabet card
let allBackCards = document.querySelectorAll(".backCard");
let patterns = ["pattern1", "pattern2", "pattern3",
    "pattern4", "pattern5", "pattern6"];

let j = 0;
allBackCards.forEach((backCard) => {
    if (j > 5)
        j = 0;
    backCard.classList.add(patterns[j]);
    j++;
})