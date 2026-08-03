const display = document.querySelector('#display')

const teclado = document.querySelector('.keys')

let entradaAtual = '0'
let operador = null
let valorAnterior = null
let resultado = 0;

let digitos = [];
let operadores = [];

teclado.addEventListener('click', (evento) => {
    const botao = evento.target
    if(!botao) return

    const digito = botao.dataset.digit
    const operacao = botao.dataset.op
    const acao = botao.dataset.action

    if(digito){
        inserirDigito(digito)
        return
    }
    if(operacao){
        registrarOperacao(operacao)
        return
    }
    if(acao){
        executarAcao(acao)
        return
    }
})

const inserirDigito = digito => {
    if(digito === "." && entradaAtual.includes('.'))return

    if(entradaAtual === '0'){
        entradaAtual = digito
        return
    }

    entradaAtual += digito
    
    if(entradaAtual < 0){
        atualizarDisplay('(' + entradaAtual + ')')
    }else{
        atualizarDisplay(entradaAtual)
    }
}

const atualizarDisplay = (entrada) => {
    display.textContent = entrada
}

const registrarOperacao = operacao => {
    if(operacao === 'raiz' || operacao === 'porcento'){
        calcularUnaria(operacao)
        return
    }

    
    if(operacao == 'adicao'){
        operacao = '+'
        calcularBinaria(operacao)
    }
    if(operacao == 'subtracao'){
        operacao = '-'
        calcularBinaria(operacao)
    }
    if(operacao == 'multiplicacao'){
        operacao = 'x'
        calcularBinaria(operacao)
    }
    if(operacao == 'divisao'){
        operacao = '÷'
        calcularBinaria(operacao)
    }
    if(operacao == 'raiz'){
        operacao = '√'
    }
    if(operacao == 'porcento'){
        operacao = '%'
    }
    if(operacao == 'potenciacao'){
        operacao = ''
    }
    
    

    
}

const calcularBinaria = (op) => {

    //resolver
        valorAnterior = Number(entradaAtual)
        digitos.push(valorAnterior)
        operador = op
        operadores.push(op)
        entradaAtual = '0'
        entradaAtual += op
        atualizarDisplay(entradaAtual)
        
        alert(digitos)
}

const calcularUnaria = (op) => {

}




const executarAcao = acao => {
    switch (acao){
        case 'clear':
            limparTudo()
            break
        case 'backspace':
            limparUltimo()
            break
        case 'sign':
            mudarSinal()
            break
        case 'equals':
            calcularResultado()
            break
    }
}

const limparTudo = () => {
    entradaAtual = '0'
    valorAnterior = null
    operador = null
    atualizarDisplay(entradaAtual)
}

const limparUltimo = () => {
    if(entradaAtual.length == 1){
        limparTudo()
    }else{
        entradaAtual = entradaAtual.slice(0, -1)
        atualizarDisplay(entradaAtual)
    }
}

const mudarSinal = () => {
    if(entradaAtual > 0){
        entradaAtual = (-entradaAtual)
        atualizarDisplay('(' + entradaAtual + ')')
        
    }else if(entradaAtual < 0){
        entradaAtual = (-entradaAtual)
        atualizarDisplay(entradaAtual)
    }
}

const calcularResultado = () => {
    for(let i = 0; i < digitos.length; i++){
        resultado += digitos[i] + operadores[i] + digitos[i+1]
    }
    atualizarDisplay(resultado)
}

