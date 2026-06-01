let numerosInt = [3,3,1,4,5, 11];

function somar(numerosInt){
    let somaElementos = 0;
    numerosInt.forEach(element => {
        somaElementos += element;
    });
    return somaElementos;
}

function media(numerosInt){
    let somaElementos = 0;
    numerosInt.forEach(element => {
        somaElementos += element;
    })

    return somaElementos / numerosInt.length;
}

function menorElemento(numerosInt){
    let menorElemento = numerosInt[0];
    numerosInt.forEach(element =>{
        menorElemento = menorElemento < element? menorElemento : element;
    })
    return menorElemento
}

function segundoMenorElemento(numerosInt){
    let menorElemento = numerosInt[0];
    let segundoMenorElemento = numerosInt[0];

    numerosInt.forEach(element =>{
        menorElemento = menorElemento < element? menorElemento : element;
    })

    numerosInt.forEach(element =>{
        if(element > menorElemento && element <= segundoMenorElemento){
            segundoMenorElemento = element;
        }
    })
    return segundoMenorElemento;
    
}

function filtrar(numerosInt){
    let arrayImpares = [];

    for(let i = 0; i < numerosInt.length; i++){
        if(!(numerosInt[i] % 2 == 0)){
            arrayImpares.push(numerosInt[i])
        }
    }

    return arrayImpares;
}

function inverso(numerosInt){
    let arrayInvertido = [];

    arrayInvertido.forEach(element =>{
        
    })
}


console.log(somar(numerosInt));
console.log(media(numerosInt));
console.log(menorElemento(numerosInt));
console.log(segundoMenorElemento(numerosInt));
console.log(filtrar(numerosInt));

