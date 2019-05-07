const app = document.getElementById('root')

const author = document.createElement('div')
author.setAttribute('class', 'authors')
app.appendChild(author);

// const request = new XMLHttpRequest();

// request.open('GET', 'https://randomuser.me/api?results=10');

// request.onload = function () {
//     const data = JSON.parse(this.response).results;
//     console.log(JSON.parse(this.response));


//     if (request.status >= 200 && request.status <= 400) {

//         data.forEach(profiles => {
//             const card = document.createElement('div');
//             card.setAttribute('class', 'card');

//             const imagem = document.createElement('img');
//             imagem.src = profiles.picture.large;

//             const name = document.createElement('h2');
//             name.textContent = profiles.name.first + " " + profiles.name.last;

//             const address = document.createElement('h3');
//             address.textContent = profiles.location.city + ", " + profiles.location.state;

//             const email = document.createElement('p');
//             email.textContent = profiles.email;

//             const phone = document.createElement('p');
//             phone.textContent = profiles.phone;

//             card.appendChild(imagem);
//             card.appendChild(name);
//             card.appendChild(address);
//             card.appendChild(email);
//             card.appendChild(phone);
//             author.appendChild(card);
//         })

//     }
//     else {
//         console.log('Não foi');
//     }
// }

// request.send();

fetch('https://randomuser.me/api?results=10')
    .then(response => {
        return response.json();
    })
    .then(data => {
        data.results.forEach(profiles => {
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            const imagem = document.createElement('img');
            imagem.src = profiles.picture.large;

            const name = document.createElement('h2');
            name.textContent = profiles.name.first + " " + profiles.name.last;

            const address = document.createElement('h3');
            address.textContent = profiles.location.city + ", " + profiles.location.state;

            const email = document.createElement('p');
            email.textContent = profiles.email;

            const phone = document.createElement('p');
            phone.textContent = profiles.phone;

            card.appendChild(imagem);
            card.appendChild(name);
            card.appendChild(address);
            card.appendChild(email);
            card.appendChild(phone);
            author.appendChild(card);
        })
    })
    .catch(erro => {
        console.log(erro);
    })