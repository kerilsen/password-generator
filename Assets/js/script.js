// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generate password function
// if lowercase selected, add lowercase array to password pool
// if uppercase selected, add uppercase array to password pool
// if numbers selected, add random number between 0-9
// if special characters selected, add special characters array to pool
// choose random index number from pool for each character

let randomLowercase = "abcdefghijklmnopqrstuvwxyz";
let randomUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let randomSpecial = "#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
let randomNumber = "0123456789";
let passwordLength = prompt("How many characters? (8-128)")

function concatString(x, y) {
  return x.concat(y);
}

function characterPool() {
  var characterString = "";
  if (randomLowercase === true) 
  {
    characterString = concatString(characterString, randomLowercase);
    console.log(characterString);
  }
  if (randomUppercase === true) 
  {
characterString = concatString(characterString, randomUppercase);
}
if (randomSpecial === true) 
{
  characterString = concatString(characterString, randomSpecial);
  console.log(characterString);
}
else if (randomNumber === true) 
{
characterString = concatString(characterString, randomNumber);
console.log(characterString);
}
if (randomLowercase == false && randomUppercase == false && randomSpecial == false && randomNumber == false) {
  alert("Please enter at least one parameter to generate password.")
}
  // if lowercase, append randomLowercase string;
  // if uppercase, append randomUppercase string;
  // if special character, append randomSpecial string;
  // if number selected, append randomNumber;
}

function generatePassword() {

for (let i=0; i < passwordLength; i++) 
  {
     (characterPool[(Math.floor(Math.random() * passwordLength))]);
  }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// When button clicked, user is given a series of prompts:

// Prompts for lowercase, uppercase, numeric and/or special characters
// How many characters do you need? (8-128)
// Do you want to include lowercase characters?
// Do you want to include uppercase characters?
// Do you want to include numbers?
// Do you want to include special characters?

// Error message if at least one character type not selected
// Generated password displayed in an alert or written to the page
