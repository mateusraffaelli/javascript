//A return statement stops the function and skips any code that comes after it — but only if it runs. With an if statement, we can choose to exit the function early when a condition isn’t met. In the code below, the function returns early if num is smaller than 5. Update the code so that result becomes 25

function func(num) {
    if (num < 5) {
        return;
    }
    return num * num
 };
  
// adjust code below...
const result = func(3);

console.log(result); // expected: 25


//const result = func(5);