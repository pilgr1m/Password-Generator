// const lowerCase = "abcdefghijklmnopqrstuvwxyz";
// const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const numbers = "0123456789";
// const symbols = "!@#$%^&*()_+?<>:{}[]";

function getPassword() {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+?<>:{}[]";
    // всередине функ чтоб обнулся инпут при новом нажатии
    let password = "";

//икл для 16 повторений - 16-и сгенерированных символов пароля
for (let i = 0; i < 16; i++) {
    //рандом число (генерится с помощью длины chars)
    let randomNumber = Math.floor(Math.random() * chars.length);
    console.log(randomNumber);
    // password = password + chars.substring(randomNumber, randomNumber + 1);
    //метод .substring(инд1,инд2) возращает подстроку с инд1 (включая его) до (конца строки) или до  инд2(необьязательный) (не включая его)
    password += chars.substring(randomNumber, randomNumber + 1);
}
document.getElementById("password").value = password;
}


// let one = "123456789";
// let two = one.substring(3,5);
// console.log(two);