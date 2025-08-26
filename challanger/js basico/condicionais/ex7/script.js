//Complete the code so that the strength variable is set to 'Strong' if the password is at least 8 characters long, or 'Weak' otherwise. Use if...else.

const password = 'secret';
let strength;
 
// Use if...else to assign 'Strong' or 'Weak' to strength
if (password.length >= 8) {
  strength = 'Strong';
}
// add else block here...

 
console.log(strength); // expected: "Weak"

// Adicione:
//else {
//    strength = 'Weak';
//}