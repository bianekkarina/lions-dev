var nome = ''
console.log("Qual seu nome de usuario?")
process.stdin.on('data', function(data)
{

    var nome = data.toString();
    var saudacao = 'Olá, ' + nome 
    console.log(saudacao)
    process.exit();
})