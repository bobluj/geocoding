const keyword = document.querySelector('#keyword');
const buttton = document.querySelector('#button');
const weather = document.querySelector('#weather');

// http://jsonplaceholder.typicode.com/


async function searchCity(cityWeather) {

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityWeather}&appid=f06b549afb8f5793fefeeadd02f0ee54`;

    const response = await fetch(url);
    const data = await response.json();  // parse la réponse en json
    // console.log(data);                // récupère le tableau d'objets
    // Générer le visuel
    weather.insertAdjacentHTML('beforeEnd',
        `
                <li>
                    <p>${data.main.temp}</p>
                    <p>${data.weather[0].main}</p >
                </li >
        `);
    const lon = (data.coord.lon);
    const lat = (data.coord.lat);
    // })
    // .catch((error) => {                 // afficher une erreur
    //     console.log(`Voici mon erreur ${ error }`);
    // });
    return (lon, lat);
}

buttton.addEventListener('click', (event) => {
    event.preventDefault();
    // j'efface le contenu de mon ul pour le recréer derrière
    weather.innerHTML = '';
    searchCity(keyword.value);
});

// Affichage par défaut
console.log(searchCity('marseille'));



// Map leaflet afficher carte 

// trouver moyen recuperer les données
const lon = (data.coord.lon);
console.log(lon);
const lat = (data.coord.lat);
console.log(lat)
var mymap = L.map('mapid').setView([data.coord.lon, data.coord.lat], 15);


// Ma carte editer L.marker([lon, lat])
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYm9ibHVqIiwiYSI6ImNrbDZlamZ5cjBvY3AycXFwMjBld3Z6dHQifQ.TQZ_hC2G_zTC-KKFbGj79Q', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYm9ibHVqIiwiYSI6ImNrbDZlamZ5cjBvY3AycXFwMjBld3Z6dHQifQ.TQZ_hC2G_zTC-KKFbGj79Q'
}).addTo(mymap);

var marker = L.marker([lon, lat], 15).addTo(mymap);

function getgraph() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    })
};
getgraph();