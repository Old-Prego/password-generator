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

//Generate Arrays
function genArray(first,last){
  var numArray = [];
  var x = first;
  for (x; x <= last; x++){
    numArray.push(x);
  }
  return numArray;
}

var lowCharArr = genArray(97,122);
var capCharArr = genArray(65,90);
var numCharArr = genArray(48, 57);
var speCharArr = genArray(33,47).concat(genArray(58,64)).concat(genArray(91,96)).concat(genArray(123,126));


function generatePassword(){
  var charCount = prompt("How many characters do you want? (Between 8 and 128)");
  var bCapitalChar = window.confirm("Would you like capitalized characters?");
  var bNumberChar = window.confirm("Would you like numbers?");
  var bSpecialChar = window.confirm("Would you like special characters?");

  var arraySelector = 0;
  var passChar = [];
  var code = lowCharArr[Math.floor(Math.random() * lowCharArr.length)];
  passChar.push(String.fromCharCode(code));

  if(bCapitalChar){
    arraySelector++;
    code = capCharArr[Math.floor(Math.random() * lowCharArr.length)];
    passChar.push(String.fromCharCode(code));
  }
  if(bNumberChar){
    arraySelector++;
    code = numCharArr[Math.floor(Math.random() * lowCharArr.length)];
    passChar.push(String.fromCharCode(code));
  }
  if(bSpecialChar){
    arraySelector++;
    code = speCharArr[Math.floor(Math.random() * lowCharArr.length)];
    passChar.push(String.fromCharCode(code));
  }

  var i = 0;
  for (i; i < charCount; i++){
    var arrChoose = Math.floor(Math.random() * arraySelector);

    switch(arrChoose){
      case 0:
        // Placeholder
        code = lowCharArr[Math.floor(Math.random() * lowCharArr.length)];
        passChar.push(String.fromCharCode(code));
        break;
      case 1:
        // Placeholder
        code = capCharArr[Math.floor(Math.random() * lowCharArr.length)];
        passChar.push(String.fromCharCode(code));
        break;
      case 2:
        // Placeholder
        code = numCharArr[Math.floor(Math.random() * lowCharArr.length)];
        passChar.push(String.fromCharCode(code));
        break;
      case 3: 
        // Placeholder
        code = speCharArr[Math.floor(Math.random() * lowCharArr.length)];
        passChar.push(String.fromCharCode(code));
        break;
    }
  }
}

//// TODO: Set up prompts
//// TODO: Set up character arrays
// TODO:  Could I do this with math.random and randomizing over 4 different random statements instead?
// TODO:  No, because certain arrays are separated and have a different base value than just 0.

// TODO: Randomly Choose from arrays based on how many characters are requested
// TODO: Guarantee that at least one of each selected character type is included
// TODO:  Maybe check if I can loop once through each array first and then at the end shuffle them.
// TODO:  Use Fisher-Yates shuffle, which is apparently the standard. 