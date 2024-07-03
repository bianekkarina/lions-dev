function listarHorarios(pets, rl, callback) {
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
        callback()
    }
}

module.exports = {listarHorarios}