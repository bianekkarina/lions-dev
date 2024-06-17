function calculadora(a, b, c) {
    switch (c) {
        case '+':
            return a + b
        break;
        case '-':
            return a - b
        break;
        case '*':
            return a * b
        break;
        case '/':
            return a / b
        break;
        default:
            console.log('Operação não reconhecida!')
        break;

    }
}

console.log(calculadora(5, 5, '+'))
console.log(calculadora(5, 5, '-'))
console.log(calculadora(5, 5, '*'))
console.log(calculadora(5, 5, '/'))
console.log(calculadora(5, 5, '~'))

