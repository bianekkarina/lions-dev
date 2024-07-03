let nome 
let idade 

console.log('Olá, qual o seu nome?')
process.stdin.once('data', function(data) {
    nome = data.toString().trim()
    console.log('Qual a sua idade?')

    process.stdin.once('data', function(data){
        idade = data.toString().trim()
        processamento(nome, idade)
        process.exit()
    })
})

function processamento(nome, idade) {
    if (idade >= 18) {
        console.log(`${nome}, você é maior de idade!`)
    } else {
        let calculo = (18 - idade)
        console.log(`${nome}, você é menor de idade, mas ficará de maior em ${calculo} ano(s)!`)
    }
}