// criando função de contas
const contas = (valores) => {
    const resultado = [
        valores.map(valor => {
            if ( valor.conta === 'soma' ) { return valor.num1 + valor.num2 }
            else if ( valor.conta === 'subtracao' ) { return valor.num1 - valor.num2 }
            else if ( valor.conta === 'multiplicacao' ) { return valor.num1 * valor.num2 }
            else if ( valor.conta === 'divisao' ) { return valor.num1 / valor.num2 }
            else if ( valor.conta === 'modulo' ) { return valor.num1 % valor.num2 }
            else { return 'Tipo de conta não informado' }
        })
    ]

    return resultado
}

// declara array de objetos com valores
const numeros = [
    { num1: 1, num2: 2, conta: 'soma' },
    { num1: 3, num2: 4, conta: 'multiplicacao' }
]
console.log(contas(numeros))
