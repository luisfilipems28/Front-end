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

// * ARRAYS

const nota1 = 10;
const nota2 = 8;
const nota3 = 5;

const notaDoAluno = [10, 8, 5]
const pessoa = ["Walisson", 27, 1.77, true]

console.log(notaDoAluno)
console.log(pessoa)

console.log(pessoa[0])


// *ALTERANDO ELEMENTOS EM ARRAYS
pessoa[3] = false // Somente um elemento sofre alteração pois ele está em uma variável Const

console.log(pessoa)

console.clear(); // Limpa o terminal do que foi rodado anteriormente;

console.log(pessoa.length) //Mostra a quantidade de elementos dentro da variável solicitada;

console.log(notaDoAluno.length)

//* FATIAMENTO DE ARRAYS
const numeros = [40, 34, 57, 89, 23, 10]

console.log(numeros.slice(0, 2)); //Quero ir até o índice menor que dois[0, 2], então o terminal irá imprimir [40,34]

//* ADICIONANDO ELEMENTOS
//Push: Adicionando elementos no final do array
numeros.push(0)
console.log(numeros)

//Unshift: Adicionar elementos no inicio do array
numeros.unshift(-1)
console.log(numeros)

//Pop: remover o elemento que está no final do array
numeros.pop()
console.log(numeros)

//Shift: remover o elemento que está no inicio do array
numeros.shift()
console.log(numeros)

// Includes: Verifica se existe determinado elemento dentro do Array

console.log(numeros.includes)

//* IndexOf: Identifica em qual indice o elemento está
const indiceDoElemento10 = numeros.indexOf(10)
console.log(indiceDoElemento10)
//  Caso retorne -1, signfica que o elemento não existe no array

//* LastindexOf: Identifica o ultimo elemento dentro do array com o valor solicitado
const indiceDoElemento40 = numeros.indexOf(40)
console.log(indiceDoElemento40)

console.clear()

//* PERCORRENDO ARRAY COM FOR 


const arr = [45, 36, 90, 76, 32, 7];

for(let i = 0; i < arr.length; i++){
    console.log(i, arr[i])
}

//* for-of:  Percorre os elementos

for(const elemento of arr){
    console.log(elemento)
}


//* for-in: Percorre as propriedades do objetos



