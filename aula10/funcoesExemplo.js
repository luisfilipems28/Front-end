// Definição da Função
prompt = require("readline-sync")

const nomeDoAluno = prompt.question("Qual o seu nome?")


if(nomeDoAluno){
    function saudacao (nomeDoAluno) {
        // Template Strings || Template literals ` `
          //  console.log(`Olá, seja bem-vindo(a) ao ${curso}`)
            console.log("Olá," + nomeDoAluno + ", seja bem-vindo(a) ao curso de Front-End em React") 
        }
        
        saudacao(nomeDoAluno) // Chamada da função saudacao
}

