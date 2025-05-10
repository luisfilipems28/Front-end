//* HIGH ORDER FUNCTIONS

//* 1. Função que retorna outra função como parâmetro

function welcome(courseName){
    return( studentName)=>(
        console.log(`Olá ${studentName}! Seja bem-vinda(o) ao curso de ${courseName}!`)
    )
}

const displayWelcomeToFrontEndCourse = welcome("Front-end em React")

displayWelcomeToFrontEndCourse("Luis Filipe")


//* 2. Função que recebe outra função como parâmetro
