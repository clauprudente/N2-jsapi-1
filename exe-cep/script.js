const cep = document.getElementById('cep');

cep.addEventListener("focusout", () => {
    const cepVal = cep.value
    const linkApi = 'https://viacep.com.br/ws/' + cepVal + '/json/'
    fetch(linkApi)
        .then(response => {
            return response.json();
        })
        .then(data => {
            document.getElementById('estado').value = data.uf;

            document.getElementById('cidade').value = data.localidade;

            document.getElementById('bairro').value = data.bairro;

            document.getElementById('endereco').value = data.logradouro;
        })
        .catch(erro => {
            console.log(erro)
        })
})
