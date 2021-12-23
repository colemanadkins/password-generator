// Line below referencing the class #generate
var generateBtn = document.querySelector("#generate");
// Password criteria variables
var specialCharacters = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".",];
var numericCharacters = [0,1,2,3,4,5,6,7,8,9];
var lowerCasedCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var upperCasedCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
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
  // Else move forward 
  } else {
  var hasNumbers = confirm("Include Numbers?");
  var hasSpecialCharacters = confirm("Include special character?");
  var hasUpperCase = confirm("Include uppercase?");
  var hasLowerCase = confirm("Include lowercase?");
  }
  // If statement if no criteria has been chosen
  if (!hasNumbers && !hasSpecialCharacters && !hasUpperCase && !hasLowerCase) {
    choices = alert("You must choose a criteria!");
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
  // 1 Criteria chosen
  else if (hasNumbers) {
    choices = numericCharacters;
  }
  else if (hasSpecialCharacters) {
    choices = specialCharacters;
  }
  else if (hasUpperCase) {
    choices = upperCasedCharacters;
  }
  else if (hasLowerCase) {
    choices = lowerCasedCharacters;
  }
  // Initialize random password array
  var randomPassword = [];
  // Looping for the number of "characters" selected for the password length
  for (var i = 0; i < passwordLength; i++) {
    var pickChoices = choices[Math.floor(Math.random() *choices.length)];//Choosing the random character from choices array
    randomPassword.push(pickChoices);//Adding selected character to the random password array
  }
  var ps = randomPassword.join("");//Joining all character in the array to make one string
  return ps // Returns joined string to the writePassword function
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Does there need to be a prompt for misentering characters?
//

