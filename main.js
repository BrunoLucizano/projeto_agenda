const form = document.getElementById('form-contato');
const imgCelular = '<img src="./images/celular.png" alt="celular" />';
const imgfixo = '<img src="./images/fixo.png" alt="telefone fixo" />';
const nomes = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();

    atualizaTabela();

});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefone = document.getElementById('telefone');

    if (nomes.includes(inputNomeContato.value)) {
        alert(`O contato: ${inputNomeContato.value} já foi inserido`)
    }

    else{
        nomes.push(inputNomeContato.value);
        numeros.push(parseInt(inputTelefone.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
