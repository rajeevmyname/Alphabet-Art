let head = document.getElementById("header")
let header = `
<div class="logo">
    <img src="https://placehold.co/250x100/red/white?text=Logo" alt="Logo">
</div>

<nav>
    <div>
        <a href="stickers/index.html"><img src="../assets/navImages/sticker.png" alt="Stickers"></a>
        <p>Stickers</p>
    </div>
    <div>
        <a href="workshop/index.html"><img src="../assets/navImages/workshop.png" alt="Workshop"></a>
        <p>Workshop</p>
    </div>
    <div>
        <a href="contest/index.html"><img src="../assets/navImages/contest.png" alt="Contest"></a>
        <p>Contest</p>
    </div>
</nav>`
head.innerHTML = header
