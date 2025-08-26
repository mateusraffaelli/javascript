//We already learnt that string comparisons with === are case sensitive. Now, adjust the code to check if the variables a and b contain the same word, ignoring letter case. Set the variable isSame to true if they are equal (case-insensitive), or false otherwise.
//Hint: Use .toLowerCase() or .toUpperCase() to normalize the strings before comparing.

const a = "Apple";
const b = "applE";
 
// adjust code here...
const isSame = a === b;
 
console.log(isSame) // expected: true;
 
//const a = "Apple";
//const b = "applE";
//let isSame = a.toLowerCase() === b.toLowerCase();
//console.log(isSame);