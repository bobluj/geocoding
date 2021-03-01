const keyword = document.querySelector('#keyword');
const buttton = document.querySelector('#button');
const movies = document.querySelector('#movies');

const searchMovie = (movie) => {
    

    fetch(url)                          // Le fetch va chercher l'instruction
    .then(response => response.json())  // parse la réponse en json
    .then((data) => {                   // récupère le tableau d'objets
        // Générer le visuel
        for (const movie of data.Search){
            console.log(movie);
            movies.insertAdjacentHTML('beforeEnd', 
            `
                <li>
                    <img src="${movie.Poster}" alt="Affiche de ${movie.Title}">
                    <p>${movie.Title}</p>
                </li>
            `);
        }
    })
    .catch((error) => {                 // afficher une erreur
        console.log(`Voici mon erreur ${error}`);
    });
}


buttton.addEventListener('click', (event) => {
    event.preventDefault();
    // j'efface le contenu de mon ul pour le recréer derrière
    movies.innerHTML = '';
    
    //const url = 'http://www.omdbapi.com/?s=harry%20potter&apikey=adf1f2d7';
    //const url = 'http://www.omdbapi.com/?s=batman&apikey=adf1f2d7';
    // const url = `http://www.omdbapi.com/?s=${keyword.value}&apikey=adf1f2d7`;

    // fetch(url)                          // Le fetch va chercher l'instruction
    // .then(response => response.json())  // parse la réponse en json
    // .then((data) => {                   // récupère le tableau d'objets
    //     console.log(data);
    //     for (const movie of data.Search){
    //         console.log(movie);
    //         movies.insertAdjacentHTML('beforeEnd', 
    //         `
    //             <li>
    //                 <img src="${movie.Poster}" alt="Affiche de ${movie.Title}">
    //                 <p>${movie.Title}</p>
    //             </li>
    //         `);
    //     }
    // })
    // .catch((error) => {                 // afficher une erreur
    //     console.log(`Voici mon erreur ${error}`);
    // });

    searchMovie(keyword.value);

    // Depuis rapidApi
    // fetch("https://covid19-data.p.rapidapi.com/geojson-na", {
    //     "method": "GET",
    //     "headers": {
    //         "x-rapidapi-key": "c99709022amsh801d4b464b0bbf0p10e63cjsn04dcfb9af2be",
    //         "x-rapidapi-host": "covid19-data.p.rapidapi.com"
    //     }
    // })
    // .then(response => response.json())
    // .then((data) => {
    //     console.log(response);
    // })
    // .catch(error => {
    //     console.error(error);
    // });
});

// Affichage par défaut
searchMovie('batman');