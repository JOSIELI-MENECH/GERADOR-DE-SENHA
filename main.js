const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha= 5;
numeroSenha-textcontent = tamanhoSenha;

const botoes = document.querySelector ('parametroSenha__botao');
botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
    if(tamanhoSenha > 1){
        //tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;

    }

    numeroSenha-textcontent = tamanhoSenha;
    geralSenha();

}

function aumentaTamanho(){

    if(tamanhoSenha < 20){
        //tamanhoSenha = tamanhoSenha+1;
        tamanhoSenha++


    }
    numeroSenha.textContent = tamanhoSenha;
    geralSenha()

}

const campoSenha = document.querySelector('#campo-senha');
const letraMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
geralSenha();

function geralSenha(){
    let senha = ";
    for(let i = 0; i < tamanhoSenha; i++)
    let numeroAleatorio = math.random()*letraMaiusculas.longht;
    numeroAleatorio = math.floor(numeroAleatorio);
    senha = + letraMaiusculas(numeroAleatorio);

}

campoSenha.value = senha 
