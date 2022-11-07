// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//this function will display the numerical value in a text box next to the range slider
function updateRange(val) {
  document.getElementById('passLength').value = val;
}

//add event listener for form validation (user needs to pick two out of three of the criteria offered if they want to refine their password)
document.addEventListener('DOMContentLoaded', function validateForm() {
  const inputs = Array.from(document.querySelectorAll('input[name=uppercase], input[name=lowercase], input[name=special characters]'));

  const inputListener = e => {
    inputs 
      .filter(i => !== e.target)
      .forEach(i => (i.required = !e.target.value.length));
  };

  inputs.forEach(i => i.addEventListener('input', inputListener));
});


//Option 1: Default (user does not need to submit form; clicking "generate" button will give them a random 12-character password)
function generatePassword () {
  var password = "";
  var alphaNum = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$";
  
  for (var i = 0; i < alphaNum.length; i++) {
    var pass = Math.floor(Math.random() * alphaNum.length); 
    //Math.random generates random number. Here, the random number will be multipled by the length of alphaNum. 
    
    password += alphaNum.slice(pass, pass+1);
    //slice extracts part of a string based on start and end parameters, which will be whatever the random number generates is as the start point and that number +1 as the end point here.
  }
  return password.slice(12, 24); 
  //goal: return a 12-character slice of the randomly generated password. The downside to this is that it may or may not always include upper and lowercase, numbers, or special characters.
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;  
}
//goal: randomly select between 8 to 128 characters from alphaNum.

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
