var coresFavoritas =['preto', 'azul', 'verde']
var coresEspeciais = []
var corDoUsuario

console.log('Qual é a sua cor favorita?')
process.stdin.once('data', function(data) {
    corDoUsuario = data.toString().trim()
    paleta(corDoUsuario)
    process.exit()
})

function paleta(corDoUsuario) {
    if (coresFavoritas.includes(corDoUsuario)) {
        console.log('A sua cor favorita é uma das favoritas da turma! (Preto, azul ou verde)')  
    } else {
        console.log('A sua cor é diferente, vamos adicionar a lista!')
        coresEspeciais.push(corDoUsuario)
        console.log(`Com a sua cor favorita: ${coresFavoritas} e ${coresEspeciais}!`)
    } 
    console.log(`O número de cores favoritas da turma é ${coresFavoritas.length}!`)
}
