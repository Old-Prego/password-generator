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

//Generate Arrays based on the range of numbers given.
function genArray(first,last){
  var numArray = [];
  var x = first;
  for (x; x <= last; x++){
    numArray.push(x);
  }
  return numArray;
}

// Sets initial arrays for different character sets.
var lowCharArr = genArray(97,122);
var capCharArr = genArray(65,90);
var numCharArr = genArray(48, 57);
var speCharArr = genArray(33,47).concat(genArray(58,64)).concat(genArray(91,96)).concat(genArray(123,126));

// Based on Fisher-Yates Shuffle.
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

// Main function for generating the password
function generatePassword(){

  // Various initial prompts to choose criteria.
  // First prompt for character numbers check if the user input really was between 8 and 128.
  // If I were to come back to this, I would want to do some data scrubbing to ensure that the user input was actually whole numbers.
  var charCount = prompt("How many characters do you want? (Between 8 and 128)");
  if(charCount > 128 || charCount < 8){
    window.alert("This number of characters is not within the allowed limits: " + charCount);
    return;
  }
  var bCapitalChar = window.confirm("Would you like capitalized characters?");
  var bNumberChar = window.confirm("Would you like numbers?");
  var bSpecialChar = window.confirm("Would you like special characters?");

  // Creates initial array for what values the program will be selecting from, fills it initially with lowercase character choice.
  var arraySelector = [];
  arraySelector.push(0);

  // Creates what will be the final array and adds the first lowercase value to it
  var passChar = [];
  var code = lowCharArr[Math.floor(Math.random() * lowCharArr.length)];
  passChar.push(String.fromCharCode(code));

  // Checks if the user chose to have the additional criteria, and if they did it adds that criteria to the selector.
  // This also adds one value of that criteria to the passChar array, to guarantee that at least one of each chosen character is present.
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

  // Subtracts the length of the selectors from the count so that the code doesn't end up with 1-3 extra characters than requested.
  charCount = charCount - arraySelector.length;

  // Main for loop to fill up the array.
  var i = 0;
  for (i; i < charCount; i++){

    // Chooses a random number from the arraySelector array
    var arrRand = Math.floor(Math.random() * arraySelector.length);
    var arrChoose = arraySelector[arrRand];

    // Selects which type of character to use
    switch(arrChoose){
      case 0:
        // Randomly selects based on the length of the array and adds it to the passChar array
        code = lowCharArr[Math.floor(Math.random() * lowCharArr.length)];
        passChar.push(String.fromCharCode(code));
        break;
      case 1:
        // Randomly selects based on the length of the array and adds it to the passChar array
        code = capCharArr[Math.floor(Math.random() * capCharArr.length)];
        passChar.push(String.fromCharCode(code));
        break;
      case 2:
        // Randomly selects based on the length of the array and adds it to the passChar array
        code = numCharArr[Math.floor(Math.random() * numCharArr.length)];
        passChar.push(String.fromCharCode(code));
        break;
      case 3: 
        // Randomly selects based on the length of the array and adds it to the passChar array
        code = speCharArr[Math.floor(Math.random() * speCharArr.length)];
        passChar.push(String.fromCharCode(code));
        break;
    }

  }

  // Calls the shuffle function on the array before turning it into a string.
  fisherShuffle(passChar);

  // Turns array into solid string and passes it back to previous function.
  return(passChar.join(""));

}

//// TODO: Set up prompts
//// TODO: Set up character arrays
//// TODO:  Could I do this with math.random and randomizing over 4 different random statements instead?
//// TODO:  No, because certain arrays are separated and have a different base value than just 0.
//// TODO: Check if between 8 and 128

// TODO: Randomly Choose from arrays based on how many characters are requested
// TODO: Guarantee that at least one of each selected character type is included
// TODO:  Maybe check if I can loop once through each array first and then at the end shuffle them.
// TODO:  Use Fisher-Yates shuffle, which is apparently the standard. 