var prova1
var prova2
var notas = []

console.log('Qual a primeira nota?')
process.stdin.once('data', function(data) {
    prova1 = parseFloat(data.toString().trim())
    console.log('Qual a segunda nota?')

    process.stdin.on('data', function(data) {
        prova2 = parseFloat(data.toString().trim())
        processamento(prova1, prova2)
        process.exit()
    })
})

function processamento(prova1, prova2) {
    notas.push(prova1, prova2)
    var calculo = (notas[0] + notas[1]) / 2
    console.log(`A média final é ${calculo}`)
}