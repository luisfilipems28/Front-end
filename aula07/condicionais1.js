const prompt = require("readline-sync")


const idade = Number(prompt.question("Qual eh a sua idade?"))

const maiorIdade = idade >= 18

// ESTRUTURA CONDICIONAL: if/else

if(idade >= 18){
    console.log("Você eh maior de idade")
    console.log("ACESSO PERMITIDO!!")
}else{
    console.log("Você eh menor de idade")
    console.log("ACESSO NEGADO!!")
}

const mediaDoAluno = 10;

if(mediaDoAluno >= 7){
    console.log("Aprovado!");
}else if(mediaDoAluno < 7 && mediaDoAluno >=5){
    console.log("Prova final");
}else{
    console.log("Reprovado");
}

