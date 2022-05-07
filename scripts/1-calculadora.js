// cria constante da função calculadora
const calculadora = (num1, num2, operador) => {
    switch (operador.toLowerCase()) {
        case 'soma':
            return `${operador}: ${num1 + num2}`
            break;
        case 'subtração':
            return `${operador}: ${num1 + num2}`
            break;
        case 'multiplicação':
            return `${operador}: ${num1 * num2}`
            break;
        case 'divisão':
            return `${operador}: ${num1 / num2}`
            break;
        case 'módulo':
            return `${operador}: ${num1 + num2}`
            break;
        case 'incremento':
            return `${operador}: ${num1 + num2}`
            break;
        case 'decremento':
            return `${operador}: ${num1 + num2}`
            break;
    
        default:
            return num1 + num2
            break;
    }
}

console.log(calculadora(1, 2, 'soma'))