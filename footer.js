let footer = document.getElementById("footer")
let footerContent = 
`
<div id="tag">
    <a href="https://sajhesapne.org/">
        <span>Made with <i class="fa-solid fa-heart" style="color: #ff8787;"></i> by Sapnewaalis!</span>
    </a>
</div>

<div id="footer-links">
    <div class="social-media">
        <span>Follow Us</span>
    <ul>
        <li><img src="./assets/social/fb.png" alt="Facebook"></li>
        <li><img src="./assets/social/insta.png" alt="Instagram"></li>
        <li><img src="./assets/social/you.png" alt="Youtube"></li>
        <li><img src="./assets/social/in.png" alt="LinkedIn"></li>
        <li><img src="./assets/social/x.png" alt="X"></li>
    </ul>
    </div>
    <div class="links">
    <ul>
        <li>Contact Us</li>
        <li>Terms Of Use</li>
        <li>Report A Bug</li>
        <li>Hire a Sapnewaali</li>
        <li>Make a Donation</li>
    </ul>
    </div>
</div>`
footer.innerHTML = footerContent;