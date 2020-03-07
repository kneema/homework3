//Definining variables from the html document
var passwordfinal = document.querySelector("#finalpassword");
var characterlength = document.querySelector("#length");
var lowercase = document.querySelector("#lowercase");
var uppercase = document.querySelector("#uppercase");
var numeric = document.querySelector("#numeric");
var special = document.querySelector("#special");
var none = document.querySelector("#none")
var form = document.querySelector("#form");
var button = document.querySelector("#button");

var lowercaseCharacters = "abcedefghijklmnopqrstuvwxyz";
var uppercaseCharacters = "ABCDEFGHIJKLMNOPRSTUVWXYZ";
var symbolCharacters = "!@#$%^&*()";
var numberCharacters = "0123456789";
var nocriteria = "abcedefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPRSTUVWXYZ!@#$%^&*()0123456789";

console.log("reached")

function randomOf(array) {
    return array.charAt(Math.floor(Math.random() * array.length));
}

function randomAll() {
    var characters = "";

    if (uppercase.checked) {
        characters += randomOf(uppercaseCharacters);
    }
    if (lowercase.checked) {
        characters += randomOf(lowercaseCharacters);
    }
    if (special.checked) {
        characters += randomOf(symbolCharacters);
    }
    if (numeric.checked) {
        characters += randomOf(numberCharacters);
    }
    if (none.checked) {
        characters += randomOf(nocriteria);
    }

console.log(characters);
    return randomOf(characters);
}

//Response to the form submit button
form.addEventListener("submit",function(){
    event.preventDefault();
});

button.addEventListener("click",function(){

console.log(characterlength.value);
var password = "";
for (var i = 0; i < characterlength.value; i++) {
    password += randomAll();
}
passwordfinal.innerText= password
console.log(password);
})


