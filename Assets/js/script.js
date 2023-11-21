const input = {};

var generateBtn = document.querySelector("#generate");

// Simple helper function to concantenate strings
function concatString(x, y) {
  return x.concat(y);
}

// Simple helper function to get random integer
function getRandomInt(n) {
  return Math.floor(Math.random() * n);
}

// Helper function to shuffle characters in a string
// Shuffles the "seeded" password to truly randomize it
// Shuffle algorithm from codespeedy.com
function shuffle(x) {
  let arr = x.split('');
  let n = arr.length;
  for (let i = 0; i < n - 1; ++i) {
    let j = getRandomInt(n);
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  x = arr.join('');
  console.log("x= " + x);
  return x;
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
  let seedPassword = "";
  if (input.isLowercase) {
    tempString = concatString(tempString, allLowercase);
    seedPassword = concatString(seedPassword, (allLowercase[getRandomInt(allLowercase.length)]));
  }

  if (input.isUppercase) {
    tempString = concatString(tempString, allUppercase);
    seedPassword = concatString(seedPassword, (allUppercase[getRandomInt(allUppercase.length)]));
  }

  if (input.isSpecial) {
    tempString = concatString(tempString, allSpecial);
    seedPassword = concatString(seedPassword, (allSpecial[getRandomInt(allSpecial.length)]));
  }

  if (input.isNumber) {
    tempString = concatString(tempString, allNumber);
    seedPassword = concatString(seedPassword, (allNumber[getRandomInt(allNumber.length)]));
  }
  // Alerts the user to enter at least one parameter if they have not selected any
  if (!input.isLowercase && !input.isUppercase && !input.isSpecial && !input.isNumber) {
    alert("Please enter at least one parameter to generate password.");
  }
  console.log("Seed password is: " + seedPassword);
  let seed = [seedPassword, tempString];
  return seed;
}

// Generates password by randomly choosing characters from the pool of potential characters
// Limited by the requested length of the password
function generatePassword() {
  let arr = characterPool();
  let tempPassword = arr[0];
  let characterString = arr[1];
  // how long is n?
  let n = input.length - tempPassword.length;
  for (let i = 0; i < n; i++) {
    tempPassword = concatString(tempPassword, (characterString[(Math.floor(Math.random() * characterString.length))]));
    console.log("Generating: " + tempPassword)
  }
  console.log("Generated password is: ", tempPassword);
  let temp = shuffle(tempPassword);
  console.log("Shuffled password is " + temp);
  console.log("Password length is " + temp.length);
  return temp;
}

// Clears text box when user presses clear button
function clearText() {
  document.querySelector("#password").textContent = '';
}

// Writes password to the #password text box
function writePassword() {
  let password = generatePassword();
  document.querySelector("#password").textContent = password;
}