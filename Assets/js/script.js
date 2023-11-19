const input = {};
let password = "";

var generateBtn = document.querySelector("#generate");

// Simple helper function to concantenate strings
function concatString(x, y) {
  return x.concat(y);
}

// Gives the user a series of prompts to get their input then stores as an input object
function getUserInput() {
  input.length = parseInt(prompt("How many characters? (8-128)"));
  if (input.length < 8 || input.length > 128) {
    alert("Please enter a number between 8 and 128.");
    return;
  }
  input.isLowercase = confirm("Do you want to include lowercase letters?");
  input.isUppercase = confirm("Do you want to include uppercase letters?");
  input.isSpecial = confirm("Do you want to include special characters?");
  input.isNumber = confirm("Do you want to include numbers?");
  return input;
}

// Creates a custom pool of potential characters for the password based on the user's input
function characterPool() {
  getUserInput();
  const allLowercase = "abcdefghijklmnopqrstuvwxyz";
  const allUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const allSpecial = "#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  const allNumber = "0123456789";
  let tempString = "";
  if (input.isLowercase) {
    tempString = concatString(tempString, allLowercase);
  }

  if (input.isUppercase) {
    tempString = concatString(tempString, allUppercase);
  }

  if (input.isSpecial) {
    tempString = concatString(tempString, allSpecial);
  }

  if (input.isNumber) {
    tempString = concatString(tempString, allNumber);
  }
  // alerts the user to enter at least one parameter if they have not selected any
  if (!input.isLowercase && !input.isUppercase && !input.isSpecial && !input.isNumber) {
    alert("Please enter at least one parameter to generate password.");
  }
  return tempString;
}

// generates password by randomly choosing characters from the pool of potential characters
// limited by the requested length of the password
function generatePassword() {
  let characterString = characterPool();
  for (let i = 0; i < input.length; i++) {
    password = concatString(password, (characterString[(Math.floor(Math.random() * characterString.length))]));
  }
  return password;
}

// Writes password to the #password text box
function writePassword() {
  password = generatePassword();
  document.querySelector("#password").textContent = password;
}