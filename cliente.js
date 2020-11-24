class Cliente {
    constructor() {
        this.clientes = localStorage.getItem('tbClientes') === null
        ? []
        : JSON.parse(localStorage.getItem('tbClientes'))
    }
    
    salva(cliente){
        this.clientes.push(cliente)
        localStorage.setItem('tbClientes', JSON.stringify(this.clientes))
        alert('Cliente salvo com sucesso!')
    }
}
const cliente = new Cliente()
document.getElementById('salvar').onclick = function () {
    const registro = {
        codigo: document.getElementById('codigo').value,
        nome: document.getElementById('nome').value,
        rg: document.getElementById('rg').value,
        endereco: document.getElementById('endereco').value,
        bairro: document.getElementById('bairro').value,
        cidade: document.getElementById('cidade').value,
        cep: document.getElementById('cep').value,
        uf: document.getElementById('uf').value,
        telefone: document.getElementById('telefone').value,
        celular: document.getElementById('celular').value,
        cpf: document.getElementById('cpf').value,
        fantasia: document.getElementById('fantasia').value,
        contato: document.getElementById('contato').value,
        email: document.getElementById('email').value,
        nascimento: document.getElementById('nascimento').value,
        observacoes: document.getElementById('observacoes').value
    }
    cliente.salva(registro)
}

