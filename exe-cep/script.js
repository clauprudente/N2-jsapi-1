const cep = document.getElementById('cep');

cep.addEventListener("focusout", () => {
    const cepVal = cep.value
    fetch(`https://viacep.com.br/ws/${cepVal}/json/`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            document.getElementById('estado') = data.uf;

            document.getElementById('cidade') = data.localidade;

            document.getElementById('bairro') = data.bairro;

            document.getElementById('endereco') = data.logradouro;
        })
        .catch(erro => {
            console.log(erro)
        })
})

// cep.onkeyup = (e) => {
//     setTimeout(() => {
//         let linkApi = 'https://viacep.com.br/ws/' + cep.value + '/json/';
//         fetch(linkApi)
//             .then(response => {
//                 return response.json();
//             })
//             .then(data => {
//                 if (status === 0) {

//                 }
//                 else {
//                     let estado = document.getElementById('estado');
//                     estado.value = data.uf;

//                     let cidade = document.getElementById('cidade');
//                     cidade.value = data.localidade;

//                     let bairro = document.getElementById('bairro');
//                     bairro.value = data.bairro;

//                     let endereco = document.getElementById('endereco');
//                     endereco.value = data.logradouro;
//                     document.getElementsByClassName('form').refresh
//                 }
//             })
//             .catch(erro => {
//                 console.log(erro);
//             })
//     }, 2500);

// }