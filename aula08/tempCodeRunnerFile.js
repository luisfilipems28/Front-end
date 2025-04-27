const numeroAleatorio = parseInt(Math.random() *10) // Tanto ParseInt quanto Math,round() passa o numero decimal para inteiro

let numeroDoUsuario = Number(prompt.question("Informe um número entre 0 e 10: "))

while(numeroAleatorio !== numeroDoUsuario){
    numeroDoUsuario = Number(prompt.question("Informe um número entre 0 e 10: "))
}

console.log("Parabéns! Você acertou👍! O número era : " + numeroAleatorio)