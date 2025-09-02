//In the code below, there's a small mistake when calling the function func. Can you spot it? Run the code to see if 'hello world' is logged correctly.

function func() {
    return 'hello world';
 };
  
 // call function correctly...
 const result = func;
  
 console.log(result); // expected: "hello world"

 //const result = func();