// cria constante da função conta
const conta = (num1, num2, operador) => {
    if ( operador === 'soma' ) { return num1 + num2 }
    else if ( operador === 'subtracao' ) { return num1 - num2 }
    else if ( operador === 'multiplicacao' ) { return num1 * num2 }
    else if ( operador === 'divisao' ) { return num1 / num2 }
    else if ( operador === 'modulo' ) { return num1 % num2 }
    else { return num1 + num2 }
}

// chama função
console.log(conta(1, 2, 'soma'))

// cria constante da função conta
const contaV2 = (num1, num2, operador) => {
    switch (operador.toLowerCase()) {
        case 'soma':
            console.log(`${operador}: ${num1 + num2}`)
            break;
        case 'subtracao':
            console.log(`${operador}: ${num1 - num2}`)
            break;
        case 'multiplicacao':
            console.log(`${operador}: ${num1 * num2}`)
            break;
        case 'divisao':
            console.log(`${operador}: ${num1 / num2}`)
            break;
        case 'modulo':
            console.log(`${operador}: ${num1 % num2}`)
            break;
    
        default:
            console.log(`Tipo de cálculo não permitido`)
            break;
    }
}

// chama função
contaV2(1, 2, 'soma')
