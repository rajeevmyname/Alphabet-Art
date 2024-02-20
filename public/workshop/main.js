import workshops from './dates.json' assert {type: 'json'}

let table = document.querySelector("table");

workshops.forEach((workshop, index)=>{
    let tr = document.createElement("tr");
    table.appendChild(tr);

    Object.keys(workshop).forEach((data)=>{
        let td = document.createElement("td");
        td.innerText = workshop[data];
        tr.appendChild(td);
    })

    let button = document.createElement("td");
    button.innerHTML = 
    `<div class="call-to-action">
        <button class="pushable">
            <span class="register">Register</span>
        </button>
    </div>`
    tr.appendChild(button);

    button.addEventListener("click",(e)=>{
        window.location.href = `./register.html?w=${index}`
    })
})