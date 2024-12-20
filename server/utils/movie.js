const request = require("postman-request");

function getMovies(movieSearch, callback) {
    const url = 'https://api.themoviedb.org/3/search/movie?query=' + encodeURIComponent(movieSearch) + '&include_adult=false&language=en-US&page=1';
    const options = {
        url,
        json: true,
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWU0ODNiNjBjOGYxNmRjOTM0OTM5ZDRhMThhN2NmNiIsIm5iZiI6MTczNDQ2MDI1NC43MjQsInN1YiI6IjY3NjFjMzVlN2EwZmQ4OGUyN2ZiMzNiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._sHTBjna_Fp0spAqVTgUfojqF_3hIAR6kKYCyGhSc9c' 
        }
    };
    request(options, (error, response) => {
        if (error) {
            callback('Unable to connect to Movie API.', undefined)
        } else if (response.statusCode != 200) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, response)
        }
    })
}

module.exports = getMovies