let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
let senha = ''
let comprimentoSenha 
let numeroAleatorio

console.log('Quantos digitos terá a sua senha?') 
process.stdin.once('data', function(data) {
    comprimentoSenha = parseInt(data.toString().trim())
    processamento()
    process.exit()
})

function processamento() {
    for (let i = 0; i < comprimentoSenha; i++) {
        numeroAleatorio = Math.floor(Math.random() * caracteres.length +1)
        senha = senha + caracteres.charAt(numeroAleatorio)
    }
    console.log(`Sua senha é: ${senha}`)
}
