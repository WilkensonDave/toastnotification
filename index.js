"use strict"

const icons = {
    success:"<span class='toast-icon'>Success✅</span>",
    danger: "<span class='toast-icon'>Failed💀</span>",
    info:"<span class='toast-icon'>info☀</span>",
    warning:"<span class='toast-icon'>Warning⚠</span>"
}


const showMessage = (type="info", message="successfuly", duration= 5000) =>{

    if(!Object.keys(icons).includes(type)){
        type="info"
    }

    let divEl = document.createElement("div");
    divEl.classList.add("toast", `toast-${type}`);
    divEl.innerHTML = `<div class="toast-content-wrapper">
    <div class="toast-${icons[type]}">${icons[type]}</div>
    <div class="toast-message">${message}</div>
    <div class="toast-progress"></div>
    </div>`

    duration = duration || 5000
    let progress = divEl.querySelector(".toast-progress");
    progress.style.animationDuration = `${duration / 1000}s`

    let toast = document.body.querySelector(".toast");
    if(toast){
        toast.remove();
    }

    document.body.appendChild(divEl);
}

let success = document.querySelector(".success-toast");
let failed = document.querySelector(".danger-toast");
let information = document.querySelector(".info-toast");
let warning = document.querySelector(".warning-toast");

success.addEventListener("click", (e) =>{
    e.preventDefault();
    showMessage("success", "Form has been successfully submitted", 5000);
});


failed.addEventListener("click", (e) =>{
    e.preventDefault();
    showMessage("danger", "Message has been failed!!", 5000);
});

information.addEventListener("click", (e) =>{
    showMessage("info", "Unsuccessful!!", 5000);
});


warning.addEventListener("click", (e) =>{
    e.preventDefault();
    showMessage("warning", "Bad request", 5000);
})

