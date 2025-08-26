//Refactor the code to use a ternary expression to assign the correct value to status: assign 'Adult' if age is 18 or more, otherwise assign 'Minor'.

let age = 17;
 
// adjust the following code snippet...
let status; // assign using ternary
if (age >= 18) {
  status = 'Adult';
} else {
  status = 'Minor';
}

console.log(status); // expected: "Minor




/*
let age = 17;
let status = age >= 18 ? 'Adult' : 'Minor';

console.log(status);
*/