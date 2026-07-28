const display = document.querySelector('#display')

const teclado = document.querySelector('.keys')

let digitos = [];

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
    
    if(entradaAtual == null || entradaAtual == 0){
        entradaAtual = digito
        display.textContent = digito
    }else{
        entradaAtual += digito
        display.textContent += digito
    }
    alert(entradaAtual)
}

const registrarOperacao = operacao => {
    if(operacao == 'adicao'){
        operacao = '+'
    }
    if(operacao == 'subtracao'){
        operacao = '-'
    }
    if(operacao == 'multiplicacao'){
        operacao = 'x'
    }
    if(operacao == 'divisao'){
        operacao = '÷'
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
    
    valorAnterior = entradaAtual
    digitos.push(valorAnterior)
    entradaAtual = null

    display.textContent += operacao
    alert(entradaAtual)
    alert(digitos)
}

const executarAcao = acao => {

    display.textContent = resultado
}

let entradaAtual = '0'
let operador = null // apaga a entrada atual quando clicado e jogar para : valorAnterior
let valorAnterior = null
let resultado