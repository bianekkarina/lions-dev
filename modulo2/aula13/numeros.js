var num = [27, 10, 3, 0, 20, 5, 6, 3]
var pares = []
var impares = []

num.push(13) 
for (let i = 0; i <= num.length; i++) {
    if (num[i] % 2 == 0) {
         pares.push(num[i])
    } else if (num[i] % 2 != 0) {
        impares.push(num[i])
    }
}
console.log(`Os números pares desse vetor são, respectivamente: ${pares}`)
console.log(`Os números impares desse vetor são, respectivamente:${impares}`)
