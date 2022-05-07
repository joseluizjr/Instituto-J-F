// cria constante da função fibonacci
const fibonacci = (numInicial, qtd) => {

    // validação para números negativos
    if ( numInicial < 0 || qtd < 0 ) return 'Digite apenas números positivos'

    // declaração de variáveis
    let soma = 0
    let anterior = 0
    let proximo = 1
    let arrayFibonacci = []

    for (let i = 0; i < (numInicial + qtd); i++) {
        soma = anterior + proximo
        arrayFibonacci.push(anterior)
        anterior = proximo
        proximo = soma
    }

    if (arrayFibonacci.indexOf(numInicial) !== -1) {
        const inicio = arrayFibonacci.indexOf(numInicial)
        const final = arrayFibonacci.indexOf(numInicial) + qtd
        return arrayFibonacci.slice(inicio, final)
    } else {
        const inicio = arrayFibonacci.indexOf(arrayFibonacci.find(item => item > numInicial))
        const final = arrayFibonacci.indexOf(arrayFibonacci.find(item => item > numInicial)) + qtd
        return arrayFibonacci.slice(inicio, final)
    }
}

console.log(fibonacci(0, 5))
console.log(fibonacci(5, 5))
console.log(fibonacci(19, 3))
console.log(fibonacci(-10, 5))
