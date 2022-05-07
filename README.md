# Instituto J&f

na pasta **scripts** tem 4 arquivos numerados com as respectivas questões 

1 - Escreva uma função que receba 3 parametros `(numero 1, numero 2 e tipo de conta)`. Quando acionada, ela irá utilizar os dois números e irá retornar a conta solicitada, por exemplo função(1,2,"soma") retorna 3;

> *Solução do desafio (arquivo `conta.js`)*

2 - Escreva uma função que receba um array de objetos `[{num1, num2, conta}, {num1, num2, conta}]` e realize todas as contas do array, retornando um array somente com os resultados.

> *Solução do desafio (arquivo `conta-em-array.js`)*

3 - Desenvolva uma função que recebe duas variáveis do tipo número (numInicial, qtd) utilizando essas propriedades, retorne um array com a sequência de fibonnacci que deve iniciar do número indicado na `numInicial` (incluindo o próprio número caso esse faça parte da sequência) e possuir a quantidade de números indicado na `qtd`.

> *Solução do desafio (arquivo `fibonacci.js`)*
>
> EX.: função (0, 5)
> Resposta: [0, 1, 1, 2, 3]
>
> EX2: função (5, 5)
> Resposta: [5, 8, 13, 21, 34]
>
> EX3: função (19, 3)
> Resposta: [21, 34, 55]


4 - Desenvolva uma função que receba dois arrays de objetos conforme abaixo:

> *Solução do desafio (arquivo `produtos.js`)*
>
> Ex.: arr1 = [
>{id: 1, item: 'pastel', valor: 7.9},
>{id: 2, item: 'coxinha de frango', valor: 6},
>{id: 3, item: 'guaraná', valor: 4.5},
>{id: 4, item: 'caldo de cana', 12},
>{id: 5, item: 'chocolate', 3.5}
>]
>
>arr2 = [
>{combo: 1, produtos: [{id: 1}, {id: 3}, {id: 5}], desc: 0.03},
>{combo: 2, produtos: [{id: 1}, {id: 2}, {id: 3}], desc: 0.05},
>{combo: 3, produtos: [{id: 1}, {id: 4}], desc: 0.10}
>]

> *A função deve receber também o número do combo selecionado. O retorno dessa função deve ser um objeto que contenha os items do combo escolhido, o valor total dos itens com soma simples e o preço total desse combo com um desconto no valor correspondente ao valor de desconto na variável desc do combo escolhido.*

>Ex: função (arr1, arr2, 5)
>Resposta: "Combo não cadastrado"
>
>Ex2: função (arr1, arr2, 2)
>Resposta: {combo: 2, produtos: `[{id: 1, item: 'pastel', valor: 7.9},{id: 2, item: 'coxinha de frango', valor: 6}, {id: 3, item: 'guaraná', valor: 4.5}], valorBruto: 18.4, aPagar: 17.48}`
