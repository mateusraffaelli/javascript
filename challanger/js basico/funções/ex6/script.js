//In this exercise func declares a variable text with the value hello. Then it returns the value of text. After that, it assigns a new value hello world to the variable text and returns the new value. But, when you run the code, you see that only the initial value of text (hello) is logged. Adjust the code so that the final value of text is logged.

function func() {
    let text = 'hello';
    return text;
    text = text + ' world';
    return text;
 };
 const result = func();
 console.log(result);

 //apagar o primeiro "return text", linha 5