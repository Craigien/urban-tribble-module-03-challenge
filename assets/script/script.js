// Global variables

var upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numericCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ["!", "?", "@", "#"];

function getCharacterCount()
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

  return charCount;
}

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

  return [lowerCaseAnswer, upperCaseAnswer, numericAnswer, specialCharacterAnswer];
}






function generatePassword()
{
  // Get desired number of characters from user
  var charCount = getCharacterCount();
  console.log(charCount);

  // Call getCharacterTypes function to get Boolean values
  var characterTypesAnswers = getCharacterTypes();
  console.log(characterTypesAnswers);

  // Generate the password
  var passwordArray = [];

  for (var i = 0; i < charCount; i++)
  {
    //Choose character type
    if ((characterTypesAnswers[0]) && (characterTypesAnswers[1]) && (characterTypesAnswers[2]) && (characterTypesAnswers[3]))
    {
      console.log("True");
      // Gets random number between 0 and 3
      var characterType = Math.floor(Math.random() * 4)
      console.log("Character Type: " + characterType);

      if (characterType === 0)
      {
        var characterNumber = Math.floor(Math.random() * upperCaseCharacters.length);
        var character = upperCaseCharacters[characterNumber];
        console.log(character);
        passwordArray.push(character);
      }
      else if (characterType === 1)
      {
        var characterNumber = Math.floor(Math.random() * lowerCaseCharacters.length);
        var character = lowerCaseCharacters[characterNumber];
        console.log(character);
        passwordArray.push(character);
      }
      else if (characterType === 2)
      {
        var characterNumber = Math.floor(Math.random() * numericCharacters.length);
        var character = numericCharacters[characterNumber];
        console.log(character);
        passwordArray.push(character);
      }
      else
      {
        var characterNumber = Math.floor(Math.random() * specialCharacters.length);
        var character = specialCharacters[characterNumber];
        console.log(character);
        passwordArray.push(character);
      }
    }
  }

  var password = passwordArray.join("");

  console.log(passwordArray);
  console.log(password);

  return password;
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