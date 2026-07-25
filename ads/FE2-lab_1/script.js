const display = document.querySelector('#display')

const teclado = document.querySelector('.keys')

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
        // registrarOperacao(operacao)
        return
    }
    if(acao){
        // executarAcao(acao)
        return
    }
})

const inserirDigito = digito => {
    display.textContent += digito
}

let entradaAtual = '0'
let operador = null // apaga a entrada atual quando clicado e jogar para : valorAnterior
let valorAnterior = null
let resultado