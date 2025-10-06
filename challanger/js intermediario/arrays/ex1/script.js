// Transformar o loop clássico em um loop for ... of
const fruits = ['apple', 'banana', 'cherry'];
let output = '';

for (let i = 0; i < fruits.length; i++) {
  output += fruits[i] + ' ';
}  

console.log(output.trim());








/*
// Loop for ... of
const fruits = ['apple', 'banana', 'cherry'];
let output = '';

for (const fruit of fruits) {
  output += fruit + ' ';
}

console.log(output.trim());
*/