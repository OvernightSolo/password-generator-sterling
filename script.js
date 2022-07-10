// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the password area in the on-screen box
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Creating the function to generate the random password
function generatePassword() {
  let i = 0;
  //While loop that will ask the user to enter the amount of characters and validate
  while (i === 0) {
    var pwLength = prompt(
      "How many characters would you like to use?",
      "Enter 8 through 128"
    );
    //Validating user entry to make sure that it is a whole number between 8 and 128
    if (pwLength >= 8 && pwLength <= 128 && !pwLength.match(/[.]/)) {
      i++;
    } else {
      alert("Please enter a valid entry");
    }
  }

  //Ask user to set character parameters
  let k = 0;
  while (k === 0) {
    var confirmUpper = confirm(
      "Would you like uppercase letters? Okay for Yes, Cancel for No"
    );
    var confirmLower = confirm(
      "Would you like lowercase letters? Okay for Yes, Cancel for No"
    );
    var confirmNum = confirm(
      "Would you like numerals? Okay for Yes, Cancel for No"
    );
    var confirmSpChar = confirm(
      "Would you like special characters? Okay for Yes, Cancel for No"
    );
    //If OK is not clicked on at least one confirm pop-up, then ask the user to choose one.
    if (confirmUpper || confirmLower || confirmNum || confirmSpChar) {
      k++;
    } else {
      alert("You must select at least one character type");
    }
  }

  //Setting up character sets. If confirm is clicked OK, it will include that character set.
  var charSet = "";
  if (confirmUpper) {
    charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (confirmLower) {
    charSet += "abcdefghijklmnopqrstuvwxyz";
  }
  if (confirmNum) {
    charSet += "0123456789";
  }
  if (confirmSpChar) {
    charSet += "!@#$%^&*-+_=?,.'`~";
  }

  //For loop to randomly choose and append characters to the password
  var randomPassword = "";
  for (let j = 0; j < pwLength; j++) {
    randomPassword += charSet.charAt(
      Math.floor(Math.random() * charSet.length)
    );
  }
  return randomPassword;
}
