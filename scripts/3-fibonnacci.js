// cria constante da função fibonnacci
const fibonnacci = (numInicial, qtd) => {

    // validação para números negativos
    if ( numInicial < 0 || qtd < 0 ) return 'Digite apenas números positivos'

    // declaração de variáveis
    let soma = 0
    let anterior = 0
    let proximo = 1
    let arrayFibonnacci = []

    for (let i = 0; i < (numInicial + qtd); i++) {
        soma = anterior + proximo
        arrayFibonnacci.push(anterior)
        anterior = proximo
        proximo = soma
    }

    if (arrayFibonnacci.indexOf(numInicial) !== -1) {
        const inicio = arrayFibonnacci.indexOf(numInicial)
        const final = arrayFibonnacci.indexOf(numInicial) + qtd
        return arrayFibonnacci.slice(inicio, final)
    } else {
        const inicio = arrayFibonnacci.indexOf(arrayFibonnacci.find(item => item > numInicial))
        const final = arrayFibonnacci.indexOf(arrayFibonnacci.find(item => item > numInicial)) + qtd
        return arrayFibonnacci.slice(inicio, final)
    }
}

console.log(fibonnacci(0, 5))
console.log(fibonnacci(5, 5))
console.log(fibonnacci(19, 3))
console.log(fibonnacci(-10, 5))