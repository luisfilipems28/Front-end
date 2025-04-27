const prompt = require('readline-sync')

/*//* expressao 1 : inicialização da variável de controle
//* expressao 2 : condição de permanência do for
//*  expressao 3 : o incremento da variavel de controle

/*for(expressao 1; expressao 2; expressao 3){
    //O escopo de for
} 

for(i = 0; i < 5; i ++){
    console.log(i)
}*/

// Limpando o console
console.clear()

/*
//* Exemplo
let i;
let maiorNumero = 0;
let numeroInformado;

for(i = 1; i<=5; i++){
    numeroInformado = Number(prompt.question("Informe um número positivo: "))
    if(numeroInformado > maiorNumero){
        maiorNumero = numeroInformado
    }
}

console.log("Maior número: "+ numeroInformado) */

//* ARRAYS

const nota1 = 10;
const nota2 = 8;
const nota3 = 5;

const notaDoAluno = [10, 8, 5]
const pessoa = ["Walisson", 27, 1.77, true]

console.log(notaDoAluno)
console.log(pessoa)