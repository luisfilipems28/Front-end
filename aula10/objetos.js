// Objects Literal

const array = ["Luis", 26, 1.80, true]
//* Adicionando Arrays, objetos e funções à propriedades
// É necessário chaves {} para ser considerado objeto
const pessoa = {nome: "Luis", Idade: 26, altura: 1.80, hobbies:["Lutar", "Musica", "Leitura"], imprimir: () => {console.log("Opa!")}}

console.log(pessoa)
//* Extrair o atributo separadamente
console.log(pessoa.nome)
// OU
console.log(pessoa['Idade'])

//* Adicionar propriedade

pessoa.profissao = "Desenvolvedor"
console.log(pessoa)

//* Deletando Propriedades

delete pessoa.altura
console.clear()

console.log(pessoa)
pessoa.imprimir()

//* Sintaxe simplificada para adicionar propriedades

const idade = 26
const altura = 1.80

const objeto = {
    idade,
    altura,
}
console.log(objeto)