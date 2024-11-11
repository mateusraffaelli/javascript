console.log('Boas-vindas');

let nome = 'Mateus';
alert(`Olá, ${nome}`);

let linguagem = prompt ('Qual a linguagem de programação que você mais gosta?');

let valor1 = 4 ;
let valor2 = 8 ;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);

let idade = prompt('Qual a sua idade?');
if (idade >= 18){
    console.log('Você é maior de idade');
}else{
    console.log('Você é menor de idade');
}

let numero = prompt('Insira um valor númerico');
if(numero > 0){
    console.log(`${numero} é positivo`);
}else if(numero < 0){
    console.log(`${numero} é negativo`);
}else{
    console.log('O número é zero')
}

let contagem = 1;
while(contagem <= 10){
    console.log(`${contagem}`);
    contagem++;
}

let nota = 3;
if(nota >= 7){
    console.log(`Aprovado, sua nota é ${nota}`)
}else{
    console.log(`Reprovado, sua nota é ${nota}`)
}

let numeroAleatorio1 = parseInt(Math.random() *10 + 1)
console.log(`Seu número é ${numeroAleatorio1}`)

let numeroAleatorio2 = parseInt(Math.random() *1000 + 1)
console.log(`Seu número é ${numeroAleatorio2}`)

    
