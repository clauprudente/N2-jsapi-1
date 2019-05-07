const app = document.getElementById('root');
const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

const request = new XMLHttpRequest();

request.open('GET', 'https://ghibliapi.herokuapp.com/films');

request.onload = function () {
    const data = JSON.parse(this.response);

    console.log(data);
    console.log(data[0].title)
    if (request.status >= 200 && request.status < 400) {

        var movies = function (item, index) {
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            const h1 = document.createElement('h1');
            h1.textContent = item.title;

            const p = document.createElement('p');
            item.description = item.description;
            p.textContent = item.description;

            container.appendChild(card);
            card.appendChild(h1);
            card.appendChild(p);
        }

        data.forEach(movies);
    }

    else {
        console.log('Erro')
    };

}

request.send();