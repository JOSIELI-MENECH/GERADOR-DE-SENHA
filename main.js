const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha= 12;
numeroSenha.textContent = tamanhoSenha;
const letraMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letraMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '!@#$%*'
const botoes = document.querySelector ('.parametro-senha__botao');
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');
const forcaSenha = document.querySelector('.forca');


botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
    if(tamanhoSenha > 1){
        //tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;

    }

    numeroSenha.textContent = tamanhoSenha;
    geraSenha();

}

function aumentaTamanho(){

    if(tamanhoSenha < 20){
        //tamanhoSenha = tamanhoSenha+1;
        tamanhoSenha++


    }
    numeroSenha.textContent = tamanhoSenha;

    geraSenha()

}

geraSenha();

function geraSenha(){

    let senha = '';
    for(let i = 0; i < tamanhoSenha; i++)
    let numeroAleatorio = math.random()*letraMaiusculas.longht;
    numeroAleatorio = math.floor(numeroAleatorio);
    senha = + letraMaiusculas(numeroAleatorio);

}

campoSenha.value = senha 

function geraSenha(){
    let alfabeto = '';
    if{checkbox[0].checked}
    alfabeto = alfabeto+letraMaiusculas

}
if{checkbox[0].checked}
    alfabeto = alfabeto+letraMaiusculas



