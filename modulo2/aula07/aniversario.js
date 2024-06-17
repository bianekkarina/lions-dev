var nomes
var idade
var aniversario
const ano = 2024

console.log("Qual seu nome?")
process.stdin.once('data', function(data){
    nomes = data.toString().trim()
    console.log("Qual sua idade?")

    process.stdin.once('data', function(data){
        idade = parseInt(data.toString().trim())
        console.log('Você já fez aniversário esse ano?')

        process.stdin.once('data', function(data) {
            aniversario = data.toString().trim()
            processamento(nomes, idade, aniversario)
            process.exit()
        })
    })
})

function processamento(nomes, idade, aniversario) {
    if (aniversario == "sim") {
        aniversario = true 
    } else {
        aniversario = false
    }
        if (aniversario) {
            console.log(`Olá ${nomes}, você tem ${idade} anos e nasceu em ${ano - idade}`)
    } else {
        console.log(`Olá ${nomes}, você tem ${idade} anos e nasceu em ${ano - idade - 1}`)
    }
}