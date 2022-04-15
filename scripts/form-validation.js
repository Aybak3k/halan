// Temp
// name.value === '' || == null


// Vars
const passwd = document.querySelector("#passwd")
const confirmPasswd = document.querySelector("#confirm-passwd")
const signupForm = document.querySelector("#signup-form")


// $
signupForm.addEventListener("submit", e => {
    if (passwd.value != confirmPasswd.value) {
        e.preventDefault()
        alert("Passwords Don't Match")  // send them in a beautiful way @4:05
    }
})
