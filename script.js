// Assignment Code
// Line below referencing the class #generate
var generateBtn = document.querySelector("#generate");

// Character Arrays
var specialCharacters = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".",];

var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var lowerCasedCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var upperCasedCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passwordLength = prompt("Enter the length of your password")
  console.log(passwordLength);

  var hasNumbers = confirm("Include Numbers?");
  console.log(hasNumbers);

  var hasSpecialCharacters = confirm("Include special character?");
  console.log(hasSpecialCharacters);

  var hasUpperCase = confirm("Include uppercase?");
  console.log(hasUpperCase);

  var hasLowerCase = confirm("Include lowercase?");
  console.log(hasLowerCase);

  // Must rewrite hardcode the value that returns
  return 'Hello1234*2018#'
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
