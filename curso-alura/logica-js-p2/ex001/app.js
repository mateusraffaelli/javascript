let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio'


function console(){
    console.log('O botão foi clicado');
}

function alert(){
    alert('Eu amo JS');
}

function prompt(){
    let cidade = prompt ('Digite o nome de uma cidade do Brasil');
    alert(`Estive em ${cidade} e lembrei de você`);
}

function soma(){
    let numero1 = prompt('Digite um número inteiro')
    let numero2 = prompt('Digite um número inteiro')
    alert(numero1 + numero2)
}