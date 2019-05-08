fetch('https://reqres.in/api/users')
    .then(response => {
        return response.json();
    })
    .then(data => {
        for (let i = 0; i < data.data.length; i++) {
            const authors = document.querySelector('.authors');
            const card = document.createElement('div');
            const h2 = document.createElement('h2');
            const p = document.createElement('p');
            const botao = document.createElement('button')

            card.setAttribute('class', 'card');
            botao.setAttribute('data-id', '1')

            h2.innerHTML = data.data[i].first_name + " " + data.data[i].last_name
            p.innerHTML = data.data[i].email;
            botao.innerHTML = '✖'

            authors.appendChild(card);
            card.appendChild(h2)
            card.appendChild(p)
            card.appendChild(botao)


        }
    })
    .catch(erro => {
        console.log(erro);
    })