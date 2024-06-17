const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let funcionarios = []

exibirMenu()

function exibirMenu() {
	console.log(`
    Menu:
    1. Cadastrar funcionário
    2. Listar todos os funcionários
    3. Exibir funcionário com maior salário
    4. Remover funcionário
    5. Editar funcionário
    6. Sair
	`)

	rl.question('Escolha uma opção: ', (opcao) => {
		switch (opcao) {
			case '1':
				cadastrarFuncionario()
				break
			case '2': 
                listarFuncionarios()
                break
            case '3':
                mostrarMaiorSalario()
                break
            case '4':
                removerFuncionario()
                break
            case '5':
                editarFuncionario()
                break
            case '6':
                console.log('Tchauzinho, até a próxima! :)')
				rl.close()
				break
			default:
				console.log('\nOpção inválida, tente novamente.')
				exibirMenu()
				break
		}
	})
}

function cadastrarFuncionario() {
	rl.question('Digite o nome do funcionário: ', (nome) => {
		rl.question('Digite o cargo do funcionário: ', (cargo) => {
			rl.question('Digite o salário do funcionário: ', (salario) => {
				funcionarios.push({ nome: nome, cargo: cargo, salario: parseFloat(salario)})
				console.log('\nFuncionário cadastrado com sucesso!')

				exibirMenu()
			})
		})
	})
}

function listarFuncionarios() {
    if (funcionarios.length == 0) {
        console.log('\nNenhum funcionário cadastrado.')
        exibirMenu()
    } else {
        console.log('\nLista de funcionários:')
        for (let i = 0; i < funcionarios.length; i++){
            console.log(funcionarios[i])
        }
        exibirMenu()
    }
}

function mostrarMaiorSalario() {
    if (funcionarios.length == 0) {
        console.log('Nenhum funcionário cadastrado.')
        } else {
        let maiorSalario = funcionarios[0]
        for (let i = 0; i < funcionarios.length; i++) {
            if (funcionarios[i].salario > maiorSalario.salario) {
                maiorSalario = funcionarios[i]
        }
    }
    console.log(maiorSalario)
    exibirMenu()
    }
}

function removerFuncionario(){
    if (funcionarios.length == 0) {
        console.log('Nenhum funcionario cadastrado.')
        exibirMenu()
    } else {
        console.log('\nLista de funcionários:')
        funcionarios.forEach((func, index) => {
            console.log(`${index + 1}. Nome: ${func.nome}, Cargo: ${func.cargo}, Salário: ${func.salario.toFixed(2)}`)
        })
        rl.question('Digite o número do funcionário a ser removido: ', (numero) => {
            const index = parseInt(numero) - 1
            if (index >= 0 && index < funcionarios.length) {
                funcionarios.splice(index, 1)
                console.log('Funcionário removido com sucesso!')
            } else {
                console.log('Número inválido, tente novamente.')
            }
            exibirMenu()
        }
        )}
}

function editarFuncionario() {
    if (funcionarios.length == 0) {
        console.log('Nenhum funcionario cadastrado.')
        exibirMenu()
    } else {
        console.log('\nLista de funcionários:')
        funcionarios.forEach((func, index) => {
            console.log(`${index + 1}. Nome: ${func.nome}, Cargo: ${func.cargo}, Salário: ${func.salario.toFixed(2)}`)
        })
        rl.question('\nDigite o número do funcionário que deseja editar: ', (numero) => {
            const index = parseInt(numero) - 1
            if (index >= 0 && index < funcionarios.length) {
                const funcionario = funcionarios[index]
                rl.question(`Novo nome(${funcionario.nome}): `, (novoNome) => {
                    rl.question(`Novo cargo(${funcionario.cargo}): `, (novoCargo) => {
                        rl.question(`Novo salário(${funcionario.salario}): `, (novoSalario) => {
                            funcionarios[index] = {
                                nome: novoNome || funcionario.nome,
                                cargo: novoCargo || funcionario.cargo,
                                salario: parseFloat(novoSalario) || funcionario.salario
                            }
        console.log('Funcionário editado com sucesso!')
        exibirMenu()
                        })
                    })
                })
            } else {
                console.log('Número inválido, tente novamente!')
                exibirMenu()
            }
        })
    }
}