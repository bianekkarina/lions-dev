function cadastrarPet(pets, rl, callback){
	rl.question('Digite o nome do dono(a) do pet: ', (nomeDoDono) => {
		rl.question('Digite o nome do pet: ', (nomeDoPet) => {
			rl.question('Digite a raça do pet: ', (raca) => {
				rl.question('Digite o tipo de serviço: ', (servico) => {
					rl.question('Digite o horario: ', (horario) => {
						pets.push({
							nomeDoDono:nomeDoDono,
							nomeDoPet:nomeDoPet,
							raca:raca, 
							servico:servico,
							horario:horario,
							concluido: 'Pendente'
						})
							console.log('\nPet adicionado com sucesso!')
							callback()
					})
						
				})
			})

		})
	})
	
}

module.exports = {cadastrarPet}