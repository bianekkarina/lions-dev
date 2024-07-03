const { listar } = require('./listar')

function editarHorarios(pets, rl, callback) {
	if (pets.length === 0) {
		console.log('\nNenhum pet cadastrado ainda!')
		exibirMenu()
	} else {
		console.log('\nLista de pets cadastrados:')
		pets.forEach((pet, index) => {
			console.log(` 
			${index + 1}. Nome do pet: ${pet.nomeDoPet} 
			Raça: ${pet.raca} 
			Nome do dono(a): ${pet.nomeDoDono} 
			Tipo de serviço: ${pet.servico} 
			Horário: ${pet.horario} 
			Status: ${pet.concluido}
            `)
        })

		rl.question('Digite o número do cadastro que deseja editar: ', (numero) => {
			if(numero > 0 && numero <= pets.length){
				rl.question('Digite o nome do pet: ', (nomeDoPet) => {
                    rl.question('Digite o nome do dono: ', (nomeDoDono) => {
                        rl.question('Digite a raça: ', (raca) => {
                            rl.question('Digite o tipo de serviço: ', (servico) => {
                                rl.question('Digite o novo horário: ', (horario) => {
                                    pets[numero - 1] = {
                                        nomeDoPet,
                                        nomeDoDono,
                                        raca,
                                        servico,
                                        horario
                                    }
                                    console.log('\nEditado com sucesso!')
                                    callback()
                                })
                                })
                            })
                        })
                    })
				} else {
					console.log('\nNúmero inválido, tente novamente.')
					callback()
				}
			})

	}
}

module.exports = {editarHorarios}