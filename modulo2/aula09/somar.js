var somaPares = 0
var somaImpares = 0
var totalPares = 0
var totalImpares = 0
var mediaPares = 0
var mediaImpares = 0

for ( let i= 0; i <= 999; i++) {
    if (i % 2 == 0) {
        somaPares += i
        totalPares++
    } else {
        somaImpares += i
        totalImpares++
    }
}

    mediaPares = somaPares / totalPares
    mediaImpares = somaImpares / totalImpares

    console.log(`A soma dos pares é ${somaPares}`)
    console.log(`A soma dos impares é ${somaImpares}`)
    console.log(`O total dos impares é ${totalImpares}`)
    console.log(`O total dos pares é ${totalPares}`)
    console.log(`A média dos impares é ${mediaImpares}`)
    console.log(`A média dos pares é ${mediaPares}`)

    if (mediaPares > mediaImpares) {
        console.log('A média dos pares é maior!')
    } else {
        console.log('A média dos impares é maior!')
    }