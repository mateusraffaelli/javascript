//Look at the string stored in the variable password. Add a condition to ensure the password meets both requirements: it should have at least 6 characters and start with an uppercase letter. The code already checks if the first character is uppercase. You need to add a check for the length.

const password = 'Abcdef';
 
let isValid = false;
 
// adjust code here...
if (password[0] === password[0].toUpperCase()) {
  isValid = true;
}
 
console.log(isValid) // expected: true



/*const password = 'Abcdef';
 
let isValid = false;
 
if (password[0] === password[0].toUpperCase() && password.length >= 6) {
  isValid = true;
}
 
console.log(isValid) // output: true
*/ 