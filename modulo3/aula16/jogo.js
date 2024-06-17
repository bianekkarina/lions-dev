let resposta 

console.log('Qual o número de lados do dado?')
process.stdin.once('data', function(data) {
    resposta = data.toString().trim()
     console.log(Math.floor(Math.random() * resposta) + 1)
     process.exit()
})
