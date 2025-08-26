//In this challenge, the value of text changes based on the value of num. Right now, the else block sets text to 'SMALL', even when num is 50, which is supposed to keep it as 'MEDIUM'. Your task is to update the code by using an else if condition instead of the else block. This way, you can avoid changing text to 'SMALL' when it's not needed.


let text = "MEDIUM";
num = 50
 
if (num > 100) {
   text = 'LARGE';
// adjust code here...
} else {
   text = 'SMALL';
}
 
console.log(text); // expeceted: "MEDIUM"


/*
let text = "MEDIUM";
num = 50
 
if (num > 100) {
   text = 'LARGE';
} else if (num < 50) {
   text = 'SMALL';
}
 
console.log(text); // output: "MEDIUM"
*/