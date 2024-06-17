const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const numeroSorteado = Math.floor(Math.random() * 100 + 1)
const tentativasMax = 10
let tentativas = 0

console.log('Bem Vindo ao jogo!')

function perguntar() {
    tentativas++
    if (tentativasMax < tentativas) {
        console.log(`Você é um bobão e atingiu as tentativas máximas! O número era: ${numeroSorteado}`)
        rl.close()
    } else {
    rl.question('Digite seu palpite: ', (resposta) => {
        if (resposta > 100 || resposta < 0) {
            console.log('Número invalido! Digite um número entre 0 e 100.')
            perguntar()
            return;
        } else {
        switch (true) {
            case numeroSorteado > resposta:
                console.log('Muito baixo.');
                perguntar()
                break; 
            case numeroSorteado < resposta:
                 console.log('Muito alto.');
                 perguntar()
                 break;
            case resposta != numeroSorteado:
                console.log('Inválido! Digite um número.')
                perguntar()
                break;
            default:
                console.log(`Parabéns você acertou em ${tentativas} tentativas!`);
                rl.close()
        }
        }

    })
    }
}
perguntar()