// Modifique o código abaixo para que a variável `newArray` contenha apenas os números do array `mixed`
// e quando encontrar o primeiro valor que não seja um número, o loop deve ser interrompido.
const mixed = [10,4,'c',6,'a',4];
const newArray = [];


for (let i = 0; i < mixed.length; i++) {
   const current = mixed[i];
   //if (typeof current !== 
   newArray.push(current);
}


console.log(newArray);
//expect output: [10,4]












/*
const mixed = [10,4,'c',6,'a',4];
const newArray = [];


for (let i = 0; i < mixed.length; i++) {
   const current = mixed[i];
   if (typeof current !== 'number') break;
   newArray.push(current);
}


console.log(newArray);
*/