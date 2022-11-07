// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  var password = "";
  var alphaNum = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$";
  //goal: randomly select between 8 to 128 characters from alphaNum.
  
  for (var i = 0; i < alphaNum.length; i++) {
    var pass = Math.floor(Math.random() * alphaNum.length); 
    //Math.random generates random number. Here, the random number will be multipled by the length of alphaNum. Note: apparently this isn't as secure as using a different method for password generation but it accomplishes goal of challenge.
    password += alphaNum.slice(pass, pass+1);
    //slice extracts part of a string based on start and end parameters, which will be whatever the random number generates is as the start point and that number +1 as the end point here.
  }
  // return generatePassword;
  return password.slice(12, 24); //goal: return a 12-character slice of the randomly generated password. The downside to this is that it may or may not always include upper and lowercase, numbers, or special characters.
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Old code below, saving for future testing.

// function generatePassword() {
  //   var password = "";
  //   var alphaNum = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$";
  //   for (var i = 0; i < alphaNum.length; i++) {
    //     var pass = Math.floor(Math.random() * alphaNum.length); 
    // password += alphaNum.slice(pass, pass+1); 
    // }
    // console.log(password);
    // }
    // Write password to the #password input
    //Currently writing "undefined" in text area after clicking button. Need to grab output from generatePassword()... to do this, I think I need to make generatePassword an inner function of writePassword (or vice versa?)
    // function writePassword() {
      //   var passwordText = document.querySelector("#password");
      //   passwordText.value = password;
