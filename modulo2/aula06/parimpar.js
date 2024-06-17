var resposta

console.log('Digite um número:')
process.stdin.once('data', function(data){
    resposta = data.toString().trim()
    processamento(resposta)
    process.exit()
})

function processamento(resposta) {
    if (resposta == 0) {
        console.log("O número é 0")}
    else if (resposta % 2 == 0) { 
        console.log(`O número ${resposta} é par`)
    } else {
        console.log(`O número ${resposta} é impar`)
    }
}