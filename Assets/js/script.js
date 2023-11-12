const allLowercase = "abcdefghijklmnopqrstuvwxyz";
const allUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const allSpecial = "#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
const allNumber = "0123456789";

var generateBtn = document.querySelector("#generate");

let passwordLength = parseInt(prompt("How many characters? (8-128)"));
let isLowercase = confirm("Do you want to include lowercase letters?");
let isUppercase = confirm("Do you want to include uppercase letters?");
let isSpecial = confirm("Do you want to include special characters?");
let isNumber = confirm("Do you want to include numbers?");

function concatString(x, y) {
  return x.concat(y);
}
// Generate pool of potential characters for password
// if lowercase selected, add lowercase string to potential character pool
// if uppercase selected, add uppercase string to potential character pool
// if special characters selected, add special characters to potential character pool
// if numbers selected, add numbers to potential character pool
// if no parameters selected, throw an error message

function characterPool() {
  var tempString = "";
  if (isLowercase === true) {
    tempString = concatString(tempString, allLowercase);
    // console.log for testing purposes
    console.log("tempString is " + tempString);
  }

  if (isUppercase === true) {
    tempString = concatString(tempString, allUppercase);
    console.log("tempString is " + tempString);
  }

  if (isSpecial === true) {
    tempString = concatString(tempString, allSpecial);
    console.log("tempString is " + tempString);
  }

  if (isNumber === true) {
    tempString = concatString(tempString, allNumber);
    console.log("tempString is " + tempString);
  }
  if (isLowercase == false && isUppercase == false && isSpecial == false && isNumber == false) {
    alert("Please enter at least one parameter to generate password.")
  }
  console.log("Complete tempString is " + tempString);
  return tempString;
}

characterString = characterPool();

function generatePassword() {
  let tempPassword = "";
  for (let i = 0; i < passwordLength; i++) {
    tempPassword = concatString(tempPassword, (characterString[(Math.floor(Math.random() * characterString.length))]));
    console.log(tempPassword);
  }
  return tempPassword;
}

console.log("Your password is: " + generatePassword());
/*
// Write password to the #password input
function writePassword() {
  document.getElementById("#password").value = generatePassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// When button clicked, user is given a series of prompts: */
