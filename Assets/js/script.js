

const allLower = "abcdefghijklmnopqrstuvwxyz";
const allUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const allNumbers = "0123456789";
const allSpecial = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
/*
const passwordLength = parseInt(prompt("How many characters? (8-128)"));
let isLowercase = confirm("Do you want to include lowercase letters?");
let isUppercase = confirm("Do you want to include uppercase letters?");
let isSpecial = confirm("Do you want to include special characters?");
let isNumber = confirm("Do you want to include numbers?");
let passwordString = "";
let passwordPool = "";
*/
function generatePassword() {
  // Add collection of all characters from each required parameter to pool of potential password characters
  // Populate password string with one character from each parameter to ensure that password includes at least one of each required parameter
  if (isLowercase) { passwordPool.concat(allLower); passwordString.concat(allLower[Math.floor(Math.random() * (allLower.length))]) };
  if (isUppercase) { passwordPool.concat(allUpper); passwordString.concat(allUpper[Math.floor(Math.random() * (allUpper.length))]) };
  if (isSpecial) { passwordPool.concat(allSpecial); passwordString.concat(allSpecial[Math.floor(Math.random() * (allSpecial.length))]) };
  if (isNumber) { passwordPool.concat(allNumbers); passwordString.concat(allNumbers[Math.floor(Math.random() * (allNumbers.length))]) };
  // If no parameters selected, throw an error message
  if ((!isLowercase) && (!isUppercase) && (!isSpecial) && (!isNumber)) { alert("Please enter at least one parameter to generate password.") };
  // Populate password string with remaining characters to reach the user's desired password length (input length - unique characters already included)
  for (let i = 0; i++; i < (passwordLength - passwordPool.length)) {
    passwordString.concat(passwordPool[Math.floor(Math.random() * passwordPool.length)]);
    console.log(passwordString);
  }
  return passwordString;
}

console.log(generatePassword());