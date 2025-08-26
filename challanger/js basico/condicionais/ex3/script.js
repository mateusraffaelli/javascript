//Look at the string stored in the variable password. Change it so that it passes all the checks in the code.

const password = 'abc';
 
let msg = 'Password correct';
 
if (password.length < 6) {
  msg = 'Password incorrect';
}
 
if (password[0] !== password[0].toUpperCase()) {
  msg = 'Password incorrect';
}
 
console.log(msg) // expected: 'Password correct'
 

//Mudar: const password = 'Abcdef';