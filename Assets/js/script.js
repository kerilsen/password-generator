const input = {};
var generateBtn = document.querySelector("#generate");

function concatString(x, y) {
  return x.concat(y);
}

function getUserInput() {
  input.length = parseInt(prompt("How many characters? (8-128)"));
  input.isLowercase = confirm("Do you want to include lowercase letters?");
  input.isUppercase = confirm("Do you want to include uppercase letters?");
  input.isSpecial = confirm("Do you want to include special characters?");
  input.isNumber = confirm("Do you want to include numbers?");
  return input;
}

function characterPool() {
  getUserInput();
  const allLowercase = "abcdefghijklmnopqrstuvwxyz";
  const allUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const allSpecial = "#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  const allNumber = "0123456789";
  var tempString = "";
  if (input.isLowercase === true) {
    tempString = concatString(tempString, allLowercase);
    console.log("tempString is " + tempString);
  }

  if (input.isUppercase === true) {
    tempString = concatString(tempString, allUppercase);
    console.log("tempString is " + tempString);
  }

  if (input.isSpecial === true) {
    tempString = concatString(tempString, allSpecial);
    console.log("tempString is " + tempString);
  }

  if (input.isNumber === true) {
    tempString = concatString(tempString, allNumber);
    console.log("tempString is " + tempString);
  }
  if (input.isLowercase == false && input.isUppercase == false && input.isSpecial == false && input.isNumber == false) {
    alert("Please enter at least one parameter to generate password.")
  }
  console.log("Complete tempString is " + tempString);
  return tempString;
}

function generatePassword() {
  let characterString = characterPool();
  let tempPassword = "";
  for (let i = 0; i < input.passwordLength; i++) {
    tempPassword = concatString(tempPassword, (characterString[(Math.floor(Math.random() * characterString.length))]));
    console.log(tempPassword);
  }
  return tempPassword;
}

// Write password to the #password input
function writePassword() {
  // let password = generatePassword();
  document.getElementById("#password").textContent = generatePassword();

  // document.getElementById("#password").value = password;
  // document.querySelector("#tip-amount").textContent = tipAmount;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
