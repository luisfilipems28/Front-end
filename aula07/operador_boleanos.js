// Operadores booleanos são usados para comparações

const numero1 = 10;
const numero2 = 12;

console.log(numero1 == numero2) // Com dois iguais(==) eles vai considerar a tipagem para comparar o valor
console.log(numero1 === numero2) // Com três iguais (===) ele só vai considerar os valores, que é o ideal, por isso o ideal para ser utilizado para comparação

const idadePessoa1 = 18;
const idadePessoa2 = 18;


console.log(idadePessoa1 >= 18 && idadePessoa2 >= 18); //Os dois precisam ter valores iguais para retornar true
console.log(idadePessoa1 >= 18 || idadePessoa2 >= 18);  //Se um OU outro tiverem valores iguais a resposta retornará True

console.log(!(idadePessoa1 >= 18)) // Retornará verdadeiro se a pessoa for menor de idade 