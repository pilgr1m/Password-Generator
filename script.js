// const lowerCase = "abcdefghijklmnopqrstuvwxyz";
// const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const numbers = "0123456789";
// const symbols = "!@#$%^&*()_+?<>:{}[]";

const input = document.getElementById("password")
const copy = document.getElementById("copy")
const tooltip = document.getElementById("tooltip")
const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+?<>:{}[]"
const timeout = setTimeout(() => tooltip.innerHTML = "Copy to clipboard", 2000)


function generatePassword() {
    console.log(input.value === false)
    let password = ""
    for (let i = 0; i < 16; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length)
        console.log(randomNumber)
        password += chars.substring(randomNumber, randomNumber + 1)
    }
    input.value = password
}

function cleanPassword() {
    let password = ""
    input.value = password
}

// function checkValue() {
//     if (input.value === "") {
//         tooltip.innerHTML = "Nothing to copy"
//         setTimeout(() => tooltip.innerHTML = "Copy to clipboard", 2000)
//         return
//     }
// }

function copyToClipboard() {

    if (input.value === "") {
        tooltip.innerHTML = "✕ Nothing to copy"
        setTimeout(() => tooltip.innerHTML = "Copy to clipboard", 2000)
        return
    }
    input.focus()
    input.select()
    document.execCommand("copy")
    tooltip.innerHTML = "✓ Copied"
    setTimeout(() => tooltip.innerHTML = "Copy to clipboard", 2000)
}



