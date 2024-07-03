var notas = [75, 82, 93, 67, 85, 55, 98, 70, 86, 100]
var soma = 0
var media = 0
var notaAlta = notas[0]
var notaBaixa = notas[0]
var acimaMedia = 0
var abaixoMedia = 0

for (let i = 0; i < notas.length; i++) {
    soma += notas[i]
}

media = soma / notas.length
console.log(`Média dos alunos: ${media}`)

for (let i = 0; i < notas.length; i++) {
    if (notas[i] > notaAlta) {
        notaAlta = notas[i]
    } else if (notas[i] < notaBaixa){
        notaBaixa = notas[i]
    }
}

console.log(`A nota mais alta é ${notaAlta} e a nota mais baixa é ${notaBaixa}`)

notas.push(84)
for (let i = 0; i < notas.length; i++) {
    if (notas[i] >= media) {
        acimaMedia++
    }
} 

console.log(`Notas acima da média: ${acimaMedia}`)

console.log(`Notas novas: ${notas}`)

for (let i = 0; i < notas.length; i++) {
    if (notas[i] < 80) {
        abaixoMedia++
    }
} 
console.log(`Notas abaixo da média: ${abaixoMedia}`)