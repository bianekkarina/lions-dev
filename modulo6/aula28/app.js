const readline = require('readline')
const { cadastrarPet } = require('./cadastrar')
const { listarHorarios } = require('./listar')
const { editarHorarios } = require('./editar')
const { marcarPresenca } = require('./presenca')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let pets = []
exibirMenu()

function exibirMenu() {
	console.log(`
	Bem Vindo ao Cãobelereiros! Escolha uma opção:
	1. Cadastrar Pet
	2. Listar horários marcados
	3. Editar horários
	4. Marcar presença concluída
	5. Sair
	`)

rl.question('Escolha uma opção: ', (opcao) => {
		switch (opcao) {
			case '1':
				cadastrarPet(pets, rl, exibirMenu)
				break
			case '2':
				listarHorarios(pets, rl, exibirMenu)
				break
			case '3':
				editarHorarios(pets, rl, exibirMenu)
				break
			case '4':
				marcarPresenca(pets, rl, exibirMenu)
				break
			case '5':
				console.log('Até mais, aumigo! :)')
				rl.close()
				break
			default:
				console.log('\nOpção inválida, tente novamente.')
				exibirMenu()
				break
		}
	})
}