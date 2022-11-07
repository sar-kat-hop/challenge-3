//Option 2: User refines password using offered criteria. If no criteria selected, default password will be 12 randomly generated lowercase letters and numbers.

  //goal: randomly select between 8 to 128 characters from alphaLower and Upper, numbers, and symbols depending on user-specified criteria and print to #generate text area. This code achieves the goal but may produce passwords without symbols, uppercase, or numbers since there are no minimum or maximum requirements per const if user checks boxes. 

const alphaLower = "abcdefghijklmnopqrstuvwxyz";
const alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = '0123456789';
const symbols = '!@#$';

const passTxt = document.getElementById("password");
const length = document.getElementById("length");
const incAlphaUpper = document.getElementById("uppercase");
const incNumbers = document.getElementById("numbers");
const incSymbols = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");

generateBtn.addEventListener("click", () => {
  let characters = alphaLower + numbers;
  incAlphaUpper.checked ? (characters += alphaUpper) : "";
  incNumbers.checked ? (characters += numbers) : "";
  incSymbols.checked ? (characters += symbols) : "";
  passTxt.value = passGen(length.value, characters);
});

const passGen = (length, characters) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
      );
    }
    return password;
  };
  
  function writePassword() {
    // var password = generatePassword();
    var password = passGen();
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;  
  }
  
//Old code below, saving for future testing.
  
    //add event listener for form validation (user needs to pick two out of three of the criteria offered if they want to refine their password)
        //for some reason this function causes an HTML reference error saying writePassword isn't defined even though it is. Syntax issue?
  
              // document.addEventListener(function validateForm() {
                //     const inputs = Array.from(document.querySelector('input[name=uppercase], input[name=lowercase], input[name=special characters]'));
                
                //     const inputListener = e => {
                  //         inputs 
                  //           .filter(i => !== e.target);
                  //           .forEach(i => (i.required = !e.target.value.length);
                  //       };
                  
                  //       inputs.forEach(i => i.addEventListener('input', inputListener));
                  //     });
      
      // Add event listener to generate button
                  // generateBtn.addEventListener("click", writePassword);
      
      // Get references to the #generate element
          //This causes conflict if using Option 2 code
                  // var generateBtn = document.querySelector("#generate");
      
      //this function will display the numerical value in a text box next to the range slider
                  // function updateRange(val) {
                    //   document.getElementById('passLength').value = val;
                    // }
        
      //Option 1.2: Default (user does not need to submit form; clicking "generate" button will give them a random 12-character password)
        
              // function generatePassword () {
                    //   var password = "";
                    //   var alphaNum = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$";
                    
                    //   for (var i = 0; i < alphaNum.length; i++) {
                      //     var pass = Math.floor(Math.random() * alphaNum.length); 
                              //Math.random generates random number. Here, the random number will be multipled by the length of alphaNum. 
                      
                      // password += alphaNum.slice(pass, pass+1);
                              //slice extracts part of a string based on start and end parameters, which will be whatever the random number generates is as the start point and that number +1 as the end point here.
                      // }
                      // return password.slice(12, 24);
                              //goal: return a 12-character slice of the randomly generated password. The downside to this is that it may or may not always include upper and lowercase, numbers, or special characters.
                      // }

    //Option 1.0: "default" password generation, print to console only
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
