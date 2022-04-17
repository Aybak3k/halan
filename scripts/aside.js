document.querySelector("button#My-Account").addEventListener("click", _ => {
    document.querySelector("aside").classList.toggle("shown")
    document.querySelector("#arrow").classList.toggle("open")
})