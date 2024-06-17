let resposta
let gostaDeCafe 

console.log('Olá, você gosta de café?')
process.stdin.once('data', function(data){
    resposta = data.toString().trim()
    processamento(resposta)
    process.exit()
})

function processamento(resposta) {
    if (resposta == "sim") {
        gostaDeCafe = true 
    } else {
        gostaDeCafe = false
    }
    if (gostaDeCafe) {
        console.log('Você é completamente doido.')
    } else {
        console.log('Parabéns, você tem um ótimo gosto!')
    }
}