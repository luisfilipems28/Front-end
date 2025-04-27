//* LAÇOS CONDICIONAIS

//* While: enquanto determinada condição no bloco for verdadeira, execute a linha de código determinada
 
const prompt = require('readline-sync')

/*let saldo = Number(prompt.question("Qual eh o seu saldo?"))

while(saldo < 0){
   saldo = Number(prompt.question("Saldo invalido, tente novamente: "))
}



console.log(saldo, typeof saldo); */

// Exemplo 2

// let notaDoAluno = Number(prompt.question("Informe a nota do aluno: "))

// let somaDasNotas = 0 //Variável acumuladora

// let qtdNotasValidas = 0

// while(notaDoAluno >= 0){
//     somaDasNotas = somaDasNotas + notaDoAluno // OU somaDasNotas += notaDoAluno //Incrementando o acumulador (somaDasNotas)
//     qtdNotasValidas = qtdNotasValidas + 1 //  qtdNotasValidas ++ PÓS INCREMENTO 

//     notaDoAluno = Number(prompt.question("Informe a próxima nota: "))
// }

// console.log(somaDasNotas)
// console.log(qtdNotasValidas)

// console.log("Média das notas dos alunos = ", somaDasNotas / qtdNotasValidas)

//* Exemplo 3
// Math.random -> gera um número entre 0 e 1
const numeroAleatorio = parseInt(Math.random() *10) // Tanto ParseInt quanto Math,round() passa o numero decimal para inteiro

let numeroDoUsuario = Number(prompt.question("Informe um número entre 0 e 10: "))

let qtdTentivas = 0

while(numeroAleatorio !== numeroDoUsuario){
    console.log("Você errou! Tente novamente...")
    numeroDoUsuario = Number(prompt.question("Informe um número entre 0 e 10: "))
    qtdTentivas = qtdTentivas + 1
}

console.log("Parabéns! Você acertou👍! O número era : " + numeroAleatorio /*Posso utilizar , ou + */)
console.log("Você acertou em "+ qtdTentivas + " Tentativas.")

let saldo;
do{
    saldo = Number(prompt.question("Qual eh o seu saldo?"))

}while(saldo < 0){
   saldo = Number(prompt.question("Saldo invalido, tente novamente: "))
}
