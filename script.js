// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




function generatePassword(){

}

// TODO: Set up prompts
// TODO: Set up character arrays
// TODO: Randomly Choose from arrays based on how many characters are requested
// TODO: Guarantee that at least one of each selected character type is included
// TODO:  Maybe check if I can loop once through each array first and then at the end shuffle them.
// TODO:  Use Fisher-Yates shuffle, which is apparently the standard. 