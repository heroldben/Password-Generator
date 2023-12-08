const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let input1El = document.getElementById("input1-el")
let input2El = document.getElementById("input2-el")
let input3El = document.getElementById("input3-el")
let input4El = document.getElementById("input4-el")
let passwordLength = document.querySelector(".slider")
let lengthEl = document.getElementById("length-el")

passwordLength.addEventListener('input', updateLength);

function updateLength(){
    length = passwordLength.value
    lengthEl.textContent = length
}


function randomPassword(){
    updateLength()
    let password = ""
    for(let i = 0; i < length; i++){
        let character = characters[Math.floor(Math.random() * characters.length)]
        password += character
    }
    return password
}
console.log(randomPassword())

function generatePassword(){
    input1El.textContent = randomPassword()
    input2El.textContent = randomPassword()
    input3El.textContent = randomPassword()
    input4El.textContent = randomPassword()
}
