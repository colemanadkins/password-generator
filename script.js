// Assignment Code
// Line below referencing the class #generate
var generateBtn = document.querySelector("#generate");
// Password criteria variables
var specialCharacters = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".",];
var numericCharacters = ["0123456789"];
var lowerCasedCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var upperCasedCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var confirmSpecialCharacters;
var confirmNumericCharacters;
var confirmLowerCasedCharacters;
var confirmUpperCasedCharacters;
var choices;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var passwordLength = prompt("Please enter password length between 8-128 characters")
  console.log(passwordLength);
// Add if statement for not meeting password requirements
  if (passwordLength <8 || passwordLength >128) {
   prompt("Please enter 8-128 characters");

  } else {
  var hasNumbers = confirm("Include Numbers?");
  console.log(hasNumbers);
  var hasSpecialCharacters = confirm("Include special character?");
  console.log(hasSpecialCharacters);
  var hasUpperCase = confirm("Include uppercase?");
  console.log(hasUpperCase);
  var hasLowerCase = confirm("Include lowercase?");
  console.log(hasLowerCase);
  };
  // If statement if no criteria has been chosen
  if (!hasNumbers && !hasSpecialCharacters && !hasUpperCase && !hasLowerCase) {
    choices = alert("You mush choose a criteria!");
  }
  //All 4 criteria have been chosen
  else if (hasNumbers && hasSpecialCharacters && hasUpperCase && hasLowerCase) {
    choices = numericCharacters.concat(specialCharacters, upperCasedCharacters, lowerCasedCharacters);
  }
  //3 criteria have been chosen
  else if (hasNumbers && hasSpecialCharacters && hasUpperCase) {
    choices = numericCharacters.concat(specialCharacters, upperCasedCharacters);
  }
  else if (hasNumbers && hasSpecialCharacters && hasLowerCase) {
    choices = numericCharacters.concat(specialCharacters, lowerCasedCharacters);
  }
  else if (hasNumbers && hasUpperCase && hasLowerCase) {
    choices = numericCharacters.concat(upperCasedCharacters, lowerCasedCharacters);
  }
  else if (hasSpecialCharacters && hasUpperCase && hasLowerCase) {
    choices = specialCharacters.concat(upperCasedCharacters, lowerCasedCharacters);
  }  
    //2 Criteria have been chosen
  else if (hasNumbers && hasSpecialCharacters) {
    choices = numericCharacters.concat(specialCharacters);
  }
  else if (hasNumbers && hasUpperCase) {
    choices = numericCharacters.concat(upperCasedCharacters);
  }
  else if (hasNumbers && hasLowerCase) {
    choices = numericCharacters.concat(lowerCasedCharacters);
  }  
  else if (hasSpecialCharacters && hasUpperCase) {
    choices = specialCharacters.concat(upperCasedCharacters);
  }
  else if (hasSpecialCharacters && hasLowerCase) {
    choices = specialCharacters.concat(upperCasedCharacters);
  }
  else if (hasUpperCase && hasLowerCase) {
    choices = upperCasedCharacters.concat(lowerCasedCharacters);
  }
  }
  }





  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// See Note1





// Testing Section
