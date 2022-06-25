//api doc
//https://openweathermap.org/current

const input = document.getElementById('input');
const error = document.getElementById('error');
const btnSearch = document.getElementById('submit');
const btnClear = document.getElementById('clear');

const APIkey = '344f60fc9c54892e2642578e556a4af9';

const app = document.getElementById('app');
const container = document.createElement('section');
container.classList = 'container';

app.appendChild(container);

const eventWeather = () => {
    if (input.value !== '') {
        const city = input.value;
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=sp&appid=${APIkey}`;
        
        const api = async() => {
            const res = await fetch(URL);
            const data = await res.json();
            
            const card = document.createElement('article');
            card.classList = 'card';

            const nameCity = document.createElement('h2');
            nameCity.classList = 'name-city';
            nameCity.textContent = `${data.name}`;

            const tempt = document.createElement('p');
            tempt.classList = 'tempt';
            tempt.textContent = `${data.main.temp}°C`;

            const main = document.createElement('p');
            main.classList = 'main';
            main.textContent = ` ${data.weather[0].main}`;

            const description = document.createElement('p');
            description.classList = 'description';
            description.textContent = `${data.weather[0].description}`;

            const icon = document.createElement('img');
            icon.classList = 'img';
            icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

            card.append(nameCity, main, tempt, description, icon);
            container.appendChild(card);

        }
        api(); 

    }
    input.value = '';
}
eventWeather();

const deleteData = () => {
    container.textContent = '';
}

btnSearch.addEventListener('click', eventWeather);
btnClear.addEventListener('click', deleteData);



























