// Global variables

var upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbericCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = [];

function getCharacterTypes ()
{
  // Get desired character types from user

  var lowerCaseAnswer = window.confirm("Would you like to use lowercase letters?");
  if (lowerCaseAnswer)
  {
    window.alert("You selected yes to use lowercase letters");
  }
  else
  {
    window.alert("You selected no to use lowercase letters");
  }

  var upperCaseAnswer = window.confirm("Would you like to use uppercase letters?");
  if (upperCaseAnswer)
  {
    window.alert("You selected yes to use uppercase letters");
  }
  else
  {
    window.alert("You selected no to use uppercase letters");
  }

  var numericAnswer = window.confirm("Would you like to use numeric values?");
  if (numericAnswer)
  {
    window.alert("You selected yes to use numeric characters");
  }
  else
  {
    window.alert("You selected no to use numeric characters");
  }

  var specialCharacterAnswer = window.confirm("Would you like to use special characters");
  if (specialCharacterAnswer)
  {
    window.alert("You selected yes to use special characters");
  }
  else
  {
    window.alert("You selected no to use special characters");
  }

  return {lowerCaseAnswer, upperCaseAnswer, numericAnswer, specialCharacterAnswer};
}






function generatePassword()
{
  // Get desired number of characters from user
  // Need to check for non numeric inputs
  do
  {
    var charCount = window.prompt("How many characters should the password be?");

    // Convert string to number
    //Number(charCount);
    
  }
  while (charCount < "8" && charCount > "128");

  // Call getCharacterTypes function to get Boolean values
  var characterTypesAnswers = getCharacterTypes();

}









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