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

function fisherShuffle(array){
  var m = array.length;
  var t;
  var i;

  // While there are still values in the original array
  while (m) {

    // Select an array value
    i = Math.floor(Math.random() * m--);

    // Swap it with the currently selected element;
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

function generatePassword(){
  var charCount = prompt("How many characters do you want? (Between 8 and 128)");
  if(charCount > 128 || charCount < 8){
    window.alert("This number of characters is not within the allowed limits: " + charCount);
    return;
  }
  var bCapitalChar = window.confirm("Would you like capitalized characters?");
  var bNumberChar = window.confirm("Would you like numbers?");
  var bSpecialChar = window.confirm("Would you like special characters?");

  var arraySelector = [];
  arraySelector.push(0);
  var passChar = [];
  var code = lowCharArr[Math.floor(Math.random() * lowCharArr.length)];
  passChar.push(String.fromCharCode(code));

  if(bCapitalChar){
    arraySelector.push(1);
    code = capCharArr[Math.floor(Math.random() * capCharArr.length)];
    passChar.push(String.fromCharCode(code));
  }
  if(bNumberChar){
    arraySelector.push(2);
    code = numCharArr[Math.floor(Math.random() * numCharArr.length)];
    passChar.push(String.fromCharCode(code));
  }
  if(bSpecialChar){
    arraySelector.push(3);
    code = speCharArr[Math.floor(Math.random() * speCharArr.length)];
    passChar.push(String.fromCharCode(code));
  }
  charCount = charCount - 4;

  var i = 0;
  for (i; i < charCount; i++){
    var arrRand = Math.floor(Math.random() * arraySelector.length);
    var arrChoose = arraySelector[arrRand];

    switch(arrChoose){
      case 0:
        // Placeholder
        code = lowCharArr[Math.floor(Math.random() * lowCharArr.length)];
        passChar.push(String.fromCharCode(code));
        break;
      case 1:
        // Placeholder
        code = capCharArr[Math.floor(Math.random() * capCharArr.length)];
        passChar.push(String.fromCharCode(code));
        break;
      case 2:
        // Placeholder
        code = numCharArr[Math.floor(Math.random() * numCharArr.length)];
        passChar.push(String.fromCharCode(code));
        break;
      case 3: 
        // Placeholder
        code = speCharArr[Math.floor(Math.random() * speCharArr.length)];
        passChar.push(String.fromCharCode(code));
        break;
    }

  }

  fisherShuffle(passChar);
  

}

//// TODO: Set up prompts
//// TODO: Set up character arrays
// TODO:  Could I do this with math.random and randomizing over 4 different random statements instead?
// TODO:  No, because certain arrays are separated and have a different base value than just 0.
// TODO: Check if between 8 and 128

// TODO: Randomly Choose from arrays based on how many characters are requested
// TODO: Guarantee that at least one of each selected character type is included
// TODO:  Maybe check if I can loop once through each array first and then at the end shuffle them.
// TODO:  Use Fisher-Yates shuffle, which is apparently the standard. 