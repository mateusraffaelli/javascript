//if...else statements give you an either-or choice. But sometimes you have scenarios with more choices. In this exercise we use an else-if block to add one more possibility. The following if...else-statement changes the text of the variable text in 3 different ways. If num is greater than 2 the first block inside the if...else-statement runs. But, if num is not greater than 2, but still greater than 1, the else-if block is executed. If neither of those options pass the condition, we have the else-block as a fallback. Adjust the code below such that the value of text will be 'num is greater than 1'.

let text;
 
// adjust code here...
const num = 3;
 
if (num > 2) {
   text = 'num is greater than 2';
} else if (num > 1) {
   text = 'num is greater than 1';
} else {
   text = 'num is smaller than or equal 1';
}
 
console.log(text); // expeceted: "num is greater than 1"
 
/*
const num = 2;
 
if (num > 2) {
   text = 'num is greater than 2';
} else if (num > 1) {
   text = 'num is greater than 1';
} else {
   text = 'num is smaller than or equal 1';
}
 
console.log(text); // expeceted: "num is greater than 1"
*/