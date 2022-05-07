// criando função de contas
const contas = (valores) => {
    const valor1 = valores.map(valor => valor.num1).reduce((ant, atual) => ant + atual, 0)
    const valor2 = valores.map(valor => valor.num2).reduce((ant, atual) => ant + atual, 0)
    const conta = valores.map(valor => valor.conta).reduce((ant, atual) => ant + atual, 0)

    const resultado = [valor1, valor2, conta]

    return resultado
}

// declara array de objetos com valores
const numeros = [
    { num1: 1, num2: 2, conta: 3 },
    { num1: 3, num2: 4, conta: 7 }
]
console.log(contas(numeros))