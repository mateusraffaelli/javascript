function exibirOla() {
    console.log('Olá, mundo!');
}

function exibirOlaNome(nome) {
    console.log(`Olá, ${nome}! `)
}
exibirOlaNome('Alice');

function calcularDobro(numero) {
    return numero * 2;
}
let resultadoDobro = calcularDobro;
console.log(resultadoDobro);

function calcularMedia(a, b, c){
    return (a + b + c) / 3;
}
let media = calcularMedia(4, 7, 10);
console.log(media);

function numeroMaior(a, b) {
    return a > b? a : b;
}
let maiorNumero = encontrarMaior(15, 9);
console.log(maiorNumero);

function quadrado(numero) {
    return numero * numero
}
let resultadoQuadrado = quadrado(2);
console.log(resultado);