function calcularIMC(altura, peso) {
    let IMC = peso / (alturaMetros * alturaMetros)
}

function converterDolarParaReal(valorDolar) {
    let cotacaoDolar = 4.80;
    let valorReais = valorDolar * cotacaoDolar
    return valorReais.toFixed(2); // Retorna o valor com duas casas decimais
}

function calcularAreaPerimetroSalaRetangular(altura, largura) {
    let area = altura * largura;
    let perimetro = 2*(altura + largura);
    console.log(`Área da sala é igual a ${area} metros quadrados`)
    console.log(`O perímetro da sala é igual a ${perimetro} metros`)
}

function calcularAreaPerimetroSalaCircular(raio) {
    let valorPi = 3.14;
    let area = raio * raio * valorPi
    let perimetro = 2 * raio * valorPi
    console.log(`A área da sala mede ${area} metros quadrados`)
    console.log(`O perímetro da sala mede ${perimetro} metros`)
}

function mostrarTabuada(numero) {
    for (let i=1 ; i <= 10; i++){ // i é o número que vai ser multiplicado, ele é = 1 e vai aumentando até chegar no 10
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  } 
}