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

//* Exemplo 2
console.clear()

function somar(numero1, numero2){
    return numero1 + numero2
}

const resultado = somar(2, 3)

console.log(resultado)
console.log(resultado / 10)

//-------------------------------------------
//FUNÇÕES ANÔNIMAS

const dobroDoNumero = function (numero){
    return numero * 2
}

const dobro = dobroDoNumero(2)
console.log(dobro)

//----------------------------------

//ARROW FUNCTION: Função Seta 

const subtrair = (numero1, numero2) => {
    return numero1 - numero2
}

// A função é feita sem colchete
const multiplicar = (numero1, numero2) => numero1 * numero2 

// A função é feita sem parênteses
const triploDoNumero = numero => numero * 3