//Campos do formulário
const inProduto = document.querySelector('.produto');
const inPreco = document.querySelector('.preco');
const inCategoria = document.querySelector('.categoria');
const form = document.querySelector('#form')

//Tabela
const tabela = document.querySelector('table');
const corpoTabela = tabela.querySelector('tbody');

form.addEventListener('submit', e => {
    e.preventDefault();

    let produto = inProduto.value
    let preco = parseFloat(inPreco.value).toFixed(2)
    const categoria = inCategoria.value

    if (!produto || (preco <= 0 || isNaN(preco))) {
        alert('Insira um produto válido')
    } else {

        corpoTabela.innerHTML +=
            `
        <tr>
        <td>${produto}</td>
        <td>R$${preco}</td>
        <td class='${categoria}'>${categoria}</td>
        </tr>
     `

        form.reset();
    }
})
