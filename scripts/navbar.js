// TODOs
// display transition @geeks4geeks
// do TEMP


// DOM Elements
const burgerMenu = document.querySelector("#burger-menu")
const navUl = document.querySelector("#nav-list")  // header nav #nav-container ul
const subListEle = document.querySelector("nav ul li > a:not(:only-child)")
const dropdownUl = document.querySelector("ul#nav-dropdown")


// TEMP
navUl.classList.toggle("display-none")
dropdownUl.classList.toggle("display-none")


// REFed functions
const transformMain = ele => {
    ele.classList.toggle("active")
    navUl.classList.toggle("display-none")
}
const transformSub = _ => {
    dropdownUl.classList.toggle("display-none")
}


//  Adding && Handling Events
burgerMenu.addEventListener("click", _ => transformMain(burgerMenu))
subListEle.addEventListener("click", transformSub)
