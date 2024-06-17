var tabuada
var i 

console.log('Qual tabuada você deseja saber?')
process.stdin.on('data', function(data) {
    tabuada = parseInt(data.toString().trim())
    processamento(tabuada)
    process.exit()
})

function processamento(tabuada) {
    console.log(`A tabuada do número ${tabuada} é:`)
    for (i = 0; i <= 100; i++ ) {
        console.log(i * tabuada)
    }
}