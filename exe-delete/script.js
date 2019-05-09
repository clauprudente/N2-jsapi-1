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

            card.setAttribute('id', data.data[i].id)
            card.setAttribute('class', 'card');
            botao.setAttribute('data-id', data.data[i].id)

            h2.innerHTML = data.data[i].first_name + " " + data.data[i].last_name
            p.innerHTML = data.data[i].email;
            botao.innerHTML = '✖'

            authors.appendChild(card);
            card.appendChild(h2)
            card.appendChild(p)
            card.appendChild(botao)

            botao.addEventListener('click', () => {
                const thisCard = botao.parentElement;
                const cardPai = thisCard.parentElement;
                console.log('oi');
                fetch('https://reqres.in/api/users', {
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        "id": botao.getAttribute("data-id")
                    })
                })
                    .then(dado => {
                        cardPai.removeChild(thisCard)
                    })
                    .catch(erro => {
                        console.log(erro)
                    })
            })

        }
    })
    .catch(erro => {
        console.log(erro);
    })