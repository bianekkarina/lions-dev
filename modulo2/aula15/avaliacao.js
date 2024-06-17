let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0]
let soma = 0
let media = 0
let notaMinima = notas[0]
let notaMaxima = notas[0]
let notasAcima = 0
let notasAbaixo = 0

// calcular a media 

for (let i = 0; i < notas.length; i++) {
    soma += notas[i]
}

media = soma / notas.length
console.log(media)

// achar a maior e menor nota

for (let i = 0; i < notas.length; i++) {
    if (notas[i] > notaMaxima) {
        notaMaxima = notas[i]
    } else if (notas[i] < notaMinima) {
        notaMinima = notas[i]
    }
}

console.log(`Nota máxima: ${notaMaxima}`)
console.log(`Nota mínima: ${notaMinima}`)

// achar as notas acima da media 

for (let i = 0; i < notas.length; i++) {
    if (notas[i] > media) {
        notasAcima++
    }
}

console.log(`Notas acima da média: ${notasAcima}`)

// adicionar uma nova nota 

notas.push(8.0)
console.log(notas)

// achar as notas abaixo de 6.0

for (let i = 0; i < notas.length; i++) {
    if (notas[i] < 6.0) {
        notasAbaixo++
    }
}

console.log(`Reprovados: ${notasAbaixo}`)