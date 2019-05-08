const cep = document.getElementById('cep');

// cep.addEventListener("focusout", () => {
//     const cepVal = cep.value
//     fetch(`https://viacep.com.br/ws/${cepVal}/json/`)
//         .then(response => {
//             return response.json();
//         })
//         .then(data => {
//             document.getElementById('estado') = data.uf;

//             document.getElementById('cidade') = data.localidade;

//             document.getElementById('bairro') = data.bairro;

//             document.getElementById('endereco') = data.logradouro;
//         })
//         .catch(erro => {
//             console.log(erro)
//         })
// })
