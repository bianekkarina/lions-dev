const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let livros = []

exibirMenu()

function exibirMenu() {
    console.log(`
    Bem Vindo ao Menu:
    1. Catalogar livro
    2. Listar todos os livros
    3. Remover livro
    4. Editar informações
    5. Sair
	`)

rl.question('Escolha uma opção do menu: ', (opcao) => {
    switch(opcao) {
        case '1':
            catalogarLivro()
            break;
        case '2': 
            listarLivros()
            break;
        case '3':
            removerLivro()
            break;
        case '4':
            editarInfos()
            break;
        case '5':
            console.log('Mas já? Poxa, volte sempre! :)')
            rl.close()
            break;
        default:
            console.log('Opção inválida, bobão! Tente outra vez.')
            exibirMenu()
            break;
    }
 })
}

function catalogarLivro() {
    rl.question('Digite o nome do livro: ', (nomeLivro) => {
        rl.question('Digite o autor(a) do livro: ', (autorLivro) => {
            rl.question('Digite o número de páginas do livro: ', (paginasLivro) => {
                rl.question('Informe qual o genêro do livro: ', (generoLivro) => {
                    livros.push({Nome: nomeLivro, Autor: autorLivro, Páginas: paginasLivro, Genêro: generoLivro})
                    console.log('\nYay! Livro catalogado com maestria!')
                    exibirMenu()
                })
            })
        })
    })
}

function listarLivros() {
    if (livros.length === 0) {
        console.log('\nCara, nenhum livro foi catalogado ainda!')
        exibirMenu()
    } else {
        console.log('\nLista de livros catalogados:')
        livros.forEach((livro, index) => {
            console.log(`
            ${index + 1}. Nome do livro: ${livro.Nome}
            Autor(a): ${livro.Autor}
            Páginas: ${livro.Páginas}
            Genêro: ${livro.Genêro}
            `)
        })
        exibirMenu()
    }
}

function editarInfos() {
    if (livros.length === 0) {
        console.log('\nCara, nenhum livro foi catalogado ainda!')
        exibirMenu()
    } else {
        console.log('\nLista de livros catalogados:')
        livros.forEach((livro, index) => {
            console.log(`${index + 1}. Nome do livro: ${livro.Nome}, Autor(a): ${livro.Autor}, Páginas: ${livro.Páginas}, Genêro: ${livro.Genêro}`)
    })
    rl.question('\nDigite o número do livro que deseja editar: ', (numero) => {
        const index = parseInt(numero) - 1
        if (index >= 0 && index < livros.length) {
            const livro = livros[index]
            rl.question('Informe o novo nome do livro: ', (novoNome) => {
                rl.question('Infrome o novo autor(a): ', (novoAutor) => {
                    rl.question('Informe o novo número de páginas: ', (novaPagina) => {
                        rl.question('Informe o novo genêro: ', (novoGenero) => {
                            livros[index] = {
                                Nome: novoNome || livro.Nome,
                                Autor: novoAutor || livro.Autor,
                                Páginas: novaPagina || livro.Páginas,
                                Genêro: novoGenero || livro.Genêro
                            }
            console.log('Divou! Livro editado com maestria!')
            exibirMenu()
                        })
                    })
                })
            })
        } else {
            console.log('Número inválido, bobão! Tente novamente.')
            exibirMenu()
        }
    })
 }
}

function removerLivro() {
    if (livros.length === 0) {
        console.log('\nCara, nenhum livro foi catalogado ainda!')
        exibirMenu()
    } else {
        console.log('\nLista de livros catalogados:')
        livros.forEach((livro, index) => {
            console.log(`${index + 1}. Nome do livro: ${livro.Nome}, Autor(a): ${livro.Autor}, Páginas: ${livro.Páginas}, Genêro: ${livro.Genêro}`)
    })
    rl.question('Digite o número do livro a ser removido: ', (numero) => {
        const index = parseInt(numero) - 1
        if (index >= 0 && index < livros.length) {
            livros.splice(index, 1)
            console.log('Livro removido com maestria!')
            exibirMenu()
        } else {
            console.log('Número inválido, bobão! Tente novamente.')
            exibirMenu()
        }
     })
    }
}