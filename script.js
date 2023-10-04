// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
var symbols = '!@#$%^&*()_+';

// Write password to the #password input
function writePassword() {

  var password = getUserSelection();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;  
}

function getUserSelection() {

  var userLength = window.prompt('Please choose password length between 8 and 128 characters');
 
// verify if userlength is a number between 8 and 128 characters.

  if (isNaN(userLength) || userLength < 8 || userLength > 128) {
    window.alert('Please choose password length between 8 and 128 characters');
    getUserSelection();
  }
  // send user a confrmirmation for each character type to include in the password.
   var selectLower = window.confirm('Would you like to include lowercase characters?');
   var selectUpper = window.confirm('Would you like to include uppercase characters?');
   var selectSymbols = window.confirm('Would you like to include symbol characters?');
   var selectNumbers = window.confirm('Would you like to include numbers?'); 
   var result ='';
   var possibles = '';
// sends user alert prompt to choose at least one of the passwords criteria.
   if(selectLower == false &&
      selectUpper == false &&
      selectSymbols == false &&
      selectNumbers == false) {
        window.alert('Please choose at least one criteria to generate your password.')
        getUserSelection()
   }
// generates random character if user selects confirm on prompted criteria.
   if(selectLower == true) {
    possibles += lowerCase;
   }
   if(selectUpper == true) {
    possibles += upperCase;
   }
   if(selectSymbols == true) {
    possibles += symbols;
   }
   if(selectNumbers == true) {
    possibles += numbers;
   }
  
   for (var i = 0; i < userLength; i++) {
   result += (possibles[Math.floor(Math.random()*(possibles.length - 1))])
   } 

   return result;
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// When the user clicks on the generate button, they are presented with a series of prompts.

// First prompt is asked for the password length.

// When prompted for password crtiera, user selects which criteria they would like to use.

// The user will confirm that they would like to include lowercase, uppercase, numbers, or special characters.

// The user has to select at least one character type.

// After the user has selected at least one character type, the password is generated.
