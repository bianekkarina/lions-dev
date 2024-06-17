
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const numeroSorteado = Math.floor(Math.random() * 100 + 1)

function perguntar() {
    
    rl.question('digite seu palpite:', (resposta) => {
        if(numeroSorteado > resposta ) {
            console.log('muito baixo.')
            perguntar()
        } else if (numeroSorteado < resposta) {
            console.log('muito alto.')
            perguntar()
        } else{
            console.log('parabens voce acertou.')
            rl.close()
        }
    })
}
perguntar()