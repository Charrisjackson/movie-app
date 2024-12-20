
const form = document.querySelector('form');
const search = document.querySelector('input');
const message = document.querySelector('#message-1');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const movieSearch = search.value;
    message.textContent = 'Loading...';

    try {
        const response = await fetch(`/movie?search=${movieSearch}`);
        if (!response.ok) {
            message.textContent = 'Data unable to be retrieved ';
            return;
        }

        const data = await response.json();
        if (data.error) {
            message.textContent = data.error;
        } else {
            message.textContent = ''; // Clear the loading message
            data.body.results.forEach((movie) => {
                message.innerHTML += `
                
              <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">
                <p>${movie.title}</p>
                
        `;
            });
        }
    } catch (error) {
        message.textContent = ' Please try again.';
        console.error(error);
    }
});
