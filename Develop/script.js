// Assignment code here

// Arrays
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "/", "-", "+", "~"];
var passwordLength;
var passwordArray = [];

// Prompt for password length
function userInformation() {
  passwordLength = parseInt(prompt("How many characters would you like for your password?"));
  while (passwordLength < 8 || passwordLength > 128) {
    alert("Incorrect number of character for your password. Enter a number between 8-128.");
    passwordLength = parseInt(prompt("How many characters would you like for your password?"));
  }
  alert("Your password will have " + passwordLength + " characters.");

  var hasLowerCase = confirm("Your password must contain a lower case character. Click OK.");
  var hasUpperCase = confirm("Your password must contain an upper case character. Click OK.");
  var hasNumber = confirm("Your password must contain a number. Click OK.");
  var hasSpecialCharacter = confirm("Your password must contain a special character. Click OK.");
  // Conditional statement to make sure they make a choice
  if (hasLowerCase === false &&
    hasUpperCase === false &&
    hasNumber === false &&
    hasSpecialCharacter === false) {
    alert("Approve having a character from each special condition.");
    return;
  }

  var passwordRequirements = {
    length: passwordLength,
    hasLowerCase: hasLowerCase,
    hasUpperCase: hasUpperCase,
    hasNumber: hasNumber,
    hasSpecialCharacter: hasSpecialCharacter,
  };

  return passwordRequirements;
}

function randomPassword(array) {
  var random = Math.floor(Math.random() * array.length);
  var random1 = array[random];

  return random1;
}


function generatePassword() {
  var userInfo = userInformation();
  var passwordOptions = [];
  if (userInfo.hasLowerCase) {
    passwordOptions = passwordOptions.concat(lowerCase);
  }
  if (userInfo.hasUpperCase) {
    passwordOptions = passwordOptions.concat(upperCase);
  }
  if (userInfo.hasNumber) {
    passwordOptions = passwordOptions.concat(number);
  }
  if (userInfo.hasSpecialCharacter) {
    passwordOptions = passwordOptions.concat(specialCharacter);
  }
  for (var i = 0; i < userInfo.length; i++) {
    passwordArray.push(randomPassword(passwordOptions));
  }
  return passwordArray.join("");
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
