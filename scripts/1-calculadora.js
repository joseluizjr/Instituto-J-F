// cria constante da função calculadora
const calculadora = (num1, num2, operador) => {
    switch (operador.toLowerCase()) {
        case 'soma':
            console.log(`${operador}: ${num1 + num2}`)
            break;
        case 'subtracao':
            console.log(`${operador}: ${num1 + num2}`)
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
calculadora(1, 2, 'soma')
