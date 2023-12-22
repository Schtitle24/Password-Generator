// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); // define generate password function which asks the user their deets 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// define variables we will need to generate my user's password
var passLength; // password length
var conLower; // confirm lowercase
var conUpper; // confirm uppercase
var conSpecial; // confirm special characters
var conNum; // confirm password character number
var userOpt; // all of the users options
var arayAll; // Placeholder for generated characters
var passcode; // Houses the final generated string

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8 ,9];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Z"];


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generateBtn.addEventListener("click", function(){ });

//this will define my user's character length desired for their password
function generatePassword(){
  passLength = parseInt(prompt("Please choose your password character length from 8-128"));
    if (passLength < 8 || passLength > 128) {
      passLength = parseInt(prompt("You must choose a character length from 8-128"));
    } else {
      console.log(passLength);
      //these parts of the function will collect the T/F of my booleans
      conLower = confirm("Would you like to use lower case letters?");
      console.log(conLower);
      conUpper = confirm("Would you like to use Upper case letters?");
      console.log(conUpper);
      conSpecial = confirm("Would you like to special characters?");
      console.log(conSpecial);
      conNum = confirm("Would you like to use numbers?");
      console.log(conNum);
    }
    //No Answers Given To Booleans
    if (!conLower && !conUpper && !conSpecial && !conNum) {
      userOpt = alert("Please select at least one character type!");
    }
    
    //If user includes all criteria
    else if (conNum && conLower && conUpper && conSpecial) {
      userOpt = numbers.concat(lowerCase, upperCase, special);
    }
    //If user includes 3 out of 4 criteria
    else if ( conNum && conLower && conUpper) {
      userOpt = numbers.concat(lowerCase, upperCase);
    }
    else if ( conNum && conLower && conSpecial) {
      userOpt = numbers.concat(lowerCase, special);
    }
    else if ( conNum && conSpecial && conUpper) {
      userOpt = numbers.concat(special, upperCase);
    }
    else if ( conSpecial && conUpper && conNum) {
      userOpt = special.concat(upperCase, numbers);
    }
    else if ( conSpecial && conUpper && conLower) {
      userOpt = special.concat(upperCase, lowerCase);
    }
    // If user includes 2 out of 4 criteria
    else if ( conSpecial && conUpper) {
      userOpt = special.concat(upperCase);
    }
    else if ( conSpecial && conLower) {
      userOpt = special.concat(lowerCase);
    }
    else if ( conSpecial && conNum) {
      userOpt = special.concat(numbers);
    }
    else if ( conUpper && conLower) {
      userOpt = upperCase.concat(lowerCase);
    }
    else if ( conUpper && conNum) {
      userOpt = upperCase.concat(numbers);
    }
    else if ( conLower && conUpper) {
      userOpt = lowerCase.concat(upperCase);
    }
    // If user includes 1 out of 4 criteria
    else if ( conLower ) {
      userOpt = lowerCase;
    }
    else if ( conUpper ) {
      userOpt = upperCase;
    }
    else if ( conSpecial ) {
      userOpt = special;
    }
    else if ( conNum) {
      userOpt = numbers;
    };

    console.log(userOpt);
  //This is a variable for the password length that will be defined by the user above. 
  var passNone = [];
  //This for loop will generate the random selection from the user criteria provided. 
  for (var i = 0; i < passLength; i++) {
    var arayAll = userOpt[Math.floor(Math.random() * userOpt.length)];
    passNone.push(arayAll);
  }

  //join the array into a single string to be generated as the password and return it to the text box. 
  passcode = passNone.join("");

  return passcode;
}
