class Produto {
    constructor() {
        this.produtos = localStorage.getItem('tbProdutos') === null
        ? []
        : JSON.parse(localStorage.getItem('tbProdutos'))
    }

    salva(produto){
        this.produtos.push(produto)
        localStorage.setItem('tbProdutos', JSON.stringify(this.produtos))
        alert('Produto salvo com sucesso!')
    }
}
const produto = new Produto()
document.getElementById('salvar').onclick = function () {
    const registro = {
        codigoo: document.getElementById('codigoo').value,
        nomee: document.getElementById('nomee').value,
        preco: document.getElementById('preco').value,
        lucro: document.getElementById('lucro').value,
        venda: document.getElementById('venda').value,
        icms: document.getElementById('icms').value,
        tributaria: document.getElementById('tributaria').value,
        nfe: document.getElementById('nfe').value,
        ncm: document.getElementById('ncm').value,
        unidade: document.getElementById('unidade').value,
        marca: document.getElementById('marca').value,
        categoria: document.getElementById('categoria').value,
        nacional: document.getElementById('nacional').value,
        barra: document.getElementById('barra').value
    }
    
    produto.salva(registro)
}
document.getElementById('lucro').onchange = function realiza_calculo()
{
    let preco = document.getElementById('preco').value
    let lucro = document.getElementById('lucro').value
    let venda = preco*(lucro/100)+preco

    document.getElementById('venda').value = venda.toFixed(2)
}
