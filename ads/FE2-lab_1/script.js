const display = document.querySelector('#display')

const teclado = document.querySelector('.keys')

let entradaAtual = '0'
let operador = null
let valorAnterior = null
let resultado = 0;
let historico = ''
let contator = 0

let digitos = []
let operadores = []

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
        operadores.push(op)

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
    const valor = Number(entradaAtual)
    let resultado = 0

    if(op === 'raiz') resultado = Math.sqrt(valor)
    if(op === 'porcento') resultado = valor / 100

    entradaAtual = String(resultado)
    atualizarDisplay(entradaAtual)
}




const executarAcao = acao => {
    switch (acao){
        case 'clear':
            limparTudo()
            atualizarDisplay(entradaAtual)
            break
        case 'backspace':
            limparUltimo()
            atualizarDisplay(entradaAtual)
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
        //Dando algum erro
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
    // if para divisao por 0
    // arrumar operação numerica (2*2)+(2*2) = 8, não 12
    // arrumar caso trocar de operação
    // Se eu clico em 4, apago e faço uma conta ele considera o 4
    // Se eu clicar
    
    if(digitos.length == 0){
        digitos.push(entradaAtual)
        entradaAtual = eval(`${entradaAtual} ${operador} ${valorAnterior}`);
        
        
        digitos.push(valorAnterior)
        operadores.push(operador)
    }else{
        valorAnterior = entradaAtual
        digitos.push(entradaAtual)
        entradaAtual = eval(`${resultado} ${operador} ${entradaAtual}`);
    
    }

    alert(digitos)
    alert(entradaAtual)
    atualizarDisplay(entradaAtual)
    adicionarHistorico() 

    digitos = []
    operadores = []
    
}

const adicionarHistorico = () => {
    // terminar
    const item = document.createElement('li');
    const lista = document.querySelector('ol');

    if(contator == 10){
        lista.lastElementChild.remove();
        contator--
    }

    for(let i = 0; i < operadores.length; i++){
        historico += `${digitos[i]} ${operadores[i]} `
    }
    historico += digitos[digitos.length - 1]

    
    item.textContent = historico;
    lista.prepend(item)

    historico = ''
    contator++

    
}

