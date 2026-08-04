const display = document.querySelector('#display')

const teclado = document.querySelector('.keys')

let entradaAtual = '0'
let operador = null
let valorAnterior = null
let resultado = 0;

let digitos = [];

teclado.addEventListener('click', (evento) => {
    const botao = evento.target
    if(!botao) return

    const digito = botao.dataset.digit
    const operacao = botao.dataset.op
    const acao = botao.dataset.action

    if(digito){
        inserirDigito(digito)
        if(entradaAtual < 0){
            atualizarDisplay('(' + entradaAtual + ')')
        }else{
            atualizarDisplay(entradaAtual)
        }
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
        operacao = '*'
        calcularBinaria(operacao)
    }
    if(operacao == 'divisao'){
        operacao = '/'
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
    if(display.textContent.slice(-1) == operador){
        operador = op
        atualizarDisplay(entradaAtual + op)
    }else{
        valorAnterior = Number(entradaAtual)
        digitos.push(valorAnterior)

        if(digitos.length == 1){
            resultado = digitos[0]
            
        }else{
            resultado = eval(`${resultado} ${operador} ${valorAnterior}`); 
        }

        operador = op
        entradaAtual += op
        
        atualizarDisplay(entradaAtual)
        entradaAtual = '0'
    }

    
}

const calcularUnaria = (op) => {

}




const executarAcao = acao => {
    switch (acao){
        case 'clear':
            limparTudo()
            atualizarDisplay(entradaAtual)
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
    digitos = []
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
    // if para divisao e multiplicação por 0
    // if pra clicar duas vezes seguidas no =
    entradaAtual = eval(`${resultado} ${operador} ${entradaAtual}`);
    atualizarDisplay(entradaAtual)
    valorAnterior = entradaAtual
    
    resultado = 0;
    digitos = [];
    
}

const adicionarHistorico = () => {
    // terminar

}

