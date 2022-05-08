// declara array de produtos
const produtos = [
    { id: 1, item: 'pastel', valor: 7.9 },
    { id: 2, item: 'coxinha de frango', valor: 6 },
    { id: 3, item: 'guaraná', valor: 4.5 },
    { id: 4, item: 'caldo de cana', valor: 12 },
    { id: 5, item: 'chocolate', valor: 3.5 }
]

// declara array de combos
const combos = [
    { combo: 1, produtos: [{ id: 1 }, { id: 3 }, { id: 5 }], desc: 0.03 },
    { combo: 2, produtos: [{ id: 1 }, { id: 2 }, { id: 3 }], desc: 0.05 },
    { combo: 3, produtos: [{ id: 1 }, { id: 4 }], desc: 0.10 }
]

// criando função de produtos e combos
const produtosCombos = (produtos, combos, combo) => {
    const validaCombo = combos.find(item => item.combo === combo)

    // verifica se combo existe
    if (!validaCombo) return 'Combo não cadastrado'

    const comboProdutos = validaCombo.produtos.map(produto => produtos.find(item => item.id === produto.id))
    const valorBruto = comboProdutos.map(produto => produto.valor).reduce((ant, atual) => ant + atual, 0)
    const aPagar = Number((valorBruto - (valorBruto * validaCombo.desc)).toFixed(2))

    const valorCombo = {
        combo: validaCombo.combo,
        produtos: comboProdutos,
        valorBruto,
        aPagar
    }

    return valorCombo
}

// chama função
console.log(produtosCombos(produtos, combos, 5))
console.log(produtosCombos(produtos, combos, 2))
