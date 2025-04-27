//Muito útil quando sua variável possui valores especificos

const permissoes = "aluno" // "aluno" || "professor" || "admin"

switch(permissoes){
    case "aluno":
        console.log("Você só pode vizualizar as aulas.");
        break //O BREAK PRECISA SER UTILZADO APÓS CADA CASE, CASO CONTRÁRIO O TERMINAL IRÁ LER TODOS OS CÓDIGOS SEGUINTES
    case "professor":
        console.log("Você pode alteras as aulas e adicionar exercícios.");
        break
    case "admin":
        console.log("Você pode fazer acesso total ao sistema.")
        break
    default:
        console.log("ErroR")
        break
}