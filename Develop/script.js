document.querySelector("#generate").addEventListener("click", writePassword);

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    
var passwordLength = "";
var upperCase;
var lowerCase;
var numbers;
var symbols;

function generatePassword() {
  var passwordLength = (prompt("How many characters would you like your password to be?"));
      
  while (passwordLength <= 8 || passwordLength >= 128) {
    alert("Password length must be 8-128 characters. Please try again.");
    var passwordLength = (prompt("How many characters would you like your password to be?"));
    }
    
    alert(`Your password will have ${passwordLength} characters`);
  
  var upperCase = confirm("Would you like to use uppercase letters?");
  var lowerCase = confirm("Would you like to use lowercase letters?");
  var numbers = confirm("Would you like to use numbers?");
  var symbols = confirm("Would you like to use special characters?");
      
  while(upperCase === false && lowerCase === false && numbers === false && symbols === false) {
    alert("You must choose at least one character type");
    var upperCase = confirm("Would you like to use uppercase letters?");
    var lowerCase = confirm("Would you like to use lowercase letters?");
    var numbers = confirm("Would you like to use numbers?");
    var symbols = confirm("Would you like to use special characters?");
  } 

    var passwordCharacters = []
    
  if (upperCase) {
    passwordCharacters = passwordCharacters.concat(alphaUpper)
  }

  if (lowerCase) {
    passwordCharacters = passwordCharacters.concat(alphaLower)
  } 

  if (numbers) {
    passwordCharacters = passwordCharacters.concat(number)
  }

  if (symbols) {
    passwordCharacters = passwordCharacters.concat(specialChar)
  }

    console.log(passwordCharacters)

    var randomPassword = ""
      
    for (var i = 0; i < passwordLength; i++) {
      randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
      console.log(randomPassword)
    }
    return randomPassword;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
