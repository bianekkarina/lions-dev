const { listar } = require('./listar')

function marcarPresenca(pets, rl, callback) {
	if (pets.length === 0) {
		console.log('Nenhum pet cadastrado!')
		exibirMenu()
	} else {
		console.log('\nLista de pets cadastrados: ')
		pets.forEach((pet, index) => {
			console.log(`${index + 1}. ${pet.nomeDoPet}`)
		})
		rl.question('Digite o número do pet que você deseja marcar presença: ', (numero) => {
			if (numero > 0 && numero <= pets.length) {
				pets[numero-1].concluido = 'Concluido'
			}
			console.log("\nPresença registrada com sucesso!")
			callback()
		}
	)}
}

module.exports = {marcarPresenca}