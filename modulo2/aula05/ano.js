var nomes
var idade
const ano = 2024

console.log("Qual seu nome?")
process.stdin.once('data', function(data){
    nomes = data.toString().trim()
    console.log("Qual sua idade?")

    process.stdin.once('data', function(data){
        idade = parseInt(data.toString().trim())
        processamento(nomes, idade)
        process.exit()
    })
})

function processamento(nomes, idade) {
    let calculo = (ano - idade - 1)
    let aniv = (ano - idade)
    console.log(`Olá ${nomes}! Você tem ${idade} anos e nasceu em ${calculo}, caso não tenha feito aniversário (ou em ${aniv} se já fez)`)
}