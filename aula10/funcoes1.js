//* Definição da Função

function saudacao (nomeDoAluno) {
    // Template Strings || Template literals ` `
      //  console.log(`Olá, seja bem-vindo(a) ao ${curso}`)
        console.log("Olá," + nomeDoAluno + ", seja bem-vindo(a) ao curso de Front-End em React") 
    }
    
    saudacao(nomeDoAluno) // Chamada da função saudacao

//* Retorno da Função

function saudacao(nomeDoEstudante, curso) {
    return `Olá, ${nomeDoEstudante}, seja bem vindo  ao  curso de ${curso}`
}    

const mensagemDaSaudacao = saudacao("Luis" , "Back-End em Node.js") // Chamada da função saudacao

console.log(mensagemDaSaudacao)