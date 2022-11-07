//goal: randomly select between 8 to 128 characters from alphaNum.
//this is generating TWO passwords. 
function generatePassword() {
  var password = "";
  var alphaNum = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$";
  for (var i = 0; i < alphaNum.length; i++) {
    var pass = Math.floor(Math.random() * alphaNum.length); password += alphaNum.substring(pass, pass+1);
  }
  console.log(password);
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//Currently writing "undefined" in text area after clicking button. Need to grab output from generatePassword()...
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
