//The conditional (ternary) operator can be used to replace simple if...else statements. The syntax is: condition ? if true : else. If the condition is met, the code after the question mark (?) is executed. If it is not met, the code after the semicolon (:) is executed. In simple if-else scenarios the conditional (ternary) operator can save a lot of code. In this example we use the conditional (ternary) operator to assign a value to the variable text depending on the value of num. Adjust the code such that the value of text will be 'num is greater than 3'.

// adjust code here...
const num = 3;
 
const text = num > 3 ? 'num is greater than 3' : 'num is smaller than or equal 3';
 
console.log(text); // expected: "number is smaller than or equal 3"



/*
const num = 4;
const text = num > 3 ? 'num is greater than 3' : 'num is smaller than or equal 3';
console.log(text);
*/