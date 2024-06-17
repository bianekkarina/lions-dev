let opcoes = ['pedra', 'papel', 'tesoura']
let escolhaComputador = ''
let escolhaUsuario
let resultado 

console.log('Escolha: pedra, papel ou tesoura?')
process.stdin.once('data', function(data) {
    escolhaUsuario = data.toString().trim()
    processamento()
    process.exit()
})

function processamento() {
    escolhaComputador = opcoes[Math.floor(Math.random() * opcoes.length)]
    console.log(escolhaComputador)
    if (escolhaUsuario == escolhaComputador) {
        console.log('Empate!') 
    } else if (escolhaUsuario == 'pedra' && escolhaComputador == 'tesoura' || escolhaUsuario == 'papel' && escolhaComputador == 'pedra' || escolhaUsuario == 'tesoura' && escolhaComputador == 'papel') {
        console.log('Você salvou o mundo!')
    } else {
        console.log('Você deixou o mundo acabar!')
    } 
} 

// Karina Bianek e José Carlos Santos Neto