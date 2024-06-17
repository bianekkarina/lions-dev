function calculadora(a, b, c) {
    if (c == '+') {
        return a + b
    } else if (c == '-') {
        return a - b
    } else if (c == '*') {
        return a * b
    } else {
        return a / b
    }
}

console.log(calculadora(8, 2, '+'))
console.log(calculadora(8, 2, '-'))
console.log(calculadora(8, 2, '*'))
console.log(calculadora(8, 2, '/'))